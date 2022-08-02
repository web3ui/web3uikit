const EventEmitter = require('events');
const { Parser: HtmlParser } = require('htmlparser2-svelte');

const { parseAndMergeKeywords } = require('./v3-utils');
const { parseComment, hasOwnProperty } = require('../utils');
const { TemplateEvent } = require('./events');
const jsdoc = require('../jsdoc');

/**
 * @typedef {import('../../typings').Svelte3Feature} Svelte3Feature
 *
 * @typedef TemplateParserOptions
 * @property {Svelte3Feature[]} features
 * @property {boolean} includeSourceLocations
 */
class TemplateParser extends EventEmitter {
    /**
     * @param {TemplateParserOptions} options
     */
    constructor(options) {
        super();

        this.features = options.features;
        this.includeSourceLocations = options.includeSourceLocations;

        // Internal properties
        /**
         * Map of events already emitted. Check if an event exists in this map
         * before emitting it again.
         */
        this.eventsEmitted = Object.create(null); // Empty Map
    }

    /**
     * Parse the template markup and produce events with parsed data.
     * @param {string} template The template markup to parse
     */
    parse(template) {
        const options = {
            lowerCaseTags: false,
            lowerCaseAttributeNames: false,
            curlyBracesInAttributes: true
        };

        const parser = new HtmlParser(this.getTemplateHandler(), options);

        parser.write(template);
        parser.end();
    }

    getTemplateHandler() {
        let rootElementIndex = 0;
        let lastComment = null;
        let lastAttributeIndex = 0;
        let lastAttributeLocations = {};
        let lastTagName = null;
        let parser = null;

        const parseAndConsumeLastComment = (defaultVisibility) => {
            const parsedComment = parseComment(
                jsdoc.convertToJsDocComment(lastComment),
                defaultVisibility
            );

            lastComment = null;

            return parsedComment;
        };

        return {
            onparserinit: (parserInstance) => {
                parser = parserInstance;
            },
            oncomment: (data) => {
                lastComment = data.trim();
            },
            ontext: (text) => {
                if (text.trim()) {
                    lastComment = null;
                }
            },
            onattribute: (name, value) => {
                if (this.includeSourceLocations && parser.startIndex >= 0 && parser.endIndex >= parser.startIndex) {
                    lastAttributeLocations[name] = {
                        start: lastAttributeIndex,
                        end: parser._tokenizer._index
                    };

                    lastAttributeIndex = parser._tokenizer._index;
                }

                if (this.features.includes('events')) {
                    if (lastTagName !== 'slot') {
                        // Expose events that propagated from child events
                        // Handle event syntax like ```<button on:click>Some link</button>```
                        if (name.length > 3 && name.indexOf('on:') === 0 && !value) {
                            const nameWithModificators = name.substr(3).split('|');

                            const parsedComment = parseAndConsumeLastComment();

                            const baseEvent = {
                                ...parsedComment,
                                name: nameWithModificators[0],
                                parent: lastTagName,
                                modificators: nameWithModificators.slice(1),
                                locations: this.includeSourceLocations && hasOwnProperty(lastAttributeLocations, name)
                                    ? [lastAttributeLocations[name]]
                                    : null
                            };

                            if (!hasOwnProperty(this.eventsEmitted, baseEvent.name)) {
                                this.eventsEmitted[baseEvent.name] = baseEvent;

                                parseAndMergeKeywords(parsedComment.keywords, baseEvent);

                                this.emit(TemplateEvent.EVENT, baseEvent);
                            }

                            lastComment = null;
                        }

                        // Parse event handlers
                        if (name.length > 3 && name.indexOf('on:') === 0 && value) {
                            this.emit(TemplateEvent.EXPRESSION, value);
                        }
                    }
                }
            },
            onopentagname: (tagName) => {
                lastTagName = tagName;
                lastAttributeIndex = parser._tokenizer._index;
                lastAttributeLocations = {};
            },
            onopentag: (tagName, attrs) => {
                const isNotStyleOrScript = !['style', 'script'].includes(tagName);
                const isTopLevelElement = parser._stack.length === 1;

                if (isTopLevelElement && isNotStyleOrScript) {
                    if (lastComment && rootElementIndex === 0) {
                        const parsedComment = parseAndConsumeLastComment();

                        this.emit(TemplateEvent.GLOBAL_COMMENT, parsedComment);
                    }

                    rootElementIndex += 1;
                }

                if (tagName === 'slot') {
                    if (this.features.includes('slots')) {
                        const exposedParameters = Object.keys(attrs)
                            .filter(name => name.length > 0 && name !== 'name')
                            .map(name => ({
                                name: name,
                                type: jsdoc.getDefaultJSDocType()
                            }));

                        const parsedComment = parseAndConsumeLastComment('public');

                        /** @type {import('../../typings').SvelteSlotItem} */
                        const slot = {
                            ...parsedComment,
                            name: attrs.name || 'default',
                            visibility: 'public',
                            params: exposedParameters
                        };

                        parseAndMergeKeywords(parsedComment.keywords, slot, false);

                        // TODO 5.* | Backward compatilibity
                        slot.parameters = slot.params;

                        if (this.includeSourceLocations && parser.startIndex >= 0 && parser.endIndex >= parser.startIndex) {
                            slot.loc = {
                                start: parser.startIndex,
                                end: parser.endIndex
                            };
                        }

                        this.emit(TemplateEvent.SLOT, slot);
                    }
                } else {
                    if (tagName === 'svelte:options' && attrs.tag) {
                        if (this.features.includes('name')) {
                            this.emit(TemplateEvent.NAME, attrs.tag);
                        }
                    }

                    if (this.features.includes('data')) {
                        const bindProperties = Object.keys(attrs)
                            .filter(name => name.length > 5 && name.indexOf('bind:') === 0)
                            .filter(name => name !== 'bind:this')
                            .map(name => {
                                const sourcePropertyName = name.substr(5);

                                let targetPropertyName = sourcePropertyName;

                                const attributeValue = attrs[name];

                                if (attributeValue && attributeValue.length > 0) {
                                    targetPropertyName = attributeValue;
                                }

                                return {
                                    sourcePropertyName: sourcePropertyName,
                                    targetPropertyName: targetPropertyName,
                                    parent: tagName,
                                    locations: this.includeSourceLocations && hasOwnProperty(lastAttributeLocations, name)
                                        ? [lastAttributeLocations[name]]
                                        : null
                                };
                            });

                        bindProperties.forEach(bindProperty => {
                            const dataItem = {
                                name: bindProperty.targetPropertyName,
                                kind: undefined,
                                bind: [{
                                    source: bindProperty.parent,
                                    property: bindProperty.sourcePropertyName
                                }],
                                locations: bindProperty.locations,
                                visibility: 'private',
                                static: false,
                                readonly: false
                            };

                            this.emit(TemplateEvent.DATA, dataItem);
                        });
                    }

                    if (this.features.includes('refs')) {
                        if (hasOwnProperty(attrs, 'bind:this') && attrs['bind:this']) {
                            const bindedVariableName = attrs['bind:this'];

                            const refItem = {
                                visibility: 'private',
                                name: bindedVariableName,
                                parent: tagName,
                                locations: this.includeSourceLocations && hasOwnProperty(lastAttributeLocations, 'bind:this')
                                    ? [lastAttributeLocations['bind:this']]
                                    : null
                            };

                            this.emit(TemplateEvent.REF, refItem);
                        }
                    }
                }
            }
        };
    }
}

module.exports = TemplateParser;
module.exports.TemplateEvent = TemplateEvent;

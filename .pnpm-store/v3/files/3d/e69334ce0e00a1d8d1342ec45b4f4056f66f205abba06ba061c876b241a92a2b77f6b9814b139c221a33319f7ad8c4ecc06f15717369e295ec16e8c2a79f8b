const EventEmitter = require('events');
const espree = require('espree');
const eslint = require('eslint');
const HtmlParser = require('htmlparser2-svelte').Parser;
const path = require('path');
const utils = require('./utils');
const jsdoc = require('./jsdoc');
const {
    normalize: normalizeOptions,
    validateFeatures,
    getAstDefaultOptions
} = require('./options');

const hasOwnProperty = utils.hasOwnProperty;

const SUPPORTED_FEATURES = [
    'name',
    'data',
    'computed',
    'methods',
    'actions',
    'helpers',
    'components',
    'description',
    'keywords',
    'events',
    'slots',
    'transitions',
    'refs',
    'store'
];

const EVENT_EMIT_RE = /\bfire\s*\(\s*((?:'[^']*')|(?:"[^"]*")|(?:`[^`]*`))/;

function generateSourceCode(options) {
    const generated = {
        ast: null,
        sourceCode: null,
        scriptOffset: 0,
    };

    if (!(hasOwnProperty(options.source, 'script') && options.source.script)) {
        return generated;
    }

    try {
        generated.ast = espree.parse(
            options.source.script,
            getAstDefaultOptions()
        );

        generated.sourceCode = new eslint.SourceCode({
            text: options.source.script,
            ast: generated.ast
        });
    } catch (e) {
        const script = utils.escapeImportKeyword(options.source.script);

        generated.ast = espree.parse(script, getAstDefaultOptions());

        generated.sourceCode = new eslint.SourceCode({
            text: script,
            ast: generated.ast
        });
    }

    generated.scriptOffset = options.source.scriptOffset || 0;

    return generated;
}

class Parser extends EventEmitter {
    constructor(options) {
        super();

        Parser.validateOptions(options);

        // External options
        this.filename = options.filename;
        this.source = options.source;
        this.template = options.source.template;
        this.features = options.features;
        this.includeSourceLocations = options.includeSourceLocations;

        // Internal Properties
        this.defaultMethodVisibility = utils.DEFAULT_VISIBILITY;
        this.defaultActionVisibility = utils.DEFAULT_VISIBILITY;
        this.componentName = null;
        this.eventsEmitted = {};
        this.identifiers = {};
        this.imports = {};

        // Generated Espree AST
        const { ast, sourceCode, scriptOffset } = generateSourceCode(options);

        this.ast = ast;
        this.sourceCode = sourceCode;
        this.scriptOffset = scriptOffset;
    }

    static getDefaultOptions() {
        return {
            includeSourceLocations: true,
            features: [...SUPPORTED_FEATURES]
        };
    }

    static validateOptions(options) {
        normalizeOptions(options, Parser.getDefaultOptions());

        validateFeatures(options, SUPPORTED_FEATURES);

        if ('source' in options) {
            ['script', 'scriptOffset'].forEach(key => {
                if (!(key in options.source)) {
                    throw new TypeError('options.source must have keys \'script\' and \'scriptOffset\'');
                }
            });
        }
    }

    static getEventName(feature) {
        return feature.endsWith('s')
            ? feature.substring(0, feature.length - 1)
            : feature;
    }

    parseObjectExpression(property) {
        if (!this.features.includes(property.key.name)) {
            // If events feature are enabled we should also include methods to extract events from methods
            if (!(property.key.name === 'methods' && this.features.includes('events'))) {
                return;
            }
        }

        const eventName = Parser.getEventName(property.key.name);

        property.value.properties.forEach((p) => {
            let defaultVisibility = utils.DEFAULT_VISIBILITY;

            if (property.key.name === 'methods' && this.defaultMethodVisibility) {
                defaultVisibility = this.defaultMethodVisibility;
            }

            if (property.key.name === 'actions' && this.defaultActionVisibility) {
                defaultVisibility = this.defaultActionVisibility;
            }

            const entry = utils.getCommentFromSourceCode(p, this.sourceCode, { defaultVisibility });

            if (p.type === 'ExperimentalSpreadProperty') {
                if (p.argument.name in this.identifiers) {
                    const value = this.identifiers[p.argument.name];
                    const spreadProperty = Object.assign({}, property, { value });

                    return this.parseObjectExpression(spreadProperty);
                } else {
                    return;
                }
            }

            entry.value = utils.value(p);
            entry.name = Object.keys(entry.value)[0];
            entry.value = entry.value[entry.name];

            if (this.includeSourceLocations) {
                if (p.key && p.key.start >= 0 && p.key.end >= p.key.start) {
                    entry.locations = [{
                        start: p.key.start + this.scriptOffset,
                        end: p.key.end + this.scriptOffset
                    }];
                }
            }

            if (property.key.name === 'computed') {
                if (entry.value instanceof utils.NodeFunction) {
                    entry.dependencies = utils.getDependencies(
                        entry.value, this.source.script);
                } else {
                    const value = entry.value;
                    const NodeFunction = utils.NodeFunction;

                    if (value instanceof Object && value.get instanceof NodeFunction) {
                        entry.dependencies = utils.getDependencies(
                            entry.value.get, this.source.script);
                    } else {
                        entry.dependencies = [];
                    }
                }

                delete entry.value;
            } else if (property.key.name === 'events') {
                const event = {
                    name: entry.name,
                    parent: null,
                    description: entry.description,
                    visibility: 'private',
                    keywords: entry.keywords
                };

                if (hasOwnProperty(this.eventsEmitted, event.name)) {
                    const emitedEvent = this.eventsEmitted[event.name];

                    if (emitedEvent.parent) {
                        event.visibility = 'public';

                        this.eventsEmitted[event.name] = event;

                        this.parseKeywords(entry.keywords, event);
                        this.emit('event', event);
                    } else {
                        // This event already defined
                    }
                } else {
                    this.eventsEmitted[event.name] = event;

                    this.parseKeywords(entry.keywords, event);
                    this.emit('event', event);
                }

                return;
            } else if (property.key.name === 'components') {
                if (p.value && p.value.type === 'Identifier') {
                    if (hasOwnProperty(this.imports, p.value.name)) {
                        entry.importPath = this.imports[p.value.name].sourceFilename;
                    }
                }
            } else if (entry.value instanceof utils.NodeFunction) {
                entry.params = entry.value.params.map(
                    (param) => ({ name: param.name })
                );
            } else if (property.key.name === 'data') {
                const typeKeyword = entry.keywords.find(kw => kw.name === 'type');

                if (typeKeyword) {
                    const parsedType = jsdoc.parseTypeKeyword(typeKeyword.description);

                    if (parsedType) {
                        entry.type = parsedType;
                    }
                }

                // If type can't be pased, but value are suplied, try to parse it
                if (!entry.type) {
                    if (hasOwnProperty(entry, 'value')) {
                        const parsedType = jsdoc.parseJSTypeFromValueNode(entry.value);

                        if (parsedType) {
                            entry.type = parsedType;
                        } else {
                            entry.type = {
                                kind: 'type',
                                text: 'any',
                                type: 'any'
                            };
                        }
                    } else {
                        entry.type = {
                            kind: 'type',
                            text: 'any',
                            type: 'any'
                        };
                    }
                }
            }

            delete entry.describeModel;

            this.parseKeywords(entry.keywords, entry);

            if (this.features.includes(property.key.name)) {
                this.emit(eventName, entry);
            }

            this.subWalk(entry.value);
        });
    }

    parseArrayExpression(property) {
        if (!this.features.includes(property.key.name)) {
            return;
        }

        const eventName = Parser.getEventName(property.key.name);

        property.value.elements.forEach((p) => {
            const entry = utils.getCommentFromSourceCode(p, this.sourceCode);

            entry.name = p.value;
            entry.type = jsdoc.DEFAULT_TYPE;

            delete entry.describeModel;

            this.emit(eventName, entry);
        });
    }

    parseProperty(property) {
        const propertyValue = utils.value(property);

        if (hasOwnProperty(propertyValue, 'name') && !this.componentName) {
            this.componentName = propertyValue.name;

            return;
        }

        const entryValue = propertyValue[Object.keys(propertyValue)[0]];

        this.subWalk(entryValue);
    }

    extractProperties(property) {
        switch (property.value.type) {
            case 'FunctionExpression': {
                const expression = property.value.body.body.find((p) => {
                    return p.type === 'ReturnStatement';
                });

                if (expression) {
                    if (expression.argument.type === 'ObjectExpression') {
                        return this.parseObjectExpression({
                            key: property.key,
                            value: expression.argument
                        });
                    }
                }

                this.parseProperty(property);
                break;
            }

            case 'ArrowFunctionExpression':
                if (property.value.body.type === 'ObjectExpression') {
                    this.parseObjectExpression({
                        key: property.key,
                        value: property.value.body
                    });
                } else {
                    this.parseProperty(property);
                }

                break;

            case 'ObjectExpression':
                this.parseObjectExpression(property);
                break;

            case 'ArrayExpression':
                this.parseArrayExpression(property);
                break;

            default:
                this.parseProperty(property);
        }
    }

    parseComponentName() {
        if (this.componentName === null) {
            if (this.filename) {
                this.componentName = path.parse(this.filename).name;
            }
        }

        if (this.componentName) {
            this.emit('name', utils.unCamelcase(this.componentName));
        }
    }

    walk() {
        process.nextTick(() => {
            try {
                this.internalWalk();
            } catch (error) {
                this.emit('failure', error);
            }
        });

        return this;
    }

    internalWalk() {
        if (this.template) {
            this.parseTemplate();
        }

        if (this.features.includes('name')) {
            this.parseComponentName();
        }

        if (this.ast === null) {
            return this.emit('end');
        }

        this.ast.body.forEach((body) => {
            const entry = utils.getCommentFromSourceCode(body, this.sourceCode, { defaultVisibility: this.defaultMethodVisibility, features: this.features });

            if (entry.description) {
                this.emit('description', entry.description);
            }

            if (entry.keywords.length) {
                this.emit('keywords', entry.keywords);
            }

            if (body.type === 'ImportDeclaration') {
                const specifier = body.specifiers[0];

                if (specifier && specifier.type === 'ImportDefaultSpecifier') {
                    const source = body.source;

                    if (source && source.type === 'Literal') {
                        const importEntry = {
                            identifier: specifier.local.name,
                            sourceFilename: source.value
                        };

                        if (!hasOwnProperty(this.imports, importEntry.identifier)) {
                            this.imports[importEntry.identifier] = importEntry;
                            this.emit('import', importEntry);
                        }
                    }
                }
            }

            if (body.type !== 'ExportDefaultDeclaration' && body.type !== 'ExpressionStatement') {
                if (body.type === 'VariableDeclaration') {
                    this.identifiers[body.declarations[0].id.name] = body.declarations[0].init;
                }

                return;
            }

            if (body.declaration) {
                switch (body.declaration.type) {
                    case 'ObjectExpression':
                        body.declaration.properties.forEach((property) => this.extractProperties(property));
                        break;

                    case 'Identifier':
                        if (hasOwnProperty(this.identifiers, body.declaration.name)) {
                            this.identifiers[body.declaration.name].properties.forEach((property) => this.extractProperties(property));
                        }

                        break;
                }
            } else if (body.expression !== null && body.expression.right && body.expression.right.properties) {
                body.expression.right.properties.forEach((property) => this.extractProperties(property));
            }
        });

        this.emit('end');
    }

    subWalk(entry) {
        if (entry instanceof utils.NodeFunction) {
            const tokens = utils.tokensInterval(this.ast.tokens, entry.range);

            for (let i = 0; i < tokens.length; i++) {
                const token = tokens[i];

                if (token.type === 'Identifier' && token.value === 'fire') {
                    const nextIndex = i + 2;

                    if (!tokens[nextIndex]) {
                        break;
                    }

                    if (!this.features.includes('events')) {
                        continue;
                    }

                    const next = tokens[nextIndex];
                    const event = {
                        name: null,
                        parent: null,
                        description: null,
                        visibility: utils.DEFAULT_VISIBILITY,
                        keywords: []
                    };

                    const range = [
                        tokens[i - 3].range[1],
                        tokens[i - 2].range[0]
                    ];

                    event.description = this.ast.comments.reverse().find((c) => {
                        return c.range[0] > range[0] && c.range[1] < range[1];
                    });

                    if (event.description) {
                        const comment = utils.parseComment(event.description.value);

                        event.visibility = comment.visibility;
                        event.description = comment.description || '';
                        event.keywords = comment.keywords;

                        const keyword = comment.keywords.find((keyword) => {
                            return keyword.name === 'event';
                        });

                        if (keyword) {
                            if (!keyword.description) {
                                this.emit('error', new Error('Missing keyword value for @event'));
                                continue;
                            }

                            event.name = keyword.description;
                        }
                    } else {
                        event.description = '';
                    }

                    if (event.name === null) {
                        if (this.includeSourceLocations) {
                            if (next.start >= 0 && next.end >= next.start) {
                                event.locations = [{
                                    start: next.start + this.scriptOffset,
                                    end: next.end + this.scriptOffset
                                }];
                            }
                        }

                        switch (next.type) {
                            case 'String':
                                event.name = next.value.replace(/['"]/g, '');
                                break;

                            case 'Identifier':
                                if (next.value in this.identifiers) {
                                    const startingAtFirstArg = tokens.slice(nextIndex);

                                    const chain = utils.buildPropertyAccessorChainFromTokens(startingAtFirstArg);

                                    event.name = utils.getValueForPropertyAccessorChain(this.identifiers, chain);
                                }

                                if (!event.name) {
                                    event.name = utils.getIdentifierValue(
                                        tokens, next.value, next.range[0]);

                                    if (typeof event.name === 'object') {
                                        event.name = utils.getIdentifierValueFromStart(
                                            this.ast.tokens, event.name.notFoundIdentifier);
                                    }
                                }

                                break;
                        }
                    }

                    if (!event.name) {
                        event.name = utils.UNHANDLED_EVENT_NAME;
                    } else {
                        if (hasOwnProperty(this.eventsEmitted, event.name)) {
                            const emitedEvent = this.eventsEmitted[event.name];

                            if (emitedEvent.visibility === 'public') {
                                continue;
                            }
                        }

                        this.eventsEmitted[event.name] = event;
                    }

                    this.parseKeywords(event.keywords, event);
                    this.emit('event', event);

                    i += 2;
                }
            }
        }
    }

    parseTemplate() {
        let lastComment = null;
        let lastAttributeIndex = 0;
        let lastAttributeLocations = {};

        const parser = new HtmlParser({
            oncomment: (data) => {
                lastComment = data.trim();
            },
            ontext: (text) => {
                if (text.trim()) {
                    lastComment = null;
                }
            },
            onattribute: (name) => {
                if (this.includeSourceLocations && parser.startIndex >= 0 && parser.endIndex >= parser.startIndex) {
                    lastAttributeLocations[name] = {
                        start: lastAttributeIndex,
                        end: parser._tokenizer._index
                    };

                    lastAttributeIndex = parser._tokenizer._index;
                }
            },
            onopentagname: () => {
                lastAttributeIndex = parser._tokenizer._index;
                lastAttributeLocations = {};
            },
            onopentag: (tagName, attrs) => {
                if (tagName === 'slot') {
                    if (this.features.includes('slots')) {
                        const slot = {
                            name: attrs.name || 'default',
                            visibility: 'public',
                            description: lastComment
                        };

                        if (this.includeSourceLocations && parser.startIndex >= 0 && parser.endIndex >= parser.startIndex) {
                            slot.locations = [{
                                start: parser.startIndex,
                                end: parser.endIndex
                            }];
                        }

                        this.emit('slot', slot);
                    }
                } else {
                    if (this.features.includes('refs')) {
                        const refs = Object.keys(attrs)
                            .filter(name => name.length > 4 && name.indexOf('ref:') === 0 && !attrs[name])
                            .map(name => ({
                                name: name.substr(4),
                                parent: tagName,
                                locations: this.includeSourceLocations && hasOwnProperty(lastAttributeLocations, name)
                                    ? [lastAttributeLocations[name]]
                                    : null
                            }));

                        // Fill additional informations about ref
                        refs.forEach((ref) => {
                            if (lastComment) {
                                lastComment = `/** ${lastComment} */`;
                            }

                            const comment = utils.parseComment(lastComment || '');

                            ref.visibility = comment.visibility;
                            ref.description = comment.description || '';
                            ref.keywords = comment.keywords;

                            this.parseKeywords(comment.keywords, ref);
                            this.emit('ref', ref);

                            lastComment = null;
                        });

                        lastComment = null;
                    }

                    if (this.features.includes('events')) {
                        // Expose events that propogated from child events
                        // Handle event syntax like ```<button on:click>Some link</button>```
                        const propogatedEvents = Object.keys(attrs)
                            .filter(name => name.length > 3 && name.indexOf('on:') === 0 && !attrs[name])
                            .map(name => {
                                const nameWithModificators = name.substr(3).split('|');

                                return {
                                    name: nameWithModificators[0],
                                    parent: tagName,
                                    modificators: nameWithModificators.slice(1),
                                    locations: this.includeSourceLocations && hasOwnProperty(lastAttributeLocations, name)
                                        ? [lastAttributeLocations[name]]
                                        : null
                                };
                            });

                        // Expose event firing from template methods
                        // Handle event syntax like ```<button on:click="fire('customClickEvent')">Some link</button>```
                        const firedEvents = Object.keys(attrs)
                            .map(name => {
                                const value = attrs[name];
                                const matches = EVENT_EMIT_RE.exec(value);

                                if (!matches) {
                                    return null;
                                }

                                return {
                                    name: matches[1].substr(1, matches[1].length - 2).trim(),
                                    parent: null,
                                    locations: this.includeSourceLocations && hasOwnProperty(lastAttributeLocations, name)
                                        ? [lastAttributeLocations[name]]
                                        : null
                                };
                            })
                            .filter(item => item !== null);

                        const baseEvents = propogatedEvents.concat(firedEvents);

                        // Fill additional informations about events
                        baseEvents.forEach((event) => {
                            if (lastComment) {
                                lastComment = `/** ${lastComment} */`;
                            }

                            const comment = utils.parseComment(lastComment || '');

                            event.visibility = comment.visibility;
                            event.description = comment.description || '';
                            event.keywords = comment.keywords;

                            if (!hasOwnProperty(this.eventsEmitted, event.name)) {
                                this.eventsEmitted[event.name] = event;

                                this.parseKeywords(comment.keywords, event);
                                this.emit('event', event);
                            }

                            lastComment = null;
                        });

                        lastComment = null;
                    }
                }
            }
        }, {
            lowerCaseTags: false,
            lowerCaseAttributeNames: false
        });

        parser.write(this.template);
        parser.end();
    }

    parseKeywords(keywords = [], event) {
        event.params = [];

        keywords.forEach(({ name, description }) => {
            switch (name) {
                case 'arg':
                case 'param':
                case 'argument':
                    event.params.push(jsdoc.parseParamKeyword(description));
                    break;

                case 'return':
                case 'returns':
                    event.return = jsdoc.parseReturnKeyword(description);
                    break;
            }
        });

        if (event.params.length === 0) {
            delete event.params;
        }
    }
}

module.exports = Parser;
module.exports.SUPPORTED_FEATURES = SUPPORTED_FEATURES;

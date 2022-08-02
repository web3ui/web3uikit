const EventEmitter = require('events');
const path = require('path');

const utils = require('./../utils');
const {
    normalize: normalizeOptions,
    validateFeatures,
} = require('../options');

const TemplateParser = require('./template');
const { TemplateEvent, ScriptEvent, ParserEvent } = require('./events');

const ScriptParser = require('./script');

/**
 * @typedef {import('../../typings').Svelte3Feature} Svelte3Feature
 * @type {Svelte3Feature[]}
*/
const SUPPORTED_FEATURES = [
    'name',
    'data',
    'computed',
    'methods',
    'components',
    'description',
    'keywords',
    'events',
    'slots',
    'refs'
];

class Parser extends EventEmitter {
    /**
     * @param {import('../options').SvelteParserOptions} options
     */
    constructor(options) {
        super();

        Parser.validateOptions(options);

        // External options
        this.filename = options.filename;
        this.features = options.features;
        this.includeSourceLocations = options.includeSourceLocations;
        /** @type {import("../helpers").FileStructure} */
        this.structure = options.structure;

        // Internal properties
        this.componentName = null;

        this.scriptParser = null;
        this.templateParser = null;
    }

    walk() {
        process.nextTick(() => {
            try {
                this.__walk();
            } catch (error) {
                this.emit(ParserEvent.FAILURE, error);
            }
        });

        return this;
    }

    __walk() {
        if (this.features.includes('name')) {
            this.parseComponentName();
        }

        if (this.structure.scripts && this.structure.scripts.length) {
            this.parseScriptBlocks(this.structure.scripts);
        }

        if (this.structure.template) {
            this.parseTemplate(this.structure.template);
        }

        this.emit(ParserEvent.END);
    }

    static getDefaultOptions() {
        return {
            includeSourceLocations: true,
            features: [...SUPPORTED_FEATURES],
        };
    }

    static validateOptions(options) {
        normalizeOptions(options, Parser.getDefaultOptions());

        validateFeatures(options, SUPPORTED_FEATURES);
    }

    static getEventName(feature) {
        return feature.endsWith('s')
            ? feature.substring(0, feature.length - 1)
            : feature;
    }

    parseComponentName() {
        if (this.componentName === null) {
            if (this.filename) {
                this.componentName = path.parse(this.filename).name;
            }
        }

        if (this.componentName) {
            this.emit(ParserEvent.NAME, utils.buildCamelCase(this.componentName));
        }
    }

    /**
     * @param {import('../../typings').IScopedCommentItem} comment
     */
    emitGlobalComment(comment) {
        if (comment && utils.isTopLevelComment(comment)) {
            if (this.features.includes('description')) {
                this.emit(ParserEvent.DESCRIPTION, comment.description);
            }

            if (this.features.includes('keywords')) {
                this.emit(ParserEvent.KEYWORDS, comment.keywords);
            }
        }
    }

    parseScriptBlocks(scripts) {
        const scriptParser = this.buildScriptParser();

        scriptParser.parse(scripts);

        return scriptParser;
    }

    parseTemplateJavascriptExpression(expression) {
        const scriptParser = this.buildScriptParser();

        scriptParser.parseScriptExpression(expression);

        return scriptParser;
    }

    parseTemplate(template) {
        const templateParser = this.buildTemplateParser();

        templateParser.parse(template);

        return templateParser;
    }

    buildScriptParser() {
        if (this.scriptParser) {
            return this.scriptParser;
        }

        this.scriptParser = new ScriptParser({
            features: this.features,
            includeSourceLocations: this.includeSourceLocations
        });

        this.subscribeToScriptParser(this.scriptParser);

        return this.scriptParser;
    }

    buildTemplateParser() {
        if (this.templateParser) {
            return this.templateParser;
        }

        this.templateParser = new TemplateParser({
            features: this.features,
            includeSourceLocations: this.includeSourceLocations
        });

        this.subscribeToTemplateParser(this.templateParser);

        return this.templateParser;
    }

    subscribeToScriptParser(scriptParser) {
        scriptParser.on(ScriptEvent.COMPUTED, item => {
            this.emit(ParserEvent.COMPUTED, item);
        });
        scriptParser.on(ScriptEvent.DATA, item => {
            this.emit(ParserEvent.DATA, item);
        });
        scriptParser.on(ScriptEvent.EVENT, item => {
            this.emit(ParserEvent.EVENT, item);
        });
        scriptParser.on(ScriptEvent.IMPORTED_COMPONENT, item => {
            this.emit(ParserEvent.IMPORTED_COMPONENT, item);
        });
        scriptParser.on(ScriptEvent.METHOD, item => {
            this.emit(ParserEvent.METHOD, item);
        });

        // Special cases where more parsing is required
        scriptParser.on(ScriptEvent.GLOBAL_COMMENT, (comment) => {
            this.emitGlobalComment(comment);
        });
    }

    subscribeToTemplateParser(templateParser) {
        // Forward emit of basic template events
        templateParser.on(TemplateEvent.DATA, dataItem => {
            this.emit(ParserEvent.DATA, dataItem);
        });
        templateParser.on(TemplateEvent.EVENT, eventItem => {
            this.emit(ParserEvent.EVENT, eventItem);
        });
        templateParser.on(TemplateEvent.NAME, name => {
            this.emit(ParserEvent.NAME, name);
        });
        templateParser.on(TemplateEvent.REF, refItem => {
            this.emit(ParserEvent.REF, refItem);
        });
        templateParser.on(TemplateEvent.SLOT, slotItem => {
            this.emit(ParserEvent.SLOT, slotItem);
        });

        // Special cases where more parsing is required
        templateParser.on(TemplateEvent.EXPRESSION, (expression) => {
            this.parseTemplateJavascriptExpression(expression);
        });
        templateParser.on(TemplateEvent.GLOBAL_COMMENT, (comment) => {
            this.emitGlobalComment(comment);
        });
    }
}

module.exports = Parser;
module.exports.SUPPORTED_FEATURES = SUPPORTED_FEATURES;

const CommonEvent = Object.freeze({
    /**
     * Emit the @see {SvelteDataItem} object.
     */
    DATA: 'data',
    /**
     * Emit the @see {SvelteEventItem} object.
     */
    EVENT: 'event',
    /**
     * Emit the global comment @see {IScopedCommentItem} object.
     */
    GLOBAL_COMMENT: 'global-comment',
});

const TemplateEvent = Object.freeze({
    ...CommonEvent,
    NAME: 'name',
    REF: 'ref',
    SLOT: 'slot',
    EXPRESSION: 'expression',
});

const ScriptEvent = Object.freeze({
    ...CommonEvent,
    METHOD: 'method',
    COMPUTED: 'computed',
    IMPORTED_COMPONENT: 'imported-component',
});

const ParserEvent = Object.freeze({
    NAME: 'name',
    DESCRIPTION: 'description',
    KEYWORDS: 'keywords',

    DATA: 'data',
    EVENT: 'event',
    REF: 'ref',
    SLOT: 'slot',
    METHOD: 'method',
    COMPUTED: 'computed',
    IMPORTED_COMPONENT: 'component',

    FAILURE: 'failure',
    END: 'end',
});

module.exports = {
    CommonEvent,
    TemplateEvent,
    ScriptEvent,
    ParserEvent
};

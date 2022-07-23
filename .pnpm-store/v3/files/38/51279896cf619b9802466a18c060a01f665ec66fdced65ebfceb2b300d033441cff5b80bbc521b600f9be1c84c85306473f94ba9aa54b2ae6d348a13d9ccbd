const espree = require('espree');
const eslint = require('eslint');
const EventEmitter = require('events');

const { getAstDefaultOptions } = require('../options');
const {
    hasOwnProperty,
    getCommentFromSourceCode,
    buildPropertyAccessorChainFromAst,
    getValueForPropertyAccessorChain,
    inferTypeFromVariableDeclaration,
} = require('../utils');

const {
    assertNodeType,
    getInnermostBody,
    parseFunctionDeclaration,
    parseVariableDeclaration,
    parseAndMergeKeywords,
    updateType
} = require('./v3-utils');

const jsdoc = require('./../jsdoc');

const { ScriptEvent } = require('./events');

/**
 * @typedef {import('./v3-utils').AstNode} AstNode
 */

const RE_ANONYMOUS_FUNCTION = /^{?\s*function\s+\(/i;
const RE_STATIC_SCOPE = /\scontext=('module'|"module")/gi;

/** @typedef {'default' | 'static' | 'markup'} ScopeType */

const SCOPE_DEFAULT = 'default';
const SCOPE_STATIC = 'static';
const SCOPE_MARKUP = 'markup';

/**
 * @typedef ScriptParserOptions
 * @property {Svelte3FeatureKeys[]} features
 * @property {boolean} includeSourceLocations
 */

class ScriptParser extends EventEmitter {
    /**
     * @param {ScriptParserOptions} options
     */
    constructor(options) {
        super();

        this.includeSourceLocations = options.includeSourceLocations;
        this.features = options.features;

        // Internal properties
        this.identifiers = Object.create(null); // Empty Map
        this.imports = Object.create(null); // Empty Map
        this.dispatcherConstructorNames = [];
        this.dispatcherNames = [];
    }

    /**
     * @sideEffect mutates `item.locations`.
     *
     * Attaches the node's location to the item if requested by the user.
     *
     * @param {import('../../typings').ISvelteItem} item the item to attach locations to
     * @param {{ location?: { start: number, end: number } }} node the parsed node containing a location
     * @param {{ offset: number }} context parse context containing an offset for locations
     */
    attachLocationsIfRequired(item, node, context) {
        if (this.includeSourceLocations && node.location) {
            item.locations = [{
                start: node.location.start + context.offset,
                end: node.location.end + context.offset,
            }];
        }
    }

    emitDataItem(variable, parseContext, defaultVisibility, parentComment) {
        const comment = parentComment || getCommentFromSourceCode(variable.node, parseContext.sourceCode, { defaultVisibility, useLeading: true, useTrailing: false });

        const inferredType = inferTypeFromVariableDeclaration(variable);

        /** @type {import('../../typings').SvelteDataItem} */
        const item = {
            ...comment,
            name: variable.name,
            kind: variable.kind,
            static: parseContext.scopeType === SCOPE_STATIC,
            readonly: variable.kind === 'const',
            type: inferredType,
            importPath: variable.importPath,
            originalName: variable.originalName,
            localName: variable.localName,
        };

        if (variable.declarator && variable.declarator.init) {
            item.defaultValue = variable.declarator.init.value;
        }

        if (inferredType.type === 'function') {
            parseAndMergeKeywords(comment.keywords, variable);
            inferredType.params = variable.params;
            inferredType.return = variable.return;
        }

        this.attachLocationsIfRequired(item, variable, parseContext);

        updateType(item);

        this.emit(ScriptEvent.DATA, item);
    }

    emitMethodItem(method, parseContext, defaultVisibility, parentComment) {
        const comment = parentComment || getCommentFromSourceCode(method.node, parseContext.sourceCode, { defaultVisibility });

        parseAndMergeKeywords(comment.keywords, method);

        /** @type {import('../../typings').SvelteMethodItem} */
        const item = {
            ...comment,
            name: method.name,
            params: method.params,
            return: method.return,
            static: parseContext.scopeType === SCOPE_STATIC
        };

        this.attachLocationsIfRequired(item, method, parseContext);

        this.emit(ScriptEvent.METHOD, item);
    }

    emitComputedItem(computed, parseContext, defaultVisibility) {
        const comment = getCommentFromSourceCode(computed.node, parseContext.sourceCode, { defaultVisibility });

        /** @type {import('../../typings').SvelteComputedItem} */
        const item = {
            ...comment,
            name: computed.name,
            static: parseContext.scopeType === SCOPE_STATIC,
            type: jsdoc.DEFAULT_TYPE
        };

        this.attachLocationsIfRequired(item, computed, parseContext);

        updateType(item);

        this.emit(ScriptEvent.COMPUTED, item);
    }

    emitEventItem(event, parseContext) {
        const comment = getCommentFromSourceCode(event.node, parseContext.sourceCode, { defaultVisibility: 'public' });

        /** @type {import('../../typings').SvelteEventItem} */
        const item = {
            ...comment,
            name: event.name
        };

        this.attachLocationsIfRequired(item, event, parseContext);

        this.emit(ScriptEvent.EVENT, item);
    }

    emitImportedComponentItem(component, parseContext) {
        const comment = getCommentFromSourceCode(component.node, parseContext.sourceCode, { defaultVisibility: 'private' });

        /** @type {import('../../typings').SvelteComponentItem} */
        const item = {
            ...comment,
            name: component.name,
            importPath: component.path,
        };

        this.attachLocationsIfRequired(item, component, parseContext);

        this.emit(ScriptEvent.IMPORTED_COMPONENT, item);
    }

    /**
     * @typedef {import("../helpers").HtmlBlock} HtmlBlock
     * @param {HtmlBlock[]} scripts
     */
    parse(scripts) {
        scripts.forEach(script => {
            this.parseScript(script);
        });
    }

    /**
     * @param {{ content: string; offset: number; attributes?: string }} script
     * @param {ScopeType} scope if passed, overrides the scopeType used during parsing
     */
    parseScript(script, scope) {
        const ast = espree.parse(
            script.content,
            getAstDefaultOptions()
        );
        const sourceCode = new eslint.SourceCode({
            text: script.content,
            ast: ast
        });

        const isStaticScope = RE_STATIC_SCOPE.test(script.attributes);
        const scriptParseContext = {
            scopeType: scope || (isStaticScope ? SCOPE_STATIC : SCOPE_DEFAULT),
            offset: script.offset,
            sourceCode: sourceCode
        };

        this.parseBodyRecursively(ast, scriptParseContext, 0);
    }

    /**
     * Call this to parse javascript expressions found in the template. The
     * content of the parsed scripts, such as dispatchers and identifiers, are
     * available so they will be recognized when used in template javascript
     * expressions.
     *
     * @param {string} expression javascript expression found in the template
     */
    parseScriptExpression(expression, offset = 0) {
        // Add name for anonymous functions to prevent parser error
        expression = expression.replace(RE_ANONYMOUS_FUNCTION, function (m) {
            // Preserve the curly brace if it appears in the quotes
            return m.startsWith('{') ? '{function a(' : 'function a(';
        });

        const expressionWrapper = {
            content: expression,
            offset: offset,
        };

        this.parseScript(expressionWrapper, SCOPE_MARKUP);
    }

    parseVariableDeclarations(declaration, context, level, visibility, comment = undefined) {
        if (context.scopeType === SCOPE_MARKUP) {
            return;
        }

        const variables = parseVariableDeclaration(declaration);

        variables.forEach((variable, index) => {
            if (level === 0) {
                let _comment = comment;

                if (index > 0) {
                    _comment = getCommentFromSourceCode(variable.declarator, context.sourceCode, { defaultVisibility: visibility, useLeading: true, useTrailing: false });
                }

                this.emitDataItem(variable, context, visibility, _comment);
            }

            if (!variable.declarator.init) {
                return;
            }

            const id = variable.declarator.id;
            const init = variable.declarator.init;

            // Store top level variables in 'identifiers'
            if (level === 0 && id.type === 'Identifier') {
                this.identifiers[id.name] = init;
            }

            if (init.type === 'CallExpression') {
                const callee = init.callee;

                if (init.arguments) {
                    this.parseBodyRecursively(init.arguments, context, level + 1);
                }

                if (callee.type === 'Identifier' && this.dispatcherConstructorNames.includes(callee.name)) {
                    this.dispatcherNames.push(variable.name);
                }
            } else if (init.type === 'ArrowFunctionExpression') {
                this.parseBodyRecursively(init, context, level + 1);
            }
        }
        );
    }

    parseEventDeclaration(node) {
        assertNodeType(node, 'CallExpression');

        const args = node.arguments;

        if (!args || !args.length) {
            return null;
        }

        const nameNode = args[0];

        let name;

        try {
            const chain = buildPropertyAccessorChainFromAst(nameNode);

            // This function can throw if chain is not valid
            name = getValueForPropertyAccessorChain(this.identifiers, chain);
        } catch (error) {
            name = nameNode.type === 'Literal'
                ? nameNode.value
                : undefined;
        }

        return {
            name: name,
            node: node,
            location: {
                start: nameNode.start,
                end: nameNode.end
            }
        };
    }

    /**
     *
     * @param {{ body: AstNode | AstNode[] } | AstNode[]} rootNode
     * @param {{ scopeType: ScopeType; sourceCode: eslint.SourceCode; offset: number }} parseContext
     * @param {number} level
     */
    parseBodyRecursively(rootNode, parseContext, level) {
        if (!rootNode) {
            throw TypeError('parseBodyRecursively was called without a node');
        }

        const body = getInnermostBody(rootNode);
        const nodes = Array.isArray(body) ? body : [body];

        if (nodes[0] && level === 0) {
            this.emit(ScriptEvent.GLOBAL_COMMENT, getCommentFromSourceCode(
                nodes[0],
                parseContext.sourceCode,
                { useTrailing: false, useFirst: true }
            ));
        }

        nodes.forEach((node) => {
            if (node.type === 'BlockStatement') {
                this.parseBodyRecursively(node, parseContext, level);

                return;
            }

            if (node.type === 'ExpressionStatement') {
                const expression = node.expression;

                if (expression.type === 'CallExpression') {
                    this.parseBodyRecursively(expression, parseContext, level);
                } else if (expression.type === 'ArrowFunctionExpression') {
                    this.parseBodyRecursively(expression, parseContext, level + 1);
                }

                return;
            }

            if (node.type === 'CallExpression') {
                const callee = node.callee;

                if (node.arguments) {
                    this.parseBodyRecursively(node.arguments, parseContext, level + 1);
                }

                if (callee.type === 'Identifier' && this.dispatcherNames.includes(callee.name)) {
                    const eventItem = this.parseEventDeclaration(node);

                    this.emitEventItem(eventItem, parseContext);
                }

                return;
            }

            if (node.type === 'IfStatement') {
                if (node.consequent) {
                    this.parseBodyRecursively(node.consequent, parseContext, level + 1);
                }

                if (node.alternate) {
                    this.parseBodyRecursively(node.alternate, parseContext, level + 1);
                }

                return;
            }

            if (node.type === 'VariableDeclaration' && parseContext.scopeType !== SCOPE_MARKUP) {
                this.parseVariableDeclarations(node, parseContext, level, 'private');

                return;
            }

            if (node.type === 'FunctionDeclaration') {
                const func = parseFunctionDeclaration(node);

                this.emitMethodItem(func, parseContext, 'private');
                this.parseBodyRecursively(node, parseContext, level + 1);

                return;
            }

            if (node.type === 'ExportNamedDeclaration' && level === 0 && parseContext.scopeType !== SCOPE_MARKUP) {
                const declaration = node.declaration;
                const specifiers = node.specifiers;

                if (declaration) {
                    const exportNodeComment = getCommentFromSourceCode(
                        node,
                        parseContext.sourceCode,
                        { defaultVisibility: 'public', useLeading: true, useTrailing: false }
                    );

                    if (declaration.type === 'VariableDeclaration') {
                        this.parseVariableDeclarations(
                            declaration,
                            parseContext,
                            level,
                            'public',
                            exportNodeComment
                        );
                    }

                    if (declaration.type === 'FunctionDeclaration') {
                        const func = parseFunctionDeclaration(declaration);

                        this.emitMethodItem(func, parseContext, 'public', exportNodeComment);
                        this.parseBodyRecursively(declaration, parseContext, level + 1);
                    }
                }

                if (specifiers) {
                    specifiers.forEach(specifier => {
                        if (specifier.type === 'ExportSpecifier') {
                            const subNode = specifier.exported ? 'exported' : 'local';
                            const dataItem = {
                                node: specifier,
                                name: specifier[subNode].name,
                                localName: specifier.local.name,
                                kind: 'const',
                                location: {
                                    start: specifier[subNode].start,
                                    end: specifier[subNode].end
                                }
                            };

                            this.emitDataItem(dataItem, parseContext, 'public');
                        }
                    });
                }

                return;
            }

            /**
             * Special case for reactive declarations (computed)
             * In this case, the body is not parsed recursively.
             */
            if (node.type === 'LabeledStatement' && level === 0 && parseContext.scopeType !== SCOPE_MARKUP) {
                const label = node.label;

                if (label && label.type === 'Identifier' && label.name === '$') {
                    if (node.body && node.body.type === 'ExpressionStatement') {
                        const expression = node.body.expression;

                        if (expression && expression.type === 'AssignmentExpression') {
                            const leftNode = expression.left;

                            if (leftNode.type === 'Identifier') {
                                const computedItem = {
                                    name: leftNode.name,
                                    location: {
                                        start: leftNode.start,
                                        end: leftNode.end
                                    },
                                    node: node
                                };

                                this.emitComputedItem(computedItem, parseContext, 'private');
                            }
                        }
                    }
                }

                return;
            }

            if (node.type === 'ImportDeclaration' && level === 0 && parseContext.scopeType !== SCOPE_MARKUP) {
                const specifier = node.specifiers[0];
                const source = node.source;

                if (source && source.type === 'Literal') {
                    const sourceFileName = source.value;

                    if (specifier && specifier.type === 'ImportDefaultSpecifier') {
                        const importEntry = {
                            identifier: specifier.local.name,
                            sourceFilename: sourceFileName
                        };

                        if (!hasOwnProperty(this.imports, importEntry.identifier)) {
                            this.imports[importEntry.identifier] = importEntry;

                            if (importEntry.identifier) {
                                if (importEntry.identifier[0] === importEntry.identifier[0].toUpperCase()) {
                                    const component = {
                                        node: node,
                                        name: importEntry.identifier,
                                        path: importEntry.sourceFilename,
                                        location: {
                                            start: specifier.local.start,
                                            end: specifier.local.end
                                        }
                                    };

                                    this.emitImportedComponentItem(component, parseContext);

                                    return;
                                } else {
                                    const imported = specifier.imported
                                        ? specifier.imported.name
                                        : undefined;

                                    const dataItem = {
                                        node,
                                        name: importEntry.identifier,
                                        originalName: imported || importEntry.identifier,
                                        importPath: importEntry.sourceFilename,
                                        kind: 'const',
                                        location: {
                                            start: specifier.local.start,
                                            end: specifier.local.end
                                        }
                                    };

                                    this.emitDataItem(dataItem, parseContext, 'private');
                                }
                            }
                        }
                    } else if (node.specifiers.length > 0) {
                        node.specifiers.forEach((specifier) => {
                            if (specifier.type === 'ImportSpecifier') {
                                const dataItem = {
                                    node: specifier,
                                    name: specifier.local.name,
                                    originalName: specifier.imported
                                        ? specifier.imported.name
                                        : specifier.local.name,
                                    importPath: sourceFileName,
                                    kind: 'const',
                                    location: {
                                        start: specifier.local.start,
                                        end: specifier.local.end
                                    }
                                };

                                this.emitDataItem(dataItem, parseContext, 'private');
                            }
                        });
                    }

                    // Import svelte API functions
                    if (sourceFileName === 'svelte') {
                        // Dispatcher constructors
                        node.specifiers
                            .filter(specifier => specifier.imported.name === 'createEventDispatcher')
                            .forEach(specifier => {
                                this.dispatcherConstructorNames.push(specifier.local.name);
                            });
                    }
                }

                return;
            }

            /**
             * There must be a check for body presence because otherwise
             * the parser gets stuck in an infinite loop on some nodes
             */
            if (node.body) {
                this.parseBodyRecursively(node.body, parseContext, level + 1);
            }
        });
    }
}

module.exports = ScriptParser;
module.exports.SCOPE_STATIC = SCOPE_STATIC;

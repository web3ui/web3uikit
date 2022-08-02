const {
    parseParamKeyword,
    parseReturnKeyword,
    parseTypeKeyword
} = require('../jsdoc');

const { inferTypeFromVariableDeclaration } = require('../utils');

class InvalidNodeTypeError extends TypeError {
    constructor(expected, actual = '', ...args) {
        super(expected, actual, ...args);
        this.message = `Expected node type to be '${expected}', but it was '${actual}'.`;
    }
}

/**
 * @typedef {{ type: string }} AstNode
 */

/**
 * @throws InvalidNodeTypeError if the node is not of the correct type
 * @param {AstNode} node
 * @param {string} type
 */
function assertNodeType(node, type) {
    if (node.type !== type) {
        throw new InvalidNodeTypeError(type, node.type);
    }
}

/** All `@param` JSDoc aliases. */
const PARAM_ALIASES = {
    arg: true,
    argument: true,
    param: true
};

/** All `@returns` JSDoc aliases. */
const RETURN_ALIASES = {
    return: true,
    returns: true,
};

/**
 * Returns the innermost body prop from node.
 * returns the same node if it does not have a body.
 * @param {AstNode & { body?: AstNode | AstNode[] }} node an AST node
 */
function getInnermostBody(node) {
    while (node && node.body) {
        node = node.body;
    }

    return node;
}

/**
 *
 * @param {AstNode} nodeParams Array of node parameters
 * @return {import('../../typings').SvelteMethodParamItem[]}
 */
function parseParams(nodeParams) {
    /** @type {import('../../typings').SvelteMethodParamItem[]} */
    const params = [];

    if (nodeParams && nodeParams.length) {
        nodeParams.forEach((param) => {
            if (param.type === 'Identifier') {
                params.push({
                    name: param.name
                });
            }

            if (param.type === 'AssignmentPattern') {
                const inferredType = inferTypeFromVariableDeclaration({
                    // fake variable declarator block
                    declarator: {
                        init: param.right
                    }
                });

                params.push({
                    name: param.left.name,
                    type: inferredType,
                    description: null,
                    optional: true,
                    defaultValue: param.right.raw,
                });
            }
        });
    }

    return params;
}

/**
 * @param {AstNode} node a 'FunctionDeclaration' AST node
 */
function parseFunctionDeclaration(node) {
    assertNodeType(node, 'FunctionDeclaration');

    const params = parseParams(node.params);

    const output = {
        node: node,
        name: node.id.name,
        location: {
            start: node.id.start,
            end: node.id.end
        },
        params: params,
    };

    return output;
}

/**
 * @param {AstNode} node a 'VariableDeclaration' AST node
 */
function parseVariableDeclaration(node) {
    assertNodeType(node, 'VariableDeclaration');

    const result = [];

    node.declarations.forEach(declarator => {
        const idNode = declarator.id;
        const init = declarator.init;

        if (idNode.type === 'Identifier') {
            const data = {
                name: idNode.name,
                kind: node.kind,
                node: node,
                declarator: declarator,
                location: {
                    start: idNode.start,
                    end: idNode.end
                }
            };

            if (
                init &&
                init.params &&
                (
                    init.type === 'FunctionExpression' ||
                    init.type === 'ArrowFunctionExpression'
                )
            ) {
                data.params = parseParams(init.params);
            }

            result.push(data);
        } else if (idNode.type === 'ObjectPattern') {
            idNode.properties.forEach(propertyNode => {
                const propertyIdNode = propertyNode.key;

                if (propertyIdNode.type === 'Identifier') {
                    result.push({
                        name: propertyIdNode.name,
                        kind: node.kind,
                        node: node,
                        declarator: declarator,
                        locations: {
                            start: propertyIdNode.start,
                            end: propertyIdNode.end
                        }
                    });
                }
            });
        }
    });

    return result;
}

/**
 * @sideEffect Mutates `item.type`.
 *
 * Updates `item.type` from `@type` in `item.keywords`, if any.
 *
 * @param {{ name: string; description: string}[]} item
 */
function updateType(item) {
    const typeKeyword = item.keywords.find(kw => kw.name === 'type');

    if (typeKeyword) {
        const parsedType = parseTypeKeyword(typeKeyword.description);

        if (parsedType) {
            item.type = parsedType;
        }
    }
}

/**
 * @sideEffect Mutates `event.params` and `event.return`.
 *
 * Parses the `keywords` argument and merges the result in `event`.
 *
 * If a param exists as a JSDoc `@param`, it will overwrite the param of the
 * same name already in event, if any. If a `@param` in JSDoc does
 * not match the name of an actual param of the function, it is appended at
 * end of the `event` params.
 *
 * @param {{ name: string; description: string}[]} keywords
 * @param {{ params?: any[]; return?: any }} event
 * @param {string} [allowToParseReturn=true]
 */
function parseAndMergeKeywords(keywords = [], event, allowToParseReturn = true) {
    if (!event.params) {
        event.params = [];
    }

    keywords.forEach(({ name, description }) => {
        if (name in PARAM_ALIASES) {
            const parsedParam = parseParamKeyword(description);
            const pIndex = event.params.findIndex(
                p => p.name === parsedParam.name
            );

            /*
             * Replace the param if there is already one present with
             * the same name. This will happen with parsed
             * FunctionDeclaration because params will already be
             * present from parsing the AST node.
             */
            if (pIndex >= 0) {
                if (
                    parsedParam.type &&
                    event.params[pIndex].type &&
                    parsedParam.type.text === '*'
                ) {
                    /**
                     * Only `getDefaultJSDocType()` has type.text = "*"
                     * so, if parsedParams contain that, we can be sure that
                     * type information was not found in the keyword description
                     *
                     * When that happens, we check if type data is already present
                     * from parsing the assignment pattern in the FunctionDeclaration
                     */
                    parsedParam.type = event.params[pIndex].type;
                    parsedParam.optional = event.params[pIndex].optional;
                }

                event.params[pIndex] = Object.assign(event.params[pIndex], parsedParam);
            } else {
                /*
                 * This means @param does not match an actual param
                 * in the FunctionDeclaration. For now, we keep it.
                 * TODO: Implement option to choose behaviour (keep, ignore, warn, throw)
                 */
                event.params.push(parsedParam);
            }
        } else if (name in RETURN_ALIASES) {
            if (allowToParseReturn) {
                event.return = parseReturnKeyword(description);
            }
        }
    });

    if (event.params.length === 0) {
        delete event.params;
    }
}

module.exports = {
    assertNodeType,
    getInnermostBody,
    parseFunctionDeclaration,
    parseVariableDeclaration,
    parseAndMergeKeywords,
    updateType,
};

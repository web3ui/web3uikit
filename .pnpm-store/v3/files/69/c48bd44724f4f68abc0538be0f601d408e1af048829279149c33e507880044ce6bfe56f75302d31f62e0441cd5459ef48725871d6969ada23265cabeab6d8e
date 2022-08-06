/**
 * @typedef {import('../typings').JSVisibilityScope} JSVisibilityScope
 * @type {Readonly<JSVisibilityScope[]>}
 */
const VISIBILITIES = Object.freeze(['public', 'protected', 'private']);
const RE_VISIBILITY = new RegExp(`^(${VISIBILITIES.join('|')})$`);
const RE_KEYWORDS = /@\**\s*([a-z0-9_-]+)(\s+(-\s+)?([\wÀ-ÿ\s*{}[\]()='"`_^$#&²~|\\£¤€%µ,?;.:/!§<>+¨-]+))?/ig;

const DEFAULT_VISIBILITY = 'public';
const UNHANDLED_EVENT_NAME = '****unhandled-event-name****';

const isVisibilitySupported = (v) => RE_VISIBILITY.test(v);

const getVisibility = (keywords, defaultVisibility) => {
    const keyword = keywords.find((keyword) => isVisibilitySupported(keyword.name));

    if (keyword) {
        return keyword.name;
    }

    return defaultVisibility;
};

/**
 * @param {string} text
 * @param {JSVisibilityScope} defaultVisibility
 * @return {import('../typings').IScopedCommentItem}
 */
const parseComment = (text, defaultVisibility = DEFAULT_VISIBILITY) => {
    const result = {
        keywords: [],
        visibility: defaultVisibility,
        description: '',
    };

    const parsedText = text.split(/\n/)
        .map((line) => {
            return line.trim()
                .replace(/^\/\*+/, '').trim()
                .replace(/\s*\*+\/$/, '').trim()
                .replace(/^\s*\*/, '').trim();
        })
        .join('\n')
        .trim();

    let index = 0;
    let indexDescription = parsedText.length;

    while (index < parsedText.length && index !== -1) {
        const matches = RE_KEYWORDS.exec(parsedText);

        if (!matches) {
            break;
        }

        if (index === 0) {
            indexDescription = matches.index;
        }

        index = matches.index;

        const name = matches[1];
        const description = (matches[4] || '').trim();

        result.keywords.push({ name, description });
    }

    result.description = parsedText.substring(0, indexDescription).trim();
    result.visibility = getVisibility(result.keywords, result.visibility);

    return result;
};

/**
 * @param {Node} node
 * @param {SourceCode} sourceCode
 * @param {{ defaultVisibility: string, useFirst: boolean, useLeading: boolean, useTrailing: boolean }} options
 * @return {import('../typings').IScopedCommentItem}
 */
const getCommentFromSourceCode = (node, sourceCode, {
    defaultVisibility = DEFAULT_VISIBILITY,
    useFirst = false,
    useLeading = true,
    useTrailing = true
} = {}) => {
    let lastComment = null;

    if (node) {
        const comments = sourceCode.getComments(node);

        if (useLeading && comments.leading && comments.leading.length > 0) {
            const leadingCommentIndex = useFirst ? 0 : comments.leading.length - 1;

            lastComment = comments.leading[leadingCommentIndex].value;
        }

        if (useTrailing && comments.trailing && comments.trailing.length > 0) {
            const trailingCommentIndex = useFirst ? 0 : comments.trailing.length - 1;

            lastComment = comments.trailing[trailingCommentIndex].value;
        }
    }

    if (lastComment) {
        return parseComment(lastComment, defaultVisibility);
    }

    return {
        visibility: defaultVisibility,
        description: null,
        keywords: []
    };
};

class NodeFunction {
    constructor(node) {
        Object.assign(this, node);
    }
}

const value = (property) => {
    const keyName = property.key.type === 'Literal'
        ? property.key.value
        : property.key.name;

    switch (property.value.type) {
        case 'Literal':
            return { [keyName]: property.value.value };

        case 'Identifier':
            return {
                [keyName]: property.value.name === 'undefined'
                    ? undefined
                    : property.value.name
            };

        case 'ObjectExpression':
            return { [keyName]: values(property) };

        case 'FunctionExpression':
        case 'ArrowFunctionExpression':
            return { [keyName]: new NodeFunction(property.value) };
    }

    return { [keyName]: property.value };
};

const values = (entry) => {
    const values = {};

    entry.value.properties.forEach((property) => {
        if (property.value.type === 'ObjectExpression') {
            Object.assign(values, {
                [property.key.name]: value(property)
            });
        } else {
            Object.assign(values, value(property));
        }
    });

    return values;
};
/**
 * @param {{ type: string; value: string }} token the Node token that needs to be tested
 * @param {string} which a punctuator value to compare the token's value against
 * @returns true if token is a punctuator with the correct value (if provided)
 */
const isPunctuatorToken = (token, which = undefined) => {
    if (!token) {
        return false;
    }

    const isPunctuator = token.type === 'Punctuator';
    const isSpecific = which === undefined || token.value === which;

    return isPunctuator && isSpecific;
};

/**
  * The array of tokens provided must start at the first identifier of the
  * chain, but it can go beyond the last identifier. Only the chained
  * identifiers will be parsed. Supports Dot notation and Bracket notation if
  * the brackets contain only a String Token.
  *
  * See {@link buildPropertyAccessorChainFromAst} examples for
  * expected returned values.
  *
  * @param {{ type: string; value: string }[]} tokens
 * @returns an array of property names built from the tokens array
  */
const buildPropertyAccessorChainFromTokens = (tokens) => {
    if (!tokens[0]) {
        return [];
    }

    if (!tokens[0].type === 'Identifier' && !tokens[0].type === 'String') {
        return [];
    }

    let next = tokens[0];

    const chain = [next.value];

    // Prepare first Punctuator
    let punctIndex = 1;
    let isBracket = isPunctuatorToken(tokens[punctIndex], '[');
    let isDot = isPunctuatorToken(tokens[punctIndex], '.');
    let isChained = isDot || isBracket;

    // Prepare first Identifier/String
    next = tokens[punctIndex + 1];
    let isIdentifier = next.type === 'Identifier';
    let isString = next.type === 'String';

    while (next && isChained && (isIdentifier || isString)) {
        if (isString) {
            chain.push(next.value.slice(1, next.value.length - 1));
        } else {
            chain.push(next.value);
        }

        // Find next Punctuator
        punctIndex += 2;

        if (isBracket && isPunctuatorToken(tokens[punctIndex], ']')) {
            punctIndex += 1; // Skip closing bracket ('.' vs '][')
        }

        // Prepare next Punctuator
        isBracket = isPunctuatorToken(tokens[punctIndex], '[');
        isDot = isPunctuatorToken(tokens[punctIndex], '.');
        isChained = isDot || isBracket;

        // Prepare next Identifier/String
        next = tokens[punctIndex + 1];
        isIdentifier = next.type === 'Identifier';
        isString = next.type === 'String';
    }

    return chain;
};

const isStringLiteral = (node) => {
    return node.type === 'Literal' &&
        typeof node.value === 'string';
};

/**
 * Builds an array of property names from a 'MemberExpression' node.
 *   - Supports nested 'MemberExpression' and 'Identifier' nodes
 *   - Supports bracket notation for string 'Literal' only.
 *
 * If the ast contains unsupported nodes, an empty array is returned.
 *
 * @example
 * dispatch(PLAIN.NESTED.INNER);
 * dispatch(PLAIN['NESTED'].INNER);
 * dispatch(PLAIN['NESTED']['INNER']);
 * // Parsing the 'MemberExpression' node
 * // corresponding to any of the above
 * // would return:
 * ['PLAIN', 'NESTED', 'INNER']
 *
 * @param {{ type: string; object: any, property: any, computed: boolean }} node
 * @returns an array of property names built from the ast
 */
const buildPropertyAccessorChainFromAst = (node) => {
    if (node.type === 'Identifier') {
        return [node.name];
    }

    if (node.type !== 'MemberExpression') {
        return [];
    }

    const chain = [];

    if (!node.computed || isStringLiteral(node.property)) {
        // Dot notation and minimal bracket notation support
        chain.push(...buildPropertyAccessorChainFromAst(node.object));
        chain.push(node.computed ? node.property.value : node.property.name);
    } else {
        chain.push(undefined);
    }

    return chain.includes(undefined) ? [] : chain;
};

/**
 * Builds an object expression (i.e. { ... }) from an 'ObjectExpression' node.
 * Supports a limited range of property types:
 *   - 'ObjectExpression' (nested)
 *   - 'Literal' (string, int, boolean, etc)
 *
 * @param {{ type: 'ObjectExpression'; properties: any[] }} node
 */
const buildObjectFromObjectExpression = (node) => {
    if (node.type !== 'ObjectExpression') {
        throw new TypeError("Node must be of type 'ObjectExpression' but is", node.type);
    }

    const obj = {};

    node.properties.forEach((property) => {
        if (property.value.type === 'ObjectExpression') {
            obj[property.key.name] = buildObjectFromObjectExpression(property.value);
        } else if (property.value.type === 'Literal') {
            obj[property.key.name] = property.value.value;
        }
    });

    return obj;
};

/**
 * Supports a limited range of property types:
 *   - 'ObjectExpression' (nested)
 *   - 'Literal' (string, int, boolean, etc)
 *
 * If the `chain` visits an unsupported node type or tries to access a
 * non-existing node, a default value is returned instead.
 *
 * @throws TypeError when argument `chain` is not an array of strings
 * @param {Record<string, { type: string; value?: any }>} record identifier keys mapped to ast node values
 * @param {string[]} chain an array of string used to access a value in `record`
 * @returns the value found in `record` for the provided accessor `chain`
 */
const getValueForPropertyAccessorChain = (record, chain) => {
    if (!chain.every(s => typeof s === 'string')) {
        throw new TypeError('Unsupported PropertyAccessorChain:' +
        `Expected 'chain' to be an array of strings but it was ${chain}`);
    }

    const rootExpression = record[chain[0]];

    if (rootExpression.type === 'Literal') {
        return rootExpression.value;
    }

    if (rootExpression.type !== 'ObjectExpression') {
        return UNHANDLED_EVENT_NAME;
    }

    let current = buildObjectFromObjectExpression(rootExpression);

    for (const identifier of chain.slice(1)) {
        current = current[identifier];

        if (!current) {
            return UNHANDLED_EVENT_NAME;
        }
    }

    return current;
};

const tokensInterval = (tokens, range) => {
    return tokens.filter((item) => {
        return item.range[0] > range[0] && item.range[1] < range[1];
    });
};

const getIdentifierValue = (tokens, identifierName, rangeLimit) => {
    const range = [tokens[0].range[0], rangeLimit];
    const searchingTokens = tokensInterval(tokens, range).reverse();
    const tokenIndex = searchingTokens.findIndex((item, i, array) => {
        if (item.type === 'Identifier' && item.value === identifierName) {
            const nextToken = array[i - 1];

            return nextToken.type === 'Punctuator' && nextToken.value === '=';
        }

        return false;
    });

    const valueToken = searchingTokens[tokenIndex - 2];

    if (valueToken) {
        switch (valueToken.type) {
            case 'String':
                return valueToken.value.replace(/['"]/g, '');

            case 'Identifier':
                return getIdentifierValue(
                    tokens, valueToken.value, valueToken.range[0]);
        }
    }

    return { notFoundIdentifier: identifierName };
};

const getIdentifierValueFromStart = (tokens, identifierName) => {
    const tokenIndex = tokens.findIndex((token, i, array) => {
        if (token.type === 'Identifier' && token.value === identifierName) {
            const nextToken = array[i + 1];

            return nextToken.type === 'Punctuator' && nextToken.value === '=';
        }

        return false;
    });

    if (tokenIndex !== -1) {
        const valueToken = tokens[tokenIndex + 2];

        switch (valueToken.type) {
            case 'String':
                return valueToken.value.replace(/['"`]/g, '');

            case 'Identifier':
                return getIdentifierValueFromStart(tokens, valueToken.value);
        }
    }

    return null;
};

const unCamelcase = (text) => {
    const chars = [];

    text.split('').forEach((char) => {
        if (/[A-Z]/.test(char)) {
            char = char.toLowerCase();

            if (chars.length) {
                chars.push('-');
            }
        }

        chars.push(char);
    });

    return chars.join('');
};

const buildCamelCase = (text) => {
    return text.split('').reduce((state, char) => {
        const isLegal = /[a-zA-Z]/.test(char);
        const isNumeric = /[0-9]/.test(char);

        if (isLegal || isNumeric) {
            if (state.chars.length === 0 || !state.prevIsLegal) {
                state.chars.push(char.toUpperCase());
            } else {
                state.chars.push(char);
            }
        }

        state.prevIsLegal = isLegal;

        return state;
    }, {
        chars: [],
        prevIsLegal: false
    }).chars.join('');
};

const getDependencies = (ast) => {
    const dependencies = [];

    if (ast && ast.params && ast.params.length === 1 && ast.params[0].type === 'ObjectPattern') {
        ast.params[0].properties.forEach(property => {
            dependencies.push(property.key.name);
        });
    }

    return dependencies;
};

const escapeImportKeyword = (code) => {
    return code.replace(/import/g, 'importX');
};

const expressionsMap = {
    ArrayExpression: 'array',
    ObjectExpression: 'object',
    FunctionExpression: 'function',
    ArrowFunctionExpression: 'function'
};
const anyType = { kind: 'type', text: 'any', type: 'any' };
const inferTypeFromVariableDeclaration = (variable) => {
    try {
        const value = variable.declarator.init.value;
        const typeOfValue = expressionsMap[variable.declarator.init.type] || typeof value;

        if (typeOfValue !== 'undefined') {
            return {
                kind: typeOfValue === 'function'
                    ? 'function'
                    : 'type',
                text: typeOfValue,
                type: typeOfValue,
            };
        }

        return anyType;
    } catch (error) {
        return anyType;
    }
};

/**
 * @param {import('../typings').IScopedCommentItem} comment
 */
const isTopLevelComment = (comment) => {
    return comment.keywords.some((keyword) => keyword.name === 'component');
};

const isString = (x) => typeof x === 'string' || x instanceof String;

const stringifyArray = (array = []) => array.map(s => `'${s}'`).join(', ');

const hasOwnProperty = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop);

module.exports.VISIBILITIES = VISIBILITIES;
module.exports.DEFAULT_VISIBILITY = DEFAULT_VISIBILITY;
module.exports.UNHANDLED_EVENT_NAME = UNHANDLED_EVENT_NAME;
module.exports.isVisibilitySupported = isVisibilitySupported;
module.exports.getVisibility = getVisibility;
module.exports.parseComment = parseComment;
module.exports.getCommentFromSourceCode = getCommentFromSourceCode;
module.exports.NodeFunction = NodeFunction;
module.exports.value = value;
module.exports.values = values;
module.exports.buildObjectFromObjectExpression = buildObjectFromObjectExpression;
module.exports.buildPropertyAccessorChainFromAst = buildPropertyAccessorChainFromAst;
module.exports.buildPropertyAccessorChainFromTokens = buildPropertyAccessorChainFromTokens;
module.exports.getValueForPropertyAccessorChain = getValueForPropertyAccessorChain;
module.exports.tokensInterval = tokensInterval;
module.exports.getIdentifierValue = getIdentifierValue;
module.exports.getIdentifierValueFromStart = getIdentifierValueFromStart;
module.exports.unCamelcase = unCamelcase;
module.exports.getDependencies = getDependencies;
module.exports.escapeImportKeyword = escapeImportKeyword;
module.exports.inferTypeFromVariableDeclaration = inferTypeFromVariableDeclaration;
module.exports.isTopLevelComment = isTopLevelComment;
module.exports.buildCamelCase = buildCamelCase;
module.exports.isString = isString;
module.exports.stringifyArray = stringifyArray;
module.exports.hasOwnProperty = hasOwnProperty;


const PARAM_NAME = '[a-z0-9$\\.\\[\\]_]+';

const TYPE = '\\{(.*)\\}';
const TYPE_DESC = '-?\\s*(.*)';
const PARAM_TYPE = '\\{((?:\\.\\.\\.)?[^\\}]*)=?\\}';

const TYPE_RE = new RegExp(`^\\s*${TYPE}`, 'i');
const PARAM_RE = new RegExp(`^\\s*(?:${PARAM_TYPE}\\s+)?(?:\\[\\s*(${PARAM_NAME})\\s*(?:=\\s*([^\\]]+))?\\]|(${PARAM_NAME}))(?:\\s+(?:\\-\\s+)?(.*))?`, 'i');
const RETURN_RE = new RegExp(`^\\s*(${TYPE})?(\\s*${TYPE_DESC})?`, 'i');
const TYPE_IMPORT_RE = new RegExp('^import\\s*\\(\\s*(?:\'([^\']*)\'|"([^"]*)")\\s*\\)\\.(.+)$');

const DEFAULT_TYPE = 'any';

function getDefaultJSDocType() {
    return {
        kind: 'type',
        text: '*',
        type: DEFAULT_TYPE
    };
}

function parseType(type, param) {
    if (type.indexOf('|') > -1) {
        param.type = type.split('|');
    } else if (type.startsWith('...')) {
        param.type = type.substring(3);
        param.repeated = true;
    } else if (type === '*') {
        param.type = DEFAULT_TYPE;
    } else {
        param.type = type;
    }
}

function parseJSDocType(typeValue) {
    typeValue = typeValue.trim();

    if (typeValue.indexOf('|') > -1) {
        if (typeValue.startsWith('(') && typeValue.endsWith(')')) {
            typeValue = typeValue.substring(1, typeValue.length - 1).trim();
        }

        const types = typeValue.split('|');

        return {
            kind: 'union',
            text: typeValue,
            type: types
                .map(type => parseJSDocType(type))
                .filter(type => type != null)
        };
    }

    if (typeValue.startsWith('\'') && typeValue.endsWith('\'')) {
        return {
            kind: 'const',
            text: typeValue,
            type: 'string',
            value: typeValue.substr(1, typeValue.length - 2)
        };
    }

    if (typeValue.startsWith('import(')) {
        const match = TYPE_IMPORT_RE.exec(typeValue);

        if (match) {
            const importPath = match[1] || match[2];
            const importedType = match[3];

            return {
                kind: 'type',
                text: importedType,
                type: importedType,
                importPath: importPath
            };
        }
    }

    if (typeValue === '*') {
        return {
            kind: 'type',
            text: typeValue,
            type: DEFAULT_TYPE
        };
    }

    return {
        kind: 'type',
        text: typeValue,
        type: typeValue
    };
}

function parseJSTypeFromValueNode(valueNode) {
    if (valueNode == null) {
        return null;
    }

    if (valueNode.type === 'ArrayExpression') {
        return {
            kind: 'type',
            text: 'Array<any>',
            type: 'Array<any>'
        };
    }

    if (typeof (valueNode) === 'object') {
        return {
            kind: 'type',
            text: 'any',
            type: 'any'
        };
    }

    return {
        kind: 'type',
        text: typeof (valueNode),
        type: typeof (valueNode)
    };
}

function parseTypeKeyword(text) {
    const match = TYPE_RE.exec(text);

    if (match) {
        const typeValue = match[1];

        if (typeValue) {
            return parseJSDocType(typeValue);
        }
    }

    return null;
}

function parseParamKeyword(text) {
    const param = {
        type: getDefaultJSDocType(),
        name: null,
        description: null,
        optional: false
    };

    const match = PARAM_RE.exec(text);

    if (match) {
        if (match[1]) {
            let parameterType = match[1];

            // Check if that repeated parameter, like `@param {...string} parameter`
            if (parameterType.startsWith('...')) {
                param.repeated = true;
                parameterType = parameterType.substr(3);
            }

            // Check Google Closure Compiler syntax for optional parameters, like `@param {string=} parameter`
            if (parameterType.endsWith('=')) {
                param.optional = true;
                parameterType = parameterType.substr(0, parameterType.length - 1);
            }

            param.type = parseJSDocType(parameterType);
        }

        // Optional parameter name
        if (match[2]) {
            param.name = match[2].trim();
            param.optional = true;

            if (match[3]) {
                param.defaultValue = match[3].trim();
            }
        }

        // Required parameter name
        if (match[4]) {
            param.name = match[4].trim();
        }

        // Description
        if (match[5]) {
            param.description = match[5].trim();
        }
    }

    return param;
}

function parseReturnKeyword(text) {
    const output = {
        type: getDefaultJSDocType(),
        description: null
    };

    const matches = RETURN_RE.exec(text);
    const typeMatch = matches[2]; // type, excluding curly braces

    if (typeMatch) {
        output.type = parseJSDocType(typeMatch);
    }

    const descriptionMatch = matches[4]; // description, excluding prefix

    if (descriptionMatch) {
        output.description = descriptionMatch.trim();
    }

    return output;
}

/**
 * @param {string} comment
 * @return {string}
 */
const convertToJsDocComment = (comment) => {
    if (!comment) {
        return '';
    }

    comment = comment.trim();

    // Comment content already is JSDoc format
    if (comment.startsWith('/**') && comment.endsWith('*/')) {
        return comment;
    }

    const lines = comment.split('\n');

    return lines.map((line, lineNumber) => {
        line = line.trim();

        if (lineNumber === 0) {
            if (!line.startsWith('/**')) {
                line = `/**\n * ${line}`;
            }
        }

        if (lineNumber === lines.length - 1) {
            if (!line.endsWith('*/')) {
                line = `${line}\n */`;
            }
        }

        return line.trimEnd();
    }).join('\n * ');
};

module.exports = {
    parseType,
    parseParamKeyword,
    parseReturnKeyword,
    parseTypeKeyword,
    parseJSTypeFromValueNode,

    convertToJsDocComment,
    getDefaultJSDocType,

    DEFAULT_TYPE
};

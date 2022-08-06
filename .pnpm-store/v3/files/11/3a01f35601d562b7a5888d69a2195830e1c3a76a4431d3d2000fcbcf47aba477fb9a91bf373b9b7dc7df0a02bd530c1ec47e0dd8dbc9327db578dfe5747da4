"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const doctrine_1 = __importDefault(require("doctrine"));
function getType(tagType) {
    if (!tagType) {
        return null;
    }
    switch (tagType.type) {
        case 'NameExpression':
            // {a}
            return { name: tagType.name };
        case 'UnionType':
            // {a|b}
            return {
                name: 'union',
                elements: tagType.elements
                    .map(element => getType(element))
                    .filter(Boolean),
            };
        case 'AllLiteral':
            // {*}
            return { name: 'mixed' };
        case 'TypeApplication':
            // {Array<string>} or {string[]}
            return {
                name: 'name' in tagType.expression ? tagType.expression.name : '',
                elements: tagType.applications
                    .map(element => getType(element))
                    .filter(Boolean),
            };
        case 'ArrayType':
            // {[number, string]}
            return {
                name: 'tuple',
                elements: tagType.elements
                    .map(element => getType(element))
                    .filter(Boolean),
            };
        default: {
            const typeName = 'name' in tagType && tagType.name
                ? tagType.name
                : 'expression' in tagType &&
                    tagType.expression &&
                    'name' in tagType.expression
                    ? tagType.expression.name
                    : null;
            if (typeName) {
                return { name: typeName };
            }
            else {
                return null;
            }
        }
    }
}
function getOptional(tag) {
    return !!(tag.type && tag.type.type && tag.type.type === 'OptionalType');
}
// Add jsdoc @return description.
function getReturnsJsDoc(jsDoc) {
    const returnTag = jsDoc.tags.find(tag => tag.title === 'return' || tag.title === 'returns');
    if (returnTag) {
        return {
            description: returnTag.description,
            type: getType(returnTag.type),
        };
    }
    return null;
}
// Add jsdoc @param descriptions.
function getParamsJsDoc(jsDoc) {
    if (!jsDoc.tags) {
        return [];
    }
    return jsDoc.tags
        .filter(tag => tag.title === 'param')
        .map(tag => {
        return {
            name: tag.name || '',
            description: tag.description,
            type: getType(tag.type),
            optional: getOptional(tag),
        };
    });
}
function parseJsDoc(docblock) {
    const jsDoc = doctrine_1.default.parse(docblock);
    return {
        description: jsDoc.description || null,
        params: getParamsJsDoc(jsDoc),
        returns: getReturnsJsDoc(jsDoc),
    };
}
exports.default = parseJsDoc;

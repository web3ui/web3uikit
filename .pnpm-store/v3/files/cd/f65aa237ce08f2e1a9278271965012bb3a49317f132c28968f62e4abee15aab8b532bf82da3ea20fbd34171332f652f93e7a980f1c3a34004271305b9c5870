"use strict";
/*eslint no-use-before-define: 0*/
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const docblock_1 = require("../utils/docblock");
const getMembers_1 = __importDefault(require("./getMembers"));
const getPropertyName_1 = __importDefault(require("./getPropertyName"));
const isRequiredPropType_1 = __importDefault(require("../utils/isRequiredPropType"));
const printValue_1 = __importDefault(require("./printValue"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
const resolveObjectKeysToArray_1 = __importDefault(require("./resolveObjectKeysToArray"));
const resolveObjectValuesToArray_1 = __importDefault(require("./resolveObjectValuesToArray"));
function getEnumValues(path, importer) {
    const values = [];
    path.get('elements').each(function (elementPath) {
        if (ast_types_1.namedTypes.SpreadElement.check(elementPath.node)) {
            const value = (0, resolveToValue_1.default)(elementPath.get('argument'), importer);
            if (ast_types_1.namedTypes.ArrayExpression.check(value.node)) {
                // if the SpreadElement resolved to an Array, add all their elements too
                return values.push(...getEnumValues(value, importer));
            }
            else {
                // otherwise we'll just print the SpreadElement itself
                return values.push({
                    value: (0, printValue_1.default)(elementPath),
                    computed: !ast_types_1.namedTypes.Literal.check(elementPath.node),
                });
            }
        }
        // try to resolve the array element to it's value
        const value = (0, resolveToValue_1.default)(elementPath, importer);
        return values.push({
            value: (0, printValue_1.default)(value),
            computed: !ast_types_1.namedTypes.Literal.check(value.node),
        });
    });
    return values;
}
function getPropTypeOneOf(argumentPath, importer) {
    const type = { name: 'enum' };
    const value = (0, resolveToValue_1.default)(argumentPath, importer);
    if (!ast_types_1.namedTypes.ArrayExpression.check(value.node)) {
        const objectValues = (0, resolveObjectKeysToArray_1.default)(value, importer) ||
            (0, resolveObjectValuesToArray_1.default)(value, importer);
        if (objectValues) {
            type.value = objectValues.map(objectValue => ({
                value: objectValue,
                computed: false,
            }));
        }
        else {
            // could not easily resolve to an Array, let's print the original value
            type.computed = true;
            type.value = (0, printValue_1.default)(argumentPath);
        }
    }
    else {
        type.value = getEnumValues(value, importer);
    }
    return type;
}
function getPropTypeOneOfType(argumentPath, importer) {
    const type = { name: 'union' };
    if (!ast_types_1.namedTypes.ArrayExpression.check(argumentPath.node)) {
        type.computed = true;
        type.value = (0, printValue_1.default)(argumentPath);
    }
    else {
        type.value = argumentPath.get('elements').map(function (itemPath) {
            const descriptor = getPropType(itemPath, importer);
            const docs = (0, docblock_1.getDocblock)(itemPath);
            if (docs) {
                descriptor.description = docs;
            }
            return descriptor;
        });
    }
    return type;
}
function getPropTypeArrayOf(argumentPath, importer) {
    const type = { name: 'arrayOf' };
    const docs = (0, docblock_1.getDocblock)(argumentPath);
    if (docs) {
        type.description = docs;
    }
    const subType = getPropType(argumentPath, importer);
    // @ts-ignore
    if (subType.name === 'unknown') {
        type.value = (0, printValue_1.default)(argumentPath);
        type.computed = true;
    }
    else {
        type.value = subType;
    }
    return type;
}
function getPropTypeObjectOf(argumentPath, importer) {
    const type = { name: 'objectOf' };
    const docs = (0, docblock_1.getDocblock)(argumentPath);
    if (docs) {
        type.description = docs;
    }
    const subType = getPropType(argumentPath, importer);
    // @ts-ignore
    if (subType.name === 'unknown') {
        type.value = (0, printValue_1.default)(argumentPath);
        type.computed = true;
    }
    else {
        type.value = subType;
    }
    return type;
}
/**
 * Handles shape and exact prop types
 */
function getPropTypeShapish(name, argumentPath, importer) {
    const type = { name };
    if (!ast_types_1.namedTypes.ObjectExpression.check(argumentPath.node)) {
        argumentPath = (0, resolveToValue_1.default)(argumentPath, importer);
    }
    if (ast_types_1.namedTypes.ObjectExpression.check(argumentPath.node)) {
        const value = {};
        argumentPath.get('properties').each(function (propertyPath) {
            // @ts-ignore
            if (propertyPath.get('type').value === ast_types_1.namedTypes.SpreadElement.name) {
                // It is impossible to resolve a name for a spread element
                return;
            }
            const propertyName = (0, getPropertyName_1.default)(propertyPath, importer);
            if (!propertyName)
                return;
            const descriptor = getPropType(propertyPath.get('value'), importer);
            const docs = (0, docblock_1.getDocblock)(propertyPath);
            if (docs) {
                descriptor.description = docs;
            }
            descriptor.required = (0, isRequiredPropType_1.default)(propertyPath.get('value'));
            value[propertyName] = descriptor;
        });
        type.value = value;
    }
    if (!type.value) {
        type.value = (0, printValue_1.default)(argumentPath);
        type.computed = true;
    }
    return type;
}
function getPropTypeInstanceOf(argumentPath, 
// eslint-disable-next-line @typescript-eslint/no-unused-vars
_importer) {
    return {
        name: 'instanceOf',
        value: (0, printValue_1.default)(argumentPath),
    };
}
const simplePropTypes = [
    'array',
    'bool',
    'func',
    'number',
    'object',
    'string',
    'any',
    'element',
    'node',
    'symbol',
    'elementType',
];
const propTypes = new Map([
    ['oneOf', getPropTypeOneOf],
    ['oneOfType', getPropTypeOneOfType],
    ['instanceOf', getPropTypeInstanceOf],
    ['arrayOf', getPropTypeArrayOf],
    ['objectOf', getPropTypeObjectOf],
    ['shape', getPropTypeShapish.bind(null, 'shape')],
    ['exact', getPropTypeShapish.bind(null, 'exact')],
]);
/**
 * Tries to identify the prop type by inspecting the path for known
 * prop type names. This method doesn't check whether the found type is actually
 * from React.PropTypes. It simply assumes that a match has the same meaning
 * as the React.PropTypes one.
 *
 * If there is no match, "custom" is returned.
 */
function getPropType(path, importer) {
    let descriptor = null;
    (0, getMembers_1.default)(path, true).some(member => {
        const node = member.path.node;
        let name = null;
        if (ast_types_1.namedTypes.Literal.check(node)) {
            name = node.value;
        }
        else if (ast_types_1.namedTypes.Identifier.check(node) && !member.computed) {
            name = node.name;
        }
        if (name) {
            if (simplePropTypes.includes(name)) {
                descriptor = { name: name };
                return true;
            }
            else if (propTypes.has(name) && member.argumentsPath) {
                // @ts-ignore
                descriptor = propTypes.get(name)(member.argumentsPath.get(0), importer);
                return true;
            }
        }
        return;
    });
    if (!descriptor) {
        const node = path.node;
        if (ast_types_1.namedTypes.Identifier.check(node) &&
            simplePropTypes.includes(node.name)) {
            descriptor = { name: node.name };
        }
        else if (ast_types_1.namedTypes.CallExpression.check(node) &&
            ast_types_1.namedTypes.Identifier.check(node.callee) &&
            propTypes.has(node.callee.name)) {
            // @ts-ignore
            descriptor = propTypes.get(node.callee.name)(path.get('arguments', 0));
        }
        else {
            descriptor = { name: 'custom', raw: (0, printValue_1.default)(path) };
        }
    }
    return descriptor;
}
exports.default = getPropType;

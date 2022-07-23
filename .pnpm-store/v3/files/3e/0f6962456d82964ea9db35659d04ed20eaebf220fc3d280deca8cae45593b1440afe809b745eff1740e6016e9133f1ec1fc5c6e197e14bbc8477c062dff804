"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveObjectToNameArray = void 0;
const ast_types_1 = require("ast-types");
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
function isObjectKeysCall(node) {
    return (ast_types_1.namedTypes.CallExpression.check(node) &&
        node.arguments.length === 1 &&
        ast_types_1.namedTypes.MemberExpression.check(node.callee) &&
        ast_types_1.namedTypes.Identifier.check(node.callee.object) &&
        node.callee.object.name === 'Object' &&
        ast_types_1.namedTypes.Identifier.check(node.callee.property) &&
        node.callee.property.name === 'keys');
}
function isWhitelistedObjectProperty(prop) {
    return ((ast_types_1.namedTypes.Property.check(prop) &&
        ((ast_types_1.namedTypes.Identifier.check(prop.key) && !prop.computed) ||
            ast_types_1.namedTypes.Literal.check(prop.key))) ||
        ast_types_1.namedTypes.SpreadElement.check(prop));
}
function isWhiteListedObjectTypeProperty(prop) {
    return (ast_types_1.namedTypes.ObjectTypeProperty.check(prop) ||
        ast_types_1.namedTypes.ObjectTypeSpreadProperty.check(prop) ||
        ast_types_1.namedTypes.TSPropertySignature.check(prop));
}
// Resolves an ObjectExpression or an ObjectTypeAnnotation
function resolveObjectToNameArray(object, importer, raw = false) {
    if ((ast_types_1.namedTypes.ObjectExpression.check(object.value) &&
        object.value.properties.every(isWhitelistedObjectProperty)) ||
        (ast_types_1.namedTypes.ObjectTypeAnnotation.check(object.value) &&
            object.value.properties.every(isWhiteListedObjectTypeProperty)) ||
        (ast_types_1.namedTypes.TSTypeLiteral.check(object.value) &&
            object.value.members.every(isWhiteListedObjectTypeProperty))) {
        let values = [];
        let error = false;
        const properties = ast_types_1.namedTypes.TSTypeLiteral.check(object.value)
            ? object.get('members')
            : object.get('properties');
        properties.each((propPath) => {
            if (error)
                return;
            const prop = propPath.value;
            if (ast_types_1.namedTypes.Property.check(prop) ||
                ast_types_1.namedTypes.ObjectTypeProperty.check(prop) ||
                ast_types_1.namedTypes.TSPropertySignature.check(prop)) {
                // Key is either Identifier or Literal
                // @ts-ignore
                const name = prop.key.name || (raw ? prop.key.raw : prop.key.value);
                values.push(name);
            }
            else if (ast_types_1.namedTypes.SpreadElement.check(prop) ||
                ast_types_1.namedTypes.ObjectTypeSpreadProperty.check(prop)) {
                let spreadObject = (0, resolveToValue_1.default)(propPath.get('argument'), importer);
                if (ast_types_1.namedTypes.GenericTypeAnnotation.check(spreadObject.value)) {
                    const typeAlias = (0, resolveToValue_1.default)(spreadObject.get('id'), importer);
                    if (ast_types_1.namedTypes.ObjectTypeAnnotation.check(typeAlias.get('right').value)) {
                        spreadObject = (0, resolveToValue_1.default)(typeAlias.get('right'), importer);
                    }
                }
                const spreadValues = resolveObjectToNameArray(spreadObject, importer);
                if (!spreadValues) {
                    error = true;
                    return;
                }
                values = [...values, ...spreadValues];
            }
        });
        if (!error) {
            return values;
        }
    }
    return null;
}
exports.resolveObjectToNameArray = resolveObjectToNameArray;
/**
 * Returns an ArrayExpression which contains all the keys resolved from an object
 *
 * Ignores setters in objects
 *
 * Returns null in case of
 *  unresolvable spreads
 *  computed identifier keys
 */
function resolveObjectKeysToArray(path, importer) {
    const node = path.node;
    if (isObjectKeysCall(node)) {
        const objectExpression = (0, resolveToValue_1.default)(path.get('arguments').get(0), importer);
        const values = resolveObjectToNameArray(objectExpression, importer);
        if (values) {
            const nodes = values
                .filter((value, index, array) => array.indexOf(value) === index)
                .map(value => `"${value}"`);
            return nodes;
        }
    }
    return null;
}
exports.default = resolveObjectKeysToArray;

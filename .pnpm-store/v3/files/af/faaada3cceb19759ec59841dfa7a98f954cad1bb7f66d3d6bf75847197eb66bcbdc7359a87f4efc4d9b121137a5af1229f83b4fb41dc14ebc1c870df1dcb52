"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveObjectToPropMap = void 0;
const ast_types_1 = require("ast-types");
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
function isObjectValuesCall(node) {
    return (ast_types_1.namedTypes.CallExpression.check(node) &&
        node.arguments.length === 1 &&
        ast_types_1.namedTypes.MemberExpression.check(node.callee) &&
        ast_types_1.namedTypes.Identifier.check(node.callee.object) &&
        node.callee.object.name === 'Object' &&
        ast_types_1.namedTypes.Identifier.check(node.callee.property) &&
        node.callee.property.name === 'values');
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
function resolveObjectToPropMap(object, importer, raw = false) {
    if ((ast_types_1.namedTypes.ObjectExpression.check(object.value) &&
        object.value.properties.every(isWhitelistedObjectProperty)) ||
        (ast_types_1.namedTypes.ObjectTypeAnnotation.check(object.value) &&
            object.value.properties.every(isWhiteListedObjectTypeProperty)) ||
        (ast_types_1.namedTypes.TSTypeLiteral.check(object.value) &&
            object.value.members.every(isWhiteListedObjectTypeProperty))) {
        const properties = [];
        let values = {};
        let error = false;
        const members = ast_types_1.namedTypes.TSTypeLiteral.check(object.value)
            ? object.get('members')
            : object.get('properties');
        members.each(propPath => {
            if (error)
                return;
            const prop = propPath.value;
            if (prop.kind === 'get' || prop.kind === 'set' || prop.method === true) {
                return;
            }
            if (ast_types_1.namedTypes.Property.check(prop) ||
                ast_types_1.namedTypes.ObjectTypeProperty.check(prop) ||
                ast_types_1.namedTypes.TSPropertySignature.check(prop)) {
                // Key is either Identifier or Literal
                // @ts-ignore
                const name = prop.key.name || (raw ? prop.key.raw : prop.key.value);
                const propValue = propPath.get(name).parentPath.value;
                const value = propValue.value.value ||
                    (raw ? propValue.value.raw : propValue.value.value);
                if (properties.indexOf(name) === -1) {
                    properties.push(name);
                }
                values[name] = value;
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
                const spreadValues = resolveObjectToPropMap(spreadObject, importer);
                if (!spreadValues) {
                    error = true;
                    return;
                }
                spreadValues.properties.forEach(spreadProp => {
                    if (properties.indexOf(spreadProp) === -1) {
                        properties.push(spreadProp);
                    }
                });
                values = { ...values, ...spreadValues.values };
            }
        });
        if (!error) {
            return { properties: properties.sort(), values };
        }
    }
    return null;
}
exports.resolveObjectToPropMap = resolveObjectToPropMap;
/**
 * Returns an ArrayExpression which contains all the values resolved from an object
 *
 * Ignores setters in objects
 *
 * Returns null in case of
 *  unresolvable spreads
 *  computed identifier values
 */
function resolveObjectValuesToArray(path, importer) {
    const node = path.node;
    if (isObjectValuesCall(node)) {
        const objectExpression = (0, resolveToValue_1.default)(path.get('arguments').get(0), importer);
        const propMap = resolveObjectToPropMap(objectExpression, importer);
        if (propMap) {
            const nodes = propMap.properties.map(prop => {
                const value = propMap.values[prop];
                return typeof value === 'undefined'
                    ? 'null'
                    : typeof value === 'string'
                        ? `"${value}"`
                        : `${value}`;
            });
            return nodes;
        }
    }
    return null;
}
exports.default = resolveObjectValuesToArray;

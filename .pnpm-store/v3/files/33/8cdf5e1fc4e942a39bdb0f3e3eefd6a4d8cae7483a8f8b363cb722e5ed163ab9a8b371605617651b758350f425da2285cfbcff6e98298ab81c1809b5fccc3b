"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.COMPUTED_PREFIX = void 0;
const ast_types_1 = require("ast-types");
const getNameOrValue_1 = __importDefault(require("./getNameOrValue"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
exports.COMPUTED_PREFIX = '@computed#';
/**
 * In an ObjectExpression, the name of a property can either be an identifier
 * or a literal (or dynamic, but we don't support those). This function simply
 * returns the value of the literal or name of the identifier.
 */
function getPropertyName(propertyPath, importer) {
    if (ast_types_1.namedTypes.ObjectTypeSpreadProperty.check(propertyPath.node)) {
        return (0, getNameOrValue_1.default)(propertyPath.get('argument').get('id'), false);
    }
    else if (propertyPath.node.computed) {
        const key = propertyPath.get('key');
        // Try to resolve variables and member expressions
        if (ast_types_1.namedTypes.Identifier.check(key.node) || ast_types_1.namedTypes.MemberExpression.check(key.node)) {
            const value = (0, resolveToValue_1.default)(key, importer).node;
            if (ast_types_1.namedTypes.Literal.check(value) &&
                (typeof value.value === 'string' || typeof value.value === 'number')) {
                return `${value.value}`;
            }
        }
        // generate name for identifier
        if (ast_types_1.namedTypes.Identifier.check(key.node)) {
            return `${exports.COMPUTED_PREFIX}${key.node.name}`;
        }
        if (ast_types_1.namedTypes.Literal.check(key.node) &&
            (typeof key.node.value === 'string' || typeof key.node.value === 'number')) {
            return `${key.node.value}`;
        }
        return null;
    }
    return (0, getNameOrValue_1.default)(propertyPath.get('key'), false);
}
exports.default = getPropertyName;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.unwrapUtilityType = exports.isSupportedUtilityType = void 0;
const ast_types_1 = require("ast-types");
const supportedUtilityTypes = new Set(['$Exact', '$ReadOnly']);
/**
 * See `supportedUtilityTypes` for which types are supported and
 * https://flow.org/en/docs/types/utilities/ for which types are available.
 */
function isSupportedUtilityType(path) {
    if (ast_types_1.namedTypes.GenericTypeAnnotation.check(path.node)) {
        const idPath = path.get('id');
        return !!idPath && supportedUtilityTypes.has(idPath.node.name);
    }
    return false;
}
exports.isSupportedUtilityType = isSupportedUtilityType;
/**
 * Unwraps well known utility types. For example:
 *
 *   $ReadOnly<T> => T
 */
function unwrapUtilityType(path) {
    while (isSupportedUtilityType(path)) {
        path = path.get('typeParameters', 'params', 0);
    }
    return path;
}
exports.unwrapUtilityType = unwrapUtilityType;

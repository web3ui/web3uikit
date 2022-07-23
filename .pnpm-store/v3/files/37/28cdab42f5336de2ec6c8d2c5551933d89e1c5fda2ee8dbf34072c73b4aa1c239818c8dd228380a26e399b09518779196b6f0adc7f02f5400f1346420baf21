"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
/**
 * Checks if the input Identifier is part of a destructuring Assignment
 * and the name of the property key matches the input name
 */
function isDestructuringAssignment(path, name) {
    return (ast_types_1.namedTypes.Identifier.check(path.node) &&
        ast_types_1.namedTypes.Property.check(path.parentPath.node) &&
        path.parentPath.node.key.name === name &&
        ast_types_1.namedTypes.ObjectPattern.check(path.parentPath.parentPath.node));
}
exports.default = isDestructuringAssignment;

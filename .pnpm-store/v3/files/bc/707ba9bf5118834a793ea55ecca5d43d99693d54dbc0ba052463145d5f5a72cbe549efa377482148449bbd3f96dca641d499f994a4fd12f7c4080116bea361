"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
/**
 * Returns true of the path is an unreachable TypePath
 */
exports.default = (path) => {
    return (!path ||
        ast_types_1.namedTypes.Identifier.check(path.node) ||
        ast_types_1.namedTypes.ImportDeclaration.check(path.node) ||
        ast_types_1.namedTypes.CallExpression.check(path.node));
};

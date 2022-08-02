"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.traverseShallow = void 0;
const ast_types_1 = require("ast-types");
/**
 * A helper function that doesn't traverse into nested blocks / statements by
 * default.
 */
function traverseShallow(path, visitors) {
    // @ts-ignore
    (0, ast_types_1.visit)(path, { ...defaultVisitors, ...visitors });
}
exports.traverseShallow = traverseShallow;
const ignore = () => false;
const defaultVisitors = {
    visitFunctionDeclaration: ignore,
    visitFunctionExpression: ignore,
    visitClassDeclaration: ignore,
    visitClassExpression: ignore,
    visitIfStatement: ignore,
    visitWithStatement: ignore,
    visitSwitchStatement: ignore,
    visitWhileStatement: ignore,
    visitDoWhileStatement: ignore,
    visitForStatement: ignore,
    visitForInStatement: ignore,
    visitForOfStatement: ignore,
    visitExportNamedDeclaration: ignore,
    visitExportDefaultDeclaration: ignore,
    visitConditionalExpression: ignore,
};

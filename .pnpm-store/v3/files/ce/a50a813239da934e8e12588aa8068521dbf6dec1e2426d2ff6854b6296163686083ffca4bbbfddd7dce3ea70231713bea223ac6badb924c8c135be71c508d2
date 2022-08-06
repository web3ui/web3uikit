"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const isReactModuleName_1 = __importDefault(require("./isReactModuleName"));
const match_1 = __importDefault(require("./match"));
const resolveToModule_1 = __importDefault(require("./resolveToModule"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
const isDestructuringAssignment_1 = __importDefault(require("./isDestructuringAssignment"));
/**
 * Returns true if the expression is a function call of the form
 * `React.foo(...)`.
 */
function isReactBuiltinCall(path, name, importer) {
    if (ast_types_1.namedTypes.ExpressionStatement.check(path.node)) {
        path = path.get('expression');
    }
    if ((0, match_1.default)(path.node, { callee: { property: { name } } })) {
        const module = (0, resolveToModule_1.default)(path.get('callee', 'object'), importer);
        return Boolean(module && (0, isReactModuleName_1.default)(module));
    }
    if (ast_types_1.namedTypes.CallExpression.check(path.node)) {
        const value = (0, resolveToValue_1.default)(path.get('callee'), importer);
        if (value === path.get('callee'))
            return false;
        // Check if this is a destructuring assignment
        // const { x } = require('react')
        if ((0, isDestructuringAssignment_1.default)(value, name) ||
            // `require('react').createElement`
            (ast_types_1.namedTypes.MemberExpression.check(value.node) &&
                ast_types_1.namedTypes.Identifier.check(value.get('property').node) &&
                value.get('property').node.name === name) ||
            // `import { createElement } from 'react'`
            (ast_types_1.namedTypes.ImportDeclaration.check(value.node) &&
                value.node.specifiers &&
                value.node.specifiers.some(specifier => {
                    var _a, _b;
                    // @ts-ignore
                    return ((_a = specifier.imported) === null || _a === void 0 ? void 0 : _a.name) === name &&
                        ((_b = specifier.local) === null || _b === void 0 ? void 0 : _b.name) === path.node.callee.name;
                }))) {
            const module = (0, resolveToModule_1.default)(value, importer);
            return Boolean(module && (0, isReactModuleName_1.default)(module));
        }
    }
    return false;
}
exports.default = isReactBuiltinCall;

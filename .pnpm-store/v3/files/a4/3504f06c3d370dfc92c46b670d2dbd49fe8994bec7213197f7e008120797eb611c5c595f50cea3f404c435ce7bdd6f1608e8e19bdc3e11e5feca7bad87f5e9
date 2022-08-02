"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const resolveToModule_1 = __importDefault(require("./resolveToModule"));
const isReactBuiltinCall_1 = __importDefault(require("./isReactBuiltinCall"));
/**
 * Returns true if the expression is a function call of the form
 * ```
 * import createReactClass from 'create-react-class';
 * createReactClass(...);
 * ```
 */
function isReactCreateClassCallModular(path, importer) {
    if (ast_types_1.namedTypes.ExpressionStatement.check(path.node)) {
        path = path.get('expression');
    }
    if (!ast_types_1.namedTypes.CallExpression.check(path.node)) {
        return false;
    }
    const module = (0, resolveToModule_1.default)(path, importer);
    return Boolean(module && module === 'create-react-class');
}
/**
 * Returns true if the expression is a function call of the form
 * `React.createClass(...)` or
 * ```
 * import createReactClass from 'create-react-class';
 * createReactClass(...);
 * ```
 */
function isReactCreateClassCall(path, importer) {
    return ((0, isReactBuiltinCall_1.default)(path, 'createClass', importer) ||
        isReactCreateClassCallModular(path, importer));
}
exports.default = isReactCreateClassCall;

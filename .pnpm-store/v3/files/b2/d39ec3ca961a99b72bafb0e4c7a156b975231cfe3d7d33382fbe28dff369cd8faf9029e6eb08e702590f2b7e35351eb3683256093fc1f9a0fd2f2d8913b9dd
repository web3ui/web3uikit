"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const isReactModuleName_1 = __importDefault(require("./isReactModuleName"));
const match_1 = __importDefault(require("./match"));
const resolveToModule_1 = __importDefault(require("./resolveToModule"));
/**
 * Returns true if the expression is a function call of the form
 * `React.Children.only(...)`.
 */
function isReactChildrenElementCall(path, importer) {
    if (ast_types_1.namedTypes.ExpressionStatement.check(path.node)) {
        path = path.get('expression');
    }
    if (!(0, match_1.default)(path.node, { callee: { property: { name: 'only' } } })) {
        return false;
    }
    const calleeObj = path.get('callee', 'object');
    const module = (0, resolveToModule_1.default)(calleeObj, importer);
    if (!(0, match_1.default)(calleeObj, { value: { property: { name: 'Children' } } })) {
        return false;
    }
    return Boolean(module && (0, isReactModuleName_1.default)(module));
}
exports.default = isReactChildrenElementCall;

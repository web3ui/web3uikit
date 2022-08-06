"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const isReactCreateClassCall_1 = __importDefault(require("./isReactCreateClassCall"));
const isReactForwardRefCall_1 = __importDefault(require("./isReactForwardRefCall"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
/**
 * If the path is a call expression, it recursively resolves to the
 * rightmost argument, stopping if it finds a React.createClass call expression
 *
 * Else the path itself is returned.
 */
function resolveHOC(path, importer) {
    const node = path.node;
    if (ast_types_1.namedTypes.CallExpression.check(node) &&
        !(0, isReactCreateClassCall_1.default)(path, importer) &&
        !(0, isReactForwardRefCall_1.default)(path, importer)) {
        if (node.arguments.length) {
            const inner = path.get('arguments', 0);
            // If the first argument is one of these types then the component might be the last argument
            // If there are all identifiers then we cannot figure out exactly and have to assume it is the first
            if (node.arguments.length > 1 &&
                (ast_types_1.namedTypes.Literal.check(inner.node) ||
                    ast_types_1.namedTypes.ObjectExpression.check(inner.node) ||
                    ast_types_1.namedTypes.ArrayExpression.check(inner.node) ||
                    ast_types_1.namedTypes.SpreadElement.check(inner.node))) {
                return resolveHOC((0, resolveToValue_1.default)(path.get('arguments', node.arguments.length - 1), importer), importer);
            }
            return resolveHOC((0, resolveToValue_1.default)(inner, importer), importer);
        }
    }
    return path;
}
exports.default = resolveHOC;

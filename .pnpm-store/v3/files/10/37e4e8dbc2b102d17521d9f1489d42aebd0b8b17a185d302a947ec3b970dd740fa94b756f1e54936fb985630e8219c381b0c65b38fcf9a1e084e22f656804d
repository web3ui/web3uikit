"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const isReactComponentClass_1 = __importDefault(require("../utils/isReactComponentClass"));
const isReactCreateClassCall_1 = __importDefault(require("../utils/isReactCreateClassCall"));
const isReactForwardRefCall_1 = __importDefault(require("../utils/isReactForwardRefCall"));
const isStatelessComponent_1 = __importDefault(require("../utils/isStatelessComponent"));
const normalizeClassDefinition_1 = __importDefault(require("../utils/normalizeClassDefinition"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
/**
 * Given an AST, this function tries to find all object expressions that are
 * passed to `React.createClass` calls, by resolving all references properly.
 */
function findAllComponentDefinitions(ast, _parser, importer) {
    const definitions = new Set();
    function classVisitor(path) {
        if ((0, isReactComponentClass_1.default)(path, importer)) {
            (0, normalizeClassDefinition_1.default)(path);
            definitions.add(path);
        }
        return false;
    }
    function statelessVisitor(path) {
        if ((0, isStatelessComponent_1.default)(path, importer)) {
            definitions.add(path);
        }
        return false;
    }
    (0, ast_types_1.visit)(ast, {
        visitFunctionDeclaration: statelessVisitor,
        visitFunctionExpression: statelessVisitor,
        visitArrowFunctionExpression: statelessVisitor,
        visitClassExpression: classVisitor,
        visitClassDeclaration: classVisitor,
        visitCallExpression: function (path) {
            if ((0, isReactForwardRefCall_1.default)(path, importer)) {
                // If the the inner function was previously identified as a component
                // replace it with the parent node
                const inner = (0, resolveToValue_1.default)(path.get('arguments', 0), importer);
                definitions.delete(inner);
                definitions.add(path);
                // Do not traverse into arguments
                return false;
            }
            else if ((0, isReactCreateClassCall_1.default)(path, importer)) {
                const resolvedPath = (0, resolveToValue_1.default)(path.get('arguments', 0), importer);
                if (ast_types_1.namedTypes.ObjectExpression.check(resolvedPath.node)) {
                    definitions.add(resolvedPath);
                }
                // Do not traverse into arguments
                return false;
            }
            // If it is neither of the above cases we need to traverse further
            // as this call expression could be a HOC
            this.traverse(path);
            return;
        },
    });
    return Array.from(definitions);
}
exports.default = findAllComponentDefinitions;

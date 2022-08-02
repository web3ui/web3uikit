"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const docblock_1 = require("../utils/docblock");
const isReactForwardRefCall_1 = __importDefault(require("../utils/isReactForwardRefCall"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
function isClassDefinition(nodePath) {
    const node = nodePath.node;
    return ast_types_1.namedTypes.ClassDeclaration.check(node) || ast_types_1.namedTypes.ClassExpression.check(node);
}
function getDocblockFromComponent(path, importer) {
    let description = null;
    if (isClassDefinition(path)) {
        // If we have a class declaration or expression, then the comment might be
        // attached to the last decorator instead as trailing comment.
        if (path.node.decorators && path.node.decorators.length > 0) {
            description = (0, docblock_1.getDocblock)(path.get('decorators', path.node.decorators.length - 1), true);
        }
    }
    if (description == null) {
        // Find parent statement (e.g. var Component = React.createClass(<path>);)
        let searchPath = path;
        while (searchPath && !ast_types_1.namedTypes.Statement.check(searchPath.node)) {
            searchPath = searchPath.parent;
        }
        if (searchPath) {
            // If the parent is an export statement, we have to traverse one more up
            if (ast_types_1.namedTypes.ExportNamedDeclaration.check(searchPath.parentPath.node) ||
                ast_types_1.namedTypes.ExportDefaultDeclaration.check(searchPath.parentPath.node)) {
                searchPath = searchPath.parentPath;
            }
            description = (0, docblock_1.getDocblock)(searchPath);
        }
    }
    if (!description) {
        const searchPath = (0, isReactForwardRefCall_1.default)(path, importer)
            ? path.get('arguments', 0)
            : path;
        const inner = (0, resolveToValue_1.default)(searchPath, importer);
        if (inner.node !== path.node) {
            return getDocblockFromComponent(inner, importer);
        }
    }
    return description;
}
/**
 * Finds the nearest block comment before the component definition.
 */
function componentDocblockHandler(documentation, path, importer) {
    documentation.set('description', getDocblockFromComponent(path, importer) || '');
}
exports.default = componentDocblockHandler;

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
function isRenderMethod(node) {
    const isProperty = node.type === 'ClassProperty';
    return Boolean((ast_types_1.namedTypes.MethodDefinition.check(node) || isProperty) &&
        // @ts-ignore
        !node.computed &&
        // @ts-ignore
        !node.static &&
        // @ts-ignore
        (node.kind === '' || node.kind === 'method' || isProperty) &&
        // @ts-ignore
        node.key.name === 'render');
}
/**
 * Returns `true` of the path represents a class definition which either extends
 * `React.Component` or has a superclass and implements a `render()` method.
 */
function isReactComponentClass(path, importer) {
    const node = path.node;
    if (!ast_types_1.namedTypes.ClassDeclaration.check(node) && !ast_types_1.namedTypes.ClassExpression.check(node)) {
        return false;
    }
    // extends something
    if (!node.superClass) {
        return false;
    }
    // React.Component or React.PureComponent
    const superClass = (0, resolveToValue_1.default)(path.get('superClass'), importer);
    if ((0, match_1.default)(superClass.node, { property: { name: 'Component' } }) ||
        (0, match_1.default)(superClass.node, { property: { name: 'PureComponent' } }) ||
        (0, isDestructuringAssignment_1.default)(superClass, 'Component') ||
        (0, isDestructuringAssignment_1.default)(superClass, 'PureComponent')) {
        const module = (0, resolveToModule_1.default)(superClass, importer);
        if (module && (0, isReactModuleName_1.default)(module)) {
            return true;
        }
    }
    // render method
    if (node.body.body.some(isRenderMethod)) {
        return true;
    }
    // check for @extends React.Component in docblock
    if (path.parentPath && path.parentPath.value) {
        const classDeclaration = Array.isArray(path.parentPath.value)
            ? path.parentPath.value.find(function (declaration) {
                return declaration.type === 'ClassDeclaration';
            })
            : path.parentPath.value;
        if (classDeclaration &&
            classDeclaration.leadingComments &&
            classDeclaration.leadingComments.some(function (comment) {
                return /@extends\s+React\.Component/.test(comment.value);
            })) {
            return true;
        }
    }
    return false;
}
exports.default = isReactComponentClass;

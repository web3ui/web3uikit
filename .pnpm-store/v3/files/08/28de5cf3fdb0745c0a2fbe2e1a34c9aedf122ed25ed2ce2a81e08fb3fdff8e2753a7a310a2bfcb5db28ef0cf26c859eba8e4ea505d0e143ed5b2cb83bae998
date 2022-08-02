"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getPropertyValuePath_1 = __importDefault(require("./getPropertyValuePath"));
const isReactComponentClass_1 = __importDefault(require("./isReactComponentClass"));
const isReactCreateClassCall_1 = __importDefault(require("./isReactCreateClassCall"));
const isReactCreateElementCall_1 = __importDefault(require("./isReactCreateElementCall"));
const isReactCloneElementCall_1 = __importDefault(require("./isReactCloneElementCall"));
const isReactChildrenElementCall_1 = __importDefault(require("./isReactChildrenElementCall"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
const validPossibleStatelessComponentTypes = [
    'Property',
    'FunctionDeclaration',
    'FunctionExpression',
    'ArrowFunctionExpression',
];
function isJSXElementOrReactCall(path, importer) {
    return (path.node.type === 'JSXElement' ||
        path.node.type === 'JSXFragment' ||
        (path.node.type === 'CallExpression' &&
            (0, isReactCreateElementCall_1.default)(path, importer)) ||
        (path.node.type === 'CallExpression' &&
            (0, isReactCloneElementCall_1.default)(path, importer)) ||
        (path.node.type === 'CallExpression' &&
            (0, isReactChildrenElementCall_1.default)(path, importer)));
}
function resolvesToJSXElementOrReactCall(path, importer, seen) {
    // avoid returns with recursive function calls
    if (seen.has(path)) {
        return false;
    }
    seen.add(path);
    // Is the path is already a JSX element or a call to one of the React.* functions
    if (isJSXElementOrReactCall(path, importer)) {
        return true;
    }
    const resolvedPath = (0, resolveToValue_1.default)(path, importer);
    // If the path points to a conditional expression, then we need to look only at
    // the two possible paths
    if (resolvedPath.node.type === 'ConditionalExpression') {
        return (resolvesToJSXElementOrReactCall(resolvedPath.get('consequent'), importer, seen) ||
            resolvesToJSXElementOrReactCall(resolvedPath.get('alternate'), importer, seen));
    }
    // If the path points to a logical expression (AND, OR, ...), then we need to look only at
    // the two possible paths
    if (resolvedPath.node.type === 'LogicalExpression') {
        return (resolvesToJSXElementOrReactCall(resolvedPath.get('left'), importer, seen) ||
            resolvesToJSXElementOrReactCall(resolvedPath.get('right'), importer, seen));
    }
    // Is the resolved path is already a JSX element or a call to one of the React.* functions
    // Only do this if the resolvedPath actually resolved something as otherwise we did this check already
    if (resolvedPath !== path &&
        isJSXElementOrReactCall(resolvedPath, importer)) {
        return true;
    }
    // If we have a call expression, lets try to follow it
    if (resolvedPath.node.type === 'CallExpression') {
        let calleeValue = (0, resolveToValue_1.default)(resolvedPath.get('callee'), importer);
        if (returnsJSXElementOrReactCall(calleeValue, importer, seen)) {
            return true;
        }
        let resolvedValue;
        const namesToResolve = [calleeValue.get('property')];
        if (calleeValue.node.type === 'MemberExpression') {
            if (calleeValue.get('object').node.type === 'Identifier') {
                resolvedValue = (0, resolveToValue_1.default)(calleeValue.get('object'), importer);
            }
            else if (ast_types_1.namedTypes.MemberExpression.check(calleeValue.node)) {
                do {
                    calleeValue = calleeValue.get('object');
                    namesToResolve.unshift(calleeValue.get('property'));
                } while (ast_types_1.namedTypes.MemberExpression.check(calleeValue.node));
                resolvedValue = (0, resolveToValue_1.default)(calleeValue.get('object'), importer);
            }
        }
        if (resolvedValue && ast_types_1.namedTypes.ObjectExpression.check(resolvedValue.node)) {
            const resolvedMemberExpression = namesToResolve.reduce((result, nodePath) => {
                if (!nodePath) {
                    return result;
                }
                if (result) {
                    result = (0, getPropertyValuePath_1.default)(result, nodePath.node.name, importer);
                    if (result && ast_types_1.namedTypes.Identifier.check(result.node)) {
                        return (0, resolveToValue_1.default)(result, importer);
                    }
                }
                return result;
            }, resolvedValue);
            if (!resolvedMemberExpression ||
                returnsJSXElementOrReactCall(resolvedMemberExpression, importer, seen)) {
                return true;
            }
        }
    }
    return false;
}
function returnsJSXElementOrReactCall(path, importer, seen = new WeakSet()) {
    let visited = false;
    // early exit for ArrowFunctionExpressions
    if (path.node.type === 'ArrowFunctionExpression' &&
        path.get('body').node.type !== 'BlockStatement' &&
        resolvesToJSXElementOrReactCall(path.get('body'), importer, seen)) {
        return true;
    }
    let scope = path.scope;
    // If we get a property we want the function scope it holds and not its outer scope
    if (path.node.type === 'Property') {
        scope = path.get('value').scope;
    }
    // @ts-ignore
    (0, ast_types_1.visit)(path, {
        visitReturnStatement(returnPath) {
            // Only check return statements which are part of the checked function scope
            if (returnPath.scope !== scope)
                return false;
            if (resolvesToJSXElementOrReactCall(returnPath.get('argument'), importer, seen)) {
                visited = true;
                return false;
            }
            this.traverse(returnPath);
            return;
        },
    });
    return visited;
}
/**
 * Returns `true` if the path represents a function which returns a JSXElement
 */
function isStatelessComponent(path, importer) {
    const node = path.node;
    if (validPossibleStatelessComponentTypes.indexOf(node.type) === -1) {
        return false;
    }
    if (node.type === 'Property') {
        if ((0, isReactCreateClassCall_1.default)(path.parent, importer) ||
            (0, isReactComponentClass_1.default)(path.parent, importer)) {
            return false;
        }
    }
    if (returnsJSXElementOrReactCall(path, importer)) {
        return true;
    }
    return false;
}
exports.default = isStatelessComponent;

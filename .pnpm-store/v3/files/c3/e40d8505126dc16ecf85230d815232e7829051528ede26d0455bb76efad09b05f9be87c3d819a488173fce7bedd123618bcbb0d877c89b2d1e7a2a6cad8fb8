"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getMemberExpressionRoot_1 = __importDefault(require("./getMemberExpressionRoot"));
const getPropertyValuePath_1 = __importDefault(require("./getPropertyValuePath"));
const expressionTo_1 = require("./expressionTo");
const traverse_1 = require("./traverse");
const getMemberValuePath_1 = __importStar(require("./getMemberValuePath"));
function findScopePath(paths, path, importer) {
    if (paths.length < 1) {
        return null;
    }
    let resultPath = paths[0];
    const parentPath = resultPath.parent;
    // Namespace imports are handled separately, at the site of a member expression access
    if (ast_types_1.namedTypes.ImportDefaultSpecifier.check(parentPath.node) ||
        ast_types_1.namedTypes.ImportSpecifier.check(parentPath.node)) {
        let exportName;
        if (ast_types_1.namedTypes.ImportDefaultSpecifier.check(parentPath.node)) {
            exportName = 'default';
        }
        else {
            exportName = parentPath.node.imported.name;
        }
        const resolvedPath = importer(parentPath.parentPath, exportName);
        if (resolvedPath) {
            return resolveToValue(resolvedPath, importer);
        }
    }
    if (ast_types_1.namedTypes.ImportDefaultSpecifier.check(parentPath.node) ||
        ast_types_1.namedTypes.ImportSpecifier.check(parentPath.node) ||
        ast_types_1.namedTypes.ImportNamespaceSpecifier.check(parentPath.node) ||
        ast_types_1.namedTypes.VariableDeclarator.check(parentPath.node) ||
        ast_types_1.namedTypes.TypeAlias.check(parentPath.node) ||
        ast_types_1.namedTypes.InterfaceDeclaration.check(parentPath.node) ||
        ast_types_1.namedTypes.TSTypeAliasDeclaration.check(parentPath.node) ||
        ast_types_1.namedTypes.TSInterfaceDeclaration.check(parentPath.node)) {
        resultPath = parentPath;
    }
    if (resultPath.node !== path.node) {
        return resolveToValue(resultPath, importer);
    }
    return null;
}
/**
 * Tries to find the last value assigned to `name` in the scope created by
 * `scope`. We are not descending into any statements (blocks).
 */
function findLastAssignedValue(scope, idPath, importer) {
    const results = [];
    const name = idPath.node.name;
    (0, traverse_1.traverseShallow)(scope.path, {
        visitAssignmentExpression: function (path) {
            const node = path.node;
            // Skip anything that is not an assignment to a variable with the
            // passed name.
            // Ensure the LHS isn't the reference we're trying to resolve.
            if (!ast_types_1.namedTypes.Identifier.check(node.left) ||
                node.left === idPath.node ||
                node.left.name !== name ||
                node.operator !== '=') {
                return this.traverse(path);
            }
            // Ensure the RHS doesn't contain the reference we're trying to resolve.
            const candidatePath = path.get('right');
            for (let p = idPath; p && p.node != null; p = p.parent) {
                if (p.node === candidatePath.node) {
                    return this.traverse(path);
                }
            }
            results.push(candidatePath);
            return false;
        },
    });
    const resultPath = results.pop();
    if (resultPath == null) {
        return null;
    }
    return resolveToValue(resultPath, importer);
}
/**
 * If the path is an identifier, it is resolved in the scope chain.
 * If it is an assignment expression, it resolves to the right hand side.
 * If it is a member expression it is resolved to it's initialization value.
 *
 * Else the path itself is returned.
 */
function resolveToValue(path, importer) {
    const node = path.node;
    if (ast_types_1.namedTypes.VariableDeclarator.check(node)) {
        if (node.init) {
            return resolveToValue(path.get('init'), importer);
        }
    }
    else if (ast_types_1.namedTypes.MemberExpression.check(node)) {
        const root = (0, getMemberExpressionRoot_1.default)(path);
        const resolved = resolveToValue(root, importer);
        if (ast_types_1.namedTypes.ObjectExpression.check(resolved.node)) {
            let propertyPath = resolved;
            for (const propertyName of (0, expressionTo_1.Array)(path, importer).slice(1)) {
                if (propertyPath && ast_types_1.namedTypes.ObjectExpression.check(propertyPath.node)) {
                    propertyPath = (0, getPropertyValuePath_1.default)(propertyPath, propertyName, importer);
                }
                if (!propertyPath) {
                    return path;
                }
                propertyPath = resolveToValue(propertyPath, importer);
            }
            return propertyPath;
        }
        else if ((0, getMemberValuePath_1.isSupportedDefinitionType)(resolved)) {
            const memberPath = (0, getMemberValuePath_1.default)(resolved, path.node.property.name, importer);
            if (memberPath) {
                return resolveToValue(memberPath, importer);
            }
        }
        else if (ast_types_1.namedTypes.ImportDeclaration.check(resolved.node) &&
            resolved.node.specifiers) {
            // Handle references to namespace imports, e.g. import * as foo from 'bar'.
            // Try to find a specifier that matches the root of the member expression, and
            // find the export that matches the property name.
            for (const specifier of resolved.node.specifiers) {
                if (ast_types_1.namedTypes.ImportNamespaceSpecifier.check(specifier) &&
                    specifier.local &&
                    specifier.local.name === root.node.name) {
                    const resolvedPath = importer(resolved, root.parentPath.node.property.name);
                    if (resolvedPath) {
                        return resolveToValue(resolvedPath, importer);
                    }
                }
            }
        }
    }
    else if (ast_types_1.namedTypes.ImportDefaultSpecifier.check(node) ||
        ast_types_1.namedTypes.ImportNamespaceSpecifier.check(node) ||
        ast_types_1.namedTypes.ImportSpecifier.check(node)) {
        // go up two levels as first level is only the array of specifiers
        return path.parentPath.parentPath;
    }
    else if (ast_types_1.namedTypes.AssignmentExpression.check(node)) {
        if (node.operator === '=') {
            return resolveToValue(path.get('right'), importer);
        }
    }
    else if (ast_types_1.namedTypes.TypeCastExpression.check(node) ||
        ast_types_1.namedTypes.TSAsExpression.check(node) ||
        ast_types_1.namedTypes.TSTypeAssertion.check(node)) {
        return resolveToValue(path.get('expression'), importer);
    }
    else if (ast_types_1.namedTypes.Identifier.check(node)) {
        if ((ast_types_1.namedTypes.ClassDeclaration.check(path.parentPath.node) ||
            ast_types_1.namedTypes.ClassExpression.check(path.parentPath.node) ||
            ast_types_1.namedTypes.Function.check(path.parentPath.node)) &&
            path.parentPath.get('id') === path) {
            return path.parentPath;
        }
        let scope = path.scope.lookup(node.name);
        let resolvedPath = null;
        if (scope) {
            // The variable may be assigned a different value after initialization.
            // We are first trying to find all assignments to the variable in the
            // block where it is defined (i.e. we are not traversing into statements)
            resolvedPath = findLastAssignedValue(scope, path, importer);
            if (!resolvedPath) {
                const bindings = scope.getBindings()[node.name];
                resolvedPath = findScopePath(bindings, path, importer);
            }
        }
        else {
            scope = path.scope.lookupType(node.name);
            if (scope) {
                const typesInScope = scope.getTypes()[node.name];
                resolvedPath = findScopePath(typesInScope, path, importer);
            }
        }
        return resolvedPath || path;
    }
    return path;
}
exports.default = resolveToValue;

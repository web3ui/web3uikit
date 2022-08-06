"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getMemberValuePath_1 = __importDefault(require("../utils/getMemberValuePath"));
const getMethodDocumentation_1 = __importDefault(require("../utils/getMethodDocumentation"));
const isReactComponentClass_1 = __importDefault(require("../utils/isReactComponentClass"));
const isReactComponentMethod_1 = __importDefault(require("../utils/isReactComponentMethod"));
const match_1 = __importDefault(require("../utils/match"));
const traverse_1 = require("../utils/traverse");
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
function isPublicClassProperty(path) {
    return (ast_types_1.namedTypes.ClassProperty.check(path.node) && !ast_types_1.namedTypes.ClassPrivateProperty.check(path.node));
}
/**
 * The following values/constructs are considered methods:
 *
 * - Method declarations in classes (except "constructor" and React lifecycle
 *   methods
 * - Public class fields in classes whose value are a functions
 * - Object properties whose values are functions
 */
function isMethod(path, importer) {
    const isProbablyMethod = (ast_types_1.namedTypes.MethodDefinition.check(path.node) && path.node.kind !== 'constructor') ||
        ((isPublicClassProperty(path) || ast_types_1.namedTypes.Property.check(path.node)) &&
            ast_types_1.namedTypes.Function.check((0, resolveToValue_1.default)(path.get('value'), importer).node));
    return isProbablyMethod && !(0, isReactComponentMethod_1.default)(path, importer);
}
function findAssignedMethods(scope, idPath, importer) {
    const results = [];
    if (!ast_types_1.namedTypes.Identifier.check(idPath.node)) {
        return results;
    }
    const name = idPath.node.name;
    const idScope = idPath.scope.lookup(idPath.node.name);
    (0, traverse_1.traverseShallow)(scope.path, {
        visitAssignmentExpression: function (path) {
            const node = path.node;
            if ((0, match_1.default)(node.left, {
                type: 'MemberExpression',
                object: { type: 'Identifier', name },
            }) &&
                path.scope.lookup(name) === idScope &&
                ast_types_1.namedTypes.Function.check((0, resolveToValue_1.default)(path.get('right'), importer).node)) {
                results.push(path);
                return false;
            }
            return this.traverse(path);
        },
    });
    return results;
}
/**
 * Extract all flow types for the methods of a react component. Doesn't
 * return any react specific lifecycle methods.
 */
function componentMethodsHandler(documentation, path, importer) {
    // Extract all methods from the class or object.
    let methodPaths = [];
    if ((0, isReactComponentClass_1.default)(path, importer)) {
        methodPaths = path
            .get('body', 'body')
            .filter((body) => isMethod(body, importer));
    }
    else if (ast_types_1.namedTypes.ObjectExpression.check(path.node)) {
        methodPaths = path
            .get('properties')
            .filter((props) => isMethod(props, importer));
        // Add the statics object properties.
        const statics = (0, getMemberValuePath_1.default)(path, 'statics', importer);
        if (statics) {
            statics.get('properties').each((p) => {
                if (isMethod(p, importer)) {
                    p.node.static = true;
                    methodPaths.push(p);
                }
            });
        }
    }
    else if (ast_types_1.namedTypes.VariableDeclarator.check(path.parent.node) &&
        path.parent.node.init === path.node &&
        ast_types_1.namedTypes.Identifier.check(path.parent.node.id)) {
        methodPaths = findAssignedMethods(path.parent.scope, path.parent.get('id'), importer);
    }
    else if (ast_types_1.namedTypes.AssignmentExpression.check(path.parent.node) &&
        path.parent.node.right === path.node &&
        ast_types_1.namedTypes.Identifier.check(path.parent.node.left)) {
        methodPaths = findAssignedMethods(path.parent.scope, path.parent.get('left'), importer);
    }
    else if (ast_types_1.namedTypes.FunctionDeclaration.check(path.node)) {
        methodPaths = findAssignedMethods(path.parent.scope, path.get('id'), importer);
    }
    documentation.set('methods', methodPaths.map(p => (0, getMethodDocumentation_1.default)(p, importer)).filter(Boolean));
}
exports.default = componentMethodsHandler;

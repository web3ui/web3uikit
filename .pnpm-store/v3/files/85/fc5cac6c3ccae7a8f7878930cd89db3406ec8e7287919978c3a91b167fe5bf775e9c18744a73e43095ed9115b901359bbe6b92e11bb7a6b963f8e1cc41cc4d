"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getNameOrValue_1 = __importDefault(require("./getNameOrValue"));
const expressionTo_1 = require("./expressionTo");
const isReactForwardRefCall_1 = __importDefault(require("./isReactForwardRefCall"));
function resolveName(path, importer) {
    if (ast_types_1.namedTypes.VariableDeclaration.check(path.node)) {
        const declarations = path.get('declarations');
        if (declarations.value.length && declarations.value.length !== 1) {
            throw new TypeError('Got unsupported VariableDeclaration. VariableDeclaration must only ' +
                'have a single VariableDeclarator. Got ' +
                declarations.value.length +
                ' declarations.');
        }
        const value = declarations.get(0, 'id', 'name').value;
        return value;
    }
    if (ast_types_1.namedTypes.FunctionDeclaration.check(path.node)) {
        return path.get('id', 'name').value;
    }
    if (ast_types_1.namedTypes.FunctionExpression.check(path.node) ||
        ast_types_1.namedTypes.ArrowFunctionExpression.check(path.node) ||
        ast_types_1.namedTypes.TaggedTemplateExpression.check(path.node) ||
        ast_types_1.namedTypes.CallExpression.check(path.node) ||
        (0, isReactForwardRefCall_1.default)(path, importer)) {
        let currentPath = path;
        while (currentPath.parent) {
            if (ast_types_1.namedTypes.VariableDeclarator.check(currentPath.parent.node)) {
                return currentPath.parent.get('id', 'name').value;
            }
            currentPath = currentPath.parent;
        }
        return;
    }
    throw new TypeError('Attempted to resolveName for an unsupported path. resolveName accepts a ' +
        'VariableDeclaration, FunctionDeclaration, FunctionExpression or CallExpression. Got "' +
        path.node.type +
        '".');
}
function getRoot(node) {
    let root = node.parent;
    while (root.parent) {
        root = root.parent;
    }
    return root;
}
function getMemberExpressionValuePath(variableDefinition, memberName, importer) {
    const localName = resolveName(variableDefinition, importer);
    const program = getRoot(variableDefinition);
    if (!localName) {
        // likely an immediately exported and therefore nameless/anonymous node
        // passed in
        return null;
    }
    let result;
    (0, ast_types_1.visit)(program, {
        visitAssignmentExpression(path) {
            const memberPath = path.get('left');
            if (!ast_types_1.namedTypes.MemberExpression.check(memberPath.node)) {
                return this.traverse(path);
            }
            if ((!memberPath.node.computed ||
                ast_types_1.namedTypes.Literal.check(memberPath.node.property)) &&
                (0, getNameOrValue_1.default)(memberPath.get('property')) === memberName &&
                (0, expressionTo_1.String)(memberPath.get('object'), importer) === localName) {
                result = path.get('right');
                return false;
            }
            this.traverse(memberPath);
        },
    });
    return result;
}
exports.default = getMemberExpressionValuePath;

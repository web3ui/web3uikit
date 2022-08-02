"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getMemberExpressionRoot_1 = __importDefault(require("../utils/getMemberExpressionRoot"));
const getMembers_1 = __importDefault(require("../utils/getMembers"));
const ignore = () => false;
/**
 * Given a class definition (i.e. `class` declaration or expression), this
 * function "normalizes" the definition, by looking for assignments of static
 * properties and converting them to ClassProperties.
 *
 * Example:
 *
 * class MyComponent extends React.Component {
 *   // ...
 * }
 * MyComponent.propTypes = { ... };
 *
 * is converted to
 *
 * class MyComponent extends React.Component {
 *   // ...
 *   static propTypes = { ... };
 * }
 */
function normalizeClassDefinition(classDefinition) {
    let variableName;
    if (ast_types_1.namedTypes.ClassDeclaration.check(classDefinition.node)) {
        // Class declarations don't have an id, e.g.: `export default class extends React.Component {}`
        if (classDefinition.node.id) {
            variableName = classDefinition.node.id.name;
        }
    }
    else if (ast_types_1.namedTypes.ClassExpression.check(classDefinition.node)) {
        let { parentPath } = classDefinition;
        while (parentPath.node !== classDefinition.scope.node &&
            !ast_types_1.namedTypes.BlockStatement.check(parentPath.node)) {
            if (ast_types_1.namedTypes.VariableDeclarator.check(parentPath.node) &&
                ast_types_1.namedTypes.Identifier.check(parentPath.node.id)) {
                variableName = parentPath.node.id.name;
                break;
            }
            else if (ast_types_1.namedTypes.AssignmentExpression.check(parentPath.node) &&
                ast_types_1.namedTypes.Identifier.check(parentPath.node.left)) {
                variableName = parentPath.node.left.name;
                break;
            }
            parentPath = parentPath.parentPath;
        }
    }
    if (!variableName) {
        return;
    }
    const scopeRoot = classDefinition.scope;
    (0, ast_types_1.visit)(scopeRoot.node, {
        visitFunction: ignore,
        visitClassDeclaration: ignore,
        visitClassExpression: ignore,
        visitForInStatement: ignore,
        visitForStatement: ignore,
        visitAssignmentExpression: function (path) {
            if (ast_types_1.namedTypes.MemberExpression.check(path.node.left)) {
                const first = (0, getMemberExpressionRoot_1.default)(path.get('left'));
                if (ast_types_1.namedTypes.Identifier.check(first.node) &&
                    first.node.name === variableName) {
                    const [member] = (0, getMembers_1.default)(path.get('left'));
                    if (member && !member.path.node.computed) {
                        const classProperty = ast_types_1.builders.classProperty(member.path.node, path.node.right, null, true);
                        classDefinition.get('body', 'body').value.push(classProperty);
                        return false;
                    }
                }
                this.traverse(path);
            }
            else {
                return false;
            }
            return undefined;
        },
    });
}
exports.default = normalizeClassDefinition;

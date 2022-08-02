"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getMemberValuePath_1 = __importDefault(require("../utils/getMemberValuePath"));
const getNameOrValue_1 = __importDefault(require("../utils/getNameOrValue"));
const isReactForwardRefCall_1 = __importDefault(require("../utils/isReactForwardRefCall"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
const resolveFunctionDefinitionToReturnValue_1 = __importDefault(require("../utils/resolveFunctionDefinitionToReturnValue"));
function displayNameHandler(documentation, path, importer) {
    let displayNamePath = (0, getMemberValuePath_1.default)(path, 'displayName', importer);
    if (!displayNamePath) {
        // Function and class declarations need special treatment. The name of the
        // function / class is the displayName
        if (ast_types_1.namedTypes.ClassDeclaration.check(path.node) ||
            ast_types_1.namedTypes.FunctionDeclaration.check(path.node)) {
            documentation.set('displayName', (0, getNameOrValue_1.default)(path.get('id')));
        }
        else if (ast_types_1.namedTypes.ArrowFunctionExpression.check(path.node) ||
            ast_types_1.namedTypes.FunctionExpression.check(path.node) ||
            (0, isReactForwardRefCall_1.default)(path, importer)) {
            let currentPath = path;
            while (currentPath.parent) {
                if (ast_types_1.namedTypes.VariableDeclarator.check(currentPath.parent.node)) {
                    documentation.set('displayName', (0, getNameOrValue_1.default)(currentPath.parent.get('id')));
                    return;
                }
                else if (ast_types_1.namedTypes.AssignmentExpression.check(currentPath.parent.node)) {
                    const leftPath = currentPath.parent.get('left');
                    if (ast_types_1.namedTypes.Identifier.check(leftPath.node) ||
                        ast_types_1.namedTypes.Literal.check(leftPath.node)) {
                        documentation.set('displayName', (0, getNameOrValue_1.default)(leftPath));
                        return;
                    }
                }
                currentPath = currentPath.parent;
            }
        }
        return;
    }
    displayNamePath = (0, resolveToValue_1.default)(displayNamePath, importer);
    // If display name is defined as a getter we get a function expression as
    // value. In that case we try to determine the value from the return
    // statement.
    if (ast_types_1.namedTypes.FunctionExpression.check(displayNamePath.node)) {
        displayNamePath = (0, resolveFunctionDefinitionToReturnValue_1.default)(displayNamePath, importer);
    }
    if (!displayNamePath || !ast_types_1.namedTypes.Literal.check(displayNamePath.node)) {
        return;
    }
    documentation.set('displayName', displayNamePath.node.value);
}
exports.default = displayNameHandler;

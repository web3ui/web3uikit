"use strict";
/**
 * This is heavily based on the react-docgen `displayNameHandler`
 * (https://github.com/reactjs/react-docgen/blob/26c90c0dd105bf83499a83826f2a6ff7a724620d/src/handlers/displayNameHandler.ts)
 * but instead defines an `actualName` property on the generated docs that is taken first from the component's actual name.
 * This addresses an issue where the name that the generated docs are stored under is incorrectly named with the `displayName`
 * and not the component's actual name.
 *
 * This is inspired by `actualNameHandler` from https://github.com/storybookjs/babel-plugin-react-docgen, but is modified
 * directly from displayNameHandler, using the same approach as babel-plugin-react-docgen.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const utils_1 = require("react-docgen/dist/utils");
function actualNameHandler(documentation, path, importer) {
    if (ast_types_1.namedTypes.ClassDeclaration.check(path.node) || ast_types_1.namedTypes.FunctionDeclaration.check(path.node)) {
        documentation.set('actualName', (0, utils_1.getNameOrValue)(path.get('id')));
    }
    else if (ast_types_1.namedTypes.ArrowFunctionExpression.check(path.node) ||
        ast_types_1.namedTypes.FunctionExpression.check(path.node) ||
        (0, utils_1.isReactForwardRefCall)(path, importer)) {
        let currentPath = path;
        while (currentPath.parent) {
            if (ast_types_1.namedTypes.VariableDeclarator.check(currentPath.parent.node)) {
                documentation.set('actualName', (0, utils_1.getNameOrValue)(currentPath.parent.get('id')));
                return;
            }
            else if (ast_types_1.namedTypes.AssignmentExpression.check(currentPath.parent.node)) {
                const leftPath = currentPath.parent.get('left');
                if (ast_types_1.namedTypes.Identifier.check(leftPath.node) || ast_types_1.namedTypes.Literal.check(leftPath.node)) {
                    documentation.set('actualName', (0, utils_1.getNameOrValue)(leftPath));
                    return;
                }
            }
            currentPath = currentPath.parent;
        }
        // Could not find an actual name
        documentation.set('actualName', '');
    }
    return;
}
exports.default = actualNameHandler;
//# sourceMappingURL=actualNameHandler.js.map
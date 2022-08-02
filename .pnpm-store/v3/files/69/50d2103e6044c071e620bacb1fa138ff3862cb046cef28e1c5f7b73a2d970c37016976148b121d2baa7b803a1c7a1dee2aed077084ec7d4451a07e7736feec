"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const match_1 = __importDefault(require("./match"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
/**
 * Given a path (e.g. call expression, member expression or identifier),
 * this function tries to find the name of module from which the "root value"
 * was imported.
 */
function resolveToModule(path, importer) {
    const node = path.node;
    switch (node.type) {
        // @ts-ignore
        case ast_types_1.namedTypes.VariableDeclarator.name:
            if (node.init) {
                return resolveToModule(path.get('init'), importer);
            }
            break;
        // @ts-ignore
        case ast_types_1.namedTypes.CallExpression.name:
            // @ts-ignore
            if ((0, match_1.default)(node.callee, { type: ast_types_1.namedTypes.Identifier.name, name: 'require' })) {
                return node.arguments[0].value;
            }
            return resolveToModule(path.get('callee'), importer);
        // @ts-ignore
        case ast_types_1.namedTypes.Identifier.name: // @ts-ignore
        case ast_types_1.namedTypes.JSXIdentifier.name: {
            const valuePath = (0, resolveToValue_1.default)(path, importer);
            if (valuePath !== path) {
                return resolveToModule(valuePath, importer);
            }
            if (!ast_types_1.namedTypes.Property.check(path.parentPath.node)) {
                break;
            }
        }
        // @ts-ignore // fall through
        case ast_types_1.namedTypes.Property.name: // @ts-ignore
        case ast_types_1.namedTypes.ObjectPattern.name:
            return resolveToModule(path.parentPath, importer);
        // @ts-ignore
        case ast_types_1.namedTypes.ImportDeclaration.name:
            return node.source.value;
        // @ts-ignore
        case ast_types_1.namedTypes.MemberExpression.name:
            while (path && ast_types_1.namedTypes.MemberExpression.check(path.node)) {
                path = path.get('object');
            }
            if (path) {
                return resolveToModule(path, importer);
            }
    }
    return null;
}
exports.default = resolveToModule;

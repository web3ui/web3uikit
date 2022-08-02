"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const printValue_1 = __importDefault(require("./printValue"));
function getParameterName(parameterPath) {
    switch (parameterPath.node.type) {
        // @ts-ignore
        case ast_types_1.namedTypes.Identifier.name:
            return parameterPath.node.name;
        // @ts-ignore
        case ast_types_1.namedTypes.AssignmentPattern.name:
            return getParameterName(parameterPath.get('left'));
        // @ts-ignore
        case ast_types_1.namedTypes.ObjectPattern.name: // @ts-ignore
        case ast_types_1.namedTypes.ArrayPattern.name:
            return (0, printValue_1.default)(parameterPath);
        // @ts-ignore
        case ast_types_1.namedTypes.RestElement.name:
            return '...' + getParameterName(parameterPath.get('argument'));
        default:
            throw new TypeError('Parameter name must be an Identifier, an AssignmentPattern an ' +
                `ObjectPattern or a RestElement, got ${parameterPath.node.type}`);
    }
}
exports.default = getParameterName;

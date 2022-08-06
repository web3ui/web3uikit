"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getNameOrValue_1 = __importDefault(require("./getNameOrValue"));
function getClassMemberValuePath(classDefinition, memberName) {
    // Fortunately it seems like that all members of a class body, be it
    // ClassProperty or MethodDefinition, have the same structure: They have a
    // "key" and a "value"
    return classDefinition
        .get('body', 'body')
        .filter((memberPath) => (!memberPath.node.computed || ast_types_1.namedTypes.Literal.check(memberPath.node.key)) &&
        !ast_types_1.namedTypes.PrivateName.check(memberPath.node.key) &&
        (0, getNameOrValue_1.default)(memberPath.get('key')) === memberName &&
        memberPath.node.kind !== 'set')
        .map((memberPath) => memberPath.get('value'))[0];
}
exports.default = getClassMemberValuePath;

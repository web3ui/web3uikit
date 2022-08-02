"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
/**
 * If node is an Identifier, it returns its name. If it is a literal, it returns
 * its value.
 */
function getNameOrValue(path, raw = false) {
    const node = path.node;
    if (ast_types_1.namedTypes.Identifier.check(node)) {
        return node.name;
    }
    else if (ast_types_1.namedTypes.Literal.check(node)) {
        //@ts-ignore
        return raw ? node.raw : node.value;
    }
    throw new TypeError('Argument must be an Identifier or a Literal');
}
exports.default = getNameOrValue;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
/**
 * Returns the path to the first part of the MemberExpression. I.e. given a
 * path representing
 *
 * foo.bar.baz
 *
 * it returns the path of/to `foo`.
 */
function getMemberExpressionRoot(memberExpressionPath) {
    do {
        memberExpressionPath = memberExpressionPath.get('object');
    } while (ast_types_1.namedTypes.MemberExpression.check(memberExpressionPath.node));
    return memberExpressionPath;
}
exports.default = getMemberExpressionRoot;

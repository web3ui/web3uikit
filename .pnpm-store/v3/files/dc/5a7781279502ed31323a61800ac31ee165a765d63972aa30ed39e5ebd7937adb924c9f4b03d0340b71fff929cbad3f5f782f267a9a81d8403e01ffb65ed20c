"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
function hasTypeAnnotation(path) {
    return !!path.node.typeAnnotation;
}
/**
 * Gets the most inner valuable TypeAnnotation from path. If no TypeAnnotation
 * can be found null is returned
 */
function getTypeAnnotation(path) {
    if (!hasTypeAnnotation(path))
        return null;
    let resultPath = path;
    do {
        resultPath = resultPath.get('typeAnnotation');
    } while (hasTypeAnnotation(resultPath) &&
        !ast_types_1.namedTypes.FlowType.check(resultPath.node) &&
        !ast_types_1.namedTypes.TSType.check(resultPath.node));
    return resultPath;
}
exports.default = getTypeAnnotation;

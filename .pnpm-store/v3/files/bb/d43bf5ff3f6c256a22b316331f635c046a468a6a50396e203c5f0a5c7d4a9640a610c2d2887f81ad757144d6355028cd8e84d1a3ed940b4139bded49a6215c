"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const isUnreachableFlowType_1 = __importDefault(require("../utils/isUnreachableFlowType"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
const flowUtilityTypes_1 = require("./flowUtilityTypes");
function tryResolveGenericTypeAnnotation(path, importer) {
    let typePath = (0, flowUtilityTypes_1.unwrapUtilityType)(path);
    let idPath;
    if (typePath.node.id) {
        idPath = typePath.get('id');
    }
    else if (ast_types_1.namedTypes.TSTypeReference.check(typePath.node)) {
        idPath = typePath.get('typeName');
    }
    else if (ast_types_1.namedTypes.TSExpressionWithTypeArguments.check(typePath.node)) {
        idPath = typePath.get('expression');
    }
    if (idPath) {
        typePath = (0, resolveToValue_1.default)(idPath, importer);
        if ((0, isUnreachableFlowType_1.default)(typePath)) {
            return;
        }
        if (ast_types_1.namedTypes.TypeAlias.check(typePath.node)) {
            return tryResolveGenericTypeAnnotation(typePath.get('right'), importer);
        }
        else if (ast_types_1.namedTypes.TSTypeAliasDeclaration.check(typePath.node)) {
            return tryResolveGenericTypeAnnotation(typePath.get('typeAnnotation'), importer);
        }
        return typePath;
    }
    return typePath;
}
/**
 * Given an React component (stateless or class) tries to find the
 * flow type for the props. If not found or not one of the supported
 * component types returns undefined.
 */
function resolveGenericTypeAnnotation(path, importer) {
    if (!path)
        return;
    const typePath = tryResolveGenericTypeAnnotation(path, importer);
    if (!typePath || typePath === path)
        return;
    return typePath;
}
exports.default = resolveGenericTypeAnnotation;

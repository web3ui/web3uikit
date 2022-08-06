"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolveGenericTypeAnnotation_1 = __importDefault(require("../utils/resolveGenericTypeAnnotation"));
function getTypeParameters(declaration, instantiation, inputParams, importer) {
    const params = {};
    const numInstantiationParams = instantiation.node.params.length;
    let i = 0;
    declaration.get('params').each((paramPath) => {
        const key = paramPath.node.name;
        const defaultTypePath = paramPath.node.default
            ? paramPath.get('default')
            : null;
        const typePath = i < numInstantiationParams
            ? instantiation.get('params', i++)
            : defaultTypePath;
        if (typePath) {
            let resolvedTypePath = (0, resolveGenericTypeAnnotation_1.default)(typePath, importer) || typePath;
            const typeName = resolvedTypePath.node.typeName || resolvedTypePath.node.id;
            if (typeName && inputParams && inputParams[typeName.name]) {
                resolvedTypePath = inputParams[typeName.name];
            }
            params[key] = resolvedTypePath;
        }
    });
    return params;
}
exports.default = getTypeParameters;

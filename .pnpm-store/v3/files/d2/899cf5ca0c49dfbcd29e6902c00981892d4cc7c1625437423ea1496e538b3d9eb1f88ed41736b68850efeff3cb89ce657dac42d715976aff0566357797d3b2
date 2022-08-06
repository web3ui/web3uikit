"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.applyToFlowTypeProperties = void 0;
const getMemberValuePath_1 = __importDefault(require("./getMemberValuePath"));
const getTypeAnnotation_1 = __importDefault(require("./getTypeAnnotation"));
const getTypeParameters_1 = __importDefault(require("./getTypeParameters"));
const isReactComponentClass_1 = __importDefault(require("./isReactComponentClass"));
const isReactForwardRefCall_1 = __importDefault(require("./isReactForwardRefCall"));
const resolveGenericTypeAnnotation_1 = __importDefault(require("./resolveGenericTypeAnnotation"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
function getStatelessPropsPath(componentDefinition, importer) {
    const value = (0, resolveToValue_1.default)(componentDefinition, importer);
    if ((0, isReactForwardRefCall_1.default)(value, importer)) {
        const inner = (0, resolveToValue_1.default)(value.get('arguments', 0), importer);
        return inner.get('params', 0);
    }
    return value.get('params', 0);
}
/**
 * Given an React component (stateless or class) tries to find the
 * flow type for the props. If not found or not one of the supported
 * component types returns null.
 */
exports.default = (path, importer) => {
    let typePath = null;
    if ((0, isReactComponentClass_1.default)(path, importer)) {
        const superTypes = path.get('superTypeParameters');
        if (superTypes.value) {
            const params = superTypes.get('params');
            if (params.value.length === 3) {
                typePath = params.get(1);
            }
            else {
                typePath = params.get(0);
            }
        }
        else {
            const propsMemberPath = (0, getMemberValuePath_1.default)(path, 'props', importer);
            if (!propsMemberPath) {
                return null;
            }
            typePath = (0, getTypeAnnotation_1.default)(propsMemberPath.parentPath);
        }
        return typePath;
    }
    const propsParam = getStatelessPropsPath(path, importer);
    if (propsParam) {
        typePath = (0, getTypeAnnotation_1.default)(propsParam);
    }
    return typePath;
};
function applyToFlowTypeProperties(documentation, path, callback, typeParams, importer) {
    if (path.node.properties) {
        path
            .get('properties')
            .each(propertyPath => callback(propertyPath, typeParams));
    }
    else if (path.node.members) {
        path
            .get('members')
            .each(propertyPath => callback(propertyPath, typeParams));
    }
    else if (path.node.type === 'InterfaceDeclaration') {
        if (path.node.extends) {
            applyExtends(documentation, path, callback, typeParams, importer);
        }
        path
            .get('body', 'properties')
            .each(propertyPath => callback(propertyPath, typeParams));
    }
    else if (path.node.type === 'TSInterfaceDeclaration') {
        if (path.node.extends) {
            applyExtends(documentation, path, callback, typeParams, importer);
        }
        path
            .get('body', 'body')
            .each(propertyPath => callback(propertyPath, typeParams));
    }
    else if (path.node.type === 'IntersectionTypeAnnotation' ||
        path.node.type === 'TSIntersectionType') {
        path
            .get('types')
            .each(typesPath => applyToFlowTypeProperties(documentation, typesPath, callback, typeParams, importer));
    }
    else if (path.node.type !== 'UnionTypeAnnotation') {
        // The react-docgen output format does not currently allow
        // for the expression of union types
        const typePath = (0, resolveGenericTypeAnnotation_1.default)(path, importer);
        if (typePath) {
            applyToFlowTypeProperties(documentation, typePath, callback, typeParams, importer);
        }
    }
}
exports.applyToFlowTypeProperties = applyToFlowTypeProperties;
function applyExtends(documentation, path, callback, typeParams, importer) {
    path.get('extends').each((extendsPath) => {
        const resolvedPath = (0, resolveGenericTypeAnnotation_1.default)(extendsPath, importer);
        if (resolvedPath) {
            if (resolvedPath.node.typeParameters && extendsPath.node.typeParameters) {
                typeParams = (0, getTypeParameters_1.default)(resolvedPath.get('typeParameters'), extendsPath.get('typeParameters'), typeParams, importer);
            }
            applyToFlowTypeProperties(documentation, resolvedPath, callback, typeParams, importer);
        }
        else {
            const id = extendsPath.node.id ||
                extendsPath.node.typeName ||
                extendsPath.node.expression;
            if (id && id.type === 'Identifier') {
                documentation.addComposes(id.name);
            }
        }
    });
}

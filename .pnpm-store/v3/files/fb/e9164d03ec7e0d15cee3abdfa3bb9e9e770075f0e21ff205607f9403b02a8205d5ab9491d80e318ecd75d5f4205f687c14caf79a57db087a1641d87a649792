"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getPropertyName_1 = __importDefault(require("./getPropertyName"));
const printValue_1 = __importDefault(require("./printValue"));
const getTypeAnnotation_1 = __importDefault(require("../utils/getTypeAnnotation"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
const resolveObjectKeysToArray_1 = require("../utils/resolveObjectKeysToArray");
const getTypeParameters_1 = __importDefault(require("../utils/getTypeParameters"));
const tsTypes = {
    TSAnyKeyword: 'any',
    TSBooleanKeyword: 'boolean',
    TSUnknownKeyword: 'unknown',
    TSNeverKeyword: 'never',
    TSNullKeyword: 'null',
    TSUndefinedKeyword: 'undefined',
    TSNumberKeyword: 'number',
    TSStringKeyword: 'string',
    TSSymbolKeyword: 'symbol',
    TSThisType: 'this',
    TSObjectKeyword: 'object',
    TSVoidKeyword: 'void',
};
const namedTypes = {
    TSArrayType: handleTSArrayType,
    TSTypeReference: handleTSTypeReference,
    TSTypeLiteral: handleTSTypeLiteral,
    TSInterfaceDeclaration: handleTSInterfaceDeclaration,
    TSUnionType: handleTSUnionType,
    TSFunctionType: handleTSFunctionType,
    TSIntersectionType: handleTSIntersectionType,
    TSMappedType: handleTSMappedType,
    TSTupleType: handleTSTupleType,
    TSTypeQuery: handleTSTypeQuery,
    TSTypeOperator: handleTSTypeOperator,
    TSIndexedAccessType: handleTSIndexedAccessType,
};
function handleTSArrayType(path, typeParams, importer) {
    return {
        name: 'Array',
        elements: [
            getTSTypeWithResolvedTypes(path.get('elementType'), typeParams, importer),
        ],
        raw: (0, printValue_1.default)(path),
    };
}
function handleTSTypeReference(path, typeParams, importer) {
    let type;
    if (ast_types_1.namedTypes.TSQualifiedName.check(path.node.typeName)) {
        const typeName = path.get('typeName');
        if (typeName.node.left.name === 'React') {
            type = {
                name: `${typeName.node.left.name}${typeName.node.right.name}`,
                raw: (0, printValue_1.default)(typeName),
            };
        }
        else {
            type = { name: (0, printValue_1.default)(typeName).replace(/<.*>$/, '') };
        }
    }
    else {
        type = { name: path.node.typeName.name };
    }
    const resolvedPath = (typeParams && typeParams[type.name]) ||
        (0, resolveToValue_1.default)(path.get('typeName'), importer);
    if (path.node.typeParameters && resolvedPath.node.typeParameters) {
        typeParams = (0, getTypeParameters_1.default)(resolvedPath.get('typeParameters'), path.get('typeParameters'), typeParams, importer);
    }
    if (typeParams && typeParams[type.name]) {
        // Open question: Why is this `null` instead of `typeParams`
        type = getTSTypeWithResolvedTypes(resolvedPath, null, importer);
    }
    if (resolvedPath && resolvedPath.node.typeAnnotation) {
        type = getTSTypeWithResolvedTypes(resolvedPath.get('typeAnnotation'), typeParams, importer);
    }
    else if (path.node.typeParameters) {
        const params = path.get('typeParameters').get('params');
        type = {
            ...type,
            elements: params.map((param) => getTSTypeWithResolvedTypes(param, typeParams, importer)),
            raw: (0, printValue_1.default)(path),
        };
    }
    return type;
}
function getTSTypeWithRequirements(path, typeParams, importer) {
    const type = getTSTypeWithResolvedTypes(path, typeParams, importer);
    type.required = !path.parentPath.node.optional;
    return type;
}
function handleTSTypeLiteral(path, typeParams, importer) {
    const type = {
        name: 'signature',
        type: 'object',
        raw: (0, printValue_1.default)(path),
        signature: { properties: [] },
    };
    path.get('members').each(param => {
        if (ast_types_1.namedTypes.TSPropertySignature.check(param.node) ||
            ast_types_1.namedTypes.TSMethodSignature.check(param.node)) {
            const propName = (0, getPropertyName_1.default)(param, importer);
            if (!propName) {
                return;
            }
            type.signature.properties.push({
                key: propName,
                value: getTSTypeWithRequirements(param.get('typeAnnotation'), typeParams, importer),
            });
        }
        else if (ast_types_1.namedTypes.TSCallSignatureDeclaration.check(param.node)) {
            type.signature.constructor = handleTSFunctionType(param, typeParams, importer);
        }
        else if (ast_types_1.namedTypes.TSIndexSignature.check(param.node)) {
            type.signature.properties.push({
                key: getTSTypeWithResolvedTypes(param.get('parameters').get(0).get('typeAnnotation'), typeParams, importer),
                value: getTSTypeWithRequirements(param.get('typeAnnotation'), typeParams, importer),
            });
        }
    });
    return type;
}
function handleTSInterfaceDeclaration(path) {
    // Interfaces are handled like references which would be documented separately,
    // rather than inlined like type aliases.
    return {
        name: path.node.id.name,
    };
}
function handleTSUnionType(path, typeParams, importer) {
    return {
        name: 'union',
        raw: (0, printValue_1.default)(path),
        elements: path
            .get('types')
            .map(subType => getTSTypeWithResolvedTypes(subType, typeParams, importer)),
    };
}
function handleTSIntersectionType(path, typeParams, importer) {
    return {
        name: 'intersection',
        raw: (0, printValue_1.default)(path),
        elements: path
            .get('types')
            .map(subType => getTSTypeWithResolvedTypes(subType, typeParams, importer)),
    };
}
function handleTSMappedType(path, typeParams, importer) {
    const key = getTSTypeWithResolvedTypes(path.get('typeParameter').get('constraint'), typeParams, importer);
    key.required = !path.node.optional;
    return {
        name: 'signature',
        type: 'object',
        raw: (0, printValue_1.default)(path),
        signature: {
            properties: [
                {
                    key,
                    value: getTSTypeWithResolvedTypes(path.get('typeAnnotation'), typeParams, importer),
                },
            ],
        },
    };
}
function handleTSFunctionType(path, typeParams, importer) {
    const type = {
        name: 'signature',
        type: 'function',
        raw: (0, printValue_1.default)(path),
        signature: {
            arguments: [],
            return: getTSTypeWithResolvedTypes(path.get('typeAnnotation'), typeParams, importer),
        },
    };
    path.get('parameters').each(param => {
        const typeAnnotation = (0, getTypeAnnotation_1.default)(param);
        const arg = {
            name: param.node.name || '',
            type: typeAnnotation
                ? getTSTypeWithResolvedTypes(typeAnnotation, typeParams, importer)
                : undefined,
        };
        if (param.node.name === 'this') {
            type.signature.this = arg.type;
            return;
        }
        if (param.node.type === 'RestElement') {
            arg.name = param.node.argument.name;
            arg.rest = true;
        }
        type.signature.arguments.push(arg);
    });
    return type;
}
function handleTSTupleType(path, typeParams, importer) {
    const type = {
        name: 'tuple',
        raw: (0, printValue_1.default)(path),
        elements: [],
    };
    path.get('elementTypes').each(param => {
        type.elements.push(getTSTypeWithResolvedTypes(param, typeParams, importer));
    });
    return type;
}
function handleTSTypeQuery(path, typeParams, importer) {
    const resolvedPath = (0, resolveToValue_1.default)(path.get('exprName'), importer);
    if (resolvedPath && resolvedPath.node.typeAnnotation) {
        return getTSTypeWithResolvedTypes(resolvedPath.get('typeAnnotation'), typeParams, importer);
    }
    return { name: path.node.exprName.name };
}
function handleTSTypeOperator(path, _typeParams, importer) {
    if (path.node.operator !== 'keyof') {
        return null;
    }
    let value = path.get('typeAnnotation');
    if (ast_types_1.namedTypes.TSTypeQuery.check(value.node)) {
        value = value.get('exprName');
    }
    else if (value.node.id) {
        value = value.get('id');
    }
    const resolvedPath = (0, resolveToValue_1.default)(value, importer);
    if (resolvedPath &&
        (ast_types_1.namedTypes.ObjectExpression.check(resolvedPath.node) ||
            ast_types_1.namedTypes.TSTypeLiteral.check(resolvedPath.node))) {
        const keys = (0, resolveObjectKeysToArray_1.resolveObjectToNameArray)(resolvedPath, importer, true);
        if (keys) {
            return {
                name: 'union',
                raw: (0, printValue_1.default)(path),
                elements: keys.map(key => ({ name: 'literal', value: key })),
            };
        }
    }
    return null;
}
function handleTSIndexedAccessType(path, typeParams, importer) {
    const objectType = getTSTypeWithResolvedTypes(path.get('objectType'), typeParams, importer);
    const indexType = getTSTypeWithResolvedTypes(path.get('indexType'), typeParams, importer);
    // We only get the signature if the objectType is a type (vs interface)
    if (!objectType.signature)
        return {
            name: `${objectType.name}[${indexType.value ? indexType.value.toString() : indexType.name}]`,
            raw: (0, printValue_1.default)(path),
        };
    const resolvedType = objectType.signature.properties.find(p => {
        // indexType.value = "'foo'"
        return indexType.value && p.key === indexType.value.replace(/['"]+/g, '');
    });
    if (!resolvedType) {
        return { name: 'unknown' };
    }
    return {
        name: resolvedType.value.name,
        raw: (0, printValue_1.default)(path),
    };
}
let visitedTypes = {};
function getTSTypeWithResolvedTypes(path, typeParams, importer) {
    if (ast_types_1.namedTypes.TSTypeAnnotation.check(path.node)) {
        path = path.get('typeAnnotation');
    }
    const node = path.node;
    let type;
    const isTypeAlias = ast_types_1.namedTypes.TSTypeAliasDeclaration.check(path.parentPath.node);
    // When we see a typealias mark it as visited so that the next
    // call of this function does not run into an endless loop
    if (isTypeAlias) {
        if (visitedTypes[path.parentPath.node.id.name] === true) {
            // if we are currently visiting this node then just return the name
            // as we are starting to endless loop
            return { name: path.parentPath.node.id.name };
        }
        else if (typeof visitedTypes[path.parentPath.node.id.name] === 'object') {
            // if we already resolved the type simple return it
            return visitedTypes[path.parentPath.node.id.name];
        }
        // mark the type as visited
        visitedTypes[path.parentPath.node.id.name] = true;
    }
    if (node.type in tsTypes) {
        type = { name: tsTypes[node.type] };
    }
    else if (ast_types_1.namedTypes.TSLiteralType.check(node)) {
        type = {
            name: 'literal',
            // @ts-ignore
            value: node.literal.raw || `${node.literal.value}`,
        };
    }
    else if (node.type in namedTypes) {
        type = namedTypes[node.type](path, typeParams, importer);
    }
    else {
        type = { name: 'unknown' };
    }
    if (isTypeAlias) {
        // mark the type as unvisited so that further calls can resolve the type again
        visitedTypes[path.parentPath.node.id.name] = type;
    }
    return type;
}
/**
 * Tries to identify the typescript type by inspecting the path for known
 * typescript type names. This method doesn't check whether the found type is actually
 * existing. It simply assumes that a match is always valid.
 *
 * If there is no match, "unknown" is returned.
 */
function getTSType(path, typeParamMap, importer) {
    // Empty visited types before an after run
    // Before: in case the detection threw and we rerun again
    // After: cleanup memory after we are done here
    visitedTypes = {};
    const type = getTSTypeWithResolvedTypes(path, typeParamMap, importer);
    visitedTypes = {};
    return type;
}
exports.default = getTSType;

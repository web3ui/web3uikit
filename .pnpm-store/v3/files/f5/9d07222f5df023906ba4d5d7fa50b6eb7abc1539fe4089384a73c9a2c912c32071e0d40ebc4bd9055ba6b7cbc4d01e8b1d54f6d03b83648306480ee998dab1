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
const flowTypes = {
    AnyTypeAnnotation: 'any',
    BooleanTypeAnnotation: 'boolean',
    MixedTypeAnnotation: 'mixed',
    NullLiteralTypeAnnotation: 'null',
    NumberTypeAnnotation: 'number',
    StringTypeAnnotation: 'string',
    VoidTypeAnnotation: 'void',
    EmptyTypeAnnotation: 'empty',
};
const flowLiteralTypes = {
    BooleanLiteralTypeAnnotation: 1,
    NumberLiteralTypeAnnotation: 1,
    StringLiteralTypeAnnotation: 1,
};
const namedTypes = {
    ArrayTypeAnnotation: handleArrayTypeAnnotation,
    GenericTypeAnnotation: handleGenericTypeAnnotation,
    ObjectTypeAnnotation: handleObjectTypeAnnotation,
    InterfaceDeclaration: handleInterfaceDeclaration,
    UnionTypeAnnotation: handleUnionTypeAnnotation,
    NullableTypeAnnotation: handleNullableTypeAnnotation,
    FunctionTypeAnnotation: handleFunctionTypeAnnotation,
    IntersectionTypeAnnotation: handleIntersectionTypeAnnotation,
    TupleTypeAnnotation: handleTupleTypeAnnotation,
    TypeofTypeAnnotation: handleTypeofTypeAnnotation,
};
function getFlowTypeWithRequirements(path, typeParams, importer) {
    const type = getFlowTypeWithResolvedTypes(path, typeParams, importer);
    type.required = !path.parentPath.node.optional;
    return type;
}
function handleKeysHelper(path, importer) {
    let value = path.get('typeParameters', 'params', 0);
    if (ast_types_1.namedTypes.TypeofTypeAnnotation.check(value.node)) {
        value = value.get('argument', 'id');
    }
    else if (!ast_types_1.namedTypes.ObjectTypeAnnotation.check(value.node)) {
        value = value.get('id');
    }
    const resolvedPath = (0, resolveToValue_1.default)(value, importer);
    if (resolvedPath &&
        (ast_types_1.namedTypes.ObjectExpression.check(resolvedPath.node) ||
            ast_types_1.namedTypes.ObjectTypeAnnotation.check(resolvedPath.node))) {
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
function handleArrayTypeAnnotation(path, typeParams, importer) {
    return {
        name: 'Array',
        elements: [
            getFlowTypeWithResolvedTypes(path.get('elementType'), typeParams, importer),
        ],
        raw: (0, printValue_1.default)(path),
    };
}
function handleGenericTypeAnnotation(path, typeParams, importer) {
    if (path.node.id.name === '$Keys' && path.node.typeParameters) {
        return handleKeysHelper(path, importer);
    }
    let type;
    if (ast_types_1.namedTypes.QualifiedTypeIdentifier.check(path.node.id)) {
        const id = path.get('id');
        if (id.node.qualification.name === 'React') {
            type = {
                name: `${id.node.qualification.name}${id.node.id.name}`,
                raw: (0, printValue_1.default)(id),
            };
        }
        else {
            type = { name: (0, printValue_1.default)(id).replace(/<.*>$/, '') };
        }
    }
    else {
        type = { name: path.node.id.name };
    }
    const resolvedPath = (typeParams && typeParams[type.name]) ||
        (0, resolveToValue_1.default)(path.get('id'), importer);
    if (path.node.typeParameters && resolvedPath.node.typeParameters) {
        typeParams = (0, getTypeParameters_1.default)(resolvedPath.get('typeParameters'), path.get('typeParameters'), typeParams, importer);
    }
    if (typeParams &&
        typeParams[type.name] &&
        // @ts-ignore
        typeParams[type.name].value.type === ast_types_1.namedTypes.GenericTypeAnnotation.name) {
        return type;
    }
    if (typeParams && typeParams[type.name]) {
        type = getFlowTypeWithResolvedTypes(resolvedPath, typeParams, importer);
    }
    if (resolvedPath && resolvedPath.node.right) {
        type = getFlowTypeWithResolvedTypes(resolvedPath.get('right'), typeParams, importer);
    }
    else if (path.node.typeParameters) {
        const params = path.get('typeParameters').get('params');
        type = {
            ...type,
            elements: params.map((param) => getFlowTypeWithResolvedTypes(param, typeParams, importer)),
            raw: (0, printValue_1.default)(path),
        };
    }
    return type;
}
function handleObjectTypeAnnotation(path, typeParams, importer) {
    const type = {
        name: 'signature',
        type: 'object',
        raw: (0, printValue_1.default)(path),
        signature: { properties: [] },
    };
    path.get('callProperties').each(param => {
        type.signature.constructor = getFlowTypeWithResolvedTypes(param.get('value'), typeParams, importer);
    });
    path.get('indexers').each(param => {
        type.signature.properties.push({
            key: getFlowTypeWithResolvedTypes(param.get('key'), typeParams, importer),
            value: getFlowTypeWithRequirements(param.get('value'), typeParams, importer),
        });
    });
    path.get('properties').each(param => {
        if (ast_types_1.namedTypes.ObjectTypeProperty.check(param.node)) {
            type.signature.properties.push({
                // For ObjectTypeProperties `getPropertyName` always returns string
                key: (0, getPropertyName_1.default)(param, importer),
                value: getFlowTypeWithRequirements(param.get('value'), typeParams, importer),
            });
        }
        else if (ast_types_1.namedTypes.ObjectTypeSpreadProperty.check(param.node)) {
            let spreadObject = (0, resolveToValue_1.default)(param.get('argument'), importer);
            if (ast_types_1.namedTypes.GenericTypeAnnotation.check(spreadObject.node)) {
                const typeAlias = (0, resolveToValue_1.default)(spreadObject.get('id'), importer);
                if (ast_types_1.namedTypes.ObjectTypeAnnotation.check(typeAlias.get('right').node)) {
                    spreadObject = (0, resolveToValue_1.default)(typeAlias.get('right'), importer);
                }
            }
            if (ast_types_1.namedTypes.ObjectTypeAnnotation.check(spreadObject.node)) {
                const props = handleObjectTypeAnnotation(spreadObject, typeParams, importer);
                type.signature.properties.push(...props.signature.properties);
            }
        }
    });
    return type;
}
function handleInterfaceDeclaration(path) {
    // Interfaces are handled like references which would be documented separately,
    // rather than inlined like type aliases.
    return {
        name: path.node.id.name,
    };
}
function handleUnionTypeAnnotation(path, typeParams, importer) {
    return {
        name: 'union',
        raw: (0, printValue_1.default)(path),
        elements: path
            .get('types')
            .map(subType => getFlowTypeWithResolvedTypes(subType, typeParams, importer)),
    };
}
function handleIntersectionTypeAnnotation(path, typeParams, importer) {
    return {
        name: 'intersection',
        raw: (0, printValue_1.default)(path),
        elements: path
            .get('types')
            .map(subType => getFlowTypeWithResolvedTypes(subType, typeParams, importer)),
    };
}
function handleNullableTypeAnnotation(path, typeParams, importer) {
    const typeAnnotation = (0, getTypeAnnotation_1.default)(path);
    if (!typeAnnotation)
        return null;
    const type = getFlowTypeWithResolvedTypes(typeAnnotation, typeParams, importer);
    type.nullable = true;
    return type;
}
function handleFunctionTypeAnnotation(path, typeParams, importer) {
    const type = {
        name: 'signature',
        type: 'function',
        raw: (0, printValue_1.default)(path),
        signature: {
            arguments: [],
            return: getFlowTypeWithResolvedTypes(path.get('returnType'), typeParams, importer),
        },
    };
    path.get('params').each(param => {
        const typeAnnotation = (0, getTypeAnnotation_1.default)(param);
        type.signature.arguments.push({
            name: param.node.name ? param.node.name.name : '',
            type: typeAnnotation
                ? getFlowTypeWithResolvedTypes(typeAnnotation, typeParams, importer)
                : undefined,
        });
    });
    if (path.node.rest) {
        const rest = path.get('rest');
        const typeAnnotation = (0, getTypeAnnotation_1.default)(rest);
        type.signature.arguments.push({
            name: rest.node.name ? rest.node.name.name : '',
            type: typeAnnotation
                ? getFlowTypeWithResolvedTypes(typeAnnotation, typeParams, importer)
                : undefined,
            rest: true,
        });
    }
    return type;
}
function handleTupleTypeAnnotation(path, typeParams, importer) {
    const type = {
        name: 'tuple',
        raw: (0, printValue_1.default)(path),
        elements: [],
    };
    path.get('types').each(param => {
        type.elements.push(getFlowTypeWithResolvedTypes(param, typeParams, importer));
    });
    return type;
}
function handleTypeofTypeAnnotation(path, typeParams, importer) {
    return getFlowTypeWithResolvedTypes(path.get('argument'), typeParams, importer);
}
let visitedTypes = {};
function getFlowTypeWithResolvedTypes(path, typeParams, importer) {
    const node = path.node;
    let type = null;
    const isTypeAlias = ast_types_1.namedTypes.TypeAlias.check(path.parentPath.node);
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
    if (node.type in flowTypes) {
        type = { name: flowTypes[node.type] };
    }
    else if (node.type in flowLiteralTypes) {
        type = { name: 'literal', value: node.raw || `${node.value}` };
    }
    else if (node.type in namedTypes) {
        type = namedTypes[node.type](path, typeParams, importer);
    }
    if (!type) {
        type = { name: 'unknown' };
    }
    if (isTypeAlias) {
        // mark the type as unvisited so that further calls can resolve the type again
        visitedTypes[path.parentPath.node.id.name] = type;
    }
    return type;
}
/**
 * Tries to identify the flow type by inspecting the path for known
 * flow type names. This method doesn't check whether the found type is actually
 * existing. It simply assumes that a match is always valid.
 *
 * If there is no match, "unknown" is returned.
 */
function getFlowType(path, typeParams, importer) {
    // Empty visited types before an after run
    // Before: in case the detection threw and we rerun again
    // After: cleanup memory after we are done here
    visitedTypes = {};
    const type = getFlowTypeWithResolvedTypes(path, typeParams, importer);
    visitedTypes = {};
    return type;
}
exports.default = getFlowType;

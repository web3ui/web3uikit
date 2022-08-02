"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const docblock_1 = require("./docblock");
const getFlowType_1 = __importDefault(require("./getFlowType"));
const getTSType_1 = __importDefault(require("./getTSType"));
const getParameterName_1 = __importDefault(require("./getParameterName"));
const getPropertyName_1 = __importDefault(require("./getPropertyName"));
const getTypeAnnotation_1 = __importDefault(require("./getTypeAnnotation"));
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
function getMethodFunctionExpression(methodPath, importer) {
    const exprPath = ast_types_1.namedTypes.AssignmentExpression.check(methodPath.node)
        ? methodPath.get('right')
        : methodPath.get('value');
    return (0, resolveToValue_1.default)(exprPath, importer);
}
function getMethodParamsDoc(methodPath, importer) {
    const params = [];
    const functionExpression = getMethodFunctionExpression(methodPath, importer);
    // Extract param flow types.
    functionExpression.get('params').each((paramPath) => {
        let type = null;
        const typePath = (0, getTypeAnnotation_1.default)(paramPath);
        if (typePath && ast_types_1.namedTypes.Flow.check(typePath.node)) {
            type = (0, getFlowType_1.default)(typePath, null, importer);
            if (ast_types_1.namedTypes.GenericTypeAnnotation.check(typePath.node)) {
                // @ts-ignore
                type.alias = typePath.node.id.name;
            }
        }
        else if (typePath) {
            type = (0, getTSType_1.default)(typePath, null, importer);
            if (ast_types_1.namedTypes.TSTypeReference.check(typePath.node)) {
                // @ts-ignore
                type.alias = typePath.node.typeName.name;
            }
        }
        const param = {
            name: (0, getParameterName_1.default)(paramPath),
            optional: paramPath.node.optional,
            type,
        };
        params.push(param);
    });
    return params;
}
// Extract flow return type.
function getMethodReturnDoc(methodPath, importer) {
    const functionExpression = getMethodFunctionExpression(methodPath, importer);
    if (functionExpression.node.returnType) {
        const returnType = (0, getTypeAnnotation_1.default)(functionExpression.get('returnType'));
        if (returnType && ast_types_1.namedTypes.Flow.check(returnType.node)) {
            return { type: (0, getFlowType_1.default)(returnType, null, importer) };
        }
        else if (returnType) {
            return { type: (0, getTSType_1.default)(returnType, null, importer) };
        }
    }
    return null;
}
function getMethodModifiers(methodPath) {
    if (ast_types_1.namedTypes.AssignmentExpression.check(methodPath.node)) {
        return ['static'];
    }
    // Otherwise this is a method/property node
    const modifiers = [];
    if (methodPath.node.static) {
        modifiers.push('static');
    }
    if (methodPath.node.kind === 'get' || methodPath.node.kind === 'set') {
        modifiers.push(methodPath.node.kind);
    }
    const functionExpression = methodPath.get('value').node;
    if (functionExpression.generator) {
        modifiers.push('generator');
    }
    if (functionExpression.async) {
        modifiers.push('async');
    }
    return modifiers;
}
function getMethodName(methodPath, importer) {
    if (ast_types_1.namedTypes.AssignmentExpression.check(methodPath.node) &&
        ast_types_1.namedTypes.MemberExpression.check(methodPath.node.left)) {
        const left = methodPath.node.left;
        const property = left.property;
        if (!left.computed) {
            // @ts-ignore
            return property.name;
        }
        if (ast_types_1.namedTypes.Literal.check(property)) {
            return String(property.value);
        }
        return null;
    }
    return (0, getPropertyName_1.default)(methodPath, importer);
}
function getMethodAccessibility(methodPath) {
    if (ast_types_1.namedTypes.AssignmentExpression.check(methodPath.node)) {
        return null;
    }
    // Otherwise this is a method/property node
    return methodPath.node.accessibility;
}
function getMethodDocblock(methodPath) {
    if (ast_types_1.namedTypes.AssignmentExpression.check(methodPath.node)) {
        let path = methodPath;
        do {
            path = path.parent;
        } while (path && !ast_types_1.namedTypes.ExpressionStatement.check(path.node));
        if (path) {
            return (0, docblock_1.getDocblock)(path);
        }
        return null;
    }
    // Otherwise this is a method/property node
    return (0, docblock_1.getDocblock)(methodPath);
}
// Gets the documentation object for a component method.
// Component methods may be represented as class/object method/property nodes
// or as assignment expresions of the form `Component.foo = function() {}`
function getMethodDocumentation(methodPath, importer) {
    if (getMethodAccessibility(methodPath) === 'private') {
        return null;
    }
    const name = getMethodName(methodPath, importer);
    if (!name)
        return null;
    return {
        name,
        docblock: getMethodDocblock(methodPath),
        modifiers: getMethodModifiers(methodPath),
        params: getMethodParamsDoc(methodPath, importer),
        returns: getMethodReturnDoc(methodPath, importer),
    };
}
exports.default = getMethodDocumentation;

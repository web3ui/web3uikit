"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getPropertyName_1 = __importDefault(require("../utils/getPropertyName"));
const getMemberValuePath_1 = __importDefault(require("../utils/getMemberValuePath"));
const printValue_1 = __importDefault(require("../utils/printValue"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
const resolveFunctionDefinitionToReturnValue_1 = __importDefault(require("../utils/resolveFunctionDefinitionToReturnValue"));
const isReactComponentClass_1 = __importDefault(require("../utils/isReactComponentClass"));
const isReactForwardRefCall_1 = __importDefault(require("../utils/isReactForwardRefCall"));
function getDefaultValue(path, importer) {
    let node = path.node;
    let defaultValue;
    if (ast_types_1.namedTypes.Literal.check(node)) {
        // @ts-ignore
        defaultValue = node.raw;
    }
    else {
        if (ast_types_1.namedTypes.AssignmentPattern.check(path.node)) {
            path = (0, resolveToValue_1.default)(path.get('right'), importer);
        }
        else {
            path = (0, resolveToValue_1.default)(path, importer);
        }
        if (ast_types_1.namedTypes.ImportDeclaration.check(path.node)) {
            defaultValue = node.name;
        }
        else {
            node = path.node;
            defaultValue = (0, printValue_1.default)(path);
        }
    }
    if (typeof defaultValue !== 'undefined') {
        return {
            value: defaultValue,
            computed: ast_types_1.namedTypes.CallExpression.check(node) ||
                ast_types_1.namedTypes.MemberExpression.check(node) ||
                ast_types_1.namedTypes.Identifier.check(node),
        };
    }
    return null;
}
function getStatelessPropsPath(componentDefinition, importer) {
    let value = (0, resolveToValue_1.default)(componentDefinition, importer);
    if ((0, isReactForwardRefCall_1.default)(value, importer)) {
        value = (0, resolveToValue_1.default)(value.get('arguments', 0), importer);
    }
    return value.get('params', 0);
}
function getDefaultPropsPath(componentDefinition, importer) {
    let defaultPropsPath = (0, getMemberValuePath_1.default)(componentDefinition, 'defaultProps', importer);
    if (!defaultPropsPath) {
        return null;
    }
    defaultPropsPath = (0, resolveToValue_1.default)(defaultPropsPath, importer);
    if (!defaultPropsPath) {
        return null;
    }
    if (ast_types_1.namedTypes.FunctionExpression.check(defaultPropsPath.node) ||
        ast_types_1.namedTypes.FunctionDeclaration.check(defaultPropsPath.node)) {
        // Find the value that is returned from the function and process it if it is
        // an object literal.
        const returnValue = (0, resolveFunctionDefinitionToReturnValue_1.default)(defaultPropsPath, importer);
        if (returnValue && ast_types_1.namedTypes.ObjectExpression.check(returnValue.node)) {
            defaultPropsPath = returnValue;
        }
    }
    return defaultPropsPath;
}
function getDefaultValuesFromProps(properties, documentation, isStateless, importer) {
    properties
        // Don't evaluate property if component is functional and the node is not an AssignmentPattern
        .filter(propertyPath => !isStateless ||
        ast_types_1.namedTypes.AssignmentPattern.check(propertyPath.get('value').node), null)
        .forEach(propertyPath => {
        if (ast_types_1.namedTypes.Property.check(propertyPath.node)) {
            const propName = (0, getPropertyName_1.default)(propertyPath, importer);
            if (!propName)
                return;
            const propDescriptor = documentation.getPropDescriptor(propName);
            const defaultValue = getDefaultValue(isStateless
                ? propertyPath.get('value', 'right')
                : propertyPath.get('value'), importer);
            if (defaultValue) {
                propDescriptor.defaultValue = defaultValue;
            }
        }
        else if (ast_types_1.namedTypes.SpreadElement.check(propertyPath.node)) {
            const resolvedValuePath = (0, resolveToValue_1.default)(propertyPath.get('argument'), importer);
            if (ast_types_1.namedTypes.ObjectExpression.check(resolvedValuePath.node)) {
                getDefaultValuesFromProps(resolvedValuePath.get('properties'), documentation, isStateless, importer);
            }
        }
    });
}
function defaultPropsHandler(documentation, componentDefinition, importer) {
    let statelessProps = null;
    const defaultPropsPath = getDefaultPropsPath(componentDefinition, importer);
    /**
     * function, lazy, memo, forwardRef etc components can resolve default props as well
     */
    if (!(0, isReactComponentClass_1.default)(componentDefinition, importer)) {
        statelessProps = getStatelessPropsPath(componentDefinition, importer);
    }
    // Do both statelessProps and defaultProps if both are available so defaultProps can override
    if (statelessProps && ast_types_1.namedTypes.ObjectPattern.check(statelessProps.node)) {
        getDefaultValuesFromProps(statelessProps.get('properties'), documentation, true, importer);
    }
    if (defaultPropsPath && ast_types_1.namedTypes.ObjectExpression.check(defaultPropsPath.node)) {
        getDefaultValuesFromProps(defaultPropsPath.get('properties'), documentation, false, importer);
    }
}
exports.default = defaultPropsHandler;

"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const flowUtilityTypes_1 = require("../utils/flowUtilityTypes");
const getFlowType_1 = __importDefault(require("../utils/getFlowType"));
const getFlowTypeFromReactComponent_1 = __importStar(require("../utils/getFlowTypeFromReactComponent"));
const getPropertyName_1 = __importDefault(require("../utils/getPropertyName"));
const getTSType_1 = __importDefault(require("../utils/getTSType"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
const setPropDescription_1 = __importDefault(require("../utils/setPropDescription"));
function setPropDescriptor(documentation, path, typeParams, importer) {
    if (ast_types_1.namedTypes.ObjectTypeSpreadProperty.check(path.node)) {
        const argument = (0, flowUtilityTypes_1.unwrapUtilityType)(path.get('argument'));
        if (ast_types_1.namedTypes.ObjectTypeAnnotation.check(argument.node)) {
            (0, getFlowTypeFromReactComponent_1.applyToFlowTypeProperties)(documentation, argument, (propertyPath, innerTypeParams) => {
                setPropDescriptor(documentation, propertyPath, innerTypeParams, importer);
            }, typeParams, importer);
            return;
        }
        const name = argument.get('id').get('name');
        const resolvedPath = (0, resolveToValue_1.default)(name, 
        // TODO: Make this configurable with a pragma comment?
        importer);
        if (resolvedPath && ast_types_1.namedTypes.TypeAlias.check(resolvedPath.node)) {
            const right = resolvedPath.get('right');
            (0, getFlowTypeFromReactComponent_1.applyToFlowTypeProperties)(documentation, right, (propertyPath, innerTypeParams) => {
                setPropDescriptor(documentation, propertyPath, innerTypeParams, importer);
            }, typeParams, importer);
        }
        else if (!argument.node.typeParameters) {
            documentation.addComposes(name.node.name);
        }
    }
    else if (ast_types_1.namedTypes.ObjectTypeProperty.check(path.node)) {
        const type = (0, getFlowType_1.default)(path.get('value'), typeParams, importer);
        const propName = (0, getPropertyName_1.default)(path, importer);
        if (!propName)
            return;
        const propDescriptor = documentation.getPropDescriptor(propName);
        propDescriptor.required = !path.node.optional;
        propDescriptor.flowType = type;
        // We are doing this here instead of in a different handler
        // to not need to duplicate the logic for checking for
        // imported types that are spread in to props.
        (0, setPropDescription_1.default)(documentation, path, importer);
    }
    else if (ast_types_1.namedTypes.TSPropertySignature.check(path.node)) {
        const type = (0, getTSType_1.default)(path.get('typeAnnotation'), typeParams, importer);
        const propName = (0, getPropertyName_1.default)(path, importer);
        if (!propName)
            return;
        const propDescriptor = documentation.getPropDescriptor(propName);
        propDescriptor.required = !path.node.optional;
        propDescriptor.tsType = type;
        // We are doing this here instead of in a different handler
        // to not need to duplicate the logic for checking for
        // imported types that are spread in to props.
        (0, setPropDescription_1.default)(documentation, path, importer);
    }
}
/**
 * This handler tries to find flow Type annotated react components and extract
 * its types to the documentation. It also extracts docblock comments which are
 * inlined in the type definition.
 */
function flowTypeHandler(documentation, path, importer) {
    const flowTypesPath = (0, getFlowTypeFromReactComponent_1.default)(path, importer);
    if (!flowTypesPath) {
        return;
    }
    (0, getFlowTypeFromReactComponent_1.applyToFlowTypeProperties)(documentation, flowTypesPath, (propertyPath, typeParams) => {
        setPropDescriptor(documentation, propertyPath, typeParams, importer);
    }, null, importer);
}
exports.default = flowTypeHandler;

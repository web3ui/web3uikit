"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getMemberValuePath_1 = __importDefault(require("../utils/getMemberValuePath"));
const resolveToModule_1 = __importDefault(require("../utils/resolveToModule"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
/**
 * It resolves the path to its module name and adds it to the "composes" entry
 * in the documentation.
 */
function amendComposes(documentation, path, importer) {
    const moduleName = (0, resolveToModule_1.default)(path, importer);
    if (moduleName) {
        documentation.addComposes(moduleName);
    }
}
function processObjectExpression(documentation, path, importer) {
    path.get('properties').each(function (propertyPath) {
        switch (propertyPath.node.type) {
            // @ts-ignore
            case ast_types_1.namedTypes.SpreadElement.name:
                amendComposes(documentation, (0, resolveToValue_1.default)(propertyPath.get('argument'), importer), importer);
                break;
        }
    });
}
function propTypeCompositionHandler(documentation, path, importer) {
    let propTypesPath = (0, getMemberValuePath_1.default)(path, 'propTypes', importer);
    if (!propTypesPath) {
        return;
    }
    propTypesPath = (0, resolveToValue_1.default)(propTypesPath, importer);
    if (!propTypesPath) {
        return;
    }
    switch (propTypesPath.node.type) {
        // @ts-ignore
        case ast_types_1.namedTypes.ObjectExpression.name:
            processObjectExpression(documentation, propTypesPath, importer);
            break;
        default:
            amendComposes(documentation, propTypesPath, importer);
            break;
    }
}
exports.default = propTypeCompositionHandler;

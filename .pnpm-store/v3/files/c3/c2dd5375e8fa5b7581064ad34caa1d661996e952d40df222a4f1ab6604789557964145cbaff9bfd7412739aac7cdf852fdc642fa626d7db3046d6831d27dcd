"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getMemberValuePath_1 = __importDefault(require("../utils/getMemberValuePath"));
const resolveToValue_1 = __importDefault(require("../utils/resolveToValue"));
const setPropDescription_1 = __importDefault(require("../utils/setPropDescription"));
function resolveDocumentation(documentation, path, importer) {
    if (!ast_types_1.namedTypes.ObjectExpression.check(path.node)) {
        return;
    }
    path.get('properties').each(propertyPath => {
        if (ast_types_1.namedTypes.Property.check(propertyPath.node)) {
            (0, setPropDescription_1.default)(documentation, propertyPath, importer);
        }
        else if (ast_types_1.namedTypes.SpreadElement.check(propertyPath.node)) {
            const resolvedValuePath = (0, resolveToValue_1.default)(propertyPath.get('argument'), importer);
            resolveDocumentation(documentation, resolvedValuePath, importer);
        }
    });
}
function propDocBlockHandler(documentation, path, importer) {
    let propTypesPath = (0, getMemberValuePath_1.default)(path, 'propTypes', importer);
    if (!propTypesPath) {
        return;
    }
    propTypesPath = (0, resolveToValue_1.default)(propTypesPath, importer);
    if (!propTypesPath) {
        return;
    }
    resolveDocumentation(documentation, propTypesPath, importer);
}
exports.default = propDocBlockHandler;

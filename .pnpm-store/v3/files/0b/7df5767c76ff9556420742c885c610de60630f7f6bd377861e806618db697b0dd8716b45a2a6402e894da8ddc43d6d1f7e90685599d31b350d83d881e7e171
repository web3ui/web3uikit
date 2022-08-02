"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const getPropertyName_1 = __importDefault(require("./getPropertyName"));
/**
 * Given an ObjectExpression, this function returns the path of the value of
 * the property with name `propertyName`.
 */
function getPropertyValuePath(path, propertyName, importer) {
    ast_types_1.namedTypes.ObjectExpression.assert(path.node);
    return path
        .get('properties')
        .filter((propertyPath) => (0, getPropertyName_1.default)(propertyPath, importer) === propertyName)
        .map((propertyPath) => propertyPath.get('value'))[0];
}
exports.default = getPropertyValuePath;

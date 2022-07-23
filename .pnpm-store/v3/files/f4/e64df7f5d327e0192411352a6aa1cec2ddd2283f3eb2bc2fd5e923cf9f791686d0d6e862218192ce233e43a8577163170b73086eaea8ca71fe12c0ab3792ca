"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const getPropertyName_1 = __importDefault(require("./getPropertyName"));
const docblock_1 = require("./docblock");
function setPropDescription(documentation, propertyPath, importer) {
    const propName = (0, getPropertyName_1.default)(propertyPath, importer);
    if (!propName)
        return;
    const propDescriptor = documentation.getPropDescriptor(propName);
    if (propDescriptor.description)
        return;
    propDescriptor.description = (0, docblock_1.getDocblock)(propertyPath) || '';
}
exports.default = setPropDescription;

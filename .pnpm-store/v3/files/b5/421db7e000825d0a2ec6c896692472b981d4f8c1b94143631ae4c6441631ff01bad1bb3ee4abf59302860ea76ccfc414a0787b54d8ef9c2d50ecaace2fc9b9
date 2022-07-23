"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
const traverse_1 = require("./traverse");
function resolveFunctionDefinitionToReturnValue(path, importer) {
    let returnPath = null;
    (0, traverse_1.traverseShallow)(path.get('body'), {
        visitFunction: () => false,
        visitReturnStatement: (nodePath) => {
            returnPath = (0, resolveToValue_1.default)(nodePath.get('argument'), importer);
            return false;
        },
    });
    return returnPath;
}
exports.default = resolveFunctionDefinitionToReturnValue;

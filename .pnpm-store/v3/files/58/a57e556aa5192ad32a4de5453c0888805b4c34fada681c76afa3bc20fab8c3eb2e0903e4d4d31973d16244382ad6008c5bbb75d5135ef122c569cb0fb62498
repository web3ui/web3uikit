"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const resolveToValue_1 = __importDefault(require("./resolveToValue"));
function resolveExportDeclaration(path, importer) {
    const definitions = [];
    if (path.node.default) {
        definitions.push(path.get('declaration'));
    }
    else if (path.node.declaration) {
        if (ast_types_1.namedTypes.VariableDeclaration.check(path.node.declaration)) {
            path
                .get('declaration', 'declarations')
                .each(declarator => definitions.push(declarator));
        }
        else {
            definitions.push(path.get('declaration'));
        }
    }
    else if (path.node.specifiers) {
        path
            .get('specifiers')
            .each(specifier => definitions.push(specifier.get('local')));
    }
    return definitions.map(definition => (0, resolveToValue_1.default)(definition, importer));
}
exports.default = resolveExportDeclaration;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSchema = void 0;
const devkit_1 = require("@nrwl/devkit");
const utils_1 = require("./utils");
function normalizeSchema(tree, schema, projectConfiguration) {
    var _a;
    const destination = schema.destination.startsWith('/')
        ? (0, utils_1.normalizeSlashes)(schema.destination.slice(1))
        : schema.destination;
    const newProjectName = (0, utils_1.getNewProjectName)(destination);
    const { npmScope } = (0, devkit_1.getWorkspaceLayout)(tree);
    return Object.assign(Object.assign({}, schema), { destination, importPath: (_a = schema.importPath) !== null && _a !== void 0 ? _a : (0, utils_1.normalizeSlashes)(`@${npmScope}/${newProjectName}`), newProjectName, relativeToRootDestination: (0, utils_1.getDestination)(tree, schema, projectConfiguration) });
}
exports.normalizeSchema = normalizeSchema;
//# sourceMappingURL=normalize-schema.js.map
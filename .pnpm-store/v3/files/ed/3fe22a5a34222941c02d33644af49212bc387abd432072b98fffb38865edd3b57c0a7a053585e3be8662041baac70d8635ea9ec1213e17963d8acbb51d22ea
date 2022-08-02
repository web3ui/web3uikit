"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTsconfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const typescript_1 = require("../../../utilities/typescript");
/**
 * Updates the tsconfig paths to remove the project.
 *
 * @param schema The options provided to the schematic
 */
function updateTsconfig(tree, schema, project) {
    const { appsDir, libsDir, npmScope } = (0, devkit_1.getWorkspaceLayout)(tree);
    const tsConfigPath = (0, typescript_1.getRootTsConfigPathInTree)(tree);
    const defaultImportPath = `@${npmScope}/${project.root.slice(project.projectType === 'application'
        ? appsDir.length + 1
        : libsDir.length + 1)}`;
    const importPath = schema.importPath || defaultImportPath;
    if (tree.exists(tsConfigPath)) {
        (0, devkit_1.updateJson)(tree, tsConfigPath, (json) => {
            delete json.compilerOptions.paths[importPath];
            return json;
        });
    }
}
exports.updateTsconfig = updateTsconfig;
//# sourceMappingURL=update-tsconfig.js.map
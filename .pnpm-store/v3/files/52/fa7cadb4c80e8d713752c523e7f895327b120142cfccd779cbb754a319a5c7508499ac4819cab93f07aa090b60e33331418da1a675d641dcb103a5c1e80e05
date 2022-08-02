"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectRootFiles = void 0;
const devkit_1 = require("@nrwl/devkit");
const path = require("path");
const path_1 = require("path");
const allowedExt = ['.ts', '.js', '.json'];
/**
 * Updates the files in the root of the project
 *
 * Typically these are config files which point outside of the project folder
 *
 * @param schema The options provided to the schematic
 */
function updateProjectRootFiles(tree, schema, project) {
    const newRelativeRoot = path
        .relative(path.join(devkit_1.workspaceRoot, schema.relativeToRootDestination), devkit_1.workspaceRoot)
        .split(path.sep)
        .join('/');
    const oldRelativeRoot = path
        .relative(path.join(devkit_1.workspaceRoot, project.root), devkit_1.workspaceRoot)
        .split(path.sep)
        .join('/');
    if (newRelativeRoot === oldRelativeRoot) {
        // nothing to do
        return;
    }
    const dots = /\./g;
    const regex = new RegExp(oldRelativeRoot.replace(dots, '\\.'), 'g');
    for (const file of tree.children(schema.relativeToRootDestination)) {
        const ext = (0, path_1.extname)(file);
        if (!allowedExt.includes(ext)) {
            continue;
        }
        if (file === '.eslintrc.json') {
            continue;
        }
        const oldContent = tree.read((0, path_1.join)(schema.relativeToRootDestination, file), 'utf-8');
        const newContent = oldContent.replace(regex, newRelativeRoot);
        tree.write((0, path_1.join)(schema.relativeToRootDestination, file), newContent);
    }
}
exports.updateProjectRootFiles = updateProjectRootFiles;
//# sourceMappingURL=update-project-root-files.js.map
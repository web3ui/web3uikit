"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStorybookConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const path = require("path");
const path_1 = require("path");
/**
 * Updates relative path to root storybook config for `main.js` & `webpack.config.js`
 *
 * @param {Tree} tree
 * @param {NormalizedSchema} schema The options provided to the schematic
 * @param {ProjectConfiguration} project
 */
function updateStorybookConfig(tree, schema, project) {
    const oldRelativeRoot = path
        .relative(path.join(devkit_1.workspaceRoot, `${project.root}/.storybook`), devkit_1.workspaceRoot)
        .split(path.sep)
        .join('/');
    const newRelativeRoot = path
        .relative(path.join(devkit_1.workspaceRoot, `${schema.relativeToRootDestination}/.storybook`), devkit_1.workspaceRoot)
        .split(path.sep)
        .join('/');
    const storybookDir = path.join(schema.relativeToRootDestination, '.storybook');
    if (!storybookDir) {
        return;
    }
    // Replace relative import path to root storybook folder for each file under project storybook
    updateRecursively(tree, storybookDir, oldRelativeRoot, newRelativeRoot);
}
exports.updateStorybookConfig = updateStorybookConfig;
function updateRecursively(tree, dir, oldRoot, newRoot) {
    for (const child of tree.children(dir)) {
        const childPath = (0, path_1.join)(dir, child);
        if (tree.isFile(childPath)) {
            const oldContent = tree.read(childPath, 'utf-8');
            const newContent = oldContent.replace(oldRoot, newRoot);
            tree.write(childPath, newContent);
        }
        else {
            updateRecursively(tree, childPath, oldRoot, newRoot);
        }
    }
}
//# sourceMappingURL=update-storybook-config.js.map
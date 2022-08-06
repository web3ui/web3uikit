"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateStorybookConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const path = require("path");
const path_1 = require("path");
/**
 * Updates relative path to root storybook config for `main.js` & `webpack.config.js`
 *
 * @param schema The options provided to the schematic
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
    for (const file of tree.children(storybookDir)) {
        const oldContent = tree.read((0, path_1.join)(storybookDir, file), 'utf-8');
        const newContent = oldContent.replace(oldRelativeRoot, newRelativeRoot);
        tree.write((0, path_1.join)(storybookDir, file), newContent);
    }
}
exports.updateStorybookConfig = updateStorybookConfig;
//# sourceMappingURL=update-storybook-config.js.map
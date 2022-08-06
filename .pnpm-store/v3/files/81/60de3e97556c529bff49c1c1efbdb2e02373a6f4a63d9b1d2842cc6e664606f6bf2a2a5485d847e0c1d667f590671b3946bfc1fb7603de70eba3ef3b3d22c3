"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateReadme = void 0;
const path_1 = require("path");
/**
 * Update the README.md file of the project if it exists.
 *
 * @param schema The options provided to the schematic
 */
function updateReadme(tree, schema) {
    const readmePath = (0, path_1.join)(schema.relativeToRootDestination, 'README.md');
    if (!tree.exists(readmePath)) {
        // no README found. nothing to do
        return;
    }
    const findName = new RegExp(`${schema.projectName}`, 'g');
    const oldContent = tree.read(readmePath, 'utf-8');
    const newContent = oldContent.replace(findName, schema.newProjectName);
    tree.write(readmePath, newContent);
}
exports.updateReadme = updateReadme;
//# sourceMappingURL=update-readme.js.map
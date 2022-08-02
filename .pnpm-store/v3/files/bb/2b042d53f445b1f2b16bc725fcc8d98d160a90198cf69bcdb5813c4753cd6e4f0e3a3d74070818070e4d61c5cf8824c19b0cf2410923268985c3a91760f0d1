"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveProject = void 0;
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
/**
 * Moves a project to the given destination path
 *
 * @param schema The options provided to the schematic
 */
function moveProject(tree, schema, project) {
    (0, devkit_1.visitNotIgnoredFiles)(tree, project.root, (file) => {
        // This is a rename but Angular Devkit isn't capable of writing to a file after it's renamed so this is a workaround
        const content = tree.read(file);
        const relativeFromOriginalSource = (0, path_1.relative)(project.root, file);
        const newFilePath = (0, path_1.join)(schema.relativeToRootDestination, relativeFromOriginalSource);
        tree.write(newFilePath, content);
        tree.delete(file);
    });
}
exports.moveProject = moveProject;
//# sourceMappingURL=move-project.js.map
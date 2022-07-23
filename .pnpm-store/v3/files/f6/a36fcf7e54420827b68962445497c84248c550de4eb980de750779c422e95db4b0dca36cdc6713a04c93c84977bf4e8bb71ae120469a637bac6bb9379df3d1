"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProject = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Removes (deletes) a project's files from the folder tree
 */
function removeProject(tree, project) {
    (0, devkit_1.visitNotIgnoredFiles)(tree, project.root, (file) => {
        tree.delete(file);
    });
    tree.delete(project.root);
}
exports.removeProject = removeProject;
//# sourceMappingURL=remove-project.js.map
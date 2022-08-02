"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDefaultProject = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Updates the project in the workspace file
 *
 * - update all references to the old root path
 * - change the project name
 * - change target references
 */
function updateDefaultProject(tree, schema) {
    const workspaceConfiguration = (0, devkit_1.readWorkspaceConfiguration)(tree);
    // update default project (if necessary)
    if (workspaceConfiguration.defaultProject &&
        workspaceConfiguration.defaultProject === schema.projectName) {
        workspaceConfiguration.defaultProject = schema.newProjectName;
        (0, devkit_1.updateWorkspaceConfiguration)(tree, workspaceConfiguration);
    }
}
exports.updateDefaultProject = updateDefaultProject;
//# sourceMappingURL=update-default-project.js.map
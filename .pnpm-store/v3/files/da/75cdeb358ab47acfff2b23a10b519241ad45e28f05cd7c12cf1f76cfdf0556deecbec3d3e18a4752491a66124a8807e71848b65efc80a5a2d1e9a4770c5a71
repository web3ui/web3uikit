"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeProjectConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const devkit_2 = require("@nrwl/devkit");
/**
 * Deletes the project from the workspace file
 *
 * @param schema The options provided to the schematic
 */
function removeProjectConfig(tree, schema) {
    (0, devkit_2.removeProjectConfiguration)(tree, schema.projectName);
    // Unset default project if deleting the default project
    const workspaceConfiguration = (0, devkit_2.readWorkspaceConfiguration)(tree);
    if (workspaceConfiguration.defaultProject &&
        workspaceConfiguration.defaultProject === schema.projectName) {
        const workspacePath = (0, devkit_2.getWorkspacePath)(tree);
        delete workspaceConfiguration.defaultProject;
        console.warn(`Default project was removed in ${workspacePath} because it was "${schema.projectName}". If you want a default project you should define a new one.`);
        (0, devkit_1.updateWorkspaceConfiguration)(tree, workspaceConfiguration);
    }
    // Remove implicit dependencies onto removed project
    (0, devkit_1.getProjects)(tree).forEach((project, projectName) => {
        if (project.implicitDependencies) {
            project.implicitDependencies = project.implicitDependencies.filter((projectName) => projectName !== schema.projectName);
        }
        (0, devkit_1.updateProjectConfiguration)(tree, projectName, project);
    });
}
exports.removeProjectConfig = removeProjectConfig;
//# sourceMappingURL=remove-project-config.js.map
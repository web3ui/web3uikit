"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveProjectConfiguration = void 0;
const devkit_1 = require("@nrwl/devkit");
function moveProjectConfiguration(tree, schema, projectConfig) {
    const isStandalone = (0, devkit_1.isStandaloneProject)(tree, schema.projectName);
    const projectString = JSON.stringify(projectConfig);
    const newProjectString = projectString.replace(new RegExp(projectConfig.root, 'g'), schema.relativeToRootDestination);
    // rename
    const newProject = JSON.parse(newProjectString);
    // Delete the original project
    (0, devkit_1.removeProjectConfiguration)(tree, schema.projectName);
    // Create a new project with the root replaced
    (0, devkit_1.addProjectConfiguration)(tree, schema.newProjectName, newProject, isStandalone);
}
exports.moveProjectConfiguration = moveProjectConfiguration;
//# sourceMappingURL=move-project-configuration.js.map
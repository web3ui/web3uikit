"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createGlobPatternsForDependencies = void 0;
const devkit_1 = require("@nrwl/devkit");
const app_root_1 = require("nx/src/utils/app-root");
const path_1 = require("path");
const project_graph_1 = require("nx/src/project-graph/project-graph");
const project_graph_utils_1 = require("nx/src/utils/project-graph-utils");
/**
 * Generates a set of glob patterns based off the source root of the app and its dependencies
 * @param dirPath workspace relative directory path that will be used to infer the parent project and dependencies
 * @param fileGlobPattern pass a custom glob pattern to be used
 */
function createGlobPatternsForDependencies(dirPath, fileGlobPattern) {
    const filenameRelativeToWorkspaceRoot = (0, path_1.relative)(app_root_1.workspaceRoot, dirPath);
    const projectGraph = (0, project_graph_1.readCachedProjectGraph)();
    // find the project
    let projectName;
    try {
        projectName = (0, project_graph_utils_1.getProjectNameFromDirPath)(filenameRelativeToWorkspaceRoot, projectGraph);
    }
    catch (e) {
        throw new Error(`createGlobPatternsForDependencies: Error when trying to determine main project.\n${e === null || e === void 0 ? void 0 : e.message}`);
    }
    // generate the glob
    try {
        const projectDirs = (0, project_graph_utils_1.getSourceDirOfDependentProjects)(projectName, projectGraph);
        return projectDirs.map((sourceDir) => (0, path_1.resolve)(app_root_1.workspaceRoot, (0, devkit_1.joinPathFragments)(sourceDir, fileGlobPattern)));
    }
    catch (e) {
        throw new Error(`createGlobPatternsForDependencies: Error when generating globs.\n${e === null || e === void 0 ? void 0 : e.message}`);
    }
}
exports.createGlobPatternsForDependencies = createGlobPatternsForDependencies;
//# sourceMappingURL=generate-globs.js.map
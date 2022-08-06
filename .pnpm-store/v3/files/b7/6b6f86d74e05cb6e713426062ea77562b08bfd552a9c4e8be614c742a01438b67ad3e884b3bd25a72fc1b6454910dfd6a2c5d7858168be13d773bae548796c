"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRoots = exports.getProjectRoot = void 0;
const path_1 = require("path");
const operators_1 = require("rxjs/operators");
const filesystem_1 = require("./filesystem");
/* istanbul ignore next */
function getProjectRoot(context) {
    return context.workspace.projects[context.projectName].root;
}
exports.getProjectRoot = getProjectRoot;
/* istanbul ignore next */
function getProjectRoots(workspaceRoot) {
    return _getWorkspaceDefinition(workspaceRoot).pipe((0, operators_1.map)((workspaceDefinition) => Object.values(workspaceDefinition.projects).map((project) => typeof project === 'string'
        ? (0, path_1.resolve)(workspaceRoot, project)
        : (0, path_1.resolve)(workspaceRoot, project.root))));
}
exports.getProjectRoots = getProjectRoots;
/* istanbul ignore next */
function _getWorkspaceDefinition(workspaceRoot) {
    return (0, filesystem_1.readJsonFile)((0, path_1.resolve)(workspaceRoot, 'workspace.json')).pipe((0, operators_1.catchError)(() => (0, filesystem_1.readJsonFile)((0, path_1.resolve)(workspaceRoot, 'angular.json'))));
}
//# sourceMappingURL=workspace.js.map
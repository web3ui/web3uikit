"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateProjectFileMap = exports.createProjectFileMap = void 0;
const path_1 = require("path");
function createProjectRootMappings(workspaceJson, projectFileMap) {
    const projectRootMappings = new Map();
    for (const projectName of Object.keys(workspaceJson.projects)) {
        if (!projectFileMap[projectName]) {
            projectFileMap[projectName] = [];
        }
        const root = workspaceJson.projects[projectName].root;
        projectRootMappings.set(root.endsWith('/') ? root.substring(0, root.length - 1) : root, projectFileMap[projectName]);
    }
    return projectRootMappings;
}
function findMatchingProjectFiles(projectRootMappings, file) {
    for (let currentPath = (0, path_1.dirname)(file); currentPath != (0, path_1.dirname)(currentPath); currentPath = (0, path_1.dirname)(currentPath)) {
        const p = projectRootMappings.get(currentPath);
        if (p) {
            return p;
        }
    }
    return null;
}
function createProjectFileMap(workspaceJson, allWorkspaceFiles) {
    const projectFileMap = {};
    const projectRootMappings = createProjectRootMappings(workspaceJson, projectFileMap);
    for (const f of allWorkspaceFiles) {
        const matchingProjectFiles = findMatchingProjectFiles(projectRootMappings, f.file);
        if (matchingProjectFiles) {
            matchingProjectFiles.push(f);
        }
    }
    return { projectFileMap, allWorkspaceFiles };
}
exports.createProjectFileMap = createProjectFileMap;
function updateProjectFileMap(workspaceJson, projectFileMap, allWorkspaceFiles, updatedFiles, deletedFiles) {
    const projectRootMappings = createProjectRootMappings(workspaceJson, projectFileMap);
    for (const f of updatedFiles.keys()) {
        const matchingProjectFiles = findMatchingProjectFiles(projectRootMappings, f);
        if (matchingProjectFiles) {
            const fileData = matchingProjectFiles.find((t) => t.file === f);
            if (fileData) {
                fileData.hash = updatedFiles.get(f);
            }
            else {
                matchingProjectFiles.push({
                    file: f,
                    hash: updatedFiles.get(f),
                });
            }
        }
        const fileData = allWorkspaceFiles.find((t) => t.file === f);
        if (fileData) {
            fileData.hash = updatedFiles.get(f);
        }
        else {
            allWorkspaceFiles.push({
                file: f,
                hash: updatedFiles.get(f),
            });
        }
    }
    for (const f of deletedFiles) {
        const matchingProjectFiles = findMatchingProjectFiles(projectRootMappings, f);
        if (matchingProjectFiles) {
            const index = matchingProjectFiles.findIndex((t) => t.file === f);
            if (index > -1) {
                matchingProjectFiles.splice(index, 1);
            }
        }
        const index = allWorkspaceFiles.findIndex((t) => t.file === f);
        if (index > -1) {
            allWorkspaceFiles.splice(index, 1);
        }
    }
    return { projectFileMap, allWorkspaceFiles };
}
exports.updateProjectFileMap = updateProjectFileMap;
//# sourceMappingURL=file-map-utils.js.map
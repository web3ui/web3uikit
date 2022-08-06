"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectNameFromDirPath = exports.getSourceDirOfDependentProjects = exports.mergeNpmScriptsWithTargets = exports.projectHasTargetAndConfiguration = exports.projectHasTarget = void 0;
const package_json_1 = require("./package-json");
const path_1 = require("path");
const fileutils_1 = require("./fileutils");
const path_2 = require("./path");
const project_graph_1 = require("../project-graph/project-graph");
function projectHasTarget(project, target) {
    return !!(project.data &&
        project.data.targets &&
        project.data.targets[target]);
}
exports.projectHasTarget = projectHasTarget;
function projectHasTargetAndConfiguration(project, target, configuration) {
    return (projectHasTarget(project, target) &&
        project.data.targets[target].configurations &&
        project.data.targets[target].configurations[configuration]);
}
exports.projectHasTargetAndConfiguration = projectHasTargetAndConfiguration;
function mergeNpmScriptsWithTargets(projectRoot, targets) {
    try {
        const { scripts, nx } = (0, fileutils_1.readJsonFile)((0, path_1.join)(projectRoot, 'package.json'));
        const res = {};
        // handle no scripts
        Object.keys(scripts || {}).forEach((script) => {
            res[script] = (0, package_json_1.buildTargetFromScript)(script, nx);
        });
        return Object.assign(Object.assign({}, res), (targets || {}));
    }
    catch (e) {
        return targets;
    }
}
exports.mergeNpmScriptsWithTargets = mergeNpmScriptsWithTargets;
function getSourceDirOfDependentProjects(projectName, projectGraph = (0, project_graph_1.readCachedProjectGraph)()) {
    if (!projectGraph.nodes[projectName]) {
        throw new Error(`Couldn't find project "${projectName}" in this Nx workspace`);
    }
    const nodeNames = findAllProjectNodeDependencies(projectName, projectGraph);
    return nodeNames.map((nodeName) => projectGraph.nodes[nodeName].data.sourceRoot);
}
exports.getSourceDirOfDependentProjects = getSourceDirOfDependentProjects;
/**
 * Finds the project node name by a file that lives within it's src root
 * @param projRelativeDirPath directory path relative to the workspace root
 * @param projectGraph
 */
function getProjectNameFromDirPath(projRelativeDirPath, projectGraph = (0, project_graph_1.readCachedProjectGraph)()) {
    let parentNodeName = null;
    for (const [nodeName, node] of Object.entries(projectGraph.nodes)) {
        const normalizedRootPath = (0, path_2.normalizePath)(node.data.root);
        const normalizedProjRelPath = (0, path_2.normalizePath)(projRelativeDirPath);
        const relativePath = (0, path_1.relative)(normalizedRootPath, normalizedProjRelPath);
        const isMatch = relativePath && !relativePath.startsWith('..');
        if (isMatch || normalizedRootPath === normalizedProjRelPath) {
            parentNodeName = nodeName;
            break;
        }
    }
    if (!parentNodeName) {
        throw new Error(`Could not find any project containing the file "${projRelativeDirPath}" among it's project files`);
    }
    return parentNodeName;
}
exports.getProjectNameFromDirPath = getProjectNameFromDirPath;
/**
 * Find all internal project dependencies.
 * All the external (npm) dependencies will be filtered out
 * @param {string} parentNodeName
 * @param {ProjectGraph} projectGraph
 * @returns {string[]}
 */
function findAllProjectNodeDependencies(parentNodeName, projectGraph = (0, project_graph_1.readCachedProjectGraph)()) {
    const dependencyNodeNames = new Set();
    collectDependentProjectNodesNames(projectGraph, dependencyNodeNames, parentNodeName);
    return Array.from(dependencyNodeNames);
}
// Recursively get all the dependencies of the node
function collectDependentProjectNodesNames(nxDeps, dependencyNodeNames, parentNodeName) {
    const dependencies = nxDeps.dependencies[parentNodeName];
    if (!dependencies) {
        // no dependencies for the given node, so silently return,
        // as we probably wouldn't want to throw here
        return;
    }
    for (const dependency of dependencies) {
        const dependencyName = dependency.target;
        // we're only intersted in project dependencies, not npm
        if (dependencyName.startsWith('npm:')) {
            continue;
        }
        // skip dependencies already added (avoid circular dependencies)
        if (dependencyNodeNames.has(dependencyName)) {
            continue;
        }
        dependencyNodeNames.add(dependencyName);
        // Get the dependencies of the dependencies
        collectDependentProjectNodesNames(nxDeps, dependencyNodeNames, dependencyName);
    }
}
//# sourceMappingURL=project-graph-utils.js.map
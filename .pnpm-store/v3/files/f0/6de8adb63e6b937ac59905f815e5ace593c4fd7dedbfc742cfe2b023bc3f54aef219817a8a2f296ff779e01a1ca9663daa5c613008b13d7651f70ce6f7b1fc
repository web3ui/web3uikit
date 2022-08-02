"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isAngularSecondaryEntrypoint = exports.groupImports = exports.isTerminalRun = exports.mapProjectGraphFiles = exports.hasBuildExecutor = exports.isDirectDependency = exports.hasBannedImport = exports.getSourceFilePath = exports.onlyLoadChildren = exports.findConstraintsFor = exports.findProjectUsingImport = exports.isAbsoluteImportIntoAnotherProject = exports.findTargetProject = exports.findSourceProject = exports.findProjectUsingFile = exports.getTargetProjectBasedOnRelativeImport = exports.isRelative = exports.matchImportWithWildcard = exports.removeExt = exports.findDependenciesWithTags = exports.hasNoneOfTheseTags = exports.stringifyTags = void 0;
const path = require("path");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const app_root_1 = require("./app-root");
const graph_utils_1 = require("./graph-utils");
const fs_1 = require("fs");
const file_utils_1 = require("nx/src/project-graph/file-utils");
function stringifyTags(tags) {
    return tags.map((t) => `"${t}"`).join(', ');
}
exports.stringifyTags = stringifyTags;
function hasNoneOfTheseTags(proj, tags) {
    return tags.filter((tag) => hasTag(proj, tag)).length === 0;
}
exports.hasNoneOfTheseTags = hasNoneOfTheseTags;
/**
 * Check if any of the given tags is included in the project
 * @param proj ProjectGraphProjectNode
 * @param tags
 * @returns
 */
function findDependenciesWithTags(targetProject, tags, graph) {
    // find all reachable projects that have one of the tags and
    // are reacheable from the targetProject (including self)
    const allReachableProjects = Object.keys(graph.nodes).filter((projectName) => (0, graph_utils_1.pathExists)(graph, targetProject.name, projectName) &&
        tags.some((tag) => hasTag(graph.nodes[projectName], tag)));
    // return path from targetProject to reachable project
    return allReachableProjects.map((project) => targetProject.name === project
        ? [targetProject]
        : (0, graph_utils_1.getPath)(graph, targetProject.name, project));
}
exports.findDependenciesWithTags = findDependenciesWithTags;
function hasTag(proj, tag) {
    return tag === '*' || (proj.data.tags || []).indexOf(tag) > -1;
}
function removeExt(file) {
    return file.replace(/(?<!(^|\/))\.[^/.]+$/, '');
}
exports.removeExt = removeExt;
function matchImportWithWildcard(
// This may or may not contain wildcards ("*")
allowableImport, extractedImport) {
    if (allowableImport.endsWith('/**')) {
        const prefix = allowableImport.substring(0, allowableImport.length - 2);
        return extractedImport.startsWith(prefix);
    }
    else if (allowableImport.endsWith('/*')) {
        const prefix = allowableImport.substring(0, allowableImport.length - 1);
        if (!extractedImport.startsWith(prefix))
            return false;
        return extractedImport.substring(prefix.length).indexOf('/') === -1;
    }
    else if (allowableImport.indexOf('/**/') > -1) {
        const [prefix, suffix] = allowableImport.split('/**/');
        return (extractedImport.startsWith(prefix) && extractedImport.endsWith(suffix));
    }
    else {
        return new RegExp(allowableImport).test(extractedImport);
    }
}
exports.matchImportWithWildcard = matchImportWithWildcard;
function isRelative(s) {
    return s.startsWith('.');
}
exports.isRelative = isRelative;
function getTargetProjectBasedOnRelativeImport(imp, projectPath, projectGraph, sourceFilePath) {
    if (!isRelative(imp)) {
        return undefined;
    }
    const targetFile = (0, devkit_1.normalizePath)(path.resolve(path.join(projectPath, path.dirname(sourceFilePath)), imp)).substring(projectPath.length + 1);
    return findTargetProject(projectGraph, targetFile);
}
exports.getTargetProjectBasedOnRelativeImport = getTargetProjectBasedOnRelativeImport;
function findProjectUsingFile(projectGraph, file) {
    return Object.values(projectGraph.nodes).find((n) => n.data.files[file]);
}
exports.findProjectUsingFile = findProjectUsingFile;
function findSourceProject(projectGraph, sourceFilePath) {
    const targetFile = removeExt(sourceFilePath);
    return findProjectUsingFile(projectGraph, targetFile);
}
exports.findSourceProject = findSourceProject;
function findTargetProject(projectGraph, targetFile) {
    let targetProject = findProjectUsingFile(projectGraph, targetFile);
    if (!targetProject) {
        targetProject = findProjectUsingFile(projectGraph, (0, devkit_1.normalizePath)(path.join(targetFile, 'index')));
    }
    if (!targetProject) {
        targetProject = findProjectUsingFile(projectGraph, (0, devkit_1.normalizePath)(path.join(targetFile, 'src', 'index')));
    }
    return targetProject;
}
exports.findTargetProject = findTargetProject;
function isAbsoluteImportIntoAnotherProject(imp, workspaceLayout = { libsDir: 'libs', appsDir: 'apps' }) {
    return (imp.startsWith(`${workspaceLayout.libsDir}/`) ||
        imp.startsWith(`/${workspaceLayout.libsDir}/`) ||
        imp.startsWith(`${workspaceLayout.appsDir}/`) ||
        imp.startsWith(`/${workspaceLayout.appsDir}/`));
}
exports.isAbsoluteImportIntoAnotherProject = isAbsoluteImportIntoAnotherProject;
function findProjectUsingImport(projectGraph, targetProjectLocator, filePath, imp) {
    var _a;
    const target = targetProjectLocator.findProjectWithImport(imp, filePath);
    return projectGraph.nodes[target] || ((_a = projectGraph.externalNodes) === null || _a === void 0 ? void 0 : _a[target]);
}
exports.findProjectUsingImport = findProjectUsingImport;
function findConstraintsFor(depConstraints, sourceProject) {
    return depConstraints.filter((f) => hasTag(sourceProject, f.sourceTag));
}
exports.findConstraintsFor = findConstraintsFor;
function onlyLoadChildren(graph, sourceProjectName, targetProjectName, visited) {
    if (visited.indexOf(sourceProjectName) > -1)
        return false;
    return ((graph.dependencies[sourceProjectName] || []).filter((d) => {
        if (d.type !== devkit_1.DependencyType.dynamic)
            return false;
        if (d.target === targetProjectName)
            return true;
        return onlyLoadChildren(graph, d.target, targetProjectName, [
            ...visited,
            sourceProjectName,
        ]);
    }).length > 0);
}
exports.onlyLoadChildren = onlyLoadChildren;
function getSourceFilePath(sourceFileName, projectPath) {
    return (0, devkit_1.normalizePath)(sourceFileName).substring(projectPath.length + 1);
}
exports.getSourceFilePath = getSourceFilePath;
function hasBannedImport(source, target, depConstraints) {
    // return those constraints that match source projec and have `bannedExternalImports` defined
    depConstraints = depConstraints.filter((c) => (source.data.tags || []).includes(c.sourceTag) &&
        c.bannedExternalImports &&
        c.bannedExternalImports.length);
    return depConstraints.find((constraint) => constraint.bannedExternalImports.some((importDefinition) => parseImportWildcards(importDefinition).test(target.data.packageName)));
}
exports.hasBannedImport = hasBannedImport;
function isDirectDependency(target) {
    const fileName = 'package.json';
    const content = (0, file_utils_1.readFileIfExisting)((0, path_1.join)(app_root_1.workspaceRoot, fileName));
    if (content) {
        const { dependencies, devDependencies, peerDependencies } = (0, devkit_1.parseJson)(content);
        if (dependencies && dependencies[target.data.packageName]) {
            return true;
        }
        if (peerDependencies && peerDependencies[target.data.packageName]) {
            return true;
        }
        if (devDependencies && devDependencies[target.data.packageName]) {
            return true;
        }
        return false;
    }
    return true;
}
exports.isDirectDependency = isDirectDependency;
/**
 * Maps import with wildcards to regex pattern
 * @param importDefinition
 * @returns
 */
function parseImportWildcards(importDefinition) {
    const mappedWildcards = importDefinition.split('*').join('.*');
    return new RegExp(`^${new RegExp(mappedWildcards).source}$`);
}
/**
 * Verifies whether the given node has an architect builder attached
 * @param projectGraph the node to verify
 */
function hasBuildExecutor(projectGraph) {
    return (
    // can the architect not be defined? real use case?
    projectGraph.data.targets &&
        projectGraph.data.targets.build &&
        projectGraph.data.targets.build.executor !== '');
}
exports.hasBuildExecutor = hasBuildExecutor;
function mapProjectGraphFiles(projectGraph) {
    if (!projectGraph) {
        return null;
    }
    const nodes = {};
    Object.entries(projectGraph.nodes).forEach(([name, node]) => {
        const files = {};
        node.data.files.forEach(({ file, hash, deps }) => {
            files[removeExt(file)] = Object.assign({ file, hash }, (deps && { deps }));
        });
        const data = Object.assign(Object.assign({}, node.data), { files });
        nodes[name] = Object.assign(Object.assign({}, node), { data });
    });
    return Object.assign(Object.assign({}, projectGraph), { nodes });
}
exports.mapProjectGraphFiles = mapProjectGraphFiles;
const ESLINT_REGEX = /node_modules.*\/eslint$/;
const NRWL_CLI_REGEX = /nx\/bin\/run-executor\.js$/;
function isTerminalRun() {
    return (process.argv.length > 1 &&
        (!!process.argv[1].match(NRWL_CLI_REGEX) ||
            !!process.argv[1].match(ESLINT_REGEX)));
}
exports.isTerminalRun = isTerminalRun;
/**
 * Takes an array of imports and tries to group them, so rather than having
 * `import { A } from './some-location'` and `import { B } from './some-location'` you get
 * `import { A, B } from './some-location'`
 * @param importsToRemap
 * @returns
 */
function groupImports(importsToRemap) {
    const importsToRemapGrouped = importsToRemap.reduce((acc, curr) => {
        const existing = acc.find((i) => i.importPath === curr.importPath && i.member !== curr.member);
        if (existing) {
            if (existing.member) {
                existing.member += `, ${curr.member}`;
            }
        }
        else {
            acc.push({
                importPath: curr.importPath,
                member: curr.member,
            });
        }
        return acc;
    }, []);
    return importsToRemapGrouped
        .map((entry) => `import { ${entry.member} } from '${entry.importPath}';`)
        .join('\n');
}
exports.groupImports = groupImports;
/**
 * Checks if import points to a secondary entry point in Angular project
 * @param targetProjectLocator
 * @param importExpr
 * @returns
 */
function isAngularSecondaryEntrypoint(targetProjectLocator, importExpr) {
    const targetFiles = targetProjectLocator.findPaths(importExpr);
    return (targetFiles &&
        targetFiles.some((file) => file.endsWith('src/index.ts') &&
            (0, fs_1.existsSync)((0, devkit_1.joinPathFragments)(file, '../../', 'ng-package.json'))));
}
exports.isAngularSecondaryEntrypoint = isAngularSecondaryEntrypoint;
//# sourceMappingURL=runtime-lint-utils.js.map
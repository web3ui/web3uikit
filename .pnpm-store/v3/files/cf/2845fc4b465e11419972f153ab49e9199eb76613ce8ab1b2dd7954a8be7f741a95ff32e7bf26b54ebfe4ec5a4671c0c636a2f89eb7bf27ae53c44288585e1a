"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBuildableProjectPackageJsonDependencies = exports.updatePaths = exports.findMissingBuildDependencies = exports.checkDependentProjectsHaveBeenBuilt = exports.createTmpTsConfig = exports.computeCompilerOptionsPaths = exports.calculateProjectDependencies = void 0;
const path_1 = require("path");
const fileutils_1 = require("./fileutils");
const devkit_1 = require("@nrwl/devkit");
const ts = require("typescript");
const fs_1 = require("fs");
const output_1 = require("./output");
const operators_1 = require("nx/src/project-graph/operators");
function isBuildable(target, node) {
    return (node.data.targets &&
        node.data.targets[target] &&
        node.data.targets[target].executor !== '');
}
function calculateProjectDependencies(projGraph, root, projectName, targetName, configurationName, shallow) {
    const target = projGraph.nodes[projectName];
    // gather the library dependencies
    const nonBuildableDependencies = [];
    const topLevelDependencies = [];
    const dependencies = collectDependencies(projectName, projGraph, [], shallow)
        .map(({ name: dep, isTopLevel }) => {
        let project = null;
        const depNode = projGraph.nodes[dep] || projGraph.externalNodes[dep];
        if (depNode.type === 'lib') {
            if (isBuildable(targetName, depNode)) {
                const libPackageJsonPath = (0, path_1.join)(root, depNode.data.root, 'package.json');
                project = {
                    name: (0, fileutils_1.fileExists)(libPackageJsonPath)
                        ? (0, devkit_1.readJsonFile)(libPackageJsonPath).name // i.e. @workspace/mylib
                        : dep,
                    outputs: (0, devkit_1.getOutputsForTargetAndConfiguration)({
                        overrides: {},
                        target: {
                            project: projectName,
                            target: targetName,
                            configuration: configurationName,
                        },
                    }, depNode),
                    node: depNode,
                };
            }
            else {
                nonBuildableDependencies.push(dep);
            }
        }
        else if (depNode.type === 'npm') {
            project = {
                name: depNode.data.packageName,
                outputs: [],
                node: depNode,
            };
        }
        if (project && isTopLevel) {
            topLevelDependencies.push(project);
        }
        return project;
    })
        .filter((x) => !!x);
    return {
        target,
        dependencies,
        nonBuildableDependencies,
        topLevelDependencies,
    };
}
exports.calculateProjectDependencies = calculateProjectDependencies;
function collectDependencies(project, projGraph, acc, shallow, areTopLevelDeps = true) {
    (projGraph.dependencies[project] || []).forEach((dependency) => {
        if (!acc.some((dep) => dep.name === dependency.target)) {
            acc.push({ name: dependency.target, isTopLevel: areTopLevelDeps });
            if (!shallow) {
                collectDependencies(dependency.target, projGraph, acc, shallow, false);
            }
        }
    });
    return acc;
}
function readTsConfigWithRemappedPaths(tsConfig, generatedTsConfigPath, dependencies) {
    const generatedTsConfig = { compilerOptions: {} };
    generatedTsConfig.extends = (0, path_1.relative)((0, path_1.dirname)(generatedTsConfigPath), tsConfig);
    generatedTsConfig.compilerOptions.paths = computeCompilerOptionsPaths(tsConfig, dependencies);
    if (process.env.NX_VERBOSE_LOGGING_PATH_MAPPINGS === 'true') {
        output_1.output.log({
            title: 'TypeScript path mappings have been rewritten.',
        });
        console.log(JSON.stringify(generatedTsConfig.compilerOptions.paths, null, 2));
    }
    return generatedTsConfig;
}
function computeCompilerOptionsPaths(tsConfig, dependencies) {
    const paths = readPaths(tsConfig) || {};
    updatePaths(dependencies, paths);
    return paths;
}
exports.computeCompilerOptionsPaths = computeCompilerOptionsPaths;
function readPaths(tsConfig) {
    try {
        const parsedTSConfig = ts.readConfigFile(tsConfig, ts.sys.readFile).config;
        if (parsedTSConfig.compilerOptions &&
            parsedTSConfig.compilerOptions.paths) {
            return parsedTSConfig.compilerOptions.paths;
        }
        else if (parsedTSConfig.extends) {
            return readPaths((0, path_1.resolve)((0, path_1.dirname)(tsConfig), parsedTSConfig.extends));
        }
        else {
            return null;
        }
    }
    catch (e) {
        return null;
    }
}
function createTmpTsConfig(tsconfigPath, workspaceRoot, projectRoot, dependencies) {
    const tmpTsConfigPath = (0, path_1.join)(workspaceRoot, 'tmp', projectRoot, 'tsconfig.generated.json');
    const parsedTSConfig = readTsConfigWithRemappedPaths(tsconfigPath, tmpTsConfigPath, dependencies);
    process.on('exit', () => cleanupTmpTsConfigFile(tmpTsConfigPath));
    (0, devkit_1.writeJsonFile)(tmpTsConfigPath, parsedTSConfig);
    return (0, path_1.join)(tmpTsConfigPath);
}
exports.createTmpTsConfig = createTmpTsConfig;
function cleanupTmpTsConfigFile(tmpTsConfigPath) {
    try {
        if (tmpTsConfigPath) {
            (0, fs_1.unlinkSync)(tmpTsConfigPath);
        }
    }
    catch (e) { }
}
function checkDependentProjectsHaveBeenBuilt(root, projectName, targetName, projectDependencies) {
    const missing = findMissingBuildDependencies(root, projectName, targetName, projectDependencies);
    if (missing.length === projectDependencies.length && missing.length > 0) {
        console.error((0, devkit_1.stripIndents) `
      It looks like all of ${projectName}'s dependencies have not been built yet:
      ${missing.map((x) => ` - ${x.node.name}`).join('\n')}

      You might be missing a "targetDependencies" configuration in your root nx.json (https://nx.dev/configuration/packagejson#target-dependencies),
      or "dependsOn" configured in ${projectName}'s angular.json/workspace.json record or project.json (https://nx.dev/configuration/packagejson#dependson) 
    `);
    }
    else if (missing.length > 0) {
        console.error((0, devkit_1.stripIndents) `
      Some of the project ${projectName}'s dependencies have not been built yet. Please build these libraries before:
      ${missing.map((x) => ` - ${x.node.name}`).join('\n')}

      Try: nx run ${projectName}:${targetName} --with-deps
    `);
        return false;
    }
    else {
        return true;
    }
}
exports.checkDependentProjectsHaveBeenBuilt = checkDependentProjectsHaveBeenBuilt;
function findMissingBuildDependencies(root, projectName, targetName, projectDependencies) {
    const depLibsToBuildFirst = [];
    // verify whether all dependent libraries have been built
    projectDependencies.forEach((dep) => {
        if (dep.node.type !== 'lib') {
            return;
        }
        const paths = dep.outputs.map((p) => (0, path_1.join)(root, p));
        if (!paths.some(fileutils_1.directoryExists)) {
            depLibsToBuildFirst.push(dep);
        }
    });
    return depLibsToBuildFirst;
}
exports.findMissingBuildDependencies = findMissingBuildDependencies;
function updatePaths(dependencies, paths) {
    const pathsKeys = Object.keys(paths);
    dependencies.forEach((dep) => {
        if (dep.outputs && dep.outputs.length > 0) {
            paths[dep.name] = dep.outputs;
            // check for secondary entrypoints, only available for ng-packagr projects
            for (const path of pathsKeys) {
                if (path.startsWith(`${dep.name}/`)) {
                    const [, nestedPart] = path.split(`${dep.name}/`);
                    paths[path] = dep.outputs.map((o) => `${o}/${nestedPart}`);
                }
            }
        }
    });
}
exports.updatePaths = updatePaths;
/**
 * Updates the peerDependencies section in the `dist/lib/xyz/package.json` with
 * the proper dependency and version
 */
function updateBuildableProjectPackageJsonDependencies(root, projectName, targetName, configurationName, node, dependencies, typeOfDependency = 'dependencies') {
    const outputs = (0, devkit_1.getOutputsForTargetAndConfiguration)({
        overrides: {},
        target: {
            project: projectName,
            target: targetName,
            configuration: configurationName,
        },
    }, node);
    const packageJsonPath = `${outputs[0]}/package.json`;
    let packageJson;
    let workspacePackageJson;
    try {
        packageJson = (0, devkit_1.readJsonFile)(packageJsonPath);
        workspacePackageJson = (0, devkit_1.readJsonFile)(`${root}/package.json`);
    }
    catch (e) {
        // cannot find or invalid package.json
        return;
    }
    packageJson.dependencies = packageJson.dependencies || {};
    packageJson.peerDependencies = packageJson.peerDependencies || {};
    let updatePackageJson = false;
    dependencies.forEach((entry) => {
        var _a;
        const packageName = (0, operators_1.isNpmProject)(entry.node)
            ? entry.node.data.packageName
            : entry.name;
        if (!hasDependency(packageJson, 'dependencies', packageName) &&
            !hasDependency(packageJson, 'devDependencies', packageName) &&
            !hasDependency(packageJson, 'peerDependencies', packageName)) {
            try {
                let depVersion;
                if (entry.node.type === 'lib') {
                    const outputs = (0, devkit_1.getOutputsForTargetAndConfiguration)({
                        overrides: {},
                        target: {
                            project: projectName,
                            target: targetName,
                            configuration: configurationName,
                        },
                    }, entry.node);
                    const depPackageJsonPath = (0, path_1.join)(root, outputs[0], 'package.json');
                    depVersion = (0, devkit_1.readJsonFile)(depPackageJsonPath).version;
                    packageJson[typeOfDependency][packageName] = depVersion;
                }
                else if ((0, operators_1.isNpmProject)(entry.node)) {
                    // If an npm dep is part of the workspace devDependencies, do not include it the library
                    if (!!((_a = workspacePackageJson.devDependencies) === null || _a === void 0 ? void 0 : _a[entry.node.data.packageName])) {
                        return;
                    }
                    depVersion = entry.node.data.version;
                    packageJson[typeOfDependency][entry.node.data.packageName] =
                        depVersion;
                }
                updatePackageJson = true;
            }
            catch (e) {
                // skip if cannot find package.json
            }
        }
    });
    if (updatePackageJson) {
        (0, devkit_1.writeJsonFile)(packageJsonPath, packageJson);
    }
}
exports.updateBuildableProjectPackageJsonDependencies = updateBuildableProjectPackageJsonDependencies;
// verify whether the package.json already specifies the dep
function hasDependency(outputJson, depConfigName, packageName) {
    if (outputJson[depConfigName]) {
        return outputJson[depConfigName][packageName];
    }
    else {
        return false;
    }
}
//# sourceMappingURL=buildable-libs-utils.js.map
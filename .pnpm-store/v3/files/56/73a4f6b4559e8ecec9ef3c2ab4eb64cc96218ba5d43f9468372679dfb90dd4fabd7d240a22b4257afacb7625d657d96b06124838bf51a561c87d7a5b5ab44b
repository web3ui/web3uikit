"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createPackageJson = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Creates a package.json in the output directory for support to install dependencies within containers.
 *
 * If a package.json exists in the project, it will reuse that.
 */
function createPackageJson(projectName, graph, options) {
    const npmDeps = findAllNpmDeps(projectName, graph);
    // default package.json if one does not exist
    let packageJson = {
        name: projectName,
        version: '0.0.1',
        dependencies: {},
        devDependencies: {},
    };
    try {
        packageJson = (0, devkit_1.readJsonFile)(`${options.projectRoot}/package.json`);
        if (!packageJson.dependencies) {
            packageJson.dependencies = {};
        }
        if (!packageJson.devDependencies) {
            packageJson.devDependencies = {};
        }
    }
    catch (e) { }
    const rootPackageJson = (0, devkit_1.readJsonFile)(`${options.root}/package.json`);
    Object.entries(npmDeps).forEach(([packageName, version]) => {
        var _a;
        if ((_a = rootPackageJson.devDependencies) === null || _a === void 0 ? void 0 : _a[packageName]) {
            packageJson.devDependencies[packageName] = version;
        }
        else {
            packageJson.dependencies[packageName] = version;
        }
    });
    return packageJson;
}
exports.createPackageJson = createPackageJson;
function findAllNpmDeps(projectName, graph, list = {}, seen = new Set()) {
    var _a;
    if (seen.has(projectName)) {
        return list;
    }
    seen.add(projectName);
    const node = graph.externalNodes[projectName];
    if (node) {
        list[node.data.packageName] = node.data.version;
        recursivelyCollectPeerDependencies(node.name, graph, list);
    }
    (_a = graph.dependencies[projectName]) === null || _a === void 0 ? void 0 : _a.forEach((dep) => {
        findAllNpmDeps(dep.target, graph, list, seen);
    });
    return list;
}
function recursivelyCollectPeerDependencies(projectName, graph, list = {}, seen = new Set()) {
    const npmPackage = graph.externalNodes[projectName];
    if (!npmPackage || seen.has(projectName)) {
        return list;
    }
    seen.add(projectName);
    const packageName = npmPackage.data.packageName;
    try {
        const packageJson = require(`${packageName}/package.json`);
        if (!packageJson.peerDependencies) {
            return list;
        }
        Object.keys(packageJson.peerDependencies)
            .map((dependencyName) => `npm:${dependencyName}`)
            .map((dependency) => graph.externalNodes[dependency])
            .filter(Boolean)
            .forEach((node) => {
            list[node.data.packageName] = node.data.version;
            recursivelyCollectPeerDependencies(node.name, graph, list, seen);
        });
        return list;
    }
    catch (e) {
        return list;
    }
}
//# sourceMappingURL=create-package-json.js.map
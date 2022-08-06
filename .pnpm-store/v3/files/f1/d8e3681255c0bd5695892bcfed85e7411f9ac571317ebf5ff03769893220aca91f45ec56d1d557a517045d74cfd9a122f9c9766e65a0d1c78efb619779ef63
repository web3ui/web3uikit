"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeDependenciesFromPackageJson = exports.addDependenciesToPackageJson = void 0;
const json_1 = require("nx/src/generators/utils/json");
const install_packages_task_1 = require("../tasks/install-packages-task");
/**
 * Add Dependencies and Dev Dependencies to package.json
 *
 * For example:
 * ```typescript
 * addDependenciesToPackageJson(tree, { react: 'latest' }, { jest: 'latest' })
 * ```
 * This will **add** `react` and `jest` to the dependencies and devDependencies sections of package.json respectively.
 *
 * @param tree Tree representing file system to modify
 * @param dependencies Dependencies to be added to the dependencies section of package.json
 * @param devDependencies Dependencies to be added to the devDependencies section of package.json
 * @param packageJsonPath Path to package.json
 * @returns Callback to install dependencies only if necessary. undefined is returned if changes are not necessary.
 */
function addDependenciesToPackageJson(tree, dependencies, devDependencies, packageJsonPath = 'package.json') {
    const currentPackageJson = (0, json_1.readJson)(tree, packageJsonPath);
    if (requiresAddingOfPackages(currentPackageJson, dependencies, devDependencies)) {
        (0, json_1.updateJson)(tree, packageJsonPath, (json) => {
            json.dependencies = Object.assign(Object.assign(Object.assign({}, (json.dependencies || {})), dependencies), (json.dependencies || {}));
            json.devDependencies = Object.assign(Object.assign(Object.assign({}, (json.devDependencies || {})), devDependencies), (json.devDependencies || {}));
            json.dependencies = sortObjectByKeys(json.dependencies);
            json.devDependencies = sortObjectByKeys(json.devDependencies);
            return json;
        });
    }
    return () => {
        (0, install_packages_task_1.installPackagesTask)(tree);
    };
}
exports.addDependenciesToPackageJson = addDependenciesToPackageJson;
/**
 * Remove Dependencies and Dev Dependencies from package.json
 *
 * For example:
 * ```typescript
 * removeDependenciesFromPackageJson(tree, ['react'], ['jest'])
 * ```
 * This will **remove** `react` and `jest` from the dependencies and devDependencies sections of package.json respectively.
 *
 * @param dependencies Dependencies to be removed from the dependencies section of package.json
 * @param devDependencies Dependencies to be removed from the devDependencies section of package.json
 * @returns Callback to uninstall dependencies only if necessary. undefined is returned if changes are not necessary.
 */
function removeDependenciesFromPackageJson(tree, dependencies, devDependencies, packageJsonPath = 'package.json') {
    const currentPackageJson = (0, json_1.readJson)(tree, packageJsonPath);
    if (requiresRemovingOfPackages(currentPackageJson, dependencies, devDependencies)) {
        (0, json_1.updateJson)(tree, packageJsonPath, (json) => {
            for (const dep of dependencies) {
                delete json.dependencies[dep];
            }
            for (const devDep of devDependencies) {
                delete json.devDependencies[devDep];
            }
            json.dependencies = sortObjectByKeys(json.dependencies);
            json.devDependencies = sortObjectByKeys(json.devDependencies);
            return json;
        });
    }
    return () => {
        (0, install_packages_task_1.installPackagesTask)(tree);
    };
}
exports.removeDependenciesFromPackageJson = removeDependenciesFromPackageJson;
function sortObjectByKeys(obj) {
    if (!obj || typeof obj !== 'object' || Array.isArray(obj)) {
        return obj;
    }
    return Object.keys(obj)
        .sort()
        .reduce((result, key) => {
        return Object.assign(Object.assign({}, result), { [key]: obj[key] });
    }, {});
}
/**
 * Verifies whether the given packageJson dependencies require an update
 * given the deps & devDeps passed in
 */
function requiresAddingOfPackages(packageJsonFile, deps, devDeps) {
    let needsDepsUpdate = false;
    let needsDevDepsUpdate = false;
    packageJsonFile.dependencies = packageJsonFile.dependencies || {};
    packageJsonFile.devDependencies = packageJsonFile.devDependencies || {};
    if (Object.keys(deps).length > 0) {
        needsDepsUpdate = Object.keys(deps).some((entry) => !packageJsonFile.dependencies[entry]);
    }
    if (Object.keys(devDeps).length > 0) {
        needsDevDepsUpdate = Object.keys(devDeps).some((entry) => !packageJsonFile.devDependencies[entry]);
    }
    return needsDepsUpdate || needsDevDepsUpdate;
}
/**
 * Verifies whether the given packageJson dependencies require an update
 * given the deps & devDeps passed in
 */
function requiresRemovingOfPackages(packageJsonFile, deps, devDeps) {
    let needsDepsUpdate = false;
    let needsDevDepsUpdate = false;
    packageJsonFile.dependencies = packageJsonFile.dependencies || {};
    packageJsonFile.devDependencies = packageJsonFile.devDependencies || {};
    if (deps.length > 0) {
        needsDepsUpdate = deps.some((entry) => packageJsonFile.dependencies[entry]);
    }
    if (devDeps.length > 0) {
        needsDevDepsUpdate = devDeps.some((entry) => packageJsonFile.devDependencies[entry]);
    }
    return needsDepsUpdate || needsDevDepsUpdate;
}
//# sourceMappingURL=package-json.js.map
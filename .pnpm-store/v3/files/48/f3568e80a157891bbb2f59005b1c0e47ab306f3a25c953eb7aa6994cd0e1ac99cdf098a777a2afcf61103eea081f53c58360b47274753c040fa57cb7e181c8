"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePackagesInPackageJson = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("./ast-utils");
const fs_1 = require("fs");
const version_utils_1 = require("./version-utils");
const semver_1 = require("semver");
const add_install_task_1 = require("./rules/add-install-task");
function updatePackagesInPackageJson(migrationFilePath, versionName, options = { skipInstall: false }) {
    const migrations = JSON.parse((0, fs_1.readFileSync)(migrationFilePath).toString());
    const packageJsonUpdates = migrations.packageJsonUpdates[versionName];
    // should never happen
    if (!packageJsonUpdates) {
        throw new Error(`Cannot find ${versionName} in migrations.json`);
    }
    const updatedPackages = packageJsonUpdates.packages;
    let needsInstall = false;
    return (0, schematics_1.chain)([
        (0, ast_utils_1.updateJsonInTree)('package.json', (json) => {
            Object.keys(updatedPackages).forEach((p) => {
                /**
                 * Check the updated version against semver
                 */
                const cleanUpdatedVersion = (0, version_utils_1.checkAndCleanWithSemver)(p, updatedPackages[p].version);
                if (json.devDependencies && json.devDependencies[p]) {
                    const cleanDevVersion = (0, version_utils_1.checkAndCleanWithSemver)(p, json.devDependencies[p]);
                    if ((0, semver_1.lt)(cleanDevVersion, cleanUpdatedVersion)) {
                        json.devDependencies[p] = updatedPackages[p].version;
                        needsInstall = true;
                    }
                }
                else if (json.dependencies && json.dependencies[p]) {
                    const cleanVersion = (0, version_utils_1.checkAndCleanWithSemver)(p, json.dependencies[p]);
                    if ((0, semver_1.lt)(cleanVersion, cleanUpdatedVersion)) {
                        json.dependencies[p] = updatedPackages[p].version;
                        needsInstall = true;
                    }
                }
                else if (updatedPackages[p].alwaysAddToPackageJson) {
                    const cleanVersion = (0, version_utils_1.checkAndCleanWithSemver)(p, json.dependencies[p]);
                    if ((0, semver_1.lt)(cleanVersion, cleanUpdatedVersion)) {
                        if (!json.dependencies)
                            json.dependencies = {};
                        json.dependencies[p] = updatedPackages[p].version;
                        needsInstall = true;
                    }
                }
            });
            return json;
        }),
        needsInstall ? (0, add_install_task_1.addInstallTask)(options) : (0, schematics_1.noop)(),
    ]);
}
exports.updatePackagesInPackageJson = updatePackagesInPackageJson;
//# sourceMappingURL=update-packages-in-package-json.js.map
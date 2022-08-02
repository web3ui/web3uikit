"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameNpmPackages = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("../ast-utils");
const rename_package_imports_1 = require("./rename-package-imports");
const format_files_1 = require("./format-files");
const normalizeToDescriptors = (packageJson) => ([packageName, newPackageNameConfig]) => {
    const isDevDep = !!packageJson.devDependencies &&
        packageName in packageJson.devDependencies;
    const inPackageJson = (packageJson.dependencies && packageName in packageJson.dependencies) ||
        isDevDep;
    const newPackageName = Array.isArray(newPackageNameConfig)
        ? newPackageNameConfig[0]
        : newPackageNameConfig;
    const version = Array.isArray(newPackageNameConfig) && newPackageNameConfig[1]
        ? newPackageNameConfig[1]
        : isDevDep
            ? packageJson.devDependencies[packageName]
            : packageJson.dependencies[packageName];
    return {
        packageName,
        newPackageName,
        version,
        isDevDep,
        inPackageJson,
    };
};
/**
 * Updates all the imports in the workspace, and adjust the package.json appropriately.
 *
 * @param packageNameMapping The packageNameMapping provided to the schematic
 */
function renameNpmPackages(packageRenameMapping) {
    return (tree, context) => {
        const pkg = (0, ast_utils_1.readJsonInTree)(tree, 'package.json');
        const renameDescriptors = Object.entries(packageRenameMapping).map(normalizeToDescriptors(pkg));
        // if you don't find the packageName in package.json abort
        if (renameDescriptors.filter(({ inPackageJson }) => inPackageJson).length ===
            0) {
            return (0, schematics_1.noop)();
        }
        const packageNameMapping = renameDescriptors.reduce((mapping, { packageName, newPackageName }) => {
            mapping[packageName] = newPackageName;
            return mapping;
        }, {});
        const depAdditions = renameDescriptors.reduce((mapping, { newPackageName, version, isDevDep }) => {
            if (!isDevDep) {
                mapping[newPackageName] = version;
            }
            return mapping;
        }, {});
        const devDepAdditions = renameDescriptors.reduce((mapping, { newPackageName, version, isDevDep }) => {
            if (isDevDep) {
                mapping[newPackageName] = version;
            }
            return mapping;
        }, {});
        return (0, schematics_1.chain)([
            // rename all the imports before the package.json changes and we can't find the imports
            (0, rename_package_imports_1.renamePackageImports)(packageNameMapping),
            // add the new name at either the old version or a new version
            (0, ast_utils_1.addDepsToPackageJson)(depAdditions, devDepAdditions),
            // delete the old entry from the package.json
            (0, ast_utils_1.updateJsonInTree)('package.json', (json) => {
                renameDescriptors.forEach(({ packageName, isDevDep }) => {
                    if (isDevDep) {
                        delete json.devDependencies[packageName];
                    }
                    else {
                        delete json.dependencies[packageName];
                    }
                });
                return json;
            }),
            (0, format_files_1.formatFiles)(),
        ]);
    };
}
exports.renameNpmPackages = renameNpmPackages;
//# sourceMappingURL=rename-npm-packages.js.map
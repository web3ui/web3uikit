"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveNpmPackages = void 0;
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("../ast-utils");
const format_files_1 = require("./format-files");
const packageToMoveDescriptor = (packageJson, packageName, goesToDevDep) => {
    const isDevDep = !!packageJson.devDependencies && packageName in packageJson.devDependencies;
    const inPackageJson = (packageJson.dependencies && packageName in packageJson.dependencies) ||
        isDevDep;
    const version = isDevDep
        ? packageJson.devDependencies[packageName]
        : packageJson.dependencies[packageName];
    return {
        packageName,
        version,
        isDevDep,
        inPackageJson,
        goesToDevDep,
    };
};
const normalizeToMoveDescriptors = (packageJson, toDeps, toDevDeps) => {
    const normalizedMoveDescriptors = [
        ...toDeps.map((packageName) => packageToMoveDescriptor(packageJson, packageName, false)),
        ...toDevDeps.map((packageName) => packageToMoveDescriptor(packageJson, packageName, true)),
    ];
    return normalizedMoveDescriptors;
};
/**
 * Move packages to deps or devDeps adjusting the package.json appropriately.
 *
 * @param packageMoveOptions The PackageMoveOptions provided to the schematic
 */
function moveNpmPackages(packageMoveOptions) {
    return (tree, context) => {
        const pkg = (0, ast_utils_1.readJsonInTree)(tree, 'package.json');
        const { toDeps = [], toDevDeps = [] } = packageMoveOptions;
        const moveDescriptors = normalizeToMoveDescriptors(pkg, Array.isArray(toDeps) ? toDeps : [toDeps], Array.isArray(toDevDeps) ? toDevDeps : [toDevDeps]).filter(({ inPackageJson, isDevDep, goesToDevDep }) => inPackageJson &&
            ((isDevDep && !goesToDevDep) || (!isDevDep && goesToDevDep)));
        // if no packages are being moved to its oposite group, abort
        if (moveDescriptors.length === 0) {
            return (0, schematics_1.noop)();
        }
        const depAdditions = moveDescriptors.reduce((mapping, { packageName, version, goesToDevDep }) => {
            if (!goesToDevDep) {
                mapping[packageName] = version;
            }
            return mapping;
        }, {});
        const devDepAdditions = moveDescriptors.reduce((mapping, { packageName, version, goesToDevDep }) => {
            if (goesToDevDep) {
                mapping[packageName] = version;
            }
            return mapping;
        }, {});
        return (0, schematics_1.chain)([
            // add the packages to new destination in package.json
            (0, ast_utils_1.addDepsToPackageJson)(depAdditions, devDepAdditions),
            // delete the old entry from the package.json
            (0, ast_utils_1.updateJsonInTree)('package.json', (json) => {
                moveDescriptors.forEach(({ packageName, goesToDevDep }) => {
                    if (goesToDevDep) {
                        delete json.dependencies[packageName];
                    }
                    else {
                        delete json.devDependencies[packageName];
                    }
                });
                return json;
            }),
            (0, format_files_1.formatFiles)(),
        ]);
    };
}
exports.moveNpmPackages = moveNpmPackages;
//# sourceMappingURL=move-npm-packages.js.map
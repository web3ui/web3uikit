"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updatePackageJson = void 0;
const devkit_1 = require("@nrwl/devkit");
const buildable_libs_utils_1 = require("@nrwl/workspace/src/utilities/buildable-libs-utils");
const path_1 = require("path");
function getMainFileDirRelativeToProjectRoot(main, projectRoot) {
    const mainFileDir = (0, path_1.dirname)(main);
    const relativeDir = (0, devkit_1.normalizePath)((0, path_1.relative)(projectRoot, mainFileDir));
    return relativeDir === '' ? `./` : `./${relativeDir}/`;
}
function updatePackageJson(options, context, target, dependencies, withTypings = true) {
    var _a, _b;
    const packageJson = (0, devkit_1.readJsonFile)((0, path_1.join)(options.projectRoot, 'package.json'));
    const mainFile = (0, path_1.basename)(options.main).replace(/\.[tj]s$/, '');
    const relativeMainFileDir = getMainFileDirRelativeToProjectRoot(options.main, options.projectRoot);
    const mainJsFile = `${relativeMainFileDir}${mainFile}.js`;
    const typingsFile = `${relativeMainFileDir}${mainFile}.d.ts`;
    packageJson.main = (_a = packageJson.main) !== null && _a !== void 0 ? _a : mainJsFile;
    if (withTypings) {
        packageJson.typings = (_b = packageJson.typings) !== null && _b !== void 0 ? _b : typingsFile;
    }
    (0, devkit_1.writeJsonFile)(`${options.outputPath}/package.json`, packageJson);
    if (dependencies.length > 0 &&
        options.updateBuildableProjectDepsInPackageJson) {
        (0, buildable_libs_utils_1.updateBuildableProjectPackageJsonDependencies)(context.root, context.projectName, context.targetName, context.configurationName, target, dependencies, options.buildableProjectDepsInPackageJsonType);
    }
}
exports.updatePackageJson = updatePackageJson;
//# sourceMappingURL=update-package-json.js.map
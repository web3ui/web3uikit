"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToSwcSchematic = exports.convertToSwcGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const add_swc_config_1 = require("../../utils/swc/add-swc-config");
const add_swc_dependencies_1 = require("../../utils/swc/add-swc-dependencies");
const versions_1 = require("../../utils/versions");
function convertToSwcGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(schema);
        const projectConfiguration = (0, devkit_1.readProjectConfiguration)(tree, options.project);
        updateProjectBuildTargets(tree, projectConfiguration, options.project, options.targets);
        return checkSwcDependencies(tree, projectConfiguration);
    });
}
exports.convertToSwcGenerator = convertToSwcGenerator;
function normalizeOptions(schema) {
    const options = Object.assign({}, schema);
    if (!options.targets) {
        options.targets = ['build'];
    }
    return options;
}
function updateProjectBuildTargets(tree, projectConfiguration, projectName, projectTargets) {
    for (const target of projectTargets) {
        const targetConfiguration = projectConfiguration.targets[target];
        if (!targetConfiguration || targetConfiguration.executor !== '@nrwl/js:tsc')
            continue;
        targetConfiguration.executor = '@nrwl/js:swc';
    }
    (0, devkit_1.updateProjectConfiguration)(tree, projectName, projectConfiguration);
}
function checkSwcDependencies(tree, projectConfiguration) {
    const isSwcrcPresent = tree.exists((0, path_1.join)(projectConfiguration.root, '.lib.swcrc'));
    const packageJson = (0, devkit_1.readJson)(tree, 'package.json');
    const projectPackageJsonPath = (0, path_1.join)(projectConfiguration.root, 'package.json');
    const projectPackageJson = (0, devkit_1.readJson)(tree, projectPackageJsonPath);
    const hasSwcDependency = packageJson.dependencies && packageJson.dependencies['@swc/core'];
    const hasSwcHelpers = projectPackageJson.dependencies &&
        projectPackageJson.dependencies['@swc/helpers'];
    if (isSwcrcPresent && hasSwcDependency && hasSwcHelpers)
        return;
    if (!isSwcrcPresent) {
        (0, add_swc_config_1.addSwcConfig)(tree, projectConfiguration.root);
    }
    if (!hasSwcDependency) {
        (0, add_swc_dependencies_1.addSwcDependencies)(tree);
    }
    if (!hasSwcHelpers) {
        (0, devkit_1.addDependenciesToPackageJson)(tree, {
            '@swc/helpers': versions_1.swcHelpersVersion,
        }, {}, projectPackageJsonPath);
    }
    return () => {
        if (!hasSwcDependency) {
            (0, devkit_1.installPackagesTask)(tree);
        }
    };
}
exports.default = convertToSwcGenerator;
exports.convertToSwcSchematic = (0, devkit_1.convertNxGenerator)(convertToSwcGenerator);
//# sourceMappingURL=convert-to-swc.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const functions_1 = require("../../utils/config/functions");
const versions_1 = require("../../utils/versions");
function checkIfProjectNeedsUpdate(tree) {
    if (tree.exists('babel.config.json')) {
        // the project is already running on babel and good to go
        return false;
    }
    let shouldUpdate = false;
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (jestOptions, projectName) => {
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
        const jestConfigPath = (0, devkit_1.joinPathFragments)(projectConfig.root, 'jest.config.js');
        if (!tree.exists(jestConfigPath)) {
            return;
        }
        const config = (0, functions_1.jestConfigObject)(tree, jestConfigPath);
        if (config.transform) {
            for (const transformer of Object.values(config.transform)) {
                if ((typeof transformer === 'string' && transformer === 'babel-jest') ||
                    (Array.isArray(transformer) && transformer[0] === 'babel-jest')) {
                    shouldUpdate = true;
                }
            }
        }
    });
    return shouldUpdate;
}
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const shouldUpdateConfigs = checkIfProjectNeedsUpdate(tree);
        if (shouldUpdateConfigs) {
            (0, devkit_1.addDependenciesToPackageJson)(tree, {}, { '@nrwl/web': versions_1.nxVersion });
            tree.write('babel.config.json', '{"babelrcRoots": ["*"]}');
            yield (0, devkit_1.formatFiles)(tree);
        }
    });
}
exports.default = update;
//# sourceMappingURL=add-missing-root-babel-config.js.map
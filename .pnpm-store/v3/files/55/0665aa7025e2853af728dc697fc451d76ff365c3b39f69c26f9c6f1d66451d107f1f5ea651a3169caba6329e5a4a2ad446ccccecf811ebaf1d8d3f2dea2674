"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const update_config_1 = require("../../utils/config/update-config");
function updateJestConfig(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (options, project) => {
        if (!options.jestConfig) {
            return;
        }
        const jestConfigPath = options.jestConfig;
        const jestConfig = require((0, path_1.join)(tree.root, jestConfigPath));
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, project);
        const testEnvironment = jestConfig.testEnvironment;
        if (testEnvironment || !checkIfNodeProject(projectConfig)) {
            return;
        }
        try {
            (0, update_config_1.addPropertyToJestConfig)(tree, jestConfigPath, 'testEnvironment', 'node');
        }
        catch (_a) {
            devkit_1.logger.error((0, devkit_1.stripIndents) `Unable to update jest.config.js for project ${project}.`);
        }
    });
}
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        updateJestConfig(tree);
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = update;
function checkIfNodeProject(config) {
    return Object.entries(config.targets).some(([targetName, targetConfig]) => { var _a, _b; return (_b = (_a = targetConfig.executor) === null || _a === void 0 ? void 0 : _a.includes) === null || _b === void 0 ? void 0 : _b.call(_a, 'node'); });
}
//# sourceMappingURL=add-test-environment-for-node.js.map
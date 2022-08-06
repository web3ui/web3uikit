"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const update_config_1 = require("../../utils/config/update-config");
function updateJestConfig(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (options, project) => {
        var _a;
        if (!options.jestConfig) {
            return;
        }
        const jestConfigPath = options.jestConfig;
        const config = require((0, path_1.join)(tree.root, jestConfigPath));
        const tsJestConfig = (_a = config.globals) === null || _a === void 0 ? void 0 : _a['ts-jest'];
        if (!(tsJestConfig && tsJestConfig.tsConfig)) {
            return;
        }
        try {
            (0, update_config_1.removePropertyFromJestConfig)(tree, jestConfigPath, 'globals.ts-jest.tsConfig');
            (0, update_config_1.addPropertyToJestConfig)(tree, jestConfigPath, 'globals.ts-jest.tsconfig', tsJestConfig.tsConfig);
        }
        catch (_b) {
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
//# sourceMappingURL=update-ts-jest.js.map
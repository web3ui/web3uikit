"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeNpmScriptExecutor = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
function changeNpmScriptExecutor(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/workspace:run-script', (currentValue, project, target) => {
            const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, project);
            const targetConfig = projectConfig.targets[target];
            targetConfig.executor = 'nx:run-script';
            (0, devkit_1.updateProjectConfiguration)(tree, project, projectConfig);
        });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.changeNpmScriptExecutor = changeNpmScriptExecutor;
exports.default = changeNpmScriptExecutor;
//# sourceMappingURL=change-npm-script-executor.js.map
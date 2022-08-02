"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateSwcrcPath = void 0;
const devkit_1 = require("@nrwl/devkit");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
function updateSwcrcPath(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/js:swc', (_, projectName, targetName, configurationName) => {
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
        const executorOptions = configurationName
            ? projectConfig.targets[targetName].configurations[configurationName]
            : projectConfig.targets[targetName].options;
        if (!executorOptions.swcrcPath)
            return;
        const newSwcrcPath = (0, devkit_1.joinPathFragments)(projectConfig.root, executorOptions.swcrcPath);
        delete executorOptions.swcrcPath;
        executorOptions.swcrc = newSwcrcPath;
        (0, devkit_1.updateProjectConfiguration)(tree, projectName, projectConfig);
    });
}
exports.updateSwcrcPath = updateSwcrcPath;
exports.default = updateSwcrcPath;
//# sourceMappingURL=update-swcrc-path.js.map
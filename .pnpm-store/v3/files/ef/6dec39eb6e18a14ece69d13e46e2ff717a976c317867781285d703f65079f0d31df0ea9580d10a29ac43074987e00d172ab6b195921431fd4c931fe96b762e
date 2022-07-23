"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTasksRunner = void 0;
const devkit_1 = require("@nrwl/devkit");
function updateTasksRunner(host) {
    const config = (0, devkit_1.readWorkspaceConfiguration)(host);
    if ((config === null || config === void 0 ? void 0 : config.tasksRunnerOptions['default']) &&
        (config === null || config === void 0 ? void 0 : config.tasksRunnerOptions['default'].runner) ==
            '@nrwl/workspace/tasks-runners/default') {
        config.tasksRunnerOptions['default'].runner = 'nx/tasks-runners/default';
    }
    (0, devkit_1.updateWorkspaceConfiguration)(host, config);
}
exports.updateTasksRunner = updateTasksRunner;
exports.default = updateTasksRunner;
//# sourceMappingURL=update-tasks-runner.js.map
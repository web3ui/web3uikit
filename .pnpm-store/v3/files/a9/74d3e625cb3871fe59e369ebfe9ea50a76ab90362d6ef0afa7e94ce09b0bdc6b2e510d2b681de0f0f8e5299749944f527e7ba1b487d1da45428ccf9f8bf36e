"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeOldTaskRunnerOptions = void 0;
const devkit_1 = require("@nrwl/devkit");
function removeOldTaskRunnerOptions(host) {
    var _a, _b;
    const workspaceConfig = (0, devkit_1.readWorkspaceConfiguration)(host);
    const options = (_b = (_a = workspaceConfig.tasksRunnerOptions) === null || _a === void 0 ? void 0 : _a['default']) === null || _b === void 0 ? void 0 : _b.options;
    if (options) {
        delete options.scan;
        delete options.analytics;
        (0, devkit_1.updateWorkspaceConfiguration)(host, workspaceConfig);
    }
}
exports.removeOldTaskRunnerOptions = removeOldTaskRunnerOptions;
exports.default = removeOldTaskRunnerOptions;
//# sourceMappingURL=remove-old-task-runner-options.js.map
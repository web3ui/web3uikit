"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setParallelDefault = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function setParallelDefault(host) {
    var _a, _b;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const config = (0, devkit_1.readWorkspaceConfiguration)(host);
        const defaultTaskRunnerOptions = (_b = (_a = config.tasksRunnerOptions) === null || _a === void 0 ? void 0 : _a['default']) === null || _b === void 0 ? void 0 : _b.options;
        if (defaultTaskRunnerOptions) {
            if (defaultTaskRunnerOptions.parallel) {
                defaultTaskRunnerOptions.parallel =
                    defaultTaskRunnerOptions.maxParallel || 3;
                delete defaultTaskRunnerOptions.maxParallel;
            }
            else {
                defaultTaskRunnerOptions.parallel = 1;
            }
            (0, devkit_1.updateWorkspaceConfiguration)(host, config);
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.setParallelDefault = setParallelDefault;
exports.default = setParallelDefault;
//# sourceMappingURL=set-parallel-default.js.map
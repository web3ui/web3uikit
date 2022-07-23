"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.forEachExecutorOptions = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Calls a function for each different options that an executor is configured with
 */
function forEachExecutorOptions(tree, 
/**
 * Name of the executor to update options for
 */
executorName, 
/**
 * Callback that is called for each options configured for a builder
 */
callback) {
    for (const [projectName, project] of (0, devkit_1.getProjects)(tree)) {
        for (const [targetName, target] of Object.entries(project.targets || {})) {
            if (executorName !== target.executor) {
                continue;
            }
            if (target.options) {
                callback(target.options, projectName, targetName);
            }
            if (!target.configurations) {
                continue;
            }
            Object.entries(target.configurations).forEach(([configName, options]) => {
                callback(options, projectName, targetName, configName);
            });
        }
    }
}
exports.forEachExecutorOptions = forEachExecutorOptions;
// TODO: add a method for updating options
//# sourceMappingURL=executor-options-utils.js.map
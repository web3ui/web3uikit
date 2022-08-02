"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readTargetOptions = void 0;
const workspaces_1 = require("nx/src/config/workspaces");
const params_1 = require("nx/src/utils/params");
/**
 * Reads and combines options for a given target.
 *
 * Works as if you invoked the target yourself without passing any command lint overrides.
 */
function readTargetOptions({ project, target, configuration }, context) {
    var _a;
    const projectConfiguration = context.workspace.projects[project];
    const targetConfiguration = projectConfiguration.targets[target];
    const ws = new workspaces_1.Workspaces(context.root);
    const [nodeModule, executorName] = targetConfiguration.executor.split(':');
    const { schema } = ws.readExecutor(nodeModule, executorName);
    const defaultProject = ws.calculateDefaultProjectName(context.cwd, context.workspace);
    return (0, params_1.combineOptionsForExecutor)({}, (_a = configuration !== null && configuration !== void 0 ? configuration : targetConfiguration.defaultConfiguration) !== null && _a !== void 0 ? _a : '', targetConfiguration, schema, defaultProject, ws.relativeCwd(context.cwd));
}
exports.readTargetOptions = readTargetOptions;
//# sourceMappingURL=read-target-options.js.map
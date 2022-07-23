"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultTasksRunner = void 0;
const tslib_1 = require("tslib");
const task_orchestrator_1 = require("./task-orchestrator");
const perf_hooks_1 = require("perf_hooks");
const task_graph_creator_1 = require("./task-graph-creator");
const hasher_1 = require("../hasher/hasher");
const defaultTasksRunner = (tasks, options, context) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (options['parallel'] === 'false' ||
        options['parallel'] === false) {
        options['parallel'] = 1;
    }
    else if (options['parallel'] === 'true' ||
        options['parallel'] === true ||
        options['parallel'] === undefined) {
        options['parallel'] = Number(options['maxParallel'] || 3);
    }
    options.lifeCycle.startCommand();
    try {
        return yield runAllTasks(tasks, options, context);
    }
    catch (e) {
        console.error('Unexpected error:');
        console.error(e);
        process.exit(1);
    }
    finally {
        options.lifeCycle.endCommand();
    }
});
exports.defaultTasksRunner = defaultTasksRunner;
function runAllTasks(tasks, options, context) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const defaultTargetDependencies = (_a = context.nxJson.targetDependencies) !== null && _a !== void 0 ? _a : {};
        const taskGraphCreator = new task_graph_creator_1.TaskGraphCreator(context.projectGraph, defaultTargetDependencies);
        const taskGraph = taskGraphCreator.createTaskGraph(tasks);
        perf_hooks_1.performance.mark('task-graph-created');
        perf_hooks_1.performance.measure('nx-prep-work', 'init-local', 'task-graph-created');
        perf_hooks_1.performance.measure('graph-creation', 'command-execution-begins', 'task-graph-created');
        const hasher = new hasher_1.Hasher(context.projectGraph, context.nxJson, options);
        const orchestrator = new task_orchestrator_1.TaskOrchestrator(hasher, context.initiatingProject, context.projectGraph, taskGraph, options);
        return orchestrator.run();
    });
}
exports.default = exports.defaultTasksRunner;
//# sourceMappingURL=default-tasks-runner.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TasksSchedule = void 0;
const tslib_1 = require("tslib");
const utils_1 = require("./utils");
class TasksSchedule {
    constructor(hasher, projectGraph, taskGraph, workspaces, options) {
        this.hasher = hasher;
        this.projectGraph = projectGraph;
        this.taskGraph = taskGraph;
        this.workspaces = workspaces;
        this.options = options;
        this.notScheduledTaskGraph = this.taskGraph;
        this.reverseTaskDeps = (0, utils_1.calculateReverseDeps)(this.taskGraph);
        this.scheduledBatches = [];
        this.scheduledTasks = [];
        this.completedTasks = new Set();
    }
    scheduleNextTasks() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (process.env.NX_BATCH_MODE === 'true') {
                this.scheduleBatches();
            }
            for (let root of this.notScheduledTaskGraph.roots) {
                if (this.canBeScheduled(root)) {
                    yield this.scheduleTask(root);
                }
            }
        });
    }
    hasTasks() {
        return (this.scheduledBatches.length +
            this.scheduledTasks.length +
            Object.keys(this.notScheduledTaskGraph.tasks).length !==
            0);
    }
    complete(taskIds) {
        for (const taskId of taskIds) {
            this.completedTasks.add(taskId);
        }
        this.notScheduledTaskGraph = (0, utils_1.removeTasksFromTaskGraph)(this.notScheduledTaskGraph, taskIds);
    }
    nextTask() {
        if (this.scheduledTasks.length > 0) {
            return this.taskGraph.tasks[this.scheduledTasks.shift()];
        }
        else {
            return null;
        }
    }
    nextBatch() {
        return this.scheduledBatches.length > 0
            ? this.scheduledBatches.shift()
            : null;
    }
    scheduleTask(taskId) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const task = this.taskGraph.tasks[taskId];
            yield this.hashTask(task);
            this.notScheduledTaskGraph = (0, utils_1.removeTasksFromTaskGraph)(this.notScheduledTaskGraph, [taskId]);
            this.scheduledTasks.push(taskId);
            // TODO vsavkin: remove the if statement after Nx 14 is out
            if (this.options.lifeCycle.scheduleTask) {
                this.options.lifeCycle.scheduleTask(task);
            }
        });
    }
    scheduleBatches() {
        const batchMap = {};
        for (const root of this.notScheduledTaskGraph.roots) {
            const rootTask = this.notScheduledTaskGraph.tasks[root];
            const executorName = (0, utils_1.getExecutorNameForTask)(rootTask, this.workspaces);
            this.processTaskForBatches(batchMap, rootTask, executorName, true);
        }
        for (const [executorName, taskGraph] of Object.entries(batchMap)) {
            this.scheduleBatch({ executorName, taskGraph });
        }
    }
    scheduleBatch({ executorName, taskGraph }) {
        // Create a new task graph without the tasks that are being scheduled as part of this batch
        this.notScheduledTaskGraph = (0, utils_1.removeTasksFromTaskGraph)(this.notScheduledTaskGraph, Object.keys(taskGraph.tasks));
        this.scheduledBatches.push({ executorName, taskGraph });
    }
    processTaskForBatches(batches, task, rootExecutorName, isRoot) {
        var _a;
        const { batchImplementationFactory } = (0, utils_1.getExecutorForTask)(task, this.workspaces);
        const executorName = (0, utils_1.getExecutorNameForTask)(task, this.workspaces);
        if (rootExecutorName !== executorName) {
            return;
        }
        if (!batchImplementationFactory) {
            return;
        }
        const batch = (batches[rootExecutorName] =
            (_a = batches[rootExecutorName]) !== null && _a !== void 0 ? _a : {
                tasks: {},
                dependencies: {},
                roots: [],
            });
        batch.tasks[task.id] = task;
        batch.dependencies[task.id] = this.taskGraph.dependencies[task.id];
        if (isRoot) {
            batch.roots.push(task.id);
        }
        for (const dep of this.reverseTaskDeps[task.id]) {
            const depTask = this.taskGraph.tasks[dep];
            this.processTaskForBatches(batches, depTask, rootExecutorName, false);
        }
    }
    canBeScheduled(taskId) {
        return this.taskGraph.dependencies[taskId].every((id) => this.completedTasks.has(id));
    }
    hashTask(task) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const customHasher = (0, utils_1.getCustomHasher)(task, this.workspaces);
            const { value, details } = yield (customHasher
                ? customHasher(task, {
                    hasher: this.hasher,
                    projectGraph: this.projectGraph,
                    taskGraph: this.taskGraph,
                    workspaceConfig: this.workspaces.readWorkspaceConfiguration(),
                })
                : this.hasher.hashTaskWithDepsAndContext(task));
            task.hash = value;
            task.hashDetails = details;
        });
    }
}
exports.TasksSchedule = TasksSchedule;
//# sourceMappingURL=tasks-schedule.js.map
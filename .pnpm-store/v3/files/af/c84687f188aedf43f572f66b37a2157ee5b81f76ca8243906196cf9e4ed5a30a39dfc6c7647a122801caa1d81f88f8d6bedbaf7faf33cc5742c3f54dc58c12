"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function run(task, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (task.overrides['hasTypeAwareRules'] === true) {
            return context.hasher.hashTaskWithDepsAndContext(task);
        }
        const command = context.hasher.hashCommand(task);
        const source = yield context.hasher.hashSource(task);
        const deps = allDeps(task.id, context.taskGraph, context.projectGraph);
        const tags = context.hasher.hashArray(deps.map((d) => (context.workspaceConfig.projects[d].tags || []).join('|')));
        const taskContext = yield context.hasher.hashContext();
        return {
            value: context.hasher.hashArray([
                command,
                source,
                tags,
                taskContext.implicitDeps.value,
                taskContext.runtime.value,
            ]),
            details: {
                command,
                nodes: { [task.target.project]: source, tags },
                implicitDeps: taskContext.implicitDeps.files,
                runtime: taskContext.runtime.runtime,
            },
        };
    });
}
exports.default = run;
function allDeps(taskId, taskGraph, projectGraph) {
    const project = taskGraph.tasks[taskId].target.project;
    const dependencies = projectGraph.dependencies[project]
        .filter((d) => !!projectGraph.nodes[d.target])
        .map((d) => d.target);
    return dependencies;
}
//# sourceMappingURL=hasher.js.map
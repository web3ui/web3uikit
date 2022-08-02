"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTaskGraph = exports.ProcessTasks = void 0;
const utils_1 = require("./utils");
const project_graph_utils_1 = require("../utils/project-graph-utils");
class ProcessTasks {
    constructor(defaultDependencyConfigs, projectGraph) {
        this.defaultDependencyConfigs = defaultDependencyConfigs;
        this.projectGraph = projectGraph;
        this.seen = new Set();
        this.tasks = {};
        this.dependencies = {};
    }
    processTasks(projectNames, targets, configuration, overrides) {
        for (const projectName of projectNames) {
            for (const target of targets) {
                const resolvedConfiguration = this.resolveConfiguration(this.projectGraph.nodes[projectName], target, configuration);
                const id = this.getId(projectName, target, resolvedConfiguration);
                const task = this.createTask(id, this.projectGraph.nodes[projectName], target, resolvedConfiguration, overrides);
                this.tasks[task.id] = task;
                this.dependencies[task.id] = [];
            }
        }
        for (const taskId of Object.keys(this.tasks)) {
            const task = this.tasks[taskId];
            this.processTask(task, task.target.project, configuration);
        }
        return Object.keys(this.dependencies).filter((d) => this.dependencies[d].length === 0);
    }
    processTask(task, projectUsedToDeriveDependencies, configuration) {
        const seenKey = `${task.id}-${projectUsedToDeriveDependencies}`;
        if (this.seen.has(seenKey)) {
            return;
        }
        this.seen.add(seenKey);
        const dependencyConfigs = (0, utils_1.getDependencyConfigs)({ project: task.target.project, target: task.target.target }, this.defaultDependencyConfigs, this.projectGraph);
        for (const dependencyConfig of dependencyConfigs) {
            if (dependencyConfig.projects === 'dependencies') {
                for (const dep of this.projectGraph.dependencies[projectUsedToDeriveDependencies]) {
                    const depProject = this.projectGraph.nodes[dep.target];
                    // this is to handle external dependencies
                    if (!depProject)
                        continue;
                    if ((0, project_graph_utils_1.projectHasTarget)(depProject, dependencyConfig.target)) {
                        const resolvedConfiguration = this.resolveConfiguration(depProject, dependencyConfig.target, configuration);
                        const depTargetId = this.getId(depProject.name, dependencyConfig.target, resolvedConfiguration);
                        if (task.id !== depTargetId) {
                            this.dependencies[task.id].push(depTargetId);
                        }
                        if (!this.tasks[depTargetId]) {
                            const newTask = this.createTask(depTargetId, depProject, dependencyConfig.target, resolvedConfiguration, { __overrides_unparsed__: [] });
                            this.tasks[depTargetId] = newTask;
                            this.dependencies[depTargetId] = [];
                            this.processTask(newTask, newTask.target.project, configuration);
                        }
                    }
                    else {
                        this.processTask(task, depProject.name, configuration);
                    }
                }
            }
            else {
                const selfProject = this.projectGraph.nodes[task.target.project];
                if ((0, project_graph_utils_1.projectHasTarget)(selfProject, dependencyConfig.target)) {
                    const resolvedConfiguration = this.resolveConfiguration(selfProject, dependencyConfig.target, configuration);
                    const selfTaskId = this.getId(selfProject.name, dependencyConfig.target, resolvedConfiguration);
                    if (task.id !== selfTaskId) {
                        this.dependencies[task.id].push(selfTaskId);
                    }
                    if (!this.tasks[selfTaskId]) {
                        const newTask = this.createTask(selfTaskId, selfProject, dependencyConfig.target, resolvedConfiguration, { __overrides_unparsed__: [] });
                        this.tasks[selfTaskId] = newTask;
                        this.dependencies[selfTaskId] = [];
                        this.processTask(newTask, newTask.target.project, configuration);
                    }
                }
            }
        }
    }
    createTask(id, project, target, resolvedConfiguration, overrides) {
        const qualifiedTarget = {
            project: project.name,
            target,
            configuration: resolvedConfiguration,
        };
        return {
            id,
            target: qualifiedTarget,
            projectRoot: project.data.root,
            overrides: interpolateOverrides(overrides, project.name, project.data),
        };
    }
    resolveConfiguration(project, target, configuration) {
        var _a, _b;
        configuration !== null && configuration !== void 0 ? configuration : (configuration = (_b = (_a = project.data.targets) === null || _a === void 0 ? void 0 : _a[target]) === null || _b === void 0 ? void 0 : _b.defaultConfiguration);
        return (0, project_graph_utils_1.projectHasTargetAndConfiguration)(project, target, configuration)
            ? configuration
            : undefined;
    }
    getId(project, target, configuration) {
        let id = `${project}:${target}`;
        if (configuration) {
            id += `:${configuration}`;
        }
        return id;
    }
}
exports.ProcessTasks = ProcessTasks;
function createTaskGraph(projectGraph, defaultDependencyConfigs, projectNames, targets, configuration, overrides) {
    const p = new ProcessTasks(defaultDependencyConfigs, projectGraph);
    const roots = p.processTasks(projectNames, targets, configuration, overrides);
    return {
        roots,
        tasks: p.tasks,
        dependencies: p.dependencies,
    };
}
exports.createTaskGraph = createTaskGraph;
function interpolateOverrides(args, projectName, project) {
    const interpolatedArgs = Object.assign({}, args);
    Object.entries(interpolatedArgs).forEach(([name, value]) => {
        interpolatedArgs[name] =
            typeof value === 'string'
                ? (0, utils_1.interpolate)(value, { project: Object.assign(Object.assign({}, project), { name: projectName }) })
                : value;
    });
    return interpolatedArgs;
}
//# sourceMappingURL=create-task-graph.js.map
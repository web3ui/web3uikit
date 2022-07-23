"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TaskGraphCreator = void 0;
const utils_1 = require("./utils");
class TaskGraphCreator {
    constructor(projectGraph, defaultTargetDependencies) {
        this.projectGraph = projectGraph;
        this.defaultTargetDependencies = defaultTargetDependencies;
    }
    createTaskGraph(tasks) {
        const graph = {
            roots: [],
            tasks: {},
            dependencies: {},
        };
        for (const task of tasks) {
            this.addTaskToGraph(task, graph);
            const dependencyConfigs = (0, utils_1.getDependencyConfigs)(task.target, this.defaultTargetDependencies, this.projectGraph);
            if (!dependencyConfigs) {
                continue;
            }
            this.addTaskDependencies(task, dependencyConfigs, tasks, graph);
        }
        graph.roots = Object.keys(graph.dependencies).filter((k) => graph.dependencies[k].length === 0);
        return graph;
    }
    addTaskDependencies(task, dependencyConfigs, tasks, graph) {
        for (const dependencyConfig of dependencyConfigs) {
            if (dependencyConfig.projects === 'self') {
                for (const t of tasks) {
                    if (t.target.project === task.target.project &&
                        t.target.target === dependencyConfig.target) {
                        graph.dependencies[task.id].push(t.id);
                    }
                }
            }
            else if (dependencyConfig.projects === 'dependencies') {
                const seen = new Set();
                this.addDependencies(task.target.project, dependencyConfig.target, tasks, graph, task.id, seen);
            }
        }
    }
    addDependencies(project, target, tasks, graph, taskId, seen) {
        seen.add(project);
        const dependencies = this.projectGraph.dependencies[project];
        if (dependencies) {
            const projectDependencies = dependencies.map((dependency) => dependency.target);
            for (const projectDependency of projectDependencies) {
                if (seen.has(projectDependency)) {
                    continue;
                }
                const dependency = this.findTask({ project: projectDependency, target }, tasks);
                if (dependency) {
                    graph.dependencies[taskId].push(dependency.id);
                }
                else {
                    this.addDependencies(projectDependency, target, tasks, graph, taskId, seen);
                }
            }
        }
    }
    findTask({ project, target }, tasks) {
        return tasks.find((t) => t.target.project === project && t.target.target === target);
    }
    addTaskToGraph(task, graph) {
        graph.tasks[task.id] = task;
        graph.dependencies[task.id] = [];
    }
}
exports.TaskGraphCreator = TaskGraphCreator;
//# sourceMappingURL=task-graph-creator.js.map
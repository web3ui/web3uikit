import { ProjectGraph } from '../config/project-graph';
import { Task, TaskGraph } from '../config/task-graph';
import { TargetDependencyConfig } from '../config/workspace-json-project-json';
export declare class TaskGraphCreator {
    private readonly projectGraph;
    private readonly defaultTargetDependencies;
    constructor(projectGraph: ProjectGraph, defaultTargetDependencies: Record<string, (TargetDependencyConfig | string)[]>);
    createTaskGraph(tasks: Task[]): TaskGraph;
    private addTaskDependencies;
    private addDependencies;
    private findTask;
    private addTaskToGraph;
}

import { Workspaces } from '../config/workspaces';
import { DefaultTasksRunnerOptions } from './default-tasks-runner';
import { Hasher } from '../hasher/hasher';
import { Task, TaskGraph } from '../config/task-graph';
import { ProjectGraph } from '../config/project-graph';
export interface Batch {
    executorName: string;
    taskGraph: TaskGraph;
}
export declare class TasksSchedule {
    private readonly hasher;
    private readonly projectGraph;
    private readonly taskGraph;
    private readonly workspaces;
    private readonly options;
    private notScheduledTaskGraph;
    private reverseTaskDeps;
    private scheduledBatches;
    private scheduledTasks;
    private completedTasks;
    constructor(hasher: Hasher, projectGraph: ProjectGraph, taskGraph: TaskGraph, workspaces: Workspaces, options: DefaultTasksRunnerOptions);
    scheduleNextTasks(): Promise<void>;
    hasTasks(): boolean;
    complete(taskIds: string[]): void;
    nextTask(): Task;
    nextBatch(): Batch;
    private scheduleTask;
    private scheduleBatches;
    private scheduleBatch;
    private processTaskForBatches;
    private canBeScheduled;
    private hashTask;
}

import { Hasher } from '../hasher/hasher';
import { DefaultTasksRunnerOptions } from './default-tasks-runner';
import { TaskStatus } from './tasks-runner';
import { ProjectGraph } from '../config/project-graph';
import { TaskGraph } from '../config/task-graph';
export declare class TaskOrchestrator {
    private readonly hasher;
    private readonly initiatingProject;
    private readonly projectGraph;
    private readonly taskGraph;
    private readonly options;
    private cache;
    private workspace;
    private forkedProcessTaskRunner;
    private tasksSchedule;
    private reverseTaskDeps;
    private completedTasks;
    private waitingForTasks;
    private groups;
    constructor(hasher: Hasher, initiatingProject: string | undefined, projectGraph: ProjectGraph, taskGraph: TaskGraph, options: DefaultTasksRunnerOptions);
    run(): Promise<{
        [id: string]: TaskStatus;
    }>;
    private executeNextBatchOfTasksUsingTaskSchedule;
    private applyCachedResults;
    private applyCachedResult;
    private applyFromCacheOrRunBatch;
    private runBatch;
    private applyFromCacheOrRunTask;
    private runTaskInForkedProcess;
    private preRunSteps;
    private postRunSteps;
    private complete;
    private pipeOutputCapture;
    private shouldCacheTaskResult;
    private closeGroup;
    private openGroup;
}

import { Workspaces } from '../config/workspaces';
import { Task, TaskGraph } from '../config/task-graph';
import { ProjectGraph, ProjectGraphProjectNode } from '../config/project-graph';
import { TargetDependencyConfig } from '../config/workspace-json-project-json';
export declare function getCommandAsString(task: Task): string;
export declare function getDependencyConfigs({ project, target }: {
    project: string;
    target: string;
}, defaultDependencyConfigs: Record<string, (TargetDependencyConfig | string)[]>, projectGraph: ProjectGraph): TargetDependencyConfig[] | undefined;
export declare function getOutputs(p: Record<string, ProjectGraphProjectNode>, task: Task): any;
/**
 * Returns the list of outputs that will be cached.
 * @param task target + overrides
 * @param node ProjectGraphProjectNode object that the task runs against
 */
export declare function getOutputsForTargetAndConfiguration(task: Pick<Task, 'target' | 'overrides'>, node: ProjectGraphProjectNode): any;
export declare function unparse(options: Object): string[];
export declare function getExecutorNameForTask(task: Task, workspace: Workspaces): string;
export declare function getExecutorForTask(task: Task, workspace: Workspaces): import("../config/misc-interfaces").ExecutorConfig;
export declare function getCustomHasher(task: Task, workspace: Workspaces): import("../config/misc-interfaces").CustomHasher;
export declare function removeTasksFromTaskGraph(graph: TaskGraph, ids: string[]): TaskGraph;
export declare function calculateReverseDeps(taskGraph: TaskGraph): Record<string, string[]>;
export declare function getCliPath(): string;
export declare function getPrintableCommandArgsForTask(task: Task): string[];
export declare function getSerializedArgsForTask(task: Task, isVerbose: boolean): string[];
export declare function shouldStreamOutput(task: Task, initiatingProject: string | null, options: {
    cacheableOperations?: string[] | null;
    cacheableTargets?: string[] | null;
}): boolean;
export declare function isCacheableTask(task: Task, options: {
    cacheableOperations?: string[] | null;
    cacheableTargets?: string[] | null;
}): boolean;

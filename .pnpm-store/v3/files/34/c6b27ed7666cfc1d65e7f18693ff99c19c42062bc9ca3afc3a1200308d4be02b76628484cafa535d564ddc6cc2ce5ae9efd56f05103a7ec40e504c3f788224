import { TasksRunner } from './tasks-runner';
import { NxArgs } from '../utils/command-line-utils';
import { ProjectGraph, ProjectGraphProjectNode } from '../config/project-graph';
import { NxJsonConfiguration } from '../config/nx-json';
import { Task } from '../config/task-graph';
import { TargetDependencyConfig } from '../config/workspace-json-project-json';
export declare function runCommand(projectsToRun: ProjectGraphProjectNode[], projectGraph: ProjectGraph, { nxJson }: {
    nxJson: NxJsonConfiguration;
}, nxArgs: NxArgs, overrides: any, initiatingProject: string | null): Promise<void>;
interface TaskParams {
    project: ProjectGraphProjectNode;
    target: string;
    configuration: string;
    overrides: Object;
    errorIfCannotFindConfiguration: boolean;
}
export declare function createTasksForProjectToRun(projectsToRun: ProjectGraphProjectNode[], params: Omit<TaskParams, 'project' | 'errorIfCannotFindConfiguration'>, projectGraph: ProjectGraph, initiatingProject: string | null, defaultDependencyConfigs?: Record<string, (TargetDependencyConfig | string)[]>): Task[];
export declare function createTask({ project, target, configuration, overrides, errorIfCannotFindConfiguration, }: TaskParams): Task;
export declare function getRunner(nxArgs: NxArgs, nxJson: NxJsonConfiguration): {
    tasksRunner: TasksRunner;
    runnerOptions: any;
};
export {};

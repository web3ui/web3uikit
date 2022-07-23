import { DefaultTasksRunnerOptions } from './default-tasks-runner';
import type { Observable } from 'rxjs';
import { ProjectGraph } from '../config/project-graph';
import { NxJsonConfiguration } from '../config/nx-json';
import { Task } from '../config/task-graph';
export { DefaultTasksRunnerOptions, RemoteCache } from './default-tasks-runner';
/**
 * This tasks runner converts the new implementation of the default tasks runner
 * to the old Observable-based API.
 *
 * It is going to be removed after Nx 15 is released.
 */
export declare const tasksRunnerV2: (tasks: Task[], options: DefaultTasksRunnerOptions, context: {
    target: string;
    initiatingProject?: string;
    projectGraph: ProjectGraph;
    nxJson: NxJsonConfiguration;
}) => Observable<any>;
export default tasksRunnerV2;

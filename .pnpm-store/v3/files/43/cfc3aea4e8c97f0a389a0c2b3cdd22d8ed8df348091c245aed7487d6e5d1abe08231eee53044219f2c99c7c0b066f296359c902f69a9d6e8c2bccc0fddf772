import { HashingImpl } from './hashing-impl';
import { ProjectGraph } from '../config/project-graph';
import { NxJsonConfiguration } from '../config/nx-json';
import { Task } from '../config/task-graph';
/**
 * A data structure returned by the default hasher.
 */
export interface Hash {
    value: string;
    details: {
        command: string;
        nodes: {
            [name: string]: string;
        };
        implicitDeps: {
            [fileName: string]: string;
        };
        runtime: {
            [input: string]: string;
        };
    };
}
interface ImplicitHashResult {
    value: string;
    files: {
        [fileName: string]: string;
    };
}
interface RuntimeHashResult {
    value: string;
    runtime: {
        [input: string]: string;
    };
}
/**
 * The default hasher used by executors.
 */
export declare class Hasher {
    private readonly projectGraph;
    private readonly nxJson;
    private readonly options;
    static version: string;
    private implicitDependencies;
    private runtimeInputs;
    private projectHashes;
    private hashing;
    constructor(projectGraph: ProjectGraph, nxJson: NxJsonConfiguration, options: any, hashing?: HashingImpl);
    hashTaskWithDepsAndContext(task: Task, filter?: 'all-files' | 'exclude-tests-of-all' | 'exclude-tests-of-deps'): Promise<Hash>;
    hashCommand(task: Task): string;
    hashContext(): Promise<{
        implicitDeps: ImplicitHashResult;
        runtime: RuntimeHashResult;
    }>;
    hashSource(task: Task): Promise<string>;
    hashArray(values: string[]): string;
    hashFile(path: string): string;
    private runtimeInputsHash;
    private implicitDepsHash;
    private hashNxJson;
}
export {};

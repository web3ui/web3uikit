import 'dotenv/config';
import { JestExecutorOptions } from './schema';
import { Config } from '@jest/types';
import { ExecutorContext, TaskGraph } from '@nrwl/devkit';
export declare function jestExecutor(options: JestExecutorOptions, context: ExecutorContext): Promise<{
    success: boolean;
}>;
export declare function jestConfigParser(options: JestExecutorOptions, context: ExecutorContext, multiProjects?: boolean): Promise<Config.Argv>;
export default jestExecutor;
export declare function batchJest(taskGraph: TaskGraph, inputs: Record<string, JestExecutorOptions>, overrides: JestExecutorOptions, context: ExecutorContext): Promise<Record<string, {
    success: boolean;
    terminalOutput: string;
}>>;

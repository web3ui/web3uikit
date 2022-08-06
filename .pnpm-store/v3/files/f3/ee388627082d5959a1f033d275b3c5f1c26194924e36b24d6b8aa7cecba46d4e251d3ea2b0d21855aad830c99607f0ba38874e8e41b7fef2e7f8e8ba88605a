import { ExecutorContext } from '@nrwl/devkit';
import { NormalizedSwcExecutorOptions } from '../schema';
export declare function compileSwc(context: ExecutorContext, normalizedOptions: NormalizedSwcExecutorOptions, postCompilationCallback: () => Promise<void>): Promise<{
    success: boolean;
}>;
export declare function compileSwcWatch(context: ExecutorContext, normalizedOptions: NormalizedSwcExecutorOptions, postCompilationCallback: () => Promise<void>): AsyncGenerator<{
    success: boolean;
    outfile: string;
}, any, undefined>;

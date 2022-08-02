import { Options as SwcOptions, ReactConfig, Config, JscTarget } from '@swc/core';
export interface Options {
    target?: JscTarget;
    module?: 'commonjs' | 'umd' | 'amd' | 'es6';
    sourcemap?: Config['sourceMaps'];
    jsx?: boolean;
    experimentalDecorators?: boolean;
    emitDecoratorMetadata?: boolean;
    dynamicImport?: boolean;
    esModuleInterop?: boolean;
    keepClassNames?: boolean;
    react?: Partial<ReactConfig>;
    paths?: {
        [from: string]: [string];
    };
    swc?: SwcOptions;
}
export declare function transformSync(source: string, path: string, options?: Options): import("@swc/core").Output;
export declare function transformJest(source: string, path: string, options?: Options): import("@swc/core").Output;
export declare function transform(source: string, path: string, options?: Options): Promise<import("@swc/core").Output>;

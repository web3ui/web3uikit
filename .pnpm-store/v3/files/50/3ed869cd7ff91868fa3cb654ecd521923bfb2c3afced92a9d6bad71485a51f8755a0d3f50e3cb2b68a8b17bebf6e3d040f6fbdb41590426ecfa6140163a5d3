import { Options, Schema } from '../utils/params';
export interface GenerateOptions {
    collectionName: string;
    generatorName: string;
    generatorOptions: Options;
    help: boolean;
    dryRun: boolean;
    interactive: boolean;
    defaults: boolean;
}
export declare function printGenHelp(opts: GenerateOptions, schema: Schema, normalizedGeneratorName: string, aliases: string[]): void;
export declare function newWorkspace(cwd: string, args: {
    [k: string]: any;
}): Promise<any>;
export declare function generate(cwd: string, args: {
    [k: string]: any;
}): Promise<any>;

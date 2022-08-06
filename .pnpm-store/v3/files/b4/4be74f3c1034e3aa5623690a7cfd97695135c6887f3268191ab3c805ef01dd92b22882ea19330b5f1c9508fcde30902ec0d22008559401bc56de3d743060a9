import * as yargs from 'yargs';
import { NxAffectedConfig } from '../config/nx-json';
export declare function names(name: string): {
    name: string;
    className: string;
    propertyName: string;
    constantName: string;
    fileName: string;
};
export interface RawNxArgs extends NxArgs {
    prod?: boolean;
}
export interface NxArgs {
    target?: string;
    configuration?: string;
    runner?: string;
    parallel?: number;
    untracked?: boolean;
    uncommitted?: boolean;
    all?: boolean;
    base?: string;
    head?: string;
    exclude?: string[];
    files?: string[];
    onlyFailed?: boolean;
    'only-failed'?: boolean;
    verbose?: boolean;
    help?: boolean;
    version?: boolean;
    plain?: boolean;
    withDeps?: boolean;
    'with-deps'?: boolean;
    projects?: string[];
    select?: string;
    skipNxCache?: boolean;
    'skip-nx-cache'?: boolean;
    'output-style'?: string;
    outputStyle?: string;
    scan?: boolean;
}
export declare function splitArgsIntoNxArgsAndOverrides(args: yargs.Arguments, mode: 'run-one' | 'run-many' | 'affected' | 'print-affected', options?: {
    printWarnings: boolean;
}): {
    nxArgs: NxArgs;
    overrides: yargs.Arguments;
};
export declare function getAffectedConfig(): NxAffectedConfig;
export declare function parseFiles(options: NxArgs): {
    files: string[];
};
export declare function getProjectRoots(projectNames: string[]): string[];

import * as yargs from 'yargs';
import { NxJsonConfiguration } from '../config/nx-json';
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
    verbose?: boolean;
    help?: boolean;
    version?: boolean;
    plain?: boolean;
    withDeps?: boolean;
    projects?: string[];
    select?: string;
    skipNxCache?: boolean;
    outputStyle?: string;
    scan?: boolean;
    nxBail?: boolean;
    nxIgnoreCycles?: boolean;
    type?: string;
}
export declare function splitArgsIntoNxArgsAndOverrides(args: {
    [k: string]: any;
}, mode: 'run-one' | 'run-many' | 'affected' | 'print-affected', options: {
    printWarnings: boolean;
}, nxJson: NxJsonConfiguration): {
    nxArgs: NxArgs;
    overrides: yargs.Arguments;
};
export declare function parseFiles(options: NxArgs): {
    files: string[];
};
export declare function getProjectRoots(projectNames: string[]): string[];

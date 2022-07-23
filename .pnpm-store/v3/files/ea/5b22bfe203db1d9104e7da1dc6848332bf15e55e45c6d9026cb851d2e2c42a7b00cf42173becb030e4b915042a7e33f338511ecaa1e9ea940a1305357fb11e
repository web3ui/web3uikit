import { Observable } from 'rxjs';
export declare type Version = {
    type: 'project';
    version: string | null;
} | {
    type: 'dependency';
    version: string | null;
    dependencyName: string;
};
export declare type StandardVersionPreset = 'angular' | 'conventionalcommits';
export interface CommonVersionOptions {
    tag: string;
    dryRun: boolean;
    trackDeps: boolean;
    newVersion: string;
    noVerify: boolean;
    workspaceRoot: string;
    tagPrefix: string;
    changelogHeader: string;
    commitMessage: string;
    projectName: string;
    skipProjectChangelog: boolean;
    dependencyUpdates: Version[];
    preset: StandardVersionPreset;
}
export declare function versionWorkspace({ skipRootChangelog, commitMessage, newVersion, dryRun, noVerify, projectName, tag, ...options }: {
    skipRootChangelog: boolean;
} & CommonVersionOptions): Observable<string>;
export declare function versionProject({ workspaceRoot, projectRoot, newVersion, dryRun, commitMessage, noVerify, tagPrefix, projectName, tag, ...options }: {
    projectRoot: string;
} & CommonVersionOptions): Observable<string>;
/**
 * istanbul ignore next
 */
export declare function _generateChangelogs({ projectRoots, workspaceRoot, skipRootChangelog, skipProjectChangelog, projectName, ...options }: CommonVersionOptions & {
    skipRootChangelog: boolean;
    projectRoots: string[];
}): Observable<string[]>;

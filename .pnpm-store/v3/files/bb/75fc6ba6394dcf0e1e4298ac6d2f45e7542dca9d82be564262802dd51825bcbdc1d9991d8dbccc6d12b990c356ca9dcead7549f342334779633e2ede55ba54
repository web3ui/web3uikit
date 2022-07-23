import { type Observable, type OperatorFunction } from 'rxjs';
import type { Version } from '../version';
export declare const defaultHeader = "# Changelog\n\nThis file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).\n";
export declare function getChangelogPath(projectRoot: string): string;
export declare function updateChangelog({ projectRoot, dryRun, preset, newVersion, changelogHeader, tagPrefix, }: {
    projectRoot: string;
    dryRun: boolean;
    preset: string;
    newVersion: string;
    tagPrefix: string;
    changelogHeader?: string;
}): Observable<string>;
export declare function insertChangelogDependencyUpdates({ changelogPath, version, dryRun, dependencyUpdates, }: {
    changelogPath: string;
    version: string;
    dryRun: boolean;
    dependencyUpdates: Version[];
}): Observable<string>;
export declare function calculateChangelogChanges<T>({ changelogPath, changelogHeader, }: {
    changelogPath: string;
    changelogHeader: string;
}): OperatorFunction<T, string>;
export declare function _calculateDependencyUpdates({ changelog, version, dependencyUpdates, }: {
    changelog: string;
    version: string;
    dependencyUpdates: Version[];
}): string;

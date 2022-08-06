import { type Observable } from 'rxjs';
export declare function readPackageJson(projectRoot: string): Observable<{
    version?: string;
}>;
export declare function getPackageJsonPath(projectRoot: string): string;
/**
 * Safely update package.json file.
 */
export declare function updatePackageJson({ newVersion, projectRoot, projectName, dryRun, }: {
    newVersion: string;
    projectRoot: string;
    projectName: string;
    dryRun: boolean;
}): Observable<string | null>;

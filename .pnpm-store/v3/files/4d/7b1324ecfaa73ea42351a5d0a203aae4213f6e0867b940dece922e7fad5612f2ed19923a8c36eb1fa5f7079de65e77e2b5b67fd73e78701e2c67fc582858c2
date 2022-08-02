import type { NxArgs } from '../utils/command-line-utils';
import { FileData } from '../config/project-graph';
import { NxJsonConfiguration } from '../config/nx-json';
import { WorkspaceJsonConfiguration } from '../config/workspace-json-project-json';
export interface Change {
    type: string;
}
export interface FileChange<T extends Change = Change> extends FileData {
    getChanges: () => T[];
}
export declare class WholeFileChange implements Change {
    type: string;
}
export declare function isWholeFileChange(change: Change): change is WholeFileChange;
export declare function readFileIfExisting(path: string): string;
export declare function calculateFileChanges(files: string[], allWorkspaceFiles: FileData[], nxArgs?: NxArgs, readFileAtRevision?: (f: string, r: void | string) => string, ignore?: import("ignore").Ignore): FileChange[];
export declare const TEN_MEGABYTES: number;
export declare function readWorkspaceJson(): WorkspaceJsonConfiguration;
export declare function readWorkspaceConfig(opts: {
    format: 'angularCli' | 'nx';
    path?: string;
}): any;
export declare function workspaceFileName(): "workspace.json" | "angular.json";
export declare function defaultFileRead(filePath: string): string | null;
export declare function readPackageJson(): any;
/**
 * Returns the contents of nx.json.
 *
 * If nx.json extends another config file, it will be inlined here.
 */
export declare function readNxJson(path?: string): NxJsonConfiguration;
/**
 * Returns information about where apps and libs will be created.
 */
export declare function workspaceLayout(): {
    appsDir: string;
    libsDir: string;
};
export { FileData };

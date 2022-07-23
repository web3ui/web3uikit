import { Ignore } from 'ignore';
import type { NxJsonConfiguration } from './nx-json';
import { ProjectConfiguration, WorkspaceJsonConfiguration } from './workspace-json-project-json';
import { ExecutorConfig, Generator } from './misc-interfaces';
export declare function workspaceConfigName(root: string): "workspace.json" | "angular.json";
export declare class Workspaces {
    private root;
    private cachedWorkspaceConfig;
    constructor(root: string);
    relativeCwd(cwd: string): string;
    calculateDefaultProjectName(cwd: string, wc: WorkspaceJsonConfiguration & NxJsonConfiguration): string;
    readWorkspaceConfiguration(opts?: {
        _ignorePluginInference?: boolean;
    }): WorkspaceJsonConfiguration & NxJsonConfiguration;
    isNxExecutor(nodeModule: string, executor: string): boolean;
    isNxGenerator(collectionName: string, generatorName: string): boolean;
    readExecutor(nodeModule: string, executor: string): ExecutorConfig;
    readGenerator(collectionName: string, generatorName: string): {
        normalizedGeneratorName: string;
        schema: any;
        implementationFactory: () => Generator<unknown>;
        aliases: string[];
    };
    private getImplementationFactory;
    private readExecutorsJson;
    private readGeneratorsJson;
    private resolvePaths;
    private readFromWorkspaceJson;
}
export declare function reformattedWorkspaceJsonOrNull(w: any): any;
export declare function toNewFormat(w: any): WorkspaceJsonConfiguration;
export declare function toNewFormatOrNull(w: any): any;
export declare function toOldFormatOrNull(w: any): any;
export declare function resolveOldFormatWithInlineProjects(w: any, root?: string): any;
export declare function resolveNewFormatWithInlineProjects(w: any, root?: string): WorkspaceJsonConfiguration;
/**
 * Pulled from toFileName in names from @nrwl/devkit.
 * Todo: Should refactor, not duplicate.
 */
export declare function toProjectName(fileName: string, nxJson: NxJsonConfiguration): string;
export declare function globForProjectFiles(root: any, nxJson?: NxJsonConfiguration, ignorePluginInference?: boolean): string[];
export declare function deduplicateProjectFiles(files: string[], ig?: Ignore): string[];
export declare function inferProjectFromNonStandardFile(file: string, nxJson: NxJsonConfiguration): ProjectConfiguration & {
    name: string;
};
export declare function buildWorkspaceConfigurationFromGlobs(nxJson: NxJsonConfiguration, projectFiles: string[], // making this parameter allows devkit to pick up newly created projects
readJson?: (string: any) => any): WorkspaceJsonConfiguration;
export declare function renamePropertyWithStableKeys(obj: any, from: string, to: string): void;

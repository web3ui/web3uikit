import { Tree, Rule } from '@angular-devkit/schematics';
import { JsonArray, JsonObject, workspaces } from '@angular-devkit/core';
import { ProjectDefinition, TargetDefinition } from '@angular-devkit/core/src/workspace';
export declare function getWorkspace(tree: Tree, path?: string): Promise<workspaces.WorkspaceDefinition>;
export declare function updateWorkspace(updater: (workspace: workspaces.WorkspaceDefinition) => void | PromiseLike<void>): Rule;
export declare function updateWorkspace(workspace: workspaces.WorkspaceDefinition): Rule;
/**
 * Updates builder options for options and configurations for given builder names
 */
export declare function updateBuilderConfig(updater: (currentValue: Record<string, string | number | boolean | JsonArray | JsonObject>, target?: TargetDefinition, project?: ProjectDefinition) => Record<string, string | number | boolean | JsonArray | JsonObject>, ...builderNames: string[]): Rule;

import { ProjectGraph, ProjectGraphProjectNode } from '../config/project-graph';
import { TargetConfiguration } from '../config/workspace-json-project-json';
export declare function projectHasTarget(project: ProjectGraphProjectNode, target: string): boolean;
export declare function projectHasTargetAndConfiguration(project: ProjectGraphProjectNode, target: string, configuration: string): any;
export declare function mergeNpmScriptsWithTargets(projectRoot: string, targets: any): Record<string, TargetConfiguration>;
export declare function getSourceDirOfDependentProjects(projectName: string, projectGraph?: ProjectGraph<any>): string[];
/**
 * Finds the project node name by a file that lives within it's src root
 * @param projRelativeDirPath directory path relative to the workspace root
 * @param projectGraph
 */
export declare function getProjectNameFromDirPath(projRelativeDirPath: string, projectGraph?: ProjectGraph<any>): any;

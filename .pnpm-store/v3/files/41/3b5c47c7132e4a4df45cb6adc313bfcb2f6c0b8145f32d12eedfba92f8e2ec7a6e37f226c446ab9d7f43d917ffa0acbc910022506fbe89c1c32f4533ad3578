import { FileData } from './file-utils';
import { ProjectGraphCache } from './nx-deps-cache';
import { ProjectFileMap, ProjectGraph } from '../config/project-graph';
import { WorkspaceJsonConfiguration } from '../config/workspace-json-project-json';
export declare function buildProjectGraph(): Promise<ProjectGraph<any>>;
export declare function buildProjectGraphUsingProjectFileMap(workspaceJson: WorkspaceJsonConfiguration, projectFileMap: ProjectFileMap, allWorkspaceFiles: FileData[], cache: ProjectGraphCache | null, shouldWriteCache: boolean): Promise<{
    projectGraph: ProjectGraph;
    projectGraphCache: ProjectGraphCache;
}>;

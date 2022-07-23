import type { ProjectGraph, ProjectGraphProjectNode } from '@nrwl/devkit';
export declare function getPath(graph: ProjectGraph, sourceProjectName: string, targetProjectName: string): Array<ProjectGraphProjectNode>;
export declare function pathExists(graph: ProjectGraph, sourceProjectName: string, targetProjectName: string): boolean;
export declare function checkCircularPath(graph: ProjectGraph, sourceProject: ProjectGraphProjectNode, targetProject: ProjectGraphProjectNode): ProjectGraphProjectNode[];
export declare function findFilesInCircularPath(circularPath: ProjectGraphProjectNode[]): Array<string[]>;

import type { ProjectGraph, ProjectGraphProjectNode } from '@nrwl/devkit';
import { ProjectGraphExternalNode } from '@nrwl/devkit';
export declare type DependentBuildableProjectNode = {
    name: string;
    outputs: string[];
    node: ProjectGraphProjectNode | ProjectGraphExternalNode;
};
export declare function calculateProjectDependencies(projGraph: ProjectGraph, root: string, projectName: string, targetName: string, configurationName: string, shallow?: boolean): {
    target: ProjectGraphProjectNode;
    dependencies: DependentBuildableProjectNode[];
    nonBuildableDependencies: string[];
    topLevelDependencies: DependentBuildableProjectNode[];
};
export declare function computeCompilerOptionsPaths(tsConfig: string, dependencies: DependentBuildableProjectNode[]): any;
export declare function createTmpTsConfig(tsconfigPath: string, workspaceRoot: string, projectRoot: string, dependencies: DependentBuildableProjectNode[]): string;
export declare function checkDependentProjectsHaveBeenBuilt(root: string, projectName: string, targetName: string, projectDependencies: DependentBuildableProjectNode[]): boolean;
export declare function findMissingBuildDependencies(root: string, projectName: string, targetName: string, projectDependencies: DependentBuildableProjectNode[]): DependentBuildableProjectNode[];
export declare function updatePaths(dependencies: DependentBuildableProjectNode[], paths: Record<string, string[]>): void;
/**
 * Updates the peerDependencies section in the `dist/lib/xyz/package.json` with
 * the proper dependency and version
 */
export declare function updateBuildableProjectPackageJsonDependencies(root: string, projectName: string, targetName: string, configurationName: string, node: ProjectGraphProjectNode, dependencies: DependentBuildableProjectNode[], typeOfDependency?: 'dependencies' | 'peerDependencies'): void;

import { ProjectGraph, ProjectGraphDependency, ProjectGraphProjectNode, ProjectGraphExternalNode, FileData } from '@nrwl/devkit';
import { TargetProjectLocator } from 'nx/src/utils/target-project-locator';
export declare type MappedProjectGraphNode<T = any> = ProjectGraphProjectNode<T> & {
    data: {
        files: Record<string, FileData>;
    };
};
export declare type MappedProjectGraph<T = any> = ProjectGraph<T> & {
    nodes: Record<string, MappedProjectGraphNode<T>>;
};
export declare type Deps = {
    [projectName: string]: ProjectGraphDependency[];
};
export declare type DepConstraint = {
    sourceTag: string;
    onlyDependOnLibsWithTags: string[];
    notDependOnLibsWithTags: string[];
    bannedExternalImports?: string[];
};
export declare function stringifyTags(tags: string[]): string;
export declare function hasNoneOfTheseTags(proj: ProjectGraphProjectNode, tags: string[]): boolean;
/**
 * Check if any of the given tags is included in the project
 * @param proj ProjectGraphProjectNode
 * @param tags
 * @returns
 */
export declare function findDependenciesWithTags(targetProject: ProjectGraphProjectNode, tags: string[], graph: ProjectGraph): ProjectGraphProjectNode[][];
export declare function removeExt(file: string): string;
export declare function matchImportWithWildcard(allowableImport: string, extractedImport: string): boolean;
export declare function isRelative(s: string): boolean;
export declare function getTargetProjectBasedOnRelativeImport(imp: string, projectPath: string, projectGraph: MappedProjectGraph, sourceFilePath: string): MappedProjectGraphNode<any> | undefined;
export declare function findProjectUsingFile<T>(projectGraph: MappedProjectGraph<T>, file: string): MappedProjectGraphNode;
export declare function findSourceProject(projectGraph: MappedProjectGraph, sourceFilePath: string): MappedProjectGraphNode<any>;
export declare function findTargetProject(projectGraph: MappedProjectGraph, targetFile: string): MappedProjectGraphNode<any>;
export declare function isAbsoluteImportIntoAnotherProject(imp: string, workspaceLayout?: {
    libsDir: string;
    appsDir: string;
}): boolean;
export declare function findProjectUsingImport(projectGraph: MappedProjectGraph, targetProjectLocator: TargetProjectLocator, filePath: string, imp: string): MappedProjectGraphNode | ProjectGraphExternalNode;
export declare function findConstraintsFor(depConstraints: DepConstraint[], sourceProject: ProjectGraphProjectNode): DepConstraint[];
export declare function onlyLoadChildren(graph: ProjectGraph, sourceProjectName: string, targetProjectName: string, visited: string[]): any;
export declare function getSourceFilePath(sourceFileName: string, projectPath: string): string;
export declare function hasBannedImport(source: ProjectGraphProjectNode, target: ProjectGraphProjectNode | ProjectGraphExternalNode, depConstraints: DepConstraint[]): DepConstraint | null;
export declare function isDirectDependency(target: ProjectGraphExternalNode): boolean;
/**
 * Verifies whether the given node has an architect builder attached
 * @param projectGraph the node to verify
 */
export declare function hasBuildExecutor(projectGraph: ProjectGraphProjectNode): boolean;
export declare function mapProjectGraphFiles<T>(projectGraph: ProjectGraph<T>): MappedProjectGraph | null;
export declare function isTerminalRun(): boolean;
/**
 * Takes an array of imports and tries to group them, so rather than having
 * `import { A } from './some-location'` and `import { B } from './some-location'` you get
 * `import { A, B } from './some-location'`
 * @param importsToRemap
 * @returns
 */
export declare function groupImports(importsToRemap: {
    member: string;
    importPath: string;
}[]): string;
/**
 * Checks if import points to a secondary entry point in Angular project
 * @param targetProjectLocator
 * @param importExpr
 * @returns
 */
export declare function isAngularSecondaryEntrypoint(targetProjectLocator: TargetProjectLocator, importExpr: string): boolean;

import type { ExecutorContext } from '@nrwl/devkit';
import type { VersionBuilderSchema } from '../schema';
export interface DependencyRoot {
    name: string;
    path: string;
}
export declare function getDependencyRoots({ trackDeps, releaseAs, projectName, context, }: Required<Pick<VersionBuilderSchema, 'trackDeps'>> & Pick<VersionBuilderSchema, 'releaseAs'> & {
    projectName: string;
    context: ExecutorContext;
}): Promise<DependencyRoot[]>;
/**
 * Returns a list of in-repo dependencies based on NX's dependency graph.
 */
export declare function getProjectDependencies(projectName: string): Promise<string[]>;

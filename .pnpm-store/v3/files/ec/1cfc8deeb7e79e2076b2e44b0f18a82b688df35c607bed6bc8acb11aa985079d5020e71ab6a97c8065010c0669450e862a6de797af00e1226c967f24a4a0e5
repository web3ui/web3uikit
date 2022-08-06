import type { ExecutorContext, TargetConfiguration } from '@nrwl/devkit';
export interface TestingWorkspace {
    tearDown(): Promise<void>;
    root: string;
}
export declare function setupTestingWorkspace(files: Map<string, string>): TestingWorkspace;
export declare function createFakeContext({ cwd, project, projectRoot, workspaceRoot, additionalProjects, }: {
    cwd?: string;
    project: string;
    projectRoot: string;
    workspaceRoot: string;
    additionalProjects?: {
        project: string;
        projectRoot: string;
        targets?: Record<string, TargetConfiguration>;
    }[];
}): ExecutorContext;

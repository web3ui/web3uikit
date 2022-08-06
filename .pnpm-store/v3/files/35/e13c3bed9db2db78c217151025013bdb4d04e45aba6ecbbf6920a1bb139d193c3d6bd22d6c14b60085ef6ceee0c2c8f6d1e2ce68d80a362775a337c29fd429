import { ProjectGraphDependency, ProjectGraphProjectNode } from '../config/project-graph';
export interface DepGraphClientResponse {
    hash: string;
    projects: ProjectGraphProjectNode[];
    dependencies: Record<string, ProjectGraphDependency[]>;
    layout: {
        appsDir: string;
        libsDir: string;
    };
    affected: string[];
    focus: string;
    groupByFolder: boolean;
    exclude: string[];
}
export declare function generateGraph(args: {
    file?: string;
    host?: string;
    port?: number;
    focus?: string;
    exclude?: string[];
    groupByFolder?: boolean;
    watch?: boolean;
    open?: boolean;
}, affectedProjects: string[]): Promise<void>;

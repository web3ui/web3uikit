import type { ExploreOptions, ExploreBundleResult, FileDataMap } from './types';
export declare function generateHtml(exploreResults: ExploreBundleResult[], options: ExploreOptions): string;
export declare function makeMergedTreeDataMap(treeData: WebTreeData[]): WebTreeData;
interface WebTreeMapNode {
    name: string;
    data: {
        $area: number;
        coveredSize?: number;
        backgroundColor?: string;
    };
    children?: WebTreeMapNode[];
}
export interface WebTreeData {
    name: string;
    data: WebTreeMapNode;
}
export declare function getWebTreeMapData(files: FileDataMap): WebTreeMapNode;
export {};

import { Change } from '../project-graph/file-utils';
export declare enum DiffType {
    Deleted = "JsonPropertyDeleted",
    Added = "JsonPropertyAdded",
    Modified = "JsonPropertyModified"
}
export interface JsonChange extends Change {
    type: DiffType;
    path: string[];
    value: {
        lhs: any;
        rhs: any;
    };
}
export declare function isJsonChange(change: Change): change is JsonChange;
export declare function jsonDiff(lhs: any, rhs: any): JsonChange[];
export declare function walkJsonTree(json: any, currPath: string[], visitor: (path: string[], value: any) => boolean): void;

import type { NodePath } from 'ast-types/lib/node-path';
declare type Visitor = (path: NodePath) => unknown;
/**
 * A helper function that doesn't traverse into nested blocks / statements by
 * default.
 */
export declare function traverseShallow(path: NodePath, visitors: {
    [key: string]: Visitor;
}): void;
export {};

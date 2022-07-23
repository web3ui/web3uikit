import { type Tree } from '@nrwl/devkit';
import type { SchemaOptions } from '../schema';
export interface PackageJson {
    scripts: PackageJsonPart<string>;
    devDependencies: PackageJsonPart<string>;
    commitlint: PackageJsonPart<string[]>;
}
export interface PackageJsonPart<T> {
    [key: string]: T;
}
export declare function addDependencies(tree: Tree, options: SchemaOptions): void;

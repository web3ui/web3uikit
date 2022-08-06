import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
export interface PackageMoveOptions {
    toDeps?: string | string[];
    toDevDeps?: string | string[];
}
/**
 * Move packages to deps or devDeps adjusting the package.json appropriately.
 *
 * @param packageMoveOptions The PackageMoveOptions provided to the schematic
 */
export declare function moveNpmPackages(packageMoveOptions: PackageMoveOptions): (tree: Tree, context: SchematicContext) => Rule;

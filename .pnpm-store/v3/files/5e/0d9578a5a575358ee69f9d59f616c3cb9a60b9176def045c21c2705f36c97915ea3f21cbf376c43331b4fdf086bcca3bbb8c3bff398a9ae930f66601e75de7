import { Rule, Tree, SchematicContext } from '@angular-devkit/schematics';
export interface PackageRenameMapping {
    [packageName: string]: string | [newPackageName: string, version: string];
}
/**
 * Updates all the imports in the workspace, and adjust the package.json appropriately.
 *
 * @param packageNameMapping The packageNameMapping provided to the schematic
 */
export declare function renameNpmPackages(packageRenameMapping: PackageRenameMapping): (tree: Tree, context: SchematicContext) => Rule;

import type { Tree } from 'nx/src/generators/tree';
import { GeneratorCallback } from 'nx/src/config/misc-interfaces';
/**
 * Add Dependencies and Dev Dependencies to package.json
 *
 * For example:
 * ```typescript
 * addDependenciesToPackageJson(tree, { react: 'latest' }, { jest: 'latest' })
 * ```
 * This will **add** `react` and `jest` to the dependencies and devDependencies sections of package.json respectively.
 *
 * @param tree Tree representing file system to modify
 * @param dependencies Dependencies to be added to the dependencies section of package.json
 * @param devDependencies Dependencies to be added to the devDependencies section of package.json
 * @param packageJsonPath Path to package.json
 * @returns Callback to install dependencies only if necessary. undefined is returned if changes are not necessary.
 */
export declare function addDependenciesToPackageJson(tree: Tree, dependencies: Record<string, string>, devDependencies: Record<string, string>, packageJsonPath?: string): GeneratorCallback;
/**
 * Remove Dependencies and Dev Dependencies from package.json
 *
 * For example:
 * ```typescript
 * removeDependenciesFromPackageJson(tree, ['react'], ['jest'])
 * ```
 * This will **remove** `react` and `jest` from the dependencies and devDependencies sections of package.json respectively.
 *
 * @param dependencies Dependencies to be removed from the dependencies section of package.json
 * @param devDependencies Dependencies to be removed from the devDependencies section of package.json
 * @returns Callback to uninstall dependencies only if necessary. undefined is returned if changes are not necessary.
 */
export declare function removeDependenciesFromPackageJson(tree: Tree, dependencies: string[], devDependencies: string[], packageJsonPath?: string): GeneratorCallback;

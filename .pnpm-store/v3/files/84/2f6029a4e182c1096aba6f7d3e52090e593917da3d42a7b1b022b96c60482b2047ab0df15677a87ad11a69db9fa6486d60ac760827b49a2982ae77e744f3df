import { Tree } from '@nrwl/devkit';
import type * as ts from 'typescript';
export { compileTypeScript } from './typescript/compilation';
export type { TypeScriptCompilationOptions } from './typescript/compilation';
export { findNodes } from './typescript/find-nodes';
export { getSourceNodes } from './typescript/get-source-nodes';
export declare function readTsConfig(tsConfigPath: string): ts.ParsedCommandLine;
/**
 * Find a module based on it's import
 *
 * @param importExpr Import used to resolve to a module
 * @param filePath
 * @param tsConfigPath
 */
export declare function resolveModuleByImport(importExpr: string, filePath: string, tsConfigPath: string): string;
export declare function getRootTsConfigPathInTree(tree: Tree): string | null;
export declare function getRelativePathToRootTsConfig(tree: Tree, targetPath: string): string;
export declare function getRootTsConfigFileName(): string | null;
export declare function getRootTsConfigPath(): string | null;

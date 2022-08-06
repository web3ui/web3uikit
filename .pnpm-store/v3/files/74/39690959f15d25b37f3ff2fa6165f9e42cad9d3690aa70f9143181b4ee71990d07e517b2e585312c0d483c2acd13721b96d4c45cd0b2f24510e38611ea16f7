import type { Options } from '@swc-node/core';
import * as ts from 'typescript';
export declare function readDefaultTsConfig(tsConfigPath?: string): Partial<ts.CompilerOptions & {
    fallbackToTs: (path: string) => boolean;
}>;
export declare function createSourcemapOption(options: ts.CompilerOptions): boolean | "inline";
export declare function tsCompilerOptionsToSwcConfig(options: ts.CompilerOptions, filename: string): Options;

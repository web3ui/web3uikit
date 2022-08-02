import * as ts from 'typescript';
import type { CustomTransformers, Diagnostic, Program } from 'typescript';
export interface TypeScriptCompilationOptions {
    outputPath: string;
    projectName: string;
    projectRoot: string;
    tsConfig: string;
    deleteOutputPath?: boolean;
    rootDir?: string;
    watch?: boolean;
    getCustomTransformers?(program: Program): CustomTransformers;
}
export interface TypescriptWatchChangeEvent {
    diagnostic: ts.Diagnostic;
    newLine: string;
    options: ts.CompilerOptions;
    errorCount: number;
}
export declare function compileTypeScript(options: TypeScriptCompilationOptions): {
    success: boolean;
};
export declare function compileTypeScriptWatcher(options: TypeScriptCompilationOptions, callback: (diagnostic: Diagnostic, newLine: string, options: ts.CompilerOptions, errorCount: number) => void | Promise<void>): ts.WatchOfFilesAndCompilerOptions<ts.BuilderProgram>;

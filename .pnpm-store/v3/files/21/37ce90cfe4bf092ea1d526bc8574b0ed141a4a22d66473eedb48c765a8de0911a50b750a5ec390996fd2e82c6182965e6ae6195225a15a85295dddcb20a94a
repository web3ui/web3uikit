import type { Diagnostic } from 'typescript';
export interface TypeCheckResult {
    warnings?: string[];
    errors?: string[];
    inputFilesCount: number;
    totalFilesCount: number;
    incremental: boolean;
}
export declare type TypeCheckOptions = BaseTypeCheckOptions & Mode;
interface BaseTypeCheckOptions {
    workspaceRoot: string;
    tsConfigPath: string;
    cacheDir?: string;
    incremental?: boolean;
    rootDir?: string;
}
declare type Mode = NoEmitMode | EmitDeclarationOnlyMode;
interface NoEmitMode {
    mode: 'noEmit';
}
interface EmitDeclarationOnlyMode {
    mode: 'emitDeclarationOnly';
    outDir: string;
}
export declare function runTypeCheckWatch(options: TypeCheckOptions, callback: (diagnostic: Diagnostic, formattedDiagnostic: string, errorCount?: number) => void | Promise<void>): Promise<{
    close: any;
    preEmitErrors: string[];
    preEmitWarnings: string[];
}>;
export declare function runTypeCheck(options: TypeCheckOptions): Promise<TypeCheckResult>;
export declare function getFormattedDiagnostic(ts: typeof import('typescript'), workspaceRoot: string, diagnostic: Diagnostic): string;
export {};

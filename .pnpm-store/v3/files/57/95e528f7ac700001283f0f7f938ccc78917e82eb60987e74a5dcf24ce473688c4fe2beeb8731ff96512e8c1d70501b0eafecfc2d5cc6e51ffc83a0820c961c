import { Plugin, Alias } from 'vite';
import { ts, Diagnostic } from 'ts-morph';

interface TransformWriteFile {
    filePath?: string;
    content?: string;
}
interface PluginOptions {
    include?: string | string[];
    exclude?: string | string[];
    root?: string;
    outputDir?: string;
    entryRoot?: string;
    compilerOptions?: ts.CompilerOptions | null;
    tsConfigFilePath?: string;
    aliasesExclude?: Alias['find'][];
    cleanVueFileName?: boolean;
    staticImport?: boolean;
    clearPureImport?: boolean;
    insertTypesEntry?: boolean;
    rollupTypes?: boolean;
    copyDtsFiles?: boolean;
    noEmitOnError?: boolean;
    skipDiagnostics?: boolean;
    logDiagnostics?: boolean;
    afterDiagnostic?: (diagnostics: Diagnostic[]) => void | Promise<void>;
    beforeWriteFile?: (filePath: string, content: string) => void | TransformWriteFile;
    afterBuild?: () => void | Promise<void>;
}
declare function dtsPlugin(options?: PluginOptions): Plugin;

export { dtsPlugin as default };

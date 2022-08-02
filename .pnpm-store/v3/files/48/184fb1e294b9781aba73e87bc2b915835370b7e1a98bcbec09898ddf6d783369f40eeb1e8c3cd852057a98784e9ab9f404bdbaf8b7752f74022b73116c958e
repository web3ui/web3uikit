import * as ts from 'typescript';
export declare function compile(sourcecode: string, filename: string, options: ts.CompilerOptions & {
    fallbackToTs?: (filename: string) => boolean;
}): string;
export declare function register(options?: Partial<ts.CompilerOptions & {
    fallbackToTs: (path: string) => boolean;
}>, hookOpts?: {}): () => void;

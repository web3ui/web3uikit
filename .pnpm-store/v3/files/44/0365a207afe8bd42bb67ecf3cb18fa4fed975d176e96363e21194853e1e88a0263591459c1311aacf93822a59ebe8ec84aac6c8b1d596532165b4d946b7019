import type { CustomTransformerFactory, Node, Program, TransformerFactory as TypescriptTransformerFactory } from 'typescript';
declare type TransformerFactory = TypescriptTransformerFactory<Node> | CustomTransformerFactory;
export interface TransformerPlugin {
    name: string;
    options: Record<string, unknown>;
}
export declare type TransformerEntry = string | TransformerPlugin;
export interface CompilerPlugin {
    before?: (options?: Record<string, unknown>, program?: Program) => TransformerFactory;
    after?: (options?: Record<string, unknown>, program?: Program) => TransformerFactory;
    afterDeclarations?: (options?: Record<string, unknown>, program?: Program) => TransformerFactory;
}
export interface CompilerPluginHooks {
    beforeHooks: Array<(program?: Program) => TransformerFactory>;
    afterHooks: Array<(program?: Program) => TransformerFactory>;
    afterDeclarationsHooks: Array<(program?: Program) => TransformerFactory>;
}
export {};

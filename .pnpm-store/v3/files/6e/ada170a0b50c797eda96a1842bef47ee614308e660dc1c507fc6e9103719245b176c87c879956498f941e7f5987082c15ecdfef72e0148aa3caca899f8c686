import { Tree } from '@nrwl/devkit';
export default function update(tree: Tree): Promise<void>;
export declare function updateASTTransformers(tree: Tree, jestConfigPath: string, jestConfig: PartialJestConfig): void;
export declare function updateTransform(tree: Tree, jestConfigPath: string, jestConfig: PartialJestConfig): void;
interface PartialJestConfig {
    globals: {
        'ts-jest': {
            astTransformers: ASTTransformers;
        };
    };
    transform?: Record<string, string>;
}
interface ASTTransformer {
    path: string;
    options: unknown;
}
interface ASTTransformers {
    before: (ASTTransformer | string)[];
    after: (ASTTransformer | string)[];
    afterDeclarations: (ASTTransformer | string)[];
}
export declare function getNewAstTransformers(astTransformers: ASTTransformers): ASTTransformers | null;
export declare function transformerIsFromJestPresetAngular(transformer: ASTTransformer | string): boolean;
export declare function usesJestPresetAngular(jestConfig: PartialJestConfig): boolean;
export {};

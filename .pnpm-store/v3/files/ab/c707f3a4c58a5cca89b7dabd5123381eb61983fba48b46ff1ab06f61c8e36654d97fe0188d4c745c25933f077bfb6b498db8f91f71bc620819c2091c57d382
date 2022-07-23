import type { Tree } from '@nrwl/devkit';
import type { Linter as ESLintLinter } from 'eslint';
import type { TSLintRuleOptions } from 'tslint-to-eslint-config';
export declare function convertToESLintConfig(pathToTslintJson: string, tslintJson: Record<string, unknown>, ignoreExtendsVals: string[]): Promise<{
    convertedESLintConfig: ESLintLinter.Config;
    unconvertedTSLintRules: TSLintRuleOptions[];
    ensureESLintPlugins: string[];
}>;
export declare function convertTSLintDisableCommentsForProject(tree: Tree, projectName: string): void;

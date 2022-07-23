import type { Tree, GeneratorCallback } from '@nrwl/devkit';
import type { Linter } from 'eslint';
import type { TSLintRuleOptions } from 'tslint-to-eslint-config';
export declare function ensureESLintPluginsAreInstalled(host: Tree, eslintPluginsToBeInstalled: string[]): GeneratorCallback;
export declare function convertTSLintConfig(rawTSLintJson: any, tslintJsonPath: string, ignoreExtendsVals: string[]): Promise<{
    convertedESLintConfig: Linter.Config<Linter.RulesRecord>;
    unconvertedTSLintRules: TSLintRuleOptions[];
    ensureESLintPlugins: string[];
}>;
export declare function deduplicateOverrides(overrides?: Linter.Config['overrides']): any[];

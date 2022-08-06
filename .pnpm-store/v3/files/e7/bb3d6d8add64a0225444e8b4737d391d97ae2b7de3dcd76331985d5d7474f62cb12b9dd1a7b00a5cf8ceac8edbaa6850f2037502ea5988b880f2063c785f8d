import { SupportedFrameworks, SupportedLanguage } from './project_types';
import { JsPackageManager, PackageJson, PackageJsonWithDepsAndDevDeps } from './js-package-manager';
export declare function getBowerJson(): any;
export declare function readFileAsJson(jsonPath: string, allowComments?: boolean): any;
export declare const writeFileAsJson: (jsonPath: string, content: unknown) => boolean;
export declare const commandLog: (message: string) => (errorMessage?: string | void, errorInfo?: string) => void;
export declare function paddedLog(message: string): void;
export declare function getChars(char: string, amount: number): string;
export declare function codeLog(codeLines: string[], leftPadAmount?: number): void;
/**
 * Detect if any babel dependencies need to be added to the project
 * @param {Object} packageJson The current package.json so we can inspect its contents
 * @returns {Array} Contains the packages and versions that need to be installed
 * @example
 * const babelDependencies = await getBabelDependencies(packageManager, npmOptions, packageJson);
 * // you can then spread the result when using installDependencies
 * installDependencies(npmOptions, [
 *   `@storybook/react@${storybookVersion}`,
 *   ...babelDependencies,
 * ]);
 */
export declare function getBabelDependencies(packageManager: JsPackageManager, packageJson: PackageJsonWithDepsAndDevDeps): Promise<string[]>;
export declare function addToDevDependenciesIfNotPresent(packageJson: PackageJson, name: string, packageVersion: string): void;
export declare function copyTemplate(templateRoot: string): void;
export declare function copyComponents(framework: SupportedFrameworks, language: SupportedLanguage): void;

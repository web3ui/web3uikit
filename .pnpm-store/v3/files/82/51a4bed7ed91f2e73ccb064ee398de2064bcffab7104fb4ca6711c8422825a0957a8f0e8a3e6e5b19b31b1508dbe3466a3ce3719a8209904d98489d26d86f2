import { ProjectType, SupportedLanguage, CoreBuilder } from './project_types';
import { PackageJson, JsPackageManager } from './js-package-manager';
export declare function detectFrameworkPreset(packageJson?: PackageJson): ProjectType.UNDETECTED | ProjectType;
/**
 * Attempts to detect which builder to use, by searching for a vite config file.  If one is found, the vite builder
 * will be used, otherwise, webpack4 is the default.
 *
 * @returns CoreBuilder
 */
export declare function detectBuilder(packageManager: JsPackageManager): CoreBuilder;
export declare function isStorybookInstalled(dependencies: PackageJson | false, force?: boolean): false | ProjectType.ALREADY_HAS_STORYBOOK | ProjectType.UPDATE_PACKAGE_ORGANIZATIONS;
export declare function detectLanguage(): SupportedLanguage;
export declare function detect(options?: {
    force?: boolean;
    html?: boolean;
}): ProjectType.UNDETECTED | ProjectType.UNDETECTED | ProjectType.UNSUPPORTED | ProjectType.REACT_SCRIPTS | ProjectType;

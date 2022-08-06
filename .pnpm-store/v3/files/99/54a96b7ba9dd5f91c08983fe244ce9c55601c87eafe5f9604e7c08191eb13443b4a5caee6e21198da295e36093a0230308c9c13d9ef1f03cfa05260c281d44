import { NpmOptions } from '../NpmOptions';
import { SupportedLanguage, SupportedFrameworks, Builder } from '../project_types';
import { JsPackageManager } from '../js-package-manager';
export declare type GeneratorOptions = {
    language: SupportedLanguage;
    builder: Builder;
    linkable: boolean;
};
export interface FrameworkOptions {
    extraPackages?: string[];
    extraAddons?: string[];
    staticDir?: string;
    addScripts?: boolean;
    addComponents?: boolean;
    addBabel?: boolean;
    addESLint?: boolean;
    extraMain?: any;
    extensions?: string[];
    commonJs?: boolean;
}
export declare type Generator = (packageManager: JsPackageManager, npmOptions: NpmOptions, options: GeneratorOptions) => Promise<void>;
export declare function baseGenerator(packageManager: JsPackageManager, npmOptions: NpmOptions, { language, builder }: GeneratorOptions, framework: SupportedFrameworks, options?: FrameworkOptions): Promise<void>;

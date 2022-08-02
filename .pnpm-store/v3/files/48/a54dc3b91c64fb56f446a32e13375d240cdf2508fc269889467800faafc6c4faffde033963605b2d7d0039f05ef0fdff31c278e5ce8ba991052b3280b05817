import type { StorybookConfig } from '@storybook/core-common';
import type { SupportedFrameworks } from '../project_types';
export interface Parameters {
    framework: SupportedFrameworks;
    /** E2E configuration name */
    name: string;
    /** framework version */
    version: string;
    /** CLI to bootstrap the project */
    generator: string;
    /** Use storybook framework detection */
    autoDetect?: boolean;
    /** Dependencies to add before building Storybook */
    additionalDeps?: string[];
    /** Add typescript dependency and creates a tsconfig.json file */
    typescript?: boolean;
    /** Merge configurations to main.js before running the tests */
    mainOverrides?: Partial<StorybookConfig> & Record<string, any>;
}
export declare const cra: Parameters;
export declare const cra_typescript: Parameters;
export declare const react: Parameters;
export declare const react_legacy_root_api: Parameters;
export declare const react_typescript: Parameters;
export declare const webpack_react: Parameters;
export declare const vite_react: Parameters;
export declare const react_in_yarn_workspace: Parameters;
export declare const angular10: Parameters;
export declare const angular11: Parameters;
export declare const angular12: Parameters;
export declare const angular130: Parameters;
export declare const angular13: Parameters;
export declare const angular_modern_inline_rendering: Parameters;
export declare const angular: Parameters;
export declare const web_components: Parameters;
export declare const web_components_typescript: Parameters;
export declare const web_components_lit2: Parameters;
export declare const vue: Parameters;
export declare const vue3: Parameters;
export declare const html: Parameters;
export declare const preact: Parameters;
export declare const sfcVue: Parameters;
export declare const svelte: Parameters;

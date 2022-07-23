import { SupportedFrameworks } from '../project_types';
interface ConfigureMainOptions {
    addons: string[];
    extensions?: string[];
    commonJs?: boolean;
    /**
     * Extra values for main.js
     *
     * In order to provide non-serializable data like functions, you can use
     * { value: '%%yourFunctionCall()%%' }
     *
     * '%% and %%' will be replace.
     *
     */
    [key: string]: any;
}
export declare function configure(framework: SupportedFrameworks, mainOptions: ConfigureMainOptions): void;
export {};

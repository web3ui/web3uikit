import { Plugin } from 'vite';
import type { UserConfig } from 'vite';
import type { ExtendedOptions } from './types';
export declare type PluginConfigType = 'build' | 'development';
export declare function readPackageJson(): Record<string, any> | false;
export declare function commonConfig(options: ExtendedOptions, _type: PluginConfigType): Promise<UserConfig & {
    configFile: false;
    root: string;
}>;
export declare function pluginConfig(options: ExtendedOptions, _type: PluginConfigType): Promise<Plugin[]>;

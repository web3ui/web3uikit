import type { Builder, StorybookConfig, Options } from '@storybook/core-common';
import type { InlineConfig, UserConfig } from 'vite';
export declare type ViteStats = null;
export declare type ViteBuilder = Builder<UserConfig, ViteStats>;
export declare type ViteFinal = (config: InlineConfig, options: Options) => InlineConfig | Promise<InlineConfig>;
export declare type StorybookViteConfig = StorybookConfig & {
    viteFinal: ViteFinal;
};
export declare const start: ViteBuilder['start'];
export declare const build: ViteBuilder['build'];
export declare const corePresets: never[];
export declare const previewPresets: never[];

import webpack, { Stats, Configuration } from 'webpack';
import { Builder, Options } from '@storybook/core-common';
declare type WebpackBuilder = Builder<Configuration, Stats>;
declare type BuilderStartOptions = Partial<Parameters<WebpackBuilder['start']>['0']>;
export declare const executor: {
    get: (options: Options) => Promise<typeof webpack>;
};
export declare const getConfig: WebpackBuilder['getConfig'];
export declare const bail: WebpackBuilder['bail'];
export declare const start: (options: BuilderStartOptions) => Promise<unknown>;
export declare const build: (options: BuilderStartOptions) => Promise<void | webpack.Stats>;
export declare const corePresets: string[];
export declare const overridePresets: string[];
export {};

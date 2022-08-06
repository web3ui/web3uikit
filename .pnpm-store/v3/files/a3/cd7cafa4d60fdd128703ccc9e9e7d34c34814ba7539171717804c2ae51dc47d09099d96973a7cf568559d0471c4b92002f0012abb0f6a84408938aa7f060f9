import type { DecoratorFunction, StoryContext } from '@storybook/addons';
import type { SetupWorkerApi, RequestHandler } from 'msw';
import type { SetupServerApi } from 'msw/node';
export declare type SetupApi = SetupWorkerApi | SetupServerApi;
export declare type InitializeOptions = Parameters<SetupWorkerApi['start']>[0] | Parameters<SetupServerApi['listen']>[0];
export declare type DecoratorParameters = {
    msw?: RequestHandler[] | {
        handlers: RequestHandler[] | Record<string, RequestHandler>;
    };
};
export interface DecoratorContext extends StoryContext {
    parameters: StoryContext['parameters'] & DecoratorParameters;
}
export declare function initialize(options?: InitializeOptions): SetupApi;
export declare function initializeWorker(options?: InitializeOptions): SetupApi;
export declare function getWorker(): SetupApi;
export declare const mswDecorator: DecoratorFunction;

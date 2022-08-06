import { Debugger } from 'debug';
import { AsyncEventEmitter } from './utils/AsyncEventEmitter';
export declare type InterceptorEventMap = Record<string, (...args: any[]) => void>;
export declare type InterceptorSubscription = () => void;
export declare function getGlobalSymbol<V>(symbol: Symbol): V | undefined;
export declare function deleteGlobalSymbol(symbol: Symbol): void;
export declare enum InterceptorReadyState {
    IDLE = "IDLE",
    APPLYING = "APPLYING",
    APPLIED = "APPLIED",
    DISPOSING = "DISPOSING",
    DISPOSED = "DISPOSED"
}
export declare type ExtractEventNames<EventMap extends Record<string, any>> = EventMap extends Record<infer EventName, any> ? EventName : never;
export declare class Interceptor<EventMap extends InterceptorEventMap> {
    private readonly symbol;
    protected emitter: AsyncEventEmitter<EventMap>;
    protected subscriptions: InterceptorSubscription[];
    protected log: Debugger;
    readyState: InterceptorReadyState;
    constructor(symbol: Symbol);
    /**
     * Determine if this interceptor can be applied
     * in the current environment.
     */
    protected checkEnvironment(): boolean;
    /**
     * Apply this interceptor to the current process.
     * Returns an already running interceptor instance if it's present.
     */
    apply(): void;
    /**
     * Setup the module augments and stubs necessary for this interceptor.
     * This method is not run if there's a running interceptor instance
     * to prevent instantiating an interceptor multiple times.
     */
    protected setup(): void;
    /**
     * Listen to the interceptor's public events.
     */
    on<Event extends ExtractEventNames<EventMap>>(event: Event, listener: EventMap[Event]): void;
    /**
     * Disposes of any side-effects this interceptor has introduced.
     */
    dispose(): void;
    private getInstance;
    private setInstance;
    private clearInstance;
}

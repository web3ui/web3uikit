import { EventMapType } from 'strict-event-emitter';
import { ExtractEventNames, Interceptor } from './Interceptor';
export interface BatchInterceptorOptions<InterceptorList extends Interceptor<any>[]> {
    name: string;
    interceptors: InterceptorList;
}
export declare type ExtractEventMapType<InterceptorList extends Interceptor<any>[]> = InterceptorList extends Array<infer InterceptorType> ? InterceptorType extends Interceptor<infer EventMap> ? EventMap : never : never;
/**
 * A batch interceptor that exposes a single interface
 * to apply and operate with multiple interceptors at once.
 */
export declare class BatchInterceptor<InterceptorList extends Interceptor<any>[], EventMap extends EventMapType = ExtractEventMapType<InterceptorList>> extends Interceptor<EventMap> {
    static symbol: Symbol;
    private interceptors;
    constructor(options: BatchInterceptorOptions<InterceptorList>);
    protected setup(): void;
    on<Event extends ExtractEventNames<EventMap>>(event: Event, listener: EventMap[Event]): void;
}

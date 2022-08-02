import { StrictEventEmitter, EventMapType } from 'strict-event-emitter';
export interface QueueItem<Args extends any[]> {
    args: Args;
    done: Promise<void>;
}
export declare enum AsyncEventEmitterReadyState {
    ACTIVE = "ACTIVE",
    DEACTIVATED = "DEACTIVATED"
}
export declare class AsyncEventEmitter<EventMap extends EventMapType> extends StrictEventEmitter<EventMap> {
    readyState: AsyncEventEmitterReadyState;
    private log;
    protected queue: Map<keyof EventMap, QueueItem<Parameters<EventMap[keyof EventMap]>>[]>;
    constructor();
    on<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    emit<Event extends keyof EventMap>(event: Event, ...args: Parameters<EventMap[Event]>): boolean;
    /**
     * Returns a promise that resolves when all the listeners for the given event
     * has been called. Awaits asynchronous listeners.
     * If the event has no listeners, resolves immediately.
     */
    untilIdle<Event extends keyof EventMap>(event: Event, filter?: (item: QueueItem<Parameters<EventMap[Event]>>) => boolean): Promise<void>;
    private openListenerQueue;
    removeAllListeners<Event extends keyof EventMap>(event?: Event): this;
    activate(): void;
    /**
     * Deactivate this event emitter.
     * Deactivated emitter can no longer emit and listen to events
     * and needs to be activated again in order to do so.
     */
    deactivate(): void;
}

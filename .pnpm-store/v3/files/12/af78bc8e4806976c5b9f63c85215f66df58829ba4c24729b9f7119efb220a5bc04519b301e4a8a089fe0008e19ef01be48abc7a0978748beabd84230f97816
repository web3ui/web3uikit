/// <reference types="node" />
import { EventEmitter } from 'events';
export declare type EventMapType = Record<string | symbol, any>;
export declare class StrictEventEmitter<EventMap extends EventMapType> extends EventEmitter {
    constructor();
    on<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    once<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    off<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    emit<Event extends keyof EventMap>(event: Event, ...data: Parameters<EventMap[Event]>): boolean;
    addListener<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    prependListener<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    prependOnceListener<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    removeListener<Event extends keyof EventMap>(event: Event, listener: EventMap[Event]): this;
    removeAllListeners<Event extends keyof EventMap>(event?: Event): this;
    eventNames<Event extends keyof EventMap>(): Event[];
    listeners<Event extends keyof EventMap>(event: Event): Array<EventMap[Event]>;
    rawListeners<Event extends keyof EventMap>(event: Event): Array<EventMap[Event]>;
    listenerCount<Event extends keyof EventMap>(event: Event): number;
}

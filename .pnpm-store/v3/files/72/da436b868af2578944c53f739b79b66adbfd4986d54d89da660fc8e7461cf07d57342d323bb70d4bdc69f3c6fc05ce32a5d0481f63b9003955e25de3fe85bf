/// <reference types="node" />
import { Duplex as DuplexStream } from 'stream';
import { ObservableStore } from './ObservableStore';
declare class ObservableStoreStream<T> extends DuplexStream {
    handler: (state: T) => void;
    obsStore: ObservableStore<T>;
    constructor(obsStore: ObservableStore<T>);
    pipe<U extends NodeJS.WritableStream>(dest: U, options?: {
        end?: boolean;
    }): U;
    _write(chunk: any, _encoding: string, callback: (error?: Error | null) => void): void;
    _read(_size: number): void;
    _destroy(err: Error | null, callback: (error: Error | null) => void): void;
}
export declare function storeAsStream<T>(obsStore: ObservableStore<T>): ObservableStoreStream<T>;
export {};

/**
 * XMLHttpRequest override class.
 * Inspired by https://github.com/marvinhagemeister/xhr-mocklet.
 */
import type { Debugger } from 'debug';
import { Headers } from 'headers-polyfill';
import type { XMLHttpRequestEmitter } from '.';
declare type XMLHttpRequestEventHandler = (this: XMLHttpRequest, event: Event | ProgressEvent<any>) => void;
interface XMLHttpRequestEvent<EventMap extends any> {
    name: keyof EventMap;
    listener: XMLHttpRequestEventHandler;
}
interface CreateXMLHttpRequestOverrideOptions {
    XMLHttpRequest: typeof window.XMLHttpRequest;
    emitter: XMLHttpRequestEmitter;
    log: Debugger;
}
interface InternalXMLHttpRequestEventTargetEventMap extends XMLHttpRequestEventTargetEventMap {
    readystatechange: Event;
}
export declare type ExtractCallbacks<Key extends string> = Key extends 'abort' | `on${infer _CallbackName}` ? Key : never;
export declare const createXMLHttpRequestOverride: (options: CreateXMLHttpRequestOverrideOptions) => {
    new (): {
        _requestHeaders: Headers;
        _responseHeaders: Headers;
        _events: XMLHttpRequestEvent<InternalXMLHttpRequestEventTargetEventMap>[];
        log: Debugger;
        readonly UNSENT: 0;
        readonly OPENED: 1;
        readonly HEADERS_RECEIVED: 2;
        readonly LOADING: 3;
        readonly DONE: 4;
        method: string;
        url: string;
        withCredentials: boolean;
        status: number;
        statusText: string;
        user?: string | undefined;
        password?: string | undefined;
        data: string;
        async?: boolean | undefined;
        response: any;
        responseText: string;
        responseType: XMLHttpRequestResponseType;
        responseXML: Document | null;
        responseURL: string;
        upload: XMLHttpRequestUpload;
        readyState: number;
        onreadystatechange: (this: XMLHttpRequest, ev: Event) => any;
        timeout: number;
        onabort: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onerror: (this: XMLHttpRequestEventTarget, event: Event) => any;
        onload: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onloadend: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onloadstart: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        onprogress: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        ontimeout: (this: XMLHttpRequestEventTarget, event: ProgressEvent) => any;
        setReadyState(nextState: number): void;
        /**
         * Triggers both direct callback and attached event listeners
         * for the given event.
         */
        trigger<K extends "readystatechange" | keyof XMLHttpRequestEventTargetEventMap>(eventName: K, options?: ProgressEventInit | undefined): any;
        reset(): void;
        open(method: string, url: string, async?: boolean, user?: string | undefined, password?: string | undefined): Promise<void>;
        send(data?: string | undefined): void;
        abort(): void;
        dispatchEvent(): boolean;
        setRequestHeader(name: string, value: string): void;
        getResponseHeader(name: string): string | null;
        getAllResponseHeaders(): string;
        addEventListener<K_1 extends keyof InternalXMLHttpRequestEventTargetEventMap>(name: K_1, listener: XMLHttpRequestEventHandler): void;
        removeEventListener<K_2 extends keyof XMLHttpRequestEventMap>(name: K_2, listener: (event?: XMLHttpRequestEventMap[K_2] | undefined) => void): void;
        overrideMimeType(): void;
        /**
         * Resolves the response based on the `responseType` value.
         */
        getResponseBody(body: string | undefined): string | Record<string, any> | null;
        getResponseXML(): Document | null;
        /**
         * Propagates mock XMLHttpRequest instance callbacks
         * to the given XMLHttpRequest instance.
         */
        propagateCallbacks(request: XMLHttpRequest): void;
        /**
         * Propagates the mock XMLHttpRequest instance listeners
         * to the given XMLHttpRequest instance.
         */
        propagateListeners(request: XMLHttpRequest): void;
        propagateHeaders(request: XMLHttpRequest, headers: Headers): void;
    };
    readonly UNSENT: 0;
    readonly OPENED: 1;
    readonly HEADERS_RECEIVED: 2;
    readonly LOADING: 3;
    readonly DONE: 4;
};
export {};

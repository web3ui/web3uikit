/// <reference types="node" />
import { ChildProcess } from 'child_process';
import type { HttpRequestEventMap } from './glossary';
import { Interceptor } from './Interceptor';
import { BatchInterceptor } from './BatchInterceptor';
import { ClientRequestInterceptor } from './interceptors/ClientRequest';
import { XMLHttpRequestInterceptor } from './interceptors/XMLHttpRequest';
export declare class RemoteHttpInterceptor extends BatchInterceptor<[
    ClientRequestInterceptor,
    XMLHttpRequestInterceptor
]> {
    constructor();
    protected setup(): void;
}
export declare function requestReviver(key: string, value: any): any;
export interface RemoveResolverOptions {
    process: ChildProcess;
}
export declare class RemoteHttpResolver extends Interceptor<HttpRequestEventMap> {
    static symbol: symbol;
    private process;
    constructor(options: RemoveResolverOptions);
    protected setup(): void;
}

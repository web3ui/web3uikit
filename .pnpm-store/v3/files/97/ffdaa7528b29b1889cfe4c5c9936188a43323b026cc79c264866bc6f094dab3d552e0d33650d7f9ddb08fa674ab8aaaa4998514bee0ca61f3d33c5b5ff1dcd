/// <reference types="node" />
import http from 'http';
import https from 'https';
import { HttpRequestEventMap, IS_PATCHED_MODULE } from '../../glossary';
import { Interceptor } from '../../Interceptor';
import { AsyncEventEmitter } from '../../utils/AsyncEventEmitter';
import { Protocol } from './NodeClientRequest';
export declare type MaybePatchedModule<Module> = Module & {
    [IS_PATCHED_MODULE]?: boolean;
};
export declare type ClientRequestEmitter = AsyncEventEmitter<HttpRequestEventMap>;
export declare type ClientRequestModules = Map<Protocol, MaybePatchedModule<typeof http> | MaybePatchedModule<typeof https>>;
/**
 * Intercept requests made via the `ClientRequest` class.
 * Such requests include `http.get`, `https.request`, etc.
 */
export declare class ClientRequestInterceptor extends Interceptor<HttpRequestEventMap> {
    static symbol: symbol;
    private modules;
    constructor();
    protected setup(): void;
}

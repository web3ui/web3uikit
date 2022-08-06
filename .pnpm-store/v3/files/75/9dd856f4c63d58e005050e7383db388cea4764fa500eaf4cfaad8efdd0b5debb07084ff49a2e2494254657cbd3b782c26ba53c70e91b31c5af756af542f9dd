/// <reference types="node" />
import { IncomingMessage } from 'http';
import { RequestOptions } from 'https';
import { Url as LegacyURL } from 'url';
import { ResolvedRequestOptions } from '../../../utils/getUrlByRequestOptions';
export declare type HttpRequestCallback = (response: IncomingMessage) => void;
export declare type ClientRequestArgs = [string | URL | LegacyURL, HttpRequestCallback?] | [string | URL | LegacyURL, RequestOptions, HttpRequestCallback?] | [RequestOptions, HttpRequestCallback?];
export declare type NormalizedClientRequestArgs = [
    url: URL,
    options: ResolvedRequestOptions,
    callback?: HttpRequestCallback
];
/**
 * Normalizes parameters given to a `http.request` call
 * so it always has a `URL` and `RequestOptions`.
 */
export declare function normalizeClientRequestArgs(defaultProtocol: string, ...args: ClientRequestArgs): NormalizedClientRequestArgs;

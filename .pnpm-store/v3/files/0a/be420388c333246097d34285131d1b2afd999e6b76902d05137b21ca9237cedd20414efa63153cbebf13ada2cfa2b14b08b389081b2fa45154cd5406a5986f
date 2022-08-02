/// <reference types="node" />
export declare type ClientRequestEndChunk = string | Buffer;
declare type ClientRequestEndCallback = () => void;
declare type HttpRequestEndArgs = [] | [ClientRequestEndCallback] | [ClientRequestEndChunk, ClientRequestEndCallback?] | [ClientRequestEndChunk, BufferEncoding, ClientRequestEndCallback?];
declare type NormalizedHttpRequestEndParams = [
    ClientRequestEndChunk | null,
    BufferEncoding | null,
    ClientRequestEndCallback | null
];
/**
 * Normalizes a list of arguments given to the `ClientRequest.end()`
 * method to always include `chunk`, `encoding`, and `callback`.
 */
export declare function normalizeClientRequestEndArgs(...args: HttpRequestEndArgs): NormalizedHttpRequestEndParams;
export {};

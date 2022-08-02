/// <reference types="node" />
export declare type ClientRequestWriteCallback = (error?: Error | null) => void;
export declare type ClientRequestWriteArgs = [
    chunk: string | Buffer,
    encoding?: BufferEncoding | ClientRequestWriteCallback,
    callback?: ClientRequestWriteCallback
];
export declare type NormalizedClientRequestWriteArgs = [
    chunk: string | Buffer,
    encoding?: BufferEncoding,
    callback?: ClientRequestWriteCallback
];
export declare function normalizeClientRequestWriteArgs(args: ClientRequestWriteArgs): NormalizedClientRequestWriteArgs;

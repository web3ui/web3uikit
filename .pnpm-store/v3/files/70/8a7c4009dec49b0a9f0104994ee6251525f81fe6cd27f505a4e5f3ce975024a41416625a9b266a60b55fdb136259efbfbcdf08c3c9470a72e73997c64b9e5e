/// <reference types="node" />
import { BufferEncoding } from "@toruslabs/openlogin-utils";
import { Duplex } from "readable-stream";
import type { Readable, Writable } from "stream";
import Substream from "./substream";
export declare const IGNORE_SUBSTREAM: unique symbol;
export declare type Stream = Readable | Writable;
interface Chunk {
    name: string;
    data: unknown;
}
export declare class ObjectMultiplex extends Duplex {
    _substreams: Record<string, Substream | typeof IGNORE_SUBSTREAM>;
    getStream: (name: string) => Substream | symbol;
    constructor(opts?: Record<string, unknown>);
    createStream(name: string): Substream;
    ignoreStream(name: string): void;
    _read(): void;
    _write(chunk: Chunk, _encoding: BufferEncoding, callback: (error?: Error | null) => void): void;
}
export declare function setupMultiplex(stream: Duplex): ObjectMultiplex;
export {};

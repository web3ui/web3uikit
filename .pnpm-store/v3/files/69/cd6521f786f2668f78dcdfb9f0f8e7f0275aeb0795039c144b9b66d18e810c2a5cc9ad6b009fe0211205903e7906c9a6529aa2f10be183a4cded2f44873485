import { Transport } from "../transport.js";
import { RawData } from "engine.io-parser";
import { Emitter } from "@socket.io/component-emitter";
export declare class Polling extends Transport {
    private readonly xd;
    private readonly xs;
    private polling;
    private pollXhr;
    /**
     * XHR Polling constructor.
     *
     * @param {Object} opts
     * @api public
     */
    constructor(opts: any);
    /**
     * Transport name.
     */
    get name(): string;
    /**
     * Opens the socket (triggers polling). We write a PING message to determine
     * when the transport is open.
     *
     * @api private
     */
    doOpen(): void;
    /**
     * Pauses polling.
     *
     * @param {Function} callback upon buffers are flushed and transport is paused
     * @api private
     */
    pause(onPause: any): void;
    /**
     * Starts polling cycle.
     *
     * @api public
     */
    poll(): void;
    /**
     * Overloads onData to detect payloads.
     *
     * @api private
     */
    onData(data: any): void;
    /**
     * For polling, send a close packet.
     *
     * @api private
     */
    doClose(): void;
    /**
     * Writes a packets payload.
     *
     * @param {Array} data packets
     * @param {Function} drain callback
     * @api private
     */
    write(packets: any): void;
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri(): string;
    /**
     * Creates a request.
     *
     * @param {String} method
     * @api private
     */
    request(opts?: {}): Request;
    /**
     * Sends data.
     *
     * @param {String} data to send.
     * @param {Function} called upon flush.
     * @api private
     */
    doWrite(data: any, fn: any): void;
    /**
     * Starts a poll cycle.
     *
     * @api private
     */
    doPoll(): void;
}
interface RequestReservedEvents {
    success: () => void;
    data: (data: RawData) => void;
    error: (err: number | Error, context: XMLHttpRequest) => void;
}
export declare class Request extends Emitter<{}, {}, RequestReservedEvents> {
    private readonly opts;
    private readonly method;
    private readonly uri;
    private readonly async;
    private readonly data;
    private xhr;
    private setTimeoutFn;
    private index;
    static requestsCount: number;
    static requests: {};
    /**
     * Request constructor
     *
     * @param {Object} options
     * @api public
     */
    constructor(uri: any, opts: any);
    /**
     * Creates the XHR object and sends the request.
     *
     * @api private
     */
    private create;
    /**
     * Called upon error.
     *
     * @api private
     */
    private onError;
    /**
     * Cleans up house.
     *
     * @api private
     */
    private cleanup;
    /**
     * Called upon load.
     *
     * @api private
     */
    private onLoad;
    /**
     * Aborts the request.
     *
     * @api public
     */
    abort(): void;
}
export {};

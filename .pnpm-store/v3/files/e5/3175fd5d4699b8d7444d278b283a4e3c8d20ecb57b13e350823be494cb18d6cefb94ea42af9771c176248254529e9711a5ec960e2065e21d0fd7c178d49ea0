import { Packet, RawData } from "engine.io-parser";
import { Emitter } from "@socket.io/component-emitter";
import { SocketOptions } from "./socket.js";
declare class TransportError extends Error {
    readonly description: any;
    readonly context: any;
    readonly type = "TransportError";
    constructor(reason: string, description: any, context: any);
}
export interface CloseDetails {
    description: string;
    context?: CloseEvent | XMLHttpRequest;
}
interface TransportReservedEvents {
    open: () => void;
    error: (err: TransportError) => void;
    packet: (packet: Packet) => void;
    close: (details?: CloseDetails) => void;
    poll: () => void;
    pollComplete: () => void;
    drain: () => void;
}
export declare abstract class Transport extends Emitter<{}, {}, TransportReservedEvents> {
    protected opts: SocketOptions;
    protected supportsBinary: boolean;
    protected query: object;
    protected readyState: string;
    protected writable: boolean;
    protected socket: any;
    protected setTimeoutFn: typeof setTimeout;
    /**
     * Transport abstract constructor.
     *
     * @param {Object} options.
     * @api private
     */
    constructor(opts: any);
    /**
     * Emits an error.
     *
     * @param {String} reason
     * @param description
     * @param context - the error context
     * @return {Transport} for chaining
     * @api protected
     */
    protected onError(reason: string, description: any, context?: any): this;
    /**
     * Opens the transport.
     *
     * @api public
     */
    private open;
    /**
     * Closes the transport.
     *
     * @api public
     */
    close(): this;
    /**
     * Sends multiple packets.
     *
     * @param {Array} packets
     * @api public
     */
    send(packets: any): void;
    /**
     * Called upon open
     *
     * @api protected
     */
    protected onOpen(): void;
    /**
     * Called with data.
     *
     * @param {String} data
     * @api protected
     */
    protected onData(data: RawData): void;
    /**
     * Called with a decoded packet.
     *
     * @api protected
     */
    protected onPacket(packet: Packet): void;
    /**
     * Called upon close.
     *
     * @api protected
     */
    protected onClose(details?: CloseDetails): void;
    protected abstract doOpen(): any;
    protected abstract doClose(): any;
    protected abstract write(packets: any): any;
}
export {};

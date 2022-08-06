import { Transport } from "../transport.js";
export declare class WS extends Transport {
    private ws;
    /**
     * WebSocket transport constructor.
     *
     * @api {Object} connection options
     * @api public
     */
    constructor(opts: any);
    /**
     * Transport name.
     *
     * @api public
     */
    get name(): string;
    /**
     * Opens socket.
     *
     * @api private
     */
    doOpen(): this;
    /**
     * Adds event listeners to the socket
     *
     * @api private
     */
    addEventListeners(): void;
    /**
     * Writes data to socket.
     *
     * @param {Array} array of packets.
     * @api private
     */
    write(packets: any): void;
    /**
     * Closes socket.
     *
     * @api private
     */
    doClose(): void;
    /**
     * Generates uri for connection.
     *
     * @api private
     */
    uri(): string;
    /**
     * Feature detection for WebSocket.
     *
     * @return {Boolean} whether this transport is available.
     * @api public
     */
    check(): boolean;
}

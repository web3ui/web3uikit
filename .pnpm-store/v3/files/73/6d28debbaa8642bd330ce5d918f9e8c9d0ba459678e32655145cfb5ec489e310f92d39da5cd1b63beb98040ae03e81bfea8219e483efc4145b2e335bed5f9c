/// <reference types="node" />
import { IncomingMessage } from 'http';
export declare const IS_CLONE: unique symbol;
export interface ClonedIncomingMessage extends IncomingMessage {
    [IS_CLONE]: boolean;
}
/**
 * Clones a given `http.IncomingMessage` instance.
 */
export declare function cloneIncomingMessage(message: IncomingMessage): ClonedIncomingMessage;

import { Duplex } from "readable-stream";
import { JRPCMiddleware, JRPCRequest, JRPCResponse } from "./jrpc";
import SafeEventEmitter from "./safeEventEmitter";
/**
 * A JSON-RPC request and response processor.
 * Give it a stack of middleware, pass it requests, and get back responses.
 */
export declare class JRPCEngine extends SafeEventEmitter {
    private _middleware;
    constructor();
    /**
     * Serially executes the given stack of middleware.
     *
     * @returns An array of any error encountered during middleware execution,
     * a boolean indicating whether the request was completed, and an array of
     * middleware-defined return handlers.
     */
    private static _runAllMiddleware;
    /**
     * Runs an individual middleware.
     *
     * @returns An array of any error encountered during middleware exection,
     * and a boolean indicating whether the request should end.
     */
    private static _runMiddleware;
    /**
     * Serially executes array of return handlers. The request and response are
     * assumed to be in their scope.
     */
    private static _runReturnHandlers;
    /**
     * Throws an error if the response has neither a result nor an error, or if
     * the "isComplete" flag is falsy.
     */
    private static _checkForCompletion;
    /**
     * Add a middleware function to the engine's middleware stack.
     *
     * @param middleware - The middleware function to add.
     */
    push<T, U>(middleware: JRPCMiddleware<T, U>): void;
    /**
     * Handle a JSON-RPC request, and return a response.
     *
     * @param request - The request to handle.
     * @param callback - An error-first callback that will receive the response.
     */
    handle<T, U>(request: JRPCRequest<T>, callback: (error: unknown, response: JRPCResponse<U>) => void): void;
    /**
     * Handle an array of JSON-RPC requests, and return an array of responses.
     *
     * @param request - The requests to handle.
     * @param callback - An error-first callback that will receive the array of
     * responses.
     */
    handle<T, U>(requests: JRPCRequest<T>[], callback: (error: unknown, responses: JRPCResponse<U>[]) => void): void;
    /**
     * Handle a JSON-RPC request, and return a response.
     *
     * @param request - The request to handle.
     * @returns A promise that resolves with the response, or rejects with an
     * error.
     */
    handle<T, U>(request: JRPCRequest<T>): Promise<JRPCResponse<U>>;
    /**
     * Handle an array of JSON-RPC requests, and return an array of responses.
     *
     * @param request - The requests to handle.
     * @returns A promise that resolves with the array of responses, or rejects
     * with an error.
     */
    handle<T, U>(requests: JRPCRequest<T>[]): Promise<JRPCResponse<U>[]>;
    /**
     * Returns this engine as a middleware function that can be pushed to other
     * engines.
     *
     * @returns This engine as a middleware function.
     */
    asMiddleware(): JRPCMiddleware<unknown, unknown>;
    /**
     * Like _handle, but for batch requests.
     */
    private _handleBatch;
    /**
     * A promise-wrapped _handle.
     */
    private _promiseHandle;
    /**
     * Ensures that the request object is valid, processes it, and passes any
     * error and the response object to the given callback.
     *
     * Does not reject.
     */
    private _handle;
    /**
     * For the given request and response, runs all middleware and their return
     * handlers, if any, and ensures that internal request processing semantics
     * are satisfied.
     */
    private _processRequest;
}
export declare function mergeMiddleware(middlewareStack: JRPCMiddleware<unknown, unknown>[]): JRPCMiddleware<unknown, unknown>;
export interface EngineStreamOptions {
    engine: JRPCEngine;
}
export declare function createEngineStream(opts: EngineStreamOptions): Duplex;

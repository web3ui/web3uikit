/**
 * Options for controlling the parallelism of asynchronous operations.
 *
 * @remarks
 * Used with {@link Async.mapAsync} and {@link Async.forEachAsync}.
 *
 * @beta
 */
export interface IAsyncParallelismOptions {
    /**
     * Optionally used with the  {@link Async.mapAsync} and {@link Async.forEachAsync}
     * to limit the maximum number of concurrent promises to the specified number.
     */
    concurrency?: number;
}
/**
 * Utilities for parallel asynchronous operations, for use with the system `Promise` APIs.
 *
 * @beta
 */
export declare class Async {
    /**
     * Given an input array and a `callback` function, invoke the callback to start a
     * promise for each element in the array.  Returns an array containing the results.
     *
     * @remarks
     * This API is similar to the system `Array#map`, except that the loop is asynchronous,
     * and the maximum number of concurrent promises can be throttled
     * using {@link IAsyncParallelismOptions.concurrency}.
     *
     * If `callback` throws a synchronous exception, or if it returns a promise that rejects,
     * then the loop stops immediately.  Any remaining array items will be skipped, and
     * overall operation will reject with the first error that was encountered.
     *
     * @param iterable - the array of inputs for the callback function
     * @param callback - a function that starts an asynchronous promise for an element
     *   from the array
     * @param options - options for customizing the control flow
     * @returns an array containing the result for each callback, in the same order
     *   as the original input `array`
     */
    static mapAsync<TEntry, TRetVal>(iterable: Iterable<TEntry> | AsyncIterable<TEntry>, callback: (entry: TEntry, arrayIndex: number) => Promise<TRetVal>, options?: IAsyncParallelismOptions | undefined): Promise<TRetVal[]>;
    /**
     * Given an input array and a `callback` function, invoke the callback to start a
     * promise for each element in the array.
     *
     * @remarks
     * This API is similar to the system `Array#forEach`, except that the loop is asynchronous,
     * and the maximum number of concurrent promises can be throttled
     * using {@link IAsyncParallelismOptions.concurrency}.
     *
     * If `callback` throws a synchronous exception, or if it returns a promise that rejects,
     * then the loop stops immediately.  Any remaining array items will be skipped, and
     * overall operation will reject with the first error that was encountered.
     *
     * @param iterable - the array of inputs for the callback function
     * @param callback - a function that starts an asynchronous promise for an element
     *   from the array
     * @param options - options for customizing the control flow
     */
    static forEachAsync<TEntry>(iterable: Iterable<TEntry> | AsyncIterable<TEntry>, callback: (entry: TEntry, arrayIndex: number) => Promise<void>, options?: IAsyncParallelismOptions | undefined): Promise<void>;
    /**
     * Return a promise that resolves after the specified number of milliseconds.
     */
    static sleep(ms: number): Promise<void>;
}
//# sourceMappingURL=Async.d.ts.map
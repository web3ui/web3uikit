"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
Object.defineProperty(exports, "__esModule", { value: true });
exports.Async = void 0;
/**
 * Utilities for parallel asynchronous operations, for use with the system `Promise` APIs.
 *
 * @beta
 */
class Async {
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
    static async mapAsync(iterable, callback, options) {
        const result = [];
        await Async.forEachAsync(iterable, async (item, arrayIndex) => {
            result[arrayIndex] = await callback(item, arrayIndex);
        }, options);
        return result;
    }
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
    static async forEachAsync(iterable, callback, options) {
        await new Promise((resolve, reject) => {
            const concurrency = (options === null || options === void 0 ? void 0 : options.concurrency) && options.concurrency > 0 ? options.concurrency : Infinity;
            let operationsInProgress = 0;
            const iterator = (iterable[Symbol.iterator] ||
                iterable[Symbol.asyncIterator]).call(iterable);
            let arrayIndex = 0;
            let iteratorIsComplete = false;
            let promiseHasResolvedOrRejected = false;
            async function queueOperationsAsync() {
                while (operationsInProgress < concurrency && !iteratorIsComplete && !promiseHasResolvedOrRejected) {
                    // Increment the concurrency while waiting for the iterator.
                    // This function is reentrant, so this ensures that at most `concurrency` executions are waiting
                    operationsInProgress++;
                    const currentIteratorResult = await iterator.next();
                    // eslint-disable-next-line require-atomic-updates
                    iteratorIsComplete = !!currentIteratorResult.done;
                    if (!iteratorIsComplete) {
                        Promise.resolve(callback(currentIteratorResult.value, arrayIndex++))
                            .then(async () => {
                            operationsInProgress--;
                            await onOperationCompletionAsync();
                        })
                            .catch((error) => {
                            promiseHasResolvedOrRejected = true;
                            reject(error);
                        });
                    }
                    else {
                        // The iterator is complete and there wasn't a value, so untrack the waiting state.
                        operationsInProgress--;
                    }
                }
                if (iteratorIsComplete) {
                    await onOperationCompletionAsync();
                }
            }
            async function onOperationCompletionAsync() {
                if (!promiseHasResolvedOrRejected) {
                    if (operationsInProgress === 0 && iteratorIsComplete) {
                        promiseHasResolvedOrRejected = true;
                        resolve();
                    }
                    else if (!iteratorIsComplete) {
                        await queueOperationsAsync();
                    }
                }
            }
            queueOperationsAsync().catch((error) => {
                promiseHasResolvedOrRejected = true;
                reject(error);
            });
        });
    }
    /**
     * Return a promise that resolves after the specified number of milliseconds.
     */
    static async sleep(ms) {
        await new Promise((resolve) => {
            setTimeout(resolve, ms);
        });
    }
}
exports.Async = Async;
//# sourceMappingURL=Async.js.map
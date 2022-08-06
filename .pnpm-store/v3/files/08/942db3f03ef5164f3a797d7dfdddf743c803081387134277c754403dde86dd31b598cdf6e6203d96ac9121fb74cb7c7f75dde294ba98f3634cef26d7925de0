"use strict";
// Copyright (c) Microsoft Corporation. All rights reserved. Licensed under the MIT license.
// See LICENSE in the project root for license information.
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LegacyAdapters = void 0;
const timsort_1 = require("timsort");
const semver = __importStar(require("semver"));
/**
 * Helper functions used when interacting with APIs that do not follow modern coding practices.
 * @public
 */
class LegacyAdapters {
    static convertCallbackToPromise(fn, arg1, arg2, arg3, arg4) {
        return new Promise((resolve, reject) => {
            const cb = (error, result) => {
                if (error) {
                    reject(LegacyAdapters.scrubError(error));
                }
                else {
                    resolve(result);
                }
            };
            try {
                if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined && arg4 !== undefined) {
                    fn(arg1, arg2, arg3, arg4, cb);
                }
                else if (arg1 !== undefined && arg2 !== undefined && arg3 !== undefined) {
                    fn(arg1, arg2, arg3, cb);
                }
                else if (arg1 !== undefined && arg2 !== undefined) {
                    fn(arg1, arg2, cb);
                }
                else if (arg1 !== undefined) {
                    fn(arg1, cb);
                }
                else {
                    fn(cb);
                }
            }
            catch (e) {
                reject(e);
            }
        });
    }
    /**
     * Normalizes an object into an `Error` object.
     */
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    static scrubError(error) {
        if (error instanceof Error) {
            return error;
        }
        else if (typeof error === 'string') {
            return new Error(error);
        }
        else {
            const errorObject = new Error('An error occurred.');
            errorObject.errorData = error; // eslint-disable-line @typescript-eslint/no-explicit-any
            return errorObject;
        }
    }
    /**
     * Prior to Node 11.x, the `Array.sort()` algorithm is not guaranteed to be stable.
     * If you need a stable sort, you can use `sortStable()` as a workaround.
     *
     * @remarks
     * On NodeJS 11.x and later, this method simply calls the native `Array.sort()`.
     * For earlier versions, it uses an implementation of Timsort, which is the same algorithm used by modern NodeJS.
     */
    static sortStable(array, compare) {
        if (LegacyAdapters._useTimsort === undefined) {
            LegacyAdapters._useTimsort = semver.major(process.versions.node) < 11;
        }
        if (LegacyAdapters._useTimsort) {
            (0, timsort_1.sort)(array, compare);
        }
        else {
            Array.prototype.sort.call(array, compare);
        }
    }
}
exports.LegacyAdapters = LegacyAdapters;
LegacyAdapters._useTimsort = undefined;
//# sourceMappingURL=LegacyAdapters.js.map
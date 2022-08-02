"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createAsyncIterable = void 0;
function createAsyncIterable(listener) {
    let done = false;
    let error = null;
    const pushQueue = [];
    const pullQueue = [];
    return {
        [Symbol.asyncIterator]() {
            listener({
                next: (value) => {
                    var _a;
                    if (done || error)
                        return;
                    if (pullQueue.length > 0) {
                        (_a = pullQueue.shift()) === null || _a === void 0 ? void 0 : _a[0]({ value, done: false });
                    }
                    else {
                        pushQueue.push(value);
                    }
                },
                error: (err) => {
                    var _a;
                    if (done || error)
                        return;
                    if (pullQueue.length > 0) {
                        (_a = pullQueue.shift()) === null || _a === void 0 ? void 0 : _a[1](err);
                    }
                    error = err;
                },
                done: () => {
                    var _a;
                    if (pullQueue.length > 0) {
                        (_a = pullQueue.shift()) === null || _a === void 0 ? void 0 : _a[0]({ value: undefined, done: true });
                    }
                    done = true;
                },
            });
            return {
                next() {
                    return new Promise((resolve, reject) => {
                        if (pushQueue.length > 0) {
                            resolve({ value: pushQueue.shift(), done: false });
                        }
                        else if (done) {
                            resolve({ value: undefined, done: true });
                        }
                        else if (error) {
                            reject(error);
                        }
                        else {
                            pullQueue.push([resolve, reject]);
                        }
                    });
                },
            };
        },
    };
}
exports.createAsyncIterable = createAsyncIterable;
//# sourceMappingURL=create-async-iteratable.js.map
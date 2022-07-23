"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __await = (this && this.__await) || function (v) { return this instanceof __await ? (this.v = v, this) : new __await(v); }
var __asyncGenerator = (this && this.__asyncGenerator) || function (thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
};
Object.defineProperty(exports, "__esModule", { value: true });
var deferred_1 = require("./util/deferred");
var RESOLVED = Promise.resolve();
/**
 * Will subscribe to the `source` observable provided,
 *
 * Allowing a `for await..of` loop to iterate over every
 * value that the source emits.
 *
 * **WARNING**: If the async loop is slower than the observable
 * producing values, the values will build up in a buffer
 * and you could experience an out of memory error.
 *
 * This is a lossless subscription method. No value
 * will be missed or duplicated.
 *
 * Example usage:
 *
 * ```ts
 * async function test() {
 *   const source$ = getSomeObservable();
 *
 *   for await(const value of eachValueFrom(source$)) {
 *     console.log(value);
 *   }
 * }
 * ```
 *
 * @param source the Observable source to await values from
 */
function eachValueFrom(source) {
    return __asyncGenerator(this, arguments, function eachValueFrom_1() {
        var deferreds, values, hasError, error, completed, subs, d, result, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deferreds = [];
                    values = [];
                    hasError = false;
                    error = null;
                    completed = false;
                    subs = source.subscribe({
                        next: function (value) {
                            if (deferreds.length > 0) {
                                deferreds.shift().resolve({ value: value, done: false });
                            }
                            else {
                                values.push(value);
                            }
                        },
                        error: function (err) {
                            hasError = true;
                            error = err;
                            while (deferreds.length > 0) {
                                deferreds.shift().reject(err);
                            }
                        },
                        complete: function () {
                            completed = true;
                            while (deferreds.length > 0) {
                                deferreds.shift().resolve({ value: undefined, done: true });
                            }
                        },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 16, 17, 18]);
                    _a.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 15];
                    if (!(values.length > 0)) return [3 /*break*/, 5];
                    return [4 /*yield*/, __await(values.shift())];
                case 3: return [4 /*yield*/, _a.sent()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 5:
                    if (!completed) return [3 /*break*/, 7];
                    return [4 /*yield*/, __await(void 0)];
                case 6: return [2 /*return*/, _a.sent()];
                case 7:
                    if (!hasError) return [3 /*break*/, 8];
                    throw error;
                case 8:
                    d = new deferred_1.Deferred();
                    deferreds.push(d);
                    return [4 /*yield*/, __await(d.promise)];
                case 9:
                    result = _a.sent();
                    if (!result.done) return [3 /*break*/, 11];
                    return [4 /*yield*/, __await(void 0)];
                case 10: return [2 /*return*/, _a.sent()];
                case 11: return [4 /*yield*/, __await(result.value)];
                case 12: return [4 /*yield*/, _a.sent()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14: return [3 /*break*/, 2];
                case 15: return [3 /*break*/, 18];
                case 16:
                    err_1 = _a.sent();
                    throw err_1;
                case 17:
                    subs.unsubscribe();
                    return [7 /*endfinally*/];
                case 18: return [2 /*return*/];
            }
        });
    });
}
exports.eachValueFrom = eachValueFrom;
/**
 * Will subscribe to the `source` observable provided
 * and build the emitted values up in a buffer. Allowing
 * `for await..of` loops to iterate and get the buffer
 * on each loop.
 *
 * This is a lossless subscription method. No value
 * will be missed or duplicated.
 *
 * Example usage:
 *
 * ```ts
 * async function test() {
 *   const source$ = getSomeObservable();
 *
 *   for await(const buffer of bufferedValuesFrom(source$)) {
 *     for (const value of buffer) {
 *       console.log(value);
 *     }
 *   }
 * }
 * ```
 *
 * @param source the Observable source to await values from
 */
function bufferedValuesFrom(source) {
    return __asyncGenerator(this, arguments, function bufferedValuesFrom_1() {
        var deferred, buffer, hasError, error, completed, subs, bufferCopy, result, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deferred = null;
                    buffer = [];
                    hasError = false;
                    error = null;
                    completed = false;
                    subs = source.subscribe({
                        next: function (value) {
                            if (deferred) {
                                deferred.resolve(RESOLVED.then(function () {
                                    var bufferCopy = buffer.slice();
                                    buffer.length = 0;
                                    return { value: bufferCopy, done: false };
                                }));
                                deferred = null;
                            }
                            buffer.push(value);
                        },
                        error: function (err) {
                            hasError = true;
                            error = err;
                            if (deferred) {
                                deferred.reject(err);
                                deferred = null;
                            }
                        },
                        complete: function () {
                            completed = true;
                            if (deferred) {
                                deferred.resolve({ value: undefined, done: true });
                                deferred = null;
                            }
                        },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 16, 17, 18]);
                    _a.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 15];
                    if (!(buffer.length > 0)) return [3 /*break*/, 5];
                    bufferCopy = buffer.slice();
                    buffer.length = 0;
                    return [4 /*yield*/, __await(bufferCopy)];
                case 3: return [4 /*yield*/, _a.sent()];
                case 4:
                    _a.sent();
                    return [3 /*break*/, 14];
                case 5:
                    if (!completed) return [3 /*break*/, 7];
                    return [4 /*yield*/, __await(void 0)];
                case 6: return [2 /*return*/, _a.sent()];
                case 7:
                    if (!hasError) return [3 /*break*/, 8];
                    throw error;
                case 8:
                    deferred = new deferred_1.Deferred();
                    return [4 /*yield*/, __await(deferred.promise)];
                case 9:
                    result = _a.sent();
                    if (!result.done) return [3 /*break*/, 11];
                    return [4 /*yield*/, __await(void 0)];
                case 10: return [2 /*return*/, _a.sent()];
                case 11: return [4 /*yield*/, __await(result.value)];
                case 12: return [4 /*yield*/, _a.sent()];
                case 13:
                    _a.sent();
                    _a.label = 14;
                case 14: return [3 /*break*/, 2];
                case 15: return [3 /*break*/, 18];
                case 16:
                    err_2 = _a.sent();
                    throw err_2;
                case 17:
                    subs.unsubscribe();
                    return [7 /*endfinally*/];
                case 18: return [2 /*return*/];
            }
        });
    });
}
exports.bufferedValuesFrom = bufferedValuesFrom;
/**
 * Will subscribe to the provided `source` observable,
 * allowing `for await..of` loops to iterate and get the
 * most recent value that was emitted. Will not iterate out
 * the same emission twice.
 *
 * This is a lossy subscription method. Do not use if
 * every value is important.
 *
 * Example usage:
 *
 * ```ts
 * async function test() {
 *   const source$ = getSomeObservable();
 *
 *   for await(const value of latestValueFrom(source$)) {
 *     console.log(value);
 *   }
 * }
 * ```
 *
 * @param source the Observable source to await values from
 */
function latestValueFrom(source) {
    return __asyncGenerator(this, arguments, function latestValueFrom_1() {
        var deferred, latestValue, hasLatestValue, hasError, error, completed, subs, value, result, err_3;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deferred = undefined;
                    hasLatestValue = false;
                    hasError = false;
                    error = null;
                    completed = false;
                    subs = source.subscribe({
                        next: function (value) {
                            hasLatestValue = true;
                            latestValue = value;
                            if (deferred) {
                                deferred.resolve(RESOLVED.then(function () {
                                    hasLatestValue = false;
                                    return { value: latestValue, done: false };
                                }));
                            }
                        },
                        error: function (err) {
                            hasError = true;
                            error = err;
                            if (deferred) {
                                deferred.reject(err);
                            }
                        },
                        complete: function () {
                            completed = true;
                            if (deferred) {
                                hasLatestValue = false;
                                deferred.resolve({ value: undefined, done: true });
                            }
                        },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 17, 18, 19]);
                    _a.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 16];
                    if (!hasLatestValue) return [3 /*break*/, 6];
                    return [4 /*yield*/, __await(RESOLVED)];
                case 3:
                    _a.sent();
                    value = latestValue;
                    hasLatestValue = false;
                    return [4 /*yield*/, __await(value)];
                case 4: return [4 /*yield*/, _a.sent()];
                case 5:
                    _a.sent();
                    return [3 /*break*/, 15];
                case 6:
                    if (!completed) return [3 /*break*/, 8];
                    return [4 /*yield*/, __await(void 0)];
                case 7: return [2 /*return*/, _a.sent()];
                case 8:
                    if (!hasError) return [3 /*break*/, 9];
                    throw error;
                case 9:
                    deferred = new deferred_1.Deferred();
                    return [4 /*yield*/, __await(deferred.promise)];
                case 10:
                    result = _a.sent();
                    if (!result.done) return [3 /*break*/, 12];
                    return [4 /*yield*/, __await(void 0)];
                case 11: return [2 /*return*/, _a.sent()];
                case 12: return [4 /*yield*/, __await(result.value)];
                case 13: return [4 /*yield*/, _a.sent()];
                case 14:
                    _a.sent();
                    _a.label = 15;
                case 15: return [3 /*break*/, 2];
                case 16: return [3 /*break*/, 19];
                case 17:
                    err_3 = _a.sent();
                    throw err_3;
                case 18:
                    subs.unsubscribe();
                    return [7 /*endfinally*/];
                case 19: return [2 /*return*/];
            }
        });
    });
}
exports.latestValueFrom = latestValueFrom;
/**
 * Subscribes to the provided `source` observable and allows
 * `for await..of` loops to iterate over it, such that
 * all values are dropped until the iteration occurs, then
 * the very next value that arrives is provided to the
 * `for await` loop.
 *
 * This is a lossy subscription method. Do not use if
 * every value is important.
 *
 * Example usage:
 *
 * ```ts
 * async function test() {
 *   const source$ = getSomeObservable();
 *
 *   for await(const value of nextValueFrom(source$)) {
 *     console.log(value);
 *   }
 * }
 * ```
 *
 * @param source the Observable source to await values from
 */
function nextValueFrom(source) {
    return __asyncGenerator(this, arguments, function nextValueFrom_1() {
        var deferred, hasError, error, completed, subs, result, err_4;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    deferred = undefined;
                    hasError = false;
                    error = null;
                    completed = false;
                    subs = source.subscribe({
                        next: function (value) {
                            if (deferred) {
                                deferred.resolve({ value: value, done: false });
                            }
                        },
                        error: function (err) {
                            hasError = true;
                            error = err;
                            if (deferred) {
                                deferred.reject(err);
                            }
                        },
                        complete: function () {
                            completed = true;
                            if (deferred) {
                                deferred.resolve({ value: undefined, done: true });
                            }
                        },
                    });
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 13, 14, 15]);
                    _a.label = 2;
                case 2:
                    if (!true) return [3 /*break*/, 12];
                    if (!completed) return [3 /*break*/, 4];
                    return [4 /*yield*/, __await(void 0)];
                case 3: return [2 /*return*/, _a.sent()];
                case 4:
                    if (!hasError) return [3 /*break*/, 5];
                    throw error;
                case 5:
                    deferred = new deferred_1.Deferred();
                    return [4 /*yield*/, __await(deferred.promise)];
                case 6:
                    result = _a.sent();
                    if (!result.done) return [3 /*break*/, 8];
                    return [4 /*yield*/, __await(void 0)];
                case 7: return [2 /*return*/, _a.sent()];
                case 8: return [4 /*yield*/, __await(result.value)];
                case 9: return [4 /*yield*/, _a.sent()];
                case 10:
                    _a.sent();
                    _a.label = 11;
                case 11: return [3 /*break*/, 2];
                case 12: return [3 /*break*/, 15];
                case 13:
                    err_4 = _a.sent();
                    throw err_4;
                case 14:
                    subs.unsubscribe();
                    return [7 /*endfinally*/];
                case 15: return [2 /*return*/];
            }
        });
    });
}
exports.nextValueFrom = nextValueFrom;
//# sourceMappingURL=index.js.map
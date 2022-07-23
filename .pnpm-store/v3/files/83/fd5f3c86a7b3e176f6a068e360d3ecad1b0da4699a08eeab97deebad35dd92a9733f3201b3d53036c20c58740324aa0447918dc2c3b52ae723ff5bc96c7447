"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
var __asyncValues = (this && this.__asyncValues) || function (o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
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
var rxjs_1 = require("rxjs");
var __1 = require("..");
var operators_1 = require("rxjs/operators");
describe('eachValueFrom', function () {
    test('should work for sync observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_1_1;
        var e_1, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.of(1, 2, 3);
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.eachValueFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_1_1 = _d.sent();
                    e_1 = { error: e_1_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_1) throw e_1.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    expect(results).toEqual([1, 2, 3]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('should throw if the observable errors', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, error, _a, _b, _, e_2_1, err_1;
        var e_2, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.throwError(new Error('bad'));
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 14, , 15]);
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 13]);
                    _a = __asyncValues(__1.eachValueFrom(source));
                    _d.label = 3;
                case 3: return [4 /*yield*/, _a.next()];
                case 4:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    _ = _b.value;
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_2_1 = _d.sent();
                    e_2 = { error: e_2_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_2) throw e_2.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [3 /*break*/, 15];
                case 14:
                    err_1 = _d.sent();
                    error = err_1;
                    return [3 /*break*/, 15];
                case 15:
                    expect(error).toBeInstanceOf(Error);
                    expect(error.message).toBe('bad');
                    return [2 /*return*/];
            }
        });
    }); });
    test('should support async observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_3_1;
        var e_3, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.interval(1).pipe(operators_1.take(3));
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.eachValueFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_3_1 = _d.sent();
                    e_3 = { error: e_3_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_3) throw e_3.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    expect(results).toEqual([0, 1, 2]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('should do something clever if the loop exits', function () { return __awaiter(void 0, void 0, void 0, function () {
        var finalized, source, results, _a, _b, value, e_4_1, err_2;
        var e_4, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    finalized = false;
                    source = rxjs_1.interval(1).pipe(operators_1.take(10), operators_1.finalize(function () { return (finalized = true); }));
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 14, , 15]);
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 13]);
                    _a = __asyncValues(__1.eachValueFrom(source));
                    _d.label = 3;
                case 3: return [4 /*yield*/, _a.next()];
                case 4:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    value = _b.value;
                    results.push(value);
                    if (value === 1) {
                        throw new Error('bad');
                    }
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_4_1 = _d.sent();
                    e_4 = { error: e_4_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_4) throw e_4.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [3 /*break*/, 15];
                case 14:
                    err_2 = _d.sent();
                    return [3 /*break*/, 15];
                case 15:
                    expect(results).toEqual([0, 1]);
                    expect(finalized).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    test('a more advanced test', function () { return __awaiter(void 0, void 0, void 0, function () {
        function executeTest() {
            var e_5, _a;
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, value, e_5_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 6, 7, 12]);
                            _b = __asyncValues(__1.eachValueFrom(source));
                            _d.label = 1;
                        case 1: return [4 /*yield*/, _b.next()];
                        case 2:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 5];
                            value = _c.value;
                            results.push(value);
                            return [4 /*yield*/, advancer];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4: return [3 /*break*/, 1];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_5_1 = _d.sent();
                            e_5 = { error: e_5_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _d.trys.push([7, , 10, 11]);
                            if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _a.call(_b)];
                        case 8:
                            _d.sent();
                            _d.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_5) throw e_5.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12: return [2 /*return*/];
                    }
                });
            });
        }
        var results, source, advancer, complete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    source = new rxjs_1.Subject();
                    advancer = createAdvancer();
                    complete = executeTest();
                    source.next(0);
                    source.next(1);
                    source.next(2);
                    return [4 /*yield*/, advancer.next()];
                case 1:
                    _a.sent();
                    // A loop was waiting by the time 0 was sent, so it
                    // will resolve, then the advancer causes it to loop
                    // again.
                    expect(results).toEqual([0, 1]);
                    return [4 /*yield*/, advancer.next()];
                case 2:
                    _a.sent();
                    expect(results).toEqual([0, 1, 2]);
                    // Nothing arrived, start the loop waiting again.
                    return [4 /*yield*/, advancer.next()];
                case 3:
                    // Nothing arrived, start the loop waiting again.
                    _a.sent();
                    expect(results).toEqual([0, 1, 2]);
                    source.next(3);
                    source.next(4);
                    source.next(5);
                    return [4 /*yield*/, advancer.next()];
                case 4:
                    _a.sent();
                    // We were waiting for 3 already, so that was resolved,
                    // then the advancer caused the loop back around to
                    // get 4
                    expect(results).toEqual([0, 1, 2, 3, 4]);
                    return [4 /*yield*/, advancer.next()];
                case 5:
                    _a.sent();
                    expect(results).toEqual([0, 1, 2, 3, 4, 5]);
                    // end the loop
                    source.complete();
                    return [4 /*yield*/, complete];
                case 6:
                    _a.sent();
                    expect(results).toEqual([0, 1, 2, 3, 4, 5]);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('bufferedValuesFrom', function () {
    test('should work for sync observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_6_1;
        var e_6, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.of(1, 2, 3);
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.bufferedValuesFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_6_1 = _d.sent();
                    e_6 = { error: e_6_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_6) throw e_6.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    expect(results).toEqual([[1, 2, 3]]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('should throw if the observable errors', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, error, _a, _b, _, e_7_1, err_3;
        var e_7, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.throwError(new Error('bad'));
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 14, , 15]);
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 13]);
                    _a = __asyncValues(__1.bufferedValuesFrom(source));
                    _d.label = 3;
                case 3: return [4 /*yield*/, _a.next()];
                case 4:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    _ = _b.value;
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_7_1 = _d.sent();
                    e_7 = { error: e_7_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_7) throw e_7.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [3 /*break*/, 15];
                case 14:
                    err_3 = _d.sent();
                    error = err_3;
                    return [3 /*break*/, 15];
                case 15:
                    expect(error).toBeInstanceOf(Error);
                    expect(error.message).toBe('bad');
                    return [2 /*return*/];
            }
        });
    }); });
    test('should support async observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_8_1;
        var e_8, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.interval(1).pipe(operators_1.take(3));
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.bufferedValuesFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_8_1 = _d.sent();
                    e_8 = { error: e_8_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_8) throw e_8.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    expect(results).toEqual([[0], [1], [2]]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('should do something clever if the loop exits', function () { return __awaiter(void 0, void 0, void 0, function () {
        var finalized, source, results, _a, _b, value, e_9_1, err_4;
        var e_9, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    finalized = false;
                    source = rxjs_1.interval(1).pipe(operators_1.take(10), operators_1.finalize(function () { return (finalized = true); }));
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 14, , 15]);
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 13]);
                    _a = __asyncValues(__1.bufferedValuesFrom(source));
                    _d.label = 3;
                case 3: return [4 /*yield*/, _a.next()];
                case 4:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    value = _b.value;
                    results.push(value);
                    if (value[0] === 1) {
                        throw new Error('bad');
                    }
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_9_1 = _d.sent();
                    e_9 = { error: e_9_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_9) throw e_9.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [3 /*break*/, 15];
                case 14:
                    err_4 = _d.sent();
                    return [3 /*break*/, 15];
                case 15:
                    expect(results).toEqual([[0], [1]]);
                    expect(finalized).toBe(true);
                    return [2 /*return*/];
            }
        });
    }); });
    test('a more in-depth test', function () { return __awaiter(void 0, void 0, void 0, function () {
        function executeTest() {
            var e_10, _a;
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, buffer, e_10_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 6, 7, 12]);
                            _b = __asyncValues(__1.bufferedValuesFrom(source));
                            _d.label = 1;
                        case 1: return [4 /*yield*/, _b.next()];
                        case 2:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 5];
                            buffer = _c.value;
                            results.push(buffer);
                            return [4 /*yield*/, advancer];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4: return [3 /*break*/, 1];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_10_1 = _d.sent();
                            e_10 = { error: e_10_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _d.trys.push([7, , 10, 11]);
                            if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _a.call(_b)];
                        case 8:
                            _d.sent();
                            _d.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_10) throw e_10.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12: return [2 /*return*/];
                    }
                });
            });
        }
        var results, source, advancer, complete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    source = new rxjs_1.Subject();
                    advancer = createAdvancer();
                    complete = executeTest();
                    source.next(0);
                    source.next(1);
                    source.next(2);
                    return [4 /*yield*/, advancer.next()];
                case 1:
                    _a.sent();
                    expect(results).toEqual([[0, 1, 2]]);
                    // Next batch
                    source.next(3);
                    source.next(4);
                    return [4 /*yield*/, advancer.next()];
                case 2:
                    _a.sent();
                    expect(results).toEqual([[0, 1, 2], [3, 4]]);
                    // end the loop
                    source.complete();
                    return [4 /*yield*/, complete];
                case 3:
                    _a.sent();
                    expect(results).toEqual([[0, 1, 2], [3, 4]]);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('latestValueFrom', function () {
    test('should work for sync observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_11_1;
        var e_11, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.of(1, 2, 3);
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.latestValueFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_11_1 = _d.sent();
                    e_11 = { error: e_11_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_11) throw e_11.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    expect(results).toEqual([3]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('should throw if the observable errors', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, error, _a, _b, _, e_12_1, err_5;
        var e_12, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.throwError(new Error('bad'));
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 14, , 15]);
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 13]);
                    _a = __asyncValues(__1.latestValueFrom(source));
                    _d.label = 3;
                case 3: return [4 /*yield*/, _a.next()];
                case 4:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    _ = _b.value;
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_12_1 = _d.sent();
                    e_12 = { error: e_12_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_12) throw e_12.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [3 /*break*/, 15];
                case 14:
                    err_5 = _d.sent();
                    error = err_5;
                    return [3 /*break*/, 15];
                case 15:
                    expect(error).toBeInstanceOf(Error);
                    expect(error.message).toBe('bad');
                    return [2 /*return*/];
            }
        });
    }); });
    test('should support async observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_13_1;
        var e_13, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.interval(1).pipe(operators_1.take(3));
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.latestValueFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_13_1 = _d.sent();
                    e_13 = { error: e_13_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_13) throw e_13.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    expect(results).toEqual([0, 1, 2]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('a more in-depth test', function () { return __awaiter(void 0, void 0, void 0, function () {
        function executeTest() {
            var e_14, _a;
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, buffer, e_14_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 6, 7, 12]);
                            _b = __asyncValues(__1.latestValueFrom(source));
                            _d.label = 1;
                        case 1: return [4 /*yield*/, _b.next()];
                        case 2:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 5];
                            buffer = _c.value;
                            results.push(buffer);
                            return [4 /*yield*/, advancer];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4: return [3 /*break*/, 1];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_14_1 = _d.sent();
                            e_14 = { error: e_14_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _d.trys.push([7, , 10, 11]);
                            if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _a.call(_b)];
                        case 8:
                            _d.sent();
                            _d.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_14) throw e_14.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12: return [2 /*return*/];
                    }
                });
            });
        }
        var results, source, advancer, complete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    source = new rxjs_1.Subject();
                    advancer = createAdvancer();
                    complete = executeTest();
                    source.next(0);
                    source.next(1);
                    source.next(2);
                    return [4 /*yield*/, advancer.next()];
                case 1:
                    _a.sent();
                    expect(results).toEqual([2]);
                    // Next batch
                    source.next(3);
                    source.next(4);
                    return [4 /*yield*/, advancer.next()];
                case 2:
                    _a.sent();
                    expect(results).toEqual([2, 4]);
                    source.next(5);
                    source.next(6);
                    // end the loop
                    source.complete();
                    return [4 /*yield*/, complete];
                case 3:
                    _a.sent();
                    expect(results).toEqual([2, 4, 6]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('a more in-depth with early exit', function () { return __awaiter(void 0, void 0, void 0, function () {
        function executeTest() {
            var e_15, _a;
            return __awaiter(this, void 0, void 0, function () {
                var i, _b, _c, buffer, e_15_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            i = 0;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 7, 8, 13]);
                            _b = __asyncValues(__1.latestValueFrom(source));
                            _d.label = 2;
                        case 2: return [4 /*yield*/, _b.next()];
                        case 3:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 6];
                            buffer = _c.value;
                            if (i++ === 2) {
                                // cause an early exit here.
                                return [2 /*return*/];
                            }
                            results.push(buffer);
                            return [4 /*yield*/, advancer];
                        case 4:
                            _d.sent();
                            _d.label = 5;
                        case 5: return [3 /*break*/, 2];
                        case 6: return [3 /*break*/, 13];
                        case 7:
                            e_15_1 = _d.sent();
                            e_15 = { error: e_15_1 };
                            return [3 /*break*/, 13];
                        case 8:
                            _d.trys.push([8, , 11, 12]);
                            if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 10];
                            return [4 /*yield*/, _a.call(_b)];
                        case 9:
                            _d.sent();
                            _d.label = 10;
                        case 10: return [3 /*break*/, 12];
                        case 11:
                            if (e_15) throw e_15.error;
                            return [7 /*endfinally*/];
                        case 12: return [7 /*endfinally*/];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        }
        var results, source, advancer, complete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    source = new rxjs_1.Subject();
                    advancer = createAdvancer();
                    complete = executeTest();
                    source.next(0);
                    source.next(1);
                    source.next(2);
                    return [4 /*yield*/, advancer.next()];
                case 1:
                    _a.sent();
                    expect(results).toEqual([2]);
                    // Next batch
                    source.next(3);
                    source.next(4);
                    return [4 /*yield*/, advancer.next()];
                case 2:
                    _a.sent(); // exit
                    expect(results).toEqual([2, 4]);
                    // loop would have already exited here.
                    source.next(5);
                    source.next(6);
                    return [4 /*yield*/, advancer.next()];
                case 3:
                    _a.sent();
                    expect(results).toEqual([2, 4]);
                    return [4 /*yield*/, complete];
                case 4:
                    _a.sent();
                    expect(results).toEqual([2, 4]);
                    return [2 /*return*/];
            }
        });
    }); });
});
describe('nextValueFrom', function () {
    test('should work for sync observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_16_1;
        var e_16, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.of(1, 2, 3);
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.nextValueFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_16_1 = _d.sent();
                    e_16 = { error: e_16_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_16) throw e_16.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    // sync observable would have already completed.
                    expect(results).toEqual([]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('should throw if the observable errors', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, error, _a, _b, _, e_17_1, err_6;
        var e_17, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.throwError(new Error('bad'));
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 14, , 15]);
                    _d.label = 2;
                case 2:
                    _d.trys.push([2, 7, 8, 13]);
                    _a = __asyncValues(__1.nextValueFrom(source));
                    _d.label = 3;
                case 3: return [4 /*yield*/, _a.next()];
                case 4:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 6];
                    _ = _b.value;
                    _d.label = 5;
                case 5: return [3 /*break*/, 3];
                case 6: return [3 /*break*/, 13];
                case 7:
                    e_17_1 = _d.sent();
                    e_17 = { error: e_17_1 };
                    return [3 /*break*/, 13];
                case 8:
                    _d.trys.push([8, , 11, 12]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 10];
                    return [4 /*yield*/, _c.call(_a)];
                case 9:
                    _d.sent();
                    _d.label = 10;
                case 10: return [3 /*break*/, 12];
                case 11:
                    if (e_17) throw e_17.error;
                    return [7 /*endfinally*/];
                case 12: return [7 /*endfinally*/];
                case 13: return [3 /*break*/, 15];
                case 14:
                    err_6 = _d.sent();
                    error = err_6;
                    return [3 /*break*/, 15];
                case 15:
                    expect(error).toBeInstanceOf(Error);
                    expect(error.message).toBe('bad');
                    return [2 /*return*/];
            }
        });
    }); });
    test('should support async observables', function () { return __awaiter(void 0, void 0, void 0, function () {
        var source, results, _a, _b, value, e_18_1;
        var e_18, _c;
        return __generator(this, function (_d) {
            switch (_d.label) {
                case 0:
                    source = rxjs_1.interval(1).pipe(operators_1.take(3));
                    results = [];
                    _d.label = 1;
                case 1:
                    _d.trys.push([1, 6, 7, 12]);
                    _a = __asyncValues(__1.nextValueFrom(source));
                    _d.label = 2;
                case 2: return [4 /*yield*/, _a.next()];
                case 3:
                    if (!(_b = _d.sent(), !_b.done)) return [3 /*break*/, 5];
                    value = _b.value;
                    results.push(value);
                    _d.label = 4;
                case 4: return [3 /*break*/, 2];
                case 5: return [3 /*break*/, 12];
                case 6:
                    e_18_1 = _d.sent();
                    e_18 = { error: e_18_1 };
                    return [3 /*break*/, 12];
                case 7:
                    _d.trys.push([7, , 10, 11]);
                    if (!(_b && !_b.done && (_c = _a.return))) return [3 /*break*/, 9];
                    return [4 /*yield*/, _c.call(_a)];
                case 8:
                    _d.sent();
                    _d.label = 9;
                case 9: return [3 /*break*/, 11];
                case 10:
                    if (e_18) throw e_18.error;
                    return [7 /*endfinally*/];
                case 11: return [7 /*endfinally*/];
                case 12:
                    expect(results).toEqual([0, 1, 2]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('a more in-depth test', function () { return __awaiter(void 0, void 0, void 0, function () {
        function executeTest() {
            var e_19, _a;
            return __awaiter(this, void 0, void 0, function () {
                var _b, _c, buffer, e_19_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            _d.trys.push([0, 6, 7, 12]);
                            _b = __asyncValues(__1.nextValueFrom(source));
                            _d.label = 1;
                        case 1: return [4 /*yield*/, _b.next()];
                        case 2:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 5];
                            buffer = _c.value;
                            results.push(buffer);
                            return [4 /*yield*/, advancer];
                        case 3:
                            _d.sent();
                            _d.label = 4;
                        case 4: return [3 /*break*/, 1];
                        case 5: return [3 /*break*/, 12];
                        case 6:
                            e_19_1 = _d.sent();
                            e_19 = { error: e_19_1 };
                            return [3 /*break*/, 12];
                        case 7:
                            _d.trys.push([7, , 10, 11]);
                            if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 9];
                            return [4 /*yield*/, _a.call(_b)];
                        case 8:
                            _d.sent();
                            _d.label = 9;
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            if (e_19) throw e_19.error;
                            return [7 /*endfinally*/];
                        case 11: return [7 /*endfinally*/];
                        case 12: return [2 /*return*/];
                    }
                });
            });
        }
        var results, source, advancer, complete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    source = new rxjs_1.Subject();
                    advancer = createAdvancer();
                    complete = executeTest();
                    source.next(0);
                    source.next(1);
                    source.next(2);
                    return [4 /*yield*/, advancer.next()];
                case 1:
                    _a.sent();
                    expect(results).toEqual([0]);
                    // Next batch
                    source.next(3);
                    source.next(4);
                    return [4 /*yield*/, advancer.next()];
                case 2:
                    _a.sent();
                    expect(results).toEqual([0, 3]);
                    source.next(5);
                    source.next(6);
                    // end the loop
                    source.complete();
                    return [4 /*yield*/, complete];
                case 3:
                    _a.sent();
                    expect(results).toEqual([0, 3, 5]);
                    return [2 /*return*/];
            }
        });
    }); });
    test('a more in-depth with early exit', function () { return __awaiter(void 0, void 0, void 0, function () {
        function executeTest() {
            var e_20, _a;
            return __awaiter(this, void 0, void 0, function () {
                var i, _b, _c, buffer, e_20_1;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0:
                            i = 0;
                            _d.label = 1;
                        case 1:
                            _d.trys.push([1, 7, 8, 13]);
                            _b = __asyncValues(__1.nextValueFrom(source));
                            _d.label = 2;
                        case 2: return [4 /*yield*/, _b.next()];
                        case 3:
                            if (!(_c = _d.sent(), !_c.done)) return [3 /*break*/, 6];
                            buffer = _c.value;
                            if (i++ === 2) {
                                // cause an early exit here.
                                return [2 /*return*/];
                            }
                            results.push(buffer);
                            return [4 /*yield*/, advancer];
                        case 4:
                            _d.sent();
                            _d.label = 5;
                        case 5: return [3 /*break*/, 2];
                        case 6: return [3 /*break*/, 13];
                        case 7:
                            e_20_1 = _d.sent();
                            e_20 = { error: e_20_1 };
                            return [3 /*break*/, 13];
                        case 8:
                            _d.trys.push([8, , 11, 12]);
                            if (!(_c && !_c.done && (_a = _b.return))) return [3 /*break*/, 10];
                            return [4 /*yield*/, _a.call(_b)];
                        case 9:
                            _d.sent();
                            _d.label = 10;
                        case 10: return [3 /*break*/, 12];
                        case 11:
                            if (e_20) throw e_20.error;
                            return [7 /*endfinally*/];
                        case 12: return [7 /*endfinally*/];
                        case 13: return [2 /*return*/];
                    }
                });
            });
        }
        var results, source, advancer, complete;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    results = [];
                    source = new rxjs_1.Subject();
                    advancer = createAdvancer();
                    complete = executeTest();
                    source.next(0);
                    source.next(1);
                    source.next(2);
                    return [4 /*yield*/, advancer.next()];
                case 1:
                    _a.sent();
                    expect(results).toEqual([0]);
                    // Next batch
                    source.next(3);
                    source.next(4);
                    return [4 /*yield*/, advancer.next()];
                case 2:
                    _a.sent(); // exit
                    expect(results).toEqual([0, 3]);
                    // loop would have already exited here.
                    source.next(5);
                    source.next(6);
                    return [4 /*yield*/, advancer.next()];
                case 3:
                    _a.sent();
                    expect(results).toEqual([0, 3]);
                    return [4 /*yield*/, complete];
                case 4:
                    _a.sent();
                    expect(results).toEqual([0, 3]);
                    return [2 /*return*/];
            }
        });
    }); });
});
/**
 * A little trick to get the test to manually advance from
 * one test to the next.
 */
function createAdvancer() {
    var _this = this;
    var factory = function () {
        return __asyncGenerator(this, arguments, function () {
            var prev;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        if (!true) return [3 /*break*/, 3];
                        return [4 /*yield*/, __await(prev)];
                    case 1: return [4 /*yield*/, _a.sent()];
                    case 2:
                        prev = _a.sent();
                        return [3 /*break*/, 0];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    var advancer = factory();
    // prime it
    advancer.next();
    var _next = advancer.next.bind(advancer);
    advancer.next = function () { return __awaiter(_this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            return [2 /*return*/, _next().then(function (x) { return Promise.resolve(x); })];
        });
    }); };
    return advancer;
}
//# sourceMappingURL=index.spec.js.map
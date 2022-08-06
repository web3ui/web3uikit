import { __asyncGenerator, __asyncValues, __await, __awaiter } from "tslib";
import { of, throwError, interval, Subject } from 'rxjs';
import { eachValueFrom, bufferedValuesFrom, latestValueFrom, nextValueFrom } from '..';
import { take, finalize } from 'rxjs/operators';
describe('eachValueFrom', () => {
    test('should work for sync observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_1, _a;
        const source = of(1, 2, 3);
        const results = [];
        try {
            for (var _b = __asyncValues(eachValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                const value = _c.value;
                results.push(value);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
        expect(results).toEqual([1, 2, 3]);
    }));
    test('should throw if the observable errors', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_2, _d;
        const source = throwError(new Error('bad'));
        let error;
        try {
            try {
                for (var _e = __asyncValues(eachValueFrom(source)), _f; _f = yield _e.next(), !_f.done;) {
                    const _ = _f.value;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) yield _d.call(_e);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        catch (err) {
            error = err;
        }
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('bad');
    }));
    test('should support async observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_3, _g;
        const source = interval(1).pipe(take(3));
        const results = [];
        try {
            for (var _h = __asyncValues(eachValueFrom(source)), _j; _j = yield _h.next(), !_j.done;) {
                const value = _j.value;
                results.push(value);
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_g = _h.return)) yield _g.call(_h);
            }
            finally { if (e_3) throw e_3.error; }
        }
        expect(results).toEqual([0, 1, 2]);
    }));
    test('should do something clever if the loop exits', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_4, _k;
        let finalized = false;
        const source = interval(1).pipe(take(10), finalize(() => (finalized = true)));
        const results = [];
        try {
            try {
                for (var _l = __asyncValues(eachValueFrom(source)), _m; _m = yield _l.next(), !_m.done;) {
                    const value = _m.value;
                    results.push(value);
                    if (value === 1) {
                        throw new Error('bad');
                    }
                }
            }
            catch (e_4_1) { e_4 = { error: e_4_1 }; }
            finally {
                try {
                    if (_m && !_m.done && (_k = _l.return)) yield _k.call(_l);
                }
                finally { if (e_4) throw e_4.error; }
            }
        }
        catch (err) {
            // ignore
        }
        expect(results).toEqual([0, 1]);
        expect(finalized).toBe(true);
    }));
    test('a more advanced test', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = [];
        const source = new Subject();
        const advancer = createAdvancer();
        function executeTest() {
            var e_5, _a;
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    for (var _b = __asyncValues(eachValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                        const value = _c.value;
                        results.push(value);
                        yield advancer;
                    }
                }
                catch (e_5_1) { e_5 = { error: e_5_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_5) throw e_5.error; }
                }
            });
        }
        const complete = executeTest();
        source.next(0);
        source.next(1);
        source.next(2);
        yield advancer.next();
        // A loop was waiting by the time 0 was sent, so it
        // will resolve, then the advancer causes it to loop
        // again.
        expect(results).toEqual([0, 1]);
        yield advancer.next();
        expect(results).toEqual([0, 1, 2]);
        // Nothing arrived, start the loop waiting again.
        yield advancer.next();
        expect(results).toEqual([0, 1, 2]);
        source.next(3);
        source.next(4);
        source.next(5);
        yield advancer.next();
        // We were waiting for 3 already, so that was resolved,
        // then the advancer caused the loop back around to
        // get 4
        expect(results).toEqual([0, 1, 2, 3, 4]);
        yield advancer.next();
        expect(results).toEqual([0, 1, 2, 3, 4, 5]);
        // end the loop
        source.complete();
        yield complete;
        expect(results).toEqual([0, 1, 2, 3, 4, 5]);
    }));
});
describe('bufferedValuesFrom', () => {
    test('should work for sync observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_6, _a;
        const source = of(1, 2, 3);
        const results = [];
        try {
            for (var _b = __asyncValues(bufferedValuesFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                const value = _c.value;
                results.push(value);
            }
        }
        catch (e_6_1) { e_6 = { error: e_6_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_6) throw e_6.error; }
        }
        expect(results).toEqual([[1, 2, 3]]);
    }));
    test('should throw if the observable errors', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_7, _d;
        const source = throwError(new Error('bad'));
        let error;
        try {
            try {
                for (var _e = __asyncValues(bufferedValuesFrom(source)), _f; _f = yield _e.next(), !_f.done;) {
                    const _ = _f.value;
                }
            }
            catch (e_7_1) { e_7 = { error: e_7_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) yield _d.call(_e);
                }
                finally { if (e_7) throw e_7.error; }
            }
        }
        catch (err) {
            error = err;
        }
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('bad');
    }));
    test('should support async observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_8, _g;
        const source = interval(1).pipe(take(3));
        const results = [];
        try {
            for (var _h = __asyncValues(bufferedValuesFrom(source)), _j; _j = yield _h.next(), !_j.done;) {
                const value = _j.value;
                results.push(value);
            }
        }
        catch (e_8_1) { e_8 = { error: e_8_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_g = _h.return)) yield _g.call(_h);
            }
            finally { if (e_8) throw e_8.error; }
        }
        expect(results).toEqual([[0], [1], [2]]);
    }));
    test('should do something clever if the loop exits', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_9, _k;
        let finalized = false;
        const source = interval(1).pipe(take(10), finalize(() => (finalized = true)));
        const results = [];
        try {
            try {
                for (var _l = __asyncValues(bufferedValuesFrom(source)), _m; _m = yield _l.next(), !_m.done;) {
                    const value = _m.value;
                    results.push(value);
                    if (value[0] === 1) {
                        throw new Error('bad');
                    }
                }
            }
            catch (e_9_1) { e_9 = { error: e_9_1 }; }
            finally {
                try {
                    if (_m && !_m.done && (_k = _l.return)) yield _k.call(_l);
                }
                finally { if (e_9) throw e_9.error; }
            }
        }
        catch (err) {
            // ignore
        }
        expect(results).toEqual([[0], [1]]);
        expect(finalized).toBe(true);
    }));
    test('a more in-depth test', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = [];
        const source = new Subject();
        const advancer = createAdvancer();
        function executeTest() {
            var e_10, _a;
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    for (var _b = __asyncValues(bufferedValuesFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                        let buffer = _c.value;
                        results.push(buffer);
                        yield advancer;
                    }
                }
                catch (e_10_1) { e_10 = { error: e_10_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_10) throw e_10.error; }
                }
            });
        }
        const complete = executeTest();
        source.next(0);
        source.next(1);
        source.next(2);
        yield advancer.next();
        expect(results).toEqual([[0, 1, 2]]);
        // Next batch
        source.next(3);
        source.next(4);
        yield advancer.next();
        expect(results).toEqual([[0, 1, 2], [3, 4]]);
        // end the loop
        source.complete();
        yield complete;
        expect(results).toEqual([[0, 1, 2], [3, 4]]);
    }));
});
describe('latestValueFrom', () => {
    test('should work for sync observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_11, _a;
        const source = of(1, 2, 3);
        const results = [];
        try {
            for (var _b = __asyncValues(latestValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                const value = _c.value;
                results.push(value);
            }
        }
        catch (e_11_1) { e_11 = { error: e_11_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_11) throw e_11.error; }
        }
        expect(results).toEqual([3]);
    }));
    test('should throw if the observable errors', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_12, _d;
        const source = throwError(new Error('bad'));
        let error;
        try {
            try {
                for (var _e = __asyncValues(latestValueFrom(source)), _f; _f = yield _e.next(), !_f.done;) {
                    const _ = _f.value;
                }
            }
            catch (e_12_1) { e_12 = { error: e_12_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) yield _d.call(_e);
                }
                finally { if (e_12) throw e_12.error; }
            }
        }
        catch (err) {
            error = err;
        }
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('bad');
    }));
    test('should support async observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_13, _g;
        const source = interval(1).pipe(take(3));
        const results = [];
        try {
            for (var _h = __asyncValues(latestValueFrom(source)), _j; _j = yield _h.next(), !_j.done;) {
                const value = _j.value;
                results.push(value);
            }
        }
        catch (e_13_1) { e_13 = { error: e_13_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_g = _h.return)) yield _g.call(_h);
            }
            finally { if (e_13) throw e_13.error; }
        }
        expect(results).toEqual([0, 1, 2]);
    }));
    test('a more in-depth test', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = [];
        const source = new Subject();
        const advancer = createAdvancer();
        function executeTest() {
            var e_14, _a;
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    for (var _b = __asyncValues(latestValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                        let buffer = _c.value;
                        results.push(buffer);
                        yield advancer;
                    }
                }
                catch (e_14_1) { e_14 = { error: e_14_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_14) throw e_14.error; }
                }
            });
        }
        const complete = executeTest();
        source.next(0);
        source.next(1);
        source.next(2);
        yield advancer.next();
        expect(results).toEqual([2]);
        // Next batch
        source.next(3);
        source.next(4);
        yield advancer.next();
        expect(results).toEqual([2, 4]);
        source.next(5);
        source.next(6);
        // end the loop
        source.complete();
        yield complete;
        expect(results).toEqual([2, 4, 6]);
    }));
    test('a more in-depth with early exit', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = [];
        const source = new Subject();
        const advancer = createAdvancer();
        function executeTest() {
            var e_15, _a;
            return __awaiter(this, void 0, void 0, function* () {
                let i = 0;
                try {
                    for (var _b = __asyncValues(latestValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                        let buffer = _c.value;
                        if (i++ === 2) {
                            // cause an early exit here.
                            return;
                        }
                        results.push(buffer);
                        yield advancer;
                    }
                }
                catch (e_15_1) { e_15 = { error: e_15_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_15) throw e_15.error; }
                }
            });
        }
        const complete = executeTest();
        source.next(0);
        source.next(1);
        source.next(2);
        yield advancer.next();
        expect(results).toEqual([2]);
        // Next batch
        source.next(3);
        source.next(4);
        yield advancer.next(); // exit
        expect(results).toEqual([2, 4]);
        // loop would have already exited here.
        source.next(5);
        source.next(6);
        yield advancer.next();
        expect(results).toEqual([2, 4]);
        yield complete;
        expect(results).toEqual([2, 4]);
    }));
});
describe('nextValueFrom', () => {
    test('should work for sync observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_16, _a;
        const source = of(1, 2, 3);
        const results = [];
        try {
            for (var _b = __asyncValues(nextValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                const value = _c.value;
                results.push(value);
            }
        }
        catch (e_16_1) { e_16 = { error: e_16_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
            }
            finally { if (e_16) throw e_16.error; }
        }
        // sync observable would have already completed.
        expect(results).toEqual([]);
    }));
    test('should throw if the observable errors', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_17, _d;
        const source = throwError(new Error('bad'));
        let error;
        try {
            try {
                for (var _e = __asyncValues(nextValueFrom(source)), _f; _f = yield _e.next(), !_f.done;) {
                    const _ = _f.value;
                }
            }
            catch (e_17_1) { e_17 = { error: e_17_1 }; }
            finally {
                try {
                    if (_f && !_f.done && (_d = _e.return)) yield _d.call(_e);
                }
                finally { if (e_17) throw e_17.error; }
            }
        }
        catch (err) {
            error = err;
        }
        expect(error).toBeInstanceOf(Error);
        expect(error.message).toBe('bad');
    }));
    test('should support async observables', () => __awaiter(void 0, void 0, void 0, function* () {
        var e_18, _g;
        const source = interval(1).pipe(take(3));
        const results = [];
        try {
            for (var _h = __asyncValues(nextValueFrom(source)), _j; _j = yield _h.next(), !_j.done;) {
                const value = _j.value;
                results.push(value);
            }
        }
        catch (e_18_1) { e_18 = { error: e_18_1 }; }
        finally {
            try {
                if (_j && !_j.done && (_g = _h.return)) yield _g.call(_h);
            }
            finally { if (e_18) throw e_18.error; }
        }
        expect(results).toEqual([0, 1, 2]);
    }));
    test('a more in-depth test', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = [];
        const source = new Subject();
        const advancer = createAdvancer();
        function executeTest() {
            var e_19, _a;
            return __awaiter(this, void 0, void 0, function* () {
                try {
                    for (var _b = __asyncValues(nextValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                        let buffer = _c.value;
                        results.push(buffer);
                        yield advancer;
                    }
                }
                catch (e_19_1) { e_19 = { error: e_19_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_19) throw e_19.error; }
                }
            });
        }
        const complete = executeTest();
        source.next(0);
        source.next(1);
        source.next(2);
        yield advancer.next();
        expect(results).toEqual([0]);
        // Next batch
        source.next(3);
        source.next(4);
        yield advancer.next();
        expect(results).toEqual([0, 3]);
        source.next(5);
        source.next(6);
        // end the loop
        source.complete();
        yield complete;
        expect(results).toEqual([0, 3, 5]);
    }));
    test('a more in-depth with early exit', () => __awaiter(void 0, void 0, void 0, function* () {
        const results = [];
        const source = new Subject();
        const advancer = createAdvancer();
        function executeTest() {
            var e_20, _a;
            return __awaiter(this, void 0, void 0, function* () {
                let i = 0;
                try {
                    for (var _b = __asyncValues(nextValueFrom(source)), _c; _c = yield _b.next(), !_c.done;) {
                        let buffer = _c.value;
                        if (i++ === 2) {
                            // cause an early exit here.
                            return;
                        }
                        results.push(buffer);
                        yield advancer;
                    }
                }
                catch (e_20_1) { e_20 = { error: e_20_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) yield _a.call(_b);
                    }
                    finally { if (e_20) throw e_20.error; }
                }
            });
        }
        const complete = executeTest();
        source.next(0);
        source.next(1);
        source.next(2);
        yield advancer.next();
        expect(results).toEqual([0]);
        // Next batch
        source.next(3);
        source.next(4);
        yield advancer.next(); // exit
        expect(results).toEqual([0, 3]);
        // loop would have already exited here.
        source.next(5);
        source.next(6);
        yield advancer.next();
        expect(results).toEqual([0, 3]);
        yield complete;
        expect(results).toEqual([0, 3]);
    }));
});
/**
 * A little trick to get the test to manually advance from
 * one test to the next.
 */
function createAdvancer() {
    const factory = function () {
        return __asyncGenerator(this, arguments, function* () {
            let prev;
            while (true) {
                prev = yield yield __await(prev);
            }
        });
    };
    const advancer = factory();
    // prime it
    advancer.next();
    const _next = advancer.next.bind(advancer);
    advancer.next = () => __awaiter(this, void 0, void 0, function* () {
        return _next().then(x => Promise.resolve(x));
    });
    return advancer;
}
//# sourceMappingURL=index.spec.js.map
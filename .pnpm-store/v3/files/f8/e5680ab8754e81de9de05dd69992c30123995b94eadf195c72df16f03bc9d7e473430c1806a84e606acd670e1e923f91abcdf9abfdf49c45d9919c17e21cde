"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var errors_1 = require("./errors");
var Semaphore = /** @class */ (function () {
    function Semaphore(_maxConcurrency, _cancelError) {
        if (_cancelError === void 0) { _cancelError = errors_1.E_CANCELED; }
        this._maxConcurrency = _maxConcurrency;
        this._cancelError = _cancelError;
        this._queue = [];
        this._waiters = [];
        if (_maxConcurrency <= 0) {
            throw new Error('semaphore must be initialized to a positive value');
        }
        this._value = _maxConcurrency;
    }
    Semaphore.prototype.acquire = function () {
        var _this = this;
        var locked = this.isLocked();
        var ticketPromise = new Promise(function (resolve, reject) {
            return _this._queue.push({ resolve: resolve, reject: reject });
        });
        if (!locked)
            this._dispatch();
        return ticketPromise;
    };
    Semaphore.prototype.runExclusive = function (callback) {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var _a, value, release;
            return (0, tslib_1.__generator)(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.acquire()];
                    case 1:
                        _a = _b.sent(), value = _a[0], release = _a[1];
                        _b.label = 2;
                    case 2:
                        _b.trys.push([2, , 4, 5]);
                        return [4 /*yield*/, callback(value)];
                    case 3: return [2 /*return*/, _b.sent()];
                    case 4:
                        release();
                        return [7 /*endfinally*/];
                    case 5: return [2 /*return*/];
                }
            });
        });
    };
    Semaphore.prototype.waitForUnlock = function () {
        return (0, tslib_1.__awaiter)(this, void 0, void 0, function () {
            var waitPromise;
            var _this = this;
            return (0, tslib_1.__generator)(this, function (_a) {
                if (!this.isLocked()) {
                    return [2 /*return*/, Promise.resolve()];
                }
                waitPromise = new Promise(function (resolve) { return _this._waiters.push({ resolve: resolve }); });
                return [2 /*return*/, waitPromise];
            });
        });
    };
    Semaphore.prototype.isLocked = function () {
        return this._value <= 0;
    };
    /** @deprecated Deprecated in 0.3.0, will be removed in 0.4.0. Use runExclusive instead. */
    Semaphore.prototype.release = function () {
        if (this._maxConcurrency > 1) {
            throw new Error('this method is unavailable on semaphores with concurrency > 1; use the scoped release returned by acquire instead');
        }
        if (this._currentReleaser) {
            var releaser = this._currentReleaser;
            this._currentReleaser = undefined;
            releaser();
        }
    };
    Semaphore.prototype.cancel = function () {
        var _this = this;
        this._queue.forEach(function (ticket) { return ticket.reject(_this._cancelError); });
        this._queue = [];
    };
    Semaphore.prototype._dispatch = function () {
        var _this = this;
        var nextTicket = this._queue.shift();
        if (!nextTicket)
            return;
        var released = false;
        this._currentReleaser = function () {
            if (released)
                return;
            released = true;
            _this._value++;
            _this._resolveWaiters();
            _this._dispatch();
        };
        nextTicket.resolve([this._value--, this._currentReleaser]);
    };
    Semaphore.prototype._resolveWaiters = function () {
        this._waiters.forEach(function (waiter) { return waiter.resolve(); });
        this._waiters = [];
    };
    return Semaphore;
}());
exports.default = Semaphore;

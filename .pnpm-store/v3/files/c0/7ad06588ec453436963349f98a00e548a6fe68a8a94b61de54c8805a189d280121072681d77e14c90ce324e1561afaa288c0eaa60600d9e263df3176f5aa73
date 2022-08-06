"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AsyncEventEmitter = exports.AsyncEventEmitterReadyState = void 0;
var debug_1 = require("debug");
var strict_event_emitter_1 = require("strict-event-emitter");
var nextTick_1 = require("./nextTick");
var AsyncEventEmitterReadyState;
(function (AsyncEventEmitterReadyState) {
    AsyncEventEmitterReadyState["ACTIVE"] = "ACTIVE";
    AsyncEventEmitterReadyState["DEACTIVATED"] = "DEACTIVATED";
})(AsyncEventEmitterReadyState = exports.AsyncEventEmitterReadyState || (exports.AsyncEventEmitterReadyState = {}));
var AsyncEventEmitter = /** @class */ (function (_super) {
    __extends(AsyncEventEmitter, _super);
    function AsyncEventEmitter() {
        var _this = _super.call(this) || this;
        _this.log = debug_1.debug('async-event-emitter');
        _this.queue = new Map();
        _this.readyState = AsyncEventEmitterReadyState.ACTIVE;
        return _this;
    }
    AsyncEventEmitter.prototype.on = function (event, listener) {
        var _this = this;
        var log = this.log.extend('on');
        log('adding "%s" listener...', event);
        if (this.readyState === AsyncEventEmitterReadyState.DEACTIVATED) {
            log('the emitter is destroyed, skipping!');
            return this;
        }
        return _super.prototype.on.call(this, event, (function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            return __awaiter(_this, void 0, void 0, function () {
                var queue;
                var _this = this;
                return __generator(this, function (_a) {
                    queue = this.openListenerQueue(event);
                    log('awaiting the "%s" listener...', event);
                    // Whenever a listener is called, create a new Promise
                    // that resolves when that listener function completes its execution.
                    queue.push({
                        args: args,
                        done: new Promise(function (resolve, reject) { return __awaiter(_this, void 0, void 0, function () {
                            var error_1;
                            return __generator(this, function (_a) {
                                switch (_a.label) {
                                    case 0:
                                        _a.trys.push([0, 2, , 3]);
                                        // Treat listeners as potentially asynchronous functions
                                        // so they could be awaited.
                                        return [4 /*yield*/, listener.apply(void 0, __spreadArray([], __read(args)))];
                                    case 1:
                                        // Treat listeners as potentially asynchronous functions
                                        // so they could be awaited.
                                        _a.sent();
                                        resolve();
                                        log('"%s" listener has resolved!', event);
                                        return [3 /*break*/, 3];
                                    case 2:
                                        error_1 = _a.sent();
                                        log('"%s" listener has rejected!', error_1);
                                        reject(error_1);
                                        return [3 /*break*/, 3];
                                    case 3: return [2 /*return*/];
                                }
                            });
                        }); }),
                    });
                    return [2 /*return*/];
                });
            });
        }));
    };
    AsyncEventEmitter.prototype.emit = function (event) {
        var _this = this;
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        var log = this.log.extend('emit');
        log('emitting "%s" event...', event);
        if (this.readyState === AsyncEventEmitterReadyState.DEACTIVATED) {
            log('the emitter is destroyed, skipping!');
            return false;
        }
        // Establish the Promise queue for this particular event.
        this.openListenerQueue(event);
        log('appending a one-time cleanup "%s" listener...', event);
        // Append a one-time clean up listener.
        this.once(event, (function () {
            // Clear the Promise queue for this particular event
            // in the next tick so the Promise in "untilIdle" has
            // time to properly resolve.
            nextTick_1.nextTick(function () {
                _this.queue.delete(event);
                log('cleaned up "%s" listeners queue!', event);
            });
        }));
        return _super.prototype.emit.apply(this, __spreadArray([event], __read(args)));
    };
    /**
     * Returns a promise that resolves when all the listeners for the given event
     * has been called. Awaits asynchronous listeners.
     * If the event has no listeners, resolves immediately.
     */
    AsyncEventEmitter.prototype.untilIdle = function (event, filter) {
        if (filter === void 0) { filter = function () {
            return true;
        }; }
        return __awaiter(this, void 0, void 0, function () {
            var listenersQueue;
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        listenersQueue = this.queue.get(event) || [];
                        return [4 /*yield*/, Promise.all(listenersQueue.filter(filter).map(function (_a) {
                                var done = _a.done;
                                return done;
                            })).finally(function () {
                                // Clear the queue one the promise settles
                                // so that different events don't share the same queue.
                                _this.queue.delete(event);
                            })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    AsyncEventEmitter.prototype.openListenerQueue = function (event) {
        var log = this.log.extend('openListenerQueue');
        log('opening "%s" listeners queue...', event);
        var queue = this.queue.get(event);
        if (!queue) {
            log('no queue found, creating one...');
            this.queue.set(event, []);
            return [];
        }
        log('returning an exising queue:', queue);
        return queue;
    };
    AsyncEventEmitter.prototype.removeAllListeners = function (event) {
        var log = this.log.extend('removeAllListeners');
        log('event:', event);
        if (event) {
            this.queue.delete(event);
            log('cleared the "%s" listeners queue!', event, this.queue.get(event));
        }
        else {
            this.queue.clear();
            log('cleared the listeners queue!', this.queue);
        }
        return _super.prototype.removeAllListeners.call(this, event);
    };
    AsyncEventEmitter.prototype.activate = function () {
        var log = this.log.extend('activate');
        this.readyState = AsyncEventEmitterReadyState.ACTIVE;
        log('set state to:', this.readyState);
    };
    /**
     * Deactivate this event emitter.
     * Deactivated emitter can no longer emit and listen to events
     * and needs to be activated again in order to do so.
     */
    AsyncEventEmitter.prototype.deactivate = function () {
        var log = this.log.extend('deactivate');
        log('removing all listeners...');
        this.removeAllListeners();
        this.readyState = AsyncEventEmitterReadyState.DEACTIVATED;
        log('set state to:', this.readyState);
    };
    return AsyncEventEmitter;
}(strict_event_emitter_1.StrictEventEmitter));
exports.AsyncEventEmitter = AsyncEventEmitter;
//# sourceMappingURL=AsyncEventEmitter.js.map
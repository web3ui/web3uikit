"use strict";
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Interceptor = exports.InterceptorReadyState = exports.deleteGlobalSymbol = exports.getGlobalSymbol = void 0;
var debug_1 = require("debug");
var AsyncEventEmitter_1 = require("./utils/AsyncEventEmitter");
var nextTick_1 = require("./utils/nextTick");
function getGlobalSymbol(symbol) {
    return (
    // @ts-ignore https://github.com/Microsoft/TypeScript/issues/24587
    globalThis[symbol] || undefined);
}
exports.getGlobalSymbol = getGlobalSymbol;
function setGlobalSymbol(symbol, value) {
    // @ts-ignore
    globalThis[symbol] = value;
}
function deleteGlobalSymbol(symbol) {
    // @ts-ignore
    delete globalThis[symbol];
}
exports.deleteGlobalSymbol = deleteGlobalSymbol;
var InterceptorReadyState;
(function (InterceptorReadyState) {
    InterceptorReadyState["IDLE"] = "IDLE";
    InterceptorReadyState["APPLYING"] = "APPLYING";
    InterceptorReadyState["APPLIED"] = "APPLIED";
    InterceptorReadyState["DISPOSING"] = "DISPOSING";
    InterceptorReadyState["DISPOSED"] = "DISPOSED";
})(InterceptorReadyState = exports.InterceptorReadyState || (exports.InterceptorReadyState = {}));
var Interceptor = /** @class */ (function () {
    function Interceptor(symbol) {
        this.symbol = symbol;
        this.readyState = InterceptorReadyState.IDLE;
        this.emitter = new AsyncEventEmitter_1.AsyncEventEmitter();
        this.subscriptions = [];
        this.log = debug_1.debug(symbol.description);
        // Do not limit the maximum number of listeners
        // so not to limit the maximum amount of parallel events emitted.
        this.emitter.setMaxListeners(0);
        this.log('constructing the interceptor...');
    }
    /**
     * Determine if this interceptor can be applied
     * in the current environment.
     */
    Interceptor.prototype.checkEnvironment = function () {
        return true;
    };
    /**
     * Apply this interceptor to the current process.
     * Returns an already running interceptor instance if it's present.
     */
    Interceptor.prototype.apply = function () {
        var _this = this;
        var log = this.log.extend('apply');
        log('applying the interceptor...');
        if (this.readyState === InterceptorReadyState.APPLIED) {
            log('intercepted already applied!');
            return;
        }
        var shouldApply = this.checkEnvironment();
        if (!shouldApply) {
            log('the interceptor cannot be applied in this environment!');
            return;
        }
        this.readyState = InterceptorReadyState.APPLYING;
        // Always activate the emitter when applying the interceptor.
        // This will ensure the interceptor can process events after it's
        // been disposed and re-applied again (it may be a singleton).
        this.emitter.activate();
        log('activated the emiter!', this.emitter.readyState);
        // Whenever applying a new interceptor, check if it hasn't been applied already.
        // This enables to apply the same interceptor multiple times, for example from a different
        // interceptor, only proxying events but keeping the stubs in a single place.
        var runningInstance = this.getInstance();
        if (runningInstance) {
            log('found a running instance, reusing...');
            // Proxy any listeners you set on this instance to the running instance.
            this.on = function (event, listener) {
                log('proxying the "%s" listener', event);
                // Add listeners to the running instance so they appear
                // at the top of the event listeners list and are executed first.
                runningInstance.emitter.addListener(event, listener);
                // Ensure that once this interceptor instance is disposed,
                // it removes all listeners it has appended to the running interceptor instance.
                _this.subscriptions.push(function () {
                    runningInstance.emitter.removeListener(event, listener);
                    log('removed proxied "%s" listener!', event);
                });
            };
            nextTick_1.nextTick(function () {
                _this.readyState = InterceptorReadyState.APPLIED;
            });
            return;
        }
        log('no running instance found, setting up a new instance...');
        // Setup the interceptor.
        this.setup();
        // Store the newly applied interceptor instance globally.
        this.setInstance();
        nextTick_1.nextTick(function () {
            _this.readyState = InterceptorReadyState.APPLIED;
        });
    };
    /**
     * Setup the module augments and stubs necessary for this interceptor.
     * This method is not run if there's a running interceptor instance
     * to prevent instantiating an interceptor multiple times.
     */
    Interceptor.prototype.setup = function () { };
    /**
     * Listen to the interceptor's public events.
     */
    Interceptor.prototype.on = function (event, listener) {
        var log = this.log.extend('on');
        if (this.readyState === InterceptorReadyState.DISPOSING ||
            this.readyState === InterceptorReadyState.DISPOSED) {
            log('cannot listen to events, already disposed!');
            return;
        }
        log('adding "%s" event listener:', event, listener.name);
        this.emitter.on(event, listener);
    };
    /**
     * Disposes of any side-effects this interceptor has introduced.
     */
    Interceptor.prototype.dispose = function () {
        var e_1, _a;
        var _this = this;
        var log = this.log.extend('dispose');
        if (this.readyState === InterceptorReadyState.DISPOSED) {
            log('cannot dispose, already disposed!');
            return;
        }
        log('disposing the interceptor...');
        this.readyState = InterceptorReadyState.DISPOSING;
        if (!this.getInstance()) {
            log('no interceptors running, skipping dispose...');
            return;
        }
        // Delete the global symbol as soon as possible,
        // indicating that the interceptor is no longer running.
        this.clearInstance();
        log('global symbol deleted:', getGlobalSymbol(this.symbol));
        if (this.subscriptions.length > 0) {
            log('disposing of %d subscriptions...', this.subscriptions.length);
            try {
                for (var _b = __values(this.subscriptions), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var dispose = _c.value;
                    dispose();
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
            this.subscriptions = [];
            log('disposed of all subscriptions!', this.subscriptions.length);
        }
        this.emitter.deactivate();
        log('destroyed the listener!');
        nextTick_1.nextTick(function () {
            _this.readyState = InterceptorReadyState.DISPOSED;
        });
    };
    Interceptor.prototype.getInstance = function () {
        var _a;
        var instance = getGlobalSymbol(this.symbol);
        this.log('retrieved global instance:', (_a = instance === null || instance === void 0 ? void 0 : instance.constructor) === null || _a === void 0 ? void 0 : _a.name);
        return instance;
    };
    Interceptor.prototype.setInstance = function () {
        setGlobalSymbol(this.symbol, this);
        this.log('set global instance!', this.symbol.description);
    };
    Interceptor.prototype.clearInstance = function () {
        deleteGlobalSymbol(this.symbol);
        this.log('cleared global instance!', this.symbol.description);
    };
    return Interceptor;
}());
exports.Interceptor = Interceptor;
//# sourceMappingURL=Interceptor.js.map
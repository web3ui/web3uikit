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
exports.BatchInterceptor = void 0;
var Interceptor_1 = require("./Interceptor");
/**
 * A batch interceptor that exposes a single interface
 * to apply and operate with multiple interceptors at once.
 */
var BatchInterceptor = /** @class */ (function (_super) {
    __extends(BatchInterceptor, _super);
    function BatchInterceptor(options) {
        var _this = this;
        BatchInterceptor.symbol = Symbol(options.name);
        _this = _super.call(this, BatchInterceptor.symbol) || this;
        _this.interceptors = options.interceptors;
        return _this;
    }
    BatchInterceptor.prototype.setup = function () {
        var e_1, _a;
        var log = this.log.extend('setup');
        log('applying all %d interceptors...', this.interceptors.length);
        var _loop_1 = function (interceptor) {
            log('applying "%s" interceptor...', interceptor.constructor.name);
            interceptor.apply();
            log('adding interceptor dispose subscription');
            this_1.subscriptions.push(function () { return interceptor.dispose(); });
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.interceptors), _c = _b.next(); !_c.done; _c = _b.next()) {
                var interceptor = _c.value;
                _loop_1(interceptor);
            }
        }
        catch (e_1_1) { e_1 = { error: e_1_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_1) throw e_1.error; }
        }
    };
    BatchInterceptor.prototype.on = function (event, listener) {
        // Instead of adding a listener to the batch interceptor,
        // propagate the listener to each of the individual interceptors.
        this.interceptors.forEach(function (interceptor) {
            interceptor.on(event, listener);
        });
    };
    return BatchInterceptor;
}(Interceptor_1.Interceptor));
exports.BatchInterceptor = BatchInterceptor;
//# sourceMappingURL=BatchInterceptor.js.map
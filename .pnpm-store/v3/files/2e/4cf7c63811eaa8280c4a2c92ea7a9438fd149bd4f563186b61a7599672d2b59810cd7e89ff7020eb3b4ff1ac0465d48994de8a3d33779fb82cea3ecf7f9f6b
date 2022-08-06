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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ClientRequestInterceptor = void 0;
var http_1 = __importDefault(require("http"));
var https_1 = __importDefault(require("https"));
var outvariant_1 = require("outvariant");
var glossary_1 = require("../../glossary");
var Interceptor_1 = require("../../Interceptor");
var http_get_1 = require("./http.get");
var http_request_1 = require("./http.request");
/**
 * Intercept requests made via the `ClientRequest` class.
 * Such requests include `http.get`, `https.request`, etc.
 */
var ClientRequestInterceptor = /** @class */ (function (_super) {
    __extends(ClientRequestInterceptor, _super);
    function ClientRequestInterceptor() {
        var _this = _super.call(this, ClientRequestInterceptor.symbol) || this;
        _this.modules = new Map();
        _this.modules.set('http', http_1.default);
        _this.modules.set('https', https_1.default);
        return _this;
    }
    ClientRequestInterceptor.prototype.setup = function () {
        var e_1, _a;
        var log = this.log.extend('setup');
        var _loop_1 = function (protocol, requestModule) {
            var pureRequest = requestModule.request, pureGet = requestModule.get;
            outvariant_1.invariant(!requestModule[glossary_1.IS_PATCHED_MODULE], 'Failed to patch the "%s" module: already patched.', protocol);
            this_1.subscriptions.push(function () {
                Object.defineProperty(requestModule, glossary_1.IS_PATCHED_MODULE, {
                    value: undefined,
                });
                requestModule.request = pureRequest;
                requestModule.get = pureGet;
                log('native "%s" module restored!', protocol);
            });
            var options = {
                emitter: this_1.emitter,
                log: this_1.log,
            };
            // @ts-ignore
            requestModule.request =
                // Force a line break.
                http_request_1.request(protocol, options);
            // @ts-ignore
            requestModule.get =
                // Force a line break.
                http_get_1.get(protocol, options);
            Object.defineProperty(requestModule, glossary_1.IS_PATCHED_MODULE, {
                configurable: true,
                enumerable: true,
                value: true,
            });
            log('native "%s" module patched!', protocol);
        };
        var this_1 = this;
        try {
            for (var _b = __values(this.modules), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), protocol = _d[0], requestModule = _d[1];
                _loop_1(protocol, requestModule);
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
    ClientRequestInterceptor.symbol = Symbol('http');
    return ClientRequestInterceptor;
}(Interceptor_1.Interceptor));
exports.ClientRequestInterceptor = ClientRequestInterceptor;
//# sourceMappingURL=index.js.map
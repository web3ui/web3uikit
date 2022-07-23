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
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.FetchInterceptor = void 0;
var headers_polyfill_1 = require("headers-polyfill");
var outvariant_1 = require("outvariant");
var glossary_1 = require("../../glossary");
var Interceptor_1 = require("../../Interceptor");
var createLazyCallback_1 = require("../../utils/createLazyCallback");
var toIsoResponse_1 = require("../../utils/toIsoResponse");
var uuid_1 = require("../../utils/uuid");
var FetchInterceptor = /** @class */ (function (_super) {
    __extends(FetchInterceptor, _super);
    function FetchInterceptor() {
        return _super.call(this, FetchInterceptor.symbol) || this;
    }
    FetchInterceptor.prototype.checkEnvironment = function () {
        return (typeof globalThis !== 'undefined' &&
            typeof globalThis.fetch !== 'undefined');
    };
    FetchInterceptor.prototype.setup = function () {
        var _this = this;
        var pureFetch = globalThis.fetch;
        outvariant_1.invariant(!pureFetch[glossary_1.IS_PATCHED_MODULE], 'Failed to patch the "fetch" module: already patched.');
        globalThis.fetch = function (input, init) { return __awaiter(_this, void 0, void 0, function () {
            var request, url, method, isomorphicRequest, _a, mockedResponse, isomorphicResponse, response;
            var _b;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        request = new Request(input, init);
                        url = typeof input === 'string' ? input : input.url;
                        method = request.method;
                        this.log('[%s] %s', method, url);
                        _b = {
                            id: uuid_1.uuidv4(),
                            url: new URL(url, location.origin),
                            method: method,
                            headers: new headers_polyfill_1.Headers(request.headers),
                            credentials: request.credentials
                        };
                        return [4 /*yield*/, request.clone().text()];
                    case 1:
                        isomorphicRequest = (_b.body = _c.sent(),
                            _b.respondWith = createLazyCallback_1.createLazyCallback(),
                            _b);
                        this.log('isomorphic request', isomorphicRequest);
                        this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount('request'));
                        this.emitter.emit('request', isomorphicRequest);
                        this.log('awaiting for the mocked response...');
                        return [4 /*yield*/, this.emitter.untilIdle('request', function (_a) {
                                var _b = __read(_a.args, 1), request = _b[0];
                                return request.id === isomorphicRequest.id;
                            })];
                    case 2:
                        _c.sent();
                        this.log('all request listeners have been resolved!');
                        return [4 /*yield*/, isomorphicRequest.respondWith.invoked()];
                    case 3:
                        _a = __read.apply(void 0, [_c.sent(), 1]), mockedResponse = _a[0];
                        this.log('event.respondWith called with:', mockedResponse);
                        if (mockedResponse) {
                            this.log('received mocked response:', mockedResponse);
                            isomorphicResponse = toIsoResponse_1.toIsoResponse(mockedResponse);
                            this.log('derived isomorphic response:', isomorphicResponse);
                            this.emitter.emit('response', isomorphicRequest, isomorphicResponse);
                            response = new Response(mockedResponse.body, __assign(__assign({}, isomorphicResponse), { 
                                // `Response.headers` cannot be instantiated with the `Headers` polyfill.
                                // Apparently, it halts if the `Headers` class contains unknown properties
                                // (i.e. the internal `Headers.map`).
                                headers: headers_polyfill_1.flattenHeadersObject(mockedResponse.headers || {}) }));
                            // Set the "response.url" property to equal the intercepted request URL.
                            Object.defineProperty(response, 'url', {
                                writable: false,
                                enumerable: true,
                                configurable: false,
                                value: isomorphicRequest.url.href,
                            });
                            return [2 /*return*/, response];
                        }
                        this.log('no mocked response received!');
                        return [2 /*return*/, pureFetch(request).then(function (response) { return __awaiter(_this, void 0, void 0, function () {
                                var cloneResponse, _a, _b, _c;
                                return __generator(this, function (_d) {
                                    switch (_d.label) {
                                        case 0:
                                            cloneResponse = response.clone();
                                            this.log('original fetch performed', cloneResponse);
                                            _b = (_a = this.emitter).emit;
                                            _c = ['response',
                                                isomorphicRequest];
                                            return [4 /*yield*/, normalizeFetchResponse(cloneResponse)];
                                        case 1:
                                            _b.apply(_a, _c.concat([_d.sent()]));
                                            return [2 /*return*/, response];
                                    }
                                });
                            }); })];
                }
            });
        }); };
        Object.defineProperty(globalThis.fetch, glossary_1.IS_PATCHED_MODULE, {
            enumerable: true,
            configurable: true,
            value: true,
        });
        this.subscriptions.push(function () {
            Object.defineProperty(globalThis.fetch, glossary_1.IS_PATCHED_MODULE, {
                value: undefined,
            });
            globalThis.fetch = pureFetch;
            _this.log('restored native "globalThis.fetch"!', globalThis.fetch.name);
        });
    };
    FetchInterceptor.symbol = Symbol('fetch');
    return FetchInterceptor;
}(Interceptor_1.Interceptor));
exports.FetchInterceptor = FetchInterceptor;
function normalizeFetchResponse(response) {
    return __awaiter(this, void 0, void 0, function () {
        var _a;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _a = {
                        status: response.status,
                        statusText: response.statusText,
                        headers: headers_polyfill_1.objectToHeaders(headers_polyfill_1.headersToObject(response.headers))
                    };
                    return [4 /*yield*/, response.text()];
                case 1: return [2 /*return*/, (_a.body = _b.sent(),
                        _a)];
            }
        });
    });
}
//# sourceMappingURL=index.js.map
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
exports.RemoteHttpResolver = exports.requestReviver = exports.RemoteHttpInterceptor = void 0;
var headers_polyfill_1 = require("headers-polyfill");
var Interceptor_1 = require("./Interceptor");
var BatchInterceptor_1 = require("./BatchInterceptor");
var ClientRequest_1 = require("./interceptors/ClientRequest");
var XMLHttpRequest_1 = require("./interceptors/XMLHttpRequest");
var createLazyCallback_1 = require("./utils/createLazyCallback");
var toIsoResponse_1 = require("./utils/toIsoResponse");
var RemoteHttpInterceptor = /** @class */ (function (_super) {
    __extends(RemoteHttpInterceptor, _super);
    function RemoteHttpInterceptor() {
        return _super.call(this, {
            name: 'remote-interceptor',
            interceptors: [
                new ClientRequest_1.ClientRequestInterceptor(),
                new XMLHttpRequest_1.XMLHttpRequestInterceptor(),
            ],
        }) || this;
    }
    RemoteHttpInterceptor.prototype.setup = function () {
        var _this = this;
        _super.prototype.setup.call(this);
        var handleParentMessage;
        this.on('request', function (request) { return __awaiter(_this, void 0, void 0, function () {
            var serializedRequest, responsePromise;
            var _a;
            return __generator(this, function (_b) {
                serializedRequest = JSON.stringify(request);
                this.log('sent serialized request to the child:', serializedRequest);
                (_a = process.send) === null || _a === void 0 ? void 0 : _a.call(process, "request:" + serializedRequest);
                responsePromise = new Promise(function (resolve) {
                    handleParentMessage = function (message) {
                        if (typeof message !== 'string') {
                            return resolve();
                        }
                        if (message.startsWith("response:" + request.id)) {
                            var _a = __read(message.match(/^response:.+?:(.+)$/) || [], 2), serializedResponse = _a[1];
                            if (!serializedResponse) {
                                return resolve();
                            }
                            var mockedResponse = JSON.parse(serializedResponse);
                            request.respondWith(mockedResponse);
                            resolve();
                        }
                    };
                });
                // Listen for the mocked resopnse message from the parent.
                this.log('add "message" listener to the parent process', handleParentMessage);
                process.addListener('message', handleParentMessage);
                return [2 /*return*/, responsePromise];
            });
        }); });
        this.subscriptions.push(function () {
            process.removeListener('message', handleParentMessage);
        });
    };
    return RemoteHttpInterceptor;
}(BatchInterceptor_1.BatchInterceptor));
exports.RemoteHttpInterceptor = RemoteHttpInterceptor;
function requestReviver(key, value) {
    switch (key) {
        case 'url':
            return new URL(value);
        case 'headers':
            return new headers_polyfill_1.Headers(value);
        default:
            return value;
    }
}
exports.requestReviver = requestReviver;
var RemoteHttpResolver = /** @class */ (function (_super) {
    __extends(RemoteHttpResolver, _super);
    function RemoteHttpResolver(options) {
        var _this = _super.call(this, RemoteHttpResolver.symbol) || this;
        _this.process = options.process;
        return _this;
    }
    RemoteHttpResolver.prototype.setup = function () {
        var _this = this;
        var log = this.log.extend('setup');
        var handleChildMessage = function (message) { return __awaiter(_this, void 0, void 0, function () {
            var _a, serializedRequest, isomorphicRequest, interactiveIsomorphicRequest, _b, mockedResponse, serializedResponse;
            var _this = this;
            return __generator(this, function (_c) {
                switch (_c.label) {
                    case 0:
                        log('received message from child!', message);
                        if (typeof message !== 'string' || !message.startsWith('request:')) {
                            log('unknown message, ignoring...');
                            return [2 /*return*/];
                        }
                        _a = __read(message.match(/^request:(.+)$/) || [], 2), serializedRequest = _a[1];
                        if (!serializedRequest) {
                            return [2 /*return*/];
                        }
                        isomorphicRequest = JSON.parse(serializedRequest, requestReviver);
                        log('parsed intercepted request', isomorphicRequest);
                        interactiveIsomorphicRequest = __assign(__assign({}, isomorphicRequest), { respondWith: createLazyCallback_1.createLazyCallback() });
                        this.emitter.emit('request', interactiveIsomorphicRequest);
                        return [4 /*yield*/, this.emitter.untilIdle('request', function (_a) {
                                var _b = __read(_a.args, 1), request = _b[0];
                                return request.id === interactiveIsomorphicRequest.id;
                            })];
                    case 1:
                        _c.sent();
                        return [4 /*yield*/, interactiveIsomorphicRequest.respondWith.invoked()];
                    case 2:
                        _b = __read.apply(void 0, [_c.sent(), 1]), mockedResponse = _b[0];
                        log('event.respondWith called with:', mockedResponse);
                        serializedResponse = JSON.stringify(mockedResponse);
                        this.process.send("response:" + isomorphicRequest.id + ":" + serializedResponse, function (error) {
                            if (error) {
                                return;
                            }
                            if (mockedResponse) {
                                // Emit an optimistinc "response" event at this point,
                                // not to rely on the back-and-forth signaling for the sake of the event.
                                _this.emitter.emit('response', isomorphicRequest, toIsoResponse_1.toIsoResponse(mockedResponse));
                            }
                        });
                        log('sent serialized mocked response to the parent:', serializedResponse);
                        return [2 /*return*/];
                }
            });
        }); };
        this.subscriptions.push(function () {
            _this.process.removeListener('message', handleChildMessage);
            log('removed the "message" listener from the child process!');
        });
        log('adding a "message" listener to the child process');
        this.process.addListener('message', handleChildMessage);
        this.process.once('error', function () { return _this.dispose(); });
        this.process.once('exit', function () { return _this.dispose(); });
    };
    RemoteHttpResolver.symbol = Symbol('remote-resolver');
    return RemoteHttpResolver;
}(Interceptor_1.Interceptor));
exports.RemoteHttpResolver = RemoteHttpResolver;
//# sourceMappingURL=RemoteHttpInterceptor.js.map
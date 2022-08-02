"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.createXMLHttpRequestOverride = void 0;
var until_1 = require("@open-draft/until");
var headers_polyfill_1 = require("headers-polyfill");
var xmldom_1 = require("@xmldom/xmldom");
var parseJson_1 = require("../../utils/parseJson");
var toIsoResponse_1 = require("../../utils/toIsoResponse");
var uuid_1 = require("../../utils/uuid");
var bufferFrom_1 = require("./utils/bufferFrom");
var createEvent_1 = require("./utils/createEvent");
var createLazyCallback_1 = require("../../utils/createLazyCallback");
var createXMLHttpRequestOverride = function (options) {
    var _a;
    var XMLHttpRequest = options.XMLHttpRequest, emitter = options.emitter, log = options.log;
    return _a = /** @class */ (function () {
            function XMLHttpRequestOverride() {
                // Collection of events modified by `addEventListener`/`removeEventListener` calls.
                this._events = [];
                this.log = log;
                this.UNSENT = 0;
                this.OPENED = 1;
                this.HEADERS_RECEIVED = 2;
                this.LOADING = 3;
                this.DONE = 4;
                this.onreadystatechange = null;
                /* Events */
                this.onabort = null;
                this.onerror = null;
                this.onload = null;
                this.onloadend = null;
                this.onloadstart = null;
                this.onprogress = null;
                this.ontimeout = null;
                this.url = '';
                this.method = 'GET';
                this.readyState = this.UNSENT;
                this.withCredentials = false;
                this.status = 200;
                this.statusText = 'OK';
                this.data = '';
                this.response = '';
                this.responseType = 'text';
                this.responseText = '';
                this.responseXML = null;
                this.responseURL = '';
                this.upload = {};
                this.timeout = 0;
                this._requestHeaders = new headers_polyfill_1.Headers();
                this._responseHeaders = new headers_polyfill_1.Headers();
            }
            XMLHttpRequestOverride.prototype.setReadyState = function (nextState) {
                if (nextState === this.readyState) {
                    return;
                }
                this.log('readyState change %d -> %d', this.readyState, nextState);
                this.readyState = nextState;
                if (nextState !== this.UNSENT) {
                    this.log('triggerring readystate change...');
                    this.trigger('readystatechange');
                }
            };
            /**
             * Triggers both direct callback and attached event listeners
             * for the given event.
             */
            XMLHttpRequestOverride.prototype.trigger = function (eventName, options) {
                var e_1, _a;
                this.log('trigger "%s" (%d)', eventName, this.readyState);
                this.log('resolve listener for event "%s"', eventName);
                // @ts-expect-error XMLHttpRequest class has no index signature.
                var callback = this["on" + eventName];
                callback === null || callback === void 0 ? void 0 : callback.call(this, createEvent_1.createEvent(this, eventName, options));
                try {
                    for (var _b = __values(this._events), _c = _b.next(); !_c.done; _c = _b.next()) {
                        var event_1 = _c.value;
                        if (event_1.name === eventName) {
                            log('calling mock event listener "%s" (%d)', eventName, this.readyState);
                            event_1.listener.call(this, createEvent_1.createEvent(this, eventName, options));
                        }
                    }
                }
                catch (e_1_1) { e_1 = { error: e_1_1 }; }
                finally {
                    try {
                        if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                    }
                    finally { if (e_1) throw e_1.error; }
                }
                return this;
            };
            XMLHttpRequestOverride.prototype.reset = function () {
                this.log('reset');
                this.setReadyState(this.UNSENT);
                this.status = 200;
                this.statusText = 'OK';
                this.data = '';
                this.response = null;
                this.responseText = null;
                this.responseXML = null;
                this._requestHeaders = new headers_polyfill_1.Headers();
                this._responseHeaders = new headers_polyfill_1.Headers();
            };
            XMLHttpRequestOverride.prototype.open = function (method, url, async, user, password) {
                if (async === void 0) { async = true; }
                return __awaiter(this, void 0, void 0, function () {
                    return __generator(this, function (_a) {
                        this.log = this.log.extend("request " + method + " " + url);
                        this.log('open', { method: method, url: url, async: async, user: user, password: password });
                        this.reset();
                        this.setReadyState(this.OPENED);
                        if (typeof url === 'undefined') {
                            this.url = method;
                            this.method = 'GET';
                        }
                        else {
                            this.url = url;
                            this.method = method;
                            this.async = async;
                            this.user = user;
                            this.password = password;
                        }
                        return [2 /*return*/];
                    });
                });
            };
            XMLHttpRequestOverride.prototype.send = function (data) {
                var _this = this;
                this.log('send %s %s', this.method, this.url);
                this.data = data || '';
                var url;
                try {
                    url = new URL(this.url);
                }
                catch (error) {
                    // Assume a relative URL, if construction of a new `URL` instance fails.
                    // Since `XMLHttpRequest` always executed in a DOM-like environment,
                    // resolve the relative request URL against the current window location.
                    url = new URL(this.url, window.location.href);
                }
                this.log('request headers', this._requestHeaders);
                // Create an intercepted request instance exposed to the request intercepting middleware.
                var isomorphicRequest = {
                    id: uuid_1.uuidv4(),
                    url: url,
                    method: this.method,
                    headers: this._requestHeaders,
                    credentials: this.withCredentials ? 'include' : 'omit',
                    body: this.data,
                };
                var interactiveIsomorphicRequest = __assign(__assign({}, isomorphicRequest), { respondWith: createLazyCallback_1.createLazyCallback() });
                this.log('emitting the "request" event for %d listener(s)...', emitter.listenerCount('request'));
                emitter.emit('request', interactiveIsomorphicRequest);
                this.log('awaiting mocked response...');
                Promise.resolve(until_1.until(function () { return __awaiter(_this, void 0, void 0, function () {
                    var _a, mockedResponse;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0: return [4 /*yield*/, emitter.untilIdle('request', function (_a) {
                                    var _b = __read(_a.args, 1), request = _b[0];
                                    return request.id === interactiveIsomorphicRequest.id;
                                })];
                            case 1:
                                _b.sent();
                                this.log('all request listeners have been resolved!');
                                return [4 /*yield*/, interactiveIsomorphicRequest.respondWith.invoked()];
                            case 2:
                                _a = __read.apply(void 0, [_b.sent(), 1]), mockedResponse = _a[0];
                                this.log('event.respondWith called with:', mockedResponse);
                                return [2 /*return*/, mockedResponse];
                        }
                    });
                }); })).then(function (_a) {
                    var _b;
                    var _c = __read(_a, 2), middlewareException = _c[0], mockedResponse = _c[1];
                    // When the request middleware throws an exception, error the request.
                    // This cancels the request and is similar to a network error.
                    if (middlewareException) {
                        _this.log('middleware function threw an exception!', middlewareException);
                        // No way to propagate the actual error message.
                        _this.trigger('error');
                        _this.abort();
                        return;
                    }
                    // Return a mocked response, if provided in the middleware.
                    if (mockedResponse) {
                        _this.log('received mocked response', mockedResponse);
                        // Trigger a loadstart event to indicate the initialization of the fetch.
                        _this.trigger('loadstart');
                        _this.status = mockedResponse.status || 200;
                        _this.statusText = mockedResponse.statusText || 'OK';
                        _this._responseHeaders = mockedResponse.headers
                            ? headers_polyfill_1.objectToHeaders(mockedResponse.headers)
                            : new headers_polyfill_1.Headers();
                        _this.log('set response status', _this.status, _this.statusText);
                        _this.log('set response headers', _this._responseHeaders);
                        // Mark that response headers has been received
                        // and trigger a ready state event to reflect received headers
                        // in a custom `onreadystatechange` callback.
                        _this.setReadyState(_this.HEADERS_RECEIVED);
                        _this.log('response type', _this.responseType);
                        _this.response = _this.getResponseBody(mockedResponse.body);
                        _this.responseURL = _this.url;
                        _this.responseText = mockedResponse.body || '';
                        _this.responseXML = _this.getResponseXML();
                        _this.log('set response body', _this.response);
                        if (mockedResponse.body && _this.response) {
                            _this.setReadyState(_this.LOADING);
                            // Presense of the mocked response implies a response body (not null).
                            // Presense of the coerced `this.response` implies the mocked body is valid.
                            var bodyBuffer = bufferFrom_1.bufferFrom(mockedResponse.body);
                            // Trigger a progress event based on the mocked response body.
                            _this.trigger('progress', {
                                loaded: bodyBuffer.length,
                                total: bodyBuffer.length,
                            });
                        }
                        /**
                         * Explicitly mark the request as done so its response never hangs.
                         * @see https://github.com/mswjs/interceptors/issues/13
                         */
                        _this.setReadyState(_this.DONE);
                        // Trigger a load event to indicate the fetch has succeeded.
                        _this.trigger('load');
                        // Trigger a loadend event to indicate the fetch has completed.
                        _this.trigger('loadend');
                        emitter.emit('response', isomorphicRequest, toIsoResponse_1.toIsoResponse(mockedResponse));
                    }
                    else {
                        _this.log('no mocked response received!');
                        // Perform an original request, when the request middleware returned no mocked response.
                        var originalRequest_1 = new XMLHttpRequest();
                        _this.log('opening an original request %s %s', _this.method, _this.url);
                        originalRequest_1.open(_this.method, _this.url, (_b = _this.async) !== null && _b !== void 0 ? _b : true, _this.user, _this.password);
                        // Reflect a successful state of the original request
                        // on the patched instance.
                        originalRequest_1.addEventListener('load', function () {
                            _this.log('original "onload"');
                            _this.status = originalRequest_1.status;
                            _this.statusText = originalRequest_1.statusText;
                            _this.responseURL = originalRequest_1.responseURL;
                            _this.responseType = originalRequest_1.responseType;
                            _this.response = originalRequest_1.response;
                            _this.responseText = originalRequest_1.responseText;
                            _this.responseXML = originalRequest_1.responseXML;
                            _this.log('set mock request readyState to DONE');
                            // Explicitly mark the mocked request instance as done
                            // so the response never hangs.
                            /**
                             * @note `readystatechange` listener is called TWICE
                             * in the case of unhandled request.
                             */
                            _this.setReadyState(_this.DONE);
                            _this.log('received original response', _this.status, _this.statusText);
                            _this.log('original response body:', _this.response);
                            var responseHeaders = originalRequest_1.getAllResponseHeaders();
                            _this.log('original response headers:\n', responseHeaders);
                            _this._responseHeaders = headers_polyfill_1.stringToHeaders(responseHeaders);
                            _this.log('original response headers (normalized)', _this._responseHeaders);
                            _this.log('original response finished');
                            emitter.emit('response', isomorphicRequest, {
                                status: originalRequest_1.status,
                                statusText: originalRequest_1.statusText,
                                headers: _this._responseHeaders,
                                body: originalRequest_1.response,
                            });
                        });
                        // Assign callbacks and event listeners from the intercepted XHR instance
                        // to the original XHR instance.
                        _this.propagateCallbacks(originalRequest_1);
                        _this.propagateListeners(originalRequest_1);
                        _this.propagateHeaders(originalRequest_1, _this._requestHeaders);
                        if (_this.async) {
                            originalRequest_1.timeout = _this.timeout;
                        }
                        _this.log('send', _this.data);
                        originalRequest_1.send(_this.data);
                    }
                });
            };
            XMLHttpRequestOverride.prototype.abort = function () {
                this.log('abort');
                if (this.readyState > this.UNSENT && this.readyState < this.DONE) {
                    this.setReadyState(this.UNSENT);
                    this.trigger('abort');
                }
            };
            XMLHttpRequestOverride.prototype.dispatchEvent = function () {
                return false;
            };
            XMLHttpRequestOverride.prototype.setRequestHeader = function (name, value) {
                this.log('set request header "%s" to "%s"', name, value);
                this._requestHeaders.append(name, value);
            };
            XMLHttpRequestOverride.prototype.getResponseHeader = function (name) {
                this.log('get response header "%s"', name);
                if (this.readyState < this.HEADERS_RECEIVED) {
                    this.log('cannot return a header: headers not received (state: %s)', this.readyState);
                    return null;
                }
                var headerValue = this._responseHeaders.get(name);
                this.log('resolved response header "%s" to "%s"', name, headerValue, this._responseHeaders);
                return headerValue;
            };
            XMLHttpRequestOverride.prototype.getAllResponseHeaders = function () {
                this.log('get all response headers');
                if (this.readyState < this.HEADERS_RECEIVED) {
                    this.log('cannot return headers: headers not received (state: %s)', this.readyState);
                    return '';
                }
                return headers_polyfill_1.headersToString(this._responseHeaders);
            };
            XMLHttpRequestOverride.prototype.addEventListener = function (name, listener) {
                this.log('addEventListener', name, listener);
                this._events.push({
                    name: name,
                    listener: listener,
                });
            };
            XMLHttpRequestOverride.prototype.removeEventListener = function (name, listener) {
                this.log('removeEventListener', name, listener);
                this._events = this._events.filter(function (storedEvent) {
                    return storedEvent.name !== name && storedEvent.listener !== listener;
                });
            };
            XMLHttpRequestOverride.prototype.overrideMimeType = function () { };
            /**
             * Resolves the response based on the `responseType` value.
             */
            XMLHttpRequestOverride.prototype.getResponseBody = function (body) {
                // Handle an improperly set "null" value of the mocked response body.
                var textBody = body !== null && body !== void 0 ? body : '';
                this.log('coerced response body to', textBody);
                switch (this.responseType) {
                    case 'json': {
                        this.log('resolving response body as JSON');
                        return parseJson_1.parseJson(textBody);
                    }
                    case 'blob': {
                        var blobType = this.getResponseHeader('content-type') || 'text/plain';
                        this.log('resolving response body as Blob', { type: blobType });
                        return new Blob([textBody], {
                            type: blobType,
                        });
                    }
                    case 'arraybuffer': {
                        this.log('resolving response body as ArrayBuffer');
                        var arrayBuffer = bufferFrom_1.bufferFrom(textBody);
                        return arrayBuffer;
                    }
                    default:
                        return textBody;
                }
            };
            XMLHttpRequestOverride.prototype.getResponseXML = function () {
                var contentType = this.getResponseHeader('Content-Type');
                if (contentType === 'application/xml' || contentType === 'text/xml') {
                    return new xmldom_1.DOMParser().parseFromString(this.responseText, contentType);
                }
                return null;
            };
            /**
             * Propagates mock XMLHttpRequest instance callbacks
             * to the given XMLHttpRequest instance.
             */
            XMLHttpRequestOverride.prototype.propagateCallbacks = function (request) {
                var e_2, _a;
                this.log('propagating request callbacks to the original request');
                var callbackNames = [
                    'abort',
                    'onerror',
                    'ontimeout',
                    'onload',
                    'onloadstart',
                    'onloadend',
                    'onprogress',
                    'onreadystatechange',
                ];
                try {
                    for (var callbackNames_1 = __values(callbackNames), callbackNames_1_1 = callbackNames_1.next(); !callbackNames_1_1.done; callbackNames_1_1 = callbackNames_1.next()) {
                        var callbackName = callbackNames_1_1.value;
                        var callback = this[callbackName];
                        if (callback) {
                            request[callbackName] = this[callbackName];
                            this.log('propagated the "%s" callback', callbackName, callback);
                        }
                    }
                }
                catch (e_2_1) { e_2 = { error: e_2_1 }; }
                finally {
                    try {
                        if (callbackNames_1_1 && !callbackNames_1_1.done && (_a = callbackNames_1.return)) _a.call(callbackNames_1);
                    }
                    finally { if (e_2) throw e_2.error; }
                }
                request.onabort = this.abort;
                request.onerror = this.onerror;
                request.ontimeout = this.ontimeout;
                request.onload = this.onload;
                request.onloadstart = this.onloadstart;
                request.onloadend = this.onloadend;
                request.onprogress = this.onprogress;
                request.onreadystatechange = this.onreadystatechange;
            };
            /**
             * Propagates the mock XMLHttpRequest instance listeners
             * to the given XMLHttpRequest instance.
             */
            XMLHttpRequestOverride.prototype.propagateListeners = function (request) {
                this.log('propagating request listeners (%d) to the original request', this._events.length, this._events);
                this._events.forEach(function (_a) {
                    var name = _a.name, listener = _a.listener;
                    request.addEventListener(name, listener);
                });
            };
            XMLHttpRequestOverride.prototype.propagateHeaders = function (request, headers) {
                var _this = this;
                this.log('propagating request headers to the original request', headers);
                // Preserve the request headers casing.
                Object.entries(headers.raw()).forEach(function (_a) {
                    var _b = __read(_a, 2), name = _b[0], value = _b[1];
                    _this.log('setting "%s" (%s) header on the original request', name, value);
                    request.setRequestHeader(name, value);
                });
            };
            return XMLHttpRequestOverride;
        }()),
        /* Request state */
        _a.UNSENT = 0,
        _a.OPENED = 1,
        _a.HEADERS_RECEIVED = 2,
        _a.LOADING = 3,
        _a.DONE = 4,
        _a;
};
exports.createXMLHttpRequestOverride = createXMLHttpRequestOverride;
//# sourceMappingURL=XMLHttpRequestOverride.js.map
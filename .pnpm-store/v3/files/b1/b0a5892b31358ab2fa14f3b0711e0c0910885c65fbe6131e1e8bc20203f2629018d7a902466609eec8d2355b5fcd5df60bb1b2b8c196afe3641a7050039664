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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.NodeClientRequest = void 0;
var http_1 = require("http");
var until_1 = require("@open-draft/until");
var lib_1 = require("headers-polyfill/lib");
var uuid_1 = require("../../utils/uuid");
var concatChunkToBuffer_1 = require("./utils/concatChunkToBuffer");
var normalizeClientRequestEndArgs_1 = require("./utils/normalizeClientRequestEndArgs");
var toIsoResponse_1 = require("../../utils/toIsoResponse");
var getIncomingMessageBody_1 = require("./utils/getIncomingMessageBody");
var bodyBufferToString_1 = require("./utils/bodyBufferToString");
var normalizeClientRequestWriteArgs_1 = require("./utils/normalizeClientRequestWriteArgs");
var cloneIncomingMessage_1 = require("./utils/cloneIncomingMessage");
var createLazyCallback_1 = require("../../utils/createLazyCallback");
var outvariant_1 = require("outvariant");
var NodeClientRequest = /** @class */ (function (_super) {
    __extends(NodeClientRequest, _super);
    function NodeClientRequest(_a, options) {
        var _b = __read(_a, 3), url = _b[0], requestOptions = _b[1], callback = _b[2];
        var _this = _super.call(this, requestOptions, callback) || this;
        _this.chunks = [];
        _this.responseSource = 'mock';
        _this.requestBody = [];
        _this.log = options.log.extend("request " + requestOptions.method + " " + url.href);
        _this.log('constructing ClientRequest using options:', {
            url: url,
            requestOptions: requestOptions,
            callback: callback,
        });
        _this.url = url;
        _this.options = requestOptions;
        _this.emitter = options.emitter;
        // Construct a mocked response message.
        _this.response = new http_1.IncomingMessage(_this.socket);
        return _this;
    }
    NodeClientRequest.prototype.write = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _a = __read(normalizeClientRequestWriteArgs_1.normalizeClientRequestWriteArgs(args), 3), chunk = _a[0], encoding = _a[1], callback = _a[2];
        this.log('write:', { chunk: chunk, encoding: encoding, callback: callback });
        this.chunks.push({ chunk: chunk, encoding: encoding });
        this.requestBody = concatChunkToBuffer_1.concatChunkToBuffer(chunk, this.requestBody);
        this.log('chunk successfully stored!', this.requestBody);
        /**
         * Prevent invoking the callback if the written chunk is empty.
         * @see https://nodejs.org/api/http.html#requestwritechunk-encoding-callback
         */
        if (!chunk || chunk.length === 0) {
            this.log('written chunk is empty, skipping callback...');
        }
        else {
            callback === null || callback === void 0 ? void 0 : callback();
        }
        // Do not write the request body chunks to prevent
        // the Socket from sending data to a potentially existing
        // server when there is a mocked response defined.
        return true;
    };
    NodeClientRequest.prototype.end = function () {
        var _this = this;
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        this.log('end', args);
        var _a = __read(normalizeClientRequestEndArgs_1.normalizeClientRequestEndArgs.apply(void 0, __spreadArray([], __read(args))), 3), chunk = _a[0], encoding = _a[1], callback = _a[2];
        this.log('normalized arguments:', { chunk: chunk, encoding: encoding, callback: callback });
        var requestBody = this.getRequestBody(chunk);
        var isomorphicRequest = this.toIsomorphicRequest(requestBody);
        var interactiveIsomorphicRequest = __assign(__assign({}, isomorphicRequest), { respondWith: createLazyCallback_1.createLazyCallback({
                maxCalls: 1,
                maxCallsCallback: function () {
                    outvariant_1.invariant(false, 'Failed to respond to "%s %s" request: the "request" event has already been responded to.', isomorphicRequest.method, isomorphicRequest.url.href);
                },
            }) });
        // Notify the interceptor about the request.
        // This will call any "request" listeners the users have.
        this.log('emitting the "request" event for %d listener(s)...', this.emitter.listenerCount('request'));
        this.emitter.emit('request', interactiveIsomorphicRequest);
        // Execute the resolver Promise like a side-effect.
        // Node.js 16 forces "ClientRequest.end" to be synchronous and return "this".
        until_1.until(function () { return __awaiter(_this, void 0, void 0, function () {
            var _a, mockedResponse;
            return __generator(this, function (_b) {
                switch (_b.label) {
                    case 0: return [4 /*yield*/, this.emitter.untilIdle('request', function (_a) {
                            var _b = __read(_a.args, 1), request = _b[0];
                            /**
                             * @note Await only those listeners that are relevant to this request.
                             * This prevents extraneous parallel request from blocking the resolution
                             * of another, unrelated request. For example, during response patching,
                             * when request resolution is nested.
                             */
                            return request.id === interactiveIsomorphicRequest.id;
                        })];
                    case 1:
                        _b.sent();
                        return [4 /*yield*/, interactiveIsomorphicRequest.respondWith.invoked()];
                    case 2:
                        _a = __read.apply(void 0, [_b.sent(), 1]), mockedResponse = _a[0];
                        this.log('event.respondWith called with:', mockedResponse);
                        return [2 /*return*/, mockedResponse];
                }
            });
        }); }).then(function (_a) {
            var e_1, _b;
            var _c = __read(_a, 2), resolverException = _c[0], mockedResponse = _c[1];
            _this.log('the listeners promise awaited!');
            // Halt the request whenever the resolver throws an exception.
            if (resolverException) {
                _this.log('encountered resolver exception, aborting request...', resolverException);
                _this.emit('error', resolverException);
                _this.terminate();
                return _this;
            }
            if (mockedResponse) {
                _this.log('received mocked response:', mockedResponse);
                _this.responseSource = 'mock';
                var isomorphicResponse = toIsoResponse_1.toIsoResponse(mockedResponse);
                _this.respondWith(mockedResponse);
                _this.log(isomorphicResponse.status, isomorphicResponse.statusText, isomorphicResponse.body, '(MOCKED)');
                callback === null || callback === void 0 ? void 0 : callback();
                _this.log('emitting the custom "response" event...');
                _this.emitter.emit('response', isomorphicRequest, isomorphicResponse);
                return _this;
            }
            _this.log('no mocked response received!');
            // Set the response source to "bypass".
            // Any errors emitted past this point are not suppressed.
            _this.responseSource = 'bypass';
            // Propagate previously captured errors.
            // For example, a ECONNREFUSED error when connecting to a non-existing host.
            if (_this.capturedError) {
                _this.emit('error', _this.capturedError);
                return _this;
            }
            // Write the request body chunks in the order of ".write()" calls.
            // Note that no request body has been written prior to this point
            // in order to prevent the Socket to communicate with a potentially
            // existing server.
            _this.log('writing request chunks...', _this.chunks);
            try {
                for (var _d = __values(_this.chunks), _e = _d.next(); !_e.done; _e = _d.next()) {
                    var _f = _e.value, chunk_1 = _f.chunk, encoding_1 = _f.encoding;
                    if (encoding_1) {
                        _super.prototype.write.call(_this, chunk_1, encoding_1);
                    }
                    else {
                        _super.prototype.write.call(_this, chunk_1);
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_e && !_e.done && (_b = _d.return)) _b.call(_d);
                }
                finally { if (e_1) throw e_1.error; }
            }
            _this.once('error', function (error) {
                _this.log('original request error:', error);
            });
            _this.once('abort', function () {
                _this.log('original request aborted!');
            });
            _this.once('response-internal', function (response) { return __awaiter(_this, void 0, void 0, function () {
                var responseBody;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, getIncomingMessageBody_1.getIncomingMessageBody(response)];
                        case 1:
                            responseBody = _a.sent();
                            this.log(response.statusCode, response.statusMessage, responseBody);
                            this.log('original response headers:', response.headers);
                            this.log('emitting the custom "response" event...');
                            this.emitter.emit('response', isomorphicRequest, {
                                status: response.statusCode || 200,
                                statusText: response.statusMessage || 'OK',
                                headers: lib_1.objectToHeaders(response.headers),
                                body: responseBody,
                            });
                            return [2 /*return*/];
                    }
                });
            }); });
            _this.log('performing original request...');
            return _super.prototype.end.apply(_this, __spreadArray([], __read([
                chunk,
                encoding,
                function () {
                    _this.log('original request end!');
                    callback === null || callback === void 0 ? void 0 : callback();
                },
            ].filter(Boolean))));
        });
        return this;
    };
    NodeClientRequest.prototype.emit = function (event) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        this.log('event:%s', event);
        if (event === 'response') {
            this.log('found "response" event, cloning the response...');
            try {
                /**
                 * Clone the response object when emitting the "response" event.
                 * This prevents the response body stream from locking
                 * and allows reading it twice:
                 * 1. Internal "response" event from the observer.
                 * 2. Any external response body listeners.
                 * @see https://github.com/mswjs/interceptors/issues/161
                 */
                var response = data[0];
                var firstClone = cloneIncomingMessage_1.cloneIncomingMessage(response);
                var secondClone = cloneIncomingMessage_1.cloneIncomingMessage(response);
                this.emit('response-internal', secondClone);
                this.log('response successfully cloned, emitting "response" event...');
                return _super.prototype.emit.apply(this, __spreadArray([event, firstClone], __read(data.slice(1))));
            }
            catch (error) {
                this.log('error when cloning response:', error);
                return _super.prototype.emit.apply(this, __spreadArray([event], __read(data)));
            }
        }
        if (event === 'error') {
            var error = data[0];
            var errorCode = error.code || '';
            this.log('error:\n', error);
            // Suppress certain errors while using the "mock" source.
            // For example, no need to destroy this request if it connects
            // to a non-existing hostname but has a mocked response.
            if (this.responseSource === 'mock' &&
                NodeClientRequest.suppressErrorCodes.includes(errorCode)) {
                // Capture the first emitted error in order to replay
                // it later if this request won't have any mocked response.
                if (!this.capturedError) {
                    this.capturedError = error;
                    this.log('captured the first error:', this.capturedError);
                }
                return false;
            }
        }
        return _super.prototype.emit.apply(this, __spreadArray([event], __read(data)));
    };
    NodeClientRequest.prototype.respondWith = function (mockedResponse) {
        var e_2, _a, _b;
        this.log('responding with a mocked response...', mockedResponse);
        var status = mockedResponse.status, statusText = mockedResponse.statusText, headers = mockedResponse.headers, body = mockedResponse.body;
        this.response.statusCode = status;
        this.response.statusMessage = statusText;
        if (headers) {
            this.response.headers = {};
            try {
                for (var _c = __values(Object.entries(headers)), _d = _c.next(); !_d.done; _d = _c.next()) {
                    var _e = __read(_d.value, 2), headerName = _e[0], headerValue = _e[1];
                    (_b = this.response.rawHeaders).push.apply(_b, __spreadArray([headerName], __read((Array.isArray(headerValue) ? headerValue : [headerValue]))));
                    var insensitiveHeaderName = headerName.toLowerCase();
                    var prevHeaders = this.response.headers[insensitiveHeaderName];
                    this.response.headers[insensitiveHeaderName] = prevHeaders
                        ? Array.prototype.concat([], prevHeaders, headerValue)
                        : headerValue;
                }
            }
            catch (e_2_1) { e_2 = { error: e_2_1 }; }
            finally {
                try {
                    if (_d && !_d.done && (_a = _c.return)) _a.call(_c);
                }
                finally { if (e_2) throw e_2.error; }
            }
        }
        this.log('mocked response headers ready:', headers);
        if (body) {
            this.response.push(Buffer.from(body));
        }
        // Push "null" to indicate that the response body is complete
        // and shouldn't be written to anymore.
        this.response.push(null);
        this.response.complete = true;
        /**
         * Set the internal "res" property to the mocked "OutgoingMessage"
         * to make the "ClientRequest" instance think there's data received
         * from the socket.
         * @see https://github.com/nodejs/node/blob/9c405f2591f5833d0247ed0fafdcd68c5b14ce7a/lib/_http_client.js#L501
         */
        // @ts-ignore
        this.res = this.response;
        this.finished = true;
        Object.defineProperty(this, 'writableEnded', {
            value: true,
        });
        this.emit('finish');
        this.emit('response', this.response);
        this.terminate();
    };
    /**
     * Terminates a pending request.
     */
    NodeClientRequest.prototype.terminate = function () {
        // @ts-ignore
        this.agent.destroy();
    };
    NodeClientRequest.prototype.getRequestBody = function (chunk) {
        var writtenRequestBody = bodyBufferToString_1.bodyBufferToString(Buffer.concat(this.requestBody));
        this.log('written request body:', writtenRequestBody);
        // Write the last request body chunk to the internal request body buffer.
        if (chunk) {
            this.requestBody = concatChunkToBuffer_1.concatChunkToBuffer(chunk, this.requestBody);
        }
        var resolvedRequestBody = bodyBufferToString_1.bodyBufferToString(Buffer.concat(this.requestBody));
        this.log('resolved request body:', resolvedRequestBody);
        return resolvedRequestBody;
    };
    NodeClientRequest.prototype.toIsomorphicRequest = function (body) {
        var e_3, _a;
        this.log('creating isomorphic request object...');
        var outgoingHeaders = this.getHeaders();
        this.log('request outgoing headers:', outgoingHeaders);
        var headers = new lib_1.Headers();
        try {
            for (var _b = __values(Object.entries(outgoingHeaders)), _c = _b.next(); !_c.done; _c = _b.next()) {
                var _d = __read(_c.value, 2), headerName = _d[0], headerValue = _d[1];
                if (!headerValue) {
                    continue;
                }
                headers.set(headerName.toLowerCase(), headerValue.toString());
            }
        }
        catch (e_3_1) { e_3 = { error: e_3_1 }; }
        finally {
            try {
                if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
            }
            finally { if (e_3) throw e_3.error; }
        }
        var isomorphicRequest = {
            id: uuid_1.uuidv4(),
            url: this.url,
            method: this.options.method || 'GET',
            credentials: 'same-origin',
            headers: headers,
            body: body,
        };
        this.log('successfully created isomorphic request!', isomorphicRequest);
        return isomorphicRequest;
    };
    /**
     * The list of internal Node.js errors to suppress while
     * using the "mock" response source.
     */
    NodeClientRequest.suppressErrorCodes = [
        'ENOTFOUND',
        'ECONNREFUSED',
        'ECONNRESET',
        'EAI_AGAIN',
    ];
    return NodeClientRequest;
}(http_1.ClientRequest));
exports.NodeClientRequest = NodeClientRequest;
//# sourceMappingURL=NodeClientRequest.js.map
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
exports.normalizeClientRequestArgs = void 0;
var debug_1 = require("debug");
var http_1 = require("http");
var https_1 = require("https");
var getRequestOptionsByUrl_1 = require("../../../utils/getRequestOptionsByUrl");
var getUrlByRequestOptions_1 = require("../../../utils/getUrlByRequestOptions");
var cloneObject_1 = require("../../../utils/cloneObject");
var isObject_1 = require("../../../utils/isObject");
var log = debug_1.debug('http normalizeClientRequestArgs');
function resolveRequestOptions(args, url) {
    // Calling `fetch` provides only URL to `ClientRequest`
    // without any `RequestOptions` or callback.
    if (typeof args[1] === 'undefined' || typeof args[1] === 'function') {
        log('request options not provided, deriving from the url', url);
        return getRequestOptionsByUrl_1.getRequestOptionsByUrl(url);
    }
    if (args[1]) {
        log('has custom RequestOptions!', args[1]);
        var requestOptionsFromUrl = getRequestOptionsByUrl_1.getRequestOptionsByUrl(url);
        log('derived RequestOptions from the URL:', requestOptionsFromUrl);
        /**
         * Clone the request options to lock their state
         * at the moment they are provided to `ClientRequest`.
         * @see https://github.com/mswjs/interceptors/issues/86
         */
        log('cloning RequestOptions...');
        var clonedRequestOptions = cloneObject_1.cloneObject(args[1]);
        log('successfully cloned RequestOptions!', clonedRequestOptions);
        return __assign(__assign({}, requestOptionsFromUrl), clonedRequestOptions);
    }
    log('using an empty object as request options');
    return {};
}
function resolveCallback(args) {
    return typeof args[1] === 'function' ? args[1] : args[2];
}
/**
 * Normalizes parameters given to a `http.request` call
 * so it always has a `URL` and `RequestOptions`.
 */
function normalizeClientRequestArgs(defaultProtocol) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    var url;
    var options;
    var callback;
    log('arguments', args);
    log('using default protocol:', defaultProtocol);
    // Convert a url string into a URL instance
    // and derive request options from it.
    if (typeof args[0] === 'string') {
        log('first argument is a location string:', args[0]);
        url = new URL(args[0]);
        log('created a url:', url);
        var requestOptionsFromUrl = getRequestOptionsByUrl_1.getRequestOptionsByUrl(url);
        log('request options from url:', requestOptionsFromUrl);
        options = resolveRequestOptions(args, url);
        log('resolved request options:', options);
        callback = resolveCallback(args);
    }
    // Handle a given URL instance as-is
    // and derive request options from it.
    else if (args[0] instanceof URL) {
        url = args[0];
        log('first argument is a URL:', url);
        options = resolveRequestOptions(args, url);
        log('derived request options:', options);
        callback = resolveCallback(args);
    }
    // Handle a legacy URL instance and re-normalize from either a RequestOptions object
    // or a WHATWG URL.
    else if ('hash' in args[0] && !('method' in args[0])) {
        var _a = __read(args, 1), legacyUrl = _a[0];
        log('first argument is a legacy URL:', legacyUrl);
        if (legacyUrl.hostname === null) {
            /**
             * We are dealing with a relative url, so use the path as an "option" and
             * merge in any existing options, giving priority to exising options -- i.e. a path in any
             * existing options will take precedence over the one contained in the url. This is consistent
             * with the behaviour in ClientRequest.
             * @see https://github.com/nodejs/node/blob/d84f1312915fe45fe0febe888db692c74894c382/lib/_http_client.js#L122
             */
            log('given legacy URL is relative (no hostname)');
            return isObject_1.isObject(args[1])
                ? normalizeClientRequestArgs(defaultProtocol, __assign({ path: legacyUrl.path }, args[1]), args[2])
                : normalizeClientRequestArgs(defaultProtocol, { path: legacyUrl.path }, args[1]);
        }
        log('given legacy url is absolute');
        // We are dealing with an absolute URL, so convert to WHATWG and try again.
        var resolvedUrl = new URL(legacyUrl.href);
        return args[1] === undefined
            ? normalizeClientRequestArgs(defaultProtocol, resolvedUrl)
            : typeof args[1] === 'function'
                ? normalizeClientRequestArgs(defaultProtocol, resolvedUrl, args[1])
                : normalizeClientRequestArgs(defaultProtocol, resolvedUrl, args[1], args[2]);
    }
    // Handle a given "RequestOptions" object as-is
    // and derive the URL instance from it.
    else if (isObject_1.isObject(args[0])) {
        options = args[0];
        log('first argument is RequestOptions:', options);
        // When handling a "RequestOptions" object without an explicit "protocol",
        // infer the protocol from the request issuing module (http/https).
        options.protocol = options.protocol || defaultProtocol;
        log('normalized request options:', options);
        url = getUrlByRequestOptions_1.getUrlByRequestOptions(options);
        log('created a URL from RequestOptions:', url.href);
        callback = resolveCallback(args);
    }
    else {
        throw new Error("Failed to construct ClientRequest with these parameters: " + args);
    }
    options.protocol = options.protocol || url.protocol;
    options.method = options.method || 'GET';
    /**
     * Infer a fallback agent from the URL protocol.
     * The interception is done on the "ClientRequest" level ("NodeClientRequest")
     * and it may miss the correct agent. Always align the agent
     * with the URL protocol, if not provided.
     *
     * @note Respect the "agent: false" value.
     */
    if (typeof options.agent === 'undefined') {
        var agent = options.protocol === 'https:'
            ? new https_1.Agent({
                rejectUnauthorized: options.rejectUnauthorized,
            })
            : new http_1.Agent();
        options.agent = agent;
        log('resolved fallback agent:', agent);
    }
    /**
     * Ensure that the default Agent is always set.
     * This prevents the protocol mismatch for requests with { agent: false },
     * where the global Agent is inferred.
     * @see https://github.com/mswjs/msw/issues/1150
     * @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L130
     * @see https://github.com/nodejs/node/blob/418ff70b810f0e7112d48baaa72932a56cfa213b/lib/_http_client.js#L157-L159
     */
    if (!options._defaultAgent) {
        log('has no default agent, setting the default agent for "%s"', options.protocol);
        options._defaultAgent =
            options.protocol === 'https:' ? https_1.globalAgent : http_1.globalAgent;
    }
    log('successfully resolved url:', url.href);
    log('successfully resolved options:', options);
    log('successfully resolved callback:', callback);
    return [url, options, callback];
}
exports.normalizeClientRequestArgs = normalizeClientRequestArgs;
//# sourceMappingURL=normalizeClientRequestArgs.js.map
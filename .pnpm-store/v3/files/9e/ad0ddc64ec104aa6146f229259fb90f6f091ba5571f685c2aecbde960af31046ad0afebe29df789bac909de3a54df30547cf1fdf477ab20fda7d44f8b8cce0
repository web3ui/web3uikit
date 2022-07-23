"use strict";
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
exports.getUrlByRequestOptions = exports.DEFAULT_PATH = void 0;
var http_1 = require("http");
var debug = require('debug')('utils getUrlByRequestOptions');
exports.DEFAULT_PATH = '/';
var DEFAULT_PROTOCOL = 'http:';
var DEFAULT_HOST = 'localhost';
var DEFAULT_PORT = 80;
var SSL_PORT = 443;
function getAgent(options) {
    return options.agent instanceof http_1.Agent ? options.agent : undefined;
}
function getProtocolByRequestOptions(options) {
    var _a, _b;
    if (options.protocol) {
        return options.protocol;
    }
    var agent = getAgent(options);
    var agentProtocol = (_a = agent) === null || _a === void 0 ? void 0 : _a.protocol;
    if (agentProtocol) {
        return agentProtocol;
    }
    var port = getPortByRequestOptions(options);
    var isSecureRequest = options.cert || port === SSL_PORT;
    return isSecureRequest ? 'https:' : ((_b = options.uri) === null || _b === void 0 ? void 0 : _b.protocol) || DEFAULT_PROTOCOL;
}
function getPortByRequestOptions(options) {
    var _a, _b;
    var agent = getAgent(options);
    var agentPort = ((_a = agent) === null || _a === void 0 ? void 0 : _a.options.port) ||
        ((_b = agent) === null || _b === void 0 ? void 0 : _b.defaultPort);
    var optionsPort = options.port;
    if (optionsPort || agentPort) {
        var explicitPort = optionsPort || agentPort || DEFAULT_PORT;
        return Number(explicitPort);
    }
}
function getHostByRequestOptions(options) {
    return options.hostname || options.host || DEFAULT_HOST;
}
function getAuthByRequestOptions(options) {
    if (options.auth) {
        var _a = __read(options.auth.split(':'), 2), username = _a[0], password = _a[1];
        return { username: username, password: password };
    }
}
/**
 * Creates a `URL` instance from a given `RequestOptions` object.
 */
function getUrlByRequestOptions(options) {
    debug('request options', options);
    var protocol = getProtocolByRequestOptions(options);
    var host = getHostByRequestOptions(options);
    var port = getPortByRequestOptions(options);
    var path = options.path || exports.DEFAULT_PATH;
    var auth = getAuthByRequestOptions(options);
    debug('protocol', protocol);
    debug('host', host);
    debug('port', port);
    debug('path', path);
    var baseUrl = protocol + "//" + host;
    debug('base URL:', baseUrl);
    var url = options.uri ? new URL(options.uri.href) : new URL(path, baseUrl);
    if (port) {
        debug('detected explicit port', port);
        url.port = port.toString();
    }
    if (auth) {
        debug('resolved auth', auth);
        url.username = auth.username;
        url.password = auth.password;
    }
    debug('created URL:', url);
    return url;
}
exports.getUrlByRequestOptions = getUrlByRequestOptions;
//# sourceMappingURL=getUrlByRequestOptions.js.map
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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
var NodeClientRequest_1 = require("./NodeClientRequest");
var normalizeClientRequestArgs_1 = require("./utils/normalizeClientRequestArgs");
function get(protocol, options) {
    return function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var clientRequestArgs = normalizeClientRequestArgs_1.normalizeClientRequestArgs.apply(void 0, __spreadArray([protocol + ":"], __read(args)));
        var request = new NodeClientRequest_1.NodeClientRequest(clientRequestArgs, options);
        /**
         * @note https://nodejs.org/api/http.html#httpgetoptions-callback
         * "http.get" sets the method to "GET" and calls "req.end()" automatically.
         */
        request.end();
        return request;
    };
}
exports.get = get;
//# sourceMappingURL=http.get.js.map
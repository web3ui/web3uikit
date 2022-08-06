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
exports.listToHeaders = void 0;
var Headers_1 = require("../Headers");
function listToHeaders(list) {
    var headers = new Headers_1.default();
    list.forEach(function (_a) {
        var _b = __read(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        values.forEach(function (value) {
            headers.append(name, value);
        });
    });
    return headers;
}
exports.listToHeaders = listToHeaders;

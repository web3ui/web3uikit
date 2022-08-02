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
exports.headersToString = void 0;
var headersToList_1 = require("./headersToList");
/**
 * Converts a given `Headers` instance to its string representation.
 */
function headersToString(headers) {
    var list = headersToList_1.headersToList(headers);
    var lines = list.map(function (_a) {
        var _b = __read(_a, 2), name = _b[0], value = _b[1];
        var values = [].concat(value);
        return name + ": " + values.join(', ');
    });
    return lines.join('\r\n');
}
exports.headersToString = headersToString;

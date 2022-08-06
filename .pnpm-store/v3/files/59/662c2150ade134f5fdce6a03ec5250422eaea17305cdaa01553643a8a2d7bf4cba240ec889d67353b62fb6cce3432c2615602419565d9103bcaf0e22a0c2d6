"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stringToHeaders = void 0;
var Headers_1 = require("../Headers");
/**
 * Converts a string representation of headers (i.e. from XMLHttpRequest)
 * to a new `Headers` instance.
 */
function stringToHeaders(str) {
    var lines = str.trim().split(/[\r\n]+/);
    return lines.reduce(function (headers, line) {
        if (line.trim() === '') {
            return headers;
        }
        var parts = line.split(': ');
        var name = parts.shift();
        var value = parts.join(': ');
        headers.append(name, value);
        return headers;
    }, new Headers_1.default());
}
exports.stringToHeaders = stringToHeaders;

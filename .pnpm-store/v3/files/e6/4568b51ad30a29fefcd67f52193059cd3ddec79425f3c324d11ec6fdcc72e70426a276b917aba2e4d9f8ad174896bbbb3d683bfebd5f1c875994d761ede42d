"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appendHeader = void 0;
/**
 * Appends a given header to the headers object.
 * Converts multiple values into a list.
 */
function appendHeader(headers, name, value) {
    var _a, _b;
    if (headers.hasOwnProperty(name)) {
        return Object.assign({}, headers, (_a = {},
            _a[name] = [].concat(headers[name]).concat(value),
            _a));
    }
    return Object.assign({}, headers, (_b = {},
        _b[name] = value,
        _b));
}
exports.appendHeader = appendHeader;

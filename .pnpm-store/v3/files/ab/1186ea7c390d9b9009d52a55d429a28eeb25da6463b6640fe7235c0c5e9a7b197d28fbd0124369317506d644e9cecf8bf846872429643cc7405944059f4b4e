"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeHeaderName = void 0;
var HEADERS_INVALID_CHARACTERS = /[^a-z0-9\-#$%&'*+.^_`|~]/i;
function normalizeHeaderName(name) {
    if (typeof name !== 'string') {
        name = String(name);
    }
    if (HEADERS_INVALID_CHARACTERS.test(name) || name.trim() === '') {
        throw new TypeError('Invalid character in header field name');
    }
    return name.toLowerCase();
}
exports.normalizeHeaderName = normalizeHeaderName;

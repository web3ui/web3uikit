"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bufferFrom = void 0;
/**
 * Convert a given string into a `Uint8Array`.
 * We don't use `TextEncoder` because it's unavailable in some environments.
 */
function bufferFrom(init) {
    var encodedString = encodeURIComponent(init);
    var binaryString = encodedString.replace(/%([0-9A-F]{2})/g, function (_, char) {
        return String.fromCharCode(('0x' + char));
    });
    var buffer = new Uint8Array(binaryString.length);
    Array.prototype.forEach.call(binaryString, function (char, index) {
        buffer[index] = char.charCodeAt(0);
    });
    return buffer;
}
exports.bufferFrom = bufferFrom;
//# sourceMappingURL=bufferFrom.js.map
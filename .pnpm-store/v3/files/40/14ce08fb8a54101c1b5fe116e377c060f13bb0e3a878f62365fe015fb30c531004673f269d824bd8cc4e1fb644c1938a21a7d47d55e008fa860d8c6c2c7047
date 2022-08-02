"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.bodyBufferToString = void 0;
function bodyBufferToString(buffer) {
    var utfEncodedBuffer = buffer.toString('utf8');
    var bufferCopy = Buffer.from(utfEncodedBuffer);
    var isUtf8 = bufferCopy.equals(buffer);
    return isUtf8 ? utfEncodedBuffer : buffer.toString('hex');
}
exports.bodyBufferToString = bodyBufferToString;
//# sourceMappingURL=bodyBufferToString.js.map
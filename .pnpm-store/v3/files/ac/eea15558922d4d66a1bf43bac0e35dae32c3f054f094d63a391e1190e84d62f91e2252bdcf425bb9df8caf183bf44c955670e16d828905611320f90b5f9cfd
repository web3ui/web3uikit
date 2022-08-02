"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeClientRequestWriteArgs = void 0;
var debug_1 = require("debug");
var log = debug_1.debug('http normalizeWriteArgs');
function normalizeClientRequestWriteArgs(args) {
    log('normalizing ClientRequest.write arguments...', args);
    var chunk = args[0];
    var encoding = typeof args[1] === 'string' ? args[1] : undefined;
    var callback = typeof args[1] === 'function' ? args[1] : args[2];
    var writeArgs = [
        chunk,
        encoding,
        callback,
    ];
    log('successfully normalized ClientRequest.write arguments:', writeArgs);
    return writeArgs;
}
exports.normalizeClientRequestWriteArgs = normalizeClientRequestWriteArgs;
//# sourceMappingURL=normalizeClientRequestWriteArgs.js.map
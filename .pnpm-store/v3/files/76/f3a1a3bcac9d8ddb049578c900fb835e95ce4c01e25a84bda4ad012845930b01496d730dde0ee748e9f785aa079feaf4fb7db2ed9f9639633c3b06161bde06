"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getIncomingMessageBody = void 0;
var debug_1 = require("debug");
var stream_1 = require("stream");
var zlib = __importStar(require("zlib"));
var log = debug_1.debug('http getIncomingMessageBody');
function getIncomingMessageBody(response) {
    return new Promise(function (resolve, reject) {
        log('cloning the original response...');
        // Pipe the original response to support non-clone
        // "response" input. No need to clone the response,
        // as we always have access to the full "response" input,
        // either a clone or an original one (in tests).
        var responseClone = response.pipe(new stream_1.PassThrough());
        var stream = response.headers['content-encoding'] === 'gzip'
            ? responseClone.pipe(zlib.createGunzip())
            : responseClone;
        var encoding = response.readableEncoding || 'utf8';
        stream.setEncoding(encoding);
        log('using encoding:', encoding);
        var body = '';
        stream.on('data', function (responseBody) {
            log('response body read:', responseBody);
            body += responseBody;
        });
        stream.once('end', function () {
            log('response body end');
            resolve(body);
        });
        stream.once('error', function (error) {
            log('error while reading response body:', error);
            reject(error);
        });
    });
}
exports.getIncomingMessageBody = getIncomingMessageBody;
//# sourceMappingURL=getIncomingMessageBody.js.map
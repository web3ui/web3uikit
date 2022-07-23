"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toIsoResponse = void 0;
var headers_polyfill_1 = require("headers-polyfill");
/**
 * Converts a given mocked response object into an isomorphic response.
 */
function toIsoResponse(response) {
    return {
        status: response.status || 200,
        statusText: response.statusText || 'OK',
        headers: headers_polyfill_1.objectToHeaders(response.headers || {}),
        body: response.body,
    };
}
exports.toIsoResponse = toIsoResponse;
//# sourceMappingURL=toIsoResponse.js.map
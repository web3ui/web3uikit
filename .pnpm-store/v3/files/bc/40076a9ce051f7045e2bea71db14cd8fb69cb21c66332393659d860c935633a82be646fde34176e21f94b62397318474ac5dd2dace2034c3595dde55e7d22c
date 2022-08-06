"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.flattenHeadersObject = void 0;
var reduceHeadersObject_1 = require("./reduceHeadersObject");
function flattenHeadersObject(headersObject) {
    return reduceHeadersObject_1.reduceHeadersObject(headersObject, function (headers, name, value) {
        headers[name] = [].concat(value).join('; ');
        return headers;
    }, {});
}
exports.flattenHeadersObject = flattenHeadersObject;

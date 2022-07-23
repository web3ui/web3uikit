"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.objectToHeaders = void 0;
var Headers_1 = require("../Headers");
var reduceHeadersObject_1 = require("./reduceHeadersObject");
/**
 * Converts a given headers object to a new `Headers` instance.
 */
function objectToHeaders(headersObject) {
    return reduceHeadersObject_1.reduceHeadersObject(headersObject, function (headers, name, value) {
        var values = [].concat(value).filter(Boolean);
        values.forEach(function (value) {
            headers.append(name, value);
        });
        return headers;
    }, new Headers_1.default());
}
exports.objectToHeaders = objectToHeaders;

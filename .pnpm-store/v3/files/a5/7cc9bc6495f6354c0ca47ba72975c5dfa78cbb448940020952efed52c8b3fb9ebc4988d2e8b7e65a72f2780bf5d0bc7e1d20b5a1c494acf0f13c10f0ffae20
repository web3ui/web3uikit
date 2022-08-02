"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.reduceHeadersObject = void 0;
/**
 * Reduces given headers object instnace.
 */
function reduceHeadersObject(headers, reducer, initialState) {
    return Object.keys(headers).reduce(function (nextHeaders, name) {
        return reducer(nextHeaders, name, headers[name]);
    }, initialState);
}
exports.reduceHeadersObject = reduceHeadersObject;

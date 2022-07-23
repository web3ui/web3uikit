"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.headersToObject = void 0;
// List of headers that cannot have multiple values,
// while potentially having a comma in their single value.
var singleValueHeaders = ['user-agent'];
/**
 * Converts a given `Headers` instance into a plain object.
 * Respects headers with multiple values.
 */
function headersToObject(headers) {
    var headersObject = {};
    headers.forEach(function (value, name) {
        var isMultiValue = !singleValueHeaders.includes(name.toLowerCase()) && value.includes(',');
        headersObject[name] = isMultiValue
            ? value.split(',').map(function (s) { return s.trim(); })
            : value;
    });
    return headersObject;
}
exports.headersToObject = headersToObject;

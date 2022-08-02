"use strict";
var __read = (this && this.__read) || function (o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneObject = void 0;
var debug = require('debug')('cloneObject');
function isPlainObject(obj) {
    var _a;
    debug('is plain object?', obj);
    if (obj == null || !((_a = obj.constructor) === null || _a === void 0 ? void 0 : _a.name)) {
        debug('given object is undefined, not a plain object...');
        return false;
    }
    debug('checking the object constructor:', obj.constructor.name);
    return obj.constructor.name === 'Object';
}
function cloneObject(obj) {
    debug('cloning object:', obj);
    var enumerableProperties = Object.entries(obj).reduce(function (acc, _a) {
        var _b = __read(_a, 2), key = _b[0], value = _b[1];
        debug('analyzing key-value pair:', key, value);
        // Recursively clone only plain objects, omitting class instances.
        acc[key] = isPlainObject(value) ? cloneObject(value) : value;
        return acc;
    }, {});
    return isPlainObject(obj)
        ? enumerableProperties
        : Object.assign(Object.getPrototypeOf(obj), enumerableProperties);
}
exports.cloneObject = cloneObject;
//# sourceMappingURL=cloneObject.js.map
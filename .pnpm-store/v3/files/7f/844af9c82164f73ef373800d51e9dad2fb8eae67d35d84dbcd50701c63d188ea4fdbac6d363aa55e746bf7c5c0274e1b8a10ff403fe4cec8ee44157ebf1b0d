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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var __values = (this && this.__values) || function(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.cloneIncomingMessage = exports.IS_CLONE = void 0;
var http_1 = require("http");
var stream_1 = require("stream");
exports.IS_CLONE = Symbol('isClone');
/**
 * Clones a given `http.IncomingMessage` instance.
 */
function cloneIncomingMessage(message) {
    var clone = message.pipe(new stream_1.PassThrough());
    // Inherit all direct "IncomingMessage" properties.
    inheritProperties(message, clone);
    // Deeply inherit the message prototypes (Readable, Stream, EventEmitter, etc.).
    var clonedPrototype = Object.create(http_1.IncomingMessage.prototype);
    getPrototypes(clone).forEach(function (prototype) {
        inheritProperties(prototype, clonedPrototype);
    });
    Object.setPrototypeOf(clone, clonedPrototype);
    Object.defineProperty(clone, exports.IS_CLONE, {
        enumerable: true,
        value: true,
    });
    return clone;
}
exports.cloneIncomingMessage = cloneIncomingMessage;
/**
 * Returns a list of all prototypes the given object extends.
 */
function getPrototypes(source) {
    var prototypes = [];
    var current = source;
    while ((current = Object.getPrototypeOf(current))) {
        prototypes.push(current);
    }
    return prototypes;
}
/**
 * Inherits a given target object properties and symbols
 * onto the given source object.
 * @param source Object which should acquire properties.
 * @param target Object to inherit the properties from.
 */
function inheritProperties(source, target) {
    var e_1, _a;
    var properties = __spreadArray(__spreadArray([], __read(Object.getOwnPropertyNames(source))), __read(Object.getOwnPropertySymbols(source)));
    try {
        for (var properties_1 = __values(properties), properties_1_1 = properties_1.next(); !properties_1_1.done; properties_1_1 = properties_1.next()) {
            var property = properties_1_1.value;
            if (target.hasOwnProperty(property)) {
                continue;
            }
            var descriptor = Object.getOwnPropertyDescriptor(source, property);
            if (!descriptor) {
                continue;
            }
            Object.defineProperty(target, property, descriptor);
        }
    }
    catch (e_1_1) { e_1 = { error: e_1_1 }; }
    finally {
        try {
            if (properties_1_1 && !properties_1_1.done && (_a = properties_1.return)) _a.call(properties_1);
        }
        finally { if (e_1) throw e_1.error; }
    }
}
//# sourceMappingURL=cloneIncomingMessage.js.map
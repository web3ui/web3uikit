"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.StrictEventEmitter = void 0;
var events_1 = require("events");
var StrictEventEmitter = /** @class */ (function (_super) {
    __extends(StrictEventEmitter, _super);
    function StrictEventEmitter() {
        return _super.call(this) || this;
    }
    StrictEventEmitter.prototype.on = function (event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.once = function (event, listener) {
        return _super.prototype.on.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.off = function (event, listener) {
        return _super.prototype.off.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.emit = function (event) {
        var data = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            data[_i - 1] = arguments[_i];
        }
        return _super.prototype.emit.apply(this, __spreadArrays([event.toString()], data));
    };
    StrictEventEmitter.prototype.addListener = function (event, listener) {
        return _super.prototype.addListener.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.prependListener = function (event, listener) {
        return _super.prototype.prependListener.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.prependOnceListener = function (event, listener) {
        return _super.prototype.prependOnceListener.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.removeListener = function (event, listener) {
        return _super.prototype.removeListener.call(this, event.toString(), listener);
    };
    StrictEventEmitter.prototype.removeAllListeners = function (event) {
        return _super.prototype.removeAllListeners.call(this, event ? event.toString() : undefined);
    };
    StrictEventEmitter.prototype.eventNames = function () {
        return _super.prototype.eventNames.call(this);
    };
    StrictEventEmitter.prototype.listeners = function (event) {
        return _super.prototype.listeners.call(this, event.toString());
    };
    StrictEventEmitter.prototype.rawListeners = function (event) {
        return _super.prototype.rawListeners.call(this, event.toString());
    };
    StrictEventEmitter.prototype.listenerCount = function (event) {
        return _super.prototype.listenerCount.call(this, event.toString());
    };
    return StrictEventEmitter;
}(events_1.EventEmitter));
exports.StrictEventEmitter = StrictEventEmitter;

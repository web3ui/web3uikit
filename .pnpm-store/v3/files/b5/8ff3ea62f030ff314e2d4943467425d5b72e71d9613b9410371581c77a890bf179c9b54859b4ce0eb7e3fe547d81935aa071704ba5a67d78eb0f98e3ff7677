"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventPolyfill = void 0;
var EventPolyfill = /** @class */ (function () {
    function EventPolyfill(type, options) {
        this.AT_TARGET = 0;
        this.BUBBLING_PHASE = 0;
        this.CAPTURING_PHASE = 0;
        this.NONE = 0;
        this.type = '';
        this.srcElement = null;
        this.currentTarget = null;
        this.eventPhase = 0;
        this.isTrusted = true;
        this.composed = false;
        this.cancelable = true;
        this.defaultPrevented = false;
        this.bubbles = true;
        this.lengthComputable = true;
        this.loaded = 0;
        this.total = 0;
        this.cancelBubble = false;
        this.returnValue = true;
        this.type = type;
        this.target = (options === null || options === void 0 ? void 0 : options.target) || null;
        this.currentTarget = (options === null || options === void 0 ? void 0 : options.currentTarget) || null;
        this.timeStamp = Date.now();
    }
    EventPolyfill.prototype.composedPath = function () {
        return [];
    };
    EventPolyfill.prototype.initEvent = function (type, bubbles, cancelable) {
        this.type = type;
        this.bubbles = !!bubbles;
        this.cancelable = !!cancelable;
    };
    EventPolyfill.prototype.preventDefault = function () {
        this.defaultPrevented = true;
    };
    EventPolyfill.prototype.stopPropagation = function () { };
    EventPolyfill.prototype.stopImmediatePropagation = function () { };
    return EventPolyfill;
}());
exports.EventPolyfill = EventPolyfill;
//# sourceMappingURL=EventPolyfill.js.map
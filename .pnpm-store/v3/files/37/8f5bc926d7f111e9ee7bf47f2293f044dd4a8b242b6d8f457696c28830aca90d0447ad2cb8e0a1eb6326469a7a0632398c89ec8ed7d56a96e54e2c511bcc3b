"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProgressEventPolyfill = void 0;
var EventPolyfill_1 = require("./EventPolyfill");
var ProgressEventPolyfill = /** @class */ (function (_super) {
    __extends(ProgressEventPolyfill, _super);
    function ProgressEventPolyfill(type, init) {
        var _this = _super.call(this, type) || this;
        _this.lengthComputable = (init === null || init === void 0 ? void 0 : init.lengthComputable) || false;
        _this.composed = (init === null || init === void 0 ? void 0 : init.composed) || false;
        _this.loaded = (init === null || init === void 0 ? void 0 : init.loaded) || 0;
        _this.total = (init === null || init === void 0 ? void 0 : init.total) || 0;
        return _this;
    }
    return ProgressEventPolyfill;
}(EventPolyfill_1.EventPolyfill));
exports.ProgressEventPolyfill = ProgressEventPolyfill;
//# sourceMappingURL=ProgressEventPolyfill.js.map
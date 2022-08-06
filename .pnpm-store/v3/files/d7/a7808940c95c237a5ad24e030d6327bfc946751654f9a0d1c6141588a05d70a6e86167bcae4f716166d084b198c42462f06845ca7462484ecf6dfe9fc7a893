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
exports.XMLHttpRequestInterceptor = void 0;
var outvariant_1 = require("outvariant");
var glossary_1 = require("../../glossary");
var Interceptor_1 = require("../../Interceptor");
var XMLHttpRequestOverride_1 = require("./XMLHttpRequestOverride");
var XMLHttpRequestInterceptor = /** @class */ (function (_super) {
    __extends(XMLHttpRequestInterceptor, _super);
    function XMLHttpRequestInterceptor() {
        return _super.call(this, XMLHttpRequestInterceptor.symbol) || this;
    }
    XMLHttpRequestInterceptor.prototype.checkEnvironment = function () {
        return (typeof window !== 'undefined' &&
            typeof window.XMLHttpRequest !== 'undefined');
    };
    XMLHttpRequestInterceptor.prototype.setup = function () {
        var log = this.log.extend('setup');
        log('patching "XMLHttpRequest" module...');
        var PureXMLHttpRequest = window.XMLHttpRequest;
        outvariant_1.invariant(!PureXMLHttpRequest[glossary_1.IS_PATCHED_MODULE], 'Failed to patch the "XMLHttpRequest" module: already patched.');
        window.XMLHttpRequest = XMLHttpRequestOverride_1.createXMLHttpRequestOverride({
            XMLHttpRequest: PureXMLHttpRequest,
            emitter: this.emitter,
            log: this.log,
        });
        log('native "XMLHttpRequest" module patched!', window.XMLHttpRequest.name);
        Object.defineProperty(window.XMLHttpRequest, glossary_1.IS_PATCHED_MODULE, {
            enumerable: true,
            configurable: true,
            value: true,
        });
        this.subscriptions.push(function () {
            Object.defineProperty(window.XMLHttpRequest, glossary_1.IS_PATCHED_MODULE, {
                value: undefined,
            });
            window.XMLHttpRequest = PureXMLHttpRequest;
            log('native "XMLHttpRequest" module restored!', window.XMLHttpRequest.name);
        });
    };
    XMLHttpRequestInterceptor.symbol = Symbol('xhr');
    return XMLHttpRequestInterceptor;
}(Interceptor_1.Interceptor));
exports.XMLHttpRequestInterceptor = XMLHttpRequestInterceptor;
//# sourceMappingURL=index.js.map
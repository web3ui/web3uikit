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
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.invariant = exports.createInvariantWith = exports.InvariantError = void 0;
var format_1 = require("./format");
var STACK_FRAMES_TO_IGNORE = 2;
/**
 * Remove the "outvariant" package trace from the given error.
 * This scopes down the error stack to the relevant parts
 * when used in other applications.
 */
function cleanErrorStack(error) {
    if (!error.stack) {
        return;
    }
    var nextStack = error.stack.split('\n');
    nextStack.splice(1, STACK_FRAMES_TO_IGNORE);
    error.stack = nextStack.join('\n');
}
var InvariantError = /** @class */ (function (_super) {
    __extends(InvariantError, _super);
    function InvariantError(message) {
        var positionals = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            positionals[_i - 1] = arguments[_i];
        }
        var _this = _super.call(this, message) || this;
        _this.message = message;
        _this.name = 'Invariant Violation';
        _this.message = format_1.format.apply(void 0, __spreadArray([message], positionals));
        cleanErrorStack(_this);
        return _this;
    }
    return InvariantError;
}(Error));
exports.InvariantError = InvariantError;
function createInvariantWith(ErrorConstructor) {
    var invariant = function (predicate, message) {
        var positionals = [];
        for (var _i = 2; _i < arguments.length; _i++) {
            positionals[_i - 2] = arguments[_i];
        }
        if (!predicate) {
            var resolvedMessage = format_1.format.apply(void 0, __spreadArray([message], positionals));
            var isConstructor = !!ErrorConstructor.prototype.name;
            var error = isConstructor
                ? // @ts-expect-error Construct/call signature too dynamic.
                    new ErrorConstructor(resolvedMessage)
                : // @ts-expect-error Construct/call signature too dynamic.
                    ErrorConstructor(resolvedMessage);
            cleanErrorStack(error);
            throw error;
        }
    };
    return invariant;
}
exports.createInvariantWith = createInvariantWith;
function polymorphicInvariant(ErrorClass) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
    return createInvariantWith(ErrorClass).apply(void 0, args);
}
exports.invariant = createInvariantWith(InvariantError);
exports.invariant.as = polymorphicInvariant;

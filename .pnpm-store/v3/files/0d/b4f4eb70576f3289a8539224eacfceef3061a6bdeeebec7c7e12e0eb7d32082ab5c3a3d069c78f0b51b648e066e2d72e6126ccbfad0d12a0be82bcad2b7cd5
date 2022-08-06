"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.nextTickAsync = exports.nextTick = void 0;
function nextTick(callback) {
    setTimeout(callback, 0);
}
exports.nextTick = nextTick;
function nextTickAsync(callback) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            resolve(callback());
        }, 0);
    });
}
exports.nextTickAsync = nextTickAsync;
//# sourceMappingURL=nextTick.js.map
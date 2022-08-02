"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.joinPathFragments = exports.normalizePath = void 0;
const path = require("path");
function removeWindowsDriveLetter(osSpecificPath) {
    return osSpecificPath.replace(/^[A-Z]:/, '');
}
/**
 * Coverts an os specific path to a unix style path
 */
function normalizePath(osSpecificPath) {
    return removeWindowsDriveLetter(osSpecificPath).split('\\').join('/');
}
exports.normalizePath = normalizePath;
/**
 * Normalized path fragments and joins them
 */
function joinPathFragments(...fragments) {
    return normalizePath(path.join(...fragments));
}
exports.joinPathFragments = joinPathFragments;
//# sourceMappingURL=path.js.map
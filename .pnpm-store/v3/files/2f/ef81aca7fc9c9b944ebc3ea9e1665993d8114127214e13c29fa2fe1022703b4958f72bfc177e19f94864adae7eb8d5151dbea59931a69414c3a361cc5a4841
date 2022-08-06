"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.transformAbsPath = void 0;
const path_1 = __importDefault(require("path"));
const vite_1 = require("vite");
// We need to convert from an absolute path, to a traditional node module import path,
// so that vite can correctly pre-bundle/optimize
function transformAbsPath(absPath) {
    const splits = absPath.split(`node_modules${path_1.default.sep}`);
    // Return everything after the final "node_modules/"
    const module = (0, vite_1.normalizePath)(splits[splits.length - 1]);
    return module;
}
exports.transformAbsPath = transformAbsPath;
//# sourceMappingURL=transform-abs-path.js.map
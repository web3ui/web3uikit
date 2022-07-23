"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.installSourceMapSupport = exports.SourcemapMap = void 0;
const tslib_1 = require("tslib");
const source_map_support_1 = tslib_1.__importDefault(require("source-map-support"));
exports.SourcemapMap = new Map();
function installSourceMapSupport() {
    source_map_support_1.default.install({
        handleUncaughtExceptions: false,
        environment: 'node',
        retrieveSourceMap(file) {
            if (exports.SourcemapMap.has(file)) {
                return {
                    url: file,
                    map: exports.SourcemapMap.get(file),
                };
            }
            return null;
        },
    });
}
exports.installSourceMapSupport = installSourceMapSupport;
//# sourceMappingURL=index.js.map
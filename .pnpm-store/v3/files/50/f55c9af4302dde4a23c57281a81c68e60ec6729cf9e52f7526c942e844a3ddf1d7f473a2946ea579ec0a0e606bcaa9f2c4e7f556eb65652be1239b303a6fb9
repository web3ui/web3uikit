"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.assetGlobsToFiles = void 0;
const glob = require("glob");
const path_1 = require("path");
function assetGlobsToFiles(assets, rootDir, outDir) {
    const files = [];
    const globbedFiles = (pattern, input = '', ignore = [], dot = false) => {
        return glob.sync(pattern, {
            cwd: input,
            nodir: true,
            dot,
            ignore,
        });
    };
    assets.forEach((asset) => {
        var _a;
        if (typeof asset === 'string') {
            globbedFiles(asset, rootDir).forEach((globbedFile) => {
                files.push({
                    input: (0, path_1.join)(rootDir, globbedFile),
                    output: (0, path_1.join)(outDir, (0, path_1.basename)(globbedFile)),
                });
            });
        }
        else {
            globbedFiles(asset.glob, (0, path_1.join)(rootDir, asset.input), asset.ignore, (_a = asset.dot) !== null && _a !== void 0 ? _a : false).forEach((globbedFile) => {
                files.push({
                    input: (0, path_1.join)(rootDir, asset.input, globbedFile),
                    output: (0, path_1.join)(outDir, asset.output, globbedFile),
                });
            });
        }
    });
    return files;
}
exports.assetGlobsToFiles = assetGlobsToFiles;
//# sourceMappingURL=assets.js.map
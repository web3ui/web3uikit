"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.cacheDir = void 0;
const path_1 = require("path");
const app_root_1 = require("./app-root");
const fileutils_1 = require("./fileutils");
function readCacheDirectoryProperty(root) {
    try {
        const nxJson = (0, fileutils_1.readJsonFile)((0, path_1.join)(root, 'nx.json'));
        return nxJson.tasksRunnerOptions.default.options.cacheDirectory;
    }
    catch (_a) {
        return undefined;
    }
}
function cacheDirectory(root, cacheDirectory) {
    const cacheDirFromEnv = process.env.NX_CACHE_DIRECTORY;
    if (cacheDirFromEnv) {
        cacheDirectory = cacheDirFromEnv;
    }
    if (cacheDirectory) {
        if ((0, path_1.isAbsolute)(cacheDirectory)) {
            return cacheDirectory;
        }
        else {
            return (0, path_1.join)(root, cacheDirectory);
        }
    }
    else {
        return (0, path_1.join)(root, 'node_modules', '.cache', 'nx');
    }
}
/**
 * Path to the directory where Nx stores its cache and daemon-related files.
 */
exports.cacheDir = cacheDirectory(app_root_1.workspaceRoot, readCacheDirectoryProperty(app_root_1.workspaceRoot));
//# sourceMappingURL=cache-directory.js.map
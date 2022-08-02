"use strict";
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectGraphCacheDirectory = exports.cacheDir = void 0;
const path_1 = require("path");
const workspace_root_1 = require("./workspace-root");
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
exports.cacheDir = cacheDirectory(workspace_root_1.workspaceRoot, readCacheDirectoryProperty(workspace_root_1.workspaceRoot));
exports.projectGraphCacheDirectory = (_a = process.env.NX_PROJECT_GRAPH_CACHE_DIRECTORY) !== null && _a !== void 0 ? _a : exports.cacheDir;
//# sourceMappingURL=cache-directory.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fileExists = exports.workspaceRoot = exports.appRootPath = void 0;
const path = require("path");
const fs_1 = require("fs");
/**
 * The root of the workspace.
 *
 * @deprecated use workspaceRoot instead
 */
exports.appRootPath = pathInner(__dirname);
/**
 * The root of the workspace
 */
exports.workspaceRoot = exports.appRootPath;
function pathInner(dir) {
    if (process.env.NX_WORKSPACE_ROOT_PATH)
        return process.env.NX_WORKSPACE_ROOT_PATH;
    if (path.dirname(dir) === dir)
        return process.cwd();
    if (fileExists(path.join(dir, 'workspace.json')) ||
        fileExists(path.join(dir, 'nx.json')) ||
        fileExists(path.join(dir, 'angular.json'))) {
        return dir;
    }
    else {
        return pathInner(path.dirname(dir));
    }
}
function fileExists(filePath) {
    try {
        return (0, fs_1.statSync)(filePath).isFile();
    }
    catch (err) {
        return false;
    }
}
exports.fileExists = fileExists;
//# sourceMappingURL=app-root.js.map
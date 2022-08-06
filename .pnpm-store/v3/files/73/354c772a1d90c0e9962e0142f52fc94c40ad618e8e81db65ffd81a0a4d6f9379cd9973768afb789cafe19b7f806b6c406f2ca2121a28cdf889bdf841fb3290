"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWorkspaceRoot = void 0;
const fs_1 = require("fs");
const path = require("path");
/**
 * Recursive function that walks back up the directory
 * tree to try and find a workspace file.
 *
 * @param dir Directory to start searching with
 */
function findWorkspaceRoot(dir) {
    if ((0, fs_1.existsSync)(path.join(dir, 'angular.json'))) {
        return { type: 'angular', dir };
    }
    if ((0, fs_1.existsSync)(path.join(dir, 'nx.json'))) {
        return { type: 'nx', dir };
    }
    if (path.dirname(dir) === dir) {
        return null;
    }
    return findWorkspaceRoot(path.dirname(dir));
}
exports.findWorkspaceRoot = findWorkspaceRoot;
//# sourceMappingURL=find-workspace-root.js.map
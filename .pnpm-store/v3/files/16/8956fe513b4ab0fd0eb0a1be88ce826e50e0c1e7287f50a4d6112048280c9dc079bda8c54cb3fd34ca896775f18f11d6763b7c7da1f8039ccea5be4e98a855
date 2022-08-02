"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findWorkspaceRoot = void 0;
const fs_1 = require("fs");
const path = require("path");
const workspace_root_1 = require("./workspace-root");
/**
 * Recursive function that walks back up the directory
 * tree to try and find a workspace file.
 *
 * @param dir Directory to start searching with
 */
function findWorkspaceRoot(dir) {
    const r = (0, workspace_root_1.workspaceRootInner)(dir, null);
    if (r === null)
        return null;
    if ((0, fs_1.existsSync)(path.join(r, 'angular.json'))) {
        return { type: 'angular', dir: r };
    }
    else {
        return { type: 'nx', dir: r };
    }
}
exports.findWorkspaceRoot = findWorkspaceRoot;
//# sourceMappingURL=find-workspace-root.js.map
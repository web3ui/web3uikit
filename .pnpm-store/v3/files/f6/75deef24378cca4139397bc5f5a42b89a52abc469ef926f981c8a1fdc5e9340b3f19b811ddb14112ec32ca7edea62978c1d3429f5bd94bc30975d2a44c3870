"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.defaultFileHasher = void 0;
const git_based_file_hasher_1 = require("./git-based-file-hasher");
const app_root_1 = require("../utils/app-root");
const node_based_file_hasher_1 = require("./node-based-file-hasher");
const child_process_1 = require("child_process");
function createFileHasher() {
    // special case for unit tests
    if (app_root_1.workspaceRoot === '/root') {
        return new node_based_file_hasher_1.NodeBasedFileHasher();
    }
    try {
        (0, child_process_1.execSync)('git rev-parse --is-inside-work-tree', { stdio: 'ignore' });
        return new git_based_file_hasher_1.GitBasedFileHasher();
    }
    catch (_a) {
        return new node_based_file_hasher_1.NodeBasedFileHasher();
    }
}
exports.defaultFileHasher = createFileHasher();
//# sourceMappingURL=file-hasher.js.map
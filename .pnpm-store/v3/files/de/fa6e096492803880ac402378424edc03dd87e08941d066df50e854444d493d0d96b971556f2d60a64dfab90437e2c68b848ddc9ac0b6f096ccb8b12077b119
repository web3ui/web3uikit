"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDaemonDisabled = exports.markDaemonAsDisabled = exports.writeDaemonLogs = exports.DAEMON_SOCKET_PATH = exports.DAEMON_OUTPUT_LOG_FILE = exports.DAEMON_DIR_FOR_CURRENT_WORKSPACE = void 0;
/**
 * Per workspace (to avoid subtle differences and issues), we want to have a deterministic
 * location within the OS's tmp directory where we write log files for background processes
 * and where we create the actual unix socket/named pipe for the daemon.
 */
const fs_1 = require("fs");
const path_1 = require("path");
const cache_directory_1 = require("../utils/cache-directory");
exports.DAEMON_DIR_FOR_CURRENT_WORKSPACE = (0, path_1.join)(cache_directory_1.projectGraphCacheDirectory, 'd');
exports.DAEMON_OUTPUT_LOG_FILE = (0, path_1.join)(exports.DAEMON_DIR_FOR_CURRENT_WORKSPACE, 'daemon.log');
exports.DAEMON_SOCKET_PATH = (0, path_1.join)(exports.DAEMON_DIR_FOR_CURRENT_WORKSPACE, 
// As per notes above on socket/named pipe length limitations, we keep this intentionally short
'd.sock');
function writeDaemonLogs(error) {
    const file = (0, path_1.join)(exports.DAEMON_DIR_FOR_CURRENT_WORKSPACE, 'daemon-error.log');
    (0, fs_1.writeFileSync)(file, error);
    return file;
}
exports.writeDaemonLogs = writeDaemonLogs;
function markDaemonAsDisabled() {
    (0, fs_1.writeFileSync)((0, path_1.join)(exports.DAEMON_DIR_FOR_CURRENT_WORKSPACE, 'disabled'), 'true');
}
exports.markDaemonAsDisabled = markDaemonAsDisabled;
function isDaemonDisabled() {
    try {
        (0, fs_1.statSync)((0, path_1.join)(exports.DAEMON_DIR_FOR_CURRENT_WORKSPACE, 'disabled'));
        return true;
    }
    catch (e) {
        return false;
    }
}
exports.isDaemonDisabled = isDaemonDisabled;
//# sourceMappingURL=tmp-dir.js.map
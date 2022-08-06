"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectGraphFromServer = exports.isServerAvailable = exports.stop = exports.startInCurrentProcess = exports.startInBackground = void 0;
const tslib_1 = require("tslib");
const app_root_1 = require("../../utils/app-root");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const net_1 = require("net");
const path_1 = require("path");
const perf_hooks_1 = require("perf_hooks");
const output_1 = require("../../utils/output");
const cache_1 = require("../cache");
const socket_utils_1 = require("../socket-utils");
const tmp_dir_1 = require("../tmp-dir");
const DAEMON_ENV_SETTINGS = Object.assign(Object.assign({}, process.env), { NX_PROJECT_GLOB_CACHE: 'false' });
function startInBackground() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        yield (0, cache_1.safelyCleanUpExistingProcess)();
        (0, fs_extra_1.ensureDirSync)(tmp_dir_1.DAEMON_DIR_FOR_CURRENT_WORKSPACE);
        (0, fs_extra_1.ensureFileSync)(tmp_dir_1.DAEMON_OUTPUT_LOG_FILE);
        const out = (0, fs_1.openSync)(tmp_dir_1.DAEMON_OUTPUT_LOG_FILE, 'a');
        const err = (0, fs_1.openSync)(tmp_dir_1.DAEMON_OUTPUT_LOG_FILE, 'a');
        const backgroundProcess = (0, child_process_1.spawn)(process.execPath, [(0, path_1.join)(__dirname, '../server/start.js')], {
            cwd: app_root_1.workspaceRoot,
            stdio: ['ignore', out, err],
            detached: true,
            windowsHide: true,
            shell: false,
            env: DAEMON_ENV_SETTINGS,
        });
        backgroundProcess.unref();
        // Persist metadata about the background process so that it can be cleaned up later if needed
        yield (0, cache_1.writeDaemonJsonProcessCache)({
            processId: backgroundProcess.pid,
        });
        /**
         * Ensure the server is actually available to connect to via IPC before resolving
         */
        let attempts = 0;
        return new Promise((resolve, reject) => {
            const id = setInterval(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                if (yield isServerAvailable()) {
                    clearInterval(id);
                    resolve(backgroundProcess.pid);
                }
                else if (attempts > 200) {
                    // daemon fails to start, the process probably exited
                    // we print the logs and exit the client
                    reject(daemonProcessException('Failed to start the Nx Daemon process.'));
                }
                else {
                    attempts++;
                }
            }), 10);
        });
    });
}
exports.startInBackground = startInBackground;
function daemonProcessException(message) {
    try {
        let log = (0, fs_1.readFileSync)(tmp_dir_1.DAEMON_OUTPUT_LOG_FILE).toString().split('\n');
        if (log.length > 20) {
            log = log.slice(log.length - 20);
        }
        return new Error([
            message,
            'Messages from the log:',
            ...log,
            '\n',
            `More information: ${tmp_dir_1.DAEMON_OUTPUT_LOG_FILE}`,
        ].join('\n'));
    }
    catch (e) {
        return new Error(message);
    }
}
function startInCurrentProcess() {
    output_1.output.log({
        title: `Daemon Server - Starting in the current process...`,
    });
    (0, child_process_1.spawnSync)(process.execPath, [(0, path_1.join)(__dirname, '../server/start.js')], {
        cwd: app_root_1.workspaceRoot,
        stdio: 'inherit',
        env: DAEMON_ENV_SETTINGS,
    });
}
exports.startInCurrentProcess = startInCurrentProcess;
function stop() {
    (0, child_process_1.spawnSync)(process.execPath, ['../server/stop.js'], {
        cwd: __dirname,
        stdio: 'inherit',
    });
    output_1.output.log({ title: 'Daemon Server - Stopped' });
}
exports.stop = stop;
/**
 * As noted in the comments above the createServer() call, in order to reliably (meaning it works
 * cross-platform) check whether the server is available to request a project graph from we
 * need to actually attempt connecting to it.
 *
 * Because of the behavior of named pipes on Windows, we cannot simply treat them as a file and
 * check for their existence on disk (unlike with Unix Sockets).
 */
function isServerAvailable() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve) => {
            try {
                const socket = (0, net_1.connect)(socket_utils_1.FULL_OS_SOCKET_PATH, () => {
                    socket.destroy();
                    resolve(true);
                });
                socket.once('error', () => {
                    resolve(false);
                });
            }
            catch (err) {
                resolve(false);
            }
        });
    });
}
exports.isServerAvailable = isServerAvailable;
/**
 * Establishes a client connection to the daemon server for use in project graph
 * creation utilities.
 *
 * All logs are performed by the devkit logger because this logic does not
 * run "on the server" per se and therefore does not write to its log output.
 *
 * TODO: Gracefully handle a server shutdown (for whatever reason) while a client
 * is connecting and querying it.
 */
function getProjectGraphFromServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            perf_hooks_1.performance.mark('getProjectGraphFromServer-start');
            const socket = (0, net_1.connect)(socket_utils_1.FULL_OS_SOCKET_PATH);
            socket.on('error', (err) => {
                if (!err.message) {
                    return reject(err);
                }
                if (err.message.startsWith('LOCK-FILES-CHANGED')) {
                    return getProjectGraphFromServer().then(resolve, reject);
                }
                let error;
                if (err.message.startsWith('connect ENOENT')) {
                    error = daemonProcessException('The Daemon Server is not running');
                }
                else if (err.message.startsWith('connect ECONNREFUSED')) {
                    error = daemonProcessException(`A server instance had not been fully shut down. Please try running the command again.`);
                    (0, socket_utils_1.killSocketOrPath)();
                }
                else if (err.message.startsWith('read ECONNRESET')) {
                    error = daemonProcessException(`Unable to connect to the daemon process.`);
                }
                return reject(error || err);
            });
            /**
             * Immediately after connecting to the server we send it the known project graph creation
             * request payload. See the notes above createServer() for more context as to why we explicitly
             * request the graph from the client like this.
             */
            socket.on('connect', () => {
                socket.write('REQUEST_PROJECT_GRAPH_PAYLOAD');
                let serializedProjectGraphResult = '';
                socket.on('data', (data) => {
                    serializedProjectGraphResult += data.toString();
                });
                socket.on('end', () => {
                    try {
                        perf_hooks_1.performance.mark('json-parse-start');
                        const projectGraphResult = JSON.parse(serializedProjectGraphResult);
                        perf_hooks_1.performance.mark('json-parse-end');
                        perf_hooks_1.performance.measure('deserialize graph result on the client', 'json-parse-start', 'json-parse-end');
                        if (projectGraphResult.error) {
                            reject(projectGraphResult.error);
                        }
                        else {
                            perf_hooks_1.performance.measure('total for getProjectGraphFromServer()', 'getProjectGraphFromServer-start', 'json-parse-end');
                            return resolve(projectGraphResult.projectGraph);
                        }
                    }
                    catch (e) {
                        const endOfGraph = serializedProjectGraphResult.length > 300
                            ? serializedProjectGraphResult.substring(serializedProjectGraphResult.length - 300)
                            : serializedProjectGraphResult;
                        reject(daemonProcessException([
                            'Could not deserialize project graph.',
                            `Message: ${e.message}`,
                            '\n',
                            `Received:`,
                            endOfGraph,
                            '\n',
                        ].join('\n')));
                    }
                });
            });
        });
    });
}
exports.getProjectGraphFromServer = getProjectGraphFromServer;
//# sourceMappingURL=client.js.map
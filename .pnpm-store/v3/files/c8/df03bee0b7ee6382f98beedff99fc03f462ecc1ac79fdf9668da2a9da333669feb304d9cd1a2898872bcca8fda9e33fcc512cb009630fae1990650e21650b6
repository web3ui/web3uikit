"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.stopServer = exports.startServer = void 0;
const tslib_1 = require("tslib");
const workspace_root_1 = require("../../utils/workspace-root");
const net_1 = require("net");
const path_1 = require("path");
const perf_hooks_1 = require("perf_hooks");
const socket_utils_1 = require("../socket-utils");
const logger_1 = require("./logger");
const shutdown_utils_1 = require("./shutdown-utils");
const watcher_1 = require("./watcher");
const project_graph_incremental_recomputation_1 = require("./project-graph-incremental-recomputation");
const fs_1 = require("fs");
const hashing_impl_1 = require("../../hasher/hashing-impl");
const file_hasher_1 = require("../../hasher/file-hasher");
function respondToClient(socket, message) {
    return new Promise((res) => {
        socket.write(message, () => {
            // Close the connection once all data has been written so that the client knows when to read it.
            socket.end();
            logger_1.serverLogger.log(`Closed Connection to Client`);
            res(null);
        });
    });
}
let watcherSubscription;
let performanceObserver;
let watcherError;
function respondWithErrorAndExit(socket, description, error) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // print some extra stuff in the error message
        logger_1.serverLogger.requestLog(`Responding to the client with an error.`, description, error.message);
        console.error(error);
        error.message = `${error.message}\n\nBecause of the error the Nx daemon process has exited. The next Nx command is going to restart the daemon process.\nIf the error persists, please run "nx reset".`;
        yield respondToClient(socket, (0, socket_utils_1.serializeResult)(error, null));
        process.exit(1);
    });
}
const server = (0, net_1.createServer)((socket) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    (0, shutdown_utils_1.resetInactivityTimeout)(handleInactivityTimeout);
    if (!performanceObserver) {
        performanceObserver = new perf_hooks_1.PerformanceObserver((list) => {
            const entry = list.getEntries()[0];
            logger_1.serverLogger.log(`Time taken for '${entry.name}'`, `${entry.duration}ms`);
        });
        performanceObserver.observe({ entryTypes: ['measure'] });
    }
    socket.on('data', (data) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
        if (watcherError) {
            yield respondWithErrorAndExit(socket, `File watcher error in the workspace '${workspace_root_1.workspaceRoot}'.`, watcherError);
        }
        if (lockFileChanged()) {
            yield respondWithErrorAndExit(socket, `Lock files changed`, {
                name: '',
                message: 'LOCK-FILES-CHANGED',
            });
        }
        (0, shutdown_utils_1.resetInactivityTimeout)(handleInactivityTimeout);
        const payload = data.toString();
        if (payload !== 'REQUEST_PROJECT_GRAPH_PAYLOAD') {
            yield respondWithErrorAndExit(socket, `Invalid payload from the client`, new Error(`Unsupported payload sent to daemon server: ${payload}`));
        }
        perf_hooks_1.performance.mark('server-connection');
        logger_1.serverLogger.requestLog('Client Request for Project Graph Received');
        const result = yield (0, project_graph_incremental_recomputation_1.getCachedSerializedProjectGraphPromise)();
        if (result.error) {
            yield respondWithErrorAndExit(socket, `Error when preparing serialized project graph.`, result.error);
        }
        const serializedResult = (0, socket_utils_1.serializeResult)(result.error, result.serializedProjectGraph);
        if (!serializedResult) {
            yield respondWithErrorAndExit(socket, `Error when serializing project graph result.`, new Error('Critical error when serializing server result, check server logs'));
        }
        perf_hooks_1.performance.mark('serialized-project-graph-ready');
        perf_hooks_1.performance.measure('total for creating and serializing project graph', 'server-connection', 'serialized-project-graph-ready');
        socket.write(serializedResult, () => {
            perf_hooks_1.performance.mark('serialized-project-graph-written-to-client');
            perf_hooks_1.performance.measure('write project graph to socket', 'serialized-project-graph-ready', 'serialized-project-graph-written-to-client');
            // Close the connection once all data has been written so that the client knows when to read it.
            socket.end();
            perf_hooks_1.performance.measure('total for server response', 'server-connection', 'serialized-project-graph-written-to-client');
            const bytesWritten = Buffer.byteLength(result.serializedProjectGraph, 'utf-8');
            logger_1.serverLogger.requestLog(`Closed Connection to Client (${bytesWritten} bytes transferred)`);
        });
    }));
}));
function handleInactivityTimeout() {
    (0, shutdown_utils_1.handleServerProcessTermination)({
        server,
        watcherSubscription,
        reason: `${shutdown_utils_1.SERVER_INACTIVITY_TIMEOUT_MS}ms of inactivity`,
    });
}
process
    .on('SIGINT', () => (0, shutdown_utils_1.handleServerProcessTermination)({
    server,
    watcherSubscription,
    reason: 'received process SIGINT',
}))
    .on('SIGTERM', () => (0, shutdown_utils_1.handleServerProcessTermination)({
    server,
    watcherSubscription,
    reason: 'received process SIGTERM',
}))
    .on('SIGHUP', () => (0, shutdown_utils_1.handleServerProcessTermination)({
    server,
    watcherSubscription,
    reason: 'received process SIGHUP',
}));
let existingLockHash;
function lockFileChanged() {
    const hash = new hashing_impl_1.HashingImpl();
    const lockHashes = [
        (0, path_1.join)(workspace_root_1.workspaceRoot, 'package-lock.json'),
        (0, path_1.join)(workspace_root_1.workspaceRoot, 'yarn.lock'),
        (0, path_1.join)(workspace_root_1.workspaceRoot, 'pnpm-lock.yaml'),
    ]
        .filter((file) => (0, fs_1.existsSync)(file))
        .map((file) => hash.hashFile(file));
    const newHash = hash.hashArray(lockHashes);
    if (existingLockHash && newHash != existingLockHash) {
        existingLockHash = newHash;
        return true;
    }
    else {
        existingLockHash = newHash;
        return false;
    }
}
/**
 * When applicable files in the workspaces are changed (created, updated, deleted),
 * we need to recompute the cached serialized project graph so that it is readily
 * available for the next client request to the server.
 */
const handleWorkspaceChanges = (err, changeEvents) => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    if (watcherError) {
        logger_1.serverLogger.watcherLog('Skipping handleWorkspaceChanges because of a previously recorded watcher error.');
        return;
    }
    try {
        (0, shutdown_utils_1.resetInactivityTimeout)(handleInactivityTimeout);
        if (lockFileChanged()) {
            yield (0, shutdown_utils_1.handleServerProcessTermination)({
                server,
                watcherSubscription,
                reason: 'Lock file changed',
            });
            return;
        }
        if (err || !changeEvents || !changeEvents.length) {
            logger_1.serverLogger.watcherLog('Unexpected watcher error', err.message);
            console.error(err);
            watcherError = err;
            return;
        }
        logger_1.serverLogger.watcherLog((0, watcher_1.convertChangeEventsToLogMessage)(changeEvents));
        const filesToHash = [];
        const deletedFiles = [];
        for (const event of changeEvents) {
            if (event.type === 'delete') {
                deletedFiles.push(event.path);
            }
            else {
                try {
                    const s = (0, fs_1.statSync)((0, path_1.join)(workspace_root_1.workspaceRoot, event.path));
                    if (!s.isDirectory()) {
                        filesToHash.push(event.path);
                    }
                }
                catch (e) {
                    // this can happen when the update file was deleted right after
                }
            }
        }
        (0, project_graph_incremental_recomputation_1.addUpdatedAndDeletedFiles)(filesToHash, deletedFiles);
    }
    catch (err) {
        logger_1.serverLogger.watcherLog(`Unexpected error`, err.message);
        console.error(err);
        watcherError = err;
    }
});
function startServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // See notes in socket-command-line-utils.ts on OS differences regarding clean up of existings connections.
        if (!socket_utils_1.isWindows) {
            (0, socket_utils_1.killSocketOrPath)();
        }
        yield file_hasher_1.defaultFileHasher.ensureInitialized();
        return new Promise((resolve, reject) => {
            try {
                server.listen(socket_utils_1.FULL_OS_SOCKET_PATH, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    try {
                        logger_1.serverLogger.log(`Started listening on: ${socket_utils_1.FULL_OS_SOCKET_PATH}`);
                        // this triggers the storage of the lock file hash
                        lockFileChanged();
                        if (!watcherSubscription) {
                            watcherSubscription = yield (0, watcher_1.subscribeToWorkspaceChanges)(server, handleWorkspaceChanges);
                            logger_1.serverLogger.watcherLog(`Subscribed to changes within: ${workspace_root_1.workspaceRoot}`);
                        }
                        return resolve(server);
                    }
                    catch (err) {
                        reject(err);
                    }
                }));
            }
            catch (err) {
                reject(err);
            }
        });
    });
}
exports.startServer = startServer;
function stopServer() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return new Promise((resolve, reject) => {
            server.close((err) => {
                if (err) {
                    /**
                     * If the server is running in a detached background process then server.close()
                     * will throw this error even if server is actually alive. We therefore only reject
                     * in case of any other unexpected errors.
                     */
                    if (!err.message.startsWith('Server is not running')) {
                        return reject(err);
                    }
                }
                (0, socket_utils_1.killSocketOrPath)();
                return resolve();
            });
        });
    });
}
exports.stopServer = stopServer;
//# sourceMappingURL=server.js.map
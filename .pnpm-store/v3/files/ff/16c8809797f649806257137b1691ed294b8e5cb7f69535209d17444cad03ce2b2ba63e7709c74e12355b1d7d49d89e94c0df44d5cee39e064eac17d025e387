"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resetInactivityTimeout = exports.handleServerProcessTermination = exports.SERVER_INACTIVITY_TIMEOUT_MS = void 0;
const tslib_1 = require("tslib");
const workspace_root_1 = require("../../utils/workspace-root");
const logger_1 = require("./logger");
exports.SERVER_INACTIVITY_TIMEOUT_MS = 10800000; // 10800000 ms = 3 hours
function handleServerProcessTermination({ server, reason, watcherSubscription, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            server.close();
            if (watcherSubscription) {
                yield watcherSubscription.unsubscribe();
                logger_1.serverLogger.watcherLog(`Unsubscribed from changes within: ${workspace_root_1.workspaceRoot}`);
            }
            logger_1.serverLogger.log(`Server stopped because: "${reason}"`);
        }
        finally {
            process.exit(0);
        }
    });
}
exports.handleServerProcessTermination = handleServerProcessTermination;
let serverInactivityTimerId;
function resetInactivityTimeout(cb) {
    if (serverInactivityTimerId) {
        clearTimeout(serverInactivityTimerId);
    }
    serverInactivityTimerId = setTimeout(cb, exports.SERVER_INACTIVITY_TIMEOUT_MS);
}
exports.resetInactivityTimeout = resetInactivityTimeout;
//# sourceMappingURL=shutdown-utils.js.map
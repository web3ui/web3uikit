"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.watchForSingleFileChanges = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
function watchForSingleFileChanges(watchDir, relativeFilePath, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const watcher = yield Promise.resolve().then(() => require('@parcel/watcher'));
        const subscription = yield watcher.subscribe(watchDir, (err, events) => {
            var _a;
            const file = (0, path_1.join)(watchDir, relativeFilePath);
            if (err) {
                devkit_1.logger.error(`Watch error: ${(_a = err === null || err === void 0 ? void 0 : err.message) !== null && _a !== void 0 ? _a : 'Unknown'}`);
            }
            else {
                for (const event of events) {
                    if (event.path === file) {
                        callback();
                        break;
                    }
                }
            }
        });
        return () => subscription.unsubscribe();
    });
}
exports.watchForSingleFileChanges = watchForSingleFileChanges;
//# sourceMappingURL=watch-for-single-file-changes.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runTasksInSerial = void 0;
const tslib_1 = require("tslib");
function runTasksInSerial(...tasks) {
    return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
        for (const task of tasks) {
            yield task();
        }
    });
}
exports.runTasksInSerial = runTasksInSerial;
//# sourceMappingURL=run-tasks-in-serial.js.map
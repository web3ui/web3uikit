"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addInstallTask = void 0;
const tasks_1 = require("@angular-devkit/schematics/tasks");
let installAdded = false;
function addInstallTask(options = { skipInstall: false }) {
    return (_, context) => {
        if (!options.skipInstall && !installAdded) {
            context.addTask(new tasks_1.NodePackageInstallTask());
            installAdded = true;
        }
    };
}
exports.addInstallTask = addInstallTask;
//# sourceMappingURL=add-install-task.js.map
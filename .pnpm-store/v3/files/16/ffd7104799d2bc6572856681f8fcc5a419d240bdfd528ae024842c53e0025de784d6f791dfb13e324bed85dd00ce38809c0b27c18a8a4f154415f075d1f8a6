"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectToNxCloudCommand = exports.connectToNxCloudUsingScan = void 0;
const tslib_1 = require("tslib");
const file_utils_1 = require("../project-graph/file-utils");
const output_1 = require("../utils/output");
const package_manager_1 = require("../utils/package-manager");
const child_process_1 = require("child_process");
function connectToNxCloudUsingScan(scan) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!scan)
            return;
        const nxJson = (0, file_utils_1.readNxJson)();
        const defaultRunnerIsUsed = Object.values(nxJson.tasksRunnerOptions).find((r) => r.runner == '@nrwl/workspace/tasks-runners/default' ||
            r.runner == 'nx/tasks-runners/default');
        if (!defaultRunnerIsUsed)
            return;
        output_1.output.log({
            title: '--scan requires the workspace to be connected to Nx Cloud.',
        });
        const res = yield connectToNxCloudPrompt();
        if (res) {
            const pmc = (0, package_manager_1.getPackageManagerCommand)();
            (0, child_process_1.execSync)(`${pmc.addDev} @nrwl/nx-cloud@latest`);
            (0, child_process_1.execSync)(`${pmc.exec} nx g @nrwl/nx-cloud:init`, {
                stdio: [0, 1, 2],
            });
        }
        else {
            output_1.output.log({ title: 'Executing the command without --scan' });
        }
    });
}
exports.connectToNxCloudUsingScan = connectToNxCloudUsingScan;
function connectToNxCloudCommand(promptOverride) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const nxJson = (0, file_utils_1.readNxJson)();
        const nxCloudUsed = Object.values(nxJson.tasksRunnerOptions).find((r) => r.runner == '@nrwl/nx-cloud');
        if (nxCloudUsed) {
            output_1.output.log({
                title: 'This workspace is already connected to Nx Cloud.',
            });
            return;
        }
        const res = yield connectToNxCloudPrompt(promptOverride);
        if (!res)
            return;
        const pmc = (0, package_manager_1.getPackageManagerCommand)();
        (0, child_process_1.execSync)(`${pmc.addDev} @nrwl/nx-cloud@latest`);
        (0, child_process_1.execSync)(`${pmc.exec} nx g @nrwl/nx-cloud:init`, {
            stdio: [0, 1, 2],
        });
    });
}
exports.connectToNxCloudCommand = connectToNxCloudCommand;
function connectToNxCloudPrompt(prompt) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield (yield Promise.resolve().then(() => require('enquirer')))
            .prompt([
            {
                name: 'NxCloud',
                message: prompt !== null && prompt !== void 0 ? prompt : `Connect to Nx Cloud? (It's free and doesn't require registration.)`,
                type: 'select',
                choices: [
                    {
                        name: 'Yes',
                        hint: 'Faster builds, run details, GitHub integration. Learn more at https://nx.app',
                    },
                    {
                        name: 'No',
                    },
                ],
                initial: 'Yes',
            },
        ])
            .then((a) => a.NxCloud === 'Yes');
    });
}
//# sourceMappingURL=connect-to-nx-cloud.js.map
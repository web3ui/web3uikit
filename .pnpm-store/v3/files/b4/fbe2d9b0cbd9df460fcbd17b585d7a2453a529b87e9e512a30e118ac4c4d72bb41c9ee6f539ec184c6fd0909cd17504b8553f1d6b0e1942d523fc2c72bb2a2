"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initHandler = void 0;
const child_process_1 = require("child_process");
const path_1 = require("path");
const output_1 = require("../utils/output");
const package_manager_1 = require("../utils/package-manager");
const fileutils_1 = require("../utils/fileutils");
function initHandler() {
    const nxIsInstalled = !!(0, child_process_1.execSync)((0, package_manager_1.getPackageManagerCommand)().list)
        .toString()
        .split('\n')
        .find((line) => line.indexOf(' nx@') > -1);
    if (nxIsInstalled) {
        output_1.output.log({
            title: 'Nx is already installed',
        });
    }
    else {
        output_1.output.log({
            title: 'Installing Nx...',
        });
        (0, child_process_1.execSync)(`${(0, package_manager_1.getPackageManagerCommand)().addDev} nx@latest`, {
            stdio: [0, 1, 2],
        });
        output_1.output.success({
            title: 'Nx has been installed',
        });
    }
    if (!(0, fileutils_1.fileExists)('nx.json')) {
        (0, fileutils_1.writeJsonFile)('nx.json', (0, fileutils_1.readJsonFile)((0, path_1.join)(__dirname, '..', '..', 'presets', 'core.json')));
        output_1.output.success({
            title: 'nx.json has been created',
        });
    }
}
exports.initHandler = initHandler;
//# sourceMappingURL=init.js.map
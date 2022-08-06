"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJestConfig = void 0;
const find_root_jest_files_1 = require("../../../utils/config/find-root-jest-files");
const update_config_1 = require("../../../utils/config/update-config");
const devkit_1 = require("@nrwl/devkit");
function isUsingUtilityFunction(host) {
    return host
        .read((0, find_root_jest_files_1.findRootJestConfig)(host))
        .toString()
        .includes('getJestProjects()');
}
function updateJestConfig(host, options) {
    if (isUsingUtilityFunction(host)) {
        return;
    }
    const project = (0, devkit_1.readProjectConfiguration)(host, options.project);
    (0, update_config_1.addPropertyToJestConfig)(host, (0, find_root_jest_files_1.findRootJestConfig)(host), 'projects', `<rootDir>/${project.root}`);
}
exports.updateJestConfig = updateJestConfig;
//# sourceMappingURL=update-jestconfig.js.map
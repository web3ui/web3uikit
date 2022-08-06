"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTscExecutorLocation = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../utils/versions");
function updateTscExecutorLocation(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        let used = false;
        for (const [project, projectConfig] of projects.entries()) {
            for (const [target, targetConfig] of Object.entries(projectConfig.targets || {})) {
                if (targetConfig.executor === '@nrwl/workspace:tsc') {
                    projectConfig.targets[target].executor = '@nrwl/js:tsc';
                    (0, devkit_1.updateProjectConfiguration)(host, project, projectConfig);
                    used = true;
                }
            }
        }
        if (used) {
            (0, devkit_1.addDependenciesToPackageJson)(host, {}, {
                '@nrwl/js': versions_1.nxVersion,
            });
        }
        yield (0, devkit_1.formatFiles)(host);
        return () => (0, devkit_1.installPackagesTask)(host);
    });
}
exports.updateTscExecutorLocation = updateTscExecutorLocation;
exports.default = updateTscExecutorLocation;
//# sourceMappingURL=update-tsc-executor-location.js.map
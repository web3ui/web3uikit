"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("@nrwl/workspace/src/utils/versions");
function update(host) {
    var _a, _b;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        let installNeeded = false;
        for (const [name, config] of projects.entries()) {
            if (((_b = (_a = config === null || config === void 0 ? void 0 : config.targets) === null || _a === void 0 ? void 0 : _a.serve) === null || _b === void 0 ? void 0 : _b.executor) !== '@nrwl/js:node')
                continue;
            config.targets.serve.executor = '@nrwl/node:node';
            installNeeded = true;
            (0, devkit_1.updateProjectConfiguration)(host, name, config);
        }
        const task = installNeeded
            ? (0, devkit_1.addDependenciesToPackageJson)(host, {}, {
                '@nrwl/node': versions_1.nxVersion,
            })
            : undefined;
        yield (0, devkit_1.formatFiles)(host);
        return task;
    });
}
exports.default = update;
//# sourceMappingURL=update-node-executor.js.map
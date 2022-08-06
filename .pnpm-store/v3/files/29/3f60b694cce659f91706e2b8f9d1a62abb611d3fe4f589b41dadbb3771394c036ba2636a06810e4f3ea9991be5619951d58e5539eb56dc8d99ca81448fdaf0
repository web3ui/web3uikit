"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function update(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const nxJson = (0, devkit_1.readJson)(host, 'nx.json');
        // updateProjectConfiguration automatically saves the project opts into workspace/project.json
        if (nxJson.projects) {
            Object.entries(nxJson.projects).forEach(([p, nxJsonConfig]) => {
                var _a, _b;
                const configuration = (0, devkit_1.readProjectConfiguration)(host, p);
                (_a = configuration.tags) !== null && _a !== void 0 ? _a : (configuration.tags = nxJsonConfig.tags);
                (_b = configuration.implicitDependencies) !== null && _b !== void 0 ? _b : (configuration.implicitDependencies = nxJsonConfig.implicitDependencies);
                (0, devkit_1.updateProjectConfiguration)(host, p, configuration);
            });
            delete nxJson.projects;
        }
        (0, devkit_1.writeJson)(host, 'nx.json', nxJson);
        yield (0, devkit_1.formatFiles)(host); // format files handles moving config options to new spots.
    });
}
exports.default = update;
//# sourceMappingURL=config-locations.js.map
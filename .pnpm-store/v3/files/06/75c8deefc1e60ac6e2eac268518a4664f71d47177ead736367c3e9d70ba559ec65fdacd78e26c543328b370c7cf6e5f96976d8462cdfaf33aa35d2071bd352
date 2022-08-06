"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const add_swc_config_1 = require("../../utils/swc/add-swc-config");
function update(host) {
    var _a, _b, _c, _d;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = (0, devkit_1.getProjects)(host);
        for (const config of projects.values()) {
            if (((_b = (_a = config === null || config === void 0 ? void 0 : config.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) !== '@nrwl/js:swc')
                continue;
            const swcrcPath = (0, path_1.join)(config.root, '.swcrc');
            if (!host.exists(swcrcPath))
                continue;
            // rename
            const libSwcrcPath = (0, path_1.join)(config.root, '.lib.swcrc');
            host.rename(swcrcPath, libSwcrcPath);
            const swcrcContent = (0, devkit_1.readJson)(host, libSwcrcPath);
            // skip if swcrc already has "exclude" field
            if (swcrcContent['exclude'])
                continue;
            // check swcExclude build options
            const exclude = ((_d = (_c = config === null || config === void 0 ? void 0 : config.targets) === null || _c === void 0 ? void 0 : _c.build) === null || _d === void 0 ? void 0 : _d.options['swcExclude']) || add_swc_config_1.defaultExclude;
            (0, devkit_1.updateJson)(host, libSwcrcPath, (swcrc) => {
                swcrc['exclude'] = exclude;
                return swcrc;
            });
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.default = update;
//# sourceMappingURL=update-swcrc.js.map
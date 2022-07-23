"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultBaseIfNotSet = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const output_1 = require("../../utilities/output");
function setDefaultBaseIfNotSet(host) {
    var _a, _b, _c;
    var _d;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const config = (0, devkit_1.readWorkspaceConfiguration)(host);
        if (!((_a = config.affected) === null || _a === void 0 ? void 0 : _a.defaultBase)) {
            (_b = config.affected) !== null && _b !== void 0 ? _b : (config.affected = {});
            (_c = (_d = config.affected).defaultBase) !== null && _c !== void 0 ? _c : (_d.defaultBase = 'master');
            output_1.output.note({
                title: 'Default Base has been set in nx.json',
                bodyLines: [
                    `Nx is moving to "main" as the default branch.`,
                    `To avoid your current defaults changing, defaultBase has been set to "master" in nx.json`,
                    `Read more here: https://nx.dev/using-nx/affected`,
                ],
            });
        }
        (0, devkit_1.updateWorkspaceConfiguration)(host, config);
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.setDefaultBaseIfNotSet = setDefaultBaseIfNotSet;
exports.default = setDefaultBaseIfNotSet;
//# sourceMappingURL=set-default-base-if-not-set.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.changeNxJsonPresets = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function changeNxJsonPresets(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspaceConfig = (0, devkit_1.readWorkspaceConfiguration)(tree);
        const replacements = {
            '@nrwl/workspace/presets/npm.json': 'nx/presets/npm.json',
            '@nrwl/workspace/presets/core.json': 'nx/presets/core.json',
        };
        if (workspaceConfig.extends && replacements[workspaceConfig.extends]) {
            (0, devkit_1.updateWorkspaceConfiguration)(tree, Object.assign(Object.assign({}, workspaceConfig), { extends: replacements[workspaceConfig.extends] }));
        }
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.changeNxJsonPresets = changeNxJsonPresets;
exports.default = changeNxJsonPresets;
//# sourceMappingURL=change-nx-json-presets.js.map
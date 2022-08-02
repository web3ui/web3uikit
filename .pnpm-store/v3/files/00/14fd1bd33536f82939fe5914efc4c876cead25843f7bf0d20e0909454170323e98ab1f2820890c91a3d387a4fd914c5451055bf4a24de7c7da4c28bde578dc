"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.enableSourceAnalysis = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function enableSourceAnalysis(tree) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const config = (0, devkit_1.readWorkspaceConfiguration)(tree);
        if (config.extends === 'nx/presets/core.json' ||
            config.extends === 'nx/presets/npm.json') {
            const explicitlyDisabled = config.pluginsConfig &&
                config.pluginsConfig['@nrwl/js'] &&
                config.pluginsConfig['@nrwl/js'].analyzeSourceFiles === false;
            if (!explicitlyDisabled) {
                config.pluginsConfig || (config.pluginsConfig = {});
                (_a = config.pluginsConfig)['@nrwl/js'] || (_a['@nrwl/js'] = {});
                config.pluginsConfig['@nrwl/js'].analyzeSourceFiles = true;
            }
        }
        (0, devkit_1.updateWorkspaceConfiguration)(tree, config);
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.enableSourceAnalysis = enableSourceAnalysis;
exports.default = enableSourceAnalysis;
//# sourceMappingURL=enable-source-analysis.js.map
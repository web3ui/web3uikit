"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const devkit_1 = require("@nrwl/devkit");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const path_1 = require("path");
const add_swc_config_1 = require("../../utils/swc/add-swc-config");
function updateSwcRcExclude(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/js:swc', (config, projectName) => {
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
        const libSwcPath = (0, path_1.join)(projectConfig.root, '.lib.swcrc');
        if (!tree.exists(libSwcPath))
            return;
        (0, devkit_1.updateJson)(tree, libSwcPath, (json) => {
            if (json.exclude) {
                const excludePatterns = new Set([
                    ...add_swc_config_1.defaultExclude,
                    ...json.exclude,
                ]);
                // remove old patterns that are duplicate for new patterns
                // defined in defaultExclude
                excludePatterns.delete('./**/.*.spec.ts$');
                excludePatterns.delete('./src/**/.*.spec.ts$');
                excludePatterns.delete('./**/.*.js$');
                excludePatterns.delete('./src/**/jest-setup.ts$');
                json.exclude = [...excludePatterns];
            }
            return json;
        }, { expectComments: true });
    });
}
exports.default = updateSwcRcExclude;
//# sourceMappingURL=update-lib-swcrc-exclude.js.map
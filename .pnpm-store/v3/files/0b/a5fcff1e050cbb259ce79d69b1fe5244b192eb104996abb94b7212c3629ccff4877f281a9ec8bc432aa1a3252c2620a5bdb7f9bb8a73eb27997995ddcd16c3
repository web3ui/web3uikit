"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.excludeJestConfigSwcrc = void 0;
const devkit_1 = require("@nrwl/devkit");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const path_1 = require("path");
function excludeJestConfigSwcrc(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/js:swc', (config, projectName) => {
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
        const libSwcPath = (0, path_1.join)(projectConfig.root, '.lib.swcrc');
        if (!tree.exists(libSwcPath))
            return;
        (0, devkit_1.updateJson)(tree, libSwcPath, (json) => {
            if (json.exclude) {
                const excludePatterns = new Set([
                    'jest.config.js',
                    ...json.exclude,
                ]);
                json.exclude = [...excludePatterns];
            }
            return json;
        }, { expectComments: true });
    });
}
exports.excludeJestConfigSwcrc = excludeJestConfigSwcrc;
exports.default = excludeJestConfigSwcrc;
//# sourceMappingURL=exclude-jest-config-swcrc.js.map
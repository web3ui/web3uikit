"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
function run(task, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const jestPluginConfig = context.workspaceConfig.pluginsConfig
            ? context.workspaceConfig.pluginsConfig['@nrwl/jest']
            : undefined;
        const filter = jestPluginConfig && jestPluginConfig.hashingExcludesTestsOfDeps
            ? 'exclude-tests-of-deps'
            : 'all-files';
        return context.hasher.hashTaskWithDepsAndContext(task, filter);
    });
}
exports.default = run;
//# sourceMappingURL=hasher.js.map
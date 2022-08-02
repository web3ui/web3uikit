"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ciWorkflowGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const default_base_1 = require("../../utilities/default-base");
function ciWorkflowGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const ci = schema.ci;
        const options = normalizeOptions(schema);
        const nxJson = (0, devkit_1.readJson)(host, 'nx.json');
        const nxCloudUsed = Object.values(nxJson.tasksRunnerOptions).find((r) => r.runner == '@nrwl/nx-cloud');
        if (!nxCloudUsed) {
            throw new Error('This workspace is not connected to Nx Cloud.');
        }
        (0, devkit_1.generateFiles)(host, (0, devkit_1.joinPathFragments)(__dirname, 'files', ci), '', options);
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.ciWorkflowGenerator = ciWorkflowGenerator;
function normalizeOptions(options) {
    const { name: workflowName, fileName: workflowFileName } = (0, devkit_1.names)(options.name || 'CI');
    const { exec: packageManagerPrefix, ciInstall: packageManagerInstall } = (0, devkit_1.getPackageManagerCommand)();
    return {
        workflowName,
        workflowFileName,
        packageManagerInstall,
        packageManagerPrefix,
        mainBranch: (0, default_base_1.deduceDefaultBase)(),
        tmpl: '',
    };
}
//# sourceMappingURL=ci-workflow.js.map
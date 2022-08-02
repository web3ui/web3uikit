"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function addOutputs(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        for (const [projectName, project] of (0, devkit_1.getProjects)(tree)) {
            if (!project.targets) {
                continue;
            }
            for (const target of Object.values(project.targets)) {
                if (target.executor !== '@nrwl/linter:eslint' || target.outputs) {
                    continue;
                }
                target.outputs = ['{options.outputFile}'];
                (0, devkit_1.updateProjectConfiguration)(tree, projectName, project);
            }
        }
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = addOutputs;
//# sourceMappingURL=add-outputs.js.map
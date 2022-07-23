"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setTargetDependencies = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const output_1 = require("../../utilities/output");
function setTargetDependencies(host) {
    var _a, _b, _c, _d, _e, _f, _g;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const config = (0, devkit_1.readWorkspaceConfiguration)(host);
        const strictlyOrderedTargets = ((_c = (_b = (_a = config.tasksRunnerOptions) === null || _a === void 0 ? void 0 : _a['default']) === null || _b === void 0 ? void 0 : _b.options) === null || _c === void 0 ? void 0 : _c.strictlyOrderedTargets) || ['build'];
        (_f = (_e = (_d = config.tasksRunnerOptions) === null || _d === void 0 ? void 0 : _d['default']) === null || _e === void 0 ? void 0 : _e.options) === null || _f === void 0 ? true : delete _f.strictlyOrderedTargets;
        config.targetDependencies = (_g = config.targetDependencies) !== null && _g !== void 0 ? _g : {};
        const updatedStrictlyOrderedTargets = [];
        strictlyOrderedTargets.forEach((target) => {
            if (!config.targetDependencies[target]) {
                config.targetDependencies[target] = [
                    { target, projects: 'dependencies' },
                ];
                updatedStrictlyOrderedTargets.push(target);
            }
        });
        (0, devkit_1.updateWorkspaceConfiguration)(host, config);
        if (updatedStrictlyOrderedTargets.length > 0) {
            output_1.output.note({
                title: 'Target dependencies have been updated in nx.json',
                bodyLines: [
                    `Nx has deprecated strictlyOrderedTargets in favour of targetDependencies.`,
                    `Based on your configuration the migration has configured targetDependencies for the following targets: ${updatedStrictlyOrderedTargets.join(', ')}.`,
                    `Read more here: https://nx.dev/configuration/projectjson`,
                ],
            });
        }
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.setTargetDependencies = setTargetDependencies;
exports.default = setTargetDependencies;
//# sourceMappingURL=add-target-dependencies.js.map
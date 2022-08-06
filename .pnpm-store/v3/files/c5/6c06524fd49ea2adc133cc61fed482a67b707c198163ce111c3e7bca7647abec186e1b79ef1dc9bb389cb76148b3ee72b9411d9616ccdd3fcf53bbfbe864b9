"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBuildTargets = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Update other references to the source project's targets
 */
function updateBuildTargets(tree, schema) {
    (0, devkit_1.getProjects)(tree).forEach((projectConfig, project) => {
        Object.entries(projectConfig.targets || {}).forEach(([target, targetConfig]) => {
            updateJsonValue(targetConfig, (value) => {
                const [project, target, configuration] = value.split(':');
                if (project === schema.projectName && target) {
                    return configuration
                        ? `${schema.newProjectName}:${target}:${configuration}`
                        : `${schema.newProjectName}:${target}`;
                }
            });
        });
        (0, devkit_1.updateProjectConfiguration)(tree, project, projectConfig);
    });
}
exports.updateBuildTargets = updateBuildTargets;
function updateJsonValue(config, callback) {
    function recur(obj, key, value) {
        if (typeof value === 'string') {
            const result = callback(value);
            if (result) {
                obj[key] = result;
            }
        }
        else if (Array.isArray(value)) {
            value.forEach((x, idx) => recur(value, idx, x));
        }
        else if (typeof value === 'object') {
            Object.entries(value).forEach(([k, v]) => {
                recur(value, k, v);
            });
        }
    }
    Object.entries(config).forEach(([k, v]) => {
        recur(config, k, v);
    });
}
//# sourceMappingURL=update-build-targets.js.map
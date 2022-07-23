"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkTargets = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Check whether the project to be removed has builders targetted by another project
 *
 * Throws an error if the project is in use, unless the `--forceRemove` option is used.
 *
 * @param schema The options provided to the schematic
 */
function checkTargets(tree, schema) {
    if (schema.forceRemove) {
        return;
    }
    const errors = [];
    (0, devkit_1.getProjects)(tree).forEach((projectConfig, projectName) => {
        if (projectName === schema.projectName) {
            return;
        }
        Object.entries(projectConfig.targets || {}).forEach(([, targetConfig]) => {
            checkIfProjectIsUsed(targetConfig, (value) => {
                try {
                    const { project } = (0, devkit_1.parseTargetString)(value);
                    if (project === schema.projectName) {
                        errors.push(`"${value}" is used by "${projectName}"`);
                    }
                }
                catch (err) {
                    /**
                     * It threw because the target string was not
                     * in the format of project:target:configuration
                     *
                     * In that case, we don't care about it.
                     * So we can ignore this error.
                     */
                }
            });
        });
    });
    if (errors.length > 0) {
        let message = `${schema.projectName} is still targeted by some projects:\n\n`;
        for (let error of errors) {
            message += `${error}\n`;
        }
        throw new Error(message);
    }
}
exports.checkTargets = checkTargets;
function checkIfProjectIsUsed(config, callback) {
    function recur(obj, key, value) {
        if (typeof value === 'string') {
            callback(value);
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
//# sourceMappingURL=check-targets.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDependencies = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
/**
 * Check whether the project to be removed is depended on by another project
 *
 * Throws an error if the project is in use, unless the `--forceRemove` option is used.
 */
function checkDependencies(_, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (schema.forceRemove) {
            return;
        }
        const graph = yield (0, devkit_1.createProjectGraphAsync)();
        const reverseGraph = (0, devkit_1.reverse)(graph);
        const deps = reverseGraph.dependencies[schema.projectName] || [];
        if (deps.length > 0) {
            throw new Error(`${schema.projectName} is still depended on by the following projects:\n${deps
                .map((x) => x.target)
                .join('\n')}`);
        }
    });
}
exports.checkDependencies = checkDependencies;
//# sourceMappingURL=check-dependencies.js.map
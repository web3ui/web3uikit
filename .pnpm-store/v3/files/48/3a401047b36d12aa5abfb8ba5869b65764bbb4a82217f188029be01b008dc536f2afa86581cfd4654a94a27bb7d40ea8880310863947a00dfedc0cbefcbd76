"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectDependencies = exports.getDependencyRoots = void 0;
const tslib_1 = require("tslib");
function getDependencyRoots({ trackDeps, releaseAs, projectName, context, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (trackDeps && !releaseAs) {
            // Include any depended-upon libraries in determining the version bump.
            return (yield getProjectDependencies(projectName)).map((name) => ({
                name,
                path: context.workspace.projects[name].root,
            }));
        }
        return [];
    });
}
exports.getDependencyRoots = getDependencyRoots;
/**
 * Returns a list of in-repo dependencies based on NX's dependency graph.
 */
function getProjectDependencies(projectName) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { createProjectGraphAsync } = yield Promise.resolve().then(() => require('@nrwl/devkit'));
        /* @todo: remove the compatibility support later on. */
        const dependencyGraph = typeof createProjectGraphAsync === 'function'
            ? yield createProjectGraphAsync()
            : // eslint-disable-next-line @typescript-eslint/no-explicit-any
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (yield Promise.resolve().then(() => require('@nrwl/workspace/src/core/project-graph'))).createProjectGraph();
        return getProjectsFromDependencies(dependencyGraph.dependencies[projectName]);
    });
}
exports.getProjectDependencies = getProjectDependencies;
/**
 * Gets only the dependencies that are in the project. Not NPM packages.
 */
function getProjectsFromDependencies(dependencies) {
    return dependencies
        .filter((d) => !d.target.startsWith('npm:'))
        .map((d) => d.target);
}
//# sourceMappingURL=get-project-dependencies.js.map
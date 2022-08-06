"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDependencies = void 0;
const devkit_1 = require("@nrwl/devkit");
const buildable_libs_utils_1 = require("@nrwl/workspace/src/utilities/buildable-libs-utils");
function checkDependencies(context, tsConfigPath) {
    const projectGraph = (0, devkit_1.readCachedProjectGraph)();
    const { target, dependencies, nonBuildableDependencies } = (0, buildable_libs_utils_1.calculateProjectDependencies)(projectGraph, context.root, context.projectName, context.targetName, context.configurationName);
    const projectRoot = target.data.root;
    if (nonBuildableDependencies.length > 0) {
        throw new Error(`Buildable libraries can only depend on other buildable libraries. You must define the ${context.targetName} target for the following libraries: ${nonBuildableDependencies
            .map((t) => `"${t}"`)
            .join(', ')}`);
    }
    if (dependencies.length > 0) {
        const areDependentProjectsBuilt = (0, buildable_libs_utils_1.checkDependentProjectsHaveBeenBuilt)(context.root, context.projectName, context.targetName, dependencies);
        if (!areDependentProjectsBuilt) {
            throw new Error(`Some dependencies of '${context.projectName}' have not been built. This probably due to the ${context.targetName} target being misconfigured.`);
        }
        return {
            tmpTsConfig: (0, buildable_libs_utils_1.createTmpTsConfig)(tsConfigPath, context.root, projectRoot, dependencies),
            projectRoot,
            target,
            dependencies,
        };
    }
    return {
        tmpTsConfig: null,
        projectRoot,
        target,
        dependencies,
    };
}
exports.checkDependencies = checkDependencies;
//# sourceMappingURL=check-dependencies.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMany = void 0;
const tslib_1 = require("tslib");
const run_command_1 = require("../tasks-runner/run-command");
const command_line_utils_1 = require("../utils/command-line-utils");
const project_graph_utils_1 = require("../utils/project-graph-utils");
const output_1 = require("../utils/output");
const connect_to_nx_cloud_1 = require("./connect-to-nx-cloud");
const perf_hooks_1 = require("perf_hooks");
const project_graph_1 = require("../project-graph/project-graph");
const read_environment_1 = require("./read-environment");
function runMany(parsedArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        perf_hooks_1.performance.mark('command-execution-begins');
        const { nxArgs, overrides } = (0, command_line_utils_1.splitArgsIntoNxArgsAndOverrides)(parsedArgs, 'run-many');
        yield (0, connect_to_nx_cloud_1.connectToNxCloudUsingScan)(nxArgs.scan);
        const projectGraph = yield (0, project_graph_1.createProjectGraphAsync)();
        const projects = projectsToRun(nxArgs, projectGraph);
        const env = (0, read_environment_1.readEnvironment)();
        yield (0, run_command_1.runCommand)(projects, projectGraph, env, nxArgs, overrides, null);
    });
}
exports.runMany = runMany;
function projectsToRun(nxArgs, projectGraph) {
    var _a;
    const allProjects = Object.values(projectGraph.nodes);
    const excludedProjects = new Set((_a = nxArgs.exclude) !== null && _a !== void 0 ? _a : []);
    if (nxArgs.all) {
        return runnableForTarget(allProjects, nxArgs.target).filter((proj) => !excludedProjects.has(proj.name));
    }
    checkForInvalidProjects(nxArgs, allProjects);
    let selectedProjects = nxArgs.projects.map((name) => allProjects.find((project) => project.name === name));
    return runnableForTarget(selectedProjects, nxArgs.target, true).filter((proj) => !excludedProjects.has(proj.name));
}
function checkForInvalidProjects(nxArgs, allProjects) {
    const invalid = nxArgs.projects.filter((name) => !allProjects.find((p) => p.name === name));
    if (invalid.length !== 0) {
        throw new Error(`Invalid projects: ${invalid.join(', ')}`);
    }
}
function runnableForTarget(projects, target, strict = false) {
    const notRunnable = [];
    const runnable = [];
    for (let project of projects) {
        if ((0, project_graph_utils_1.projectHasTarget)(project, target)) {
            runnable.push(project);
        }
        else {
            notRunnable.push(project);
        }
    }
    if (strict && notRunnable.length) {
        output_1.output.warn({
            title: `the following do not have configuration for "${target}"`,
            bodyLines: notRunnable.map((p) => `- ${p.name}`),
        });
    }
    return runnable;
}
//# sourceMappingURL=run-many.js.map
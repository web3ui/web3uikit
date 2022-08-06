"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.affected = void 0;
const tslib_1 = require("tslib");
const file_utils_1 = require("../project-graph/file-utils");
const run_command_1 = require("../tasks-runner/run-command");
const output_1 = require("../utils/output");
const dep_graph_1 = require("./dep-graph");
const print_affected_1 = require("./print-affected");
const connect_to_nx_cloud_1 = require("./connect-to-nx-cloud");
const command_line_utils_1 = require("../utils/command-line-utils");
const perf_hooks_1 = require("perf_hooks");
const project_graph_1 = require("../project-graph/project-graph");
const operators_1 = require("../project-graph/operators");
const project_graph_utils_1 = require("../utils/project-graph-utils");
const affected_project_graph_1 = require("../project-graph/affected/affected-project-graph");
const read_environment_1 = require("./read-environment");
function affected(command, parsedArgs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        perf_hooks_1.performance.mark('command-execution-begins');
        const { nxArgs, overrides } = (0, command_line_utils_1.splitArgsIntoNxArgsAndOverrides)(parsedArgs, 'affected', {
            printWarnings: command !== 'print-affected' && !parsedArgs.plain,
        });
        yield (0, connect_to_nx_cloud_1.connectToNxCloudUsingScan)(nxArgs.scan);
        const projectGraph = yield (0, project_graph_1.createProjectGraphAsync)();
        const projects = projectsToRun(nxArgs, projectGraph);
        const env = (0, read_environment_1.readEnvironment)();
        try {
            switch (command) {
                case 'apps':
                    const apps = projects
                        .filter((p) => p.type === 'app')
                        .map((p) => p.name);
                    if (parsedArgs.plain) {
                        console.log(apps.join(' '));
                    }
                    else {
                        if (apps.length) {
                            output_1.output.log({
                                title: 'Affected apps:',
                                bodyLines: apps.map((app) => `${output_1.output.dim('-')} ${app}`),
                            });
                        }
                    }
                    break;
                case 'libs':
                    const libs = projects
                        .filter((p) => p.type === 'lib')
                        .map((p) => p.name);
                    if (parsedArgs.plain) {
                        console.log(libs.join(' '));
                    }
                    else {
                        if (libs.length) {
                            output_1.output.log({
                                title: 'Affected libs:',
                                bodyLines: libs.map((lib) => `${output_1.output.dim('-')} ${lib}`),
                            });
                        }
                    }
                    break;
                case 'graph':
                    const projectNames = projects.map((p) => p.name);
                    yield (0, dep_graph_1.generateGraph)(parsedArgs, projectNames);
                    break;
                case 'print-affected':
                    if (nxArgs.target) {
                        const projectsWithTarget = allProjectsWithTarget(projects, nxArgs);
                        yield (0, print_affected_1.printAffected)(projectsWithTarget, projects, projectGraph, env, nxArgs, overrides);
                    }
                    else {
                        yield (0, print_affected_1.printAffected)([], projects, projectGraph, env, nxArgs, overrides);
                    }
                    break;
                case 'affected': {
                    const projectsWithTarget = allProjectsWithTarget(projects, nxArgs);
                    yield (0, run_command_1.runCommand)(projectsWithTarget, projectGraph, env, nxArgs, overrides, null);
                    break;
                }
            }
        }
        catch (e) {
            printError(e, parsedArgs.verbose);
            process.exit(1);
        }
    });
}
exports.affected = affected;
function projectsToRun(nxArgs, projectGraph) {
    let affectedGraph = nxArgs.all
        ? projectGraph
        : (0, affected_project_graph_1.filterAffected)(projectGraph, (0, file_utils_1.calculateFileChanges)((0, command_line_utils_1.parseFiles)(nxArgs).files, projectGraph.allWorkspaceFiles, nxArgs));
    if (!nxArgs.all && nxArgs.withDeps) {
        affectedGraph = (0, operators_1.withDeps)(projectGraph, Object.values(affectedGraph.nodes));
    }
    if (nxArgs.exclude) {
        const excludedProjects = new Set(nxArgs.exclude);
        return Object.entries(affectedGraph.nodes)
            .filter(([projectName]) => !excludedProjects.has(projectName))
            .map(([, project]) => project);
    }
    return Object.values(affectedGraph.nodes);
}
function allProjectsWithTarget(projects, nxArgs) {
    return projects.filter((p) => (0, project_graph_utils_1.projectHasTarget)(p, nxArgs.target));
}
function printError(e, verbose) {
    const bodyLines = [e.message];
    if (verbose && e.stack) {
        bodyLines.push('');
        bodyLines.push(e.stack);
    }
    output_1.output.error({
        title: 'There was a critical error when running your command',
        bodyLines,
    });
}
//# sourceMappingURL=affected.js.map
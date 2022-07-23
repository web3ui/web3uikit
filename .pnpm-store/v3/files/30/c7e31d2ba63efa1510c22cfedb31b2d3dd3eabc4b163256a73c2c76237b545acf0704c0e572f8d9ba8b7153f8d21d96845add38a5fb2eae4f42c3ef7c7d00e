"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runOne = void 0;
const tslib_1 = require("tslib");
const run_command_1 = require("../tasks-runner/run-command");
const command_line_utils_1 = require("../utils/command-line-utils");
const connect_to_nx_cloud_1 = require("./connect-to-nx-cloud");
const perf_hooks_1 = require("perf_hooks");
const project_graph_1 = require("../project-graph/project-graph");
const app_root_1 = require("../utils/app-root");
const split_target_1 = require("../utils/split-target");
const output_1 = require("../utils/output");
const read_environment_1 = require("./read-environment");
function runOne(cwd, args) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        perf_hooks_1.performance.mark('command-execution-begins');
        perf_hooks_1.performance.measure('code-loading', 'init-local', 'command-execution-begins');
        const env = (0, read_environment_1.readEnvironment)();
        const opts = parseRunOneOptions(cwd, args, env.workspaceJson);
        const { nxArgs, overrides } = (0, command_line_utils_1.splitArgsIntoNxArgsAndOverrides)(Object.assign(Object.assign({}, opts.parsedArgs), { configuration: opts.configuration, target: opts.target }), 'run-one');
        if (nxArgs.help) {
            yield (yield Promise.resolve().then(() => require('./run'))).run(cwd, app_root_1.workspaceRoot, opts, {}, false, true);
            process.exit(0);
        }
        const projectGraph = yield (0, project_graph_1.createProjectGraphAsync)();
        yield (0, connect_to_nx_cloud_1.connectToNxCloudUsingScan)(nxArgs.scan);
        const { projects } = getProjects(projectGraph, opts.project);
        yield (0, run_command_1.runCommand)(projects, projectGraph, env, nxArgs, overrides, opts.project);
    });
}
exports.runOne = runOne;
function getProjects(projectGraph, project) {
    if (!projectGraph.nodes[project]) {
        output_1.output.error({
            title: `Cannot find project '${project}'`,
        });
        process.exit(1);
    }
    let projects = [projectGraph.nodes[project]];
    let projectsMap = {
        [project]: projectGraph.nodes[project],
    };
    return { projects, projectsMap };
}
const targetAliases = {
    b: 'build',
    e: 'e2e',
    'i18n-extract': 'extract-i18n',
    xi18n: 'extract-i18n',
    l: 'lint',
    s: 'serve',
    t: 'test',
};
function parseRunOneOptions(cwd, parsedArgs, workspaceConfiguration) {
    const defaultProjectName = calculateDefaultProjectName(cwd, app_root_1.workspaceRoot, workspaceConfiguration);
    let project;
    let target;
    let configuration;
    if (parsedArgs['project:target:configuration'].indexOf(':') > -1) {
        // run case
        [project, target, configuration] = (0, split_target_1.splitTarget)(parsedArgs['project:target:configuration']);
        // this is to account for "nx npmsript:dev"
        if (project && !target && defaultProjectName) {
            target = project;
            project = defaultProjectName;
        }
    }
    else {
        target = parsedArgs['project:target:configuration'];
    }
    if (parsedArgs.project) {
        project = parsedArgs.project;
    }
    if (!project && defaultProjectName) {
        project = defaultProjectName;
    }
    if (!project || !target) {
        throw new Error(`Both project and target to have to be specified`);
    }
    if (targetAliases[target]) {
        target = targetAliases[target];
    }
    if (parsedArgs.configuration) {
        configuration = parsedArgs.configuration;
    }
    else if (parsedArgs.prod) {
        configuration = 'production';
    }
    const res = { project, target, configuration, parsedArgs };
    delete parsedArgs['c'];
    delete parsedArgs['project:target:configuration'];
    delete parsedArgs['configuration'];
    delete parsedArgs['prod'];
    delete parsedArgs['project'];
    return res;
}
function calculateDefaultProjectName(cwd, root, workspaceConfiguration) {
    var _a;
    let relativeCwd = cwd.replace(/\\/g, '/').split(root.replace(/\\/g, '/'))[1];
    if (relativeCwd) {
        relativeCwd = relativeCwd.startsWith('/')
            ? relativeCwd.substring(1)
            : relativeCwd;
        const matchingProject = Object.keys(workspaceConfiguration.projects).find((p) => {
            const projectRoot = workspaceConfiguration.projects[p].root;
            return (relativeCwd == projectRoot ||
                relativeCwd.startsWith(`${projectRoot}/`));
        });
        if (matchingProject)
            return matchingProject;
    }
    return (((_a = workspaceConfiguration.cli) === null || _a === void 0 ? void 0 : _a.defaultProjectName) || workspaceConfiguration.defaultProject);
}
//# sourceMappingURL=run-one.js.map
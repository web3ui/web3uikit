"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isCacheableTask = exports.shouldStreamOutput = exports.getSerializedArgsForTask = exports.getPrintableCommandArgsForTask = exports.getCliPath = exports.calculateReverseDeps = exports.removeTasksFromTaskGraph = exports.getCustomHasher = exports.getExecutorForTask = exports.getExecutorNameForTask = exports.unparse = exports.getOutputsForTargetAndConfiguration = exports.getOutputs = exports.getDependencyConfigs = exports.getCommandAsString = void 0;
const flat_1 = require("flat");
const output_1 = require("../utils/output");
const project_graph_utils_1 = require("../utils/project-graph-utils");
const fs_1 = require("fs");
const path_1 = require("path");
const nx_plugin_1 = require("../utils/nx-plugin");
const package_manager_1 = require("../utils/package-manager");
const app_root_1 = require("../utils/app-root");
function getCommandAsString(task) {
    const execCommand = (0, package_manager_1.getPackageManagerCommand)().exec;
    const args = getPrintableCommandArgsForTask(task);
    return [execCommand, 'nx', ...args].join(' ').trim();
}
exports.getCommandAsString = getCommandAsString;
function getDependencyConfigs({ project, target }, defaultDependencyConfigs, projectGraph) {
    var _a, _b, _c, _d;
    // DependencyConfigs configured in workspace.json override configurations at the root.
    const dependencyConfigs = expandDependencyConfigSyntaxSugar((_d = (_c = (_b = (_a = projectGraph.nodes[project].data) === null || _a === void 0 ? void 0 : _a.targets[target]) === null || _b === void 0 ? void 0 : _b.dependsOn) !== null && _c !== void 0 ? _c : defaultDependencyConfigs[target]) !== null && _d !== void 0 ? _d : []);
    for (const dependencyConfig of dependencyConfigs) {
        if (dependencyConfig.projects !== 'dependencies' &&
            dependencyConfig.projects !== 'self') {
            output_1.output.error({
                title: `dependsOn is improperly configured for ${project}:${target}`,
                bodyLines: [
                    `dependsOn.projects is "${dependencyConfig.projects}" but should be "self" or "dependencies"`,
                ],
            });
            process.exit(1);
        }
    }
    return dependencyConfigs;
}
exports.getDependencyConfigs = getDependencyConfigs;
function expandDependencyConfigSyntaxSugar(deps) {
    return deps.map((d) => {
        if (typeof d === 'string') {
            return { projects: 'self', target: d };
        }
        else {
            return d;
        }
    });
}
function getOutputs(p, task) {
    return getOutputsForTargetAndConfiguration(task, p[task.target.project]);
}
exports.getOutputs = getOutputs;
/**
 * Returns the list of outputs that will be cached.
 * @param task target + overrides
 * @param node ProjectGraphProjectNode object that the task runs against
 */
function getOutputsForTargetAndConfiguration(task, node) {
    var _a;
    const { target, configuration } = task.target;
    const targets = node.data.targets[target];
    const options = Object.assign(Object.assign(Object.assign({}, targets.options), (_a = targets === null || targets === void 0 ? void 0 : targets.configurations) === null || _a === void 0 ? void 0 : _a[configuration]), task.overrides);
    if (targets === null || targets === void 0 ? void 0 : targets.outputs) {
        return targets.outputs
            .map((output) => interpolateOutputs(output, options))
            .filter((output) => !!output);
    }
    // Keep backwards compatibility in case `outputs` doesn't exist
    if (options.outputPath) {
        return Array.isArray(options.outputPath)
            ? options.outputPath
            : [options.outputPath];
    }
    else if (target === 'build' || target === 'prepare') {
        return [
            `dist/${node.data.root}`,
            `${node.data.root}/dist`,
            `${node.data.root}/build`,
            `${node.data.root}/public`,
        ];
    }
    else {
        return [];
    }
}
exports.getOutputsForTargetAndConfiguration = getOutputsForTargetAndConfiguration;
function unparse(options) {
    const unparsed = [];
    for (const key of Object.keys(options)) {
        const value = options[key];
        unparseOption(key, value, unparsed);
    }
    return unparsed;
}
exports.unparse = unparse;
function unparseOption(key, value, unparsed) {
    if (value === true) {
        unparsed.push(`--${key}`);
    }
    else if (value === false) {
        unparsed.push(`--no-${key}`);
    }
    else if (Array.isArray(value)) {
        value.forEach((item) => unparseOption(key, item, unparsed));
    }
    else if (Object.prototype.toString.call(value) === '[object Object]') {
        const flattened = (0, flat_1.flatten)(value, { safe: true });
        for (const flattenedKey in flattened) {
            unparseOption(`${key}.${flattenedKey}`, flattened[flattenedKey], unparsed);
        }
    }
    else if (typeof value === 'string' &&
        stringShouldBeWrappedIntoQuotes(value)) {
        const sanitized = value.replace(/"/g, String.raw `\"`);
        unparsed.push(`--${key}="${sanitized}"`);
    }
    else if (value != null) {
        unparsed.push(`--${key}=${value}`);
    }
}
function stringShouldBeWrappedIntoQuotes(str) {
    return str.includes(' ') || str.includes('{') || str.includes('"');
}
function interpolateOutputs(template, data) {
    return template.replace(/{([\s\S]+?)}/g, (match) => {
        let value = data;
        let path = match.slice(1, -1).trim().split('.').slice(1);
        for (let idx = 0; idx < path.length; idx++) {
            if (!value[path[idx]]) {
                return;
            }
            value = value[path[idx]];
        }
        return value;
    });
}
function getExecutorNameForTask(task, workspace) {
    const workspaceConfiguration = workspace.readWorkspaceConfiguration();
    const project = workspaceConfiguration.projects[task.target.project];
    const projectRoot = (0, path_1.join)(app_root_1.workspaceRoot, project.root);
    if ((0, fs_1.existsSync)((0, path_1.join)(projectRoot, 'package.json'))) {
        project.targets = (0, project_graph_utils_1.mergeNpmScriptsWithTargets)(projectRoot, project.targets);
    }
    project.targets = (0, nx_plugin_1.mergePluginTargetsWithNxTargets)(project.root, project.targets, (0, nx_plugin_1.loadNxPlugins)(workspaceConfiguration.plugins));
    if (!project.targets[task.target.target]) {
        throw new Error(`Cannot find configuration for task ${task.target.project}:${task.target.target}`);
    }
    return project.targets[task.target.target].executor;
}
exports.getExecutorNameForTask = getExecutorNameForTask;
function getExecutorForTask(task, workspace) {
    const executor = getExecutorNameForTask(task, workspace);
    const [nodeModule, executorName] = executor.split(':');
    return workspace.readExecutor(nodeModule, executorName);
}
exports.getExecutorForTask = getExecutorForTask;
function getCustomHasher(task, workspace) {
    try {
        const factory = getExecutorForTask(task, workspace).hasherFactory;
        return factory ? factory() : null;
    }
    catch (e) {
        console.error(e);
        throw new Error(`Unable to load hasher for task "${task.id}"`);
    }
}
exports.getCustomHasher = getCustomHasher;
function removeTasksFromTaskGraph(graph, ids) {
    const tasks = {};
    const dependencies = {};
    const removedSet = new Set(ids);
    for (let taskId of Object.keys(graph.tasks)) {
        if (!removedSet.has(taskId)) {
            tasks[taskId] = graph.tasks[taskId];
            dependencies[taskId] = graph.dependencies[taskId].filter((depTaskId) => !removedSet.has(depTaskId));
        }
    }
    return {
        tasks,
        dependencies: dependencies,
        roots: Object.keys(dependencies).filter((k) => dependencies[k].length === 0),
    };
}
exports.removeTasksFromTaskGraph = removeTasksFromTaskGraph;
function calculateReverseDeps(taskGraph) {
    const reverseTaskDeps = {};
    Object.keys(taskGraph.tasks).forEach((t) => {
        reverseTaskDeps[t] = [];
    });
    Object.keys(taskGraph.dependencies).forEach((taskId) => {
        taskGraph.dependencies[taskId].forEach((d) => {
            reverseTaskDeps[d].push(taskId);
        });
    });
    return reverseTaskDeps;
}
exports.calculateReverseDeps = calculateReverseDeps;
function getCliPath() {
    return require.resolve(`../../bin/run-executor.js`);
}
exports.getCliPath = getCliPath;
function getPrintableCommandArgsForTask(task) {
    const args = unparse(task.overrides || {});
    const target = task.target.target.includes(':')
        ? `"${task.target.target}"`
        : task.target.target;
    const config = task.target.configuration
        ? `:${task.target.configuration}`
        : '';
    return ['run', `${task.target.project}:${target}${config}`, ...args];
}
exports.getPrintableCommandArgsForTask = getPrintableCommandArgsForTask;
function getSerializedArgsForTask(task, isVerbose) {
    const overrides = Object.assign({}, task.overrides);
    delete overrides['verbose'];
    return [
        JSON.stringify({
            targetDescription: task.target,
            overrides: overrides,
            isVerbose: isVerbose,
        }),
    ];
}
exports.getSerializedArgsForTask = getSerializedArgsForTask;
function shouldStreamOutput(task, initiatingProject, options) {
    if (process.env.NX_STREAM_OUTPUT === 'true')
        return true;
    if (longRunningTask(task))
        return true;
    if (task.target.project === initiatingProject)
        return true;
    return false;
}
exports.shouldStreamOutput = shouldStreamOutput;
function isCacheableTask(task, options) {
    const cacheable = options.cacheableOperations || options.cacheableTargets;
    return (cacheable &&
        cacheable.indexOf(task.target.target) > -1 &&
        !longRunningTask(task));
}
exports.isCacheableTask = isCacheableTask;
function longRunningTask(task) {
    const t = task.target.target;
    return (!!task.overrides['watch'] || t === 'serve' || t === 'dev' || t === 'start');
}
//# sourceMappingURL=utils.js.map
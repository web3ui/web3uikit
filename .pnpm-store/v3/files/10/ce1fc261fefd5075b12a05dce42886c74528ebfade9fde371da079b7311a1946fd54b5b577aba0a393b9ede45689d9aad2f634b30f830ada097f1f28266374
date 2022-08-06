"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRunner = exports.createTask = exports.createTasksForProjectToRun = exports.runCommand = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const app_root_1 = require("../utils/app-root");
const fileutils_1 = require("../utils/fileutils");
const project_graph_utils_1 = require("../utils/project-graph-utils");
const output_1 = require("../utils/output");
const utils_1 = require("./utils");
const life_cycle_1 = require("./life-cycle");
const static_run_many_terminal_output_life_cycle_1 = require("./life-cycles/static-run-many-terminal-output-life-cycle");
const static_run_one_terminal_output_life_cycle_1 = require("./life-cycles/static-run-one-terminal-output-life-cycle");
const task_timings_life_cycle_1 = require("./life-cycles/task-timings-life-cycle");
const dynamic_run_many_terminal_output_life_cycle_1 = require("./life-cycles/dynamic-run-many-terminal-output-life-cycle");
const task_profiling_life_cycle_1 = require("./life-cycles/task-profiling-life-cycle");
const is_ci_1 = require("../utils/is-ci");
const dynamic_run_one_terminal_output_life_cycle_1 = require("./life-cycles/dynamic-run-one-terminal-output-life-cycle");
function getTerminalOutputLifeCycle(initiatingProject, projectNames, tasks, nxArgs, overrides, runnerOptions) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const isRunOne = initiatingProject != null;
        const useDynamicOutput = shouldUseDynamicLifeCycle(tasks, runnerOptions, nxArgs.outputStyle) &&
            process.env.NX_VERBOSE_LOGGING !== 'true' &&
            process.env.NX_TASKS_RUNNER_DYNAMIC_OUTPUT !== 'false';
        if (isRunOne) {
            if (useDynamicOutput) {
                return yield (0, dynamic_run_one_terminal_output_life_cycle_1.createRunOneDynamicOutputRenderer)({
                    initiatingProject,
                    tasks,
                    args: nxArgs,
                    overrides,
                });
            }
            return {
                lifeCycle: new static_run_one_terminal_output_life_cycle_1.StaticRunOneTerminalOutputLifeCycle(initiatingProject, projectNames, tasks, nxArgs),
                renderIsDone: Promise.resolve(),
            };
        }
        else {
            if (useDynamicOutput) {
                return yield (0, dynamic_run_many_terminal_output_life_cycle_1.createRunManyDynamicOutputRenderer)({
                    projectNames,
                    tasks,
                    args: nxArgs,
                    overrides,
                });
            }
            else {
                return {
                    lifeCycle: new static_run_many_terminal_output_life_cycle_1.StaticRunManyTerminalOutputLifeCycle(projectNames, tasks, nxArgs, overrides),
                    renderIsDone: Promise.resolve(),
                };
            }
        }
    });
}
function runCommand(projectsToRun, projectGraph, { nxJson }, nxArgs, overrides, initiatingProject) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { tasksRunner, runnerOptions } = getRunner(nxArgs, nxJson);
        const defaultDependencyConfigs = nxJson.targetDependencies;
        const tasks = createTasksForProjectToRun(projectsToRun, {
            target: nxArgs.target,
            configuration: nxArgs.configuration,
            overrides,
        }, projectGraph, initiatingProject, defaultDependencyConfigs);
        const projectNames = projectsToRun.map((t) => t.name);
        if (nxArgs.outputStyle == 'stream') {
            process.env.NX_STREAM_OUTPUT = 'true';
        }
        const { lifeCycle, renderIsDone } = yield getTerminalOutputLifeCycle(initiatingProject, projectNames, tasks, nxArgs, overrides, runnerOptions);
        const lifeCycles = [lifeCycle];
        if (process.env.NX_PERF_LOGGING) {
            lifeCycles.push(new task_timings_life_cycle_1.TaskTimingsLifeCycle());
        }
        if (process.env.NX_PROFILE) {
            lifeCycles.push(new task_profiling_life_cycle_1.TaskProfilingLifeCycle(process.env.NX_PROFILE));
        }
        const promiseOrObservable = tasksRunner(tasks, Object.assign(Object.assign({}, runnerOptions), { lifeCycle: new life_cycle_1.CompositeLifeCycle(lifeCycles) }), {
            initiatingProject: nxArgs.outputStyle === 'compact' ? null : initiatingProject,
            target: nxArgs.target,
            projectGraph,
            nxJson,
        });
        let anyFailures;
        try {
            if (promiseOrObservable.subscribe) {
                anyFailures = yield anyFailuresInObservable(promiseOrObservable);
            }
            else {
                // simply await the promise
                anyFailures = yield anyFailuresInPromise(promiseOrObservable);
            }
            yield renderIsDone;
        }
        catch (e) {
            output_1.output.error({
                title: 'Unhandled error in task executor',
            });
            console.error(e);
            process.exit(1);
        }
        // fix for https://github.com/nrwl/nx/issues/1666
        if (process.stdin['unref'])
            process.stdin.unref();
        process.exit(anyFailures ? 1 : 0);
    });
}
exports.runCommand = runCommand;
function anyFailuresInPromise(promise) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return Object.values(yield promise).some((v) => v === 'failure' || v === 'skipped');
    });
}
function anyFailuresInObservable(obs) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield new Promise((res) => {
            let anyFailures = false;
            obs.subscribe((t) => {
                if (!t.success) {
                    anyFailures = true;
                }
            }, (error) => {
                output_1.output.error({
                    title: 'Unhandled error in task executor',
                });
                console.error(error);
                res(true);
            }, () => {
                res(anyFailures);
            });
        });
    });
}
function createTasksForProjectToRun(projectsToRun, params, projectGraph, initiatingProject, defaultDependencyConfigs = {}) {
    var _a, _b;
    const tasksMap = new Map();
    const seenSet = new Set();
    for (const project of projectsToRun) {
        addTasksForProjectTarget(Object.assign(Object.assign({ project }, params), { errorIfCannotFindConfiguration: project.name === initiatingProject }), defaultDependencyConfigs, projectGraph, (_b = (_a = project.data.targets) === null || _a === void 0 ? void 0 : _a[params.target]) === null || _b === void 0 ? void 0 : _b.executor, tasksMap, [], seenSet);
    }
    return Array.from(tasksMap.values());
}
exports.createTasksForProjectToRun = createTasksForProjectToRun;
function shouldUseDynamicLifeCycle(tasks, options, outputStyle) {
    if (!process.stdout.isTTY)
        return false;
    if ((0, is_ci_1.isCI)())
        return false;
    if (outputStyle === 'static' || outputStyle === 'stream')
        return false;
    const noForwarding = !tasks.find((t) => (0, utils_1.shouldStreamOutput)(t, null, options));
    return noForwarding;
}
function addTasksForProjectTarget({ project, target, configuration, overrides, errorIfCannotFindConfiguration, }, defaultDependencyConfigs = {}, projectGraph, originalTargetExecutor, tasksMap, path, seenSet) {
    var _a, _b;
    const task = createTask({
        project,
        target,
        configuration,
        overrides: ((_b = (_a = project.data.targets) === null || _a === void 0 ? void 0 : _a[target]) === null || _b === void 0 ? void 0 : _b.executor) === originalTargetExecutor
            ? overrides
            : {},
        errorIfCannotFindConfiguration,
    });
    const dependencyConfigs = (0, utils_1.getDependencyConfigs)({ project: project.name, target }, defaultDependencyConfigs, projectGraph);
    if (dependencyConfigs) {
        for (const dependencyConfig of dependencyConfigs) {
            addTasksForProjectDependencyConfig(project, {
                target,
                configuration,
                overrides,
            }, dependencyConfig, defaultDependencyConfigs, projectGraph, originalTargetExecutor, tasksMap, path, seenSet);
        }
    }
    tasksMap.set(task.id, task);
}
function createTask({ project, target, configuration, overrides, errorIfCannotFindConfiguration, }) {
    var _a, _b;
    if (!(0, project_graph_utils_1.projectHasTarget)(project, target)) {
        output_1.output.error({
            title: `Cannot find target '${target}' for project '${project.name}'`,
        });
        process.exit(1);
    }
    configuration !== null && configuration !== void 0 ? configuration : (configuration = (_b = (_a = project.data.targets) === null || _a === void 0 ? void 0 : _a[target]) === null || _b === void 0 ? void 0 : _b.defaultConfiguration);
    const config = (0, project_graph_utils_1.projectHasTargetAndConfiguration)(project, target, configuration)
        ? configuration
        : undefined;
    if (errorIfCannotFindConfiguration && configuration && !config) {
        output_1.output.error({
            title: `Cannot find configuration '${configuration}' for project '${project.name}:${target}'`,
        });
        process.exit(1);
    }
    const qualifiedTarget = {
        project: project.name,
        target,
        configuration: config,
    };
    return {
        id: getId(qualifiedTarget),
        target: qualifiedTarget,
        projectRoot: project.data.root,
        overrides: interpolateOverrides(overrides, project.name, project.data),
    };
}
exports.createTask = createTask;
function addTasksForProjectDependencyConfig(project, { target, configuration, overrides, }, dependencyConfig, defaultDependencyConfigs, projectGraph, originalTargetExecutor, tasksMap, path, seenSet) {
    const targetIdentifier = getId({
        project: project.name,
        target,
        configuration,
    });
    const pathFragment = {
        targetIdentifier,
        hasTarget: (0, project_graph_utils_1.projectHasTarget)(project, target),
    };
    const newPath = [...path, pathFragment];
    seenSet.add(targetIdentifier);
    if (tasksMap.has(targetIdentifier)) {
        return;
    }
    if (dependencyConfig.projects === 'dependencies') {
        const dependencies = projectGraph.dependencies[project.name];
        if (dependencies) {
            for (const dep of dependencies) {
                const depProject = projectGraph.nodes[dep.target];
                if (depProject &&
                    (0, project_graph_utils_1.projectHasTarget)(depProject, dependencyConfig.target)) {
                    const depTargetId = getId({
                        project: depProject.name,
                        target: dependencyConfig.target,
                        configuration: configuration,
                    });
                    exitOnCircularDep(newPath, depTargetId);
                    if (seenSet.has(depTargetId)) {
                        continue;
                    }
                    addTasksForProjectTarget({
                        project: depProject,
                        target: dependencyConfig.target,
                        configuration,
                        overrides,
                        errorIfCannotFindConfiguration: false,
                    }, defaultDependencyConfigs, projectGraph, originalTargetExecutor, tasksMap, newPath, seenSet);
                }
                else {
                    if (!depProject) {
                        continue;
                    }
                    const depTargetId = getId({
                        project: depProject.name,
                        target: dependencyConfig.target,
                        configuration: configuration,
                    });
                    exitOnCircularDep(newPath, depTargetId);
                    if (seenSet.has(depTargetId)) {
                        continue;
                    }
                    addTasksForProjectDependencyConfig(depProject, { target, configuration, overrides }, dependencyConfig, defaultDependencyConfigs, projectGraph, originalTargetExecutor, tasksMap, newPath, seenSet);
                }
            }
        }
    }
    else if ((0, project_graph_utils_1.projectHasTarget)(project, dependencyConfig.target)) {
        addTasksForProjectTarget({
            project,
            target: dependencyConfig.target,
            configuration,
            overrides,
            errorIfCannotFindConfiguration: false,
        }, defaultDependencyConfigs, projectGraph, originalTargetExecutor, tasksMap, newPath, seenSet);
    }
}
function exitOnCircularDep(path, targetIdentifier) {
    if (path.length > 0 &&
        path[path.length - 1].hasTarget &&
        path.filter((p) => p.targetIdentifier === targetIdentifier).length > 0) {
        const identifiers = path.map((p) => p.targetIdentifier);
        output_1.output.error({
            title: `Could not execute ${identifiers[0]} because it has a circular dependency`,
            bodyLines: [`${[...identifiers, targetIdentifier].join(' --> ')}`],
        });
        process.exit(1);
    }
}
function getId({ project, target, configuration, }) {
    let id = `${project}:${target}`;
    if (configuration) {
        id += `:${configuration}`;
    }
    return id;
}
function getRunner(nxArgs, nxJson) {
    let runner = nxArgs.runner;
    //TODO: vsavkin remove in Nx 12
    if (!nxJson.tasksRunnerOptions) {
        const t = require('./default-tasks-runner');
        return {
            tasksRunner: t.defaultTasksRunner,
            runnerOptions: nxArgs,
        };
    }
    //TODO: vsavkin remove in Nx 12
    if (!runner && !nxJson.tasksRunnerOptions.default) {
        const t = require('./default-tasks-runner');
        return {
            tasksRunner: t.defaultTasksRunner,
            runnerOptions: nxArgs,
        };
    }
    runner = runner || 'default';
    if (nxJson.tasksRunnerOptions[runner]) {
        let modulePath = nxJson.tasksRunnerOptions[runner].runner;
        let tasksRunner;
        if (modulePath) {
            if ((0, fileutils_1.isRelativePath)(modulePath)) {
                modulePath = (0, path_1.join)(app_root_1.workspaceRoot, modulePath);
            }
            tasksRunner = require(modulePath);
            // to support both babel and ts formats
            if (tasksRunner.default) {
                tasksRunner = tasksRunner.default;
            }
        }
        else {
            tasksRunner = require('./default-tasks-runner').defaultTasksRunner;
        }
        return {
            tasksRunner,
            runnerOptions: Object.assign(Object.assign({}, nxJson.tasksRunnerOptions[runner].options), nxArgs),
        };
    }
    else {
        output_1.output.error({
            title: `Could not find runner configuration for ${runner}`,
        });
        process.exit(1);
    }
}
exports.getRunner = getRunner;
function interpolateOverrides(args, projectName, projectMetadata) {
    const interpolatedArgs = Object.assign({}, args);
    Object.entries(interpolatedArgs).forEach(([name, value]) => {
        if (typeof value === 'string') {
            const regex = /{project\.([^}]+)}/g;
            interpolatedArgs[name] = value.replace(regex, (_, group) => {
                if (group.includes('.')) {
                    throw new Error('Only top-level properties can be interpolated');
                }
                if (group === 'name') {
                    return projectName;
                }
                return projectMetadata[group];
            });
        }
    });
    return interpolatedArgs;
}
//# sourceMappingURL=run-command.js.map
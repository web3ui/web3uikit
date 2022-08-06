"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.selectPrintAffected = exports.printAffected = void 0;
const tslib_1 = require("tslib");
const run_command_1 = require("../tasks-runner/run-command");
const utils_1 = require("../tasks-runner/utils");
function printAffected(affectedProjectsWithTargetAndConfig, affectedProjects, projectGraph, { nxJson }, nxArgs, overrides) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projectNames = affectedProjects.map((p) => p.name);
        const tasksJson = yield createTasks(affectedProjectsWithTargetAndConfig, projectGraph, nxArgs, overrides);
        const result = {
            tasks: tasksJson,
            projects: projectNames,
            projectGraph: serializeProjectGraph(projectGraph),
        };
        if (nxArgs.select) {
            console.log(selectPrintAffected(result, nxArgs.select));
        }
        else {
            console.log(JSON.stringify(selectPrintAffected(result, null), null, 2));
        }
    });
}
exports.printAffected = printAffected;
function createTasks(affectedProjectsWithTargetAndConfig, projectGraph, nxArgs, overrides) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const tasks = affectedProjectsWithTargetAndConfig.map((affectedProject) => (0, run_command_1.createTask)({
            project: affectedProject,
            target: nxArgs.target,
            configuration: nxArgs.configuration,
            overrides,
            errorIfCannotFindConfiguration: false,
        }));
        return tasks.map((task, index) => ({
            id: task.id,
            overrides,
            target: task.target,
            command: (0, utils_1.getCommandAsString)(task),
            outputs: (0, utils_1.getOutputs)(projectGraph.nodes, task),
        }));
    });
}
function serializeProjectGraph(projectGraph) {
    const nodes = Object.values(projectGraph.nodes).map((n) => n.name);
    return { nodes, dependencies: projectGraph.dependencies };
}
function selectPrintAffected(wholeJson, wholeSelect) {
    if (!wholeSelect)
        return wholeJson;
    return _select(wholeJson, wholeSelect);
    function _select(json, select) {
        if (select.indexOf('.') > -1) {
            const [firstKey, ...restKeys] = select.split('.');
            const first = json[firstKey];
            throwIfEmpty(wholeSelect, first);
            const rest = restKeys.join('.');
            if (Array.isArray(first)) {
                return first.map((q) => _select(q, rest)).join(', ');
            }
            else {
                return _select(first, rest);
            }
        }
        else {
            const res = json[select];
            throwIfEmpty(wholeSelect, res);
            if (Array.isArray(res)) {
                return res.join(', ');
            }
            else {
                return res;
            }
        }
    }
}
exports.selectPrintAffected = selectPrintAffected;
function throwIfEmpty(select, value) {
    if (value === undefined) {
        throw new Error(`Cannot select '${select}' in the results of print-affected.`);
    }
}
//# sourceMappingURL=print-affected.js.map
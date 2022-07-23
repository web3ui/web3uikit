"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateWorkspaceFromSchema = exports.updateWorkspaceFromPrompt = exports.updateProjects = exports.listProjects = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const create_target_1 = require("./create-target");
const prompt_1 = require("./prompt");
function listProjects(tree) {
    const projects = (0, devkit_1.getProjects)(tree);
    return Array.from(projects.entries()).map(([projectName, project]) => (Object.assign({ projectName }, project)));
}
exports.listProjects = listProjects;
function updateProjects(tree, options, predicate) {
    (0, devkit_1.getProjects)(tree).forEach((project, projectName) => {
        var _a;
        if (predicate(projectName)) {
            const targets = (_a = project.targets) !== null && _a !== void 0 ? _a : {};
            targets.version = (0, create_target_1.createTarget)(options);
            (0, devkit_1.updateProjectConfiguration)(tree, projectName, project);
        }
    });
}
exports.updateProjects = updateProjects;
function updateWorkspaceFromPrompt(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projects = listProjects(tree);
        const answers = yield (0, prompt_1.createPrompt)(projects);
        return updateProjects(tree, options, (projectName) => answers.projects.includes(projectName));
    });
}
exports.updateWorkspaceFromPrompt = updateWorkspaceFromPrompt;
function updateWorkspaceFromSchema(tree, options) {
    return updateProjects(tree, options, (projectName) => { var _a; return (_a = options.projects) === null || _a === void 0 ? void 0 : _a.includes(projectName); });
}
exports.updateWorkspaceFromSchema = updateWorkspaceFromSchema;
//# sourceMappingURL=workspace.js.map
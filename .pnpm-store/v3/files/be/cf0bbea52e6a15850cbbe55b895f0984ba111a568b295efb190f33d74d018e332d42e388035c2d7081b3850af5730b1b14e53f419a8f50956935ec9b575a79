"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const functions_1 = require("../../utils/config/functions");
const get_jest_projects_1 = require("../../utils/config/get-jest-projects");
const update_config_1 = require("../../utils/config/update-config");
function determineUncoveredJestProjects(existingProjects) {
    const coveredJestProjects = (0, get_jest_projects_1.getJestProjects)().reduce((acc, key) => {
        acc[key] = true;
        return acc;
    }, {});
    return existingProjects.filter((project) => !coveredJestProjects[project]);
}
function determineProjectsValue(uncoveredJestProjects) {
    if (!uncoveredJestProjects.length) {
        return `getJestProjects()`;
    }
    return `[...getJestProjects(), ${uncoveredJestProjects
        .map((projectName) => `'${projectName}', `)
        .join('')}]`;
}
function updateBaseJestConfig(tree, baseJestConfigPath = 'jest.config.js') {
    var _a;
    if (tree.read('/jest.config.js', 'utf-8').includes('getJestProjects()')) {
        return;
    }
    const currentConfig = (0, functions_1.jestConfigObject)(tree, baseJestConfigPath);
    (_a = currentConfig.projects) !== null && _a !== void 0 ? _a : (currentConfig.projects = []);
    const uncoveredJestProjects = determineUncoveredJestProjects(currentConfig.projects);
    (0, update_config_1.removePropertyFromJestConfig)(tree, baseJestConfigPath, 'projects');
    (0, update_config_1.addPropertyToJestConfig)(tree, baseJestConfigPath, 'projects', determineProjectsValue(uncoveredJestProjects), { valueAsString: true });
    (0, update_config_1.addImportStatementToJestConfig)(tree, baseJestConfigPath, `const { getJestProjects } = require('@nrwl/jest');`);
    return;
}
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        updateBaseJestConfig(tree);
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = update;
//# sourceMappingURL=update-base-jest-config.js.map
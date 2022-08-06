"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getJestProjects = void 0;
const path_1 = require("path");
const file_utils_1 = require("nx/src/project-graph/file-utils");
const JEST_RUNNER_TOKEN = '@nrwl/jest:jest';
function getJestConfigProjectPath(projectJestConfigPath) {
    return (0, path_1.join)('<rootDir>', (0, path_1.dirname)(projectJestConfigPath));
}
function getJestProjects() {
    var _a;
    const ws = (0, file_utils_1.readWorkspaceConfig)({
        format: 'nx',
    });
    const jestConfigurationSet = new Set();
    for (const projectConfig of Object.values(ws.projects)) {
        if (!projectConfig.targets) {
            continue;
        }
        for (const targetConfiguration of Object.values(projectConfig.targets)) {
            if (targetConfiguration.executor !== JEST_RUNNER_TOKEN) {
                continue;
            }
            if ((_a = targetConfiguration.options) === null || _a === void 0 ? void 0 : _a.jestConfig) {
                jestConfigurationSet.add(getJestConfigProjectPath(targetConfiguration.options.jestConfig));
            }
            if (targetConfiguration.configurations) {
                for (const configurationObject of Object.values(targetConfiguration.configurations)) {
                    if (configurationObject.jestConfig) {
                        jestConfigurationSet.add(getJestConfigProjectPath(configurationObject.jestConfig));
                    }
                }
            }
        }
    }
    return Array.from(jestConfigurationSet);
}
exports.getJestProjects = getJestProjects;
//# sourceMappingURL=get-jest-projects.js.map
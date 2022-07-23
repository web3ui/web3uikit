"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceLint = void 0;
const tslib_1 = require("tslib");
const workspace_integrity_checks_1 = require("./workspace-integrity-checks");
const file_utils_1 = require("../project-graph/file-utils");
const output_1 = require("../utils/output");
const path = require("path");
const project_graph_1 = require("../project-graph/project-graph");
const operators_1 = require("../project-graph/operators");
function workspaceLint() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const graph = yield (0, project_graph_1.createProjectGraphAsync)();
        const allWorkspaceFiles = graph.allWorkspaceFiles;
        const projectGraph = (0, operators_1.pruneExternalNodes)(graph);
        const cliErrorOutputConfigs = new workspace_integrity_checks_1.WorkspaceIntegrityChecks(projectGraph, readAllFilesFromAppsAndLibs(allWorkspaceFiles)).run();
        if (cliErrorOutputConfigs.length > 0) {
            cliErrorOutputConfigs.forEach((errorConfig) => {
                output_1.output.error(errorConfig);
            });
            process.exit(1);
        }
    });
}
exports.workspaceLint = workspaceLint;
function readAllFilesFromAppsAndLibs(allWorkspaceFiles) {
    const wl = (0, file_utils_1.workspaceLayout)();
    return allWorkspaceFiles
        .map((f) => f.file)
        .filter((f) => f.startsWith(`${wl.appsDir}/`) || f.startsWith(`${wl.libsDir}/`))
        .filter((f) => !path.basename(f).startsWith('.'));
}
//# sourceMappingURL=lint.js.map
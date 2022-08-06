"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const project_graph_1 = require("../src/project-graph/project-graph");
const workspace_root_1 = require("../src/utils/workspace-root");
const fileutils_1 = require("../src/utils/fileutils");
const path_1 = require("path");
(() => tslib_1.__awaiter(void 0, void 0, void 0, function* () {
    try {
        if ((0, fileutils_1.fileExists)((0, path_1.join)(workspace_root_1.workspaceRoot, 'nx.json'))) {
            yield (0, project_graph_1.createProjectGraphAsync)();
        }
    }
    catch (e) {
        // Do not error since this runs in a postinstall
    }
}))();
//# sourceMappingURL=compute-project-graph.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildWorkspaceProjectNodes = void 0;
const path_1 = require("path");
const fs_1 = require("fs");
const app_root_1 = require("nx/src/utils/app-root");
const nx_plugin_1 = require("nx/src/utils/nx-plugin");
const project_graph_utils_1 = require("nx/src/utils/project-graph-utils");
const fileutils_1 = require("nx/src/utils/fileutils");
function buildWorkspaceProjectNodes(ctx, builder) {
    const toAdd = [];
    Object.keys(ctx.workspace.projects).forEach((key) => {
        const p = ctx.workspace.projects[key];
        const projectRoot = (0, path_1.join)(app_root_1.workspaceRoot, p.root);
        if ((0, fs_1.existsSync)((0, path_1.join)(projectRoot, 'package.json'))) {
            p.targets = (0, project_graph_utils_1.mergeNpmScriptsWithTargets)(projectRoot, p.targets);
            const { nx } = (0, fileutils_1.readJsonFile)((0, path_1.join)(projectRoot, 'package.json'));
            if (nx === null || nx === void 0 ? void 0 : nx.tags) {
                p.tags = [...(p.tags || []), ...nx.tags];
            }
            if (nx === null || nx === void 0 ? void 0 : nx.implicitDependencies) {
                p.implicitDependencies = [
                    ...(p.implicitDependencies || []),
                    ...nx.implicitDependencies,
                ];
            }
        }
        p.targets = (0, nx_plugin_1.mergePluginTargetsWithNxTargets)(p.root, p.targets, (0, nx_plugin_1.loadNxPlugins)(ctx.workspace.plugins));
        const projectType = p.projectType === 'application'
            ? key.endsWith('-e2e')
                ? 'e2e'
                : 'app'
            : 'lib';
        const tags = ctx.workspace.projects && ctx.workspace.projects[key]
            ? ctx.workspace.projects[key].tags || []
            : [];
        toAdd.push({
            name: key,
            type: projectType,
            data: Object.assign(Object.assign({}, p), { tags, files: ctx.fileMap[key] }),
        });
    });
    // Sort by root directory length (do we need this?)
    toAdd.sort((a, b) => {
        if (!a.data.root)
            return -1;
        if (!b.data.root)
            return -1;
        return a.data.root.length > b.data.root.length ? -1 : 1;
    });
    toAdd.forEach((n) => {
        builder.addNode({
            name: n.name,
            type: n.type,
            data: n.data,
        });
    });
}
exports.buildWorkspaceProjectNodes = buildWorkspaceProjectNodes;
//# sourceMappingURL=workspace-projects.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateBuilderConfig = exports.updateWorkspace = exports.getWorkspace = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular-devkit/core");
function createHost(tree) {
    return {
        readFile(path) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                const data = tree.read(path);
                if (!data) {
                    throw new Error('File not found.');
                }
                return data.toString();
            });
        },
        writeFile(path, data) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return tree.overwrite(path, data);
            });
        },
        isDirectory(path) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                // approximate a directory check
                // special case needed when testing wrapped schematics
                if (path === '/')
                    return true;
                return !tree.exists(path) && tree.getDir(path).subfiles.length > 0;
            });
        },
        isFile(path) {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                return tree.exists(path);
            });
        },
    };
}
function getWorkspace(tree, path = '/') {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const host = createHost(tree);
        const { workspace } = yield core_1.workspaces.readWorkspace(path, host);
        return workspace;
    });
}
exports.getWorkspace = getWorkspace;
function updateWorkspace(updaterOrWorkspace) {
    return (tree) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const host = createHost(tree);
        if (typeof updaterOrWorkspace === 'function') {
            const { workspace } = yield core_1.workspaces.readWorkspace('/', host);
            const result = updaterOrWorkspace(workspace);
            if (result !== undefined) {
                yield result;
            }
            yield core_1.workspaces.writeWorkspace(workspace, host);
        }
        else {
            yield core_1.workspaces.writeWorkspace(updaterOrWorkspace, host);
        }
    });
}
exports.updateWorkspace = updateWorkspace;
/**
 * Updates builder options for options and configurations for given builder names
 */
function updateBuilderConfig(updater, ...builderNames) {
    return updateWorkspace((workspace) => {
        if (!workspace.projects) {
            return;
        }
        workspace.projects.forEach((project) => {
            project.targets.forEach((target) => {
                if (!builderNames.includes(target.builder)) {
                    return;
                }
                if (target.options) {
                    target.options = updater(target.options, target, project);
                }
                if (!target.configurations) {
                    return;
                }
                Object.entries(target.configurations).forEach(([configName, options]) => {
                    target.configurations[configName] = updater(options, target, project);
                });
            });
        });
    });
}
exports.updateBuilderConfig = updateBuilderConfig;
//# sourceMappingURL=workspace.js.map
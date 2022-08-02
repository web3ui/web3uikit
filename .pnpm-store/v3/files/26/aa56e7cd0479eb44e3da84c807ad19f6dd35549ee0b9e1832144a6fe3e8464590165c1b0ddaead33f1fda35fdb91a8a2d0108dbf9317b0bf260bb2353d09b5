"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatFiles = void 0;
const tslib_1 = require("tslib");
const schematics_1 = require("@angular-devkit/schematics");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const path = require("path");
const devkit_1 = require("@nrwl/devkit");
const workspaces_1 = require("nx/src/config/workspaces");
const devkit_2 = require("@nrwl/devkit");
function formatFiles(options = { skipFormat: false }, directory = '') {
    let prettier;
    try {
        prettier = require('prettier');
    }
    catch (e) { }
    if (options.skipFormat) {
        return (0, schematics_1.noop)();
    }
    return (host, context) => {
        updateWorkspaceJsonToMatchFormatVersion(host);
        if (!prettier) {
            return host;
        }
        const files = new Set(host.actions
            .filter((action) => action.kind !== 'd' && action.kind !== 'r')
            .map((action) => ({
            path: action.path,
            content: action.content.toString(),
        })));
        if (files.size === 0) {
            return host;
        }
        return (0, rxjs_1.from)(files).pipe((0, operators_1.filter)((file) => host.exists(file.path)), (0, operators_1.mergeMap)((file) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const systemPath = path.join(devkit_1.workspaceRoot, file.path);
            let options = {
                filepath: systemPath,
            };
            const resolvedOptions = yield prettier.resolveConfig(systemPath);
            if (resolvedOptions) {
                options = Object.assign(Object.assign({}, options), resolvedOptions);
            }
            const support = yield prettier.getFileInfo(systemPath, options);
            if (support.ignored || !support.inferredParser) {
                return;
            }
            try {
                host.overwrite(file.path, prettier.format(file.content, options));
            }
            catch (e) {
                context.logger.warn(`Could not format ${file.path} because ${e.message}`);
            }
        })), (0, operators_1.map)(() => host));
    };
}
exports.formatFiles = formatFiles;
function updateWorkspaceJsonToMatchFormatVersion(host) {
    const workspaceConfigPath = (0, workspaces_1.workspaceConfigName)(devkit_1.workspaceRoot);
    try {
        if (workspaceConfigPath) {
            const workspaceJson = (0, devkit_2.parseJson)(host.read(workspaceConfigPath).toString());
            const reformatted = (0, workspaces_1.reformattedWorkspaceJsonOrNull)(workspaceJson);
            if (reformatted) {
                host.overwrite(workspaceConfigPath, (0, devkit_2.serializeJson)(reformatted));
            }
        }
    }
    catch (e) {
        console.error(`Failed to format workspace config: ${workspaceConfigPath}`);
        console.error(e);
    }
}
//# sourceMappingURL=format-files.js.map
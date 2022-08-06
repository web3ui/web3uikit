"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const logger_1 = require("../utils/logger");
const workspaces_1 = require("../config/workspaces");
const app_root_1 = require("../utils/app-root");
/* eslint-disable */
const Module = require('module');
const originalRequire = Module.prototype.require;
let patched = false;
let loggedWriteWorkspaceWarning = false;
if (!patched) {
    Module.prototype.require = function () {
        const result = originalRequire.apply(this, arguments);
        if (arguments[0].startsWith('@angular-devkit/core')) {
            // Register `workspace.json` as a nonstandard workspace config file
            const core = originalRequire.apply(this, [
                `@angular-devkit/core/src/workspace/core`,
            ]);
            core._test_addWorkspaceFile('workspace.json', core.WorkspaceFormat.JSON);
            const originalReadWorkspace = core.readWorkspace;
            core.readWorkspace = (path, ...rest) => {
                const configFile = (0, workspaces_1.workspaceConfigName)(app_root_1.workspaceRoot);
                if (!configFile) {
                    path = 'workspace.json';
                }
                return originalReadWorkspace.apply(this, [path, ...rest]);
            };
            const originalWriteWorkspace = core.writeWorkspace;
            core.writeWorkspace = (...args) => {
                const configFile = (0, workspaces_1.workspaceConfigName)(app_root_1.workspaceRoot);
                if (!loggedWriteWorkspaceWarning) {
                    if (configFile) {
                        logger_1.logger.warn(`[NX] Angular devkit called \`writeWorkspace\`, this may have had unintended consequences in ${configFile}`);
                        logger_1.logger.warn(`[NX] Double check ${configFile} before proceeding`);
                    }
                    else {
                        logger_1.logger.warn(`[NX] Angular devkit called \`writeWorkspace\`, this may have created 'workspace.json' or 'angular.json`);
                        logger_1.logger.warn(`[NX] Double check workspace configuration before proceeding`);
                    }
                    loggedWriteWorkspaceWarning = true;
                }
                return originalWriteWorkspace.apply(this, args);
            };
            // Patch readJsonWorkspace to inline project configurations
            // as well as work in workspaces without a central workspace file.
            const readJsonUtils = originalRequire.apply(this, [
                `@angular-devkit/core/src/workspace/json/reader`,
            ]);
            const originalReadJsonWorkspace = readJsonUtils.readJsonWorkspace;
            readJsonUtils.readJsonWorkspace = (path, host) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                try {
                    return yield originalReadJsonWorkspace(path, host);
                }
                catch (_a) {
                    logger_1.logger.debug('[NX] Angular devkit readJsonWorkspace fell back to Nx workspaces logic');
                    const w = new workspaces_1.Workspaces(app_root_1.workspaceRoot);
                    // Read our v1 workspace schema
                    const workspaceConfiguration = (0, workspaces_1.resolveOldFormatWithInlineProjects)(w.readWorkspaceConfiguration());
                    // readJsonWorkspace actually has AST parsing + more, so we
                    // still need to call it rather than just return our file
                    return originalReadJsonWorkspace.apply(this, [
                        'workspace.json',
                        {
                            // second arg is a host, only method used is readFile
                            readFile: () => JSON.stringify(workspaceConfiguration),
                        },
                    ]);
                }
            });
        }
        return result;
    };
    try {
        require('@angular-devkit/build-angular/src/utils/version').Version.assertCompatibleAngularVersion =
            () => { };
    }
    catch (e) { }
    try {
        require('@angular-devkit/build-angular/src/utils/version').assertCompatibleAngularVersion =
            () => { };
    }
    catch (e) { }
    patched = true;
}
//# sourceMappingURL=compat.js.map
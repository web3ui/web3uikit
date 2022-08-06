"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWorkspaceLayout = exports.getWorkspacePath = void 0;
const project_configuration_1 = require("nx/src/generators/utils/project-configuration");
var project_configuration_2 = require("nx/src/generators/utils/project-configuration");
Object.defineProperty(exports, "getWorkspacePath", { enumerable: true, get: function () { return project_configuration_2.getWorkspacePath; } });
/**
 * Returns workspace defaults. It includes defaults folders for apps and libs,
 * and the default scope.
 *
 * Example:
 *
 * ```typescript
 * { appsDir: 'apps', libsDir: 'libs', npmScope: 'myorg' }
 * ```
 * @param tree - file system tree
 */
function getWorkspaceLayout(tree) {
    var _a, _b, _c, _d, _e;
    const nxJson = (0, project_configuration_1.readNxJson)(tree);
    return {
        appsDir: (_b = (_a = nxJson === null || nxJson === void 0 ? void 0 : nxJson.workspaceLayout) === null || _a === void 0 ? void 0 : _a.appsDir) !== null && _b !== void 0 ? _b : 'apps',
        libsDir: (_d = (_c = nxJson === null || nxJson === void 0 ? void 0 : nxJson.workspaceLayout) === null || _c === void 0 ? void 0 : _c.libsDir) !== null && _d !== void 0 ? _d : 'libs',
        npmScope: (_e = nxJson === null || nxJson === void 0 ? void 0 : nxJson.npmScope) !== null && _e !== void 0 ? _e : '',
        standaloneAsDefault: (0, project_configuration_1.shouldDefaultToUsingStandaloneConfigs)(tree),
    };
}
exports.getWorkspaceLayout = getWorkspaceLayout;
//# sourceMappingURL=get-workspace-layout.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WORKSPACE_RULE_NAMESPACE = exports.WORKSPACE_PLUGIN_DIR = void 0;
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
exports.WORKSPACE_PLUGIN_DIR = (0, path_1.join)(devkit_1.workspaceRoot, 'tools/eslint-rules');
/**
 * We add a namespace so that we mitigate the risk of rule name collisions as much as
 * possible between what users might create in their workspaces and what we might want
 * to offer directly in eslint-plugin-nx in the future.
 *
 * E.g. if a user writes a rule called "foo", then they will include it in their ESLint
 * config files as:
 *
 * "@nrwl/nx/workspace/foo": "error"
 */
exports.WORKSPACE_RULE_NAMESPACE = 'workspace';
//# sourceMappingURL=constants.js.map
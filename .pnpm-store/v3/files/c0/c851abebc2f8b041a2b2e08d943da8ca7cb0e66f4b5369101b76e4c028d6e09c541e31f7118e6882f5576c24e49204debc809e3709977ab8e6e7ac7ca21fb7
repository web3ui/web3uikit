"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("nx/src/utils/versions");
const workspace_rules_project_1 = require("../../generators/workspace-rules-project/workspace-rules-project");
function addSwcNodeIfNeeded(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            if (tree.exists(workspace_rules_project_1.WORKSPACE_PLUGIN_DIR)) {
                (0, devkit_1.addDependenciesToPackageJson)(tree, {}, { '@swc-node/register': versions_1.swcNodeVersion, '@swc/core': versions_1.swcCoreVersion });
                yield (0, devkit_1.formatFiles)(tree);
                return;
            }
        }
        catch (_a) { }
    });
}
exports.default = addSwcNodeIfNeeded;
//# sourceMappingURL=add-swc-deps-if-needed.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const create_target_1 = require("./utils/create-target");
const dependencies_1 = require("./utils/dependencies");
const workspace_1 = require("./utils/workspace");
function install(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        /* Synced versioning. */
        if (options.syncVersions) {
            (0, devkit_1.addProjectConfiguration)(tree, 'workspace', {
                root: '.',
                targets: {
                    version: (0, create_target_1.createTarget)(options),
                },
            }, false);
            /* Independent versioning. */
        }
        else {
            options.projects && options.projects.length > 0
                ? (0, workspace_1.updateWorkspaceFromSchema)(tree, options)
                : yield (0, workspace_1.updateWorkspaceFromPrompt)(tree, options);
        }
        (0, dependencies_1.addDependencies)(tree, options);
        /* Supports Angular CLI workspace definition format, see https://github.com/nrwl/nx/discussions/6955#discussioncomment-1341893 */
        yield (0, devkit_1.formatFiles)(tree);
        return () => {
            !options.skipInstall && (0, devkit_1.installPackagesTask)(tree);
        };
    });
}
exports.default = install;
//# sourceMappingURL=index.js.map
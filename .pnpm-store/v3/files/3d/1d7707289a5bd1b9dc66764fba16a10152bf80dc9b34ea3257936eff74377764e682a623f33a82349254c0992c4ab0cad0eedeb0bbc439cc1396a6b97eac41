"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
/**
 * The migration for v10.3.0 called "update-eslint-builder-and-config" initially had a bug
 * where it included files from node_modules in the `lintFilePatterns` option if they were
 * explicitly included in any of the relevant tsconfig files.
 *
 * This has now been fixed in the original migration, but this extra migration will handle
 * fixing up any setups which migrated in the interim and are currently experiencing lint
 * warnings as a result.
 */
function updateESLintBuilder() {
    return (0, workspace_1.updateBuilderConfig)((options) => {
        const lintFilePatterns = options.lintFilePatterns || [];
        return Object.assign(Object.assign({}, options), { lintFilePatterns: lintFilePatterns.filter((pattern) => !pattern.includes('node_modules')) });
    }, '@nrwl/linter:eslint');
}
function default_1() {
    return (0, schematics_1.chain)([updateESLintBuilder, (0, workspace_1.formatFiles)()]);
}
exports.default = default_1;
//# sourceMappingURL=revert-node-modules-files-in-eslint-builder-options.js.map
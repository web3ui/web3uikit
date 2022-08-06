"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
const core_1 = require("@angular-devkit/core");
/**
 * When migrating projects we need to look up any relevant tsconfig files
 * to figure out what glob patterns will stand the best chance of keeping
 * the file includes behavior as consistent as possible, before and after
 * the migration.
 */
function updateESLintBuilder(host) {
    return (0, workspace_1.updateBuilderConfig)((options, target, project) => {
        if (options.linter === 'tslint') {
            return options;
        }
        target.builder = '@nrwl/linter:eslint';
        const tsconfigs = [];
        if (options.tsConfig) {
            const normalizedTsConfigOption = Array.isArray(options.tsConfig)
                ? options.tsConfig
                : [options.tsConfig];
            normalizedTsConfigOption.forEach((tsConfigPath) => {
                try {
                    tsconfigs.push((0, workspace_1.readJsonInTree)(host, tsConfigPath));
                }
                catch (_a) { }
                try {
                    tsconfigs.push((0, workspace_1.readJsonInTree)(host, `${project.root}/tsconfig.json`));
                }
                catch (_b) { }
            });
        }
        else {
            try {
                tsconfigs.push((0, workspace_1.readJsonInTree)(host, `${project.root}/tsconfig.json`));
            }
            catch (_a) { }
            try {
                tsconfigs.push((0, workspace_1.readJsonInTree)(host, `${project.root}/tsconfig.app.json`));
            }
            catch (_b) { }
            try {
                tsconfigs.push((0, workspace_1.readJsonInTree)(host, `${project.root}/tsconfig.lib.json`));
            }
            catch (_c) { }
            try {
                tsconfigs.push((0, workspace_1.readJsonInTree)(host, `${project.root}/tsconfig.spec.json`));
            }
            catch (_d) { }
            try {
                tsconfigs.push((0, workspace_1.readJsonInTree)(host, `${project.root}/tsconfig.e2e.json`));
            }
            catch (_e) { }
        }
        const defaultLintFilePatterns = [`${project.root}/**/*.ts`];
        // Merge any available `includes` and `files` from the tsconfig files
        let lintFilePatterns = !tsconfigs.length
            ? defaultLintFilePatterns
            : tsconfigs
                .map((tsconfig) => {
                return [...(tsconfig.include || []), ...(tsconfig.files || [])];
            })
                .reduce((flat, val) => flat.concat(val), [])
                .map((pattern) => (0, core_1.join)((0, core_1.normalize)(project.root), pattern))
                /**
                 * Exclude any files coming from node_modules, they will be ignored by ESLint
                 * and it will print a warning about it. We shouldn't be spending time linting
                 * 3rd party files anyway, and if they are relevant to the TypeScript Program
                 * for the linting run they will still be included in that.
                 */
                .filter((pattern) => !pattern.includes('node_modules'));
        lintFilePatterns = [...new Set(lintFilePatterns)];
        return { lintFilePatterns };
    }, '@nrwl/linter:lint');
}
function default_1() {
    return (0, schematics_1.chain)([updateESLintBuilder, (0, workspace_1.formatFiles)()]);
}
exports.default = default_1;
//# sourceMappingURL=update-eslint-builder-and-config.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
function updateESLintConfigReferencesInWorkspace() {
    return (0, workspace_1.updateBuilderConfig)((options, target, project) => {
        if (target.builder === '@nrwl/linter:lint' &&
            (options === null || options === void 0 ? void 0 : options.linter) === 'tslint') {
            return options;
        }
        if (target.builder === '@nrwl/linter:eslint') {
            if (!options.eslintConfig) {
                return options;
            }
            options.eslintConfig = `${options.eslintConfig}.json`;
            return options;
        }
        if (target.builder === '@nrwl/linter:lint') {
            if (!options.config) {
                return options;
            }
            options.config = `${options.config}.json`;
            return options;
        }
    }, '@nrwl/linter:eslint', '@nrwl/linter:lint');
}
function renameESLintConfigFiles() {
    return (0, workspace_1.visitNotIgnoredFiles)((file, host, context) => {
        if ((0, core_1.basename)(file) !== '.eslintrc') {
            return;
        }
        // Using .eslintrc without an explicit file extension is deprecated
        const newFilePath = `${file}.json`;
        context.logger.info(`Renaming ${file} to ${newFilePath}`);
        try {
            return host.rename(file, newFilePath);
        }
        catch (e) {
            context.logger.error(e);
        }
    });
}
function default_1() {
    return (0, schematics_1.chain)([
        renameESLintConfigFiles,
        updateESLintConfigReferencesInWorkspace,
        (0, workspace_1.formatFiles)(),
    ]);
}
exports.default = default_1;
//# sourceMappingURL=add-json-ext-to-eslintrc.js.map
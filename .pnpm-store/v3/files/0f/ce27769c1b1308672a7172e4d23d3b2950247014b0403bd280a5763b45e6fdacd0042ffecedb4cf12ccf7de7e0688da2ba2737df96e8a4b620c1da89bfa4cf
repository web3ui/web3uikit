"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const rules_requiring_type_checking_1 = require("../../utils/rules-requiring-type-checking");
function updateProjectESLintConfigs(host) {
    const projects = (0, devkit_1.getProjects)(host);
    projects.forEach((p) => {
        const eslintConfigPath = (0, path_1.join)(p.root, '.eslintrc.json');
        if (!host.exists(eslintConfigPath)) {
            return;
        }
        return (0, devkit_1.updateJson)(host, eslintConfigPath, rules_requiring_type_checking_1.removeParserOptionsProjectIfNotRequired);
    });
}
function removeESLintProjectConfigIfNoTypeCheckingRules(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!host.exists('.eslintrc.json')) {
            return;
        }
        // If the root level config uses at least one rule requiring type-checking, do not migrate any project configs
        const rootESLintConfig = (0, devkit_1.readJson)(host, '.eslintrc.json');
        if ((0, rules_requiring_type_checking_1.hasRulesRequiringTypeChecking)(rootESLintConfig)) {
            return;
        }
        updateProjectESLintConfigs(host);
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.default = removeESLintProjectConfigIfNoTypeCheckingRules;
//# sourceMappingURL=remove-eslint-project-config-if-no-type-checking-rules.js.map
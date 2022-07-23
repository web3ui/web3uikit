"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deduplicateOverrides = exports.convertTSLintConfig = exports.ensureESLintPluginsAreInstalled = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const convert_nx_enforce_module_boundaries_rule_1 = require("./convert-nx-enforce-module-boundaries-rule");
const convert_to_eslint_config_1 = require("./convert-to-eslint-config");
function ensureESLintPluginsAreInstalled(host, eslintPluginsToBeInstalled) {
    if (!(eslintPluginsToBeInstalled === null || eslintPluginsToBeInstalled === void 0 ? void 0 : eslintPluginsToBeInstalled.length)) {
        return () => undefined;
    }
    const additionalDevDependencies = {};
    for (const pluginName of eslintPluginsToBeInstalled) {
        additionalDevDependencies[pluginName] = 'latest';
    }
    devkit_1.logger.info('\nINFO: To most closely match your tslint.json, we will ensure the `latest` version of the following eslint plugin(s) are installed:');
    devkit_1.logger.info('\n  - ' + eslintPluginsToBeInstalled.join('\n  - '));
    devkit_1.logger.info('\nPlease note, you may later wish to pin these to a specific version number in your package.json, rather than leaving it open to `latest`.\n');
    return (0, devkit_1.addDependenciesToPackageJson)(host, {}, additionalDevDependencies);
}
exports.ensureESLintPluginsAreInstalled = ensureESLintPluginsAreInstalled;
/**
 * We don't want the user to depend on the TSLint fallback plugin, we will instead
 * explicitly inform them of the rules that could not be converted automatically and
 * advise them on what to do next.
 */
function warnInCaseOfUnconvertedRules(tslintConfigPath, unconvertedTSLintRules) {
    const unconvertedTSLintRuleNames = unconvertedTSLintRules
        .filter(
    // Ignore formatting related rules, they are handled by Nx format/prettier
    (unconverted) => !['import-spacing', 'whitespace', 'typedef'].includes(unconverted.ruleName))
        .map((unconverted) => unconverted.ruleName);
    if (unconvertedTSLintRuleNames.length > 0) {
        devkit_1.logger.warn(`\nWARNING: Within "${tslintConfigPath}", the following ${unconvertedTSLintRuleNames.length} rule(s) did not have known converters in https://github.com/typescript-eslint/tslint-to-eslint-config`);
        devkit_1.logger.warn('\n  - ' + unconvertedTSLintRuleNames.join('\n  - '));
        devkit_1.logger.warn('\nYou will need to decide on how to handle the above manually, but everything else has been handled for you automatically.\n');
    }
}
function convertTSLintConfig(rawTSLintJson, tslintJsonPath, ignoreExtendsVals) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const convertedProject = yield (0, convert_to_eslint_config_1.convertToESLintConfig)(tslintJsonPath, rawTSLintJson, ignoreExtendsVals);
        (_a = convertedProject.convertedESLintConfig).rules || (_a.rules = {});
        /**
         * Apply the custom converter for the nx-module-boundaries rule if applicable
         */
        const convertedNxRule = (0, convert_nx_enforce_module_boundaries_rule_1.convertTslintNxRuleToEslintNxRule)(rawTSLintJson);
        if (convertedNxRule) {
            convertedProject.convertedESLintConfig.rules[convertedNxRule.ruleName] =
                convertedNxRule.ruleConfig;
        }
        // Remove the `@typescript-eslint/tslint/config` rule
        if (convertedProject.convertedESLintConfig.rules['@typescript-eslint/tslint/config']) {
            delete convertedProject.convertedESLintConfig.rules['@typescript-eslint/tslint/config'];
        }
        warnInCaseOfUnconvertedRules(tslintJsonPath, convertedProject.unconvertedTSLintRules);
        return convertedProject;
    });
}
exports.convertTSLintConfig = convertTSLintConfig;
function deduplicateOverrides(overrides = []) {
    const map = new Map();
    for (const o of overrides) {
        const mapKey = typeof o.files === 'string' ? o.files : o.files.join(',');
        const existing = map.get(mapKey);
        if (existing) {
            existing.add(o);
            map.set(mapKey, existing);
            continue;
        }
        const set = new Set();
        set.add(o);
        map.set(mapKey, set);
    }
    let dedupedOverrides = [];
    for (const [, overrides] of map.entries()) {
        const overridesArr = Array.from(overrides);
        if (overridesArr.length === 1) {
            dedupedOverrides = [...dedupedOverrides, ...overridesArr];
            continue;
        }
        let mergedOverride = {};
        for (const o of overridesArr) {
            mergedOverride = Object.assign(Object.assign({}, mergedOverride), o);
        }
        dedupedOverrides.push(mergedOverride);
    }
    return dedupedOverrides;
}
exports.deduplicateOverrides = deduplicateOverrides;
//# sourceMappingURL=utils.js.map
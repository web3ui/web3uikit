"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertTslintNxRuleToEslintNxRule = void 0;
function convertTSLintRuleSeverity(tslintConfig, tslintSeverity) {
    if (tslintSeverity === true) {
        tslintSeverity = 'default';
    }
    if (tslintSeverity === false) {
        tslintSeverity = 'off';
    }
    if (tslintSeverity === 'default') {
        tslintSeverity = tslintConfig.defaultSeverity || 'error';
    }
    const narrowedTslintSeverity = tslintSeverity;
    return narrowedTslintSeverity === 'warning' ? 'warn' : narrowedTslintSeverity;
}
const NX_TSLINT_RULE_NAME = 'nx-enforce-module-boundaries';
function convertTslintNxRuleToEslintNxRule(tslintJson) {
    var _a;
    /**
     * TSLint supports a number of different formats for rule configuration
     */
    const existingRuleDefinition = (_a = tslintJson === null || tslintJson === void 0 ? void 0 : tslintJson.rules) === null || _a === void 0 ? void 0 : _a[NX_TSLINT_RULE_NAME];
    if (!existingRuleDefinition) {
        return null;
    }
    let existingRuleSeverity = 'error';
    let existingRuleConfig = {
        enforceBuildableLibDependency: true,
        allow: [],
        depConstraints: [
            {
                sourceTag: '*',
                onlyDependOnLibsWithTags: ['*'],
            },
        ],
    };
    if (Array.isArray(existingRuleDefinition)) {
        existingRuleSeverity = existingRuleDefinition[0];
        existingRuleConfig = existingRuleDefinition[1];
    }
    else if (typeof existingRuleDefinition === 'object' &&
        existingRuleDefinition.severity) {
        existingRuleSeverity = existingRuleDefinition.severity;
        if (Array.isArray(existingRuleDefinition.options) &&
            existingRuleDefinition.options[0]) {
            existingRuleConfig = existingRuleDefinition.options[0];
        }
    }
    const ruleSeverity = convertTSLintRuleSeverity(tslintJson, existingRuleSeverity);
    return {
        ruleName: '@nrwl/nx/enforce-module-boundaries',
        ruleConfig: [ruleSeverity, existingRuleConfig],
    };
}
exports.convertTslintNxRuleToEslintNxRule = convertTslintNxRuleToEslintNxRule;
//# sourceMappingURL=convert-nx-enforce-module-boundaries-rule.js.map
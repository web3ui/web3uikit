"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeParserOptionsProjectIfNotRequired = exports.hasRulesRequiringTypeChecking = void 0;
// Cache the resolved rules from node_modules
let knownRulesRequiringTypeChecking = null;
function resolveKnownRulesRequiringTypeChecking() {
    if (knownRulesRequiringTypeChecking) {
        return knownRulesRequiringTypeChecking;
    }
    try {
        const { rules } = require('@typescript-eslint/eslint-plugin');
        const rulesRequiringTypeInfo = Object.entries(rules)
            .map(([ruleName, config]) => {
            var _a, _b;
            if ((_b = (_a = config.meta) === null || _a === void 0 ? void 0 : _a.docs) === null || _b === void 0 ? void 0 : _b.requiresTypeChecking) {
                return `@typescript-eslint/${ruleName}`;
            }
            return null;
        })
            .filter(Boolean);
        return rulesRequiringTypeInfo;
    }
    catch (err) {
        console.log(err);
        return null;
    }
}
function hasRulesRequiringTypeChecking(eslintConfig) {
    knownRulesRequiringTypeChecking = resolveKnownRulesRequiringTypeChecking();
    if (!knownRulesRequiringTypeChecking) {
        /**
         * If (unexpectedly) known rules requiring type checking could not be resolved,
         * default to assuming that the rules are in use to align most closely with Nx
         * ESLint configs to date.
         */
        return true;
    }
    const allRulesInConfig = getAllRulesInConfig(eslintConfig);
    return allRulesInConfig.some((rule) => knownRulesRequiringTypeChecking.includes(rule));
}
exports.hasRulesRequiringTypeChecking = hasRulesRequiringTypeChecking;
function removeParserOptionsProjectIfNotRequired(json) {
    // At least one rule requiring type-checking is in use, do not migrate the config
    if (hasRulesRequiringTypeChecking(json)) {
        return json;
    }
    removeProjectParserOptionFromConfig(json);
    return json;
}
exports.removeParserOptionsProjectIfNotRequired = removeParserOptionsProjectIfNotRequired;
function determineEnabledRules(rules) {
    return Object.entries(rules)
        .filter(([key, value]) => {
        return !(typeof value === 'string' && value === 'off');
    })
        .map(([ruleName]) => ruleName);
}
function getAllRulesInConfig(json) {
    var _a;
    let allRules = json.rules ? determineEnabledRules(json.rules) : [];
    if (((_a = json.overrides) === null || _a === void 0 ? void 0 : _a.length) > 0) {
        for (const o of json.overrides) {
            if (o.rules) {
                allRules = allRules = [...allRules, ...determineEnabledRules(o.rules)];
            }
        }
    }
    return allRules;
}
function removeProjectParserOptionFromConfig(json) {
    var _a, _b;
    (_a = json.parserOptions) === null || _a === void 0 ? true : delete _a.project;
    // If parserOptions is left empty by this removal, also clean up the whole object
    if (json.parserOptions && Object.keys(json.parserOptions).length === 0) {
        delete json.parserOptions;
    }
    if (json.overrides) {
        for (const override of json.overrides) {
            (_b = override.parserOptions) === null || _b === void 0 ? true : delete _b.project;
            // If parserOptions is left empty by this removal, also clean up the whole object
            if (override.parserOptions &&
                Object.keys(override.parserOptions).length === 0) {
                delete override.parserOptions;
            }
        }
    }
}
//# sourceMappingURL=rules-requiring-type-checking.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceRules = void 0;
const fs_1 = require("fs");
const constants_1 = require("./constants");
const register_1 = require("nx/src/utils/register");
exports.workspaceRules = (() => {
    // If `tools/eslint-rules` folder doesn't exist, there is no point trying to register and load it
    if (!(0, fs_1.existsSync)(constants_1.WORKSPACE_PLUGIN_DIR)) {
        return {};
    }
    // Register `tools/eslint-rules` for TS transpilation
    const registrationCleanup = (0, register_1.registerTsProject)(constants_1.WORKSPACE_PLUGIN_DIR);
    try {
        /**
         * Currently we only support applying the rules from the user's workspace plugin object
         * (i.e. not other things that plugings can expose like configs, processors etc)
         */
        const { rules } = require(constants_1.WORKSPACE_PLUGIN_DIR);
        // Apply the namespace to the resolved rules
        const namespacedRules = {};
        for (const [ruleName, ruleConfig] of Object.entries(rules)) {
            namespacedRules[`${constants_1.WORKSPACE_RULE_NAMESPACE}/${ruleName}`] = ruleConfig;
        }
        return namespacedRules;
    }
    catch (err) {
        return {};
    }
    finally {
        if (registrationCleanup) {
            registrationCleanup();
        }
    }
})();
//# sourceMappingURL=resolve-workspace-rules.js.map
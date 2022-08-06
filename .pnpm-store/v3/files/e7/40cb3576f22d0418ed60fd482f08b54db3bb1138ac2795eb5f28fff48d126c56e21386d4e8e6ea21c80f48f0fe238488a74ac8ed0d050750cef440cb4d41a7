"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const typescript_1 = require("./configs/typescript");
const javascript_1 = require("./configs/javascript");
const react_tmp_1 = require("./configs/react-tmp");
const react_base_1 = require("./configs/react-base");
const react_jsx_1 = require("./configs/react-jsx");
const react_typescript_1 = require("./configs/react-typescript");
const angular_1 = require("./configs/angular");
const angular_template_1 = require("./configs/angular-template");
const enforce_module_boundaries_1 = require("./rules/enforce-module-boundaries");
// Resolve any custom rules that might exist in the current workspace
const resolve_workspace_rules_1 = require("./resolve-workspace-rules");
module.exports = {
    configs: {
        typescript: typescript_1.default,
        javascript: javascript_1.default,
        react: react_tmp_1.default,
        'react-base': react_base_1.default,
        'react-typescript': react_typescript_1.default,
        'react-jsx': react_jsx_1.default,
        angular: angular_1.default,
        'angular-template': angular_template_1.default,
    },
    rules: Object.assign({ [enforce_module_boundaries_1.RULE_NAME]: enforce_module_boundaries_1.default }, resolve_workspace_rules_1.workspaceRules),
};
//# sourceMappingURL=index.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("@nrwl/workspace");
function addRootESLintrcToImplicitDependencies(host) {
    return host.exists('nx.json')
        ? (0, workspace_1.updateJsonInTree)('nx.json', (json) => {
            json.implicitDependencies || (json.implicitDependencies = {});
            json.implicitDependencies['.eslintrc.json'] = '*';
            return json;
        })
        : (0, schematics_1.noop)();
}
function default_1() {
    return (0, schematics_1.chain)([addRootESLintrcToImplicitDependencies, (0, workspace_1.formatFiles)()]);
}
exports.default = default_1;
//# sourceMappingURL=add-root-eslintrc-json-to-workspace-implicit-deps.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildExplicitTypeScriptDependencies = void 0;
const typescript_import_locator_1 = require("./typescript-import-locator");
const target_project_locator_1 = require("../../utils/target-project-locator");
function buildExplicitTypeScriptDependencies(workspace, graph, filesToProcess) {
    const importLocator = new typescript_import_locator_1.TypeScriptImportLocator();
    const targetProjectLocator = new target_project_locator_1.TargetProjectLocator(graph.nodes, graph.externalNodes);
    const res = [];
    Object.keys(filesToProcess).forEach((source) => {
        Object.values(filesToProcess[source]).forEach((f) => {
            importLocator.fromFile(f.file, (importExpr, filePath, type) => {
                const target = targetProjectLocator.findProjectWithImport(importExpr, f.file);
                if (target) {
                    res.push({
                        sourceProjectName: source,
                        targetProjectName: target,
                        sourceProjectFile: f.file,
                    });
                }
            });
        });
    });
    return res;
}
exports.buildExplicitTypeScriptDependencies = buildExplicitTypeScriptDependencies;
//# sourceMappingURL=explicit-project-dependencies.js.map
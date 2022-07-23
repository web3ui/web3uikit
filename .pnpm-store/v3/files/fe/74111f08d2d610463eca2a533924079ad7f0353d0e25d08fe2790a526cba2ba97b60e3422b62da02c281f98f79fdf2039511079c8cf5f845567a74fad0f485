"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renamePackageImports = void 0;
const tslib_1 = require("tslib");
const ts = require("typescript");
const schematics_1 = require("@angular-devkit/schematics");
const workspace_1 = require("../workspace");
const visit_not_ignored_files_1 = require("./visit-not-ignored-files");
const ast_utils_1 = require("../ast-utils");
const core_1 = require("@angular-devkit/core");
/**
 * Updates all the imports found in the workspace
 *
 * @param packageNameMapping The packageNameMapping provided to the schematic
 */
function renamePackageImports(packageNameMapping) {
    return (tree, _context) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspace = yield (0, workspace_1.getWorkspace)(tree);
        const rules = [];
        workspace.projects.forEach((project) => {
            rules.push((0, visit_not_ignored_files_1.visitNotIgnoredFiles)((file) => {
                if (!/([jt])sx?$/.test(file)) {
                    return;
                }
                const contents = tree.read(file).toString('utf-8');
                const fileIncludesPackageToRename = Object.keys(packageNameMapping).some((packageName) => {
                    return contents.includes(packageName);
                });
                if (!fileIncludesPackageToRename) {
                    return;
                }
                const astSource = ts.createSourceFile(file, contents, ts.ScriptTarget.Latest, true);
                const changes = Object.entries(packageNameMapping)
                    .map(([packageName, newPackageName]) => {
                    const nodes = (0, ast_utils_1.findNodes)(astSource, ts.SyntaxKind.ImportDeclaration);
                    return nodes
                        .filter((node) => {
                        return (
                        // remove quotes from module name
                        node.moduleSpecifier.getText().slice(1).slice(0, -1) ===
                            packageName);
                    })
                        .map((node) => new ast_utils_1.ReplaceChange(file, node.moduleSpecifier.getStart(), node.moduleSpecifier.getText(), `'${newPackageName}'`));
                })
                    // .flatMap()/.flat() is not available? So, here's a flat poly
                    .reduce((acc, val) => acc.concat(val), []);
                // if the reference to packageName was in fact an import statement
                if (changes.length > 0) {
                    // update the file in the tree
                    (0, ast_utils_1.insert)(tree, file, changes);
                }
            }, (0, core_1.normalize)(project.root)));
        });
        return (0, schematics_1.chain)(rules);
    });
}
exports.renamePackageImports = renamePackageImports;
//# sourceMappingURL=rename-package-imports.js.map
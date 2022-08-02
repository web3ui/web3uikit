"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintWorkspaceRuleSchematic = exports.lintWorkspaceRuleGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const strings_1 = require("@nrwl/workspace/src/utils/strings");
const path_1 = require("path");
const ts = require("typescript");
const workspace_lint_rules_1 = require("../../utils/workspace-lint-rules");
const workspace_rules_project_1 = require("../workspace-rules-project/workspace-rules-project");
function lintWorkspaceRuleGenerator(tree, options) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Ensure that the workspace rules project has been created
        const projectGeneratorCallback = yield (0, workspace_rules_project_1.lintWorkspaceRulesProjectGenerator)(tree);
        const ruleDir = (0, devkit_1.joinPathFragments)(workspace_lint_rules_1.workspaceLintPluginDir, (_a = options.directory) !== null && _a !== void 0 ? _a : '');
        // Generate the required files for the new rule
        (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, 'files'), ruleDir, {
            tmpl: '',
            name: options.name,
        });
        const nameCamelCase = (0, strings_1.camelize)(options.name);
        /**
         * Import the new rule into the workspace plugin index.ts and
         * register it ready for use in .eslintrc.json configs.
         */
        const pluginIndexPath = (0, devkit_1.joinPathFragments)(workspace_lint_rules_1.workspaceLintPluginDir, 'index.ts');
        const existingPluginIndexContents = tree.read(pluginIndexPath, 'utf-8');
        const pluginIndexSourceFile = ts.createSourceFile(pluginIndexPath, existingPluginIndexContents, ts.ScriptTarget.Latest, true);
        function findRulesObject(node) {
            if (ts.isPropertyAssignment(node) &&
                ts.isIdentifier(node.name) &&
                node.name.text === 'rules' &&
                ts.isObjectLiteralExpression(node.initializer)) {
                return node.initializer;
            }
            return node.forEachChild(findRulesObject);
        }
        const rulesObject = pluginIndexSourceFile.forEachChild((node) => findRulesObject(node));
        if (rulesObject) {
            const ruleNameSymbol = `${nameCamelCase}Name`;
            const ruleConfigSymbol = nameCamelCase;
            /**
             * If the rules object already has entries, we need to make sure our insertion
             * takes commas into account.
             */
            let leadingComma = '';
            if (rulesObject.properties.length > 0) {
                if (!rulesObject.properties.hasTrailingComma) {
                    leadingComma = ',';
                }
            }
            const newContents = (0, devkit_1.applyChangesToString)(existingPluginIndexContents, [
                {
                    type: devkit_1.ChangeType.Insert,
                    index: 0,
                    text: `import { RULE_NAME as ${ruleNameSymbol}, rule as ${ruleConfigSymbol} } from './${options.directory ? `${options.directory}/` : ''}${options.name}';\n`,
                },
                {
                    type: devkit_1.ChangeType.Insert,
                    index: rulesObject.getEnd() - 1,
                    text: `${leadingComma}[${ruleNameSymbol}]: ${ruleConfigSymbol}\n`,
                },
            ]);
            tree.write(pluginIndexPath, newContents);
        }
        yield (0, devkit_1.formatFiles)(tree);
        devkit_1.logger.info(`NX Reminder: Once you have finished writing your rule logic, you need to actually enable the rule within an appropriate .eslintrc.json in your workspace, for example:

       "rules": {
         "@nrwl/nx/workspace/${options.name}": "error"
       }
`);
        return projectGeneratorCallback;
    });
}
exports.lintWorkspaceRuleGenerator = lintWorkspaceRuleGenerator;
exports.lintWorkspaceRuleSchematic = (0, devkit_1.convertNxGenerator)(lintWorkspaceRuleGenerator);
//# sourceMappingURL=workspace-rule.js.map
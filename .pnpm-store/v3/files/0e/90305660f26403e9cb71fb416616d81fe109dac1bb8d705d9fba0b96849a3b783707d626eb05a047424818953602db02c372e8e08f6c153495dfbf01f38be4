"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const tsquery_1 = require("@phenomnomnominal/tsquery");
function eslint8Updates(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        try {
            const existingJestConfigPath = (0, devkit_1.normalizePath)('tools/eslint-rules/jest.config.js');
            // Add extra config to the jest.config.js file to allow ESLint 8 exports mapping to work with jest
            (0, jest_1.addPropertyToJestConfig)(tree, existingJestConfigPath, 'moduleNameMapper', {
                '@eslint/eslintrc': '@eslint/eslintrc/dist/eslintrc-universal.cjs',
            });
            (0, devkit_1.visitNotIgnoredFiles)(tree, 'tools/eslint-rules', (path) => {
                if (!path.endsWith('.ts')) {
                    return;
                }
                const fileContents = tree.read(path).toString('utf-8');
                const fileAst = tsquery_1.tsquery.ast(fileContents);
                const isESLintRuleFile = (0, tsquery_1.tsquery)(fileAst, 'PropertyAccessExpression[expression.escapedText=ESLintUtils][name.escapedText=RuleCreator]').length > 0;
                if (!isESLintRuleFile) {
                    return;
                }
                const categoryPropertyAssignmentNode = (0, tsquery_1.tsquery)(fileAst, 'PropertyAssignment[name.escapedText=meta] PropertyAssignment[name.escapedText=docs]  PropertyAssignment[name.escapedText=category]')[0];
                if (!categoryPropertyAssignmentNode) {
                    return;
                }
                let end = categoryPropertyAssignmentNode.getEnd();
                if (fileContents.substring(end, end + 1) === ',') {
                    end++;
                }
                const updatedContents = fileContents.slice(0, categoryPropertyAssignmentNode.getFullStart()) +
                    fileContents.slice(end);
                tree.write(path, updatedContents);
            });
            yield (0, devkit_1.formatFiles)(tree);
        }
        catch (_a) { }
    });
}
exports.default = eslint8Updates;
//# sourceMappingURL=eslint-8-updates.js.map
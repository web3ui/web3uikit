"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintWorkspaceRulesProjectSchematic = exports.lintWorkspaceRulesProjectGenerator = exports.WORKSPACE_RULES_PROJECT_NAME = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const path_1 = require("path");
const workspace_lint_rules_1 = require("../../utils/workspace-lint-rules");
exports.WORKSPACE_RULES_PROJECT_NAME = 'eslint-rules';
const WORKSPACE_PLUGIN_DIR = 'tools/eslint-rules';
function lintWorkspaceRulesProjectGenerator(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // Noop if the workspace rules project already exists
        try {
            (0, devkit_1.readProjectConfiguration)(tree, exports.WORKSPACE_RULES_PROJECT_NAME);
            return;
        }
        catch (_a) { }
        // Create the project, the test target is added below by the jest generator
        (0, devkit_1.addProjectConfiguration)(tree, exports.WORKSPACE_RULES_PROJECT_NAME, {
            root: WORKSPACE_PLUGIN_DIR,
            sourceRoot: WORKSPACE_PLUGIN_DIR,
            targets: {},
        });
        // Generate the required files
        (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, 'files'), workspace_lint_rules_1.workspaceLintPluginDir, {
            tmpl: '',
            offsetFromRoot: (0, devkit_1.offsetFromRoot)(WORKSPACE_PLUGIN_DIR),
            rootTsConfigPath: (0, typescript_1.getRelativePathToRootTsConfig)(tree, WORKSPACE_PLUGIN_DIR),
        });
        /**
         * Ensure that when workspace rules are updated they cause all projects to be affected for now.
         * TODO: Explore writing a ProjectGraph plugin to make this more surgical.
         */
        const workspaceConfig = (0, devkit_1.readWorkspaceConfiguration)(tree);
        (0, devkit_1.updateWorkspaceConfiguration)(tree, Object.assign(Object.assign({}, workspaceConfig), { implicitDependencies: Object.assign(Object.assign({}, workspaceConfig.implicitDependencies), { [`${WORKSPACE_PLUGIN_DIR}/**/*`]: '*' }) }));
        // Add jest to the project and return installation task
        const jestInstallationTask = yield (0, jest_1.jestProjectGenerator)(tree, {
            project: exports.WORKSPACE_RULES_PROJECT_NAME,
            supportTsx: false,
            skipSerializers: true,
            setupFile: 'none',
            compiler: 'tsc',
        });
        // Add extra config to the jest.config.ts file to allow ESLint 8 exports mapping to work with jest
        (0, jest_1.addPropertyToJestConfig)(tree, (0, devkit_1.joinPathFragments)(WORKSPACE_PLUGIN_DIR, 'jest.config.ts'), 'moduleNameMapper', {
            '@eslint/eslintrc': '@eslint/eslintrc/dist/eslintrc-universal.cjs',
        });
        yield (0, devkit_1.formatFiles)(tree);
        return jestInstallationTask;
    });
}
exports.lintWorkspaceRulesProjectGenerator = lintWorkspaceRulesProjectGenerator;
exports.lintWorkspaceRulesProjectSchematic = (0, devkit_1.convertNxGenerator)(lintWorkspaceRulesProjectGenerator);
//# sourceMappingURL=workspace-rules-project.js.map
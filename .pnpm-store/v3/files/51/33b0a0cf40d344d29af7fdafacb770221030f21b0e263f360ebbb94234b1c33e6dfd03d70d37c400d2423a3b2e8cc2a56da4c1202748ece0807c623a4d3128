"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintProjectGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const linter_1 = require("../utils/linter");
const eslint_file_1 = require("../utils/eslint-file");
const path_1 = require("path");
const init_1 = require("../init/init");
function createTsLintConfiguration(tree, projectConfig) {
    (0, devkit_1.writeJson)(tree, (0, path_1.join)(projectConfig.root, `tslint.json`), {
        extends: `${(0, devkit_1.offsetFromRoot)(projectConfig.root)}tslint.json`,
        // Include project files to be linted since the global one excludes all files.
        linterOptions: {
            exclude: ['!**/*'],
        },
        rules: {},
    });
}
function createEsLintConfiguration(tree, projectConfig, setParserOptionsProject) {
    (0, devkit_1.writeJson)(tree, (0, path_1.join)(projectConfig.root, `.eslintrc.json`), {
        extends: [`${(0, devkit_1.offsetFromRoot)(projectConfig.root)}${(0, eslint_file_1.findEslintFile)(tree)}`],
        // Include project files to be linted since the global one excludes all files.
        ignorePatterns: ['!**/*'],
        overrides: [
            {
                files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
                /**
                 * NOTE: We no longer set parserOptions.project by default when creating new projects.
                 *
                 * We have observed that users rarely add rules requiring type-checking to their Nx workspaces, and therefore
                 * do not actually need the capabilites which parserOptions.project provides. When specifying parserOptions.project,
                 * typescript-eslint needs to create full TypeScript Programs for you. When omitting it, it can perform a simple
                 * parse (and AST tranformation) of the source files it encounters during a lint run, which is much faster and much
                 * less memory intensive.
                 *
                 * In the rare case that users attempt to add rules requiring type-checking to their setup later on (and haven't set
                 * parserOptions.project), the executor will attempt to look for the particular error typescript-eslint gives you
                 * and provide feedback to the user.
                 */
                parserOptions: !setParserOptionsProject
                    ? undefined
                    : {
                        project: [`${projectConfig.root}/tsconfig.*?.json`],
                    },
                /**
                 * Having an empty rules object present makes it more obvious to the user where they would
                 * extend things from if they needed to
                 */
                rules: {},
            },
            {
                files: ['*.ts', '*.tsx'],
                rules: {},
            },
            {
                files: ['*.js', '*.jsx'],
                rules: {},
            },
        ],
    });
}
function lintProjectGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const installTask = (0, init_1.lintInitGenerator)(tree, {
            linter: options.linter,
            skipPackageJson: options.skipPackageJson,
        });
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, options.project);
        if (options.linter === linter_1.Linter.EsLint) {
            projectConfig.targets['lint'] = {
                executor: '@nrwl/linter:eslint',
                outputs: ['{options.outputFile}'],
                options: {
                    lintFilePatterns: options.eslintFilePatterns,
                },
            };
            createEsLintConfiguration(tree, projectConfig, options.setParserOptionsProject);
        }
        else {
            projectConfig.targets['lint'] = {
                executor: '@angular-devkit/build-angular:tslint',
                options: {
                    tsConfig: options.tsConfigPaths,
                    exclude: ['**/node_modules/**', `!${projectConfig.root}/**/*`],
                },
            };
            createTsLintConfiguration(tree, projectConfig);
        }
        (0, devkit_1.updateProjectConfiguration)(tree, options.project, projectConfig);
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return installTask;
    });
}
exports.lintProjectGenerator = lintProjectGenerator;
//# sourceMappingURL=lint-project.js.map
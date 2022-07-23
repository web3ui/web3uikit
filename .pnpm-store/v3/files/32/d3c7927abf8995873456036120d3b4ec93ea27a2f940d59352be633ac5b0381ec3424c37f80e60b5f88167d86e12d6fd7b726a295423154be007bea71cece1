"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lintInitGenerator = void 0;
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../utils/versions");
const linter_1 = require("../utils/linter");
const eslint_file_1 = require("../utils/eslint-file");
const globalTsLintConfiguration = {
    rulesDirectory: ['node_modules/@nrwl/workspace/src/tslint'],
    linterOptions: {
        exclude: ['**/*'],
    },
    rules: {
        'arrow-return-shorthand': true,
        'callable-types': true,
        'class-name': true,
        deprecation: {
            severity: 'warn',
        },
        forin: true,
        'import-blacklist': [true, 'rxjs/Rx'],
        'interface-over-type-literal': true,
        'member-access': false,
        'member-ordering': [
            true,
            {
                order: [
                    'static-field',
                    'instance-field',
                    'static-method',
                    'instance-method',
                ],
            },
        ],
        'no-arg': true,
        'no-bitwise': true,
        'no-console': [true, 'debug', 'info', 'time', 'timeEnd', 'trace'],
        'no-construct': true,
        'no-debugger': true,
        'no-duplicate-super': true,
        'no-empty': false,
        'no-empty-interface': true,
        'no-eval': true,
        'no-inferrable-types': [true, 'ignore-params'],
        'no-misused-new': true,
        'no-non-null-assertion': true,
        'no-shadowed-variable': true,
        'no-string-literal': false,
        'no-string-throw': true,
        'no-switch-case-fall-through': true,
        'no-unnecessary-initializer': true,
        'no-unused-expression': true,
        'no-var-keyword': true,
        'object-literal-sort-keys': false,
        'prefer-const': true,
        radix: true,
        'triple-equals': [true, 'allow-null-check'],
        'unified-signatures': true,
        'variable-name': false,
        'nx-enforce-module-boundaries': [
            true,
            {
                enforceBuildableLibDependency: true,
                allow: [],
                depConstraints: [{ sourceTag: '*', onlyDependOnLibsWithTags: ['*'] }],
            },
        ],
    },
};
const globalEsLintConfiguration = {
    root: true,
    ignorePatterns: ['**/*'],
    plugins: ['@nrwl/nx'],
    /**
     * We leverage ESLint's "overrides" capability so that we can set up a root config which will support
     * all permutations of Nx workspaces across all frameworks, libraries and tools.
     *
     * The key point is that we need entirely different ESLint config to apply to different types of files,
     * but we still want to share common config where possible.
     */
    overrides: [
        /**
         * This configuration is intended to apply to all "source code" (but not
         * markup like HTML, or other custom file types like GraphQL)
         */
        {
            files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
            rules: {
                '@nrwl/nx/enforce-module-boundaries': [
                    'error',
                    {
                        enforceBuildableLibDependency: true,
                        allow: [],
                        depConstraints: [
                            { sourceTag: '*', onlyDependOnLibsWithTags: ['*'] },
                        ],
                    },
                ],
            },
        },
        /**
         * This configuration is intended to apply to all TypeScript source files.
         * See the eslint-plugin-nx package for what is in the referenced shareable config.
         */
        {
            files: ['*.ts', '*.tsx'],
            extends: ['plugin:@nrwl/nx/typescript'],
            /**
             * Having an empty rules object present makes it more obvious to the user where they would
             * extend things from if they needed to
             */
            rules: {},
        },
        /**
         * This configuration is intended to apply to all JavaScript source files.
         * See the eslint-plugin-nx package for what is in the referenced shareable config.
         */
        {
            files: ['*.js', '*.jsx'],
            extends: ['plugin:@nrwl/nx/javascript'],
            /**
             * Having an empty rules object present makes it more obvious to the user where they would
             * extend things from if they needed to
             */
            rules: {},
        },
    ],
};
function initTsLint(tree, options) {
    if (tree.exists('/tslint.json')) {
        return () => { };
    }
    (0, devkit_1.writeJson)(tree, 'tslint.json', globalTsLintConfiguration);
    return !options.skipPackageJson
        ? (0, devkit_1.addDependenciesToPackageJson)(tree, {}, {
            tslint: versions_1.tslintVersion,
            '@angular-devkit/build-angular': versions_1.buildAngularVersion,
        })
        : () => { };
}
function initEsLint(tree, options) {
    if ((0, eslint_file_1.containsEslint)(tree)) {
        return () => { };
    }
    if (!options.skipPackageJson) {
        (0, devkit_1.removeDependenciesFromPackageJson)(tree, ['@nrwl/linter'], []);
    }
    (0, devkit_1.writeJson)(tree, '.eslintrc.json', globalEsLintConfiguration);
    if (tree.exists('.vscode/extensions.json')) {
        (0, devkit_1.updateJson)(tree, '.vscode/extensions.json', (json) => {
            json.recommendations || (json.recommendations = []);
            const extension = 'dbaeumer.vscode-eslint';
            if (!json.recommendations.includes(extension)) {
                json.recommendations.push(extension);
            }
            return json;
        });
    }
    return !options.skipPackageJson
        ? (0, devkit_1.addDependenciesToPackageJson)(tree, {}, {
            '@nrwl/linter': versions_1.nxVersion,
            '@nrwl/eslint-plugin-nx': versions_1.nxVersion,
            '@typescript-eslint/parser': versions_1.typescriptESLintVersion,
            '@typescript-eslint/eslint-plugin': versions_1.typescriptESLintVersion,
            eslint: versions_1.eslintVersion,
            'eslint-config-prettier': versions_1.eslintConfigPrettierVersion,
        })
        : () => { };
}
function lintInitGenerator(tree, options) {
    if (!options.linter || options.linter === linter_1.Linter.EsLint) {
        return initEsLint(tree, options);
    }
    else if (options.linter === linter_1.Linter.TsLint) {
        return initTsLint(tree, options);
    }
}
exports.lintInitGenerator = lintInitGenerator;
//# sourceMappingURL=init.js.map
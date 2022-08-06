"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLintFiles = exports.generateProjectLint = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular-devkit/core");
const schematics_1 = require("@angular-devkit/schematics");
const ast_utils_1 = require("./ast-utils");
const versions_1 = require("./versions");
const devkit_1 = require("@nrwl/devkit");
function generateProjectLint(projectRoot, tsConfigPath, linter, eslintFilePatterns) {
    if (linter === "tslint" /* TsLint */) {
        return {
            builder: '@angular-devkit/build-angular:tslint',
            options: {
                tsConfig: [tsConfigPath],
                exclude: ['**/node_modules/**', `!${projectRoot}/**/*`],
            },
        };
    }
    else if (linter === "eslint" /* EsLint */) {
        return {
            builder: '@nrwl/linter:eslint',
            options: {
                lintFilePatterns: eslintFilePatterns,
            },
        };
    }
    else {
        return undefined;
    }
}
exports.generateProjectLint = generateProjectLint;
function addLintFiles(projectRoot, linter, options = {}) {
    return (host, context) => {
        var _a, _b;
        if (options.onlyGlobal && options.localConfig) {
            throw new Error('onlyGlobal and localConfig cannot be used at the same time');
        }
        const chainedCommands = [];
        if (linter === 'tslint') {
            chainedCommands.push((host) => {
                if (!host.exists('/tslint.json')) {
                    host.create('/tslint.json', globalTsLint);
                }
                if (!options.onlyGlobal) {
                    host.create((0, core_1.join)(projectRoot, `tslint.json`), JSON.stringify({
                        extends: `${(0, devkit_1.offsetFromRoot)(projectRoot)}tslint.json`,
                        // Include project files to be linted since the global one excludes all files.
                        linterOptions: {
                            exclude: ['!**/*'],
                        },
                        rules: {},
                    }));
                }
            });
            chainedCommands.push((0, ast_utils_1.addDepsToPackageJson)({}, {
                tslint: versions_1.tslintVersion,
                '@angular-devkit/build-angular': versions_1.angularCliVersion,
            }));
            return (0, schematics_1.chain)(chainedCommands);
        }
        if (linter === 'eslint') {
            if (!host.exists('/.eslintrc.json')) {
                host.create('/.eslintrc.json', globalESLint);
            }
            chainedCommands.push((0, ast_utils_1.addDepsToPackageJson)(Object.assign({}, (options.extraPackageDeps
                ? options.extraPackageDeps.dependencies
                : {})), Object.assign({ '@nrwl/linter': versions_1.nxVersion, '@nrwl/eslint-plugin-nx': versions_1.nxVersion, '@typescript-eslint/parser': versions_1.typescriptESLintVersion, '@typescript-eslint/eslint-plugin': versions_1.typescriptESLintVersion, eslint: versions_1.eslintVersion, 'eslint-config-prettier': versions_1.eslintConfigPrettierVersion }, ((_b = (_a = options.extraPackageDeps) === null || _a === void 0 ? void 0 : _a.devDependencies) !== null && _b !== void 0 ? _b : {}))));
            if (!options.onlyGlobal) {
                chainedCommands.push((host) => {
                    let configJson;
                    const rootConfig = `${(0, devkit_1.offsetFromRoot)(projectRoot)}.eslintrc.json`;
                    // Include all project files to be linted (since they are turned off in the root eslintrc file).
                    const ignorePatterns = ['!**/*'];
                    if (options.localConfig) {
                        /**
                         * The end config is much easier to reason about if "extends" comes first,
                         * so as well as applying the extension from the root lint config, we also
                         * adjust the config to make extends come first.
                         */
                        const _a = options.localConfig, { extends: extendsVal } = _a, localConfigExceptExtends = tslib_1.__rest(_a, ["extends"]);
                        const extendsOption = extendsVal
                            ? Array.isArray(extendsVal)
                                ? extendsVal
                                : [extendsVal]
                            : [];
                        configJson = Object.assign({ extends: [...extendsOption, rootConfig], ignorePatterns }, localConfigExceptExtends);
                    }
                    else {
                        configJson = {
                            extends: rootConfig,
                            ignorePatterns,
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
                                    parserOptions: !options.setParserOptionsProject
                                        ? undefined
                                        : {
                                            project: [`${projectRoot}/tsconfig.*?.json`],
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
                        };
                    }
                    host.create((0, core_1.join)(projectRoot, `.eslintrc.json`), JSON.stringify(configJson));
                });
            }
            return (0, schematics_1.chain)(chainedCommands);
        }
    };
}
exports.addLintFiles = addLintFiles;
const globalTsLint = `
{
  "rulesDirectory": ["node_modules/@nrwl/workspace/src/tslint"],
  "linterOptions": {
    "exclude": ["**/*"]
  },
  "rules": {
    "arrow-return-shorthand": true,
    "callable-types": true,
    "class-name": true,
    "deprecation": {
      "severity": "warn"
    },
    "forin": true,
    "import-blacklist": [true, "rxjs/Rx"],
    "interface-over-type-literal": true,
    "member-access": false,
    "member-ordering": [
      true,
      {
        "order": [
          "static-field",
          "instance-field",
          "static-method",
          "instance-method"
        ]
      }
    ],
    "no-arg": true,
    "no-bitwise": true,
    "no-console": [true, "debug", "info", "time", "timeEnd", "trace"],
    "no-construct": true,
    "no-debugger": true,
    "no-duplicate-super": true,
    "no-empty": false,
    "no-empty-interface": true,
    "no-eval": true,
    "no-inferrable-types": [true, "ignore-params"],
    "no-misused-new": true,
    "no-non-null-assertion": true,
    "no-shadowed-variable": true,
    "no-string-literal": false,
    "no-string-throw": true,
    "no-switch-case-fall-through": true,
    "no-unnecessary-initializer": true,
    "no-unused-expression": true,
    "no-var-keyword": true,
    "object-literal-sort-keys": false,
    "prefer-const": true,
    "radix": true,
    "triple-equals": [true, "allow-null-check"],
    "unified-signatures": true,
    "variable-name": false,

    "nx-enforce-module-boundaries": [
      true,
      {
        "enforceBuildableLibDependency": true,
        "allow": [],
        "depConstraints": [
          { "sourceTag": "*", "onlyDependOnLibsWithTags": ["*"] }
        ]
      }
    ]
  }
}
`;
const globalESLint = JSON.stringify({
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
});
//# sourceMappingURL=lint.js.map
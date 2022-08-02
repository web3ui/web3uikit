"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTsConfigsWithEslint = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
function updateRootESLintConfig(host) {
    if (!host.exists('.eslintrc.json')) {
        return;
    }
    (0, devkit_1.updateJson)(host, '.eslintrc.json', (json) => {
        /**
         * If the user is still using OOTB Nx config, then they will have a "project"
         * parserOption set for TS files in their root config.
         *
         * We remove this to both be consistent with new workspace generation, and
         * to ensure they receive an explicit error if they miss off project level
         * configuration (instead of there being a silent, much slower fallback).
         */
        if (json.overrides) {
            json.overrides = json.overrides.map((o) => {
                if (o.parserOptions && o.parserOptions.project) {
                    delete o.parserOptions.project;
                    // If the parserOptions object is now empty as a result, delete it too
                    if (Object.keys(o.parserOptions).length === 0) {
                        delete o.parserOptions;
                    }
                }
                return o;
            });
        }
        return json;
    });
}
function updateProjectESLintConfigs(host) {
    const projects = (0, devkit_1.getProjects)(host);
    projects.forEach((p) => {
        var _a, _b;
        const eslintConfigPath = (0, path_1.join)(p.root, '.eslintrc.json');
        if (!host.exists(eslintConfigPath)) {
            return;
        }
        const isNextJs = ((_b = (_a = p.targets) === null || _a === void 0 ? void 0 : _a.build) === null || _b === void 0 ? void 0 : _b.executor) === '@nrwl/next:build';
        const parserOptionsProjectVal = isNextJs
            ? [`${p.root}/tsconfig(.*)?.json`]
            : [`${p.root}/tsconfig.*?.json`];
        return (0, devkit_1.updateJson)(host, eslintConfigPath, (json) => {
            if (!json.overrides) {
                json.overrides = [
                    {
                        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
                        parserOptions: {
                            project: parserOptionsProjectVal,
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
                ];
            }
            else {
                if (!json.overrides.some((o) => o.parserOptions && o.parserOptions.project)) {
                    json.overrides.unshift({
                        files: ['*.ts', '*.tsx', '*.js', '*.jsx'],
                        parserOptions: {
                            project: parserOptionsProjectVal,
                        },
                        rules: {},
                    });
                }
            }
            return json;
        });
    });
}
function updateTsConfigsWithEslint(host) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        updateRootESLintConfig(host);
        updateProjectESLintConfigs(host);
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.updateTsConfigsWithEslint = updateTsConfigsWithEslint;
exports.default = updateTsConfigsWithEslint;
//# sourceMappingURL=always-use-project-level-tsconfigs-with-eslint.js.map
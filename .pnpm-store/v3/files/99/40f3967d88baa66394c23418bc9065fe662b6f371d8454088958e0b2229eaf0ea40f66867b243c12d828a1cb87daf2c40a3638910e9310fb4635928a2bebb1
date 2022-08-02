"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJestConfigExt = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const allowedExt = ['.ts', '.js'];
function updateTsConfig(tree, tsConfigPath) {
    try {
        (0, devkit_1.updateJson)(tree, tsConfigPath, (json) => {
            json.exclude = Array.from(new Set([...(json.exclude || []), 'jest.config.ts']));
            return json;
        });
    }
    catch (e) {
        devkit_1.logger.warn((0, devkit_1.stripIndents) `Nx Unable to update ${tsConfigPath}. Please manually ignore the jest.config.ts file.`);
    }
}
function addEsLintIgnoreComments(tree, filePath) {
    if (tree.exists(filePath)) {
        const contents = tree.read(filePath, 'utf-8');
        tree.write(filePath, `/* eslint-disable */
${contents}`);
    }
}
function isJestConfigValid(tree, options) {
    const configExt = (0, path_1.extname)(options.jestConfig);
    if (!tree.exists(options.jestConfig) || !allowedExt.includes(configExt)) {
        devkit_1.logger.debug(`unable to update file because it doesn't exist or is not a js or ts file. Config: ${options.jestConfig}. Exists?: ${tree.exists(options.jestConfig)}`);
        return false;
    }
    return true;
}
function updateTsconfigSpec(tree, projectConfig, path, options = {
    isNextWithProjectParse: false,
    tsConfigPath: '',
}) {
    (0, devkit_1.updateJson)(tree, (0, devkit_1.joinPathFragments)(projectConfig.root, path), (json) => {
        json.include = Array.from(new Set([...(json.include || []), 'jest.config.ts']));
        if (options.isNextWithProjectParse) {
            const tsConfig = (0, devkit_1.readJson)(tree, options.tsConfigPath);
            const tsConfigExclude = (tsConfig.exclude || []).filter((e) => e !== 'jest.config.ts');
            json.exclude = Array.from(new Set([...(json.exclude || []), ...tsConfigExclude]));
        }
        return json;
    });
}
function isNextWithProjectLint(projectConfig, esLintJson) {
    var _a, _b, _c, _d;
    const esLintOverrides = (_a = esLintJson === null || esLintJson === void 0 ? void 0 : esLintJson.overrides) === null || _a === void 0 ? void 0 : _a.find((o) => ['*.ts', '*.tsx', '*.js', '*.jsx'].every((ext) => o.files.includes(ext)));
    // check if it's a next app and has a parserOptions.project set in the eslint overrides
    return !!(((_c = (_b = projectConfig === null || projectConfig === void 0 ? void 0 : projectConfig.targets) === null || _b === void 0 ? void 0 : _b['build']) === null || _c === void 0 ? void 0 : _c.executor) === '@nrwl/next:build' &&
        ((_d = esLintOverrides === null || esLintOverrides === void 0 ? void 0 : esLintOverrides.parserOptions) === null || _d === void 0 ? void 0 : _d.project));
}
function updateJestConfigExt(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (tree.exists('jest.config.js')) {
            tree.rename('jest.config.js', 'jest.config.ts');
        }
        (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (options, projectName, target, configuration) => {
            const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
            if (!options.jestConfig || !isJestConfigValid(tree, options)) {
                return;
            }
            addEsLintIgnoreComments(tree, options.jestConfig);
            const newJestConfigPath = options.jestConfig.replace('.js', '.ts');
            tree.rename(options.jestConfig, newJestConfigPath);
            const rootFiles = tree.children(projectConfig.root);
            for (const fileName of rootFiles) {
                if (fileName === 'tsconfig.json') {
                    const filePath = (0, devkit_1.joinPathFragments)(projectConfig.root, fileName);
                    const tsConfig = (0, devkit_1.readJson)(tree, filePath);
                    if (tsConfig.references) {
                        for (const { path } of tsConfig.references) {
                            if (path.endsWith('tsconfig.spec.json')) {
                                const eslintPath = (0, devkit_1.joinPathFragments)(projectConfig.root, '.eslintrc.json');
                                updateTsconfigSpec(tree, projectConfig, path, {
                                    isNextWithProjectParse: tree.exists(eslintPath)
                                        ? isNextWithProjectLint(projectConfig, (0, devkit_1.readJson)(tree, eslintPath))
                                        : false,
                                    tsConfigPath: filePath,
                                });
                                continue;
                            }
                            updateTsConfig(tree, (0, devkit_1.joinPathFragments)(projectConfig.root, path));
                        }
                    }
                    else {
                        updateTsConfig(tree, filePath);
                    }
                }
            }
            projectConfig.targets[target].options.jestConfig = newJestConfigPath;
            (0, devkit_1.updateProjectConfiguration)(tree, projectName, projectConfig);
        });
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.updateJestConfigExt = updateJestConfigExt;
exports.default = updateJestConfigExt;
//# sourceMappingURL=update-jest-config-ext.js.map
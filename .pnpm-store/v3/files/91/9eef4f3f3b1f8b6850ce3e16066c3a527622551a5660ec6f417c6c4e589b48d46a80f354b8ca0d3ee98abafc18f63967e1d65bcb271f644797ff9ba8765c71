"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.usesJestPresetAngular = exports.transformerIsFromJestPresetAngular = exports.getNewAstTransformers = exports.updateTransform = exports.updateASTTransformers = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const update_config_1 = require("../../utils/config/update-config");
function updateJestConfig(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (options, project) => {
        if (!options.jestConfig) {
            return;
        }
        const jestConfigPath = options.jestConfig;
        const jestConfig = require((0, path_1.join)(tree.root, jestConfigPath));
        if (!usesJestPresetAngular(jestConfig)) {
            return;
        }
        try {
            updateASTTransformers(tree, jestConfigPath, jestConfig);
            updateTransform(tree, jestConfigPath, jestConfig);
        }
        catch (_a) {
            devkit_1.logger.error((0, devkit_1.stripIndents) `Unable to update jest.config.js for project ${project}.`);
        }
    });
}
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        updateJestConfig(tree);
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = update;
function updateASTTransformers(tree, jestConfigPath, jestConfig) {
    var _a, _b;
    const newTransformers = getNewAstTransformers((_b = (_a = jestConfig.globals) === null || _a === void 0 ? void 0 : _a['ts-jest']) === null || _b === void 0 ? void 0 : _b.astTransformers);
    if (newTransformers === null) {
        (0, update_config_1.removePropertyFromJestConfig)(tree, jestConfigPath, 'globals.ts-jest.astTransformers');
    }
    else {
        (0, update_config_1.addPropertyToJestConfig)(tree, jestConfigPath, 'globals.ts-jest.astTransformers', newTransformers);
    }
}
exports.updateASTTransformers = updateASTTransformers;
function updateTransform(tree, jestConfigPath, jestConfig) {
    (0, update_config_1.removePropertyFromJestConfig)(tree, jestConfigPath, 'transform');
    (0, update_config_1.addPropertyToJestConfig)(tree, jestConfigPath, 'transform', {
        '^.+\\.(ts|js|html)$': 'jest-preset-angular',
    });
}
exports.updateTransform = updateTransform;
function getNewAstTransformers(astTransformers) {
    var _a, _b, _c, _d, _e, _f, _g, _h, _j;
    let result = {
        before: (_b = (_a = astTransformers === null || astTransformers === void 0 ? void 0 : astTransformers.before) === null || _a === void 0 ? void 0 : _a.filter) === null || _b === void 0 ? void 0 : _b.call(_a, (x) => !transformerIsFromJestPresetAngular(x)),
        after: (_d = (_c = astTransformers === null || astTransformers === void 0 ? void 0 : astTransformers.after) === null || _c === void 0 ? void 0 : _c.filter) === null || _d === void 0 ? void 0 : _d.call(_c, (x) => !transformerIsFromJestPresetAngular(x)),
        afterDeclarations: (_f = (_e = astTransformers === null || astTransformers === void 0 ? void 0 : astTransformers.afterDeclarations) === null || _e === void 0 ? void 0 : _e.filter) === null || _f === void 0 ? void 0 : _f.call(_e, (x) => !transformerIsFromJestPresetAngular(x)),
    };
    result = {
        before: ((_g = result.before) === null || _g === void 0 ? void 0 : _g.length) > 0 ? result.before : undefined,
        after: ((_h = result.after) === null || _h === void 0 ? void 0 : _h.length) > 0 ? result.after : undefined,
        afterDeclarations: ((_j = result.afterDeclarations) === null || _j === void 0 ? void 0 : _j.length) > 0
            ? result.afterDeclarations
            : undefined,
    };
    if (!result.before && !result.after && !result.afterDeclarations) {
        return null;
    }
    else {
        return result;
    }
}
exports.getNewAstTransformers = getNewAstTransformers;
function transformerIsFromJestPresetAngular(transformer) {
    return typeof transformer === 'string'
        ? transformer.includes('jest-preset-angular')
        : transformer.path.includes('jest-preset-angular');
}
exports.transformerIsFromJestPresetAngular = transformerIsFromJestPresetAngular;
function usesJestPresetAngular(jestConfig) {
    var _a, _b, _c, _d, _e, _f, _g;
    const transformers = Array.isArray((_b = (_a = jestConfig.globals) === null || _a === void 0 ? void 0 : _a['ts-jest']) === null || _b === void 0 ? void 0 : _b.astTransformers)
        ? ((_d = (_c = jestConfig.globals) === null || _c === void 0 ? void 0 : _c['ts-jest']) === null || _d === void 0 ? void 0 : _d.astTransformers) || []
        : ((_g = (_f = (_e = jestConfig.globals) === null || _e === void 0 ? void 0 : _e['ts-jest']) === null || _f === void 0 ? void 0 : _f.astTransformers) === null || _g === void 0 ? void 0 : _g.before) || [];
    return transformers.some((x) => transformerIsFromJestPresetAngular(x));
}
exports.usesJestPresetAngular = usesJestPresetAngular;
//# sourceMappingURL=update-jest-preset-angular.js.map
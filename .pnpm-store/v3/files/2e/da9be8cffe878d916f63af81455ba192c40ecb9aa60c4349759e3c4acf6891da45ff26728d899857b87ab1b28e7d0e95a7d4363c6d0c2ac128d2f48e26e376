"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateToDefaultExport = exports.updateRootFiles = exports.updateExportsJestConfig = void 0;
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const tsquery_1 = require("@phenomnomnominal/tsquery");
function updateExportsJestConfig(tree) {
    const { didUpdateRootPreset } = updateRootFiles(tree);
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (options) => {
        if (options.jestConfig && tree.exists(options.jestConfig)) {
            if (options.jestConfig.endsWith('.ts')) {
                updateToDefaultExport(tree, options.jestConfig);
            }
            const updatedImport = updateNxPresetImport(tree.read(options.jestConfig, 'utf-8'));
            tree.write(options.jestConfig, updatedImport);
            // jest.preset.ts => jest.preset.js
            if (didUpdateRootPreset) {
                const projectConfig = tree.read(options.jestConfig, 'utf-8');
                const updatedConfig = projectConfig.replace(/(preset:\s*['"][.\/]*)(jest\.preset\.ts)(['"])/g, '$1jest.preset.js$3');
                tree.write(options.jestConfig, updatedConfig);
            }
        }
    });
}
exports.updateExportsJestConfig = updateExportsJestConfig;
function updateRootFiles(tree) {
    let didUpdateRootPreset = false;
    if (tree.exists('jest.config.ts')) {
        updateToDefaultExport(tree, 'jest.config.ts');
    }
    if (tree.exists('jest.preset.ts')) {
        // fix those who ran v14 migration where this was renamed.
        tree.rename('jest.preset.ts', 'jest.preset.js');
        didUpdateRootPreset = true;
    }
    if (tree.exists('jest.preset.js')) {
        const newContents = updateNxPresetImport(tree.read('jest.preset.js', 'utf-8'));
        tree.write('jest.preset.js', newContents);
    }
    return {
        didUpdateRootPreset,
    };
}
exports.updateRootFiles = updateRootFiles;
function updateNxPresetImport(fileContents) {
    return fileContents.replace(/require\(['"]@nrwl\/jest\/preset['"]\)[;\s]*?[\n\r]/g, `require('@nrwl/jest/preset').default;
`);
}
function updateToDefaultExport(tree, filePath) {
    const newConfig = tsquery_1.tsquery.replace(tree.read(filePath, 'utf-8'), 'ExpressionStatement BinaryExpression', (node) => {
        if (node.left.getText() === 'module.exports') {
            return `export default ${node.right.getText()}`;
        }
        return node.getText();
    });
    tree.write(filePath, newConfig);
}
exports.updateToDefaultExport = updateToDefaultExport;
exports.default = updateExportsJestConfig;
//# sourceMappingURL=update-exports-jest-config.js.map
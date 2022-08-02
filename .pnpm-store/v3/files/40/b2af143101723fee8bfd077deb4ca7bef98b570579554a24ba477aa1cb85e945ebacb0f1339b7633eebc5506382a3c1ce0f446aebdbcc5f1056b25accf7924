"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const update_config_1 = require("../../utils/config/update-config");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
function updateJestConfig(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (options, projectName) => {
        const config = require((0, path_1.join)(tree.root, options.jestConfig));
        // migrate serializers
        if (config.snapshotSerializers &&
            Array.isArray(config.snapshotSerializers)) {
            const snapshotSerializers = config.snapshotSerializers.map((snapshotSerializer) => {
                switch (snapshotSerializer) {
                    case 'jest-preset-angular/build/AngularNoNgAttributesSnapshotSerializer.js':
                        return 'jest-preset-angular/build/serializers/no-ng-attributes';
                    case 'jest-preset-angular/build/AngularSnapshotSerializer.js':
                        return 'jest-preset-angular/build/serializers/ng-snapshot';
                    case 'jest-preset-angular/build/HTMLCommentSerializer.js':
                        return 'jest-preset-angular/build/serializers/html-comment';
                    default:
                        return snapshotSerializer;
                }
            });
            try {
                (0, update_config_1.removePropertyFromJestConfig)(tree, options.jestConfig, 'snapshotSerializers');
                (0, update_config_1.addPropertyToJestConfig)(tree, options.jestConfig, 'snapshotSerializers', snapshotSerializers);
            }
            catch (_a) {
                devkit_1.logger.error((0, devkit_1.stripIndents) `Unable to update snapshotSerializers for project ${projectName}.
            More information you can check online documentation https://github.com/thymikee/jest-preset-angular/blob/master/CHANGELOG.md#840-2021-03-04`);
            }
        }
        try {
            const { sourceRoot } = (0, devkit_1.readProjectConfiguration)(tree, projectName);
            const setupTestPath = (0, path_1.join)(sourceRoot, 'test-setup.ts');
            if (tree.exists(setupTestPath)) {
                const contents = tree.read(setupTestPath, 'utf-8');
                tree.write(setupTestPath, contents.replace(`import 'jest-preset-angular';`, `import 'jest-preset-angular/setup-jest';`));
            }
        }
        catch (_b) {
            devkit_1.logger.error((0, devkit_1.stripIndents) `Unable to update test-setup.ts for project ${projectName}.`);
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
//# sourceMappingURL=update-jest-preset-angular.js.map
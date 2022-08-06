"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const executor_options_utils_1 = require("@nrwl/workspace/src/utilities/executor-options-utils");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
function updateTsConfigsForTests(tree) {
    (0, executor_options_utils_1.forEachExecutorOptions)(tree, '@nrwl/jest:jest', (jestOptions, projectName) => {
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, projectName);
        (0, devkit_1.visitNotIgnoredFiles)(tree, projectConfig.root, (path) => {
            const fileName = (0, path_1.basename)(path);
            if (fileName.startsWith('tsconfig') && fileName.endsWith('.json')) {
                updateTsConfig(tree, path);
            }
        });
    });
    function updateTsConfig(tree, tsconfigSpecPath) {
        try {
            (0, devkit_1.updateJson)(tree, tsconfigSpecPath, (value) => {
                if (value.include) {
                    value.include = makeAllPatternsFromSpecPatterns(value.include);
                }
                if (value.exclude) {
                    value.exclude = makeAllPatternsFromSpecPatterns(value.exclude);
                }
                return value;
            });
        }
        catch (error) {
            // issue trying to parse the tsconfig file bc it's invalid JSON from template markup/comments
            // ignore and move on
            devkit_1.logger.warn((0, devkit_1.stripIndents) `Unable to update ${tsconfigSpecPath}. `);
        }
    }
}
/**
 * take an array of patterns and create patterns from those containing .spec. with .test.
 * by default the pattern ** /*.spec.ts will be used if no value is passed in.
 */
function makeAllPatternsFromSpecPatterns(specGlobs = ['**/*.spec.ts']) {
    return makeUniquePatterns(specGlobs.reduce((patterns, current) => {
        patterns.push(current);
        // .spec. and _spec. can used as testing file name patterns
        if (current.includes('spec.')) {
            patterns.push(current.replace('spec.', 'test.'));
        }
        return patterns;
    }, []));
}
function makeUniquePatterns(items = []) {
    return [...new Set(items)];
}
function update(tree) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        updateTsConfigsForTests(tree);
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.default = update;
//# sourceMappingURL=update-tsconfigs-for-tests.js.map
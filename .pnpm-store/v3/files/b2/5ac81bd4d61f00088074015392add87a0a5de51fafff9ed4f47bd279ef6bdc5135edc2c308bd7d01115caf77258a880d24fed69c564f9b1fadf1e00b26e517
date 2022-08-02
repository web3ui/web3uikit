"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addDependencies = void 0;
const devkit_1 = require("@nrwl/devkit");
const fs_1 = require("fs");
const PACKAGE_JSON = 'package.json';
function addDependencies(tree, options) {
    if (options.enforceConventionalCommits) {
        _addCommitlintConfig(tree, options);
        _addHuskyConfig(tree);
        _addHuskyConfigMsg(tree);
        _addDevDependencies(tree, options);
    }
}
exports.addDependencies = addDependencies;
function _addDevDependencies(tree, options) {
    if (!options.skipInstall) {
        (0, devkit_1.addDependenciesToPackageJson)(tree, {}, {
            '@commitlint/cli': '^17.0.0',
            [_getCommitlintConfig(options)]: '^17.0.0',
            husky: '^8.0.0',
        });
    }
}
function _addCommitlintConfig(tree, options) {
    const packageJson = (0, devkit_1.readJson)(tree, PACKAGE_JSON);
    const hasConfig = packageJson.commitlint != null ||
        tree.exists('commitlint.config.js') ||
        tree.exists('commitlint') ||
        tree.exists('.commitlintrc.js') ||
        tree.exists('.commitlintrc.json') ||
        tree.exists('.commitlintrc.yml');
    if (!hasConfig) {
        tree.write('.commitlintrc.json', JSON.stringify({
            extends: [_getCommitlintConfig(options)],
            rules: {},
        }, null, 2));
    }
    return tree;
}
function _addHuskyConfig(tree) {
    return (0, devkit_1.updateJson)(tree, PACKAGE_JSON, (packageJson) => {
        const hasHusky = tree.exists('.husky/_/husky.sh');
        if (!hasHusky) {
            packageJson.scripts = Object.assign(Object.assign({}, packageJson.scripts), { prepare: 'husky install' });
        }
        return packageJson;
    });
}
function _addHuskyConfigMsg(tree) {
    const hasConfigFile = tree.exists('.husky/commit-msg');
    if (!hasConfigFile) {
        const commitMsg = `#!/bin/sh\n. "$(dirname "$0")/_/husky.sh"\n\nnpx --no-install commitlint --edit $1\n`;
        tree.write('.husky/commit-msg', commitMsg, {
            /* File mode indicating readable, writable, and executable by owner. */
            mode: fs_1.constants.S_IRWXU,
        });
    }
}
function _getCommitlintConfig(options) {
    return options.preset === 'angular'
        ? '@commitlint/config-angular'
        : '@commitlint/config-conventional';
}
//# sourceMappingURL=dependencies.js.map
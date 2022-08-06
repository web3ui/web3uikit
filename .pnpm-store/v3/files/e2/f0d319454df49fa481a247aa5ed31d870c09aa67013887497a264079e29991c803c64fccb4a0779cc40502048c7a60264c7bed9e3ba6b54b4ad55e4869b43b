"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.lint = exports.loadESLint = void 0;
const tslib_1 = require("tslib");
function loadESLint() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let eslint;
        try {
            eslint = yield Promise.resolve().then(() => require('eslint'));
            return eslint;
        }
        catch (_a) {
            throw new Error('Unable to find ESLint. Ensure ESLint is installed.');
        }
    });
}
exports.loadESLint = loadESLint;
function lint(eslintConfigPath, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projectESLint = yield loadESLint();
        const eslint = new projectESLint.ESLint({
            /**
             * If "noEslintrc" is set to `true` (and therefore here "useEslintrc" will be `false`), then ESLint will not
             * merge the provided config with others it finds automatically.
             */
            useEslintrc: !options.noEslintrc,
            overrideConfigFile: eslintConfigPath,
            ignorePath: options.ignorePath || undefined,
            fix: !!options.fix,
            cache: !!options.cache,
            cacheLocation: options.cacheLocation || undefined,
            cacheStrategy: options.cacheStrategy || undefined,
            resolvePluginsRelativeTo: options.resolvePluginsRelativeTo || undefined,
            rulePaths: options.rulesdir || [],
            /**
             * Default is `true` and if not overridden the eslint.lintFiles() method will throw an error
             * when no target files are found.
             *
             * We don't want ESLint to throw an error if a user has only just created
             * a project and therefore doesn't necessarily have matching files, for example.
             *
             * An angular generator creates lint pattern for `html` files, but there may
             * not be any html files in the project, so keeping it true would break linting everytime
             */
            errorOnUnmatchedPattern: false,
        });
        return yield eslint.lintFiles(options.lintFilePatterns);
    });
}
exports.lint = lint;
//# sourceMappingURL=eslint-utils.js.map
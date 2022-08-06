"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const eslint_1 = require("eslint");
const fs_1 = require("fs");
const path_1 = require("path");
const eslint_utils_1 = require("./utility/eslint-utils");
function run(options, context) {
    var _a, _b, _c, _d, _e;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        // this is only used for the hasher
        delete options.hasTypeAwareRules;
        const systemRoot = context.root;
        process.chdir(context.cwd);
        const projectName = context.projectName || '<???>';
        const printInfo = options.format && !options.silent;
        if (printInfo) {
            console.info(`\nLinting ${JSON.stringify(projectName)}...`);
        }
        const projectESLint = yield (0, eslint_utils_1.loadESLint)();
        const version = (_b = (_a = projectESLint.ESLint) === null || _a === void 0 ? void 0 : _a.version) === null || _b === void 0 ? void 0 : _b.split('.');
        if (!version ||
            version.length < 2 ||
            Number(version[0]) < 7 ||
            (Number(version[0]) === 7 && Number(version[1]) < 6)) {
            throw new Error('ESLint must be version 7.6 or higher.');
        }
        const eslint = new projectESLint.ESLint({});
        /**
         * We want users to have the option of not specifying the config path, and let
         * eslint automatically resolve the `.eslintrc.json` files in each folder.
         */
        const eslintConfigPath = options.eslintConfig
            ? (0, path_1.resolve)(systemRoot, options.eslintConfig)
            : undefined;
        let lintResults = [];
        try {
            lintResults = yield (0, eslint_utils_1.lint)(eslintConfigPath, options);
        }
        catch (err) {
            if (err.message.includes('You must therefore provide a value for the "parserOptions.project" property for @typescript-eslint/parser')) {
                let eslintConfigPathForError = `for ${projectName}`;
                if ((_e = (_d = (_c = context.workspace) === null || _c === void 0 ? void 0 : _c.projects) === null || _d === void 0 ? void 0 : _d[projectName]) === null || _e === void 0 ? void 0 : _e.root) {
                    const { root } = context.workspace.projects[projectName];
                    eslintConfigPathForError = `\`${root}/.eslintrc.json\``;
                }
                console.error(`
Error: You have attempted to use a lint rule which requires the full TypeScript type-checker to be available, but you do not have \`parserOptions.project\` configured to point at your project tsconfig.json files in the relevant TypeScript file "overrides" block of your project ESLint config ${eslintConfigPath || eslintConfigPathForError}

Please see https://nx.dev/guides/eslint for full guidance on how to resolve this issue.
`);
                return {
                    success: false,
                };
            }
            // If some unexpected error, rethrow
            throw err;
        }
        if (lintResults.length === 0) {
            const ignoredPatterns = (yield Promise.all(options.lintFilePatterns.map((pattern) => tslib_1.__awaiter(this, void 0, void 0, function* () { return (yield eslint.isPathIgnored(pattern)) ? pattern : null; }))))
                .filter((pattern) => !!pattern)
                .map((pattern) => `- '${pattern}'`);
            if (ignoredPatterns.length) {
                throw new Error(`All files matching the following patterns are ignored:\n${ignoredPatterns.join('\n')}\n\nPlease check your '.eslintignore' file.`);
            }
            throw new Error('Invalid lint configuration. Nothing to lint. Please check your lint target pattern(s).');
        }
        // output fixes to disk, if applicable based on the options
        yield projectESLint.ESLint.outputFixes(lintResults);
        // if quiet, only show errors
        if (options.quiet) {
            console.debug('Quiet mode enabled - filtering out warnings\n');
            lintResults = eslint_1.ESLint.getErrorResults(lintResults);
        }
        const formatter = yield eslint.loadFormatter(options.format);
        let totalErrors = 0;
        let totalWarnings = 0;
        for (const result of lintResults) {
            if (result.errorCount || result.warningCount) {
                totalErrors += result.errorCount;
                totalWarnings += result.warningCount;
            }
        }
        const formattedResults = yield formatter.format(lintResults);
        if (options.outputFile) {
            const pathToOutputFile = (0, path_1.join)(context.root, options.outputFile);
            (0, fs_1.mkdirSync)((0, path_1.dirname)(pathToOutputFile), { recursive: true });
            (0, fs_1.writeFileSync)(pathToOutputFile, formattedResults);
        }
        else {
            console.info(formattedResults);
        }
        if (totalWarnings > 0 && printInfo) {
            console.warn('Lint warnings found in the listed files.\n');
        }
        if (totalErrors > 0 && printInfo) {
            console.error('Lint errors found in the listed files.\n');
        }
        if (totalWarnings === 0 && totalErrors === 0 && printInfo) {
            console.info('All files pass linting.\n');
        }
        return {
            success: options.force ||
                (totalErrors === 0 &&
                    (options.maxWarnings === -1 || totalWarnings <= options.maxWarnings)),
        };
    });
}
exports.default = run;
//# sourceMappingURL=lint.impl.js.map
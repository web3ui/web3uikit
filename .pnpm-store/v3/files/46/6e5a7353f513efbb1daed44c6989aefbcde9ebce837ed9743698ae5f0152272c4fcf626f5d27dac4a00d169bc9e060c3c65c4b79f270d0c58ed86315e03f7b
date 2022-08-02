"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTypeScriptFiles = void 0;
const tslib_1 = require("tslib");
const compilation_1 = require("@nrwl/workspace/src/utilities/typescript/compilation");
const create_async_iteratable_1 = require("../create-async-iterable/create-async-iteratable");
const load_ts_transformers_1 = require("./load-ts-transformers");
const TYPESCRIPT_FOUND_N_ERRORS_WATCHING_FOR_FILE_CHANGES = 6194;
// Typescript diagnostic message for 6194: Found {0} errors. Watching for file changes.
// https://github.com/microsoft/TypeScript/blob/d45012c5e2ab122919ee4777a7887307c5f4a1e0/src/compiler/diagnosticMessages.json#L4763-L4766
const ERROR_COUNT_REGEX = /Found (\d+) errors/;
function getErrorCountFromMessage(messageText) {
    return Number.parseInt(ERROR_COUNT_REGEX.exec(messageText)[1]);
}
function compileTypeScriptFiles(normalizedOptions, context, postCompilationCallback) {
    return tslib_1.__asyncGenerator(this, arguments, function* compileTypeScriptFiles_1() {
        const getResult = (success) => ({
            success,
            outfile: normalizedOptions.mainOutputPath,
        });
        const { compilerPluginHooks } = (0, load_ts_transformers_1.loadTsTransformers)(normalizedOptions.transformers);
        const getCustomTransformers = (program) => ({
            before: compilerPluginHooks.beforeHooks.map((hook) => hook(program)),
            after: compilerPluginHooks.afterHooks.map((hook) => hook(program)),
            afterDeclarations: compilerPluginHooks.afterDeclarationsHooks.map((hook) => hook(program)),
        });
        const tscOptions = {
            outputPath: normalizedOptions.outputPath,
            projectName: context.projectName,
            projectRoot: normalizedOptions.projectRoot,
            tsConfig: normalizedOptions.tsConfig,
            watch: normalizedOptions.watch,
            getCustomTransformers,
        };
        return yield tslib_1.__await(yield tslib_1.__await(yield* tslib_1.__asyncDelegator(tslib_1.__asyncValues((0, create_async_iteratable_1.createAsyncIterable)(({ next, done }) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (normalizedOptions.watch) {
                (0, compilation_1.compileTypeScriptWatcher)(tscOptions, (d) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (d.code === TYPESCRIPT_FOUND_N_ERRORS_WATCHING_FOR_FILE_CHANGES) {
                        yield postCompilationCallback();
                        next(getResult(getErrorCountFromMessage(d.messageText) === 0));
                    }
                }));
            }
            else {
                const { success } = (0, compilation_1.compileTypeScript)(tscOptions);
                yield postCompilationCallback();
                next(getResult(success));
                done();
            }
        }))))));
    });
}
exports.compileTypeScriptFiles = compileTypeScriptFiles;
//# sourceMappingURL=compile-typescript-files.js.map
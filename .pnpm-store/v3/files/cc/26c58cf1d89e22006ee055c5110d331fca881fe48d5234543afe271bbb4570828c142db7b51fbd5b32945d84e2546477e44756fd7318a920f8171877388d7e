"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.compileTypeScriptWatcher = exports.compileTypeScript = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const fs_extra_1 = require("fs-extra");
const ts = require("typescript");
const typescript_1 = require("../typescript");
function compileTypeScript(options) {
    const normalizedOptions = normalizeOptions(options);
    const tsConfig = getNormalizedTsConfig(normalizedOptions);
    if (normalizedOptions.deleteOutputPath) {
        (0, fs_extra_1.removeSync)(normalizedOptions.outputPath);
    }
    return createProgram(tsConfig, normalizedOptions);
}
exports.compileTypeScript = compileTypeScript;
function compileTypeScriptWatcher(options, callback) {
    const normalizedOptions = normalizeOptions(options);
    const tsConfig = getNormalizedTsConfig(normalizedOptions);
    if (normalizedOptions.deleteOutputPath) {
        (0, fs_extra_1.removeSync)(normalizedOptions.outputPath);
    }
    const host = ts.createWatchCompilerHost(tsConfig.fileNames, tsConfig.options, ts.sys);
    const originalAfterProgramCreate = host.afterProgramCreate;
    host.afterProgramCreate = (builderProgram) => {
        const originalProgramEmit = builderProgram.emit;
        builderProgram.emit = (targetSourceFile, writeFile, cancellationToken, emitOnlyDtsFiles, customTransformers) => {
            var _a;
            const consumerCustomTransformers = (_a = options.getCustomTransformers) === null || _a === void 0 ? void 0 : _a.call(options, builderProgram.getProgram());
            const mergedCustomTransformers = mergeCustomTransformers(customTransformers, consumerCustomTransformers);
            return originalProgramEmit(targetSourceFile, writeFile, cancellationToken, emitOnlyDtsFiles, mergedCustomTransformers);
        };
        if (originalAfterProgramCreate)
            originalAfterProgramCreate(builderProgram);
    };
    const originalOnWatchStatusChange = host.onWatchStatusChange;
    host.onWatchStatusChange = (a, b, c, d) => tslib_1.__awaiter(this, void 0, void 0, function* () {
        originalOnWatchStatusChange === null || originalOnWatchStatusChange === void 0 ? void 0 : originalOnWatchStatusChange(a, b, c, d);
        yield (callback === null || callback === void 0 ? void 0 : callback(a, b, c, d));
    });
    return ts.createWatchProgram(host);
}
exports.compileTypeScriptWatcher = compileTypeScriptWatcher;
function mergeCustomTransformers(originalCustomTransformers, consumerCustomTransformers) {
    if (!consumerCustomTransformers)
        return originalCustomTransformers;
    const mergedCustomTransformers = {};
    if (consumerCustomTransformers.before) {
        mergedCustomTransformers.before = (originalCustomTransformers === null || originalCustomTransformers === void 0 ? void 0 : originalCustomTransformers.before)
            ? [
                ...originalCustomTransformers.before,
                ...consumerCustomTransformers.before,
            ]
            : consumerCustomTransformers.before;
    }
    if (consumerCustomTransformers.after) {
        mergedCustomTransformers.after = (originalCustomTransformers === null || originalCustomTransformers === void 0 ? void 0 : originalCustomTransformers.after)
            ? [
                ...originalCustomTransformers.after,
                ...consumerCustomTransformers.after,
            ]
            : consumerCustomTransformers.after;
    }
    if (consumerCustomTransformers.afterDeclarations) {
        mergedCustomTransformers.afterDeclarations =
            (originalCustomTransformers === null || originalCustomTransformers === void 0 ? void 0 : originalCustomTransformers.afterDeclarations)
                ? [
                    ...originalCustomTransformers.afterDeclarations,
                    ...consumerCustomTransformers.afterDeclarations,
                ]
                : consumerCustomTransformers.afterDeclarations;
    }
    return mergedCustomTransformers;
}
function getNormalizedTsConfig(options) {
    const tsConfig = (0, typescript_1.readTsConfig)(options.tsConfig);
    tsConfig.options.outDir = options.outputPath;
    tsConfig.options.noEmitOnError = true;
    tsConfig.options.rootDir = options.rootDir;
    return tsConfig;
}
function createProgram(tsconfig, { projectName, getCustomTransformers }) {
    const host = ts.createCompilerHost(tsconfig.options);
    const program = ts.createProgram({
        rootNames: tsconfig.fileNames,
        options: tsconfig.options,
        host,
    });
    devkit_1.logger.info(`Compiling TypeScript files for project "${projectName}"...`);
    const results = program.emit(undefined, undefined, undefined, undefined, getCustomTransformers === null || getCustomTransformers === void 0 ? void 0 : getCustomTransformers(program));
    if (results.emitSkipped) {
        const diagnostics = ts.formatDiagnosticsWithColorAndContext(results.diagnostics, {
            getCurrentDirectory: () => ts.sys.getCurrentDirectory(),
            getNewLine: () => ts.sys.newLine,
            getCanonicalFileName: (name) => name,
        });
        devkit_1.logger.error(diagnostics);
        return { success: false };
    }
    else {
        devkit_1.logger.info(`Done compiling TypeScript files for project "${projectName}".`);
        return { success: true };
    }
}
function normalizeOptions(options) {
    var _a, _b;
    return Object.assign(Object.assign({}, options), { deleteOutputPath: (_a = options.deleteOutputPath) !== null && _a !== void 0 ? _a : true, rootDir: (_b = options.rootDir) !== null && _b !== void 0 ? _b : options.projectRoot });
}
//# sourceMappingURL=compilation.js.map
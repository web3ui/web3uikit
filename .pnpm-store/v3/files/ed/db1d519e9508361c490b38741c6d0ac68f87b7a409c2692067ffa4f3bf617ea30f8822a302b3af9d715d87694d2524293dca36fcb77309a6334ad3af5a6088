"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormattedDiagnostic = exports.runTypeCheck = exports.runTypeCheckWatch = void 0;
const tslib_1 = require("tslib");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const chalk = require("chalk");
const path = require("path");
const code_frames_1 = require("../code-frames/code-frames");
function runTypeCheckWatch(options, callback) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { ts, workspaceRoot, config, compilerOptions } = yield setupTypeScript(options);
        const host = ts.createWatchCompilerHost(config.fileNames, compilerOptions, ts.sys, ts.createEmitAndSemanticDiagnosticsBuilderProgram);
        const originalOnWatchStatusChange = host.onWatchStatusChange;
        host.onWatchStatusChange = (diagnostic, newLine, opts, errorCount) => {
            originalOnWatchStatusChange === null || originalOnWatchStatusChange === void 0 ? void 0 : originalOnWatchStatusChange(diagnostic, newLine, opts, errorCount);
            callback(diagnostic, getFormattedDiagnostic(ts, workspaceRoot, diagnostic), errorCount);
        };
        const watchProgram = ts.createWatchProgram(host);
        const program = watchProgram.getProgram().getProgram();
        const diagnostics = ts.getPreEmitDiagnostics(program);
        return {
            close: watchProgram.close.bind(watchProgram),
            preEmitErrors: diagnostics
                .filter((d) => d.category === ts.DiagnosticCategory.Error)
                .map((d) => getFormattedDiagnostic(ts, workspaceRoot, d)),
            preEmitWarnings: diagnostics
                .filter((d) => d.category === ts.DiagnosticCategory.Warning)
                .map((d) => getFormattedDiagnostic(ts, workspaceRoot, d)),
        };
    });
}
exports.runTypeCheckWatch = runTypeCheckWatch;
function runTypeCheck(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { ts, workspaceRoot, cacheDir, config, compilerOptions } = yield setupTypeScript(options);
        let program;
        let incremental = false;
        if (compilerOptions.incremental && cacheDir) {
            incremental = true;
            program = ts.createIncrementalProgram({
                rootNames: config.fileNames,
                options: Object.assign(Object.assign({}, compilerOptions), { incremental: true, tsBuildInfoFile: path.join(cacheDir, '.tsbuildinfo') }),
            });
        }
        else {
            program = ts.createProgram(config.fileNames, compilerOptions);
        }
        const result = program.emit();
        const allDiagnostics = ts
            .getPreEmitDiagnostics(program)
            .concat(result.diagnostics);
        return getTypeCheckResult(ts, allDiagnostics, workspaceRoot, config.fileNames.length, program.getSourceFiles().length, incremental);
    });
}
exports.runTypeCheck = runTypeCheck;
function setupTypeScript(options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const ts = yield Promise.resolve().then(() => require('typescript'));
        const { workspaceRoot, tsConfigPath, cacheDir, incremental, rootDir } = options;
        const config = (0, typescript_1.readTsConfig)(tsConfigPath);
        if (config.errors.length) {
            throw new Error(`Invalid config file: ${config.errors}`);
        }
        const emitOptions = options.mode === 'emitDeclarationOnly'
            ? { emitDeclarationOnly: true, declaration: true, outDir: options.outDir }
            : { noEmit: true };
        const compilerOptions = Object.assign(Object.assign(Object.assign(Object.assign({}, config.options), { skipLibCheck: true }), emitOptions), { incremental, rootDir: rootDir || config.options.rootDir });
        return { ts, workspaceRoot, cacheDir, config, compilerOptions };
    });
}
function getTypeCheckResult(ts, allDiagnostics, workspaceRoot, inputFilesCount, totalFilesCount, incremental = false) {
    const errors = allDiagnostics
        .filter((d) => d.category === ts.DiagnosticCategory.Error)
        .map((d) => getFormattedDiagnostic(ts, workspaceRoot, d));
    const warnings = allDiagnostics
        .filter((d) => d.category === ts.DiagnosticCategory.Warning)
        .map((d) => getFormattedDiagnostic(ts, workspaceRoot, d));
    return {
        warnings,
        errors,
        inputFilesCount,
        totalFilesCount,
        incremental,
    };
}
function getFormattedDiagnostic(ts, workspaceRoot, diagnostic) {
    let message = '';
    const reason = ts.flattenDiagnosticMessageText(diagnostic.messageText, '\n');
    const category = diagnostic.category;
    switch (category) {
        case ts.DiagnosticCategory.Warning: {
            message += `${chalk.yellow.bold('warning')} ${chalk.gray(`TS${diagnostic.code}`)}: `;
            break;
        }
        case ts.DiagnosticCategory.Error: {
            message += `${chalk.red.bold('error')} ${chalk.gray(`TS${diagnostic.code}`)}: `;
            break;
        }
        case ts.DiagnosticCategory.Suggestion:
        case ts.DiagnosticCategory.Message:
        default: {
            message += `${chalk.cyan.bold(category === 2 ? 'suggestion' : 'info')}: `;
            break;
        }
    }
    message += reason + '\n';
    if (diagnostic.file) {
        const pos = diagnostic.file.getLineAndCharacterOfPosition(diagnostic.start);
        const line = pos.line + 1;
        const column = pos.character + 1;
        const fileName = path.relative(workspaceRoot, diagnostic.file.fileName);
        message =
            `${chalk.underline.blue(`${fileName}:${line}:${column}`)} - ` + message;
        message +=
            '\n' +
                (0, code_frames_1.codeFrameColumns)(diagnostic.file.getFullText(diagnostic.file.getSourceFile()), {
                    start: { line: line, column },
                });
    }
    return message;
}
exports.getFormattedDiagnostic = getFormattedDiagnostic;
//# sourceMappingURL=run-type-check.js.map
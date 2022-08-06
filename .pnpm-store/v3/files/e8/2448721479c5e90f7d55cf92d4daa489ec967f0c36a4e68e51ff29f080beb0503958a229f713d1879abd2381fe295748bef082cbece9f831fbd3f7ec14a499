"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.register = exports.compile = void 0;
const tslib_1 = require("tslib");
const os_1 = require("os");
const path_1 = require("path");
const core_1 = require("@swc-node/core");
const sourcemap_support_1 = require("@swc-node/sourcemap-support");
const pirates_1 = require("pirates");
const ts = tslib_1.__importStar(require("typescript"));
const read_default_tsconfig_1 = require("./read-default-tsconfig");
const DEFAULT_EXTENSIONS = ['.js', '.jsx', '.es6', '.es', '.mjs', '.ts', '.tsx'];
const PLATFORM = (0, os_1.platform)();
function compile(sourcecode, filename, options) {
    if (filename.endsWith('.d.ts')) {
        return '';
    }
    if (options.files && options.files.length) {
        if (PLATFORM === 'win32' &&
            options.files.every((file) => filename !== (0, path_1.resolve)(process.cwd(), file))) {
            return sourcecode;
        }
        if (PLATFORM !== 'win32' && options.files.every((file) => !filename.endsWith(file))) {
            return sourcecode;
        }
    }
    if (options && typeof options.fallbackToTs === 'function' && options.fallbackToTs(filename)) {
        delete options.fallbackToTs;
        const { outputText, sourceMapText } = ts.transpileModule(sourcecode, {
            fileName: filename,
            compilerOptions: options,
        });
        if (sourceMapText) {
            sourcemap_support_1.SourcemapMap.set(filename, sourceMapText);
        }
        return outputText;
    }
    else {
        const { code, map } = (0, core_1.transformSync)(sourcecode, filename, (0, read_default_tsconfig_1.tsCompilerOptionsToSwcConfig)(options, filename));
        // in case of map is undefined
        if (map) {
            sourcemap_support_1.SourcemapMap.set(filename, map);
        }
        return code;
    }
}
exports.compile = compile;
function register(options = (0, read_default_tsconfig_1.readDefaultTsConfig)(), hookOpts = {}) {
    (0, sourcemap_support_1.installSourceMapSupport)();
    return (0, pirates_1.addHook)((code, filename) => compile(code, filename, options), {
        exts: DEFAULT_EXTENSIONS,
        ...hookOpts,
    });
}
exports.register = register;
//# sourceMappingURL=register.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tsCompilerOptionsToSwcConfig = exports.createSourcemapOption = exports.readDefaultTsConfig = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const path_1 = require("path");
const colorette_1 = require("colorette");
const debug_1 = tslib_1.__importDefault(require("debug"));
const ts = tslib_1.__importStar(require("typescript"));
const debug = (0, debug_1.default)('@swc-node');
function readDefaultTsConfig(tsConfigPath) {
    var _a, _b;
    if (tsConfigPath === void 0) { tsConfigPath = (_b = (_a = process.env.SWC_NODE_PROJECT) !== null && _a !== void 0 ? _a : process.env.TS_NODE_PROJECT) !== null && _b !== void 0 ? _b : (0, path_1.join)(process.cwd(), 'tsconfig.json'); }
    let compilerOptions = {
        target: ts.ScriptTarget.ES2018,
        module: ts.ModuleKind.CommonJS,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        sourceMap: true,
        esModuleInterop: true,
    };
    if (!tsConfigPath) {
        return compilerOptions;
    }
    const fullTsConfigPath = (0, path_1.resolve)(tsConfigPath);
    if (!(0, fs_1.existsSync)(fullTsConfigPath)) {
        return compilerOptions;
    }
    try {
        debug(`Read config file from ${fullTsConfigPath}`);
        const { config } = ts.readConfigFile(fullTsConfigPath, ts.sys.readFile);
        const { options, errors, fileNames } = ts.parseJsonConfigFileContent(config, ts.sys, (0, path_1.dirname)(fullTsConfigPath));
        if (!errors.length) {
            compilerOptions = options;
            compilerOptions.files = fileNames;
        }
        else {
            console.info((0, colorette_1.yellow)(`Convert compiler options from json failed, ${errors.map((d) => d.messageText).join('\n')}`));
        }
    }
    catch (e) {
        console.info((0, colorette_1.yellow)(`Read ${tsConfigPath} failed: ${e.message}`));
    }
    return compilerOptions;
}
exports.readDefaultTsConfig = readDefaultTsConfig;
function toTsTarget(target) {
    switch (target) {
        case ts.ScriptTarget.ES3:
            return 'es3';
        case ts.ScriptTarget.ES5:
            return 'es5';
        case ts.ScriptTarget.ES2015:
            return 'es2015';
        case ts.ScriptTarget.ES2016:
            return 'es2016';
        case ts.ScriptTarget.ES2017:
            return 'es2017';
        case ts.ScriptTarget.ES2018:
            return 'es2018';
        case ts.ScriptTarget.ES2019:
            return 'es2019';
        case ts.ScriptTarget.ES2020:
            return 'es2020';
        case ts.ScriptTarget.ES2021:
        case ts.ScriptTarget.ES2022:
        case ts.ScriptTarget.ESNext:
        case ts.ScriptTarget.Latest:
            return 'es2021';
        case ts.ScriptTarget.JSON:
            return 'es5';
    }
}
function toModule(moduleKind) {
    switch (moduleKind) {
        case ts.ModuleKind.CommonJS:
            return 'commonjs';
        case ts.ModuleKind.UMD:
            return 'umd';
        case ts.ModuleKind.AMD:
            return 'amd';
        case ts.ModuleKind.ES2015:
        case ts.ModuleKind.ES2020:
        case ts.ModuleKind.ES2022:
        case ts.ModuleKind.ESNext:
        case ts.ModuleKind.Node12:
        case ts.ModuleKind.NodeNext:
        case ts.ModuleKind.None:
            return 'es6';
        case ts.ModuleKind.System:
            throw new TypeError('Do not support system kind module');
    }
}
function createSourcemapOption(options) {
    return options.sourceMap !== false
        ? options.inlineSourceMap
            ? 'inline'
            : true
        : options.inlineSourceMap
            ? 'inline'
            : false;
}
exports.createSourcemapOption = createSourcemapOption;
function tsCompilerOptionsToSwcConfig(options, filename) {
    var _a, _b, _c, _d, _e, _f;
    return {
        target: toTsTarget((_a = options.target) !== null && _a !== void 0 ? _a : ts.ScriptTarget.ES2018),
        module: toModule((_b = options.module) !== null && _b !== void 0 ? _b : ts.ModuleKind.ES2015),
        sourcemap: createSourcemapOption(options),
        jsx: filename.endsWith('.tsx') || filename.endsWith('.jsx') || Boolean(options.jsx),
        react: options.jsxFactory || options.jsxFragmentFactory || options.jsx || options.jsxImportSource
            ? {
                pragma: options.jsxFactory,
                pragmaFrag: options.jsxFragmentFactory,
                importSource: options.jsxImportSource,
                runtime: ((_c = options.jsx) !== null && _c !== void 0 ? _c : 0) >= ts.JsxEmit.ReactJSX ? 'automatic' : 'classic',
            }
            : undefined,
        experimentalDecorators: (_d = options.experimentalDecorators) !== null && _d !== void 0 ? _d : false,
        emitDecoratorMetadata: (_e = options.emitDecoratorMetadata) !== null && _e !== void 0 ? _e : false,
        dynamicImport: true,
        esModuleInterop: (_f = options.esModuleInterop) !== null && _f !== void 0 ? _f : false,
        keepClassNames: true,
        paths: options.paths,
    };
}
exports.tsCompilerOptionsToSwcConfig = tsCompilerOptionsToSwcConfig;
//# sourceMappingURL=read-default-tsconfig.js.map
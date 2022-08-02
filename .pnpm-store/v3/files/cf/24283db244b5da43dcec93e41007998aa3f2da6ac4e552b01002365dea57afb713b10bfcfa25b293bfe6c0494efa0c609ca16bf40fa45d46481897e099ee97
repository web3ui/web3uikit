"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = require("path");
const resolve_exports_1 = require("resolve.exports");
let compilerSetup;
let ts;
function getCompilerSetup(rootDir) {
    const tsConfigPath = ts.findConfigFile(rootDir, ts.sys.fileExists, 'tsconfig.spec.json') ||
        ts.findConfigFile(rootDir, ts.sys.fileExists, 'tsconfig.test.json') ||
        ts.findConfigFile(rootDir, ts.sys.fileExists, 'tsconfig.jest.json');
    if (!tsConfigPath) {
        console.error(`Cannot locate a tsconfig.spec.json. Please create one at ${rootDir}/tsconfig.spec.json`);
    }
    const readResult = ts.readConfigFile(tsConfigPath, ts.sys.readFile);
    const config = ts.parseJsonConfigFileContent(readResult.config, ts.sys, (0, path_1.dirname)(tsConfigPath));
    const compilerOptions = config.options;
    const host = ts.createCompilerHost(compilerOptions, true);
    return { compilerOptions, host };
}
module.exports = function (path, options) {
    const ext = (0, path_1.extname)(path);
    if (ext === '.css' ||
        ext === '.scss' ||
        ext === '.sass' ||
        ext === '.less' ||
        ext === '.styl') {
        return require.resolve('identity-obj-proxy');
    }
    try {
        try {
            // Try to use the defaultResolver with default options
            return options.defaultResolver(path, options);
        }
        catch (_a) {
            // Try to use the defaultResolver with a packageFilter
            return options.defaultResolver(path, Object.assign(Object.assign({}, options), { packageFilter: (pkg) => (Object.assign(Object.assign({}, pkg), { main: pkg.main || pkg.es2015 || pkg.module })), pathFilter: (pkg) => {
                    if (!pkg.exports) {
                        return path;
                    }
                    return (0, resolve_exports_1.resolve)(pkg, path) || path;
                } }));
        }
    }
    catch (e) {
        if (path === 'jest-sequencer-@jest/test-sequencer' ||
            path === '@jest/test-sequencer') {
            return;
        }
        // Fallback to using typescript
        ts = ts || require('typescript');
        compilerSetup = compilerSetup || getCompilerSetup(options.rootDir);
        const { compilerOptions, host } = compilerSetup;
        return ts.resolveModuleName(path, options.basedir, compilerOptions, host)
            .resolvedModule.resolvedFileName;
    }
};
//# sourceMappingURL=resolver.js.map
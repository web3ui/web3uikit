"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRootTsConfigPath = exports.getRootTsConfigFileName = exports.getRelativePathToRootTsConfig = exports.getRootTsConfigPathInTree = exports.resolveModuleByImport = exports.readTsConfig = exports.getSourceNodes = exports.findNodes = exports.compileTypeScript = void 0;
const devkit_1 = require("@nrwl/devkit");
const devkit_2 = require("@nrwl/devkit");
const fs_1 = require("fs");
const path_1 = require("path");
var compilation_1 = require("./typescript/compilation");
Object.defineProperty(exports, "compileTypeScript", { enumerable: true, get: function () { return compilation_1.compileTypeScript; } });
var find_nodes_1 = require("./typescript/find-nodes");
Object.defineProperty(exports, "findNodes", { enumerable: true, get: function () { return find_nodes_1.findNodes; } });
var get_source_nodes_1 = require("./typescript/get-source-nodes");
Object.defineProperty(exports, "getSourceNodes", { enumerable: true, get: function () { return get_source_nodes_1.getSourceNodes; } });
const normalizedAppRoot = devkit_2.workspaceRoot.replace(/\\/g, '/');
let tsModule;
function readTsConfig(tsConfigPath) {
    if (!tsModule) {
        tsModule = require('typescript');
    }
    const readResult = tsModule.readConfigFile(tsConfigPath, tsModule.sys.readFile);
    return tsModule.parseJsonConfigFileContent(readResult.config, tsModule.sys, (0, path_1.dirname)(tsConfigPath));
}
exports.readTsConfig = readTsConfig;
function readTsConfigOptions(tsConfigPath) {
    if (!tsModule) {
        tsModule = require('typescript');
    }
    const readResult = tsModule.readConfigFile(tsConfigPath, tsModule.sys.readFile);
    // we don't need to scan the files, we only care about options
    const host = {
        readDirectory: () => [],
        fileExists: tsModule.sys.fileExists,
    };
    return tsModule.parseJsonConfigFileContent(readResult.config, host, (0, path_1.dirname)(tsConfigPath)).options;
}
let compilerHost;
/**
 * Find a module based on it's import
 *
 * @param importExpr Import used to resolve to a module
 * @param filePath
 * @param tsConfigPath
 */
function resolveModuleByImport(importExpr, filePath, tsConfigPath) {
    compilerHost = compilerHost || getCompilerHost(tsConfigPath);
    const { options, host, moduleResolutionCache } = compilerHost;
    const { resolvedModule } = tsModule.resolveModuleName(importExpr, filePath, options, host, moduleResolutionCache);
    if (!resolvedModule) {
        return;
    }
    else {
        return resolvedModule.resolvedFileName.replace(`${normalizedAppRoot}/`, '');
    }
}
exports.resolveModuleByImport = resolveModuleByImport;
function getCompilerHost(tsConfigPath) {
    const options = readTsConfigOptions(tsConfigPath);
    const host = tsModule.createCompilerHost(options, true);
    const moduleResolutionCache = tsModule.createModuleResolutionCache(devkit_2.workspaceRoot, host.getCanonicalFileName);
    return { options, host, moduleResolutionCache };
}
function getRootTsConfigPathInTree(tree) {
    for (const path of ['tsconfig.base.json', 'tsconfig.json']) {
        if (tree.exists(path)) {
            return path;
        }
    }
    return 'tsconfig.base.json';
}
exports.getRootTsConfigPathInTree = getRootTsConfigPathInTree;
function getRelativePathToRootTsConfig(tree, targetPath) {
    return (0, devkit_1.offsetFromRoot)(targetPath) + getRootTsConfigPathInTree(tree);
}
exports.getRelativePathToRootTsConfig = getRelativePathToRootTsConfig;
function getRootTsConfigFileName() {
    for (const tsConfigName of ['tsconfig.base.json', 'tsconfig.json']) {
        const tsConfigPath = (0, path_1.join)(devkit_2.workspaceRoot, tsConfigName);
        if ((0, fs_1.existsSync)(tsConfigPath)) {
            return tsConfigName;
        }
    }
    return null;
}
exports.getRootTsConfigFileName = getRootTsConfigFileName;
function getRootTsConfigPath() {
    const tsConfigFileName = getRootTsConfigFileName();
    return tsConfigFileName ? (0, path_1.join)(devkit_2.workspaceRoot, tsConfigFileName) : null;
}
exports.getRootTsConfigPath = getRootTsConfigPath;
//# sourceMappingURL=typescript.js.map
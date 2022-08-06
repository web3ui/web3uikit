"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveLocalNxPlugin = exports.readPluginPackageJson = exports.mergePluginTargetsWithNxTargets = exports.loadNxPlugins = void 0;
const fast_glob_1 = require("fast-glob");
const fs_1 = require("fs");
const path = require("path");
const workspaces_1 = require("../config/workspaces");
const app_root_1 = require("../utils/app-root");
const fileutils_1 = require("../utils/fileutils");
const register_1 = require("./register");
const target_project_locator_1 = require("./target-project-locator");
const logger_1 = require("./logger");
// Short lived cache (cleared between cmd runs)
// holding resolved nx plugin objects.
// Allows loadNxPlugins to be called multiple times w/o
// executing resolution mulitple times.
let nxPluginCache = null;
function loadNxPlugins(plugins, paths = [app_root_1.workspaceRoot]) {
    return (plugins === null || plugins === void 0 ? void 0 : plugins.length)
        ? nxPluginCache ||
            (nxPluginCache = plugins.map((moduleName) => {
                let pluginPath;
                try {
                    pluginPath = require.resolve(moduleName, {
                        paths,
                    });
                }
                catch (e) {
                    if (e.code === 'MODULE_NOT_FOUND') {
                        const plugin = resolveLocalNxPlugin(moduleName);
                        if (plugin) {
                            const main = readPluginMainFromProjectConfiguration(plugin.projectConfig);
                            pluginPath = main
                                ? path.join(app_root_1.workspaceRoot, main)
                                : plugin.path;
                        }
                        else {
                            logger_1.logger.error(`Plugin listed in \`nx.json\` not found: ${moduleName}`);
                            throw e;
                        }
                    }
                    else {
                        throw e;
                    }
                }
                const packageJsonPath = path.join(pluginPath, 'package.json');
                const { name } = !['.ts', '.js'].some((x) => x === path.extname(pluginPath)) && // Not trying to point to a ts or js file
                    (0, fs_1.existsSync)(packageJsonPath) // plugin has a package.json
                    ? (0, fileutils_1.readJsonFile)(packageJsonPath) // read name from package.json
                    : { name: path.basename(pluginPath) }; // use the name of the file we point to
                const plugin = require(pluginPath);
                plugin.name = name;
                return plugin;
            }))
        : [];
}
exports.loadNxPlugins = loadNxPlugins;
function mergePluginTargetsWithNxTargets(projectRoot, targets, plugins) {
    var _a;
    let newTargets = {};
    for (const plugin of plugins) {
        if (!((_a = plugin.projectFilePatterns) === null || _a === void 0 ? void 0 : _a.length) || !plugin.registerProjectTargets) {
            continue;
        }
        const projectFiles = (0, fast_glob_1.sync)(`+(${plugin.projectFilePatterns.join('|')})`, {
            cwd: path.join(app_root_1.workspaceRoot, projectRoot),
        });
        for (const projectFile of projectFiles) {
            newTargets = Object.assign(Object.assign({}, newTargets), plugin.registerProjectTargets(path.join(projectRoot, projectFile)));
        }
    }
    return Object.assign(Object.assign({}, newTargets), targets);
}
exports.mergePluginTargetsWithNxTargets = mergePluginTargetsWithNxTargets;
function readPluginPackageJson(pluginName, paths = [app_root_1.workspaceRoot]) {
    let packageJsonPath;
    try {
        packageJsonPath = require.resolve(`${pluginName}/package.json`, {
            paths,
        });
    }
    catch (e) {
        if (e.code === 'MODULE_NOT_FOUND') {
            const localPluginPath = resolveLocalNxPlugin(pluginName);
            if (localPluginPath) {
                const localPluginPackageJson = path.join(localPluginPath.path, 'package.json');
                return {
                    path: localPluginPackageJson,
                    json: (0, fileutils_1.readJsonFile)(localPluginPackageJson),
                };
            }
        }
        throw e;
    }
    return { json: (0, fileutils_1.readJsonFile)(packageJsonPath), path: packageJsonPath };
}
exports.readPluginPackageJson = readPluginPackageJson;
/**
 * Builds a plugin package and returns the path to output
 * @param importPath What is the import path that refers to a potential plugin?
 * @returns The path to the built plugin, or null if it doesn't exist
 */
const localPluginCache = {};
function resolveLocalNxPlugin(importPath, root = app_root_1.workspaceRoot) {
    var _a;
    (_a = localPluginCache[importPath]) !== null && _a !== void 0 ? _a : (localPluginCache[importPath] = lookupLocalPlugin(importPath, root));
    return localPluginCache[importPath];
}
exports.resolveLocalNxPlugin = resolveLocalNxPlugin;
let tsNodeAndPathsRegistered = false;
function registerTSTranspiler() {
    if (!tsNodeAndPathsRegistered) {
        (0, register_1.registerTsProject)(app_root_1.workspaceRoot, 'tsconfig.base.json');
    }
    tsNodeAndPathsRegistered = true;
}
function lookupLocalPlugin(importPath, root = app_root_1.workspaceRoot) {
    const workspace = new workspaces_1.Workspaces(root).readWorkspaceConfiguration({
        _ignorePluginInference: true,
    });
    const plugin = findNxProjectForImportPath(importPath, workspace, root);
    if (!plugin) {
        return null;
    }
    if (!tsNodeAndPathsRegistered) {
        registerTSTranspiler();
    }
    const projectConfig = workspace.projects[plugin];
    return { path: path.join(root, projectConfig.root), projectConfig };
}
function findNxProjectForImportPath(importPath, workspace, root = app_root_1.workspaceRoot) {
    var _a;
    const tsConfigPaths = readTsConfigPaths(root);
    const possiblePaths = (_a = tsConfigPaths[importPath]) === null || _a === void 0 ? void 0 : _a.map((p) => path.resolve(root, p));
    if (possiblePaths === null || possiblePaths === void 0 ? void 0 : possiblePaths.length) {
        const projectRootMappings = buildProjectRootMap(workspace.projects, root);
        for (const tsConfigPath of possiblePaths) {
            const nxProject = (0, target_project_locator_1.findMatchingProjectForPath)(tsConfigPath, projectRootMappings);
            if (nxProject) {
                return nxProject;
            }
        }
        if (process.env.NX_VERBOSE_LOGGING) {
            console.log('Unable to find local plugin', possiblePaths, projectRootMappings);
        }
        throw new Error('Unable to resolve local plugin with import path ' + importPath);
    }
}
function buildProjectRootMap(projects, root) {
    return Object.entries(projects).reduce((m, [project, config]) => {
        m.set(path.resolve(root, config.root), project);
        return m;
    }, new Map());
}
let tsconfigPaths;
function readTsConfigPaths(root = app_root_1.workspaceRoot) {
    if (!tsconfigPaths) {
        const tsconfigPath = ['tsconfig.base.json', 'tsconfig.json']
            .map((x) => path.join(root, x))
            .filter((x) => (0, fs_1.existsSync)(x))[0];
        if (!tsconfigPath) {
            throw new Error('unable to find tsconfig.base.json or tsconfig.json');
        }
        const { compilerOptions } = (0, fileutils_1.readJsonFile)(tsconfigPath);
        tsconfigPaths = compilerOptions === null || compilerOptions === void 0 ? void 0 : compilerOptions.paths;
    }
    return tsconfigPaths !== null && tsconfigPaths !== void 0 ? tsconfigPaths : {};
}
function readPluginMainFromProjectConfiguration(plugin) {
    var _a, _b, _c;
    const { main } = ((_a = Object.values(plugin.targets).find((x) => ['@nrwl/js:tsc', '@nrwl/js:swc', '@nrwl/node:package'].includes(x.executor))) === null || _a === void 0 ? void 0 : _a.options) ||
        ((_c = (_b = plugin.targets) === null || _b === void 0 ? void 0 : _b.build) === null || _c === void 0 ? void 0 : _c.options) ||
        {};
    return main;
}
//# sourceMappingURL=nx-plugin.js.map
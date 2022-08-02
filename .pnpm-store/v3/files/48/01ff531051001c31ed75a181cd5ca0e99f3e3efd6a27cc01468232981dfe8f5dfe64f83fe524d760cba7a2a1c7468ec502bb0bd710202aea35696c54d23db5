"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renamePropertyWithStableKeys = exports.buildWorkspaceConfigurationFromGlobs = exports.inferProjectFromNonStandardFile = exports.deduplicateProjectFiles = exports.globForProjectFiles = exports.toProjectName = exports.resolveNewFormatWithInlineProjects = exports.resolveOldFormatWithInlineProjects = exports.toOldFormatOrNull = exports.toNewFormatOrNull = exports.toNewFormat = exports.reformattedWorkspaceJsonOrNull = exports.Workspaces = exports.workspaceConfigName = void 0;
const tslib_1 = require("tslib");
const fast_glob_1 = require("fast-glob");
const fs_1 = require("fs");
const ignore_1 = require("ignore");
const path = require("path");
const path_1 = require("path");
const perf_hooks_1 = require("perf_hooks");
const app_root_1 = require("../utils/app-root");
const fileutils_1 = require("../utils/fileutils");
const logger_1 = require("../utils/logger");
const nx_plugin_1 = require("../utils/nx-plugin");
const object_sort_1 = require("nx/src/utils/object-sort");
function workspaceConfigName(root) {
    if ((0, fs_1.existsSync)(path.join(root, 'angular.json'))) {
        return 'angular.json';
    }
    else if ((0, fs_1.existsSync)(path.join(root, 'workspace.json'))) {
        return 'workspace.json';
    }
    else {
        return null;
    }
}
exports.workspaceConfigName = workspaceConfigName;
class Workspaces {
    constructor(root) {
        this.root = root;
    }
    relativeCwd(cwd) {
        return path.relative(this.root, cwd).replace(/\\/g, '/') || null;
    }
    calculateDefaultProjectName(cwd, wc) {
        const relativeCwd = this.relativeCwd(cwd);
        if (relativeCwd) {
            const matchingProject = Object.keys(wc.projects).find((p) => {
                const projectRoot = wc.projects[p].root;
                return (relativeCwd == projectRoot ||
                    relativeCwd.startsWith(`${projectRoot}/`));
            });
            if (matchingProject)
                return matchingProject;
        }
        return wc.defaultProject;
    }
    readWorkspaceConfiguration(opts) {
        if (this.cachedWorkspaceConfig)
            return this.cachedWorkspaceConfig;
        const nxJsonPath = path.join(this.root, 'nx.json');
        const nxJson = readNxJson(nxJsonPath);
        const workspaceFile = workspaceConfigName(this.root);
        const workspacePath = workspaceFile
            ? path.join(this.root, workspaceFile)
            : null;
        const workspace = workspacePath && (0, fs_1.existsSync)(workspacePath)
            ? this.readFromWorkspaceJson()
            : buildWorkspaceConfigurationFromGlobs(nxJson, globForProjectFiles(this.root, nxJson, opts === null || opts === void 0 ? void 0 : opts._ignorePluginInference), (path) => (0, fileutils_1.readJsonFile)((0, path_1.join)(this.root, path)));
        assertValidWorkspaceConfiguration(nxJson);
        this.cachedWorkspaceConfig = Object.assign(Object.assign({}, workspace), nxJson);
        return this.cachedWorkspaceConfig;
    }
    isNxExecutor(nodeModule, executor) {
        const schema = this.readExecutor(nodeModule, executor).schema;
        return schema['cli'] === 'nx';
    }
    isNxGenerator(collectionName, generatorName) {
        const schema = this.readGenerator(collectionName, generatorName).schema;
        return schema['cli'] === 'nx';
    }
    readExecutor(nodeModule, executor) {
        try {
            const { executorsFilePath, executorConfig } = this.readExecutorsJson(nodeModule, executor);
            const executorsDir = path.dirname(executorsFilePath);
            const schemaPath = path.join(executorsDir, executorConfig.schema || '');
            const schema = (0, fileutils_1.readJsonFile)(schemaPath);
            if (!schema.properties || typeof schema.properties !== 'object') {
                schema.properties = {};
            }
            const implementationFactory = this.getImplementationFactory(executorConfig.implementation, executorsDir);
            const batchImplementationFactory = executorConfig.batchImplementation
                ? this.getImplementationFactory(executorConfig.batchImplementation, executorsDir)
                : null;
            const hasherFactory = executorConfig.hasher
                ? this.getImplementationFactory(executorConfig.hasher, executorsDir)
                : null;
            return {
                schema,
                implementationFactory,
                batchImplementationFactory,
                hasherFactory,
            };
        }
        catch (e) {
            throw new Error(`Unable to resolve ${nodeModule}:${executor}.\n${e.message}`);
        }
    }
    readGenerator(collectionName, generatorName) {
        var _a, _b;
        try {
            const { generatorsFilePath, generatorsJson, normalizedGeneratorName } = this.readGeneratorsJson(collectionName, generatorName);
            const generatorsDir = path.dirname(generatorsFilePath);
            const generatorConfig = ((_a = generatorsJson.generators) === null || _a === void 0 ? void 0 : _a[normalizedGeneratorName]) ||
                ((_b = generatorsJson.schematics) === null || _b === void 0 ? void 0 : _b[normalizedGeneratorName]);
            const schemaPath = path.join(generatorsDir, generatorConfig.schema || '');
            const schema = (0, fileutils_1.readJsonFile)(schemaPath);
            if (!schema.properties || typeof schema.properties !== 'object') {
                schema.properties = {};
            }
            generatorConfig.implementation =
                generatorConfig.implementation || generatorConfig.factory;
            const implementationFactory = this.getImplementationFactory(generatorConfig.implementation, generatorsDir);
            return {
                normalizedGeneratorName,
                schema,
                implementationFactory,
                aliases: generatorConfig.aliases || [],
            };
        }
        catch (e) {
            throw new Error(`Unable to resolve ${collectionName}:${generatorName}.\n${e.message}`);
        }
    }
    getImplementationFactory(implementation, directory) {
        const [implementationModulePath, implementationExportName] = implementation.split('#');
        return () => {
            var _a;
            const module = require(path.join(directory, implementationModulePath));
            return implementationExportName
                ? module[implementationExportName]
                : (_a = module.default) !== null && _a !== void 0 ? _a : module;
        };
    }
    readExecutorsJson(nodeModule, executor) {
        var _a, _b, _c;
        const { json: packageJson, path: packageJsonPath } = (0, nx_plugin_1.readPluginPackageJson)(nodeModule, this.resolvePaths());
        const executorsFile = (_a = packageJson.executors) !== null && _a !== void 0 ? _a : packageJson.builders;
        if (!executorsFile) {
            throw new Error(`The "${nodeModule}" package does not support Nx executors.`);
        }
        const executorsFilePath = require.resolve(path.join(path.dirname(packageJsonPath), executorsFile));
        const executorsJson = (0, fileutils_1.readJsonFile)(executorsFilePath);
        const executorConfig = ((_b = executorsJson.executors) === null || _b === void 0 ? void 0 : _b[executor]) || ((_c = executorsJson.builders) === null || _c === void 0 ? void 0 : _c[executor]);
        if (!executorConfig) {
            throw new Error(`Cannot find executor '${executor}' in ${executorsFilePath}.`);
        }
        return { executorsFilePath, executorConfig };
    }
    readGeneratorsJson(collectionName, generator) {
        var _a;
        let generatorsFilePath;
        if (collectionName.endsWith('.json')) {
            generatorsFilePath = require.resolve(collectionName, {
                paths: this.resolvePaths(),
            });
        }
        else {
            const { json: packageJson, path: packageJsonPath } = (0, nx_plugin_1.readPluginPackageJson)(collectionName, this.resolvePaths());
            const generatorsFile = (_a = packageJson.generators) !== null && _a !== void 0 ? _a : packageJson.schematics;
            if (!generatorsFile) {
                throw new Error(`The "${collectionName}" package does not support Nx generators.`);
            }
            generatorsFilePath = require.resolve(path.join(path.dirname(packageJsonPath), generatorsFile));
        }
        const generatorsJson = (0, fileutils_1.readJsonFile)(generatorsFilePath);
        let normalizedGeneratorName = findFullGeneratorName(generator, generatorsJson.generators) ||
            findFullGeneratorName(generator, generatorsJson.schematics);
        if (!normalizedGeneratorName) {
            for (let parent of generatorsJson.extends || []) {
                try {
                    return this.readGeneratorsJson(parent, generator);
                }
                catch (e) { }
            }
            throw new Error(`Cannot find generator '${generator}' in ${generatorsFilePath}.`);
        }
        return { generatorsFilePath, generatorsJson, normalizedGeneratorName };
    }
    resolvePaths() {
        return this.root ? [this.root, __dirname] : [__dirname];
    }
    readFromWorkspaceJson() {
        const rawWorkspace = (0, fileutils_1.readJsonFile)(path.join(this.root, workspaceConfigName(this.root)));
        return resolveNewFormatWithInlineProjects(rawWorkspace, this.root);
    }
}
exports.Workspaces = Workspaces;
function assertValidWorkspaceConfiguration(nxJson) {
    // Assert valid workspace configuration
    if (nxJson.projects) {
        logger_1.logger.warn('NX As of Nx 13, project configuration should be moved from nx.json to workspace.json/project.json. Please run "nx format" to fix this.');
    }
}
function findFullGeneratorName(name, generators) {
    if (generators) {
        for (let [key, data] of Object.entries(generators)) {
            if (key === name ||
                (data.aliases && data.aliases.includes(name))) {
                return key;
            }
        }
    }
}
function reformattedWorkspaceJsonOrNull(w) {
    const workspaceJson = w.version === 2 ? toNewFormatOrNull(w) : toOldFormatOrNull(w);
    if (workspaceJson === null || workspaceJson === void 0 ? void 0 : workspaceJson.projects) {
        workspaceJson.projects = (0, object_sort_1.sortObjectByKeys)(workspaceJson.projects);
    }
    return workspaceJson;
}
exports.reformattedWorkspaceJsonOrNull = reformattedWorkspaceJsonOrNull;
function toNewFormat(w) {
    const f = toNewFormatOrNull(w);
    return f !== null && f !== void 0 ? f : w;
}
exports.toNewFormat = toNewFormat;
function toNewFormatOrNull(w) {
    let formatted = false;
    Object.values(w.projects || {}).forEach((projectConfig) => {
        if (projectConfig.architect) {
            renamePropertyWithStableKeys(projectConfig, 'architect', 'targets');
            formatted = true;
        }
        if (projectConfig.schematics) {
            renamePropertyWithStableKeys(projectConfig, 'schematics', 'generators');
            formatted = true;
        }
        Object.values(projectConfig.targets || {}).forEach((target) => {
            if (target.builder !== undefined) {
                renamePropertyWithStableKeys(target, 'builder', 'executor');
                formatted = true;
            }
        });
    });
    if (w.schematics) {
        renamePropertyWithStableKeys(w, 'schematics', 'generators');
        formatted = true;
    }
    if (w.version !== 2) {
        w.version = 2;
        formatted = true;
    }
    return formatted ? w : null;
}
exports.toNewFormatOrNull = toNewFormatOrNull;
function toOldFormatOrNull(w) {
    let formatted = false;
    Object.values(w.projects || {}).forEach((projectConfig) => {
        if (typeof projectConfig === 'string') {
            throw new Error("'project.json' files are incompatible with version 1 workspace schemas.");
        }
        if (projectConfig.targets) {
            renamePropertyWithStableKeys(projectConfig, 'targets', 'architect');
            formatted = true;
        }
        if (projectConfig.generators) {
            renamePropertyWithStableKeys(projectConfig, 'generators', 'schematics');
            formatted = true;
        }
        Object.values(projectConfig.architect || {}).forEach((target) => {
            if (target.executor !== undefined) {
                renamePropertyWithStableKeys(target, 'executor', 'builder');
                formatted = true;
            }
        });
    });
    if (w.generators) {
        renamePropertyWithStableKeys(w, 'generators', 'schematics');
        formatted = true;
    }
    if (w.version !== 1) {
        w.version = 1;
        formatted = true;
    }
    return formatted ? w : null;
}
exports.toOldFormatOrNull = toOldFormatOrNull;
function resolveOldFormatWithInlineProjects(w, root = app_root_1.workspaceRoot) {
    const inlined = inlineProjectConfigurations(w, root);
    const formatted = toOldFormatOrNull(inlined);
    return formatted ? formatted : inlined;
}
exports.resolveOldFormatWithInlineProjects = resolveOldFormatWithInlineProjects;
function resolveNewFormatWithInlineProjects(w, root = app_root_1.workspaceRoot) {
    return toNewFormat(inlineProjectConfigurations(w, root));
}
exports.resolveNewFormatWithInlineProjects = resolveNewFormatWithInlineProjects;
function inlineProjectConfigurations(w, root = app_root_1.workspaceRoot) {
    Object.entries(w.projects || {}).forEach(([project, config]) => {
        if (typeof config === 'string') {
            const configFilePath = path.join(root, config, 'project.json');
            const fileConfig = (0, fileutils_1.readJsonFile)(configFilePath);
            w.projects[project] = Object.assign({ root: config }, fileConfig);
        }
    });
    return w;
}
/**
 * Reads an nx.json file from a given path or extends a local nx.json config.
 */
function readNxJson(nxJson) {
    let nxJsonConfig;
    if ((0, fs_1.existsSync)(nxJson)) {
        nxJsonConfig = (0, fileutils_1.readJsonFile)(nxJson);
    }
    else {
        nxJsonConfig = {};
    }
    if (nxJsonConfig.extends) {
        const extendedNxJsonPath = require.resolve(nxJsonConfig.extends, {
            paths: [(0, path_1.dirname)(nxJson)],
        });
        const baseNxJson = (0, fileutils_1.readJsonFile)(extendedNxJsonPath);
        nxJsonConfig = Object.assign(Object.assign({}, baseNxJson), nxJsonConfig);
    }
    return nxJsonConfig;
}
/**
 * Pulled from toFileName in names from @nrwl/devkit.
 * Todo: Should refactor, not duplicate.
 */
function toProjectName(fileName, nxJson) {
    const directory = (0, path_1.dirname)(fileName);
    let { appsDir, libsDir } = (nxJson === null || nxJson === void 0 ? void 0 : nxJson.workspaceLayout) || {};
    appsDir !== null && appsDir !== void 0 ? appsDir : (appsDir = 'apps');
    libsDir !== null && libsDir !== void 0 ? libsDir : (libsDir = 'libs');
    const parts = directory.split(/[\/\\]/g);
    if ([appsDir, libsDir].includes(parts[0])) {
        parts.splice(0, 1);
    }
    return parts.join('-').toLowerCase();
}
exports.toProjectName = toProjectName;
let projectGlobCache;
let projectGlobCacheKey;
function getGlobPatternsFromPlugins(nxJson) {
    const plugins = (0, nx_plugin_1.loadNxPlugins)(nxJson === null || nxJson === void 0 ? void 0 : nxJson.plugins);
    const patterns = [];
    for (const plugin of plugins) {
        if (!plugin.projectFilePatterns) {
            continue;
        }
        for (const filePattern of plugin.projectFilePatterns) {
            patterns.push('**/' + filePattern);
        }
    }
    return patterns;
}
/**
 * Get the package.json globs from package manager workspaces
 */
function getGlobPatternsFromPackageManagerWorkspaces(root) {
    var _a;
    // TODO: add support for pnpm
    try {
        const { workspaces } = (0, fileutils_1.readJsonFile)((0, path_1.join)(root, 'package.json'));
        const packages = Array.isArray(workspaces)
            ? workspaces
            : workspaces === null || workspaces === void 0 ? void 0 : workspaces.packages;
        return ((_a = packages === null || packages === void 0 ? void 0 : packages.map((pattern) => pattern + '/package.json')) !== null && _a !== void 0 ? _a : [
            '**/package.json',
        ]);
    }
    catch (_b) {
        return ['**/package.json'];
    }
}
function globForProjectFiles(root, nxJson, ignorePluginInference = false) {
    // Deal w/ Caching
    const cacheKey = [root, ...((nxJson === null || nxJson === void 0 ? void 0 : nxJson.plugins) || [])].join(',');
    if (process.env.NX_PROJECT_GLOB_CACHE !== 'false' &&
        projectGlobCache &&
        cacheKey === projectGlobCacheKey)
        return projectGlobCache;
    projectGlobCacheKey = cacheKey;
    const projectGlobPatterns = [
        'project.json',
        '**/project.json',
        ...getGlobPatternsFromPackageManagerWorkspaces(root),
    ];
    if (!ignorePluginInference) {
        projectGlobPatterns.push(...getGlobPatternsFromPlugins(nxJson));
    }
    const combinedProjectGlobPattern = '{' + projectGlobPatterns.join(',') + '}';
    perf_hooks_1.performance.mark('start-glob-for-projects');
    /**
     * This configures the files and directories which we always want to ignore as part of file watching
     * and which we know the location of statically (meaning irrespective of user configuration files).
     * This has the advantage of being ignored directly within globSync
     *
     * Other ignored entries will need to be determined dynamically by reading and evaluating the user's
     * .gitignore and .nxignore files below.
     */
    const ALWAYS_IGNORE = [
        (0, path_1.join)(root, 'node_modules'),
        '**/node_modules',
        (0, path_1.join)(root, 'dist'),
        (0, path_1.join)(root, '.git'),
    ];
    /**
     * TODO: This utility has been implemented multiple times across the Nx codebase,
     * discuss whether it should be moved to a shared location.
     */
    const ig = (0, ignore_1.default)();
    try {
        ig.add((0, fs_1.readFileSync)(`${root}/.gitignore`, 'utf-8'));
    }
    catch (_a) { }
    try {
        ig.add((0, fs_1.readFileSync)(`${root}/.nxignore`, 'utf-8'));
    }
    catch (_b) { }
    const globResults = (0, fast_glob_1.sync)(combinedProjectGlobPattern, {
        ignore: ALWAYS_IGNORE,
        absolute: false,
        cwd: root,
    });
    projectGlobCache = deduplicateProjectFiles(globResults, ig);
    perf_hooks_1.performance.mark('finish-glob-for-projects');
    perf_hooks_1.performance.measure('glob-for-project-files', 'start-glob-for-projects', 'finish-glob-for-projects');
    return projectGlobCache;
}
exports.globForProjectFiles = globForProjectFiles;
function deduplicateProjectFiles(files, ig) {
    const filtered = new Map();
    files.forEach((file) => {
        const projectFolder = (0, path_1.dirname)(file);
        const projectFile = (0, path_1.basename)(file);
        if ((ig === null || ig === void 0 ? void 0 : ig.ignores(file)) || // file is in .gitignore or .nxignore
            file === 'package.json' || // file is workspace root package json
            // project.json or equivallent inferred project file has been found
            (filtered.has(projectFolder) && projectFile !== 'project.json')) {
            return;
        }
        filtered.set(projectFolder, projectFile);
    });
    return Array.from(filtered.entries()).map(([folder, file]) => (0, path_1.join)(folder, file));
}
exports.deduplicateProjectFiles = deduplicateProjectFiles;
function buildProjectConfigurationFromPackageJson(path, packageJson, nxJson) {
    var _a, _b, _c, _d;
    const directory = (0, path_1.dirname)(path).split('\\').join('/');
    let name = (_a = packageJson.name) !== null && _a !== void 0 ? _a : toProjectName(directory, nxJson);
    if (nxJson.npmScope) {
        const npmPrefix = `@${nxJson.npmScope}/`;
        if (name.startsWith(npmPrefix)) {
            name = name.replace(npmPrefix, '');
        }
    }
    return {
        root: directory,
        sourceRoot: directory,
        name,
        projectType: ((_b = nxJson.workspaceLayout) === null || _b === void 0 ? void 0 : _b.appsDir) != ((_c = nxJson.workspaceLayout) === null || _c === void 0 ? void 0 : _c.libsDir) &&
            ((_d = nxJson.workspaceLayout) === null || _d === void 0 ? void 0 : _d.appsDir) &&
            directory.startsWith(nxJson.workspaceLayout.appsDir)
            ? 'application'
            : 'library',
    };
}
function inferProjectFromNonStandardFile(file, nxJson) {
    const directory = (0, path_1.dirname)(file).split('\\').join('/');
    return {
        name: toProjectName(file, nxJson),
        root: directory,
    };
}
exports.inferProjectFromNonStandardFile = inferProjectFromNonStandardFile;
function buildWorkspaceConfigurationFromGlobs(nxJson, projectFiles, // making this parameter allows devkit to pick up newly created projects
readJson = fileutils_1.readJsonFile // making this an arg allows us to reuse in devkit
) {
    const projects = {};
    for (const file of projectFiles) {
        const directory = (0, path_1.dirname)(file).split('\\').join('/');
        const fileName = (0, path_1.basename)(file);
        if (fileName === 'project.json') {
            //  Nx specific project configuration (`project.json` files) in the same
            // directory as a package.json should overwrite the inferred package.json
            // project configuration.
            const configuration = readJson(file);
            configuration.root = directory;
            let name = configuration.name;
            if (!configuration.name) {
                name = toProjectName(file, nxJson);
            }
            if (!projects[name]) {
                projects[name] = configuration;
            }
            else {
                logger_1.logger.warn(`Skipping project found at ${directory} since project ${name} already exists at ${projects[name].root}! Specify a unique name for the project to allow Nx to differentiate between the two projects.`);
            }
        }
        else {
            // We can infer projects from package.json files,
            // if a package.json file is in a directory w/o a `project.json` file.
            // this results in targets being inferred by Nx from package scripts,
            // and the root / sourceRoot both being the directory.
            if (fileName === 'package.json') {
                const _a = buildProjectConfigurationFromPackageJson(file, readJson(file), nxJson), { name } = _a, config = tslib_1.__rest(_a, ["name"]);
                if (!projects[name]) {
                    projects[name] = config;
                }
                else {
                    logger_1.logger.warn(`Skipping project found at ${directory} since project ${name} already exists at ${projects[name].root}! Specify a unique name for the project to allow Nx to differentiate between the two projects.`);
                }
            }
            else {
                // This project was created from an nx plugin.
                // The only thing we know about the file is its location
                const _b = inferProjectFromNonStandardFile(file, nxJson), { name } = _b, config = tslib_1.__rest(_b, ["name"]);
                if (!projects[name]) {
                    projects[name] = config;
                }
                else {
                    logger_1.logger.error(`Skipping project inferred from ${file} since project ${name} already exists.`);
                    throw new Error();
                }
            }
        }
    }
    return {
        version: 2,
        projects: projects,
    };
}
exports.buildWorkspaceConfigurationFromGlobs = buildWorkspaceConfigurationFromGlobs;
// we have to do it this way to preserve the order of properties
// not to screw up the formatting
function renamePropertyWithStableKeys(obj, from, to) {
    const copy = Object.assign({}, obj);
    Object.keys(obj).forEach((k) => {
        delete obj[k];
    });
    Object.keys(copy).forEach((k) => {
        if (k === from) {
            obj[to] = copy[k];
        }
        else {
            obj[k] = copy[k];
        }
    });
}
exports.renamePropertyWithStableKeys = renamePropertyWithStableKeys;
//# sourceMappingURL=workspaces.js.map
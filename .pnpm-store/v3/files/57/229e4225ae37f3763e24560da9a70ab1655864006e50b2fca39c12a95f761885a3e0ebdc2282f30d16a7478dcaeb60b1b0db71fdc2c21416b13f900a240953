"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hasher = void 0;
const tslib_1 = require("tslib");
const workspaces_1 = require("../config/workspaces");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const minimatch = require("minimatch");
const path_1 = require("path");
const perf_hooks_1 = require("perf_hooks");
const typescript_1 = require("../utils/typescript");
const app_root_1 = require("../utils/app-root");
const file_utils_1 = require("../project-graph/file-utils");
const hashing_impl_1 = require("./hashing-impl");
const fileutils_1 = require("../utils/fileutils");
/**
 * The default hasher used by executors.
 */
class Hasher {
    constructor(projectGraph, nxJson, options, hashing = undefined) {
        var _a;
        this.projectGraph = projectGraph;
        this.nxJson = nxJson;
        this.options = options;
        if (!hashing) {
            this.hashing = hashing_impl_1.defaultHashing;
        }
        else {
            // this is only used for testing
            this.hashing = hashing;
        }
        this.projectHashes = new ProjectHasher(this.projectGraph, this.hashing, {
            selectivelyHashTsConfig: (_a = this.options.selectivelyHashTsConfig) !== null && _a !== void 0 ? _a : false,
        });
    }
    hashTaskWithDepsAndContext(task, filter = 'all-files') {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const command = this.hashCommand(task);
            const values = (yield Promise.all([
                this.projectHashes.hashProject(task.target.project, [task.target.project], filter),
                this.implicitDepsHash(),
                this.runtimeInputsHash(),
            ]));
            const value = this.hashing.hashArray([
                Hasher.version,
                command,
                ...values.map((v) => v.value),
            ]);
            return {
                value,
                details: {
                    command,
                    nodes: values[0].nodes,
                    implicitDeps: values[1].files,
                    runtime: values[2].runtime,
                },
            };
        });
    }
    hashCommand(task) {
        var _a, _b, _c;
        return this.hashing.hashArray([
            (_a = task.target.project) !== null && _a !== void 0 ? _a : '',
            (_b = task.target.target) !== null && _b !== void 0 ? _b : '',
            (_c = task.target.configuration) !== null && _c !== void 0 ? _c : '',
            JSON.stringify(task.overrides),
        ]);
    }
    hashContext() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const values = (yield Promise.all([
                this.implicitDepsHash(),
                this.runtimeInputsHash(),
            ]));
            return {
                implicitDeps: values[0],
                runtime: values[1],
            };
        });
    }
    hashSource(task) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.projectHashes.hashProjectNodeSource(task.target.project, 'all-files');
        });
    }
    hashArray(values) {
        return this.hashing.hashArray(values);
    }
    hashFile(path) {
        return this.hashing.hashFile(path);
    }
    runtimeInputsHash() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.runtimeInputs)
                return this.runtimeInputs;
            perf_hooks_1.performance.mark('hasher:runtime inputs hash:start');
            this.runtimeInputs = new Promise((res, rej) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                const inputs = this.options && this.options.runtimeCacheInputs
                    ? this.options.runtimeCacheInputs
                    : [];
                if (inputs.length > 0) {
                    try {
                        const values = (yield Promise.all(inputs.map((input) => new Promise((res, rej) => {
                            (0, child_process_1.exec)(input, (err, stdout, stderr) => {
                                if (err) {
                                    rej(err);
                                }
                                else {
                                    res({ input, value: `${stdout}${stderr}`.trim() });
                                }
                            });
                        }))));
                        const value = this.hashing.hashArray(values.map((v) => v.value));
                        const runtime = values.reduce((m, c) => ((m[c.input] = c.value), m), {});
                        perf_hooks_1.performance.mark('hasher:runtime inputs hash:end');
                        perf_hooks_1.performance.measure('hasher:runtime inputs hash', 'hasher:runtime inputs hash:start', 'hasher:runtime inputs hash:end');
                        res({ value, runtime });
                    }
                    catch (e) {
                        rej(new Error(`Nx failed to execute runtimeCacheInputs defined in nx.json failed:\n${e.message}`));
                    }
                }
                else {
                    res({ value: '', runtime: {} });
                }
            }));
            return this.runtimeInputs;
        });
    }
    implicitDepsHash() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.implicitDependencies)
                return this.implicitDependencies;
            perf_hooks_1.performance.mark('hasher:implicit deps hash:start');
            this.implicitDependencies = new Promise((res) => {
                var _a, _b;
                const implicitDeps = Object.keys((_a = this.nxJson.implicitDependencies) !== null && _a !== void 0 ? _a : {});
                const filesWithoutPatterns = implicitDeps.filter((p) => p.indexOf('*') === -1);
                const patterns = implicitDeps.filter((p) => p.indexOf('*') !== -1);
                const implicitDepsFromPatterns = patterns.length > 0
                    ? ((_b = this.projectGraph.allWorkspaceFiles) !== null && _b !== void 0 ? _b : [])
                        .filter((f) => !!patterns.find((pattern) => minimatch(f.file, pattern)))
                        .map((f) => f.file)
                    : [];
                const fileNames = [
                    ...filesWithoutPatterns,
                    ...implicitDepsFromPatterns,
                    //TODO: vsavkin move the special cases into explicit ts support
                    'package-lock.json',
                    'yarn.lock',
                    'pnpm-lock.yaml',
                    // ignore files will change the set of inputs to the hasher
                    '.gitignore',
                    '.nxignore',
                ];
                const fileHashes = [
                    ...fileNames
                        .map((maybeRelativePath) => {
                        // Normalize the path to always be absolute and starting with workspaceRoot so we can check it exists
                        if (!maybeRelativePath.startsWith(app_root_1.workspaceRoot)) {
                            return (0, path_1.join)(app_root_1.workspaceRoot, maybeRelativePath);
                        }
                        return maybeRelativePath;
                    })
                        .filter((file) => (0, fs_1.existsSync)(file))
                        .map((file) => {
                        // we should use default file hasher here
                        const hash = this.hashing.hashFile(file);
                        return { file, hash };
                    }),
                    ...this.hashNxJson(),
                ];
                const combinedHash = this.hashing.hashArray(fileHashes.map((v) => v.hash));
                perf_hooks_1.performance.mark('hasher:implicit deps hash:end');
                perf_hooks_1.performance.measure('hasher:implicit deps hash', 'hasher:implicit deps hash:start', 'hasher:implicit deps hash:end');
                res({
                    value: combinedHash,
                    files: fileHashes.reduce((m, c) => ((m[c.file] = c.hash), m), {}),
                });
            });
            return this.implicitDependencies;
        });
    }
    hashNxJson() {
        const nxJsonPath = (0, path_1.join)(app_root_1.workspaceRoot, 'nx.json');
        if (!(0, fs_1.existsSync)(nxJsonPath)) {
            return [];
        }
        let nxJsonContents = '{}';
        try {
            const nxJson = (0, fileutils_1.readJsonFile)(nxJsonPath);
            delete nxJson.projects;
            nxJsonContents = JSON.stringify(nxJson);
        }
        catch (_a) { }
        return [
            {
                hash: this.hashing.hashArray([nxJsonContents]),
                file: 'nx.json',
            },
        ];
    }
}
exports.Hasher = Hasher;
Hasher.version = '2.0';
class ProjectHasher {
    constructor(projectGraph, hashing, options) {
        this.projectGraph = projectGraph;
        this.hashing = hashing;
        this.options = options;
        this.sourceHashes = {};
        this.workspaceJson = this.readWorkspaceConfigFile((0, file_utils_1.workspaceFileName)());
        this.nxJson = this.readNxJsonConfigFile('nx.json');
        this.tsConfigJson = this.readTsConfig();
    }
    hashProject(projectName, visited, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return Promise.resolve().then(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                var _a;
                const deps = (_a = this.projectGraph.dependencies[projectName]) !== null && _a !== void 0 ? _a : [];
                const depHashes = (yield Promise.all(deps.map((d) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    if (visited.indexOf(d.target) > -1) {
                        return null;
                    }
                    else {
                        visited.push(d.target);
                        return yield this.hashProject(d.target, visited, filter);
                    }
                })))).filter((r) => !!r);
                const filterForProject = filter === 'all-files'
                    ? 'all-files'
                    : filter === 'exclude-tests-of-deps' && visited[0] === projectName
                        ? 'all-files'
                        : 'exclude-tests';
                const projectHash = yield this.hashProjectNodeSource(projectName, filterForProject);
                const nodes = depHashes.reduce((m, c) => {
                    return Object.assign(Object.assign({}, m), c.nodes);
                }, { [projectName]: projectHash });
                const value = this.hashing.hashArray([
                    ...depHashes.map((d) => d.value),
                    projectHash,
                ]);
                return { value, nodes };
            }));
        });
    }
    hashProjectNodeSource(projectName, filter) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            const mapKey = `${projectName}-${filter}`;
            if (!this.sourceHashes[mapKey]) {
                this.sourceHashes[mapKey] = new Promise((res) => tslib_1.__awaiter(this, void 0, void 0, function* () {
                    var _a, _b;
                    const p = this.projectGraph.nodes[projectName];
                    if (!p) {
                        const n = this.projectGraph.externalNodes[projectName];
                        const version = (_a = n === null || n === void 0 ? void 0 : n.data) === null || _a === void 0 ? void 0 : _a.version;
                        let hash;
                        if (version) {
                            hash = this.hashing.hashArray([version]);
                        }
                        else {
                            // unknown dependency
                            // this may occur if a file has a dependency to a npm package
                            // which is not directly registestered in package.json
                            // but only indirectly through dependencies of registered
                            // npm packages
                            // when it is at a later stage registered in package.json
                            // the cache project graph will not know this module but
                            // the new project graph will know it
                            // The actual checksum added here is of no importance as
                            // the version is unknown and may only change when some
                            // other change occurs in package.json and/or package-lock.json
                            hash = `__${projectName}__`;
                        }
                        res(hash);
                        return;
                    }
                    const filteredFiles = filter === 'all-files'
                        ? p.data.files
                        : p.data.files.filter((f) => !this.isSpec(f.file));
                    const fileNames = filteredFiles.map((f) => f.file);
                    const values = filteredFiles.map((f) => f.hash);
                    const workspaceJson = JSON.stringify((_b = this.workspaceJson.projects[projectName]) !== null && _b !== void 0 ? _b : '');
                    let tsConfig;
                    if (this.options.selectivelyHashTsConfig) {
                        tsConfig = this.removeOtherProjectsPathRecords(projectName);
                    }
                    else {
                        tsConfig = JSON.stringify(this.tsConfigJson);
                    }
                    res(this.hashing.hashArray([
                        ...fileNames,
                        ...values,
                        workspaceJson,
                        tsConfig,
                    ]));
                }));
            }
            return this.sourceHashes[mapKey];
        });
    }
    isSpec(file) {
        return (file.endsWith('.spec.tsx') ||
            file.endsWith('.test.tsx') ||
            file.endsWith('-test.tsx') ||
            file.endsWith('-spec.tsx') ||
            file.endsWith('.spec.ts') ||
            file.endsWith('.test.ts') ||
            file.endsWith('-test.ts') ||
            file.endsWith('-spec.ts') ||
            file.endsWith('.spec.js') ||
            file.endsWith('.test.js') ||
            file.endsWith('-test.js') ||
            file.endsWith('-spec.js'));
    }
    removeOtherProjectsPathRecords(projectName) {
        var _a;
        const _b = this.tsConfigJson.compilerOptions, { paths } = _b, compilerOptions = tslib_1.__rest(_b, ["paths"]);
        const rootPath = this.workspaceJson.projects[projectName].root.split('/');
        rootPath.shift();
        const pathAlias = `@${this.nxJson.npmScope}/${rootPath.join('/')}`;
        return JSON.stringify({
            compilerOptions: Object.assign(Object.assign({}, compilerOptions), { paths: {
                    [pathAlias]: (_a = paths[pathAlias]) !== null && _a !== void 0 ? _a : [],
                } }),
        });
    }
    readTsConfig() {
        var _a;
        var _b;
        try {
            const res = (0, fileutils_1.readJsonFile)((0, typescript_1.getRootTsConfigFileName)());
            (_a = (_b = res.compilerOptions).paths) !== null && _a !== void 0 ? _a : (_b.paths = {});
            return res;
        }
        catch (_c) {
            return {
                compilerOptions: { paths: {} },
            };
        }
    }
    readWorkspaceConfigFile(path) {
        var _a;
        try {
            const res = (0, fileutils_1.readJsonFile)(path);
            (_a = res.projects) !== null && _a !== void 0 ? _a : (res.projects = {});
            return (0, workspaces_1.resolveNewFormatWithInlineProjects)(res);
        }
        catch (_b) {
            return { projects: {}, version: 2 };
        }
    }
    readNxJsonConfigFile(path) {
        var _a;
        try {
            const res = (0, fileutils_1.readJsonFile)(path);
            (_a = res.projects) !== null && _a !== void 0 ? _a : (res.projects = {});
            return res;
        }
        catch (_b) {
            return {};
        }
    }
}
//# sourceMappingURL=hasher.js.map
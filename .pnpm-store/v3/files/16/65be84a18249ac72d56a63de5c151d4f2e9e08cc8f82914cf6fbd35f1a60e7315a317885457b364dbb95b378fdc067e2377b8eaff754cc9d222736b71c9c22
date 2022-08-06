"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceLayout = exports.readNxJson = exports.readPackageJson = exports.defaultFileRead = exports.workspaceFileName = exports.readWorkspaceConfig = exports.readWorkspaceJson = exports.TEN_MEGABYTES = exports.calculateFileChanges = exports.readFileIfExisting = exports.isWholeFileChange = exports.WholeFileChange = void 0;
const workspaces_1 = require("../config/workspaces");
const child_process_1 = require("child_process");
const fs_1 = require("fs");
const path_1 = require("path");
const app_root_1 = require("../utils/app-root");
const fileutils_1 = require("../utils/fileutils");
const json_diff_1 = require("../utils/json-diff");
const ignore_1 = require("ignore");
const fileutils_2 = require("../utils/fileutils");
class WholeFileChange {
    constructor() {
        this.type = 'WholeFileChange';
    }
}
exports.WholeFileChange = WholeFileChange;
function isWholeFileChange(change) {
    return change.type === 'WholeFileChange';
}
exports.isWholeFileChange = isWholeFileChange;
function readFileIfExisting(path) {
    return (0, fs_1.existsSync)(path) ? (0, fs_1.readFileSync)(path, 'utf-8') : '';
}
exports.readFileIfExisting = readFileIfExisting;
function getIgnoredGlobs() {
    const ig = (0, ignore_1.default)();
    ig.add(readFileIfExisting(`${app_root_1.workspaceRoot}/.gitignore`));
    ig.add(readFileIfExisting(`${app_root_1.workspaceRoot}/.nxignore`));
    return ig;
}
function calculateFileChanges(files, allWorkspaceFiles, nxArgs, readFileAtRevision = defaultReadFileAtRevision, ignore = getIgnoredGlobs()) {
    files = files.filter((f) => !ignore.ignores(f));
    return files.map((f) => {
        const ext = (0, path_1.extname)(f);
        const file = allWorkspaceFiles.find((fileData) => fileData.file == f);
        const hash = file === null || file === void 0 ? void 0 : file.hash;
        return {
            file: f,
            ext,
            hash,
            getChanges: () => {
                if (!nxArgs) {
                    return [new WholeFileChange()];
                }
                if (nxArgs.files && nxArgs.files.includes(f)) {
                    return [new WholeFileChange()];
                }
                switch (ext) {
                    case '.json':
                        const atBase = readFileAtRevision(f, nxArgs.base);
                        const atHead = readFileAtRevision(f, nxArgs.head);
                        try {
                            return (0, json_diff_1.jsonDiff)(JSON.parse(atBase), JSON.parse(atHead));
                        }
                        catch (e) {
                            return [new WholeFileChange()];
                        }
                    default:
                        return [new WholeFileChange()];
                }
            },
        };
    });
}
exports.calculateFileChanges = calculateFileChanges;
exports.TEN_MEGABYTES = 1024 * 10000;
function defaultReadFileAtRevision(file, revision) {
    try {
        const fileFullPath = `${app_root_1.workspaceRoot}${path_1.sep}${file}`;
        const gitRepositoryPath = (0, child_process_1.execSync)('git rev-parse --show-toplevel')
            .toString()
            .trim();
        const filePathInGitRepository = (0, path_1.relative)(gitRepositoryPath, fileFullPath)
            .split(path_1.sep)
            .join('/');
        return !revision
            ? (0, fs_1.readFileSync)(file, 'utf-8')
            : (0, child_process_1.execSync)(`git show ${revision}:${filePathInGitRepository}`, {
                maxBuffer: exports.TEN_MEGABYTES,
            })
                .toString()
                .trim();
    }
    catch (_a) {
        return '';
    }
}
function readWorkspaceJson() {
    return readWorkspaceConfig({
        format: 'nx',
        path: app_root_1.workspaceRoot,
    });
}
exports.readWorkspaceJson = readWorkspaceJson;
function readWorkspaceConfig(opts) {
    const ws = new workspaces_1.Workspaces(opts.path || process.cwd());
    const json = ws.readWorkspaceConfiguration();
    if (opts.format === 'angularCli') {
        const formatted = (0, workspaces_1.toOldFormatOrNull)(json);
        return formatted !== null && formatted !== void 0 ? formatted : json;
    }
    else {
        return json;
    }
}
exports.readWorkspaceConfig = readWorkspaceConfig;
function workspaceFileName() {
    if ((0, fileutils_1.fileExists)(`${app_root_1.workspaceRoot}/angular.json`)) {
        return 'angular.json';
    }
    else {
        return 'workspace.json';
    }
}
exports.workspaceFileName = workspaceFileName;
function defaultFileRead(filePath) {
    return (0, fs_1.readFileSync)((0, path_1.join)(app_root_1.workspaceRoot, filePath), 'utf-8');
}
exports.defaultFileRead = defaultFileRead;
function readPackageJson() {
    return (0, fileutils_2.readJsonFile)(`${app_root_1.workspaceRoot}/package.json`);
}
exports.readPackageJson = readPackageJson;
/**
 * Returns the contents of nx.json.
 *
 * If nx.json extends another config file, it will be inlined here.
 */
function readNxJson(path = `${app_root_1.workspaceRoot}/nx.json`) {
    let config = (0, fileutils_2.readJsonFile)(path);
    if (config.extends) {
        config = Object.assign(Object.assign({}, resolveNxJsonExtends(config.extends)), config);
    }
    return config;
}
exports.readNxJson = readNxJson;
function resolveNxJsonExtends(extendedNxJsonPath) {
    try {
        return (0, fileutils_2.readJsonFile)(require.resolve(extendedNxJsonPath));
    }
    catch (e) {
        throw new Error(`Unable to resolve nx.json extends. Error: ${e.message}`);
    }
}
/**
 * Returns information about where apps and libs will be created.
 */
function workspaceLayout() {
    var _a, _b, _c, _d;
    const nxJson = readNxJson();
    return {
        appsDir: (_b = (_a = nxJson.workspaceLayout) === null || _a === void 0 ? void 0 : _a.appsDir) !== null && _b !== void 0 ? _b : 'apps',
        libsDir: (_d = (_c = nxJson.workspaceLayout) === null || _c === void 0 ? void 0 : _c.libsDir) !== null && _d !== void 0 ? _d : 'libs',
    };
}
exports.workspaceLayout = workspaceLayout;
//# sourceMappingURL=file-utils.js.map
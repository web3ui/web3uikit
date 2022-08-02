"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MockBuilderContext = exports.createEmptyWorkspace = exports.getFileContent = void 0;
const tslib_1 = require("tslib");
const core_1 = require("@angular-devkit/core/src/workspace/core");
function getFileContent(tree, path) {
    const fileEntry = tree.get(path);
    if (!fileEntry) {
        throw new Error(`The file (${path}) does not exist.`);
    }
    return fileEntry.content.toString();
}
exports.getFileContent = getFileContent;
function createEmptyWorkspace(tree) {
    (0, core_1._test_addWorkspaceFile)('workspace.json', core_1.WorkspaceFormat.JSON);
    tree.create('/workspace.json', JSON.stringify({ version: 1, projects: {}, newProjectRoot: '' }));
    tree.create('/package.json', JSON.stringify({
        name: 'test-name',
        dependencies: {},
        devDependencies: {},
    }));
    tree.create('/nx.json', JSON.stringify({
        npmScope: 'proj',
        projects: {},
        affected: {
            defaultBase: 'main',
        },
        tasksRunnerOptions: {
            default: {
                runner: 'nx/tasks-runners/default',
                options: {
                    cacheableOperations: ['build', 'lint', 'test', 'e2e'],
                },
            },
        },
    }));
    tree.create('/tsconfig.base.json', JSON.stringify({ compilerOptions: { paths: {} } }));
    tree.create('/tslint.json', JSON.stringify({
        rules: {
            'nx-enforce-module-boundaries': [
                true,
                {
                    npmScope: '<%= npmScope %>',
                    lazyLoad: [],
                    allow: [],
                },
            ],
        },
    }));
    return tree;
}
exports.createEmptyWorkspace = createEmptyWorkspace;
class NoopLogger {
    constructor() {
        this._log = '';
    }
    createChild(name) {
        return new NoopLogger();
    }
    includes(substr) {
        return this._log.includes(substr);
    }
    debug(message, metadata) {
        this._log += message;
    }
    error(message, metadata) {
        this._log += message;
    }
    fatal(message, metadata) {
        this._log += message;
    }
    info(message, metadata) {
        this._log += message;
    }
    log(level, message, metadata) {
        this._log += message;
    }
    warn(message, metadata) {
        this._log += message;
    }
}
/**
 * Mock context which makes testing builders easier
 */
class MockBuilderContext {
    constructor(architect, architectHost) {
        this.architect = architect;
        this.architectHost = architectHost;
        this.builder = {};
        this.analytics = null;
        this.target = {
            project: null,
            target: null,
        };
        this.logger = new NoopLogger();
    }
    get currentDirectory() {
        return this.architectHost.currentDirectory;
    }
    get workspaceRoot() {
        return this.architectHost.workspaceRoot;
    }
    addBuilderFromPackage(path) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return yield this.architectHost.addBuilderFromPackage(path);
        });
    }
    addTarget(target, builderName) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return this.architectHost.addTarget(target, builderName);
        });
    }
    getBuilderNameForTarget(target) {
        return this.architectHost.getBuilderNameForTarget(target);
    }
    scheduleTarget(target, overrides, scheduleOptions) {
        return this.architect.scheduleTarget(target, overrides, scheduleOptions);
    }
    scheduleBuilder(name, overrides, scheduleOptions) {
        return this.architect.scheduleBuilder(name, overrides, scheduleOptions);
    }
    getTargetOptions(target) {
        return this.architectHost.getOptionsForTarget(target);
    }
    validateOptions(options, builderName) {
        return Promise.resolve(options);
    }
    reportRunning() { }
    reportStatus(status) { }
    reportProgress(current, total, status) { }
    addTeardown(teardown) { }
    getProjectMetadata(target) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return (this.architectHost &&
                this.architectHost.getProjectMetadata(target));
        });
    }
}
exports.MockBuilderContext = MockBuilderContext;
//# sourceMappingURL=testing-utils.js.map
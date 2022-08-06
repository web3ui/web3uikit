"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFakeContext = exports.setupTestingWorkspace = void 0;
const tslib_1 = require("tslib");
const fs_1 = require("fs");
const path_1 = require("path");
const rimraf = require("rimraf");
const tmp = require("tmp");
const util_1 = require("util");
function setupTestingWorkspace(files) {
    /* Create a temporary directory. */
    const tmpDir = tmp.dirSync();
    for (const [fileRelativePath, content] of files.entries()) {
        const filePath = (0, path_1.resolve)(tmpDir.name, fileRelativePath);
        const directory = (0, path_1.dirname)(filePath);
        /* Create path. */
        (0, fs_1.mkdirSync)(directory, { recursive: true });
        /* Create file. */
        (0, fs_1.writeFileSync)(filePath, content, 'utf-8');
    }
    const originalCwd = process.cwd();
    process.chdir(tmpDir.name);
    /* Retrieving path from `process.cwd()`
     * because for some strange reasons it returns a different value.
     * Cf. https://github.com/nodejs/node/issues/7545 */
    const workspaceRoot = process.cwd();
    return {
        /**
         * Destroy and restore cwd.
         */
        tearDown() {
            return tslib_1.__awaiter(this, void 0, void 0, function* () {
                yield (0, util_1.promisify)(rimraf)(workspaceRoot);
                process.chdir(originalCwd);
            });
        },
        root: workspaceRoot,
    };
}
exports.setupTestingWorkspace = setupTestingWorkspace;
function createFakeContext({ cwd = process.cwd(), project, projectRoot, workspaceRoot, additionalProjects = [], }) {
    return {
        cwd: cwd,
        root: workspaceRoot,
        projectName: project,
        workspace: {
            version: 2,
            projects: Object.assign({ [project]: { root: projectRoot, targets: {} } }, assembleAdditionalProjects(additionalProjects)),
        },
    };
}
exports.createFakeContext = createFakeContext;
function assembleAdditionalProjects(additionalProjects) {
    return additionalProjects.reduce((acc, p) => {
        acc[p.project] = { root: p.projectRoot, targets: p.targets || {} };
        return acc;
    }, {});
}
//# sourceMappingURL=testing.js.map
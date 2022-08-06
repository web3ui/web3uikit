"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.npmPackageSchematic = exports.npmPackageGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
function normalizeOptions(options) {
    options.name = (0, devkit_1.names)(options.name).fileName;
    return options;
}
function addFiles(projectRoot, tree, npmScope, options) {
    const packageJsonPath = (0, path_1.join)(projectRoot, 'package.json');
    (0, devkit_1.writeJson)(tree, packageJsonPath, {
        name: (0, devkit_1.joinPathFragments)(`@${npmScope}`, options.name),
        version: '0.0.0',
        scripts: {
            test: 'node index.js',
        },
    });
    (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, './files'), projectRoot, {});
}
function npmPackageGenerator(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        options = normalizeOptions(options);
        const { libsDir, npmScope } = (0, devkit_1.getWorkspaceLayout)(tree);
        const workspaceFile = (0, devkit_1.getWorkspacePath)(tree);
        const projectRoot = (0, path_1.join)(libsDir, options.name);
        if (!!workspaceFile) {
            (0, devkit_1.addProjectConfiguration)(tree, options.name, {
                root: projectRoot,
            });
        }
        const fileCount = tree.children(projectRoot).length;
        const projectJsonExists = tree.exists((0, path_1.join)(projectRoot, 'project.json'));
        const isEmpty = fileCount === 0 || (fileCount === 1 && projectJsonExists);
        if (isEmpty) {
            addFiles(projectRoot, tree, npmScope, options);
        }
        yield (0, devkit_1.formatFiles)(tree);
    });
}
exports.npmPackageGenerator = npmPackageGenerator;
exports.npmPackageSchematic = (0, devkit_1.convertNxGenerator)(npmPackageGenerator);
//# sourceMappingURL=npm-package.js.map
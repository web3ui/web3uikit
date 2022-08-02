"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createFiles = void 0;
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
function createFiles(tree, options) {
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, options.project);
    const filesFolder = options.setupFile === 'angular' ? '../files-angular' : '../files';
    let transformer;
    if (options.compiler === 'babel' || options.babelJest) {
        transformer = 'babel-jest';
    }
    else if (options.compiler === 'swc') {
        transformer = '@swc/jest';
    }
    else {
        transformer = 'ts-jest';
    }
    (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, filesFolder), projectConfig.root, Object.assign(Object.assign({ tmpl: '' }, options), { transformer, js: !!options.js, projectRoot: projectConfig.root, offsetFromRoot: (0, devkit_1.offsetFromRoot)(projectConfig.root) }));
    if (options.setupFile === 'none') {
        tree.delete((0, path_1.join)(projectConfig.root, './src/test-setup.ts'));
    }
    if (options.babelJest && !tree.exists('babel.config.json')) {
        tree.write('babel.config.json', JSON.stringify({
            babelrcRoots: ['*'],
        }));
    }
    if (options.js) {
        tree.rename((0, path_1.join)(projectConfig.root, 'jest.config.ts'), (0, path_1.join)(projectConfig.root, 'jest.config.js'));
    }
}
exports.createFiles = createFiles;
//# sourceMappingURL=create-files.js.map
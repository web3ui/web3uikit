"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.librarySchematic = exports.libraryGenerator = exports.addLint = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const run_tasks_in_serial_1 = require("../../utilities/run-tasks-in-serial");
const typescript_1 = require("../../utilities/typescript");
const versions_1 = require("../../utils/versions");
// nx-ignore-next-line
const { jestProjectGenerator } = require('@nrwl/jest');
// nx-ignore-next-line
const { lintProjectGenerator, Linter } = require('@nrwl/linter');
function addProject(tree, options) {
    const projectConfiguration = {
        root: options.projectRoot,
        sourceRoot: (0, devkit_1.joinPathFragments)(options.projectRoot, 'src'),
        projectType: 'library',
        targets: {},
        tags: options.parsedTags,
    };
    if (options.buildable) {
        const { libsDir } = (0, devkit_1.getWorkspaceLayout)(tree);
        (0, devkit_1.addDependenciesToPackageJson)(tree, {}, { '@nrwl/js': versions_1.nxVersion });
        projectConfiguration.targets.build = {
            executor: '@nrwl/js:tsc',
            outputs: ['{options.outputPath}'],
            options: {
                outputPath: `dist/${libsDir}/${options.projectDirectory}`,
                main: `${options.projectRoot}/src/index` + (options.js ? '.js' : '.ts'),
                tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
                assets: [`${options.projectRoot}/*.md`],
            },
        };
    }
    (0, devkit_1.addProjectConfiguration)(tree, options.name, projectConfiguration, options.standaloneConfig);
}
function addLint(tree, options) {
    return lintProjectGenerator(tree, {
        project: options.name,
        linter: options.linter,
        skipFormat: true,
        tsConfigPaths: [
            (0, devkit_1.joinPathFragments)(options.projectRoot, 'tsconfig.lib.json'),
        ],
        eslintFilePatterns: [
            `${options.projectRoot}/**/*.${options.js ? 'js' : 'ts'}`,
        ],
        setParserOptionsProject: options.setParserOptionsProject,
    });
}
exports.addLint = addLint;
function updateTsConfig(tree, options) {
    (0, devkit_1.updateJson)(tree, (0, path_1.join)(options.projectRoot, 'tsconfig.json'), (json) => {
        if (options.strict) {
            json.compilerOptions = Object.assign(Object.assign({}, json.compilerOptions), { forceConsistentCasingInFileNames: true, strict: true, noImplicitReturns: true, noFallthroughCasesInSwitch: true });
        }
        return json;
    });
}
function updateRootTsConfig(host, options) {
    (0, devkit_1.updateJson)(host, (0, typescript_1.getRootTsConfigPathInTree)(host), (json) => {
        const c = json.compilerOptions;
        c.paths = c.paths || {};
        delete c.paths[options.name];
        if (c.paths[options.importPath]) {
            throw new Error(`You already have a library using the import path "${options.importPath}". Make sure to specify a unique one.`);
        }
        c.paths[options.importPath] = [
            (0, devkit_1.joinPathFragments)(options.projectRoot, './src', 'index.' + (options.js ? 'js' : 'ts')),
        ];
        return json;
    });
}
function createFiles(tree, options) {
    const { className, name, propertyName } = (0, devkit_1.names)(options.name);
    const rootOffset = (0, devkit_1.offsetFromRoot)(options.projectRoot);
    (0, devkit_1.generateFiles)(tree, (0, path_1.join)(__dirname, './files/lib'), options.projectRoot, Object.assign(Object.assign({}, options), { dot: '.', className,
        name,
        propertyName, js: !!options.js, cliCommand: 'nx', strict: undefined, tmpl: '', offsetFromRoot: rootOffset, rootTsConfigPath: (0, typescript_1.getRelativePathToRootTsConfig)(tree, options.projectRoot), hasUnitTestRunner: options.unitTestRunner !== 'none', hasLinter: options.linter !== 'none' }));
    if (options.unitTestRunner === 'none') {
        tree.delete((0, path_1.join)(options.projectRoot, 'src/lib', `${options.fileName}.spec.ts`));
    }
    if (options.skipBabelrc) {
        tree.delete((0, path_1.join)(options.projectRoot, '.babelrc'));
    }
    if (options.js) {
        (0, devkit_1.toJS)(tree);
    }
    if (!options.buildable) {
        tree.delete((0, path_1.join)(options.projectRoot, 'package.json'));
    }
    updateTsConfig(tree, options);
}
function addJest(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield jestProjectGenerator(tree, Object.assign(Object.assign({}, options), { project: options.name, setupFile: 'none', supportTsx: true, babelJest: options.babelJest, skipSerializers: true, testEnvironment: options.testEnvironment, skipFormat: true }));
    });
}
function libraryGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(tree, schema);
        createFiles(tree, options);
        if (!options.skipTsConfig) {
            updateRootTsConfig(tree, options);
        }
        addProject(tree, options);
        const tasks = [];
        if (options.linter !== 'none') {
            const lintCallback = yield addLint(tree, options);
            tasks.push(lintCallback);
        }
        if (options.unitTestRunner === 'jest') {
            const jestCallback = yield addJest(tree, options);
            tasks.push(jestCallback);
        }
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.libraryGenerator = libraryGenerator;
exports.default = libraryGenerator;
exports.librarySchematic = (0, devkit_1.convertNxGenerator)(libraryGenerator);
function normalizeOptions(tree, options) {
    const name = (0, devkit_1.names)(options.name).fileName;
    const projectDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${name}`
        : name;
    if (!options.unitTestRunner) {
        options.unitTestRunner = 'jest';
    }
    if (!options.linter) {
        options.linter = Linter.EsLint;
    }
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const fileName = getCaseAwareFileName({
        fileName: options.simpleModuleName ? name : projectName,
        pascalCaseFiles: options.pascalCaseFiles,
    });
    const { libsDir, npmScope } = (0, devkit_1.getWorkspaceLayout)(tree);
    const projectRoot = (0, devkit_1.joinPathFragments)(libsDir, projectDirectory);
    const parsedTags = options.tags
        ? options.tags.split(',').map((s) => s.trim())
        : [];
    const defaultImportPath = `@${npmScope}/${projectDirectory}`;
    const importPath = options.importPath || defaultImportPath;
    return Object.assign(Object.assign({}, options), { fileName, name: projectName, projectRoot,
        projectDirectory,
        parsedTags,
        importPath });
}
function getCaseAwareFileName(options) {
    const normalized = (0, devkit_1.names)(options.fileName);
    return options.pascalCaseFiles ? normalized.className : normalized.fileName;
}
//# sourceMappingURL=library.js.map
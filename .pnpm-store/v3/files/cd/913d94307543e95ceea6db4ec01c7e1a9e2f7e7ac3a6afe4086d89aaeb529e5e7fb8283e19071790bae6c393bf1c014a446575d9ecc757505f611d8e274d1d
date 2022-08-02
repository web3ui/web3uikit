"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.librarySchematic = exports.addLint = exports.projectGenerator = exports.libraryGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const jest_1 = require("@nrwl/jest");
const linter_1 = require("@nrwl/linter");
const run_tasks_in_serial_1 = require("@nrwl/workspace/src/utilities/run-tasks-in-serial");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const path_1 = require("path");
const minimal_publish_script_1 = require("../../utils/minimal-publish-script");
const add_swc_config_1 = require("../../utils/swc/add-swc-config");
const add_swc_dependencies_1 = require("../../utils/swc/add-swc-dependencies");
function libraryGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const { libsDir } = (0, devkit_1.getWorkspaceLayout)(tree);
        return projectGenerator(tree, schema, libsDir, (0, path_1.join)(__dirname, './files'));
    });
}
exports.libraryGenerator = libraryGenerator;
function projectGenerator(tree, schema, destinationDir, filesDir) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(tree, schema, destinationDir);
        createFiles(tree, options, `${filesDir}/lib`);
        addProject(tree, options, destinationDir);
        if (!schema.skipTsConfig) {
            updateRootTsConfig(tree, options);
        }
        const tasks = [];
        if (options.linter !== 'none') {
            const lintCallback = yield addLint(tree, options);
            tasks.push(lintCallback);
        }
        if (options.unitTestRunner === 'jest') {
            const jestCallback = yield addJest(tree, options);
            tasks.push(jestCallback);
            if (options.compiler === 'swc') {
                replaceJestConfig(tree, options, `${filesDir}/jest-config`);
            }
        }
        if (!options.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return (0, run_tasks_in_serial_1.runTasksInSerial)(...tasks);
    });
}
exports.projectGenerator = projectGenerator;
function addProject(tree, options, destinationDir) {
    const projectConfiguration = {
        root: options.projectRoot,
        sourceRoot: (0, devkit_1.joinPathFragments)(options.projectRoot, 'src'),
        projectType: 'library',
        targets: {},
        tags: options.parsedTags,
    };
    if (options.buildable && options.config !== 'npm-scripts') {
        const outputPath = `dist/${destinationDir}/${options.projectDirectory}`;
        projectConfiguration.targets.build = {
            executor: `@nrwl/js:${options.compiler}`,
            outputs: ['{options.outputPath}'],
            options: {
                outputPath,
                main: `${options.projectRoot}/src/index` + (options.js ? '.js' : '.ts'),
                tsConfig: `${options.projectRoot}/tsconfig.lib.json`,
                assets: [`${options.projectRoot}/*.md`],
            },
        };
        if (options.compiler === 'swc' && options.skipTypeCheck) {
            projectConfiguration.targets.build.options.skipTypeCheck = true;
        }
        if (options.publishable) {
            const publishScriptPath = (0, minimal_publish_script_1.addMinimalPublishScript)(tree);
            projectConfiguration.targets.publish = {
                executor: '@nrwl/workspace:run-commands',
                options: {
                    command: `node ${publishScriptPath} ${options.name} {args.ver} {args.tag}`,
                },
                dependsOn: [{ projects: 'self', target: 'build' }],
            };
        }
    }
    if (options.config === 'workspace') {
        (0, devkit_1.addProjectConfiguration)(tree, options.name, projectConfiguration, false);
    }
    else if (options.config === 'project') {
        (0, devkit_1.addProjectConfiguration)(tree, options.name, projectConfiguration, true);
    }
    else {
        (0, devkit_1.addProjectConfiguration)(tree, options.name, {
            root: projectConfiguration.root,
            tags: projectConfiguration.tags,
            targets: {},
        }, true);
    }
}
function addLint(tree, options) {
    return (0, linter_1.lintProjectGenerator)(tree, {
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
            json.compilerOptions = Object.assign(Object.assign({}, json.compilerOptions), { forceConsistentCasingInFileNames: true, strict: true, noImplicitOverride: true, noPropertyAccessFromIndexSignature: true, noImplicitReturns: true, noFallthroughCasesInSwitch: true });
        }
        return json;
    });
}
/**
 * Currently `@nrwl/js:library` TypeScript files can be compiled by most NX applications scaffolded via the Plugin system. However, `@nrwl/react:app` is an exception that due to its babel configuration, won't transpile external TypeScript files from packages/libs that do not contain a .babelrc.
 *
 * If a user doesn't explicitly set the flag, to prevent breaking the experience (they see the application failing, and they need to manually add the babelrc themselves), we want to detect whether they have the `@nrwl/web` plugin installed, and generate it automatically for them (even when they do not explicity request it).
 *
 * You can find more details on why this is necessary here:
 * https://github.com/nrwl/nx/pull/10055
 */
function shouldAddBabelRc(tree, options) {
    if (typeof options.includeBabelRc === 'undefined') {
        const webPluginName = '@nrwl/web';
        const packageJson = (0, devkit_1.readJson)(tree, 'package.json');
        const hasNxWebPlugin = Object.keys(packageJson.devDependencies).includes(webPluginName);
        return hasNxWebPlugin;
    }
    return options.includeBabelRc;
}
function addBabelRc(tree, options) {
    const filename = '.babelrc';
    const babelrc = {
        presets: [['@nrwl/web/babel', { useBuiltIns: 'usage' }]],
    };
    (0, devkit_1.writeJson)(tree, (0, path_1.join)(options.projectRoot, filename), babelrc);
}
function createFiles(tree, options, filesDir) {
    const { className, name, propertyName } = (0, devkit_1.names)(options.name);
    (0, devkit_1.generateFiles)(tree, filesDir, options.projectRoot, Object.assign(Object.assign({}, options), { dot: '.', className,
        name,
        propertyName, js: !!options.js, cliCommand: 'nx', strict: undefined, tmpl: '', offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.projectRoot), rootTsConfigPath: (0, typescript_1.getRelativePathToRootTsConfig)(tree, options.projectRoot), buildable: options.buildable === true, hasUnitTestRunner: options.unitTestRunner !== 'none' }));
    if (options.compiler === 'swc') {
        (0, add_swc_dependencies_1.addSwcDependencies)(tree);
        (0, add_swc_config_1.addSwcConfig)(tree, options.projectRoot);
    }
    else if (shouldAddBabelRc(tree, options)) {
        addBabelRc(tree, options);
    }
    if (options.unitTestRunner === 'none') {
        tree.delete((0, path_1.join)(options.projectRoot, 'src/lib', `${options.fileName}.spec.ts`));
        tree.delete((0, path_1.join)(options.projectRoot, 'src/app', `${options.fileName}.spec.ts`));
    }
    if (options.js) {
        (0, devkit_1.toJS)(tree);
    }
    const packageJsonPath = (0, path_1.join)(options.projectRoot, 'package.json');
    if (options.config === 'npm-scripts') {
        (0, devkit_1.updateJson)(tree, packageJsonPath, (json) => {
            json.scripts = {
                build: "echo 'implement build'",
                test: "echo 'implement test'",
            };
            return json;
        });
    }
    else if (!options.buildable) {
        tree.delete(packageJsonPath);
    }
    updateTsConfig(tree, options);
}
function addJest(tree, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        return yield (0, jest_1.jestProjectGenerator)(tree, Object.assign(Object.assign({}, options), { project: options.name, setupFile: 'none', supportTsx: false, skipSerializers: true, testEnvironment: options.testEnvironment, skipFormat: true, compiler: options.compiler }));
    });
}
function replaceJestConfig(tree, options, filesDir) {
    // the existing config has to be deleted otherwise the new config won't overwrite it
    const existingJestConfig = (0, devkit_1.joinPathFragments)(filesDir, `jest.config.${options.js ? 'js' : 'ts'}`);
    if (tree.exists(existingJestConfig)) {
        tree.delete(existingJestConfig);
    }
    // replace with JS:SWC specific jest config
    (0, devkit_1.generateFiles)(tree, filesDir, options.projectRoot, {
        ext: options.js ? 'js' : 'ts',
        js: !!options.js,
        project: options.name,
        offsetFromRoot: (0, devkit_1.offsetFromRoot)(options.projectRoot),
        projectRoot: options.projectRoot,
    });
}
function normalizeOptions(tree, options, destinationDir) {
    var _a;
    if (options.publishable) {
        if (!options.importPath) {
            throw new Error(`For publishable libs you have to provide a proper "--importPath" which needs to be a valid npm package name (e.g. my-awesome-lib or @myorg/my-lib)`);
        }
        options.buildable = true;
    }
    if (options.config === 'npm-scripts') {
        options.unitTestRunner = 'none';
        options.linter = linter_1.Linter.None;
        options.buildable = false;
    }
    (_a = options.compiler) !== null && _a !== void 0 ? _a : (options.compiler = 'tsc');
    if (options.compiler === 'swc' && options.skipTypeCheck == null) {
        options.skipTypeCheck = false;
    }
    const name = (0, devkit_1.names)(options.name).fileName;
    const projectDirectory = options.directory
        ? `${(0, devkit_1.names)(options.directory).fileName}/${name}`
        : name;
    if (!options.unitTestRunner && options.config !== 'npm-scripts') {
        options.unitTestRunner = 'jest';
    }
    if (!options.linter && options.config !== 'npm-scripts') {
        options.linter = linter_1.Linter.EsLint;
    }
    const projectName = projectDirectory.replace(new RegExp('/', 'g'), '-');
    const fileName = getCaseAwareFileName({
        fileName: options.simpleModuleName ? name : projectName,
        pascalCaseFiles: options.pascalCaseFiles,
    });
    const { npmScope } = (0, devkit_1.getWorkspaceLayout)(tree);
    const projectRoot = (0, devkit_1.joinPathFragments)(destinationDir, projectDirectory);
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
exports.default = libraryGenerator;
exports.librarySchematic = (0, devkit_1.convertNxGenerator)(libraryGenerator);
//# sourceMappingURL=library.js.map
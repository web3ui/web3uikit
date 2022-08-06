"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.newWorkspace = exports.printGenHelp = void 0;
const tslib_1 = require("tslib");
const params_1 = require("../utils/params");
const workspaces_1 = require("../config/workspaces");
const tree_1 = require("../generators/tree");
const logger_1 = require("../utils/logger");
const chalk = require("chalk");
const workspace_root_1 = require("../utils/workspace-root");
const print_help_1 = require("../utils/print-help");
const enquirer_1 = require("enquirer");
const fileutils_1 = require("nx/src/utils/fileutils");
function printChanges(fileChanges) {
    fileChanges.forEach((f) => {
        if (f.type === 'CREATE') {
            console.log(`${chalk.green('CREATE')} ${f.path}`);
        }
        else if (f.type === 'UPDATE') {
            console.log(`${chalk.white('UPDATE')} ${f.path}`);
        }
        else if (f.type === 'DELETE') {
            console.log(`${chalk.yellow('DELETE')} ${f.path}`);
        }
    });
}
function promptForCollection(generatorName, ws, interactive) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const packageJson = (0, fileutils_1.readJsonFile)(`${workspace_root_1.workspaceRoot}/package.json`);
        const collections = Array.from(new Set([
            ...Object.keys(packageJson.dependencies || {}),
            ...Object.keys(packageJson.devDependencies || {}),
        ]));
        const choicesMap = new Set();
        for (const collectionName of collections) {
            try {
                const { resolvedCollectionName, normalizedGeneratorName } = ws.readGenerator(collectionName, generatorName);
                choicesMap.add(`${resolvedCollectionName}:${normalizedGeneratorName}`);
            }
            catch (_a) { }
        }
        const choices = Array.from(choicesMap);
        if (choices.length === 1) {
            return choices[0];
        }
        else if (!interactive && choices.length > 1) {
            throwInvalidInvocation(choices);
        }
        else if (interactive && choices.length > 1) {
            const noneOfTheAbove = `None of the above`;
            choices.push(noneOfTheAbove);
            let { generator, customCollection } = yield (0, enquirer_1.prompt)([
                {
                    name: 'generator',
                    message: `Which generator would you like to use?`,
                    type: 'autocomplete',
                    choices,
                },
                {
                    name: 'customCollection',
                    type: 'input',
                    message: `Which collection would you like to use?`,
                    skip: function () {
                        // Skip this question if the user did not answer None of the above
                        return this.state.answers.generator !== noneOfTheAbove;
                    },
                    validate: function (value) {
                        if (this.skipped) {
                            return true;
                        }
                        try {
                            ws.readGenerator(value, generatorName);
                            return true;
                        }
                        catch (_a) {
                            logger_1.logger.error(`\nCould not find ${value}:${generatorName}`);
                            return false;
                        }
                    },
                },
            ]);
            return customCollection
                ? `${customCollection}:${generatorName}`
                : generator;
        }
        else {
            throw new Error(`Could not find any generators named "${generatorName}"`);
        }
    });
}
function parseGeneratorString(value) {
    const separatorIndex = value.lastIndexOf(':');
    if (separatorIndex > 0) {
        return {
            collection: value.slice(0, separatorIndex),
            generator: value.slice(separatorIndex + 1),
        };
    }
    else {
        return {
            generator: value,
        };
    }
}
function convertToGenerateOptions(generatorOptions, ws, defaultCollectionName, mode) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let collectionName = null;
        let generatorName = null;
        const interactive = generatorOptions.interactive;
        if (mode === 'generate') {
            const generatorDescriptor = generatorOptions['generator'];
            const { collection, generator } = parseGeneratorString(generatorDescriptor);
            if (collection) {
                collectionName = collection;
                generatorName = generator;
            }
            else if (!defaultCollectionName) {
                const generatorString = yield promptForCollection(generatorDescriptor, ws, interactive);
                const parsedGeneratorString = parseGeneratorString(generatorString);
                collectionName = parsedGeneratorString.collection;
                generatorName = parsedGeneratorString.generator;
            }
            else {
                collectionName = defaultCollectionName;
                generatorName = generatorDescriptor;
            }
        }
        else {
            collectionName = generatorOptions.collection;
            generatorName = 'new';
        }
        if (!collectionName) {
            throwInvalidInvocation(['@nrwl/workspace:library']);
        }
        const res = {
            collectionName,
            generatorName,
            generatorOptions,
            help: generatorOptions.help,
            dryRun: generatorOptions.dryRun,
            interactive,
            defaults: generatorOptions.defaults,
        };
        delete generatorOptions.d;
        delete generatorOptions.dryRun;
        delete generatorOptions['dry-run'];
        delete generatorOptions.interactive;
        delete generatorOptions.help;
        delete generatorOptions.collection;
        delete generatorOptions.verbose;
        delete generatorOptions.generator;
        delete generatorOptions['--'];
        delete generatorOptions['$0'];
        return res;
    });
}
function throwInvalidInvocation(availableGenerators) {
    throw new Error(`Specify the generator name (e.g., nx generate ${availableGenerators.join(', ')})`);
}
function readDefaultCollection(nxConfig) {
    return nxConfig.cli ? nxConfig.cli.defaultCollection : null;
}
function printGenHelp(opts, schema, normalizedGeneratorName, aliases) {
    (0, print_help_1.printHelp)(`generate ${opts.collectionName}:${normalizedGeneratorName}`, Object.assign(Object.assign({}, schema), { properties: schema.properties }), {
        mode: 'generate',
        plugin: opts.collectionName,
        entity: normalizedGeneratorName,
        aliases,
    });
}
exports.printGenHelp = printGenHelp;
function newWorkspace(cwd, args) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const ws = new workspaces_1.Workspaces(null);
        const isVerbose = args['verbose'];
        return (0, params_1.handleErrors)(isVerbose, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const opts = yield convertToGenerateOptions(args, ws, null, 'new');
            const { normalizedGeneratorName, schema, implementationFactory } = ws.readGenerator(opts.collectionName, opts.generatorName);
            logger_1.logger.info(`NX Generating ${opts.collectionName}:${normalizedGeneratorName}`);
            const combinedOpts = yield (0, params_1.combineOptionsForGenerator)(opts.generatorOptions, opts.collectionName, normalizedGeneratorName, null, schema, opts.interactive, null, null, isVerbose);
            if (ws.isNxGenerator(opts.collectionName, normalizedGeneratorName)) {
                const host = new tree_1.FsTree(cwd, isVerbose);
                const implementation = implementationFactory();
                const task = yield implementation(host, combinedOpts);
                const changes = host.listChanges();
                printChanges(changes);
                if (!opts.dryRun) {
                    (0, tree_1.flushChanges)(cwd, changes);
                    if (task) {
                        yield task();
                    }
                }
                else {
                    logger_1.logger.warn(`\nNOTE: The "dryRun" flag means no changes were made.`);
                }
            }
            else {
                return (yield Promise.resolve().then(() => require('../adapter/ngcli-adapter'))).generate(cwd, Object.assign(Object.assign({}, opts), { generatorOptions: combinedOpts }), isVerbose);
            }
        }));
    });
}
exports.newWorkspace = newWorkspace;
function generate(cwd, args) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const ws = new workspaces_1.Workspaces(workspace_root_1.workspaceRoot);
        const isVerbose = args['verbose'];
        return (0, params_1.handleErrors)(isVerbose, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const workspaceDefinition = ws.readWorkspaceConfiguration();
            const opts = yield convertToGenerateOptions(args, ws, readDefaultCollection(workspaceDefinition), 'generate');
            const { normalizedGeneratorName, schema, implementationFactory, aliases } = ws.readGenerator(opts.collectionName, opts.generatorName);
            logger_1.logger.info(`NX Generating ${opts.collectionName}:${normalizedGeneratorName}`);
            if (opts.help) {
                printGenHelp(opts, schema, normalizedGeneratorName, aliases);
                return 0;
            }
            const combinedOpts = yield (0, params_1.combineOptionsForGenerator)(opts.generatorOptions, opts.collectionName, normalizedGeneratorName, workspaceDefinition, schema, opts.interactive, ws.calculateDefaultProjectName(cwd, workspaceDefinition), ws.relativeCwd(cwd), isVerbose);
            if (ws.isNxGenerator(opts.collectionName, normalizedGeneratorName)) {
                const host = new tree_1.FsTree(workspace_root_1.workspaceRoot, isVerbose);
                const implementation = implementationFactory();
                const task = yield implementation(host, combinedOpts);
                const changes = host.listChanges();
                printChanges(changes);
                if (!opts.dryRun) {
                    (0, tree_1.flushChanges)(workspace_root_1.workspaceRoot, changes);
                    if (task) {
                        yield task();
                    }
                }
                else {
                    logger_1.logger.warn(`\nNOTE: The "dryRun" flag means no changes were made.`);
                }
            }
            else {
                require('../adapter/compat');
                return (yield Promise.resolve().then(() => require('../adapter/ngcli-adapter'))).generate(workspace_root_1.workspaceRoot, Object.assign(Object.assign({}, opts), { generatorOptions: combinedOpts }), isVerbose);
            }
        }));
    });
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map
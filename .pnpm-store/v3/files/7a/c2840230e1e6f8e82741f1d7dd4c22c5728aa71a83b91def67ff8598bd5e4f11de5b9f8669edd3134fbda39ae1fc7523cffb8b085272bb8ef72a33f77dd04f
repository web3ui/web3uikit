"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.generate = exports.newWorkspace = exports.printGenHelp = void 0;
const tslib_1 = require("tslib");
const params_1 = require("../utils/params");
const workspaces_1 = require("../config/workspaces");
const tree_1 = require("../generators/tree");
const logger_1 = require("../utils/logger");
const chalk = require("chalk");
const app_root_1 = require("../utils/app-root");
const print_help_1 = require("../utils/print-help");
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
function convertToGenerateOptions(generatorOptions, defaultCollectionName, mode) {
    let collectionName = null;
    let generatorName = null;
    if (mode === 'generate') {
        const generatorDescriptor = generatorOptions['generator'];
        const separatorIndex = generatorDescriptor.lastIndexOf(':');
        if (separatorIndex > 0) {
            collectionName = generatorDescriptor.slice(0, separatorIndex);
            generatorName = generatorDescriptor.slice(separatorIndex + 1);
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
        throwInvalidInvocation();
    }
    const res = {
        collectionName,
        generatorName,
        generatorOptions,
        help: generatorOptions.help,
        dryRun: generatorOptions.dryRun,
        interactive: generatorOptions.interactive,
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
}
function throwInvalidInvocation() {
    throw new Error(`Specify the generator name (e.g., nx generate @nrwl/workspace:library)`);
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
            const opts = convertToGenerateOptions(args, null, 'new');
            const { normalizedGeneratorName, schema, implementationFactory } = ws.readGenerator(opts.collectionName, opts.generatorName);
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
        const ws = new workspaces_1.Workspaces(app_root_1.workspaceRoot);
        const isVerbose = args['verbose'];
        return (0, params_1.handleErrors)(isVerbose, () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const workspaceDefinition = ws.readWorkspaceConfiguration();
            const opts = convertToGenerateOptions(args, readDefaultCollection(workspaceDefinition), 'generate');
            const { normalizedGeneratorName, schema, implementationFactory, aliases } = ws.readGenerator(opts.collectionName, opts.generatorName);
            if (opts.help) {
                printGenHelp(opts, schema, normalizedGeneratorName, aliases);
                return 0;
            }
            const combinedOpts = yield (0, params_1.combineOptionsForGenerator)(opts.generatorOptions, opts.collectionName, normalizedGeneratorName, workspaceDefinition, schema, opts.interactive, ws.calculateDefaultProjectName(cwd, workspaceDefinition), ws.relativeCwd(cwd), isVerbose);
            if (ws.isNxGenerator(opts.collectionName, normalizedGeneratorName)) {
                const host = new tree_1.FsTree(app_root_1.workspaceRoot, isVerbose);
                const implementation = implementationFactory();
                const task = yield implementation(host, combinedOpts);
                const changes = host.listChanges();
                printChanges(changes);
                if (!opts.dryRun) {
                    (0, tree_1.flushChanges)(app_root_1.workspaceRoot, changes);
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
                return (yield Promise.resolve().then(() => require('../adapter/ngcli-adapter'))).generate(app_root_1.workspaceRoot, Object.assign(Object.assign({}, opts), { generatorOptions: combinedOpts }), isVerbose);
            }
        }));
    });
}
exports.generate = generate;
//# sourceMappingURL=generate.js.map
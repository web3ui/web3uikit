"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.newSchematic = exports.newGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
const yargsParser = require("yargs-parser");
const child_process_1 = require("child_process");
const semver_1 = require("semver");
const workspace_1 = require("../workspace/workspace");
const versions_1 = require("../../utils/versions");
const presets_1 = require("../utils/presets");
const default_base_1 = require("../../utilities/default-base");
const get_npm_package_version_1 = require("../utils/get-npm-package-version");
function generatePreset(host, opts) {
    const cliCommand = opts.cli === 'angular' ? 'ng' : 'nx';
    const parsedArgs = yargsParser(process.argv, {
        boolean: ['interactive'],
    });
    const spawnOptions = {
        stdio: [process.stdin, process.stdout, process.stderr],
        shell: true,
        cwd: (0, path_1.join)(host.root, opts.directory),
    };
    const pmc = (0, devkit_1.getPackageManagerCommand)();
    const executable = `${pmc.exec} ${cliCommand}`;
    const args = getPresetArgs(opts);
    return new Promise((resolve, reject) => {
        (0, child_process_1.spawn)(executable, args, spawnOptions).on('close', (code) => {
            if (code === 0) {
                resolve();
            }
            else {
                const message = 'Workspace creation failed, see above.';
                reject(new Error(message));
            }
        });
    });
    function getPresetArgs(options) {
        if (Object.values(presets_1.Preset).some((val) => val === options.preset)) {
            // supported presets
            return getDefaultArgs(options);
        }
        return getThirdPartyPresetArgs();
    }
    function getDefaultArgs(opts) {
        return [
            `g`,
            `@nrwl/workspace:preset`,
            `--name=${opts.appName}`,
            opts.style ? `--style=${opts.style}` : null,
            opts.linter ? `--linter=${opts.linter}` : null,
            opts.npmScope ? `--npmScope=${opts.npmScope}` : `--npmScope=${opts.name}`,
            opts.preset ? `--preset=${opts.preset}` : null,
            opts.packageManager ? `--packageManager=${opts.packageManager}` : null,
            `--cli=${cliCommand}`,
            parsedArgs.interactive ? '--interactive=true' : '--interactive=false',
        ].filter((e) => !!e);
    }
    function getThirdPartyPresetArgs() {
        const thirdPartyPkgArgs = Object.entries(opts).reduce((acc, [key, value]) => {
            if (value === true) {
                acc.push(`--${key}`);
            }
            else if (value === false) {
                acc.push(`--no-${key}`);
                // nxWorkspaceRoot breaks CLI if incorrectly set, so need to exclude it.
                // TODO(jack): Should read in the preset schema and only pass the options specified.
            }
            else if (key !== 'nxWorkspaceRoot') {
                // string, number (don't handle arrays or nested objects)
                acc.push(`--${key}=${value}`);
            }
            return acc;
        }, []);
        return [`g`, `${opts.preset}:preset`, ...thirdPartyPkgArgs];
    }
}
function initializeGitRepo(host, rootDirectory, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const execute = (args, ignoreErrorStream = false) => {
            const outputStream = 'ignore';
            const errorStream = ignoreErrorStream ? 'ignore' : process.stderr;
            const spawnOptions = {
                stdio: [process.stdin, outputStream, errorStream],
                shell: true,
                cwd: (0, path_1.join)(host.root, rootDirectory),
                env: Object.assign(Object.assign(Object.assign({}, process.env), (options.commit.name
                    ? {
                        GIT_AUTHOR_NAME: options.commit.name,
                        GIT_COMMITTER_NAME: options.commit.name,
                    }
                    : {})), (options.commit.email
                    ? {
                        GIT_AUTHOR_EMAIL: options.commit.email,
                        GIT_COMMITTER_EMAIL: options.commit.email,
                    }
                    : {})),
            };
            return new Promise((resolve, reject) => {
                (0, child_process_1.spawn)('git', args, spawnOptions).on('close', (code) => {
                    if (code === 0) {
                        resolve();
                    }
                    else {
                        reject(code);
                    }
                });
            });
        };
        const gitVersion = (0, default_base_1.checkGitVersion)();
        if (!gitVersion) {
            return;
        }
        const insideRepo = yield execute(['rev-parse', '--is-inside-work-tree'], true).then(() => true, () => false);
        if (insideRepo) {
            console.info(`Directory is already under version control. Skipping initialization of git.`);
            return;
        }
        const defaultBase = options.defaultBase || (0, default_base_1.deduceDefaultBase)();
        if ((0, semver_1.gte)(gitVersion, '2.28.0')) {
            yield execute(['init', '-b', defaultBase]);
        }
        else {
            yield execute(['init']);
            yield execute(['checkout', '-b', defaultBase]); // Git < 2.28 doesn't support -b on git init.
        }
        yield execute(['add', '.']);
        if (options.commit) {
            const message = options.commit.message || 'initial commit';
            yield execute(['commit', `-m "${message}"`]);
        }
        console.info('Successfully initialized git.');
    });
}
function newGenerator(host, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (options.skipInstall &&
            options.preset !== presets_1.Preset.Apps &&
            options.preset !== presets_1.Preset.Core &&
            options.preset !== presets_1.Preset.TS &&
            options.preset !== presets_1.Preset.Empty &&
            options.preset !== presets_1.Preset.NPM) {
            throw new Error(`Cannot select a preset when skipInstall is set to true.`);
        }
        if (options.skipInstall && options.nxCloud) {
            throw new Error(`Cannot select nxCloud when skipInstall is set to true.`);
        }
        if ((0, devkit_1.getWorkspacePath)(host)) {
            throw new Error('Cannot generate a new workspace within an existing workspace');
        }
        options = normalizeOptions(options);
        if (host.exists(options.name) &&
            !host.isFile(options.name) &&
            host.children(options.name).length > 0) {
            throw new Error(`${(0, path_1.join)(host.root, options.name)} is not an empty directory.`);
        }
        yield (0, workspace_1.workspaceGenerator)(host, Object.assign(Object.assign({}, options), { nxCloud: undefined }));
        setDefaultLinter(host, options);
        addPresetDependencies(host, options);
        addCloudDependencies(host, options);
        yield (0, devkit_1.formatFiles)(host);
        return () => tslib_1.__awaiter(this, void 0, void 0, function* () {
            (0, devkit_1.installPackagesTask)(host, false, options.directory, options.packageManager);
            yield generatePreset(host, options);
            if (!options.skipGit) {
                try {
                    yield initializeGitRepo(host, options.directory, options);
                }
                catch (e) {
                    console.error(`Could not initialize git repository. Error: ${e.message}`);
                }
            }
        });
    });
}
exports.newGenerator = newGenerator;
exports.default = newGenerator;
exports.newSchematic = (0, devkit_1.convertNxGenerator)(newGenerator);
function addCloudDependencies(host, options) {
    if (options.nxCloud) {
        return (0, devkit_1.addDependenciesToPackageJson)(host, {}, { '@nrwl/nx-cloud': 'latest' }, (0, path_1.join)(options.directory, 'package.json'));
    }
}
function getPresetDependencies(preset, version) {
    switch (preset) {
        case presets_1.Preset.TS:
            return { dependencies: {}, dev: { '@nrwl/js': versions_1.nxVersion } };
        case presets_1.Preset.Angular:
            return { dependencies: { '@nrwl/angular': versions_1.nxVersion }, dev: {} };
        case presets_1.Preset.AngularWithNest:
            return {
                dependencies: { '@nrwl/angular': versions_1.nxVersion },
                dev: { '@nrwl/nest': versions_1.nxVersion },
            };
        case presets_1.Preset.Express:
            return { dependencies: {}, dev: { '@nrwl/express': versions_1.nxVersion } };
        case presets_1.Preset.Nest:
            return { dependencies: {}, dev: { '@nrwl/nest': versions_1.nxVersion } };
        case presets_1.Preset.NextJs:
            return { dependencies: { '@nrwl/next': versions_1.nxVersion }, dev: {} };
        case presets_1.Preset.React:
            return { dependencies: {}, dev: { '@nrwl/react': versions_1.nxVersion } };
        case presets_1.Preset.ReactWithExpress:
            return {
                dependencies: {},
                dev: {
                    '@nrwl/react': versions_1.nxVersion,
                    '@nrwl/express': versions_1.nxVersion,
                },
            };
        case presets_1.Preset.ReactNative:
            return { dependencies: {}, dev: { '@nrwl/react-native': versions_1.nxVersion } };
        case presets_1.Preset.WebComponents:
            return { dependencies: {}, dev: { '@nrwl/web': versions_1.nxVersion } };
        default: {
            return {
                dev: {},
                dependencies: { [preset]: version !== null && version !== void 0 ? version : (0, get_npm_package_version_1.getNpmPackageVersion)(preset) },
            };
        }
    }
}
function addPresetDependencies(host, options) {
    if (options.preset === presets_1.Preset.Apps ||
        options.preset === presets_1.Preset.Core ||
        options.preset === presets_1.Preset.Empty ||
        options.preset === presets_1.Preset.NPM) {
        return;
    }
    const { dependencies, dev } = getPresetDependencies(options.preset, options.presetVersion);
    return (0, devkit_1.addDependenciesToPackageJson)(host, dependencies, dev, (0, path_1.join)(options.directory, 'package.json'));
}
function normalizeOptions(options) {
    options.name = (0, devkit_1.names)(options.name).fileName;
    if (!options.directory) {
        options.directory = options.name;
    }
    // If the preset already contains a version in the name
    // -- my-package@2.0.1
    // -- @scope/package@version
    const match = options.preset.match(/^(?<package>(@.+\/)?[^@]+)(@(?<version>\d+\.\d+\.\d+))?$/);
    if (match) {
        options.preset = match.groups.package;
        options.presetVersion = match.groups.version;
    }
    return options;
}
function setDefaultLinter(host, options) {
    const { linter, preset } = options;
    // Don't do anything if someone doesn't pick angular
    if (preset !== presets_1.Preset.Angular && preset !== presets_1.Preset.AngularWithNest) {
        return;
    }
    switch (linter) {
        case 'eslint': {
            setESLintDefault(host, options);
            break;
        }
        case 'tslint': {
            setTSLintDefault(host, options);
            break;
        }
    }
}
/**
 * This sets ESLint as the default for any schematics that default to TSLint
 */
function setESLintDefault(host, options) {
    (0, devkit_1.updateJson)(host, getWorkspacePath(host, options), (json) => {
        setDefault(json, '@nrwl/angular', 'application', 'linter', 'eslint');
        setDefault(json, '@nrwl/angular', 'library', 'linter', 'eslint');
        setDefault(json, '@nrwl/angular', 'storybook-configuration', 'linter', 'eslint');
        return json;
    });
}
/**
 * This sets TSLint as the default for any schematics that default to ESLint
 */
function setTSLintDefault(host, options) {
    (0, devkit_1.updateJson)(host, getWorkspacePath(host, options), (json) => {
        setDefault(json, '@nrwl/workspace', 'library', 'linter', 'tslint');
        setDefault(json, '@nrwl/cypress', 'cypress-project', 'linter', 'tslint');
        setDefault(json, '@nrwl/cypress', 'cypress-project', 'linter', 'tslint');
        setDefault(json, '@nrwl/node', 'application', 'linter', 'tslint');
        setDefault(json, '@nrwl/node', 'library', 'linter', 'tslint');
        setDefault(json, '@nrwl/nest', 'application', 'linter', 'tslint');
        setDefault(json, '@nrwl/nest', 'library', 'linter', 'tslint');
        setDefault(json, '@nrwl/express', 'application', 'linter', 'tslint');
        setDefault(json, '@nrwl/express', 'library', 'linter', 'tslint');
        return json;
    });
}
function getWorkspacePath(host, { directory, cli }) {
    return (0, path_1.join)(directory, cli === 'angular' ? 'angular.json' : 'workspace.json');
}
function setDefault(json, collectionName, generatorName, key, value) {
    if (!json.schematics)
        json.schematics = {};
    if (json.schematics[collectionName] &&
        json.schematics[collectionName][generatorName]) {
        json.schematics[collectionName][generatorName][key] = value;
    }
    else if (json.schematics[`${collectionName}:${generatorName}`]) {
        json.schematics[`${collectionName}:${generatorName}`][key] = value;
    }
    else {
        json.schematics[collectionName] = json.schematics[collectionName] || {};
        json.schematics[collectionName][generatorName] = { [key]: value };
    }
}
//# sourceMappingURL=new.js.map
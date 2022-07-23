"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.workspaceSchematic = exports.workspaceGenerator = exports.DEFAULT_NRWL_PRETTIER_CONFIG = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../utils/versions");
const fs_1 = require("fs");
const path_1 = require("path");
const workspaces_1 = require("nx/src/config/workspaces");
const presets_1 = require("../utils/presets");
const default_base_1 = require("../../utilities/default-base");
exports.DEFAULT_NRWL_PRETTIER_CONFIG = {
    singleQuote: true,
};
function decorateAngularClI(host, options) {
    const decorateCli = (0, fs_1.readFileSync)((0, path_1.join)(__dirname, '..', 'utils', 'decorate-angular-cli.js__tmpl__')).toString();
    host.write((0, path_1.join)(options.directory, 'decorate-angular-cli.js'), decorateCli);
}
function setPresetProperty(tree, options) {
    (0, devkit_1.updateJson)(tree, (0, path_1.join)(options.directory, 'nx.json'), (json) => {
        if (options.preset === presets_1.Preset.Core ||
            options.preset === presets_1.Preset.TS ||
            options.preset === presets_1.Preset.NPM) {
            addPropertyWithStableKeys(json, 'extends', 'nx/presets/core.json');
            delete json.implicitDependencies;
            delete json.targetDependencies;
            delete json.workspaceLayout;
        }
        return json;
    });
}
function createAppsAndLibsFolders(host, options) {
    if (options.preset === presets_1.Preset.Core ||
        options.preset === presets_1.Preset.TS ||
        options.preset === presets_1.Preset.NPM) {
        host.write((0, path_1.join)(options.directory, 'packages/.gitkeep'), '');
    }
    else {
        host.write((0, path_1.join)(options.directory, 'apps/.gitkeep'), '');
        host.write((0, path_1.join)(options.directory, 'libs/.gitkeep'), '');
    }
}
function createFiles(host, options) {
    var _a;
    const npmScope = (_a = options.npmScope) !== null && _a !== void 0 ? _a : options.name;
    const formattedNames = (0, devkit_1.names)(options.name);
    (0, devkit_1.generateFiles)(host, (0, path_1.join)(__dirname, './files'), options.directory, Object.assign(Object.assign({ formattedNames, dot: '.', tmpl: '', workspaceFile: options.cli === 'angular' ? 'angular' : 'workspace', cliCommand: options.cli === 'angular' ? 'ng' : 'nx', nxCli: false, typescriptVersion: versions_1.typescriptVersion,
        prettierVersion: versions_1.prettierVersion,
        // angular cli is used only when workspace schematics is added to angular cli
        angularCliVersion: versions_1.angularCliVersion }, options), { nxVersion: versions_1.nxVersion,
        npmScope, packageManager: options.packageManager }));
}
function createPrettierrc(host, options) {
    (0, devkit_1.writeJson)(host, (0, path_1.join)(options.directory, '.prettierrc'), exports.DEFAULT_NRWL_PRETTIER_CONFIG);
}
function formatWorkspaceJson(host, options) {
    const path = (0, path_1.join)(options.directory, options.cli === 'angular' ? 'angular.json' : 'workspace.json');
    try {
        (0, devkit_1.updateJson)(host, path, (workspaceJson) => {
            const reformatted = (0, workspaces_1.reformattedWorkspaceJsonOrNull)(workspaceJson);
            if (reformatted) {
                return reformatted;
            }
            return workspaceJson;
        });
    }
    catch (e) {
        console.error(`Failed to format: ${path}`);
        console.error(e);
    }
}
function addNpmScripts(host, options) {
    if (options.cli === 'angular') {
        (0, devkit_1.updateJson)(host, (0, path_1.join)(options.directory, 'package.json'), (json) => {
            Object.assign(json.scripts, {
                ng: 'nx',
                postinstall: 'node ./decorate-angular-cli.js',
            });
            return json;
        });
    }
    if (options.preset !== presets_1.Preset.TS &&
        options.preset !== presets_1.Preset.Core &&
        options.preset !== presets_1.Preset.NPM) {
        (0, devkit_1.updateJson)(host, (0, path_1.join)(options.directory, 'package.json'), (json) => {
            Object.assign(json.scripts, {
                start: 'nx serve',
                build: 'nx build',
                test: 'nx test',
            });
            return json;
        });
    }
}
function workspaceGenerator(host, options) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!options.name) {
            throw new Error(`Invalid options, "name" is required.`);
        }
        options = normalizeOptions(options);
        createFiles(host, options);
        createPrettierrc(host, options);
        if (options.cli === 'angular') {
            decorateAngularClI(host, options);
        }
        setPresetProperty(host, options);
        addNpmScripts(host, options);
        createAppsAndLibsFolders(host, options);
        yield (0, devkit_1.formatFiles)(host);
        formatWorkspaceJson(host, options);
    });
}
exports.workspaceGenerator = workspaceGenerator;
exports.workspaceSchematic = (0, devkit_1.convertNxGenerator)(workspaceGenerator);
function addPropertyWithStableKeys(obj, key, value) {
    const copy = Object.assign({}, obj);
    Object.keys(obj).forEach((k) => {
        delete obj[k];
    });
    obj[key] = value;
    Object.keys(copy).forEach((k) => {
        obj[k] = copy[k];
    });
}
function normalizeOptions(options) {
    let defaultBase = options.defaultBase || (0, default_base_1.deduceDefaultBase)();
    return Object.assign(Object.assign({}, options), { defaultBase });
}
//# sourceMappingURL=workspace.js.map
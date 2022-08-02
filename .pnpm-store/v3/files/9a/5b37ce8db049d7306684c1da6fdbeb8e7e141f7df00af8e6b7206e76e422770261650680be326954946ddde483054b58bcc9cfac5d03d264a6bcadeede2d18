"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRoots = exports.parseFiles = exports.splitArgsIntoNxArgsAndOverrides = exports.names = void 0;
const yargsParser = require("yargs-parser");
const file_utils_1 = require("../project-graph/file-utils");
const output_1 = require("./output");
const child_process_1 = require("child_process");
const configuration_1 = require("../config/configuration");
const serialize_overrides_into_command_line_1 = require("./serialize-overrides-into-command-line");
function names(name) {
    return {
        name,
        className: toClassName(name),
        propertyName: toPropertyName(name),
        constantName: toConstantName(name),
        fileName: toFileName(name),
    };
}
exports.names = names;
/**
 * Hyphenated to UpperCamelCase
 */
function toClassName(str) {
    return toCapitalCase(toPropertyName(str));
}
/**
 * Hyphenated to lowerCamelCase
 */
function toPropertyName(s) {
    return s
        .replace(/([^a-zA-Z0-9])+(.)?/g, (_, __, chr) => chr ? chr.toUpperCase() : '')
        .replace(/[^a-zA-Z\d]/g, '')
        .replace(/^([A-Z])/, (m) => m.toLowerCase());
}
/**
 * Hyphenated to CONSTANT_CASE
 */
function toConstantName(s) {
    return s.replace(/([^a-zA-Z0-9])/g, '_').toUpperCase();
}
/**
 * Upper camelCase to lowercase, hyphenated
 */
function toFileName(s) {
    return s
        .replace(/([a-z\d])([A-Z])/g, '$1_$2')
        .toLowerCase()
        .replace(/[ _]/g, '-');
}
/**
 * Capitalizes the first letter of a string
 */
function toCapitalCase(s) {
    return s.charAt(0).toUpperCase() + s.slice(1);
}
const runOne = [
    'target',
    'configuration',
    'prod',
    'runner',
    'parallel',
    'maxParallel',
    'exclude',
    'onlyFailed',
    'help',
    'withDeps',
    'skipNxCache',
    'scan',
    'outputStyle',
    'nxBail',
    'nxIgnoreCycles',
];
const runMany = [...runOne, 'projects', 'all'];
const runAffected = [
    ...runOne,
    'untracked',
    'uncommitted',
    'all',
    'base',
    'head',
    'files',
    'plain',
    'select',
    'type',
];
const ignoreArgs = ['$0', '_'];
function splitArgsIntoNxArgsAndOverrides(args, mode, options = { printWarnings: true }, nxJson) {
    var _a;
    if (!args.__overrides__ && args._) {
        // required for backwards compatibility
        args.__overrides__ = args._;
        delete args._;
    }
    const nxSpecific = mode === 'run-one' ? runOne : mode === 'run-many' ? runMany : runAffected;
    let explicitOverrides;
    if (args.__overrides__) {
        explicitOverrides = yargsParser(args.__overrides__, {
            configuration: {
                'camel-case-expansion': false,
                'dot-notation': false,
            },
        });
        if (!explicitOverrides._ || explicitOverrides._.length === 0) {
            delete explicitOverrides._;
        }
    }
    const overridesFromMainArgs = {};
    if (args['__positional_overrides__'] &&
        args['__positional_overrides__'].length > 0) {
        overridesFromMainArgs['_'] = args['__positional_overrides__'];
    }
    const nxArgs = {};
    Object.entries(args).forEach(([key, value]) => {
        const camelCased = names(key).propertyName;
        if (nxSpecific.includes(camelCased) || camelCased.startsWith('nx')) {
            if (value !== undefined)
                nxArgs[camelCased] = value;
        }
        else if (!ignoreArgs.includes(key) &&
            key !== '__positional_overrides__' &&
            key !== '__overrides__') {
            overridesFromMainArgs[key] = value;
        }
    });
    let overrides;
    if (explicitOverrides) {
        overrides = explicitOverrides;
        overrides['__overrides_unparsed__'] = args.__overrides__;
        if (Object.keys(overridesFromMainArgs).length > 0 &&
            options.printWarnings) {
            const s = Object.keys(overridesFromMainArgs).join(', ');
            output_1.output.warn({
                title: `Nx didn't recognize the following args: ${s}`,
                bodyLines: [
                    "When using '--' all executor args have to be defined after '--'.",
                ],
            });
        }
    }
    else {
        overrides = overridesFromMainArgs;
        overrides['__overrides_unparsed__'] = (0, serialize_overrides_into_command_line_1.serializeOverridesIntoCommandLine)(overridesFromMainArgs);
    }
    if (mode === 'run-many') {
        if (!nxArgs.projects) {
            nxArgs.projects = [];
        }
        else {
            nxArgs.projects = args.projects
                .split(',')
                .map((p) => p.trim());
        }
    }
    if (nxArgs.prod) {
        delete nxArgs.prod;
        nxArgs.configuration = 'production';
    }
    // TODO(v15): onlyFailed should not be an option
    if (options.printWarnings && nxArgs.onlyFailed) {
        output_1.output.warn({
            title: `--onlyFailed is deprecated. All tasks will be run.`,
        });
    }
    if (mode === 'affected') {
        if (options.printWarnings && nxArgs.all) {
            output_1.output.warn({
                title: `Running affected:* commands with --all can result in very slow builds.`,
                bodyLines: [
                    `${output_1.output.bold('--all')} is not meant to be used for any sizable project or to be used in CI.`,
                    '',
                    `${output_1.output.dim('Learn more about checking only what is affected: https://nx.dev/cli/affected')}`,
                ],
            });
        }
        if (!nxArgs.files &&
            !nxArgs.uncommitted &&
            !nxArgs.untracked &&
            !nxArgs.base &&
            !nxArgs.head &&
            !nxArgs.all &&
            overridesFromMainArgs._ &&
            overridesFromMainArgs._.length >= 2) {
            throw new Error(`Nx no longer supports using positional arguments for base and head. Please use --base and --head instead.`);
        }
        // Allow setting base and head via environment variables (lower priority then direct command arguments)
        if (!nxArgs.base && process.env.NX_BASE) {
            nxArgs.base = process.env.NX_BASE;
            if (options.printWarnings) {
                output_1.output.note({
                    title: `No explicit --base argument provided, but found environment variable NX_BASE so using its value as the affected base: ${output_1.output.bold(`${nxArgs.base}`)}`,
                });
            }
        }
        if (!nxArgs.head && process.env.NX_HEAD) {
            nxArgs.head = process.env.NX_HEAD;
            if (options.printWarnings) {
                output_1.output.note({
                    title: `No explicit --head argument provided, but found environment variable NX_HEAD so using its value as the affected head: ${output_1.output.bold(`${nxArgs.head}`)}`,
                });
            }
        }
        if (!nxArgs.base) {
            nxArgs.base = ((_a = nxJson.affected) === null || _a === void 0 ? void 0 : _a.defaultBase) || 'main';
            // No user-provided arguments to set the affected criteria, so inform the user of the defaults being used
            if (options.printWarnings &&
                !nxArgs.head &&
                !nxArgs.files &&
                !nxArgs.uncommitted &&
                !nxArgs.untracked &&
                !nxArgs.all) {
                output_1.output.note({
                    title: `Affected criteria defaulted to --base=${output_1.output.bold(`${nxArgs.base}`)} --head=${output_1.output.bold('HEAD')}`,
                });
            }
        }
    }
    if (!nxArgs.skipNxCache) {
        nxArgs.skipNxCache = process.env.NX_SKIP_NX_CACHE === 'true';
    }
    if (args['parallel'] === 'false' || args['parallel'] === false) {
        nxArgs['parallel'] = 1;
    }
    else if (args['parallel'] === 'true' ||
        args['parallel'] === true ||
        args['parallel'] === '') {
        nxArgs['parallel'] = Number(nxArgs['maxParallel'] || nxArgs['max-parallel'] || 3);
    }
    else if (args['parallel'] !== undefined) {
        nxArgs['parallel'] = Number(args['parallel']);
    }
    return { nxArgs, overrides };
}
exports.splitArgsIntoNxArgsAndOverrides = splitArgsIntoNxArgsAndOverrides;
function parseFiles(options) {
    const { files, uncommitted, untracked, base, head } = options;
    if (files) {
        return {
            files,
        };
    }
    else if (uncommitted) {
        return {
            files: getUncommittedFiles(),
        };
    }
    else if (untracked) {
        return {
            files: getUntrackedFiles(),
        };
    }
    else if (base && head) {
        return {
            files: getFilesUsingBaseAndHead(base, head),
        };
    }
    else if (base) {
        return {
            files: Array.from(new Set([
                ...getFilesUsingBaseAndHead(base, 'HEAD'),
                ...getUncommittedFiles(),
                ...getUntrackedFiles(),
            ])),
        };
    }
}
exports.parseFiles = parseFiles;
function getUncommittedFiles() {
    return parseGitOutput(`git diff --name-only --relative HEAD .`);
}
``;
function getUntrackedFiles() {
    return parseGitOutput(`git ls-files --others --exclude-standard`);
}
function getFilesUsingBaseAndHead(base, head) {
    let mergeBase;
    try {
        mergeBase = (0, child_process_1.execSync)(`git merge-base "${base}" "${head}"`, {
            maxBuffer: file_utils_1.TEN_MEGABYTES,
        })
            .toString()
            .trim();
    }
    catch (_a) {
        mergeBase = (0, child_process_1.execSync)(`git merge-base --fork-point "${base}" "${head}"`, {
            maxBuffer: file_utils_1.TEN_MEGABYTES,
        })
            .toString()
            .trim();
    }
    return parseGitOutput(`git diff --name-only --relative "${mergeBase}" "${head}"`);
}
function parseGitOutput(command) {
    return (0, child_process_1.execSync)(command, { maxBuffer: file_utils_1.TEN_MEGABYTES })
        .toString('utf-8')
        .split('\n')
        .map((a) => a.trim())
        .filter((a) => a.length > 0);
}
function getProjectRoots(projectNames) {
    const { projects } = (0, configuration_1.readAllWorkspaceConfiguration)();
    return projectNames.map((name) => projects[name].root);
}
exports.getProjectRoots = getProjectRoots;
//# sourceMappingURL=command-line-utils.js.map
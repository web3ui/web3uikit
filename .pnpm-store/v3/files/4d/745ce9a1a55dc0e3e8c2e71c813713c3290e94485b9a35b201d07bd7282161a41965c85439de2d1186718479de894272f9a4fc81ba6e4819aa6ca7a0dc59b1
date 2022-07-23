"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@babel/core");
const path_1 = __importDefault(require("path"));
const TYPESCRIPT_EXTS = {
    '.ts': true,
    '.tsx': true,
};
function getDefaultPlugins(options) {
    return [
        'jsx',
        TYPESCRIPT_EXTS[path_1.default.extname(options.filename || '')]
            ? 'typescript'
            : 'flow',
        'asyncGenerators',
        'bigInt',
        'classProperties',
        'classPrivateProperties',
        'classPrivateMethods',
        ['decorators', { decoratorsBeforeExport: false }],
        'doExpressions',
        'dynamicImport',
        'exportDefaultFrom',
        'exportNamespaceFrom',
        'functionBind',
        'functionSent',
        'importMeta',
        'logicalAssignment',
        'nullishCoalescingOperator',
        'numericSeparator',
        'objectRestSpread',
        'optionalCatchBinding',
        'optionalChaining',
        ['pipelineOperator', { proposal: 'minimal' }],
        'throwExpressions',
        'topLevelAwait',
    ];
}
function buildPluginList(parserOptions, babelOptions) {
    let plugins = [];
    if (parserOptions && parserOptions.plugins) {
        plugins = [...parserOptions.plugins];
    }
    const partialConfig = (0, core_1.loadPartialConfig)(babelOptions);
    if (partialConfig &&
        !partialConfig.hasFilesystemConfig() &&
        plugins.length === 0) {
        plugins = getDefaultPlugins(babelOptions);
    }
    // Ensure we always have estree plugin enabled, if we add it a second time
    // here it does not matter
    plugins.push('estree');
    return plugins;
}
function buildOptions(parserOptions, babelOptions) {
    const plugins = buildPluginList(parserOptions, babelOptions);
    return {
        ...(parserOptions || {}),
        plugins,
    };
}
function buildParse(options = {}) {
    const { parserOptions, ...babelOptions } = options;
    const parserOpts = buildOptions(parserOptions, babelOptions);
    const opts = {
        parserOpts,
        ...babelOptions,
    };
    return {
        parse(src) {
            const ast = (0, core_1.parseSync)(src, opts);
            if (!ast) {
                throw new Error('Unable to parse source code.');
            }
            // Attach options to the Program node, for use when processing imports.
            ast.program.options = options;
            return ast;
        },
    };
}
exports.default = buildParse;

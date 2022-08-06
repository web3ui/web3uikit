"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadTsTransformers = void 0;
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
function loadTsTransformers(plugins, moduleResolver = require.resolve) {
    const beforeHooks = [];
    const afterHooks = [];
    const afterDeclarationsHooks = [];
    if (!plugins || !plugins.length)
        return {
            compilerPluginHooks: {
                beforeHooks,
                afterHooks,
                afterDeclarationsHooks,
            },
            hasPlugin: false,
        };
    const normalizedPlugins = plugins.map((plugin) => typeof plugin === 'string' ? { name: plugin, options: {} } : plugin);
    const nodeModulePaths = [
        (0, path_1.join)(process.cwd(), 'node_modules'),
        ...module.paths,
    ];
    const pluginRefs = normalizedPlugins.map(({ name }) => {
        try {
            const binaryPath = moduleResolver(name, {
                paths: nodeModulePaths,
            });
            return require(binaryPath);
        }
        catch (e) {
            devkit_1.logger.warn(`"${name}" plugin could not be found!`);
            return {};
        }
    });
    for (let i = 0; i < pluginRefs.length; i++) {
        const { name: pluginName, options: pluginOptions } = normalizedPlugins[i];
        const { before, after, afterDeclarations } = pluginRefs[i];
        if (!before && !after && !afterDeclarations) {
            devkit_1.logger.warn(`${pluginName} is not a Transformer Plugin. It does not provide neither before(), after(), nor afterDeclarations()`);
            continue;
        }
        if (before) {
            beforeHooks.push(before.bind(before, pluginOptions));
        }
        if (after) {
            afterHooks.push(after.bind(after, pluginOptions));
        }
        if (afterDeclarations) {
            afterDeclarationsHooks.push(afterDeclarations.bind(afterDeclarations, pluginOptions));
        }
    }
    return {
        compilerPluginHooks: {
            beforeHooks,
            afterHooks,
            afterDeclarationsHooks,
        },
        hasPlugin: true,
    };
}
exports.loadTsTransformers = loadTsTransformers;
//# sourceMappingURL=load-ts-transformers.js.map
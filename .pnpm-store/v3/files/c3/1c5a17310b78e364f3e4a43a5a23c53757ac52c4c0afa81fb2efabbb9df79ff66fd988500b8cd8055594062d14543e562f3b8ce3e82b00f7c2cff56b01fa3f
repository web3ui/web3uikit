"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listInstalledPlugins = exports.getInstalledPluginsFromPackageJson = void 0;
const chalk = require("chalk");
const devkit_1 = require("@nrwl/devkit");
const output_1 = require("../output");
const plugin_capabilities_1 = require("./plugin-capabilities");
const shared_1 = require("./shared");
function getInstalledPluginsFromPackageJson(workspaceRoot, corePlugins, communityPlugins = []) {
    const packageJson = (0, devkit_1.readJsonFile)(`${workspaceRoot}/package.json`);
    const plugins = new Set([
        ...corePlugins.map((p) => p.name),
        ...communityPlugins.map((p) => p.name),
        ...Object.keys(packageJson.dependencies || {}),
        ...Object.keys(packageJson.devDependencies || {}),
    ]);
    return new Map(Array.from(plugins)
        .filter((name) => {
        try {
            // Check for `package.json` existence instead of requiring the module itself
            // because malformed entries like `main`, may throw false exceptions.
            require.resolve(`${name}/package.json`, { paths: [workspaceRoot] });
            return true;
        }
        catch (_a) {
            return false;
        }
    })
        .sort()
        .map((name) => [
        name,
        (0, plugin_capabilities_1.getPluginCapabilities)(workspaceRoot, name),
    ])
        .filter(([, x]) => x && !!(x.generators || x.executors)));
}
exports.getInstalledPluginsFromPackageJson = getInstalledPluginsFromPackageJson;
function listInstalledPlugins(installedPlugins) {
    const bodyLines = [];
    for (const [, p] of installedPlugins) {
        const capabilities = [];
        if ((0, shared_1.hasElements)(p.executors)) {
            capabilities.push('executors');
        }
        if ((0, shared_1.hasElements)(p.generators)) {
            capabilities.push('generators');
        }
        bodyLines.push(`${chalk.bold(p.name)} (${capabilities.join()})`);
    }
    output_1.output.log({
        title: `Installed plugins:`,
        bodyLines: bodyLines,
    });
}
exports.listInstalledPlugins = listInstalledPlugins;
//# sourceMappingURL=installed-plugins.js.map
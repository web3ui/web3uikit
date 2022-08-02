"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listCorePlugins = exports.fetchCorePlugins = void 0;
const chalk = require("chalk");
const output_1 = require("../output");
function fetchCorePlugins() {
    const corePlugins = [
        {
            name: '@nrwl/angular',
            capabilities: 'generators',
        },
        {
            name: '@nrwl/cypress',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/express',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/jest',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/linter',
            capabilities: 'executors',
        },
        {
            name: '@nrwl/nest',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/next',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/node',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/nx-plugin',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/react',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/js',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/storybook',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/web',
            capabilities: 'executors,generators',
        },
        {
            name: '@nrwl/workspace',
            capabilities: 'executors,generators',
        },
    ];
    return corePlugins;
}
exports.fetchCorePlugins = fetchCorePlugins;
function listCorePlugins(installedPlugins, corePlugins) {
    const alsoAvailable = corePlugins.filter((p) => !installedPlugins.has(p.name));
    if (alsoAvailable.length) {
        output_1.output.log({
            title: `Also available:`,
            bodyLines: alsoAvailable.map((p) => {
                return `${chalk.bold(p.name)} (${p.capabilities})`;
            }),
        });
    }
}
exports.listCorePlugins = listCorePlugins;
//# sourceMappingURL=core-plugins.js.map
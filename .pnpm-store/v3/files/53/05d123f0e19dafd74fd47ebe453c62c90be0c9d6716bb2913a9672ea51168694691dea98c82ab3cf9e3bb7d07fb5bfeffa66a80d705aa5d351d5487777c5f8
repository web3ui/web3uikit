"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestInitSchematic = exports.jestInitGenerator = void 0;
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../utils/versions");
const schemaDefaults = {
    compiler: 'tsc',
    js: false,
};
function createJestConfig(host, js = false) {
    // if the root ts config already exists then don't make a js one or vice versa
    if (!host.exists('jest.config.ts') && !host.exists('jest.config.js')) {
        const contents = js
            ? (0, devkit_1.stripIndents) `
      const { getJestProjects } = require('@nrwl/jest');

      module.exports = {
        projects: getJestProjects()
      };`
            : (0, devkit_1.stripIndents) `
      import { getJestProjects } from '@nrwl/jest';

      export default {
       projects: getJestProjects()
      };`;
        host.write(`jest.config.${js ? 'js' : 'ts'}`, contents);
    }
    if (!host.exists('jest.preset.js')) {
        // preset is always js file.
        host.write(`jest.preset.js`, `
      const nxPreset = require('@nrwl/jest/preset').default;
     
      module.exports = { ...nxPreset }`);
    }
}
function updateDependencies(tree, options) {
    const dependencies = {
        tslib: versions_1.tslibVersion,
    };
    const devDeps = {
        '@nrwl/jest': versions_1.nxVersion,
        jest: versions_1.jestVersion,
        // because the default jest-preset uses ts-jest,
        // jest will throw an error if it's not installed
        // even if not using it in overriding transformers
        'ts-jest': versions_1.tsJestVersion,
    };
    if (!options.js) {
        devDeps['ts-node'] = versions_1.tsNodeVersion;
        devDeps['@types/jest'] = versions_1.jestTypesVersion;
        devDeps['@types/node'] = '16.11.7';
    }
    if (options.compiler === 'babel' || options.babelJest) {
        devDeps['babel-jest'] = versions_1.babelJestVersion;
        // in some cases @nrwl/web will not already be present i.e. node only projects
        devDeps['@nrwl/web'] = versions_1.nxVersion;
    }
    else if (options.compiler === 'swc') {
        devDeps['@swc/jest'] = versions_1.swcJestVersion;
    }
    return (0, devkit_1.addDependenciesToPackageJson)(tree, dependencies, devDeps);
}
function updateExtensions(host) {
    if (!host.exists('.vscode/extensions.json')) {
        return;
    }
    (0, devkit_1.updateJson)(host, '.vscode/extensions.json', (json) => {
        json.recommendations = json.recommendations || [];
        const extension = 'firsttris.vscode-jest-runner';
        if (!json.recommendations.includes(extension)) {
            json.recommendations.push(extension);
        }
        return json;
    });
}
function jestInitGenerator(tree, schema) {
    const options = normalizeOptions(schema);
    createJestConfig(tree, options.js);
    let installTask = () => { };
    if (!options.skipPackageJson) {
        (0, devkit_1.removeDependenciesFromPackageJson)(tree, ['@nrwl/jest'], []);
        installTask = updateDependencies(tree, options);
    }
    updateExtensions(tree);
    return installTask;
}
exports.jestInitGenerator = jestInitGenerator;
function normalizeOptions(options) {
    return Object.assign(Object.assign({}, schemaDefaults), options);
}
exports.default = jestInitGenerator;
exports.jestInitSchematic = (0, devkit_1.convertNxGenerator)(jestInitGenerator);
//# sourceMappingURL=init.js.map
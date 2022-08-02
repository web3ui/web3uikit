"use strict";
var _a;
var _b;
Object.defineProperty(exports, "__esModule", { value: true });
exports.batchJest = exports.jestConfigParser = exports.jestExecutor = void 0;
const tslib_1 = require("tslib");
require("dotenv/config");
const jest_1 = require("jest");
const jest_config_1 = require("jest-config");
const reporters_1 = require("@jest/reporters");
const test_result_1 = require("@jest/test-result");
const path = require("path");
const path_1 = require("path");
const summary_1 = require("./summary");
(_a = (_b = process.env).NODE_ENV) !== null && _a !== void 0 ? _a : (_b.NODE_ENV = 'test');
function jestExecutor(options, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const config = yield jestConfigParser(options, context);
        const { results } = yield (0, jest_1.runCLI)(config, [options.jestConfig]);
        return { success: results.success };
    });
}
exports.jestExecutor = jestExecutor;
function getExtraArgs(options, schema) {
    const extraArgs = {};
    for (const key of Object.keys(options)) {
        if (!schema.properties[key]) {
            extraArgs[key] = options[key];
        }
    }
    return extraArgs;
}
function jestConfigParser(options, context, multiProjects = false) {
    var _a;
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let jestConfig;
        // support passing extra args to jest cli supporting 3rd party plugins
        // like 'jest-runner-groups' --group arg
        const schema = yield Promise.resolve().then(() => require('./schema.json'));
        const extraArgs = getExtraArgs(options, schema);
        const config = Object.assign(Object.assign({}, extraArgs), { $0: undefined, _: [], config: options.config, coverage: options.codeCoverage, bail: options.bail, ci: options.ci, color: options.color, detectOpenHandles: options.detectOpenHandles, logHeapUsage: options.logHeapUsage, detectLeaks: options.detectLeaks, json: options.json, maxWorkers: options.maxWorkers, onlyChanged: options.onlyChanged, changedSince: options.changedSince, outputFile: options.outputFile, passWithNoTests: options.passWithNoTests, runInBand: options.runInBand, showConfig: options.showConfig, silent: options.silent, testLocationInResults: options.testLocationInResults, testNamePattern: options.testNamePattern, testPathPattern: options.testPathPattern, testPathIgnorePatterns: options.testPathIgnorePatterns, testTimeout: options.testTimeout, colors: options.colors, verbose: options.verbose, testResultsProcessor: options.testResultsProcessor, updateSnapshot: options.updateSnapshot, useStderr: options.useStderr, watch: options.watch, watchAll: options.watchAll });
        if (!multiProjects) {
            options.jestConfig = path.resolve(context.root, options.jestConfig);
            jestConfig = (yield (0, jest_config_1.readConfig)(config, options.jestConfig)).projectConfig;
        }
        // for backwards compatibility
        if (options.setupFile && !multiProjects) {
            const setupFilesAfterEnvSet = new Set([
                ...((_a = jestConfig.setupFilesAfterEnv) !== null && _a !== void 0 ? _a : []),
                path.resolve(context.root, options.setupFile),
            ]);
            config.setupFilesAfterEnv = Array.from(setupFilesAfterEnvSet);
        }
        if (options.testFile) {
            config._.push(options.testFile);
        }
        if (options.findRelatedTests) {
            const parsedTests = options.findRelatedTests
                .split(',')
                .map((s) => s.trim());
            config._.push(...parsedTests);
            config.findRelatedTests = true;
        }
        if (options.coverageDirectory) {
            config.coverageDirectory = path.join(context.root, options.coverageDirectory);
        }
        if (options.clearCache) {
            config.clearCache = true;
        }
        if (options.reporters && options.reporters.length > 0) {
            config.reporters = options.reporters;
        }
        if (Array.isArray(options.coverageReporters) &&
            options.coverageReporters.length > 0) {
            config.coverageReporters = options.coverageReporters;
        }
        return config;
    });
}
exports.jestConfigParser = jestConfigParser;
exports.default = jestExecutor;
function batchJest(taskGraph, inputs, overrides, context) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const configPaths = taskGraph.roots.map((root) => path.resolve(context.root, inputs[root].jestConfig));
        const { globalConfig, results } = yield (0, jest_1.runCLI)(yield jestConfigParser(overrides, context, true), [...configPaths]);
        const jestTaskExecutionResults = {};
        const configs = yield Promise.all(configPaths.map((path) => tslib_1.__awaiter(this, void 0, void 0, function* () { return (0, jest_config_1.readConfig)({ $0: '', _: undefined }, path); })));
        for (let i = 0; i < taskGraph.roots.length; i++) {
            let root = taskGraph.roots[i];
            const aggregatedResults = (0, test_result_1.makeEmptyAggregatedTestResult)();
            aggregatedResults.startTime = results.startTime;
            const projectRoot = (0, path_1.join)(context.root, taskGraph.tasks[root].projectRoot);
            let resultOutput = '';
            for (const testResult of results.testResults) {
                if (testResult.testFilePath.startsWith(projectRoot)) {
                    (0, test_result_1.addResult)(aggregatedResults, testResult);
                    resultOutput +=
                        '\n\r' +
                            reporters_1.utils.getResultHeader(testResult, globalConfig, configs[i].projectConfig);
                }
            }
            aggregatedResults.numTotalTestSuites = aggregatedResults.testResults.length;
            jestTaskExecutionResults[root] = {
                success: aggregatedResults.numFailedTests === 0,
                terminalOutput: resultOutput + '\n\r\n\r' + (0, summary_1.getSummary)(aggregatedResults),
            };
        }
        return jestTaskExecutionResults;
    });
}
exports.batchJest = batchJest;
//# sourceMappingURL=jest.impl.js.map
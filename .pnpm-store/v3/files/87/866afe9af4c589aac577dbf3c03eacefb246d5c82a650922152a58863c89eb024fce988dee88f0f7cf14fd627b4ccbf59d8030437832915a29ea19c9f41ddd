"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const path_1 = require("path");
const ava_1 = tslib_1.__importDefault(require("ava"));
const lodash_1 = require("lodash");
const sinon_1 = tslib_1.__importDefault(require("sinon"));
const ts = tslib_1.__importStar(require("typescript"));
const read_default_tsconfig_1 = require("../read-default-tsconfig");
(0, ava_1.default)('should read tsconfig from cwd if without any config', (t) => {
    delete process.env.SWC_NODE_PROJECT;
    const defaultOptions = (0, read_default_tsconfig_1.readDefaultTsConfig)();
    const { config } = ts.readConfigFile((0, path_1.join)(process.cwd(), 'tsconfig.json'), ts.sys.readFile);
    const { options } = ts.parseJsonConfigFileContent(config, ts.sys, process.cwd());
    t.deepEqual((0, lodash_1.omit)(defaultOptions, 'files'), options);
});
(0, ava_1.default)('should RESPECT SWC_NODE_PROJECT env', (t) => {
    const configPath = (0, path_1.join)(__dirname, 'tsconfig.spec.json');
    delete process.env.SWC_NODE_PROJECT;
    delete process.env.TS_NODE_PROJECT;
    process.env.SWC_NODE_PROJECT = configPath;
    const defaultOptions = (0, read_default_tsconfig_1.readDefaultTsConfig)();
    const { config } = ts.readConfigFile(configPath, ts.sys.readFile);
    const { options } = ts.parseJsonConfigFileContent(config, ts.sys, (0, path_1.dirname)(configPath));
    t.deepEqual((0, lodash_1.omit)(defaultOptions, 'files'), options);
});
(0, ava_1.default)('should RESPECT TS_NODE_PROJECT env', (t) => {
    const configPath = (0, path_1.join)(__dirname, 'tsconfig.spec.json');
    delete process.env.SWC_NODE_PROJECT;
    delete process.env.TS_NODE_PROJECT;
    process.env.TS_NODE_PROJECT = configPath;
    const defaultOptions = (0, read_default_tsconfig_1.readDefaultTsConfig)();
    const { config } = ts.readConfigFile(configPath, ts.sys.readFile);
    const { options } = ts.parseJsonConfigFileContent(config, ts.sys, (0, path_1.dirname)(configPath));
    t.deepEqual((0, lodash_1.omit)(defaultOptions, 'files'), options);
});
(0, ava_1.default)('should RESPECT tsconfig path in subdirectory', (t) => {
    const configPath = (0, path_1.join)(__dirname, 'subdirectory/tsconfig.extend.json');
    delete process.env.SWC_NODE_PROJECT;
    delete process.env.TS_NODE_PROJECT;
    process.env.TS_NODE_PROJECT = configPath;
    const defaultOptions = (0, read_default_tsconfig_1.readDefaultTsConfig)();
    const { config } = ts.readConfigFile(configPath, ts.sys.readFile);
    const { options } = ts.parseJsonConfigFileContent(config, ts.sys, (0, path_1.dirname)(configPath));
    t.deepEqual((0, lodash_1.omit)(defaultOptions, 'files'), options);
});
(0, ava_1.default)('should return default compiler options when the tsConfigPath is invalid', (t) => {
    const configPath = (0, path_1.join)(__dirname, 'invalid', 'tsconfig.json');
    delete process.env.SWC_NODE_PROJECT;
    delete process.env.TS_NODE_PROJECT;
    process.env.TS_NODE_PROJECT = configPath;
    const defaultOptions = (0, read_default_tsconfig_1.readDefaultTsConfig)();
    t.deepEqual(defaultOptions, {
        target: ts.ScriptTarget.ES2018,
        module: ts.ModuleKind.CommonJS,
        moduleResolution: ts.ModuleResolutionKind.NodeJs,
        sourceMap: true,
        esModuleInterop: true,
    });
});
(0, ava_1.default)('should RESPECT tsconfig path in subdirectory with a relative path', (t) => {
    const configPath = (0, path_1.join)('..', '__test__', 'tsconfig.spec.json');
    const fullConfigPath = (0, path_1.join)(__dirname, 'tsconfig.spec.json');
    delete process.env.SWC_NODE_PROJECT;
    delete process.env.TS_NODE_PROJECT;
    process.env.TS_NODE_PROJECT = configPath;
    sinon_1.default.replace(process, 'cwd', () => __dirname);
    const defaultOptions = (0, read_default_tsconfig_1.readDefaultTsConfig)();
    sinon_1.default.restore();
    const { config } = ts.readConfigFile(fullConfigPath, ts.sys.readFile);
    const { options } = ts.parseJsonConfigFileContent(config, ts.sys, (0, path_1.dirname)(fullConfigPath));
    t.deepEqual((0, lodash_1.omit)(defaultOptions, 'files'), options);
});
//# sourceMappingURL=read-default-config.spec.js.map
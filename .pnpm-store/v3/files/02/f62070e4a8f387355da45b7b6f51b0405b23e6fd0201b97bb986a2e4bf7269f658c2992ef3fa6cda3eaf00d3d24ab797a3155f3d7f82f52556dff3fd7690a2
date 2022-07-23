"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.jestProjectSchematic = exports.jestProjectGenerator = void 0;
const tslib_1 = require("tslib");
const init_1 = require("../init/init");
const check_for_test_target_1 = require("./lib/check-for-test-target");
const create_files_1 = require("./lib/create-files");
const update_tsconfig_1 = require("./lib/update-tsconfig");
const update_workspace_1 = require("./lib/update-workspace");
const update_jestconfig_1 = require("./lib/update-jestconfig");
const devkit_1 = require("@nrwl/devkit");
const schemaDefaults = {
    setupFile: 'none',
    babelJest: false,
    supportTsx: false,
    skipSetupFile: false,
    skipSerializers: false,
};
function normalizeOptions(options) {
    if (!options.testEnvironment) {
        options.testEnvironment = 'jsdom';
    }
    if (options.testEnvironment === 'jsdom') {
        options.testEnvironment = '';
    }
    if (!options.hasOwnProperty('supportTsx')) {
        options.supportTsx = false;
    }
    // if we support TSX or compiler is not tsc, then we don't support angular(html templates)
    if (options.supportTsx ||
        options.babelJest ||
        ['swc', 'babel'].includes(options.compiler)) {
        options.skipSerializers = true;
    }
    if (!options.skipSetupFile) {
        return options;
    }
    // setupFile is always 'none'
    options.setupFile = schemaDefaults.setupFile;
    return Object.assign(Object.assign({}, schemaDefaults), options);
}
function jestProjectGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(schema);
        const installTask = (0, init_1.default)(tree, options);
        (0, check_for_test_target_1.checkForTestTarget)(tree, options);
        (0, create_files_1.createFiles)(tree, options);
        (0, update_tsconfig_1.updateTsConfig)(tree, options);
        (0, update_workspace_1.updateWorkspace)(tree, options);
        (0, update_jestconfig_1.updateJestConfig)(tree, options);
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
        return installTask;
    });
}
exports.jestProjectGenerator = jestProjectGenerator;
exports.jestProjectSchematic = (0, devkit_1.convertNxGenerator)(jestProjectGenerator);
//# sourceMappingURL=jest-project.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMockContext = exports.getTestArchitect = exports.createLibWithTests = exports.runMigration = exports.callRule = exports.runSchematic = exports.runExternalSchematic = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const testing_1 = require("@angular-devkit/schematics/testing");
const workspace_1 = require("./workspace");
const testing_2 = require("@angular-devkit/architect/testing");
const core_1 = require("@angular-devkit/core");
const architect_1 = require("@angular-devkit/architect");
const testing_utils_1 = require("./testing-utils");
const devkit_1 = require("@nrwl/devkit");
const testRunner = new testing_1.SchematicTestRunner('@nrwl/workspace', (0, path_1.join)(__dirname, '../../generators.json'));
testRunner.registerCollection('@nrwl/jest', (0, path_1.join)(__dirname, '../../../jest/generators.json'));
testRunner.registerCollection('@nrwl/cypress', (0, path_1.join)(__dirname, '../../../cypress/generators.json'));
testRunner.registerCollection('@nrwl/express', (0, path_1.join)(__dirname, '../../../express/generators.json'));
testRunner.registerCollection('@nrwl/react', (0, path_1.join)(__dirname, '../../../react/generators.json'));
testRunner.registerCollection('@nrwl/angular', (0, path_1.join)(__dirname, '../../../angular/generators.json'));
testRunner.registerCollection('@nrwl/next', (0, path_1.join)(__dirname, '../../../next/generators.json'));
testRunner.registerCollection('@nrwl/node', (0, path_1.join)(__dirname, '../../../node/generators.json'));
testRunner.registerCollection('@nrwl/nest', (0, path_1.join)(__dirname, '../../../nest/generators.json'));
testRunner.registerCollection('@nrwl/web', (0, path_1.join)(__dirname, '../../../web/generators.json'));
const migrationTestRunner = new testing_1.SchematicTestRunner('@nrwl/workspace/migrations', (0, path_1.join)(__dirname, '../../migrations.json'));
function runExternalSchematic(collectionName, schematicName, options, tree) {
    return testRunner
        .runExternalSchematicAsync(collectionName, schematicName, options, tree)
        .toPromise();
}
exports.runExternalSchematic = runExternalSchematic;
function runSchematic(schematicName, options, tree) {
    return testRunner.runSchematicAsync(schematicName, options, tree).toPromise();
}
exports.runSchematic = runSchematic;
function callRule(rule, tree) {
    return testRunner.callRule(rule, tree).toPromise();
}
exports.callRule = callRule;
function runMigration(migrationName, options, tree) {
    return migrationTestRunner
        .runSchematicAsync(migrationName, options, tree)
        .toPromise();
}
exports.runMigration = runMigration;
function createLibWithTests(tree, libName, testBuilder, testSetupFile) {
    const { fileName } = (0, devkit_1.names)(libName);
    tree.create(`/libs/${fileName}/src/index.ts`, `\n`);
    return callRule((0, workspace_1.updateWorkspace)((workspace) => {
        workspace.projects.add({
            name: fileName,
            root: `libs/${fileName}`,
            projectType: 'library',
            sourceRoot: `libs/${fileName}/src`,
            architect: {
                test: {
                    builder: testBuilder,
                    options: {
                        setupFile: `libs/${fileName}/src/${testSetupFile}`,
                    },
                },
            },
        });
    }), tree);
}
exports.createLibWithTests = createLibWithTests;
function getTestArchitect() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const architectHost = new testing_2.TestingArchitectHost('/root', '/root');
        const registry = new core_1.schema.CoreSchemaRegistry();
        registry.addPostTransform(core_1.schema.transforms.addUndefinedDefaults);
        const architect = new architect_1.Architect(architectHost, registry);
        yield architectHost.addBuilderFromPackage((0, path_1.join)(__dirname, '../..'));
        return [architect, architectHost];
    });
}
exports.getTestArchitect = getTestArchitect;
function getMockContext() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const [architect, architectHost] = yield getTestArchitect();
        const context = new testing_utils_1.MockBuilderContext(architect, architectHost);
        yield context.addBuilderFromPackage((0, path_1.join)(__dirname, '../..'));
        return context;
    });
}
exports.getMockContext = getMockContext;
//# sourceMappingURL=testing.js.map
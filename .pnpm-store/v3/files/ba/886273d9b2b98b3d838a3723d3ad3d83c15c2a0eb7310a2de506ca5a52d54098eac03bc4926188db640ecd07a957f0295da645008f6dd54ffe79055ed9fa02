"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runMigration = void 0;
const testing_1 = require("@angular-devkit/schematics/testing");
const path_1 = require("path");
const migrationTestRunner = new testing_1.SchematicTestRunner('@nrwl/linter-migrations', (0, path_1.join)(__dirname, '../../migrations.json'));
function runMigration(migrationName, options, tree) {
    return migrationTestRunner
        .runSchematicAsync(migrationName, options, tree)
        .toPromise();
}
exports.runMigration = runMigration;
//# sourceMappingURL=testing.js.map
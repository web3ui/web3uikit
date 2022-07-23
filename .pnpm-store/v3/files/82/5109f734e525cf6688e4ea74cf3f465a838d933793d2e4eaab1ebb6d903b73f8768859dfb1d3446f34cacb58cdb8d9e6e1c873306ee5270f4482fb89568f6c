"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPackageWithInit = void 0;
const schematics_1 = require("@angular-devkit/schematics");
/**
 * Calls init _if_ the package does not already exist
 */
function addPackageWithInit(packageName, testRunners = { unitTestRunner: 'jest', e2eTestRunner: 'cypress' }) {
    return (0, schematics_1.externalSchematic)(packageName, 'init', Object.assign({}, testRunners));
}
exports.addPackageWithInit = addPackageWithInit;
//# sourceMappingURL=ng-add.js.map
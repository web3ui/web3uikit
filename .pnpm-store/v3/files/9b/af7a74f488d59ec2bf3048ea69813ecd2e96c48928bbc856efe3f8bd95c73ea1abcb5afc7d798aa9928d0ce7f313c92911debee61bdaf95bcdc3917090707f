"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.printDiagnostics = void 0;
const tslib_1 = require("tslib");
function printDiagnostics(errors = [], warnings = []) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (errors.length > 0) {
            errors.forEach((err) => {
                console.log(`${err}\n`);
            });
            console.log(`Found ${errors.length} error${errors.length > 1 ? 's' : ''}.`);
        }
        else if (warnings.length > 0) {
            warnings.forEach((err) => {
                console.log(`${err}\n`);
            });
            console.log(`Found ${warnings.length} warnings.`);
        }
    });
}
exports.printDiagnostics = printDiagnostics;
//# sourceMappingURL=print-diagnostics.js.map
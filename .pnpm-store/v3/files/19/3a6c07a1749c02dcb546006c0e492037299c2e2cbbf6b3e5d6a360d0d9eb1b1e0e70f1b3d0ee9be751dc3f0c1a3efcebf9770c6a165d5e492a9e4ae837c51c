"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateDecorateAngularCLI = void 0;
function updateDecorateAngularCLI(host) {
    var _a;
    const decorate = (_a = host.read('decorate-angular-cli.js')) === null || _a === void 0 ? void 0 : _a.toString();
    if (decorate) {
        host.write('decorate-angular-cli.js', decorate.replace('@nrwl/cli/lib/decorate-cli', 'nx/src/cli/decorate-cli'));
    }
}
exports.updateDecorateAngularCLI = updateDecorateAngularCLI;
exports.default = updateDecorateAngularCLI;
//# sourceMappingURL=update-decorate-cli.js.map
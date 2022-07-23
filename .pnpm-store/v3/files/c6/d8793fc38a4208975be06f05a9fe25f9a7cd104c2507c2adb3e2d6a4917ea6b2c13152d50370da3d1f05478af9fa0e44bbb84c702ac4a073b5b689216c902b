"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolveUserExistingPrettierConfig = void 0;
const tslib_1 = require("tslib");
let prettier;
try {
    prettier = require('prettier');
}
catch (_a) { }
function resolveUserExistingPrettierConfig() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (!prettier) {
            return null;
        }
        try {
            const filepath = yield prettier.resolveConfigFile();
            if (!filepath) {
                return null;
            }
            const config = yield prettier.resolveConfig(process.cwd(), {
                useCache: false,
                config: filepath,
            });
            if (!config) {
                return null;
            }
            return {
                sourceFilepath: filepath,
                config: config,
            };
        }
        catch (_a) {
            return null;
        }
    });
}
exports.resolveUserExistingPrettierConfig = resolveUserExistingPrettierConfig;
//# sourceMappingURL=prettier.js.map
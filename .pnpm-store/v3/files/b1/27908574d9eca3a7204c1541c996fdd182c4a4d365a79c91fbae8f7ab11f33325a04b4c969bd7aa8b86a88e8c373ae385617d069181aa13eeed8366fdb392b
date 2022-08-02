"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTsConfig = void 0;
const path_1 = require("path");
const devkit_1 = require("@nrwl/devkit");
function updateTsConfig(host, options) {
    const projectConfig = (0, devkit_1.readProjectConfiguration)(host, options.project);
    if (!host.exists((0, path_1.join)(projectConfig.root, 'tsconfig.json'))) {
        throw new Error(`Expected ${(0, path_1.join)(projectConfig.root, 'tsconfig.json')} to exist. Please create one.`);
    }
    (0, devkit_1.updateJson)(host, (0, path_1.join)(projectConfig.root, 'tsconfig.json'), (json) => {
        if (json.references) {
            json.references.push({
                path: './tsconfig.spec.json',
            });
        }
        return json;
    });
}
exports.updateTsConfig = updateTsConfig;
//# sourceMappingURL=update-tsconfig.js.map
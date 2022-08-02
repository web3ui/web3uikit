"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceTaoWithNx = void 0;
const devkit_1 = require("@nrwl/devkit");
function replaceTaoWithNx(host) {
    (0, devkit_1.updateJson)(host, 'package.json', (json) => {
        var _a, _b;
        if ((_a = json.dependencies) === null || _a === void 0 ? void 0 : _a['@nrwl/workspace']) {
            json.dependencies['nx'] = json.dependencies['@nrwl/workspace'];
        }
        else if ((_b = json.devDependencies) === null || _b === void 0 ? void 0 : _b['@nrwl/workspace']) {
            json.devDependencies['nx'] = json.devDependencies['@nrwl/workspace'];
        }
        removeTao(json.dependencies);
        removeTao(json.devDependencies);
        return json;
    });
    const pmc = (0, devkit_1.getPackageManagerCommand)();
    devkit_1.logger.info(`Please run ${pmc.install} to ensure the correct version of Nx is installed.`);
}
exports.replaceTaoWithNx = replaceTaoWithNx;
function removeTao(json) {
    if (!json)
        return;
    json['@nrwl/tao'] = undefined;
}
exports.default = replaceTaoWithNx;
//# sourceMappingURL=replace-tao-with-nx.js.map
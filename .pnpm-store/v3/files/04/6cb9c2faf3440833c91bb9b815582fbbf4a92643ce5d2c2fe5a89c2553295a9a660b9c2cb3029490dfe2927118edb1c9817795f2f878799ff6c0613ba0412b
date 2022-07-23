"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const versions_1 = require("../../utils/versions");
function default_1(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const options = normalizeOptions(schema);
        (0, devkit_1.generateFiles)(host, (0, devkit_1.joinPathFragments)(__dirname, 'files'), (0, devkit_1.joinPathFragments)('tools/generators', schema.name), options);
        const installTask = (0, devkit_1.addDependenciesToPackageJson)(host, {}, {
            '@nrwl/devkit': versions_1.nxVersion,
            // types/node is neccessary for pnpm since it's used in tsconfig and transitive
            // dependencies are not resolved correctly
            '@types/node': 'latest',
        });
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
        return installTask;
    });
}
exports.default = default_1;
function normalizeOptions(options) {
    const name = (0, devkit_1.names)(options.name).fileName;
    return Object.assign(Object.assign({}, options), { name, tmpl: '' });
}
//# sourceMappingURL=workspace-generator.js.map
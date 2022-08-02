"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
/* istanbul ignore next */
function migrate(tree) {
    (0, devkit_1.getProjects)(tree).forEach((project, projectName) => {
        var _a, _b;
        if ((_a = project.targets) === null || _a === void 0 ? void 0 : _a.version) {
            const options = (_b = project.targets.version.options) !== null && _b !== void 0 ? _b : {};
            /* Check if the outdated option is defined. */
            if (typeof options.rootChangelog === 'boolean') {
                const newOptions = {
                    skipRootChangelog: !options.rootChangelog,
                };
                /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
                const { rootChangelog } = options, otherOptions = tslib_1.__rest(options, ["rootChangelog"]);
                (0, devkit_1.updateProjectConfiguration)(tree, projectName, Object.assign(Object.assign({}, project), { targets: Object.assign(Object.assign({}, project.targets), { version: {
                            executor: '@jscutlery/semver:version',
                            options: Object.assign(Object.assign({}, otherOptions), newOptions),
                        } }) }));
            }
        }
    });
}
exports.default = migrate;
//# sourceMappingURL=index.js.map
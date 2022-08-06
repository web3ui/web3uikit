"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.removeSchematic = exports.removeGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const check_dependencies_1 = require("./lib/check-dependencies");
const check_targets_1 = require("./lib/check-targets");
const remove_project_1 = require("./lib/remove-project");
const update_tsconfig_1 = require("./lib/update-tsconfig");
const remove_project_config_1 = require("./lib/remove-project-config");
const update_jest_config_1 = require("./lib/update-jest-config");
function removeGenerator(tree, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const project = (0, devkit_1.readProjectConfiguration)(tree, schema.projectName);
        yield (0, check_dependencies_1.checkDependencies)(tree, schema);
        (0, check_targets_1.checkTargets)(tree, schema);
        (0, update_jest_config_1.updateJestConfig)(tree, schema, project);
        (0, remove_project_config_1.removeProjectConfig)(tree, schema);
        (0, remove_project_1.removeProject)(tree, project);
        (0, update_tsconfig_1.updateTsconfig)(tree, schema, project);
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
    });
}
exports.removeGenerator = removeGenerator;
exports.default = removeGenerator;
exports.removeSchematic = (0, devkit_1.convertNxGenerator)(removeGenerator);
//# sourceMappingURL=remove.js.map
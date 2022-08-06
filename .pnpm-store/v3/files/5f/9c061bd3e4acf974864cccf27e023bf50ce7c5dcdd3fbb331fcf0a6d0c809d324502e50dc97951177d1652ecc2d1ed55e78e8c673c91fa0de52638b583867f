"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.moveSchematic = exports.moveGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const check_destination_1 = require("./lib/check-destination");
const move_project_1 = require("./lib/move-project");
const update_cypress_json_1 = require("./lib/update-cypress-json");
const update_imports_1 = require("./lib/update-imports");
const update_jest_config_1 = require("./lib/update-jest-config");
const update_storybook_config_1 = require("./lib/update-storybook-config");
const update_implicit_dependencies_1 = require("./lib/update-implicit-dependencies");
const update_project_root_files_1 = require("./lib/update-project-root-files");
const update_default_project_1 = require("./lib/update-default-project");
const update_eslintrc_json_1 = require("./lib/update-eslintrc-json");
const move_project_configuration_1 = require("./lib/move-project-configuration");
const update_build_targets_1 = require("./lib/update-build-targets");
const update_readme_1 = require("./lib/update-readme");
const update_package_json_1 = require("./lib/update-package-json");
const normalize_schema_1 = require("./lib/normalize-schema");
function moveGenerator(tree, rawSchema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, rawSchema.projectName);
        (0, check_destination_1.checkDestination)(tree, rawSchema, projectConfig);
        const schema = (0, normalize_schema_1.normalizeSchema)(tree, rawSchema, projectConfig);
        (0, move_project_configuration_1.moveProjectConfiguration)(tree, schema, projectConfig);
        (0, move_project_1.moveProject)(tree, schema, projectConfig); // we MUST move the project first, if we don't we get a "This should never happen" error 🤦‍♀️
        (0, update_imports_1.updateImports)(tree, schema, projectConfig);
        (0, update_project_root_files_1.updateProjectRootFiles)(tree, schema, projectConfig);
        (0, update_cypress_json_1.updateCypressJson)(tree, schema, projectConfig);
        (0, update_jest_config_1.updateJestConfig)(tree, schema, projectConfig);
        (0, update_storybook_config_1.updateStorybookConfig)(tree, schema, projectConfig);
        (0, update_eslintrc_json_1.updateEslintrcJson)(tree, schema, projectConfig);
        (0, update_readme_1.updateReadme)(tree, schema);
        (0, update_package_json_1.updatePackageJson)(tree, schema);
        (0, update_build_targets_1.updateBuildTargets)(tree, schema);
        (0, update_default_project_1.updateDefaultProject)(tree, schema);
        (0, update_implicit_dependencies_1.updateImplicitDependencies)(tree, schema);
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(tree);
        }
    });
}
exports.moveGenerator = moveGenerator;
exports.default = moveGenerator;
exports.moveSchematic = (0, devkit_1.convertNxGenerator)(moveGenerator);
//# sourceMappingURL=move.js.map
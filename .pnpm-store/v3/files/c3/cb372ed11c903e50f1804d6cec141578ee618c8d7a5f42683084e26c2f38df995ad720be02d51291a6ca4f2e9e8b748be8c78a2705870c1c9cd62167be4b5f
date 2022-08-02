"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.convertToNxProjectSchematic = exports.convertToNxProjectGenerator = exports.validateSchema = exports.SCHEMA_OPTIONS_ARE_MUTUALLY_EXCLUSIVE = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const enquirer_1 = require("enquirer");
const devkit_1 = require("@nrwl/devkit");
const get_project_configuration_path_1 = require("./utils/get-project-configuration-path");
exports.SCHEMA_OPTIONS_ARE_MUTUALLY_EXCLUSIVE = '--project and --all are mutually exclusive';
function validateSchema(schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        if (schema.project && schema.all) {
            throw exports.SCHEMA_OPTIONS_ARE_MUTUALLY_EXCLUSIVE;
        }
        if (!schema.project && !schema.all) {
            schema.project = (yield (0, enquirer_1.prompt)([
                {
                    message: 'What project should be converted?',
                    type: 'input',
                    name: 'project',
                },
            ])).project;
        }
    });
}
exports.validateSchema = validateSchema;
function convertToNxProjectGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const workspace = (0, devkit_1.readWorkspaceConfiguration)(host);
        if (workspace.version < 2) {
            devkit_1.logger.error(`
NX Only workspaces with version 2+ support project.json files.
To upgrade change the version number at the top of ${(0, devkit_1.getWorkspacePath)(host)} and run 'nx format'.
`);
            throw new Error('v2+ Required');
        }
        yield validateSchema(schema);
        const projects = schema.all
            ? (0, devkit_1.getProjects)(host).entries()
            : [[schema.project, (0, devkit_1.readProjectConfiguration)(host, schema.project)]];
        for (const [project, configuration] of projects) {
            const configPath = (0, get_project_configuration_path_1.getProjectConfigurationPath)(configuration);
            if (host.exists(configPath)) {
                devkit_1.logger.warn(`Skipping ${project} since ${configPath} already exists.`);
                continue;
            }
            delete configuration.root;
            (0, devkit_1.writeJson)(host, configPath, configuration);
            (0, devkit_1.updateJson)(host, (0, devkit_1.getWorkspacePath)(host), (value) => {
                value.projects[project] = (0, devkit_1.normalizePath)((0, path_1.dirname)(configPath));
                return value;
            });
        }
        if (!schema.skipFormat) {
            yield (0, devkit_1.formatFiles)(host);
        }
    });
}
exports.convertToNxProjectGenerator = convertToNxProjectGenerator;
exports.default = convertToNxProjectGenerator;
exports.convertToNxProjectSchematic = (0, devkit_1.convertNxGenerator)(convertToNxProjectGenerator);
//# sourceMappingURL=convert-to-nx-project.js.map
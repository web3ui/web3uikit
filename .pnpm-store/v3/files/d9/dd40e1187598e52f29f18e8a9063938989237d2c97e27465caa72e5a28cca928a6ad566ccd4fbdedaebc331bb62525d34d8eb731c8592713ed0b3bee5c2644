"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.runCommandsSchematic = exports.runCommandsGenerator = void 0;
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
function runCommandsGenerator(host, schema) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const project = (0, devkit_1.readProjectConfiguration)(host, schema.project);
        project.targets = project.targets || {};
        project.targets[schema.name] = {
            executor: 'nx:run-commands',
            outputs: schema.outputs
                ? schema.outputs.split(',').map((s) => s.trim())
                : [],
            options: {
                command: schema.command,
                cwd: schema.cwd,
                envFile: schema.envFile,
            },
        };
        (0, devkit_1.updateProjectConfiguration)(host, schema.project, project);
        yield (0, devkit_1.formatFiles)(host);
    });
}
exports.runCommandsGenerator = runCommandsGenerator;
exports.default = runCommandsGenerator;
exports.runCommandsSchematic = (0, devkit_1.convertNxGenerator)(runCommandsGenerator);
//# sourceMappingURL=run-commands.js.map
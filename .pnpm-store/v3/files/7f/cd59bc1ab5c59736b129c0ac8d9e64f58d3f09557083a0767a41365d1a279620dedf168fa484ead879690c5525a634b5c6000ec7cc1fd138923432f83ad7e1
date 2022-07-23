"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateEslintrcJson = void 0;
const devkit_1 = require("@nrwl/devkit");
const path_1 = require("path");
function offsetFilePath(project, pathToFile, offset) {
    if (!pathToFile.startsWith('..')) {
        // not a relative path
        return pathToFile;
    }
    const pathFromRoot = (0, path_1.join)(project.root, pathToFile);
    return (0, path_1.join)(offset, pathFromRoot);
}
/**
 * Update the .eslintrc file of the project if it exists.
 *
 * @param schema The options provided to the schematic
 */
function updateEslintrcJson(tree, schema, project) {
    const eslintRcPath = (0, path_1.join)(schema.relativeToRootDestination, '.eslintrc.json');
    if (!tree.exists(eslintRcPath)) {
        // no .eslintrc found. nothing to do
        return;
    }
    const offset = (0, devkit_1.offsetFromRoot)(schema.relativeToRootDestination);
    (0, devkit_1.updateJson)(tree, eslintRcPath, (eslintRcJson) => {
        var _a;
        if (typeof eslintRcJson.extends === 'string') {
            eslintRcJson.extends = offsetFilePath(project, eslintRcJson.extends, offset);
        }
        else {
            eslintRcJson.extends = eslintRcJson.extends.map((extend) => offsetFilePath(project, extend, offset));
        }
        (_a = eslintRcJson.overrides) === null || _a === void 0 ? void 0 : _a.forEach((o) => {
            var _a;
            if ((_a = o.parserOptions) === null || _a === void 0 ? void 0 : _a.project) {
                o.parserOptions.project = [
                    `${schema.relativeToRootDestination}/tsconfig.*?.json`,
                ];
            }
        });
        return eslintRcJson;
    });
}
exports.updateEslintrcJson = updateEslintrcJson;
//# sourceMappingURL=update-eslintrc-json.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.maybeJs = exports.updateTsConfigsToJs = exports.toJS = void 0;
const typescript_1 = require("typescript");
const schematics_1 = require("@angular-devkit/schematics");
const core_1 = require("@angular-devkit/core");
const ast_utils_1 = require("../ast-utils");
function toJS() {
    return (0, schematics_1.chain)([
        (0, schematics_1.forEach)((0, schematics_1.when)((path) => path.endsWith('.ts') || path.endsWith('.tsx'), (entry) => {
            const original = entry.content.toString('utf-8');
            const result = (0, typescript_1.transpile)(original, {
                allowJs: true,
                jsx: typescript_1.JsxEmit.Preserve,
                target: typescript_1.ScriptTarget.ESNext,
            });
            return {
                content: Buffer.from(result, 'utf-8'),
                path: (0, core_1.normalize)(entry.path.replace(/\.tsx?$/, '.js')),
            };
        })),
    ]);
}
exports.toJS = toJS;
function updateTsConfigsToJs(options) {
    const paths = {
        tsConfig: (0, core_1.normalize)(`${options.projectRoot}/tsconfig.json`),
        tsConfigLib: (0, core_1.normalize)(`${options.projectRoot}/tsconfig.lib.json`),
        tsConfigApp: (0, core_1.normalize)(`${options.projectRoot}/tsconfig.app.json`),
    };
    const getProjectType = (tree) => {
        if (tree.exists(paths.tsConfigApp)) {
            return 'application';
        }
        if (tree.exists(paths.tsConfigLib)) {
            return 'library';
        }
        throw new schematics_1.SchematicsException(`project is missing tsconfig.lib.json or tsconfig.app.json`);
    };
    const getConfigFileForUpdate = (tree) => {
        const projectType = getProjectType(tree);
        if (projectType === 'library') {
            return paths.tsConfigLib;
        }
        if (projectType === 'application') {
            return paths.tsConfigApp;
        }
    };
    return (0, schematics_1.chain)([
        (0, ast_utils_1.updateJsonInTree)(paths.tsConfig, (json) => {
            if (json.compilerOptions) {
                json.compilerOptions.allowJs = true;
            }
            else {
                json.compilerOptions = { allowJs: true };
            }
            return json;
        }),
        (tree) => {
            const updateConfigPath = getConfigFileForUpdate(tree);
            return (0, ast_utils_1.updateJsonInTree)(updateConfigPath, (json) => {
                json.include = uniq([...json.include, '**/*.js']);
                json.exclude = uniq([...json.exclude, '**/*.spec.js']);
                return json;
            });
        },
    ]);
}
exports.updateTsConfigsToJs = updateTsConfigsToJs;
const uniq = (value) => [...new Set(value)];
function maybeJs(options, path) {
    return options.js && (path.endsWith('.ts') || path.endsWith('.tsx'))
        ? path.replace(/\.tsx?$/, '.js')
        : path;
}
exports.maybeJs = maybeJs;
//# sourceMappingURL=to-js.js.map
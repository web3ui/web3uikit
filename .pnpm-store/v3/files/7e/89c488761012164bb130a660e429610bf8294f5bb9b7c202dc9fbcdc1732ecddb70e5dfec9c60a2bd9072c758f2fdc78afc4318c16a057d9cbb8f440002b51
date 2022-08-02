"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateImports = void 0;
const devkit_1 = require("@nrwl/devkit");
const ts = require("typescript");
const typescript_1 = require("../../../utilities/typescript");
const find_nodes_1 = require("../../../utilities/typescript/find-nodes");
const utils_1 = require("./utils");
/**
 * Updates all the imports in the workspace and modifies the tsconfig appropriately.
 *
 * @param schema The options provided to the schematic
 */
function updateImports(tree, schema, project) {
    if (project.projectType === 'application') {
        // These shouldn't be imported anywhere?
        return;
    }
    const { npmScope, libsDir } = (0, devkit_1.getWorkspaceLayout)(tree);
    const projects = (0, devkit_1.getProjects)(tree);
    // use the source root to find the from location
    // this attempts to account for libs that have been created with --importPath
    const tsConfigPath = (0, typescript_1.getRootTsConfigPathInTree)(tree);
    let tsConfig;
    let fromPath;
    if (tree.exists(tsConfigPath)) {
        tsConfig = JSON.parse(tree.read(tsConfigPath).toString('utf-8'));
        fromPath = Object.keys(tsConfig.compilerOptions.paths).find((path) => tsConfig.compilerOptions.paths[path].some((x) => x.startsWith(project.sourceRoot)));
    }
    const projectRef = {
        from: fromPath ||
            (0, utils_1.normalizeSlashes)(`@${npmScope}/${project.root.slice(libsDir.length + 1)}`),
        to: schema.importPath,
    };
    if (schema.updateImportPath) {
        const replaceProjectRef = new RegExp(projectRef.from, 'g');
        for (const [name, definition] of Array.from(projects.entries())) {
            if (name === schema.projectName) {
                continue;
            }
            (0, devkit_1.visitNotIgnoredFiles)(tree, definition.root, (file) => {
                const contents = tree.read(file, 'utf-8');
                replaceProjectRef.lastIndex = 0;
                if (!replaceProjectRef.test(contents)) {
                    return;
                }
                updateImportPaths(tree, file, projectRef.from, projectRef.to);
            });
        }
    }
    const projectRoot = {
        from: project.root.slice(libsDir.length + 1),
        to: schema.destination,
    };
    if (tsConfig) {
        const path = tsConfig.compilerOptions.paths[projectRef.from];
        if (!path) {
            throw new Error([
                `unable to find "${projectRef.from}" in`,
                `${tsConfigPath} compilerOptions.paths`,
            ].join(' '));
        }
        const updatedPath = path.map((x) => x.replace(new RegExp(projectRoot.from, 'g'), projectRoot.to));
        if (schema.updateImportPath) {
            tsConfig.compilerOptions.paths[projectRef.to] = updatedPath;
            delete tsConfig.compilerOptions.paths[projectRef.from];
        }
        else {
            tsConfig.compilerOptions.paths[projectRef.from] = updatedPath;
        }
        (0, devkit_1.writeJson)(tree, tsConfigPath, tsConfig);
    }
}
exports.updateImports = updateImports;
/**
 * Changes imports in a file from one import to another
 */
function updateImportPaths(tree, path, from, to) {
    const contents = tree.read(path, 'utf-8');
    const sourceFile = ts.createSourceFile(path, contents, ts.ScriptTarget.Latest, true);
    // Apply changes on the various types of imports
    const newContents = (0, devkit_1.applyChangesToString)(contents, [
        ...updateImportDeclarations(sourceFile, from, to),
        ...updateDynamicImports(sourceFile, from, to),
    ]);
    tree.write(path, newContents);
}
/**
 * Update the module specifiers on static imports
 */
function updateImportDeclarations(sourceFile, from, to) {
    const importDecls = (0, find_nodes_1.findNodes)(sourceFile, ts.SyntaxKind.ImportDeclaration);
    const changes = [];
    for (const { moduleSpecifier } of importDecls) {
        if (ts.isStringLiteral(moduleSpecifier)) {
            changes.push(...updateModuleSpecifier(moduleSpecifier, from, to));
        }
    }
    return changes;
}
/**
 * Update the module specifiers on dynamic imports and require statements
 */
function updateDynamicImports(sourceFile, from, to) {
    const expressions = (0, find_nodes_1.findNodes)(sourceFile, ts.SyntaxKind.CallExpression);
    const changes = [];
    for (const { expression, arguments: args } of expressions) {
        const moduleSpecifier = args[0];
        // handle dynamic import statements
        if (expression.kind === ts.SyntaxKind.ImportKeyword &&
            moduleSpecifier &&
            ts.isStringLiteral(moduleSpecifier)) {
            changes.push(...updateModuleSpecifier(moduleSpecifier, from, to));
        }
        // handle require statements
        if (ts.isIdentifier(expression) &&
            expression.text === 'require' &&
            moduleSpecifier &&
            ts.isStringLiteral(moduleSpecifier)) {
            changes.push(...updateModuleSpecifier(moduleSpecifier, from, to));
        }
    }
    return changes;
}
/**
 * Replace the old module specifier with a the new path
 */
function updateModuleSpecifier(moduleSpecifier, from, to) {
    if (moduleSpecifier.text === from ||
        moduleSpecifier.text.startsWith(`${from}/`)) {
        return [
            {
                type: devkit_1.ChangeType.Delete,
                start: moduleSpecifier.getStart() + 1,
                length: moduleSpecifier.text.length,
            },
            {
                type: devkit_1.ChangeType.Insert,
                index: moduleSpecifier.getStart() + 1,
                text: moduleSpecifier.text.replace(new RegExp(from, 'g'), to),
            },
        ];
    }
    else {
        return [];
    }
}
//# sourceMappingURL=update-imports.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRelativeImportPath = exports.getBarrelEntryPointProjectNode = exports.getBarrelEntryPointByImportScope = void 0;
const devkit_1 = require("@nrwl/devkit");
const typescript_1 = require("@nrwl/workspace/src/utilities/typescript");
const fs_1 = require("fs");
const path_1 = require("path");
const ts = require("typescript");
const devkit_2 = require("@nrwl/devkit");
const devkit_3 = require("@nrwl/devkit");
function tryReadBaseJson() {
    try {
        return (0, devkit_1.readJsonFile)((0, devkit_1.joinPathFragments)(devkit_3.workspaceRoot, 'tsconfig.base.json'));
    }
    catch (e) {
        devkit_2.logger.warn(`Error reading "tsconfig.base.json": \n${JSON.stringify(e)}`);
        return null;
    }
}
/**
 *
 * @param importScope like `@myorg/somelib`
 * @returns
 */
function getBarrelEntryPointByImportScope(importScope) {
    var _a;
    const tsConfigBase = tryReadBaseJson();
    return ((_a = tsConfigBase === null || tsConfigBase === void 0 ? void 0 : tsConfigBase.compilerOptions) === null || _a === void 0 ? void 0 : _a.paths[importScope]) || null;
}
exports.getBarrelEntryPointByImportScope = getBarrelEntryPointByImportScope;
function getBarrelEntryPointProjectNode(importScope) {
    var _a;
    const tsConfigBase = tryReadBaseJson();
    if ((_a = tsConfigBase === null || tsConfigBase === void 0 ? void 0 : tsConfigBase.compilerOptions) === null || _a === void 0 ? void 0 : _a.paths) {
        const potentialEntryPoints = Object.keys(tsConfigBase.compilerOptions.paths)
            .filter((entry) => {
            const sourceFolderPaths = tsConfigBase.compilerOptions.paths[entry];
            return sourceFolderPaths.some((sourceFolderPath) => {
                return sourceFolderPath.includes(importScope.data.root);
            });
        })
            .map((entry) => tsConfigBase.compilerOptions.paths[entry].map((x) => ({
            path: x,
            importScope: entry,
        })));
        return potentialEntryPoints.flat();
    }
    return null;
}
exports.getBarrelEntryPointProjectNode = getBarrelEntryPointProjectNode;
function hasMemberExport(exportedMember, filePath) {
    const fileContent = (0, fs_1.readFileSync)(filePath, 'utf8');
    // use the TypeScript AST to find the path to the file where exportedMember is defined
    const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest, true);
    // search whether there is already an export with our node
    return ((0, typescript_1.findNodes)(sourceFile, ts.SyntaxKind.Identifier).filter((identifier) => identifier.text === exportedMember).length > 0);
}
function getRelativeImportPath(exportedMember, filePath, basePath) {
    var _a;
    const fileContent = (0, fs_1.readFileSync)(filePath, 'utf8');
    // use the TypeScript AST to find the path to the file where exportedMember is defined
    const sourceFile = ts.createSourceFile(filePath, fileContent, ts.ScriptTarget.Latest, true);
    // Search in the current file whether there's an export already!
    const memberNodes = (0, typescript_1.findNodes)(sourceFile, ts.SyntaxKind.Identifier).filter((identifier) => identifier.text === exportedMember);
    let hasExport = false;
    for (const memberNode of memberNodes || []) {
        if (memberNode) {
            // recursively navigate upwards to find the ExportKey modifier
            let parent = memberNode;
            do {
                parent = parent.parent;
                if (parent) {
                    // if we are inside a parameter list or decorator or param assignment
                    // then this is not what we're searching for, so break :)
                    if (parent.kind === ts.SyntaxKind.Parameter ||
                        parent.kind === ts.SyntaxKind.PropertyAccessExpression ||
                        parent.kind === ts.SyntaxKind.TypeReference ||
                        parent.kind === ts.SyntaxKind.HeritageClause ||
                        parent.kind === ts.SyntaxKind.Decorator) {
                        hasExport = false;
                        break;
                    }
                    // if our identifier is within an ExportDeclaration but is not just
                    // a re-export of some other module, we're good
                    if (parent.kind === ts.SyntaxKind.ExportDeclaration &&
                        !parent.moduleSpecifier) {
                        hasExport = true;
                        break;
                    }
                    if (parent.modifiers &&
                        parent.modifiers.find((modifier) => modifier.kind === ts.SyntaxKind.ExportKeyword)) {
                        /**
                         * if we get to a function export declaration we need to verify whether the
                         * exported function is actually the member we are searching for. Otherwise
                         * we might end up finding a function that just uses our searched identifier
                         * internally.
                         *
                         * Example: assume we try to find a constant member: `export const SOME_CONSTANT = 'bla'`
                         *
                         * Then we might end up in a file that uses it like
                         *
                         * import { SOME_CONSTANT } from '@myorg/samelib'
                         *
                         * export function someFunction() {
                         *  return `Hi, ${SOME_CONSTANT}`
                         * }
                         *
                         * We want to avoid accidentally picking the someFunction export since we're searching upwards
                         * starting from `SOME_CONSTANT` identifier usages.
                         */
                        if (parent.kind === ts.SyntaxKind.FunctionDeclaration) {
                            const parentName = (_a = parent.name) === null || _a === void 0 ? void 0 : _a.text;
                            if (parentName === exportedMember) {
                                hasExport = true;
                                break;
                            }
                        }
                        else {
                            hasExport = true;
                            break;
                        }
                    }
                }
            } while (!!parent);
        }
        if (hasExport) {
            break;
        }
    }
    if (hasExport) {
        // we found the file, now grab the path
        return filePath;
    }
    // if we didn't find an export, let's try to follow
    // all export declarations and see whether any of those
    // exports the node we're searching for
    const exportDeclarations = (0, typescript_1.findNodes)(sourceFile, ts.SyntaxKind.ExportDeclaration);
    for (const exportDeclaration of exportDeclarations) {
        if (exportDeclaration.moduleSpecifier) {
            // verify whether the export declaration we're looking at is a named export
            // cause in that case we need to check whether our searched member is
            // part of the exports
            if (exportDeclaration.exportClause &&
                (0, typescript_1.findNodes)(exportDeclaration, ts.SyntaxKind.Identifier).filter((identifier) => identifier.text === exportedMember).length === 0) {
                continue;
            }
            const modulePath = exportDeclaration.moduleSpecifier.text;
            let moduleFilePath = (0, devkit_1.joinPathFragments)('./', (0, path_1.dirname)(filePath), `${modulePath}.ts`);
            if (!(0, fs_1.existsSync)(moduleFilePath)) {
                // might be a index.ts
                moduleFilePath = (0, devkit_1.joinPathFragments)('./', (0, path_1.dirname)(filePath), `${modulePath}/index.ts`);
            }
            if (hasMemberExport(exportedMember, moduleFilePath)) {
                const foundFilePath = getRelativeImportPath(exportedMember, moduleFilePath, basePath);
                if (foundFilePath) {
                    return foundFilePath;
                }
            }
        }
    }
    return null;
}
exports.getRelativeImportPath = getRelativeImportPath;
//# sourceMappingURL=ast-utils.js.map
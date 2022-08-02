"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const ast_types_1 = require("ast-types");
const traverse_1 = require("../utils/traverse");
const resolve_1 = __importDefault(require("resolve"));
const path_1 = require("path");
const babelParser_1 = __importDefault(require("../babelParser"));
const fs_1 = __importDefault(require("fs"));
function defaultLookupModule(filename, basedir) {
    return resolve_1.default.sync(filename, {
        basedir,
        extensions: ['.js', '.jsx', '.mjs', '.ts', '.tsx'],
    });
}
// Factory for the resolveImports importer
function makeFsImporter(lookupModule = defaultLookupModule, cache = new Map()) {
    return resolveImportedValue;
    function resolveImportedValue(path, name, seen = new Set()) {
        // Bail if no filename was provided for the current source file.
        // Also never traverse into react itself.
        const source = path.node.source.value;
        const options = getOptions(path);
        if (!options || !options.filename || source === 'react') {
            return null;
        }
        // Resolve the imported module using the Node resolver
        const basedir = (0, path_1.dirname)(options.filename);
        let resolvedSource;
        try {
            resolvedSource = lookupModule(source, basedir);
        }
        catch (err) {
            return null;
        }
        // Prevent recursive imports
        if (seen.has(resolvedSource)) {
            return null;
        }
        seen.add(resolvedSource);
        let nextPath = cache.get(resolvedSource);
        if (!nextPath) {
            // Read and parse the code
            const src = fs_1.default.readFileSync(resolvedSource, 'utf8');
            const parseOptions = {
                ...options,
                parserOptions: {},
                filename: resolvedSource,
            };
            const parser = (0, babelParser_1.default)(parseOptions);
            const ast = parser.parse(src);
            ast.__src = src;
            nextPath = new ast_types_1.NodePath(ast).get('program');
            cache.set(resolvedSource, nextPath);
        }
        return findExportedValue(nextPath, name, seen);
    }
    // Find the root Program node, which we attached our options too in babelParser.js
    function getOptions(path) {
        while (!ast_types_1.namedTypes.Program.check(path.node)) {
            path = path.parentPath;
        }
        // @ts-ignore
        return path.node.options || {};
    }
    // Traverses the program looking for an export that matches the requested name
    function findExportedValue(programPath, name, seen) {
        let resultPath = null;
        (0, traverse_1.traverseShallow)(programPath, {
            visitExportNamedDeclaration(path) {
                const { declaration, specifiers, source } = path.node;
                if (declaration && declaration.id && declaration.id.name === name) {
                    resultPath = path.get('declaration');
                }
                else if (declaration && declaration.declarations) {
                    path.get('declaration', 'declarations').each((declPath) => {
                        const decl = declPath.node;
                        // TODO: ArrayPattern and ObjectPattern
                        if (ast_types_1.namedTypes.Identifier.check(decl.id) &&
                            decl.id.name === name &&
                            decl.init) {
                            resultPath = declPath.get('init');
                        }
                    });
                }
                else if (specifiers) {
                    path.get('specifiers').each((specifierPath) => {
                        if (specifierPath.node.exported.name === name) {
                            if (source) {
                                const local = specifierPath.node.local.name;
                                resultPath = resolveImportedValue(path, local, seen);
                            }
                            else {
                                resultPath = specifierPath.get('local');
                            }
                        }
                    });
                }
                return false;
            },
            visitExportDefaultDeclaration(path) {
                if (name === 'default') {
                    resultPath = path.get('declaration');
                }
                return false;
            },
            visitExportAllDeclaration(path) {
                const resolvedPath = resolveImportedValue(path, name, seen);
                if (resolvedPath) {
                    resultPath = resolvedPath;
                }
                return false;
            },
        });
        return resultPath;
    }
}
exports.default = makeFsImporter;

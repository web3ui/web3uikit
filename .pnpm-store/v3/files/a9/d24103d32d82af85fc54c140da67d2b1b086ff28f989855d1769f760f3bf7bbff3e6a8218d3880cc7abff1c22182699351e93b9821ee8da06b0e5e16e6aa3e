"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.inferNamedImports = exports.assertImportExists = exports.resolveImport = exports.requireFrom = exports.resolveMdxImport = exports.requireMdx = void 0;
const resolve_1 = __importDefault(require("resolve"));
const importCache = {};
function requireMdx(cwd) {
    return require(resolveMdxImport(cwd));
}
exports.requireMdx = requireMdx;
function resolveMdxImport(cwd) {
    return resolveImport('@mdx-js/mdx', cwd) || require.resolve('@mdx-js/mdx');
}
exports.resolveMdxImport = resolveMdxImport;
function requireFrom(name, cwd) {
    return require(resolveImport(name, cwd, true));
}
exports.requireFrom = requireFrom;
function resolveImport(name, cwd, throwOnMissing) {
    const cacheKey = cwd + '\0' + name;
    if (!importCache[cacheKey]) {
        try {
            importCache[cacheKey] = resolve_1.default.sync(name, { basedir: cwd });
        }
        catch (e) {
            if (throwOnMissing) {
                throw new Error(`[vite-plugin-mdx] "${name}" must be installed`);
            }
        }
    }
    return importCache[cacheKey];
}
exports.resolveImport = resolveImport;
/**
 * Throw an error if the given `name` cannot be found from `cwd`.
 * Otherwise, return the `name`.
 */
function assertImportExists(name, cwd) {
    return resolveImport(name, cwd, true) && name;
}
exports.assertImportExists = assertImportExists;
function inferNamedImports(root) {
    return resolveImport('preact', root)
        ? { preact: ['h'], '@mdx-js/preact': ['mdx'] }
        : { react: 'React', '@mdx-js/react': ['mdx'] };
}
exports.inferNamedImports = inferNamedImports;
//# sourceMappingURL=imports.js.map
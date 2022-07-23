"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findMatchingProjectForPath = exports.TargetProjectLocator = void 0;
const typescript_1 = require("./typescript");
const fileutils_1 = require("./fileutils");
const path_1 = require("path");
const app_root_1 = require("./app-root");
const fs_1 = require("fs");
const json_1 = require("./json");
class TargetProjectLocator {
    constructor(nodes, externalNodes) {
        var _a, _b;
        this.nodes = nodes;
        this.externalNodes = externalNodes;
        this.projectRootMappings = createProjectRootMappings(this.nodes);
        this.npmProjects = this.externalNodes
            ? Object.values(this.externalNodes)
            : [];
        this.tsConfig = this.getRootTsConfig();
        this.paths = (_b = (_a = this.tsConfig.config) === null || _a === void 0 ? void 0 : _a.compilerOptions) === null || _b === void 0 ? void 0 : _b.paths;
        this.typescriptResolutionCache = new Map();
        this.npmResolutionCache = new Map();
    }
    /**
     * Find a project based on its import
     *
     * @param importExpr
     * @param filePath
     */
    findProjectWithImport(importExpr, filePath) {
        const normalizedImportExpr = importExpr.split('#')[0];
        if ((0, fileutils_1.isRelativePath)(normalizedImportExpr)) {
            const resolvedModule = path_1.posix.join((0, path_1.dirname)(filePath), normalizedImportExpr);
            return this.findProjectOfResolvedModule(resolvedModule);
        }
        const paths = this.findPaths(normalizedImportExpr);
        if (paths) {
            for (let p of paths) {
                const maybeResolvedProject = this.findProjectOfResolvedModule(p);
                if (maybeResolvedProject) {
                    return maybeResolvedProject;
                }
            }
        }
        // try to find npm package before using expensive typescript resolution
        const npmProject = this.findNpmPackage(normalizedImportExpr);
        if (npmProject) {
            return npmProject;
        }
        if (this.tsConfig.config) {
            // TODO(meeroslav): this block is probably obsolete
            // and existed only because of the incomplete `paths` matching
            // if import cannot be matched using tsconfig `paths` the compilation would fail anyway
            const resolvedProject = this.resolveImportWithTypescript(normalizedImportExpr, filePath);
            if (resolvedProject) {
                return resolvedProject;
            }
        }
        // nothing found, cache for later
        this.npmResolutionCache.set(normalizedImportExpr, undefined);
        return null;
    }
    /**
     * Return file paths matching the import relative to the repo root
     * @param normalizedImportExpr
     * @returns
     */
    findPaths(normalizedImportExpr) {
        if (!this.paths) {
            return undefined;
        }
        if (this.paths[normalizedImportExpr]) {
            return this.paths[normalizedImportExpr];
        }
        const wildcardPath = Object.keys(this.paths).find((path) => path.endsWith('/*') &&
            (normalizedImportExpr.startsWith(path.replace(/\*$/, '')) ||
                normalizedImportExpr === path.replace(/\/\*$/, '')));
        if (wildcardPath) {
            return this.paths[wildcardPath];
        }
        return undefined;
    }
    resolveImportWithTypescript(normalizedImportExpr, filePath) {
        let resolvedModule;
        if (this.typescriptResolutionCache.has(normalizedImportExpr)) {
            resolvedModule = this.typescriptResolutionCache.get(normalizedImportExpr);
        }
        else {
            resolvedModule = (0, typescript_1.resolveModuleByImport)(normalizedImportExpr, filePath, this.tsConfig.absolutePath);
            this.typescriptResolutionCache.set(normalizedImportExpr, resolvedModule ? resolvedModule : null);
        }
        // TODO: vsavkin temporary workaround. Remove it once we reworking handling of npm packages.
        if (resolvedModule && resolvedModule.indexOf('node_modules/') === -1) {
            const resolvedProject = this.findProjectOfResolvedModule(resolvedModule);
            if (resolvedProject) {
                return resolvedProject;
            }
        }
        return;
    }
    findNpmPackage(npmImport) {
        if (this.npmResolutionCache.has(npmImport)) {
            return this.npmResolutionCache.get(npmImport);
        }
        else {
            const pkg = this.npmProjects.find((pkg) => npmImport === pkg.data.packageName ||
                npmImport.startsWith(`${pkg.data.packageName}/`));
            if (pkg) {
                this.npmResolutionCache.set(npmImport, pkg.name);
                return pkg.name;
            }
        }
    }
    findProjectOfResolvedModule(resolvedModule) {
        const normalizedResolvedModule = resolvedModule.startsWith('./')
            ? resolvedModule.substring(2)
            : resolvedModule;
        const importedProject = this.findMatchingProjectFiles(normalizedResolvedModule);
        return importedProject ? importedProject.name : void 0;
    }
    getAbsolutePath(path) {
        return (0, path_1.join)(app_root_1.workspaceRoot, path);
    }
    getRootTsConfig() {
        const path = (0, typescript_1.getRootTsConfigFileName)();
        if (!path) {
            return {
                path: null,
                absolutePath: null,
                config: null,
            };
        }
        const absolutePath = this.getAbsolutePath(path);
        return {
            absolutePath,
            path,
            config: (0, json_1.parseJson)((0, fs_1.readFileSync)(absolutePath, 'utf8')),
        };
    }
    findMatchingProjectFiles(file) {
        const project = findMatchingProjectForPath(file, this.projectRootMappings);
        return this.nodes[project];
    }
}
exports.TargetProjectLocator = TargetProjectLocator;
function createProjectRootMappings(nodes) {
    const projectRootMappings = new Map();
    for (const projectName of Object.keys(nodes)) {
        const root = nodes[projectName].data.root;
        projectRootMappings.set(root && root.endsWith('/') ? root.substring(0, root.length - 1) : root, projectName);
    }
    return projectRootMappings;
}
/**
 * Locates a project in projectRootMap based on a file within it
 * @param filePath path that is inside of projectName
 * @param projectRootMap Map<projectRoot, projectName>
 */
function findMatchingProjectForPath(filePath, projectRootMap) {
    for (let currentPath = filePath; currentPath != (0, path_1.dirname)(currentPath); currentPath = (0, path_1.dirname)(currentPath)) {
        const p = projectRootMap.get(currentPath);
        if (p) {
            return p;
        }
    }
    return null;
}
exports.findMatchingProjectForPath = findMatchingProjectForPath;
//# sourceMappingURL=target-project-locator.js.map
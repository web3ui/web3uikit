"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rule = void 0;
const Lint = require("tslint");
const devkit_1 = require("@nrwl/devkit");
const runtime_lint_utils_1 = require("../utils/runtime-lint-utils");
const path_1 = require("path");
const target_project_locator_1 = require("nx/src/utils/target-project-locator");
const graph_utils_1 = require("../utils/graph-utils");
const fileutils_1 = require("../utilities/fileutils");
const devkit_2 = require("@nrwl/devkit");
class Rule extends Lint.Rules.AbstractRule {
    constructor(options, projectPath, projectGraph, targetProjectLocator, workspaceLayout) {
        super(options);
        this.projectPath = projectPath;
        this.projectGraph = projectGraph;
        this.targetProjectLocator = targetProjectLocator;
        this.workspaceLayout = workspaceLayout;
        if (!projectPath) {
            this.projectPath = (0, path_1.normalize)(devkit_1.workspaceRoot);
            if (!global.projectGraph) {
                const nxJson = (0, devkit_2.readNxJson)();
                global.workspaceLayout = nxJson.workspaceLayout;
                /**
                 * Because there are a number of ways in which the rule can be invoked (executor vs TSLint CLI vs IDE Plugin),
                 * the ProjectGraph may or may not exist by the time the lint rule is invoked for the first time.
                 */
                try {
                    global.projectGraph = (0, runtime_lint_utils_1.mapProjectGraphFiles)((0, devkit_2.readCachedProjectGraph)());
                }
                catch (_a) { }
            }
            this.workspaceLayout = global.workspaceLayout;
            this.projectGraph = global.projectGraph;
            if (!global.targetProjectLocator && this.projectGraph) {
                global.targetProjectLocator = new target_project_locator_1.TargetProjectLocator(this.projectGraph.nodes, this.projectGraph.externalNodes);
            }
            this.targetProjectLocator = global.targetProjectLocator;
        }
    }
    apply(sourceFile) {
        if (!this.projectGraph)
            return [];
        return this.applyWithWalker(new EnforceModuleBoundariesWalker(sourceFile, this.getOptions(), this.projectPath, this.projectGraph, this.targetProjectLocator, this.workspaceLayout));
    }
}
exports.Rule = Rule;
class EnforceModuleBoundariesWalker extends Lint.RuleWalker {
    constructor(sourceFile, options, projectPath, projectGraph, targetProjectLocator, workspaceLayout) {
        super(sourceFile, options);
        this.projectPath = projectPath;
        this.projectGraph = projectGraph;
        this.targetProjectLocator = targetProjectLocator;
        this.workspaceLayout = workspaceLayout;
        this.enforceBuildableLibDependency = false; // for backwards compat
        this.allowCircularSelfDependency = false;
        this.allow = Array.isArray(this.getOptions()[0].allow)
            ? this.getOptions()[0].allow.map((a) => `${a}`)
            : [];
        this.depConstraints = Array.isArray(this.getOptions()[0].depConstraints)
            ? this.getOptions()[0].depConstraints
            : [];
        this.enforceBuildableLibDependency =
            this.getOptions()[0].enforceBuildableLibDependency === true;
        this.allowCircularSelfDependency =
            this.getOptions()[0].allowCircularSelfDependency === true;
    }
    visitImportDeclaration(node) {
        const imp = node.moduleSpecifier
            .getText()
            .substring(1, node.moduleSpecifier.getText().length - 1);
        // whitelisted import
        if (this.allow.some((a) => (0, runtime_lint_utils_1.matchImportWithWildcard)(a, imp))) {
            super.visitImportDeclaration(node);
            return;
        }
        const filePath = (0, runtime_lint_utils_1.getSourceFilePath)(this.getSourceFile().fileName, this.projectPath);
        const sourceProject = (0, runtime_lint_utils_1.findSourceProject)(this.projectGraph, filePath);
        if (!sourceProject) {
            super.visitImportDeclaration(node);
            return;
        }
        let targetProject = (0, runtime_lint_utils_1.getTargetProjectBasedOnRelativeImport)(imp, this.projectPath, this.projectGraph, filePath);
        // check for relative and absolute imports
        if ((targetProject && sourceProject !== targetProject) ||
            (0, runtime_lint_utils_1.isAbsoluteImportIntoAnotherProject)(imp, this.workspaceLayout)) {
            this.addFailureAt(node.getStart(), node.getWidth(), `libraries cannot be imported by a relative or absolute path, and must begin with a npm scope`);
            return;
        }
        targetProject =
            targetProject ||
                (0, runtime_lint_utils_1.findProjectUsingImport)(this.projectGraph, this.targetProjectLocator, filePath, imp);
        // If source or target are not part of an nx workspace, return.
        if (!targetProject || targetProject.type === 'npm') {
            super.visitImportDeclaration(node);
            return;
        }
        // same project => allow
        if (sourceProject === targetProject) {
            if (!this.allowCircularSelfDependency &&
                !(0, fileutils_1.isRelativePath)(imp) &&
                !(0, runtime_lint_utils_1.isAngularSecondaryEntrypoint)(this.targetProjectLocator, imp)) {
                const error = `Projects should use relative imports to import from other files within the same project. Use "./path/to/file" instead of import from "${imp}"`;
                this.addFailureAt(node.getStart(), node.getWidth(), error);
            }
            else {
                super.visitImportDeclaration(node);
            }
            return;
        }
        // check for circular dependency
        const circularPath = (0, graph_utils_1.checkCircularPath)(this.projectGraph, sourceProject, targetProject);
        if (circularPath.length !== 0) {
            const path = circularPath.reduce((acc, v) => `${acc} -> ${v.name}`, sourceProject.name);
            const circularFilePath = (0, graph_utils_1.findFilesInCircularPath)(circularPath);
            const filePaths = circularFilePath
                .map((files) => (files.length > 1 ? `[${files.join(',')}]` : files[0]))
                .reduce((acc, files) => `${acc}\n- ${files}`, `- ${filePath}`);
            const error = `Circular dependency between "${sourceProject.name}" and "${targetProject.name}" detected: ${path}\n\nCircular file chain:\n${filePaths}`;
            this.addFailureAt(node.getStart(), node.getWidth(), error);
            return;
        }
        // cannot import apps
        if (targetProject.type === 'app') {
            this.addFailureAt(node.getStart(), node.getWidth(), 'imports of apps are forbidden');
            return;
        }
        // cannot import e2e projects
        if (targetProject.type === 'e2e') {
            this.addFailureAt(node.getStart(), node.getWidth(), 'imports of e2e projects are forbidden');
            return;
        }
        // buildable-lib is not allowed to import non-buildable-lib
        if (this.enforceBuildableLibDependency === true &&
            sourceProject.type === 'lib' &&
            targetProject.type === 'lib') {
            if ((0, runtime_lint_utils_1.hasBuildExecutor)(sourceProject) && !(0, runtime_lint_utils_1.hasBuildExecutor)(targetProject)) {
                this.addFailureAt(node.getStart(), node.getWidth(), 'buildable libraries cannot import non-buildable libraries');
                return;
            }
        }
        // if we import a library using loadChildren, we should not import it using es6imports
        if ((0, runtime_lint_utils_1.onlyLoadChildren)(this.projectGraph, sourceProject.name, targetProject.name, [])) {
            this.addFailureAt(node.getStart(), node.getWidth(), 'imports of lazy-loaded libraries are forbidden');
            return;
        }
        // check that dependency constraints are satisfied
        if (this.depConstraints.length > 0) {
            const constraints = (0, runtime_lint_utils_1.findConstraintsFor)(this.depConstraints, sourceProject);
            // when no constrains found => error. Force the user to provision them.
            if (constraints.length === 0) {
                this.addFailureAt(node.getStart(), node.getWidth(), `A project without tags matching at least one constraint cannot depend on any libraries`);
                return;
            }
            for (let constraint of constraints) {
                if (constraint.onlyDependOnLibsWithTags &&
                    (0, runtime_lint_utils_1.hasNoneOfTheseTags)(targetProject, constraint.onlyDependOnLibsWithTags)) {
                    const error = `A project tagged with "${constraint.sourceTag}" can only depend on libs tagged with ${(0, runtime_lint_utils_1.stringifyTags)(constraint.onlyDependOnLibsWithTags)}`;
                    this.addFailureAt(node.getStart(), node.getWidth(), error);
                    return;
                }
                if (constraint.notDependOnLibsWithTags &&
                    constraint.notDependOnLibsWithTags.length) {
                    const projectPaths = (0, runtime_lint_utils_1.findDependenciesWithTags)(targetProject, constraint.notDependOnLibsWithTags, this.projectGraph);
                    if (projectPaths.length > 0) {
                        const error = `A project tagged with "${constraint.sourceTag}" can not depend on libs tagged with ${(0, runtime_lint_utils_1.stringifyTags)(constraint.notDependOnLibsWithTags)}\n\nViolation detected in:\n${projectPaths
                            .map((projectPath) => `- ${projectPath.map((p) => p.name).join(' -> ')}`)
                            .join('\n')}`;
                        this.addFailureAt(node.getStart(), node.getWidth(), error);
                        return;
                    }
                }
            }
        }
        super.visitImportDeclaration(node);
    }
}
//# sourceMappingURL=nxEnforceModuleBoundariesRule.js.map
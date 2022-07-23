"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJestConfig = void 0;
const devkit_1 = require("@nrwl/devkit");
const get_source_nodes_1 = require("../../../utilities/typescript/get-source-nodes");
const typescript_1 = require("typescript");
const path_1 = require("path");
function isUsingUtilityFunction(host) {
    return host.read('jest.config.ts').toString().includes('getJestProjects()');
}
/**
 * Updates the root jest config projects array and removes the project.
 */
function updateJestConfig(tree, schema, projectConfig) {
    const projectToRemove = schema.projectName;
    if (!tree.exists('jest.config.ts') ||
        !tree.exists((0, path_1.join)(projectConfig.root, 'jest.config.ts')) ||
        isUsingUtilityFunction(tree)) {
        return;
    }
    const contents = tree.read('jest.config.ts', 'utf-8');
    const sourceFile = (0, typescript_1.createSourceFile)('jest.config.ts', contents, typescript_1.ScriptTarget.Latest);
    const sourceNodes = (0, get_source_nodes_1.getSourceNodes)(sourceFile);
    const projectsAssignment = sourceNodes.find((node) => (0, typescript_1.isPropertyAssignment)(node) &&
        node.name.getText(sourceFile) === 'projects' &&
        (0, typescript_1.isArrayLiteralExpression)(node.initializer));
    if (!projectsAssignment) {
        throw Error(`Could not remove ${projectToRemove} from projects in /jest.config.ts. Please remove ${projectToRemove} from your projects.`);
    }
    const projectsArray = projectsAssignment.initializer;
    const project = projectsArray.elements.find((item) => (0, typescript_1.isStringLiteral)(item) &&
        item.text.startsWith(`<rootDir>/${projectConfig.root}`));
    if (!project) {
        console.warn(`Could not find ${projectToRemove} in projects in /jest.config.ts.`);
        return;
    }
    const previousProject = projectsArray.elements[projectsArray.elements.indexOf(project) - 1];
    const start = previousProject
        ? previousProject.getEnd()
        : project.getStart(sourceFile);
    tree.write('jest.config.ts', (0, devkit_1.applyChangesToString)(contents, [
        {
            type: devkit_1.ChangeType.Delete,
            start,
            length: project.getEnd() - start,
        },
    ]));
}
exports.updateJestConfig = updateJestConfig;
//# sourceMappingURL=update-jest-config.js.map
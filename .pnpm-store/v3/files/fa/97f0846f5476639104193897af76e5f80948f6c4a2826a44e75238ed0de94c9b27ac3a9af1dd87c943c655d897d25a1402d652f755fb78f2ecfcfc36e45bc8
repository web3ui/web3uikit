"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateJestConfig = void 0;
const path = require("path");
/**
 * Updates the project name and coverage folder in the jest.config.js if it exists
 *
 * (assume relative paths have been updated previously)
 *
 * @param schema The options provided to the schematic
 */
function updateJestConfig(tree, schema, project) {
    const jestConfigPath = path.join(schema.relativeToRootDestination, 'jest.config.ts');
    if (tree.exists(jestConfigPath)) {
        const oldContent = tree.read(jestConfigPath, 'utf-8');
        const findName = new RegExp(`'${schema.projectName}'`, 'g');
        const findDir = new RegExp(project.root, 'g');
        const newContent = oldContent
            .replace(findName, `'${schema.newProjectName}'`)
            .replace(findDir, schema.relativeToRootDestination);
        tree.write(jestConfigPath, newContent);
    }
    // update root jest.config.ts
    const rootJestConfigPath = '/jest.config.ts';
    if (!tree.exists(rootJestConfigPath)) {
        return;
    }
    const findProject = `'<rootDir>/${project.root}'`;
    const oldRootJestConfigContent = tree.read(rootJestConfigPath, 'utf-8');
    const usingJestProjects = oldRootJestConfigContent.includes('getJestProjects()');
    const newRootJestConfigContent = oldRootJestConfigContent.replace(findProject, usingJestProjects ? `` : `'<rootDir>/${schema.relativeToRootDestination}'`);
    tree.write(rootJestConfigPath, newRootJestConfigContent);
}
exports.updateJestConfig = updateJestConfig;
//# sourceMappingURL=update-jest-config.js.map
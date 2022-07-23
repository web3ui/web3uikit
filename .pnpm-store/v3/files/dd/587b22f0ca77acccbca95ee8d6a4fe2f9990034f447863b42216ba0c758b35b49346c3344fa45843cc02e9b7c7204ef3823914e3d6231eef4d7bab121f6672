"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTreeWithEmptyWorkspace = void 0;
const tree_1 = require("nx/src/generators/tree");
/**
 * Creates a host for testing.
 */
function createTreeWithEmptyWorkspace(version = 1) {
    const tree = new tree_1.FsTree('/virtual', false);
    tree.write('/workspace.json', JSON.stringify({ version, projects: {} }));
    tree.write('./.prettierrc', JSON.stringify({ singleQuote: true }));
    tree.write('/package.json', JSON.stringify({
        name: 'test-name',
        dependencies: {},
        devDependencies: {},
    }));
    tree.write('/nx.json', JSON.stringify({
        npmScope: 'proj',
        affected: {
            defaultBase: 'main',
        },
        tasksRunnerOptions: {
            default: {
                runner: 'nx/tasks-runners/default',
                options: {
                    cacheableOperations: ['build', 'lint', 'test', 'e2e'],
                },
            },
        },
    }));
    tree.write('/tsconfig.base.json', JSON.stringify({ compilerOptions: { paths: {} } }));
    return tree;
}
exports.createTreeWithEmptyWorkspace = createTreeWithEmptyWorkspace;
//# sourceMappingURL=create-tree-with-empty-workspace.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findFilesInCircularPath = exports.checkCircularPath = exports.pathExists = exports.getPath = void 0;
const reach = {
    graph: null,
    matrix: null,
    adjList: null,
};
function buildMatrix(graph) {
    const dependencies = graph.dependencies;
    const nodes = Object.keys(graph.nodes);
    const adjList = {};
    const matrix = {};
    const initMatrixValues = nodes.reduce((acc, value) => {
        return Object.assign(Object.assign({}, acc), { [value]: false });
    }, {});
    nodes.forEach((v) => {
        adjList[v] = [];
        matrix[v] = Object.assign({}, initMatrixValues);
    });
    for (let proj in dependencies) {
        for (let dep of dependencies[proj]) {
            if (graph.nodes[dep.target]) {
                adjList[proj].push(dep.target);
            }
        }
    }
    const traverse = (s, v) => {
        matrix[s][v] = true;
        for (let adj of adjList[v]) {
            if (matrix[s][adj] === false) {
                traverse(s, adj);
            }
        }
    };
    nodes.forEach((v) => {
        traverse(v, v);
    });
    return {
        matrix,
        adjList,
    };
}
function getPath(graph, sourceProjectName, targetProjectName) {
    if (sourceProjectName === targetProjectName)
        return [];
    if (reach.graph !== graph) {
        const { matrix, adjList } = buildMatrix(graph);
        reach.graph = graph;
        reach.matrix = matrix;
        reach.adjList = adjList;
    }
    const adjList = reach.adjList;
    let path = [];
    const queue = [[sourceProjectName, path]];
    const visited = [sourceProjectName];
    while (queue.length > 0) {
        const [current, p] = queue.pop();
        path = [...p, current];
        if (current === targetProjectName)
            break;
        if (!adjList[current])
            break;
        adjList[current]
            .filter((adj) => visited.indexOf(adj) === -1)
            .filter((adj) => reach.matrix[adj][targetProjectName])
            .forEach((adj) => {
            visited.push(adj);
            queue.push([adj, [...path]]);
        });
    }
    if (path.length > 1) {
        return path.map((n) => graph.nodes[n]);
    }
    else {
        return [];
    }
}
exports.getPath = getPath;
function pathExists(graph, sourceProjectName, targetProjectName) {
    if (sourceProjectName === targetProjectName)
        return true;
    if (reach.graph !== graph) {
        const { matrix, adjList } = buildMatrix(graph);
        reach.graph = graph;
        reach.matrix = matrix;
        reach.adjList = adjList;
    }
    return reach.matrix[sourceProjectName][targetProjectName];
}
exports.pathExists = pathExists;
function checkCircularPath(graph, sourceProject, targetProject) {
    if (!graph.nodes[targetProject.name])
        return [];
    return getPath(graph, targetProject.name, sourceProject.name);
}
exports.checkCircularPath = checkCircularPath;
function findFilesInCircularPath(circularPath) {
    const filePathChain = [];
    for (let i = 0; i < circularPath.length - 1; i++) {
        const next = circularPath[i + 1].name;
        const files = circularPath[i].data.files;
        filePathChain.push(Object.keys(files)
            .filter((key) => files[key].deps && files[key].deps.indexOf(next) !== -1)
            .map((key) => files[key].file));
    }
    return filePathChain;
}
exports.findFilesInCircularPath = findFilesInCircularPath;
//# sourceMappingURL=graph-utils.js.map
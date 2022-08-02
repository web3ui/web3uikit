"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.replaceAppNameWithPath = exports.serializeTarget = exports.editTarget = exports.parseTarget = exports.getNpmScope = exports.getWorkspacePath = void 0;
const ast_utils_1 = require("./ast-utils");
function getWorkspacePath(host) {
    const possibleFiles = ['/angular.json', '/workspace.json'];
    return possibleFiles.filter((path) => host.exists(path))[0];
}
exports.getWorkspacePath = getWorkspacePath;
function getNpmScope(host) {
    return (0, ast_utils_1.readJsonInTree)(host, 'nx.json').npmScope;
}
exports.getNpmScope = getNpmScope;
function parseTarget(targetString) {
    const [project, target, config] = targetString.split(':');
    return {
        project,
        target,
        config,
    };
}
exports.parseTarget = parseTarget;
function editTarget(targetString, callback) {
    const parsedTarget = parseTarget(targetString);
    return serializeTarget(callback(parsedTarget));
}
exports.editTarget = editTarget;
function serializeTarget({ project, target, config }) {
    return [project, target, config].filter((part) => !!part).join(':');
}
exports.serializeTarget = serializeTarget;
function replaceAppNameWithPath(node, appName, root) {
    if (typeof node === 'string') {
        const matchPattern = new RegExp(`([^a-z0-9]*(${appName}))|((${appName})[^a-z0-9:]*)`, 'gi');
        if (!!node.match(matchPattern) &&
            node !== 'application' &&
            node !== 'library') {
            const r = node.replace(appName, root);
            return r.startsWith('/apps') || r.startsWith('/libs')
                ? r.substring(1)
                : r;
        }
        else {
            return node;
        }
    }
    else if (Array.isArray(node)) {
        return node.map((j) => replaceAppNameWithPath(j, appName, root));
    }
    else if (typeof node === 'object' && node) {
        const forbiddenPropertyList = [
            'prefix',
            'builder',
            'executor',
            'browserTarget',
            'tags',
            'defaultConfiguration',
            'maximumError',
        ]; // Some of the properties should not be renamed
        return Object.keys(node).reduce((m, c) => ((m[c] = !forbiddenPropertyList.includes(c)
            ? replaceAppNameWithPath(node[c], appName, root)
            : node[c]),
            m), {});
    }
    else {
        return node;
    }
}
exports.replaceAppNameWithPath = replaceAppNameWithPath;
//# sourceMappingURL=cli-config-utils.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getImplicitlyTouchedProjectsByJsonChanges = void 0;
const flat_1 = require("flat");
const minimatch = require("minimatch");
const json_diff_1 = require("../../../utils/json-diff");
const getImplicitlyTouchedProjectsByJsonChanges = (touchedFiles, workspaceJson, nxJson) => {
    const { implicitDependencies } = nxJson;
    if (!implicitDependencies) {
        return [];
    }
    const touched = new Set();
    for (const f of touchedFiles) {
        if (f.file.endsWith('.json') && implicitDependencies[f.file]) {
            const changes = f.getChanges();
            for (const c of changes) {
                if ((0, json_diff_1.isJsonChange)(c)) {
                    const projects = getTouchedProjects(c.path, implicitDependencies[f.file]) || [];
                    projects.forEach((p) => touched.add(p));
                }
                else {
                    const projects = getTouchedProjectsByJsonFile(implicitDependencies, f.file);
                    projects.forEach((p) => touched.add(p));
                }
            }
        }
    }
    return [...touched];
};
exports.getImplicitlyTouchedProjectsByJsonChanges = getImplicitlyTouchedProjectsByJsonChanges;
function getTouchedProjectsByJsonFile(implicitDependencies, file) {
    let projects = [];
    (0, json_diff_1.walkJsonTree)(implicitDependencies[file], [], (p, value) => {
        if (Array.isArray(value)) {
            projects.push(...value);
        }
        return !Array.isArray(value);
    });
    return projects;
}
function getTouchedProjects(path, implicitDependencyConfig) {
    const flatConfig = (0, flat_1.flatten)(implicitDependencyConfig, {
        safe: true,
    });
    const flatPath = path.join('.');
    for (const key in flatConfig) {
        if (minimatch(flatPath, key)) {
            const value = flatConfig[key];
            return Array.isArray(value) ? value : [];
        }
    }
    return [];
}
//# sourceMappingURL=implicit-json-changes.js.map
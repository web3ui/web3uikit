"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeNxJson = void 0;
function normalizeNxJson(nxJson, projects) {
    return nxJson.implicitDependencies
        ? Object.assign(Object.assign({}, nxJson), { implicitDependencies: Object.entries(nxJson.implicitDependencies).reduce((acc, [key, val]) => {
                acc[key] = recur(projects, val);
                return acc;
            }, {}) }) : nxJson;
}
exports.normalizeNxJson = normalizeNxJson;
/**
 * Map recursively wildcard `*` to project names
 * @param {NxJsonConfiguration} nxJson
 * @param {'*' | string[] | {}} v
 * @returns {string[] | {}}
 */
function recur(projects, v) {
    if (v === '*') {
        return projects;
    }
    else if (Array.isArray(v)) {
        return v;
    }
    else {
        return Object.keys(v).reduce((acc, key) => {
            acc[key] = recur(projects, v[key]);
            return acc;
        }, {});
    }
}
//# sourceMappingURL=normalize-nx-json.js.map
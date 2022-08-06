"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.normalizeSlashes = exports.getNewProjectName = exports.getDestination = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * This helper function ensures that we don't move libs or apps
 * outside of the folders they should be in.
 *
 * This will break if someone isn't using the default libs/apps
 * folders. In that case, they're on their own :/
 */
function getDestination(host, schema, project) {
    const projectType = project.projectType;
    const workspaceLayout = (0, devkit_1.getWorkspaceLayout)(host);
    let rootFolder = workspaceLayout.libsDir;
    if (projectType === 'application') {
        rootFolder = workspaceLayout.appsDir;
    }
    return (0, devkit_1.joinPathFragments)(rootFolder, schema.destination);
}
exports.getDestination = getDestination;
/**
 * Replaces slashes with dashes
 *
 * @param path
 */
function getNewProjectName(path) {
    return path.replace(/\//g, '-');
}
exports.getNewProjectName = getNewProjectName;
/**
 * Normalizes slashes (removes duplicates)
 *
 * @param input
 */
function normalizeSlashes(input) {
    return input
        .split('/')
        .filter((x) => !!x)
        .join('/');
}
exports.normalizeSlashes = normalizeSlashes;
//# sourceMappingURL=utils.js.map
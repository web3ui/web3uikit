"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setDefaultCollection = void 0;
const devkit_1 = require("@nrwl/devkit");
/**
 * Sets the default collection within the workspace.
 *
 * Will only set the defaultCollection if one does not exist or if it is not `@nrwl/workspace`
 *
 * @param host
 * @param collectionName Name of the collection to be set as the default
 */
function setDefaultCollection(host, collectionName) {
    const workspace = (0, devkit_1.readWorkspaceConfiguration)(host);
    workspace.cli = workspace.cli || {};
    const defaultCollection = workspace.cli.defaultCollection;
    if (!defaultCollection || defaultCollection === '@nrwl/workspace') {
        workspace.cli.defaultCollection = collectionName;
    }
    (0, devkit_1.updateWorkspaceConfiguration)(host, workspace);
}
exports.setDefaultCollection = setDefaultCollection;
//# sourceMappingURL=set-default-collection.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateCypressJson = void 0;
const path = require("path");
/**
 * Updates the videos and screenshots folders in the cypress.json if it exists (i.e. we're moving an e2e project)
 *
 * (assume relative paths have been updated previously)
 *
 * @param schema The options provided to the schematic
 */
function updateCypressJson(tree, schema, project) {
    const cypressJsonPath = path.join(schema.relativeToRootDestination, 'cypress.json');
    if (!tree.exists(cypressJsonPath)) {
        // nothing to do
        return tree;
    }
    const cypressJson = JSON.parse(tree.read(cypressJsonPath).toString('utf-8'));
    cypressJson.videosFolder = cypressJson.videosFolder.replace(project.root, schema.relativeToRootDestination);
    cypressJson.screenshotsFolder = cypressJson.screenshotsFolder.replace(project.root, schema.relativeToRootDestination);
    tree.write(cypressJsonPath, JSON.stringify(cypressJson));
}
exports.updateCypressJson = updateCypressJson;
//# sourceMappingURL=update-cypress-json.js.map
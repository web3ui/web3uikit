"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkDestination = void 0;
const utils_1 = require("./utils");
/**
 * Checks whether the destination folder is valid
 *
 * - must not be outside the workspace
 * - must be a new folder
 *
 * @param schema The options provided to the schematic
 */
function checkDestination(tree, schema, projectConfig) {
    const INVALID_DESTINATION = `Invalid destination: [${schema.destination}]`;
    if (schema.destination.includes('..')) {
        throw new Error(`${INVALID_DESTINATION} - Please specify explicit path.`);
    }
    const destination = (0, utils_1.getDestination)(tree, schema, projectConfig);
    if (tree.children(destination).length > 0) {
        throw new Error(`${INVALID_DESTINATION} - Path is not empty.`);
    }
}
exports.checkDestination = checkDestination;
//# sourceMappingURL=check-destination.js.map
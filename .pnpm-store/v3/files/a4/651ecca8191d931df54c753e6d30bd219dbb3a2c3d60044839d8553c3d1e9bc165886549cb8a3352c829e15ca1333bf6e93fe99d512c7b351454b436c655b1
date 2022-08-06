"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkForTestTarget = void 0;
const devkit_1 = require("@nrwl/devkit");
function checkForTestTarget(tree, options) {
    const projectConfig = (0, devkit_1.readProjectConfiguration)(tree, options.project);
    if (projectConfig.targets.test) {
        throw new Error(`${options.project}: already has a test architect option.`);
    }
}
exports.checkForTestTarget = checkForTestTarget;
//# sourceMappingURL=check-for-test-target.js.map
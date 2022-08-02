"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProjectRootPath = void 0;
const devkit_1 = require("@nrwl/devkit");
function getProjectRootPath(tree, projectName) {
    const { sourceRoot, projectType } = (0, devkit_1.readProjectConfiguration)(tree, projectName);
    return (0, devkit_1.joinPathFragments)(sourceRoot, projectType === 'application' ? 'app' : 'lib');
}
exports.getProjectRootPath = getProjectRootPath;
//# sourceMappingURL=project-type.js.map
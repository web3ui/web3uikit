"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.projectRootPath = exports.projectDir = exports.projectRootDir = exports.ProjectType = void 0;
const ast_utils_1 = require("./ast-utils");
const core_1 = require("@angular-devkit/core");
var ProjectType;
(function (ProjectType) {
    ProjectType["Application"] = "application";
    ProjectType["Library"] = "library";
})(ProjectType = exports.ProjectType || (exports.ProjectType = {}));
function projectRootDir(projectType) {
    if (projectType == ProjectType.Application) {
        return 'apps';
    }
    else if (projectType == ProjectType.Library) {
        return 'libs';
    }
}
exports.projectRootDir = projectRootDir;
function projectDir(projectType) {
    if (projectType == ProjectType.Application) {
        // apps/test-app/src/app
        return 'app';
    }
    else if (projectType == ProjectType.Library) {
        // libs/test-lib/src/lib
        return 'lib';
    }
}
exports.projectDir = projectDir;
function projectRootPath(tree, projectName) {
    const { sourceRoot: projectSrcRoot, projectType } = (0, ast_utils_1.getProjectConfig)(tree, projectName);
    return (0, core_1.join)(projectSrcRoot, projectDir(projectType));
}
exports.projectRootPath = projectRootPath;
//# sourceMappingURL=project-type.js.map
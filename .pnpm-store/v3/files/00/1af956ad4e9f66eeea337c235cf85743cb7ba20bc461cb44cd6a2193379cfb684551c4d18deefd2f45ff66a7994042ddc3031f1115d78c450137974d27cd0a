"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatTag = exports.formatTagPrefix = void 0;
const template_string_1 = require("./template-string");
function formatTagPrefix({ versionTagPrefix, projectName, syncVersions, }) {
    if (versionTagPrefix != null) {
        return (0, template_string_1.createTemplateString)(versionTagPrefix, {
            target: projectName,
            projectName: projectName,
        });
    }
    if (syncVersions) {
        return 'v';
    }
    return `${projectName}-`;
}
exports.formatTagPrefix = formatTagPrefix;
function formatTag({ tagPrefix, version, }) {
    return `${tagPrefix}${version}`;
}
exports.formatTag = formatTag;
//# sourceMappingURL=tag.js.map
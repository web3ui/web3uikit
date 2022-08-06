"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.checkGitVersion = exports.deduceDefaultBase = void 0;
const child_process_1 = require("child_process");
function deduceDefaultBase() {
    const nxDefaultBase = 'main';
    try {
        return ((0, child_process_1.execSync)('git config --get init.defaultBranch').toString().trim() ||
            nxDefaultBase);
    }
    catch (_a) {
        return nxDefaultBase;
    }
}
exports.deduceDefaultBase = deduceDefaultBase;
function checkGitVersion() {
    try {
        let gitVersionOutput = (0, child_process_1.execSync)('git --version').toString().trim();
        return gitVersionOutput.match(/[0-9]+\.[0-9]+\.+[0-9]+/)[0];
    }
    catch (_a) {
        return null;
    }
}
exports.checkGitVersion = checkGitVersion;
//# sourceMappingURL=default-base.js.map
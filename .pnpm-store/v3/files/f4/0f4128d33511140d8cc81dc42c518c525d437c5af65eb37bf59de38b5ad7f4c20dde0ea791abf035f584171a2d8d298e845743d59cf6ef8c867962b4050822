"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getNpmPackageVersion = void 0;
function getNpmPackageVersion(packageName) {
    try {
        const version = require('child_process').execSync(`npm view ${packageName} version`, { stdio: ['pipe', 'pipe', 'ignore'] });
        if (version) {
            return version
                .toString()
                .trim()
                .replace(/^\n*|\n*$/g, '');
        }
    }
    catch (err) { }
    return null;
}
exports.getNpmPackageVersion = getNpmPackageVersion;
//# sourceMappingURL=get-npm-package-version.js.map
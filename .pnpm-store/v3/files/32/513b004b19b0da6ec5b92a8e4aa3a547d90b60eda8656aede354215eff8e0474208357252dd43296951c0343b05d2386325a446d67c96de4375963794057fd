"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getLastVersion = void 0;
const gitSemverTags = require("git-semver-tags");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const semver = require("semver");
const util_1 = require("util");
function getLastVersion({ tagPrefix, includePrerelease = true, }) {
    return (0, rxjs_1.from)((0, util_1.promisify)(gitSemverTags)({ tagPrefix })).pipe((0, operators_1.switchMap)((tags) => {
        const versions = tags
            .map((tag) => tag.substring(tagPrefix.length))
            .filter((v) => includePrerelease ? true : semver.prerelease(v) === null);
        const [version] = versions.sort(semver.rcompare);
        if (version == null) {
            return (0, rxjs_1.throwError)(() => new Error('No semver tag found'));
        }
        const tag = `${tagPrefix}${version}`;
        return (0, rxjs_1.of)(tag.substring(tagPrefix.length));
    }));
}
exports.getLastVersion = getLastVersion;
//# sourceMappingURL=get-last-version.js.map
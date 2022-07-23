"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports._calculateDependencyUpdates = exports.calculateChangelogChanges = exports.insertChangelogDependencyUpdates = exports.updateChangelog = exports.getChangelogPath = exports.defaultHeader = void 0;
const tslib_1 = require("tslib");
const path_1 = require("path");
const rxjs_1 = require("rxjs");
const standardVersionDefaults = require("standard-version/defaults");
const changelog = require("standard-version/lib/lifecycles/changelog");
const diff_1 = require("./diff");
const filesystem_1 = require("./filesystem");
exports.defaultHeader = `# Changelog

This file was generated using [@jscutlery/semver](https://github.com/jscutlery/semver).
`;
function getChangelogPath(projectRoot) {
    return (0, path_1.resolve)(projectRoot, 'CHANGELOG.md');
}
exports.getChangelogPath = getChangelogPath;
function updateChangelog({ projectRoot, dryRun, preset, newVersion, changelogHeader, tagPrefix, }) {
    return (0, rxjs_1.defer)(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
        const changelogPath = getChangelogPath(projectRoot);
        yield changelog(Object.assign(Object.assign({}, standardVersionDefaults), { header: changelogHeader || exports.defaultHeader, path: projectRoot, preset,
            dryRun, silent: true, infile: changelogPath, tagPrefix }), newVersion);
        return changelogPath;
    }));
}
exports.updateChangelog = updateChangelog;
function insertChangelogDependencyUpdates({ changelogPath, version, dryRun, dependencyUpdates, }) {
    return (0, rxjs_1.of)(!dependencyUpdates.length || dryRun).pipe((0, rxjs_1.switchMap)((skipDependencyUpdates) => {
        if (skipDependencyUpdates) {
            return (0, rxjs_1.of)(changelogPath);
        }
        return (0, filesystem_1.readFile)(changelogPath).pipe((0, rxjs_1.map)((changelog) => _calculateDependencyUpdates({
            changelog,
            version,
            dependencyUpdates,
        })), (0, rxjs_1.switchMap)((changelog) => (0, filesystem_1.writeFile)(changelogPath, changelog)), (0, rxjs_1.map)(() => changelogPath));
    }));
}
exports.insertChangelogDependencyUpdates = insertChangelogDependencyUpdates;
function calculateChangelogChanges({ changelogPath, changelogHeader, }) {
    return (source) => {
        return (0, filesystem_1.readFileIfExists)(changelogPath, changelogHeader).pipe((0, rxjs_1.combineLatestWith)(source), (0, rxjs_1.concatMap)(([input]) => tslib_1.__awaiter(this, void 0, void 0, function* () {
            const output = yield (0, rxjs_1.lastValueFrom)((0, filesystem_1.readFileIfExists)(changelogPath, changelogHeader));
            return (0, diff_1.diff)(input, output);
        })));
    };
}
exports.calculateChangelogChanges = calculateChangelogChanges;
/* istanbul ignore next */
function _calculateDependencyUpdates({ changelog, version, dependencyUpdates, }) {
    const match = changelog.match(new RegExp(`##? \\[?${version}\\]? ?\\(.*\\)`));
    if (match && match.index !== undefined) {
        const dependencyNames = dependencyUpdates.reduce((acc, ver) => {
            if (ver.type === 'dependency') {
                acc.push(`* \`${ver.dependencyName}\` updated to version \`${ver.version}\``);
            }
            return acc;
        }, []);
        changelog =
            `${changelog.substring(0, match.index + match[0].length)}` +
                `\n\n### Dependency Updates\n\n${dependencyNames.join('\n')}\n` +
                `${changelog.substring(match.index + match[0].length + 2)}`;
    }
    return changelog;
}
exports._calculateDependencyUpdates = _calculateDependencyUpdates;
//# sourceMappingURL=changelog.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const devkit_1 = require("@nrwl/devkit");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const exec_1 = require("../common/exec");
function runExecutor({ tag, files, notes, notesFile, target, draft, title, prerelease, discussionCategory, repo, generateNotes, }) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        const createRelease$ = (0, exec_1.exec)('gh', [
            'release',
            'create',
            tag,
            ...(files ? files : []),
            ...(notes ? ['--notes', notes] : []),
            ...(notesFile ? ['--notes-file', notesFile] : []),
            ...(target ? ['--target', target] : []),
            ...(draft ? ['--draft'] : []),
            ...(title ? ['--title', title] : []),
            ...(prerelease ? ['--prerelease'] : []),
            ...(discussionCategory
                ? [`--discussion-category`, discussionCategory]
                : []),
            ...(repo ? [`--repo`, repo] : []),
            ...(generateNotes ? [`--generate-notes`] : []),
        ]).pipe((0, operators_1.mapTo)({ success: true }), (0, operators_1.catchError)((response) => {
            devkit_1.logger.error(response);
            return (0, rxjs_1.of)({ success: false });
        }));
        return (0, rxjs_1.lastValueFrom)(createRelease$);
    });
}
exports.default = runExecutor;
//# sourceMappingURL=executor.js.map
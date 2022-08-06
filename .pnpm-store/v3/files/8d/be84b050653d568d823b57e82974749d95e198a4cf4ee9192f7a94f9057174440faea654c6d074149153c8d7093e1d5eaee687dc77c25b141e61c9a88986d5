"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.formatCommitMessage = exports.commit = void 0;
const rxjs_1 = require("rxjs");
const exec_1 = require("../../common/exec");
const logger_1 = require("./logger");
const template_string_1 = require("./template-string");
function commit({ dryRun, noVerify, commitMessage, projectName, }) {
    if (dryRun) {
        return rxjs_1.EMPTY;
    }
    return (0, exec_1.exec)('git', [
        'commit',
        ...(noVerify ? ['--no-verify'] : []),
        '-m',
        commitMessage,
    ]).pipe((0, rxjs_1.map)(() => undefined), (0, logger_1.logStep)({
        step: 'commit_success',
        message: `Committed "${commitMessage}".`,
        projectName,
    }));
}
exports.commit = commit;
function formatCommitMessage({ commitMessageFormat, version, projectName, }) {
    return (0, template_string_1.createTemplateString)(commitMessageFormat, {
        projectName,
        version,
    });
}
exports.formatCommitMessage = formatCommitMessage;
//# sourceMappingURL=commit.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addPrefixToLines = exports.addCommandPrefixIfNeeded = void 0;
const chalk = require("chalk");
function addCommandPrefixIfNeeded(projectName, chunk, encoding) {
    if (process.env.NX_PREFIX_OUTPUT === 'true') {
        const lines = (typeof chunk === 'string' ? chunk : chunk.toString('utf-8')).split('\n');
        return {
            content: addPrefixToLines(projectName, lines).join('\n'),
            encoding: 'utf-8',
        };
    }
    else {
        return { content: chunk, encoding: encoding };
    }
}
exports.addCommandPrefixIfNeeded = addCommandPrefixIfNeeded;
function addPrefixToLines(projectName, lines) {
    const updatedLines = [];
    for (let i = 0; i < lines.length; ++i) {
        if (i === lines.length - 1 && lines[i] === '') {
            updatedLines.push('');
        }
        else {
            updatedLines.push(`${projectNamePrefix(projectName)} ${lines[i]}`);
        }
    }
    return updatedLines;
}
exports.addPrefixToLines = addPrefixToLines;
const colors = [
    chalk.green,
    chalk.greenBright,
    chalk.red,
    chalk.redBright,
    chalk.cyan,
    chalk.cyanBright,
    chalk.yellow,
    chalk.yellowBright,
    chalk.magenta,
    chalk.magentaBright,
];
function projectNamePrefix(projectName) {
    const n = normalizeProjectName(projectName);
    return colors[projectNameToIndex(projectName)](`[${n}]`);
}
function projectNameToIndex(projectName) {
    let code = 0;
    for (let i = 0; i < projectName.length; ++i) {
        code += projectName.charCodeAt(i);
    }
    return code % colors.length;
}
function normalizeProjectName(projectName) {
    return projectName.length > 15
        ? `...${projectName.substring(projectName.length - 12)}`
        : `${projectName}                     `.substring(0, 15);
}
//# sourceMappingURL=add-command-prefix.js.map
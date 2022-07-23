"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.diff = void 0;
function diff(before, after) {
    const linesBefore = before.split('\n');
    const linesAfter = after.split('\n');
    const differentLines = [];
    let oldIndex = 0;
    for (const line of linesAfter) {
        if (line === linesBefore[oldIndex]) {
            oldIndex += 1;
        }
        else {
            differentLines.push(line);
        }
    }
    return differentLines.join('\n');
}
exports.diff = diff;
//# sourceMappingURL=diff.js.map
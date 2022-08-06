"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findEslintFile = exports.containsEslint = void 0;
const eslintFileList = ['.eslintrc.json', '.eslintrc.js'];
function containsEslint(tree) {
    for (const file of eslintFileList) {
        if (tree.exists(file)) {
            return true;
        }
    }
    return false;
}
exports.containsEslint = containsEslint;
function findEslintFile(tree) {
    for (const file of eslintFileList) {
        if (tree.exists(file)) {
            return file;
        }
    }
    // Default file
    return '.eslintrc.json';
}
exports.findEslintFile = findEslintFile;
//# sourceMappingURL=eslint-file.js.map
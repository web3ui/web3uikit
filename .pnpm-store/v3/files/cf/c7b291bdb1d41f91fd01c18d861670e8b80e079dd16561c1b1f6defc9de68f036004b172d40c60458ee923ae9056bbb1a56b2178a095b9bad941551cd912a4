"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.renameSync = exports.copyFile = exports.updateJsonFile = exports.writeToFile = exports.createDirectory = exports.isRelativePath = exports.directoryExists = exports.fileExists = void 0;
const fs_1 = require("fs");
const path_1 = require("path");
const fileutils_1 = require("nx/src/utils/fileutils");
Object.defineProperty(exports, "fileExists", { enumerable: true, get: function () { return fileutils_1.fileExists; } });
Object.defineProperty(exports, "directoryExists", { enumerable: true, get: function () { return fileutils_1.directoryExists; } });
Object.defineProperty(exports, "isRelativePath", { enumerable: true, get: function () { return fileutils_1.isRelativePath; } });
Object.defineProperty(exports, "createDirectory", { enumerable: true, get: function () { return fileutils_1.createDirectory; } });
function writeToFile(filePath, str) {
    (0, fs_1.mkdirSync)((0, path_1.dirname)(filePath), { recursive: true });
    (0, fs_1.writeFileSync)(filePath, str);
}
exports.writeToFile = writeToFile;
/**
 * This method is specifically for updating a JSON file using the filesystem
 *
 * @remarks
 * If you are looking to update a JSON file in a tree, look for ./ast-utils#updateJsonInTree
 * @param path Path of the JSON file on the filesystem
 * @param callback Manipulation of the JSON data
 */
function updateJsonFile(path, callback) {
    const json = (0, fileutils_1.readJsonFile)(path);
    callback(json);
    (0, fileutils_1.writeJsonFile)(path, json);
}
exports.updateJsonFile = updateJsonFile;
function copyFile(file, target) {
    const f = (0, path_1.basename)(file);
    const source = (0, fs_1.createReadStream)(file);
    const dest = (0, fs_1.createWriteStream)((0, path_1.resolve)(target, f));
    source.pipe(dest);
    source.on('error', (e) => console.error(e));
}
exports.copyFile = copyFile;
function renameSync(from, to, cb) {
    try {
        if (!(0, fs_1.existsSync)(from)) {
            throw new Error(`Path: ${from} does not exist`);
        }
        else if ((0, fs_1.existsSync)(to)) {
            throw new Error(`Path: ${to} already exists`);
        }
        // Make sure parent path exists
        const parentPath = (0, path_1.resolve)(to, '..');
        (0, fileutils_1.createDirectory)(parentPath);
        (0, fs_1.renameSync)(from, to);
        cb(null);
    }
    catch (e) {
        cb(e);
    }
}
exports.renameSync = renameSync;
//# sourceMappingURL=fileutils.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isRelativePath = exports.renameSync = exports.createDirectory = exports.fileExists = exports.directoryExists = exports.copyFile = exports.updateJsonFile = exports.writeToFile = void 0;
const fs_1 = require("fs");
const fs_extra_1 = require("fs-extra");
const path_1 = require("path");
const devkit_1 = require("@nrwl/devkit");
function writeToFile(filePath, str) {
    (0, fs_extra_1.ensureDirSync)((0, path_1.dirname)(filePath));
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
    const json = (0, devkit_1.readJsonFile)(path);
    callback(json);
    (0, devkit_1.writeJsonFile)(path, json);
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
function directoryExists(name) {
    try {
        return (0, fs_1.statSync)(name).isDirectory();
    }
    catch (e) {
        return false;
    }
}
exports.directoryExists = directoryExists;
function fileExists(filePath) {
    try {
        return (0, fs_1.statSync)(filePath).isFile();
    }
    catch (err) {
        return false;
    }
}
exports.fileExists = fileExists;
function createDirectory(directoryPath) {
    const parentPath = (0, path_1.resolve)(directoryPath, '..');
    if (!directoryExists(parentPath)) {
        createDirectory(parentPath);
    }
    if (!directoryExists(directoryPath)) {
        (0, fs_1.mkdirSync)(directoryPath);
    }
}
exports.createDirectory = createDirectory;
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
        createDirectory(parentPath);
        (0, fs_1.renameSync)(from, to);
        cb(null);
    }
    catch (e) {
        cb(e);
    }
}
exports.renameSync = renameSync;
function isRelativePath(path) {
    return (path === '.' ||
        path === '..' ||
        path.startsWith('./') ||
        path.startsWith('../'));
}
exports.isRelativePath = isRelativePath;
//# sourceMappingURL=fileutils.js.map
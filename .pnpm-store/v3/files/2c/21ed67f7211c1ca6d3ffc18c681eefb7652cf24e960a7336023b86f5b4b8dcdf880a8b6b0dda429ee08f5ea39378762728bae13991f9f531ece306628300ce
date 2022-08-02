"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeFile = exports.readJsonFile = exports.readFileIfExists = exports.readFile = exports.exists = void 0;
const fs = require("fs");
const rxjs_1 = require("rxjs");
const operators_1 = require("rxjs/operators");
const fsPromises = fs.promises;
function exists(filePath) {
    return (0, rxjs_1.defer)(() => fsPromises.access(filePath, fs.constants.R_OK | fs.constants.W_OK)).pipe((0, operators_1.map)(() => true), (0, operators_1.catchError)(() => (0, rxjs_1.of)(false)));
}
exports.exists = exists;
function readFile(filePath) {
    return (0, rxjs_1.defer)(() => fsPromises.readFile(filePath, { encoding: 'utf-8' }));
}
exports.readFile = readFile;
function readFileIfExists(filePath, fallback = '') {
    return exists(filePath).pipe((0, operators_1.switchMap)((exist) => (exist ? readFile(filePath) : (0, rxjs_1.of)(fallback))));
}
exports.readFileIfExists = readFileIfExists;
function readJsonFile(filePath) {
    return readFile(filePath).pipe((0, operators_1.map)((data) => JSON.parse(data)));
}
exports.readJsonFile = readJsonFile;
function writeFile(filePath, data) {
    return (0, rxjs_1.defer)(() => fsPromises.writeFile(filePath, data, { encoding: 'utf-8' }));
}
exports.writeFile = writeFile;
//# sourceMappingURL=filesystem.js.map
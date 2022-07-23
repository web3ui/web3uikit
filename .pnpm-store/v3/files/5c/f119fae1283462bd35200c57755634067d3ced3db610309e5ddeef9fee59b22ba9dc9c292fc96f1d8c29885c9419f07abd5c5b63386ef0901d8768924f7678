"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findRootJestPreset = exports.findRootJestConfig = void 0;
function findRootJestConfig(tree) {
    if (tree.exists('jest.config.js')) {
        return 'jest.config.js';
    }
    if (tree.exists('jest.config.ts')) {
        return 'jest.config.ts';
    }
    return null;
}
exports.findRootJestConfig = findRootJestConfig;
function findRootJestPreset(tree) {
    if (tree.exists('jest.preset.js')) {
        return 'jest.preset.js';
    }
    return null;
}
exports.findRootJestPreset = findRootJestPreset;
//# sourceMappingURL=find-root-jest-files.js.map
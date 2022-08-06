"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const reactModules = [
    'react',
    'react/addons',
    'react-native',
    'proptypes',
    'prop-types',
];
/**
 * Takes a module name (string) and returns true if it refers to a root react
 * module name.
 */
function isReactModuleName(moduleName) {
    return reactModules.some(function (reactModuleName) {
        return reactModuleName === moduleName.toLowerCase();
    });
}
exports.default = isReactModuleName;

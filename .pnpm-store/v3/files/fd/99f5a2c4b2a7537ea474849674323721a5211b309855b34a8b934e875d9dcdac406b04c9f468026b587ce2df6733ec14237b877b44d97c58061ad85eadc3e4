"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const parseJsDoc_1 = __importDefault(require("../utils/parseJsDoc"));
// Merges two objects ignoring null/undefined.
function merge(obj1, obj2) {
    if (obj1 == null && obj2 == null) {
        return null;
    }
    const merged = {
        ...obj1,
    };
    for (const prop in obj2) {
        if (obj2[prop] != null) {
            merged[prop] = obj2[prop];
        }
    }
    return merged;
}
/**
 * Extract info from the methods jsdoc blocks. Must be run after
 * flowComponentMethodsHandler.
 */
function componentMethodsJsDocHandler(documentation) {
    let methods = documentation.get('methods');
    if (!methods) {
        return;
    }
    // @ts-ignore
    methods = methods.map(method => {
        if (!method.docblock) {
            return method;
        }
        const jsDoc = (0, parseJsDoc_1.default)(method.docblock);
        const returns = merge(jsDoc.returns, method.returns);
        const params = method.params.map(param => {
            const jsDocParam = jsDoc.params.find(p => p.name === param.name);
            return merge(jsDocParam, param);
        });
        return {
            ...method,
            description: jsDoc.description || null,
            returns,
            params,
        };
    });
    documentation.set('methods', methods);
}
exports.default = componentMethodsJsDocHandler;

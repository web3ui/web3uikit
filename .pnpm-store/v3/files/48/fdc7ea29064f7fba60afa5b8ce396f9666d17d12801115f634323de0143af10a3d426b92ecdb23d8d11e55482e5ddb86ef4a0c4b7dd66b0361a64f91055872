"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const strip_indent_1 = __importDefault(require("strip-indent"));
const estree_to_babel_1 = __importDefault(require("estree-to-babel"));
const generator_1 = __importDefault(require("@babel/generator"));
function deindent(code) {
    const firstNewLine = code.indexOf('\n');
    return (code.slice(0, firstNewLine + 1) +
        // remove indentation from all lines except first.
        (0, strip_indent_1.default)(code.slice(firstNewLine + 1)));
}
function getSrcFromAst(path) {
    do {
        if (path.node.type === 'File') {
            return path.node.__src;
        }
        path = path.parentPath;
    } while (path != null);
    throw new Error('Could not find source attached to File node');
}
/**
 * Prints the given path without leading or trailing comments.
 */
function printValue(path) {
    if (path.node.start == null) {
        try {
            const nodeCopy = {
                ...path.node,
            };
            // `estree-to-babel` expects the `comments` property to exist on the top-level node
            if (!nodeCopy.comments) {
                nodeCopy.comments = [];
            }
            return (0, generator_1.default)((0, estree_to_babel_1.default)(nodeCopy), {
                comments: false,
                concise: true,
            }).code;
        }
        catch (err) {
            throw new Error(`Cannot print raw value for type '${path.node.type}'. Please report this with an example at https://github.com/reactjs/react-docgen/issues.

Original error:
${err.stack}`);
        }
    }
    const src = getSrcFromAst(path);
    return deindent(src.slice(path.node.start, path.node.end));
}
exports.default = printValue;

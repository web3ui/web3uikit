"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generateImportFnScriptCode = void 0;
const path = __importStar(require("path"));
const vite_1 = require("vite");
const node_logger_1 = require("@storybook/node-logger");
const list_stories_1 = require("./list-stories");
/**
 * This file is largely based on https://github.com/storybookjs/storybook/blob/d1195cbd0c61687f1720fefdb772e2f490a46584/lib/core-common/src/utils/to-importFn.ts
 */
/**
 * Paths get passed either with no leading './' - e.g. `src/Foo.stories.js`,
 * or with a leading `../` (etc), e.g. `../src/Foo.stories.js`.
 * We want to deal in importPaths relative to the working dir, so we normalize
 */
function toImportPath(relativePath) {
    return relativePath.startsWith('../') ? relativePath : `./${relativePath}`;
}
/**
 * This function takes an array of stories and creates a mapping between the stories' relative paths
 * to the working directory and their dynamic imports. The import is done in an asynchronous function
 * to delay loading. It then creates a function, `importFn(path)`, which resolves a path to an import
 * function and this is called by Storybook to fetch a story dynamically when needed.
 * @param stories An array of absolute story paths.
 */
async function toImportFn(stories) {
    const objectEntries = stories.map((file) => {
        const ext = path.extname(file);
        const relativePath = (0, vite_1.normalizePath)(path.relative(process.cwd(), file));
        if (!['.js', '.jsx', '.ts', '.tsx', '.mdx'].includes(ext)) {
            node_logger_1.logger.warn(`Cannot process ${ext} file with storyStoreV7: ${relativePath}`);
        }
        return `  '${toImportPath(relativePath)}': async () => import('/@fs/${file}')`;
    });
    return `
    const importers = {
      ${objectEntries.join(',\n')}
    };

    export async function importFn(path) {
        return importers[path]();
    }
  `;
}
async function generateImportFnScriptCode(options) {
    // First we need to get an array of stories and their absolute paths.
    const stories = await (0, list_stories_1.listStories)(options);
    // We can then call toImportFn to create a function that can be used to load each story dynamically.
    return (await toImportFn(stories)).trim();
}
exports.generateImportFnScriptCode = generateImportFnScriptCode;
//# sourceMappingURL=codegen-importfn-script.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.generatePreviewEntryCode = exports.generateVirtualStoryEntryCode = void 0;
const core_common_1 = require("@storybook/core-common");
const slash_1 = __importDefault(require("slash"));
const vite_1 = require("vite");
const list_stories_1 = require("./list-stories");
const absoluteFilesToImport = (files, name) => files.map((el, i) => `import ${name ? `* as ${name}_${i} from ` : ''}'/@fs/${(0, vite_1.normalizePath)(el)}'`).join('\n');
async function generateVirtualStoryEntryCode(options) {
    const storyEntries = await (0, list_stories_1.listStories)(options);
    const resolveMap = storyEntries.reduce((prev, entry) => ({ ...prev, [entry]: entry.replace((0, slash_1.default)(process.cwd()), '.') }), {});
    const modules = storyEntries.map((entry, i) => `${JSON.stringify(entry)}: story_${i}`).join(',');
    return `
    ${absoluteFilesToImport(storyEntries, 'story')}

    function loadable(key) {
      return {${modules}}[key];
    }
    
    Object.assign(loadable, {
      keys: () => (${JSON.stringify(Object.keys(resolveMap))}),
      resolve: (key) => (${JSON.stringify(resolveMap)}[key])
    });

    export function configStories(configure) {
      configure(loadable, { hot: import.meta.hot }, false);
    }
  `.trim();
}
exports.generateVirtualStoryEntryCode = generateVirtualStoryEntryCode;
async function generatePreviewEntryCode({ configDir }) {
    const previewFile = (0, core_common_1.loadPreviewOrConfigFile)({ configDir });
    if (!previewFile)
        return '';
    return `import * as preview from '${(0, slash_1.default)(previewFile)}';
  export default preview;`;
}
exports.generatePreviewEntryCode = generatePreviewEntryCode;
//# sourceMappingURL=codegen-entries.js.map
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
exports.listStories = void 0;
const path = __importStar(require("path"));
const glob_promise_1 = require("glob-promise");
const core_common_1 = require("@storybook/core-common");
async function listStories(options) {
    return (await Promise.all((0, core_common_1.normalizeStories)(await options.presets.apply('stories', [], options), {
        configDir: options.configDir,
        workingDir: options.configDir,
    }).map(({ directory, files }) => {
        const pattern = path.join(directory, files);
        return (0, glob_promise_1.promise)(path.isAbsolute(pattern) ? pattern : path.join(options.configDir, pattern));
    }))).reduce((carry, stories) => carry.concat(stories), []);
}
exports.listStories = listStories;
//# sourceMappingURL=list-stories.js.map
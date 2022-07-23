"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const ava_1 = tslib_1.__importDefault(require("ava"));
const read_default_tsconfig_1 = require("../read-default-tsconfig");
const FIXTURES = [
    [{ sourceMap: true, inlineSourceMap: true }, 'inline'],
    [{ sourceMap: false, inlineSourceMap: true }, 'inline'],
    [{ sourceMap: true, inlineSourceMap: false }, true],
    [{ sourceMap: false, inlineSourceMap: false }, false],
    [{ inlineSourceMap: true }, 'inline'],
    [{ inlineSourceMap: false }, true],
];
for (const [config, expect] of FIXTURES) {
    (0, ava_1.default)(`should create ${expect} from ${JSON.stringify(config)}`, (t) => {
        t.is((0, read_default_tsconfig_1.createSourcemapOption)(config), expect);
    });
}
//# sourceMappingURL=create-sourcemap-option.spec.js.map
"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createMdxAstCompiler = void 0;
const imports_1 = require("../imports");
/**
 * Almost identical to the `createMdxAstCompiler` export of `@mdx-js/mdx`
 * but without the `mdxAstToMdxHast` transformer.
 *
 * We can get rid of this once https://github.com/mdx-js/mdx/issues/1512
 * is addressed.
 */
function createMdxAstCompiler(cwd, remarkPlugins) {
    // In order to support PNPM and local clones of this plugin,
    // we need to resolve these dependencies from the `@mdx-js/mdx`
    // package installed by the user.
    const mdxRoot = imports_1.resolveMdxImport(cwd);
    const unified = imports_1.requireFrom('unified', mdxRoot);
    const remarkParse = imports_1.requireFrom('remark-parse', mdxRoot);
    const remarkMdx = imports_1.requireFrom('remark-mdx', mdxRoot);
    const squeeze = imports_1.requireFrom('remark-squeeze-paragraphs', mdxRoot);
    return unified()
        .use(remarkParse)
        .use(remarkMdx)
        .use(squeeze)
        .use(remarkPlugins)
        .freeze();
}
exports.createMdxAstCompiler = createMdxAstCompiler;
//# sourceMappingURL=createMdxAstCompiler.js.map
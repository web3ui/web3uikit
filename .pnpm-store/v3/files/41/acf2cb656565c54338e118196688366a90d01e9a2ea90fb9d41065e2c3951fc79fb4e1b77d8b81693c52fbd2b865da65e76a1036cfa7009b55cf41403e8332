"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createTransformer = void 0;
const esbuild_1 = require("esbuild");
const imports_1 = require("./imports");
function createTransformer(root, namedImports = imports_1.inferNamedImports(root)) {
    const mdx = imports_1.requireMdx(root);
    const imports = Object.entries(namedImports).map(([packageName, imported]) => {
        imports_1.assertImportExists(packageName, root);
        return Array.isArray(imported)
            ? `import { ${imported.join(', ')} } from '${packageName}'`
            : `import ${imported} from '${packageName}'`;
    });
    return function transform(code_mdx, mdxOptions) {
        return __awaiter(this, void 0, void 0, function* () {
            const code_jsx = yield mdx(code_mdx, mdxOptions);
            const code_es2019 = yield jsxToES2019(code_jsx);
            return imports.concat('', code_es2019).join('\n');
        });
    };
}
exports.createTransformer = createTransformer;
function jsxToES2019(code_jsx) {
    return __awaiter(this, void 0, void 0, function* () {
        // We use `esbuild` ourselves instead of letting Vite doing the esbuild transform,
        // because there don't seem to be a way to change the esbuild options for specific
        // files only: https://vitejs.dev/config/#esbuild
        /* Uncomment this to inspect the type `TransformOptions`
        type TransformOptions = Pick<Parameters<typeof esBuild.transform>, 1>[1];
        let t: TransformOptions;
        t!.format
        t!.jsxFactory
        //*/
        let { code: code_es2019 } = yield esbuild_1.transform(code_jsx, {
            loader: 'jsx',
            jsxFactory: 'mdx',
            target: 'es2019'
        });
        // TODO stabilize this bugfix
        code_es2019 = code_es2019.replace('export default function MDXContent', 'export default MDXContent; function MDXContent');
        return code_es2019;
    });
}
//# sourceMappingURL=transform.js.map
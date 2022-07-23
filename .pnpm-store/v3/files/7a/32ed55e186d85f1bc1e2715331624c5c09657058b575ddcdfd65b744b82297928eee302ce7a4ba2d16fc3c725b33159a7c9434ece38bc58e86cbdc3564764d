"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.transform = exports.transformJest = exports.transformSync = void 0;
const core_1 = require("@swc/core");
// Oldest LTS Node.js supported target
const DEFAULT_ES_TARGET = 'es2018';
function transformOption(path, options, jest = false) {
    var _a, _b, _c;
    const opts = options == null ? {} : options;
    opts.esModuleInterop = (_a = opts.esModuleInterop) !== null && _a !== void 0 ? _a : true;
    const sourceMapDefault = jest ? 'inline' : true;
    return {
        filename: path,
        jsc: {
            target: (_b = opts.target) !== null && _b !== void 0 ? _b : DEFAULT_ES_TARGET,
            parser: {
                syntax: 'typescript',
                tsx: typeof opts.jsx !== 'undefined' ? opts.jsx : path.endsWith('.tsx'),
                decorators: Boolean(opts.experimentalDecorators),
                dynamicImport: Boolean(opts.dynamicImport),
            },
            transform: {
                legacyDecorator: Boolean(opts.experimentalDecorators),
                decoratorMetadata: Boolean(opts.emitDecoratorMetadata),
                react: options === null || options === void 0 ? void 0 : options.react,
                hidden: {
                    jest,
                },
            },
            keepClassNames: opts.keepClassNames,
            paths: opts.paths,
        },
        minify: false,
        isModule: true,
        module: {
            type: 'commonjs',
            noInterop: !opts.esModuleInterop,
        },
        sourceMaps: typeof opts.sourcemap === 'undefined' ? sourceMapDefault : opts.sourcemap,
        inlineSourcesContent: true,
        swcrc: false,
        ...((_c = options === null || options === void 0 ? void 0 : options.swc) !== null && _c !== void 0 ? _c : {}),
    };
}
function transformSync(source, path, options) {
    return (0, core_1.transformSync)(source, transformOption(path, options));
}
exports.transformSync = transformSync;
function transformJest(source, path, options) {
    return (0, core_1.transformSync)(source, transformOption(path, options, true));
}
exports.transformJest = transformJest;
function transform(source, path, options) {
    return (0, core_1.transform)(source, transformOption(path, options));
}
exports.transform = transform;
//# sourceMappingURL=index.js.map
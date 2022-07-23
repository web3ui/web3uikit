"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DEFAULT_EXTENSIONS = exports.getBinaryMetadata = exports.__experimental_registerGlobalTraceConfig = exports.minifySync = exports.minify = exports.bundle = exports.transformFileSync = exports.transformFile = exports.transformSync = exports.transform = exports.printSync = exports.print = exports.parseFileSync = exports.parseFile = exports.parseSync = exports.parse = exports.Compiler = exports.plugins = exports.version = void 0;
const path_1 = require("path");
__exportStar(require("./types"), exports);
const spack_1 = require("./spack");
// Allow overrides to the location of the .node binding file
const bindingsOverride = process.env["SWC_BINARY_PATH"];
const bindings = !!bindingsOverride ? require((0, path_1.resolve)(bindingsOverride)) : require('./binding');
/**
 * Version of the swc binding.
 */
exports.version = require("./package.json").version;
function plugins(ps) {
    return mod => {
        let m = mod;
        for (const p of ps) {
            m = p(m);
        }
        return m;
    };
}
exports.plugins = plugins;
class Compiler {
    minify(src, opts) {
        return __awaiter(this, void 0, void 0, function* () {
            return bindings.minify(toBuffer(src), toBuffer(opts !== null && opts !== void 0 ? opts : {}));
        });
    }
    minifySync(src, opts) {
        return bindings.minifySync(toBuffer(src), toBuffer(opts !== null && opts !== void 0 ? opts : {}));
    }
    parse(src, options, filename) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || { syntax: "ecmascript" };
            options.syntax = options.syntax || "ecmascript";
            const res = yield bindings.parse(src, toBuffer(options), filename);
            return JSON.parse(res);
        });
    }
    parseSync(src, options, filename) {
        options = options || { syntax: "ecmascript" };
        options.syntax = options.syntax || "ecmascript";
        return JSON.parse(bindings.parseSync(src, toBuffer(options), filename));
    }
    parseFile(path, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || { syntax: "ecmascript" };
            options.syntax = options.syntax || "ecmascript";
            const res = yield bindings.parseFile(path, toBuffer(options));
            return JSON.parse(res);
        });
    }
    parseFileSync(path, options) {
        options = options || { syntax: "ecmascript" };
        options.syntax = options.syntax || "ecmascript";
        return JSON.parse(bindings.parseFileSync(path, toBuffer(options)));
    }
    /**
     * Note: this method should be invoked on the compiler instance used
     *  for `parse()` / `parseSync()`.
     */
    print(m, options) {
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            return bindings.print(JSON.stringify(m), toBuffer(options));
        });
    }
    /**
     * Note: this method should be invoked on the compiler instance used
     *  for `parse()` / `parseSync()`.
     */
    printSync(m, options) {
        options = options || {};
        return bindings.printSync(JSON.stringify(m), toBuffer(options));
    }
    transform(src, options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            const isModule = typeof src !== "string";
            options = options || {};
            if ((_a = options === null || options === void 0 ? void 0 : options.jsc) === null || _a === void 0 ? void 0 : _a.parser) {
                options.jsc.parser.syntax = (_b = options.jsc.parser.syntax) !== null && _b !== void 0 ? _b : 'ecmascript';
            }
            const { plugin } = options, newOptions = __rest(options, ["plugin"]);
            if (plugin) {
                const m = typeof src === "string"
                    ? yield this.parse(src, (_c = options === null || options === void 0 ? void 0 : options.jsc) === null || _c === void 0 ? void 0 : _c.parser, options.filename)
                    : src;
                return this.transform(plugin(m), newOptions);
            }
            return bindings.transform(isModule ? JSON.stringify(src) : src, isModule, toBuffer(newOptions));
        });
    }
    transformSync(src, options) {
        var _a, _b, _c;
        const isModule = typeof src !== "string";
        options = options || {};
        if ((_a = options === null || options === void 0 ? void 0 : options.jsc) === null || _a === void 0 ? void 0 : _a.parser) {
            options.jsc.parser.syntax = (_b = options.jsc.parser.syntax) !== null && _b !== void 0 ? _b : 'ecmascript';
        }
        const { plugin } = options, newOptions = __rest(options, ["plugin"]);
        if (plugin) {
            const m = typeof src === "string" ? this.parseSync(src, (_c = options === null || options === void 0 ? void 0 : options.jsc) === null || _c === void 0 ? void 0 : _c.parser, options.filename) : src;
            return this.transformSync(plugin(m), newOptions);
        }
        return bindings.transformSync(isModule ? JSON.stringify(src) : src, isModule, toBuffer(newOptions));
    }
    transformFile(path, options) {
        var _a, _b, _c;
        return __awaiter(this, void 0, void 0, function* () {
            options = options || {};
            if ((_a = options === null || options === void 0 ? void 0 : options.jsc) === null || _a === void 0 ? void 0 : _a.parser) {
                options.jsc.parser.syntax = (_b = options.jsc.parser.syntax) !== null && _b !== void 0 ? _b : 'ecmascript';
            }
            const { plugin } = options, newOptions = __rest(options, ["plugin"]);
            newOptions.filename = path;
            if (plugin) {
                const m = yield this.parseFile(path, (_c = options === null || options === void 0 ? void 0 : options.jsc) === null || _c === void 0 ? void 0 : _c.parser);
                return this.transform(plugin(m), newOptions);
            }
            return bindings.transformFile(path, false, toBuffer(newOptions));
        });
    }
    transformFileSync(path, options) {
        var _a, _b, _c;
        options = options || {};
        if ((_a = options === null || options === void 0 ? void 0 : options.jsc) === null || _a === void 0 ? void 0 : _a.parser) {
            options.jsc.parser.syntax = (_b = options.jsc.parser.syntax) !== null && _b !== void 0 ? _b : 'ecmascript';
        }
        const { plugin } = options, newOptions = __rest(options, ["plugin"]);
        newOptions.filename = path;
        if (plugin) {
            const m = this.parseFileSync(path, (_c = options === null || options === void 0 ? void 0 : options.jsc) === null || _c === void 0 ? void 0 : _c.parser);
            return this.transformSync(plugin(m), newOptions);
        }
        return bindings.transformFileSync(path, /* isModule */ false, toBuffer(newOptions));
    }
    bundle(options) {
        return __awaiter(this, void 0, void 0, function* () {
            const opts = yield (0, spack_1.compileBundleOptions)(options);
            if (Array.isArray(opts)) {
                const all = yield Promise.all(opts.map((opt) => __awaiter(this, void 0, void 0, function* () {
                    return this.bundle(opt);
                })));
                let obj = {};
                for (const o of all) {
                    obj = Object.assign(Object.assign({}, obj), o);
                }
                return obj;
            }
            return bindings.bundle(toBuffer(Object.assign({}, opts)));
        });
    }
}
exports.Compiler = Compiler;
const compiler = new Compiler();
function parse(src, options) {
    return compiler.parse(src, options);
}
exports.parse = parse;
function parseSync(src, options) {
    return compiler.parseSync(src, options);
}
exports.parseSync = parseSync;
function parseFile(path, options) {
    return compiler.parseFile(path, options);
}
exports.parseFile = parseFile;
function parseFileSync(path, options) {
    return compiler.parseFileSync(path, options);
}
exports.parseFileSync = parseFileSync;
function print(m, options) {
    return compiler.print(m, options);
}
exports.print = print;
function printSync(m, options) {
    return compiler.printSync(m, options);
}
exports.printSync = printSync;
function transform(src, options) {
    return compiler.transform(src, options);
}
exports.transform = transform;
function transformSync(src, options) {
    return compiler.transformSync(src, options);
}
exports.transformSync = transformSync;
function transformFile(path, options) {
    return compiler.transformFile(path, options);
}
exports.transformFile = transformFile;
function transformFileSync(path, options) {
    return compiler.transformFileSync(path, options);
}
exports.transformFileSync = transformFileSync;
function bundle(options) {
    return compiler.bundle(options);
}
exports.bundle = bundle;
function minify(src, opts) {
    return __awaiter(this, void 0, void 0, function* () {
        return compiler.minify(src, opts);
    });
}
exports.minify = minify;
function minifySync(src, opts) {
    return compiler.minifySync(src, opts);
}
exports.minifySync = minifySync;
/**
 * Configure custom trace configuration runs for a process lifecycle.
 * Currently only chromium's trace event format is supported.
 * (https://docs.google.com/document/d/1CvAClvFfyA5R-PhYUmn5OOQtYMH4h6I0nSsKchNAySU/preview)
 *
 * This should be called before calling any binding interfaces exported in `@swc/core`, such as
 * `transform*`, or `parse*` or anything. To avoid breaking changes, each binding fn internally
 * sets default trace subscriber if not set.
 *
 * Unlike other configuration, this does not belong to individual api surface using swcrc
 * or api's parameters (`transform(..., {trace})`). This is due to current tracing subscriber
 * can be configured only once for the global scope. Calling `registerGlobalTraceConfig` multiple
 * time won't cause error, subsequent calls will be ignored.
 *
 * As name implies currently this is experimental interface may change over time without semver
 * major breaking changes. Please provide feedbacks,
 * or bug report at https://github.com/swc-project/swc/discussions.
 */
function __experimental_registerGlobalTraceConfig(traceConfig) {
    if (traceConfig.type === 'traceEvent') {
        bindings.initCustomTraceSubscriber(traceConfig.fileName);
    }
}
exports.__experimental_registerGlobalTraceConfig = __experimental_registerGlobalTraceConfig;
/**
 * @ignore
 *
 * Returns current binary's metadata to determine which binary is actually loaded.
 *
 * This is undocumented interface, does not guarantee stability across `@swc/core`'s semver
 * as internal representation may change anytime. Use it with caution.
 */
function getBinaryMetadata() {
    return {
        target: bindings.getTargetTriple()
    };
}
exports.getBinaryMetadata = getBinaryMetadata;
exports.DEFAULT_EXTENSIONS = Object.freeze([
    ".js",
    ".jsx",
    ".es6",
    ".es",
    ".mjs",
    ".ts",
    ".tsx"
]);
function toBuffer(t) {
    return Buffer.from(JSON.stringify(t));
}

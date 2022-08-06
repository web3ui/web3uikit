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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const docGen = __importStar(require("react-docgen-typescript"));
const ts = __importStar(require("typescript"));
const glob_promise_1 = __importDefault(require("glob-promise"));
const path = __importStar(require("path"));
const generateDocgenCodeBlock_1 = require("./generateDocgenCodeBlock");
/** Get the contents of the tsconfig in the system */
function getTSConfigFile(tsconfigPath) {
    try {
        const basePath = path.dirname(tsconfigPath);
        const configFile = ts.readConfigFile(tsconfigPath, ts.sys.readFile);
        return ts.parseJsonConfigFileContent(configFile.config, ts.sys, basePath, {}, tsconfigPath);
    }
    catch (error) {
        return {};
    }
}
/** Create a glob matching function. */
function matchGlob(globs = []) {
    const matchers = globs.map((g) => (0, glob_promise_1.default)(g, { dot: true }));
    return async (filename) => {
        const matches = (await Promise.all(matchers))[0] || [];
        return Boolean(filename &&
            matches.find((match) => path.normalize(filename) === path.join(process.cwd(), match)));
    };
}
const defaultPropFilter = (prop) => {
    var _a;
    return !((_a = prop.parent) === null || _a === void 0 ? void 0 : _a.fileName.includes("node_modules"));
};
function getOptions(options) {
    const { tsconfigPath = "./tsconfig.json", compilerOptions: userCompilerOptions, docgenCollectionName = "STORYBOOK_REACT_CLASSES", setDisplayName = true, typePropName = "type", propFilter = defaultPropFilter, ...docgenOptions } = options;
    let compilerOptions = {
        jsx: ts.JsxEmit.React,
        module: ts.ModuleKind.CommonJS,
        target: ts.ScriptTarget.Latest,
    };
    if (userCompilerOptions) {
        compilerOptions = {
            ...compilerOptions,
            ...userCompilerOptions,
        };
    }
    else {
        const { options: tsOptions } = getTSConfigFile(tsconfigPath);
        compilerOptions = { ...compilerOptions, ...tsOptions };
    }
    return {
        docgenOptions: {
            propFilter,
            ...docgenOptions,
        },
        generateOptions: {
            docgenCollectionName,
            setDisplayName,
            typePropName,
        },
        compilerOptions,
    };
}
function reactDocgenTypescript(config = {}) {
    const { docgenOptions, compilerOptions, generateOptions } = getOptions(config);
    const docGenParser = docGen.withCompilerOptions(compilerOptions, docgenOptions);
    const { exclude = ["**/**.stories.tsx"], include = ["**/**.tsx"] } = docgenOptions;
    const isExcluded = matchGlob(exclude);
    const isIncluded = matchGlob(include);
    const files = include
        .map((filePath) => glob_promise_1.default.sync(path.isAbsolute(filePath)
        ? filePath
        : path.join(process.cwd(), filePath)))
        .reduce((carry, files) => carry.concat(files), []);
    const tsProgram = ts.createProgram(files, compilerOptions);
    return {
        name: "vite:react-docgen-typescript",
        async transform(src, id) {
            if (!(await isExcluded(id)) && (await isIncluded(id))) {
                const componentDocs = docGenParser.parseWithProgramProvider(id, () => tsProgram);
                if (!componentDocs.length) {
                    return null;
                }
                return (0, generateDocgenCodeBlock_1.generateDocgenCodeBlock)({
                    filename: id,
                    source: src,
                    componentDocs,
                    ...generateOptions,
                });
            }
        },
    };
}
exports.default = reactDocgenTypescript;
//# sourceMappingURL=plugin.js.map
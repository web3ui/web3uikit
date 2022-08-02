var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw new Error('Dynamic require of "' + x + '" is not supported');
});

// src/plugin.ts
import { resolve as resolve3, dirname as dirname3, relative as relative2, basename } from "path";
import fs from "fs-extra";
import os from "os";
import chalk from "chalk";
import glob from "fast-glob";
import { debug } from "debug";
import { Project } from "ts-morph";
import { normalizePath as normalizePath2 } from "vite";
import { readConfigFile } from "typescript";

// src/transform.ts
import { dirname as dirname2, relative, isAbsolute as isAbsolute2 } from "path";
import { normalizePath } from "vite";

// src/utils.ts
import { resolve, isAbsolute, dirname, normalize, sep } from "path";
import { existsSync, readdirSync, lstatSync, rmdirSync } from "fs";
function isNativeObj(value) {
  return Object.prototype.toString.call(value) === "[object Object]";
}
function isRegExp(value) {
  return Object.prototype.toString.call(value) === "[object RegExp]";
}
function isPromise(value) {
  return !!value && typeof value.then === "function" && typeof value.catch === "function";
}
function mergeObjects(sourceObj, targetObj) {
  const loop = [
    {
      source: sourceObj,
      target: targetObj
    }
  ];
  while (loop.length) {
    const { source, target } = loop.pop();
    Object.keys(target).forEach((key) => {
      if (isNativeObj(target[key])) {
        if (!isNativeObj(source[key])) {
          source[key] = {};
        }
        loop.push({
          source: source[key],
          target: target[key]
        });
      } else if (Array.isArray(target[key])) {
        if (!Array.isArray(source[key])) {
          source[key] = [];
        }
        loop.push({
          source: source[key],
          target: target[key]
        });
      } else {
        source[key] = target[key];
      }
    });
  }
  return sourceObj;
}
function ensureAbsolute(path, root) {
  return path ? isAbsolute(path) ? path : resolve(root, path) : root;
}
function ensureArray(value) {
  return Array.isArray(value) ? value : value ? [value] : [];
}
async function runParallel(maxConcurrency, source, iteratorFn) {
  const ret = [];
  const executing = [];
  for (const item of source) {
    const p = Promise.resolve().then(() => iteratorFn(item, source));
    ret.push(p);
    if (maxConcurrency <= source.length) {
      const e = p.then(() => executing.splice(executing.indexOf(e), 1));
      executing.push(e);
      if (executing.length >= maxConcurrency) {
        await Promise.race(executing);
      }
    }
  }
  return Promise.all(ret);
}
var speRE = /[\\/]/;
function queryPublicPath(paths) {
  if (paths.length === 0) {
    return "";
  } else if (paths.length === 1) {
    return dirname(paths[0]);
  }
  let publicPath = normalize(dirname(paths[0])) + sep;
  let publicUnits = publicPath.split(speRE);
  let index2 = publicUnits.length - 1;
  for (const path of paths.slice(1)) {
    if (!index2) {
      return publicPath;
    }
    const dirPath = normalize(dirname(path)) + sep;
    if (dirPath.startsWith(publicPath)) {
      continue;
    }
    const units = dirPath.split(speRE);
    if (units.length < index2) {
      publicPath = dirPath;
      publicUnits = units;
      continue;
    }
    for (let i = 0; i <= index2; ++i) {
      if (publicUnits[i] !== units[i]) {
        if (!i) {
          return "";
        }
        index2 = i - 1;
        publicUnits = publicUnits.slice(0, index2 + 1);
        publicPath = publicUnits.join(sep) + sep;
        break;
      }
    }
  }
  return publicPath.slice(0, -1);
}
function removeDirIfEmpty(dir) {
  if (!existsSync(dir)) {
    return;
  }
  let onlyHasDir = true;
  for (const file of readdirSync(dir)) {
    const abs = resolve(dir, file);
    if (lstatSync(abs).isDirectory()) {
      if (!removeDirIfEmpty(abs)) {
        onlyHasDir = false;
      }
    } else {
      onlyHasDir = false;
    }
  }
  if (onlyHasDir) {
    rmdirSync(dir);
  }
  return onlyHasDir;
}

// src/transform.ts
var globSuffixRE = /^((?:.*\.[^.]+)|(?:\*+))$/;
function normalizeGlob(path) {
  if (/[\\/]$/.test(path)) {
    return path + "**";
  } else if (!globSuffixRE.test(path.split(/[\\/]/).pop())) {
    return path + "/**";
  }
  return path;
}
var globalDynamicTypeRE = /import\(['"][^;\n]+?['"]\)\.\w+[.()[\]<>,;\n\s]/g;
var dynamicTypeRE = /import\(['"](.+)['"]\)\.(.+)([.()[\]<>,;\n\s])/;
var importTypesRE = /import\s?(?:type)?\s?\{(.+)\}\s?from\s?['"].+['"]/;
function transformDynamicImport(content) {
  const importMap = /* @__PURE__ */ new Map();
  content = content.replace(globalDynamicTypeRE, (str) => {
    var _a;
    const matchResult = str.match(dynamicTypeRE);
    const libName = matchResult[1];
    const importSet = (_a = importMap.get(libName)) != null ? _a : importMap.set(libName, /* @__PURE__ */ new Set()).get(libName);
    const usedType = matchResult[2];
    importSet.add(usedType);
    return usedType + matchResult[3];
  });
  importMap.forEach((importSet, libName) => {
    const importReg = new RegExp(`import\\s?(?:type)?\\s?\\{[^;\\n]+\\}\\s?from\\s?['"]${libName}['"]`, "g");
    const matchResult = content.match(importReg);
    if (matchResult == null ? void 0 : matchResult[0]) {
      const importedTypes = matchResult[0].match(importTypesRE)[1].trim().split(",");
      content = content.replace(matchResult[0], `import type { ${Array.from(importSet).concat(importedTypes).join(", ")} } from '${libName}'`);
    } else {
      content = `import type { ${Array.from(importSet).join(", ")} } from '${libName}';
` + content;
    }
  });
  return content;
}
function isAliasMatch(alias, importee) {
  if (isRegExp(alias.find))
    return alias.find.test(importee);
  if (importee.length < alias.find.length)
    return false;
  if (importee === alias.find)
    return true;
  return importee.indexOf(alias.find) === 0 && (alias.find.endsWith("/") || importee.substring(alias.find.length)[0] === "/");
}
var globalImportRE = /(?:(?:import|export)\s?(?:type)?\s?(?:(?:\{[^;\n]+\})|(?:[^;\n]+))\s?from\s?['"][^;\n]+['"])|(?:import\(['"][^;\n]+?['"]\))/g;
var staticImportRE = /(?:import|export)\s?(?:type)?\s?\{?.+\}?\s?from\s?['"](.+)['"]/;
var dynamicImportRE = /import\(['"]([^;\n]+?)['"]\)/;
var simpleStaticImportRE = /((?:import|export).+from\s?)['"](.+)['"]/;
var simpleDynamicImportRE = /(import\()['"](.+)['"]\)/;
function transformAliasImport(filePath, content, aliases) {
  if (!aliases.length)
    return content;
  return content.replace(globalImportRE, (str) => {
    let matchResult = str.match(staticImportRE);
    let isDynamic = false;
    if (!matchResult) {
      matchResult = str.match(dynamicImportRE);
      isDynamic = true;
    }
    if (matchResult == null ? void 0 : matchResult[1]) {
      const matchedAlias = aliases.find((alias) => isAliasMatch(alias, matchResult[1]));
      if (matchedAlias) {
        const truthPath = isAbsolute2(matchedAlias.replacement) ? normalizePath(relative(dirname2(filePath), matchedAlias.replacement)) : normalizePath(matchedAlias.replacement);
        return str.replace(isDynamic ? simpleDynamicImportRE : simpleStaticImportRE, `$1'${matchResult[1].replace(matchedAlias.find, (truthPath.startsWith(".") ? truthPath : `./${truthPath}`) + (typeof matchedAlias.find === "string" && matchedAlias.find.endsWith("/") ? "/" : ""))}'${isDynamic ? ")" : ""}`);
      }
    }
    return str;
  });
}
var pureImportRE = /import\s?['"][^;\n]+?['"];?\n?/g;
function removePureImport(content) {
  return content.replace(pureImportRE, "");
}
var setupFunctionRE = /function setup\([\s\S]+\)\s+?\{[\s\S]+return __returned__\n\}/;
function transferSetupPosition(content) {
  const match = content.match(setupFunctionRE);
  if (match) {
    const setupFunction = match[0];
    return content.replace(setupFunction, "").replace("setup})", setupFunction.slice("function ".length) + "\n\r})");
  }
  return content;
}

// src/compile.ts
var exportDefaultRE = /export\s+default/;
var exportDefaultClassRE = /(?:(?:^|\n|;)\s*)export\s+default\s+class\s+([\w$]+)/;
var index = 1;
var compileRoot = null;
var compiler;
function requireCompiler() {
  if (!compiler) {
    if (compileRoot) {
      try {
        compiler = __require(__require.resolve("vue/compiler-sfc", { paths: [compileRoot] }));
      } catch (e) {
      }
    }
    if (!compiler) {
      try {
        compiler = __require("vue/compiler-sfc");
      } catch (e) {
        try {
          compiler = __require("@vue/compiler-sfc");
        } catch (e2) {
          throw new Error("@vue/compiler-sfc is not present in the dependency tree.\n");
        }
      }
    }
  }
  return compiler;
}
function setCompileRoot(root) {
  if (root && root !== compileRoot) {
    compileRoot = root;
    compiler = null;
  }
}
function compileVueCode(code) {
  const { parse, compileScript, rewriteDefault } = requireCompiler();
  const { descriptor } = parse(code);
  const { script, scriptSetup } = descriptor;
  let content = null;
  let ext = null;
  if (script || scriptSetup) {
    if (scriptSetup) {
      const compiled = compileScript(descriptor, {
        id: `${index++}`
      });
      const classMatch = compiled.content.match(exportDefaultClassRE);
      if (classMatch) {
        content = compiled.content.replace(exportDefaultClassRE, "\nclass $1") + `
const _sfc_main = ${classMatch[1]}`;
        if (exportDefaultRE.test(content)) {
          content = rewriteDefault(compiled.content, "_sfc_main");
        }
      } else {
        content = rewriteDefault(compiled.content, "_sfc_main");
      }
      content = transferSetupPosition(content);
      content += "\nexport default _sfc_main\n";
      ext = scriptSetup.lang || "js";
    } else if (script && script.content) {
      content = rewriteDefault(script.content, "_sfc_main");
      content += "\nexport default _sfc_main\n";
      ext = script.lang || "js";
    }
  }
  return { content, ext };
}

// src/rollup.ts
import { resolve as resolve2 } from "path";
import { ExtractorConfig, CompilerState } from "@microsoft/api-extractor";
import { Collector } from "@microsoft/api-extractor/lib/collector/Collector";
import { MessageRouter } from "@microsoft/api-extractor/lib/collector/MessageRouter";
import {
  DtsRollupGenerator,
  DtsRollupKind
} from "@microsoft/api-extractor/lib/generators/DtsRollupGenerator";
import { PackageJsonLookup } from "@rushstack/node-core-library";
var dtsRE = /\.d\.tsx?$/;
function rollupDeclarationFiles({
  root,
  tsConfigPath,
  outputDir,
  entryPath,
  fileName,
  compilerOptions
}) {
  const configObjectFullPath = resolve2(root, "api-extractor.json");
  const packageJsonLookup = new PackageJsonLookup();
  const packageJsonFullPath = packageJsonLookup.tryGetPackageJsonFilePathFor(configObjectFullPath);
  if (!dtsRE.test(fileName)) {
    fileName += ".d.ts";
  }
  const extractorConfig = ExtractorConfig.prepare({
    configObject: {
      projectFolder: root,
      mainEntryPointFilePath: entryPath,
      compiler: {
        tsconfigFilePath: tsConfigPath,
        overrideTsconfig: compilerOptions
      },
      apiReport: {
        enabled: false,
        reportFileName: "<unscopedPackageName>.api.md"
      },
      docModel: {
        enabled: false
      },
      dtsRollup: {
        enabled: true,
        publicTrimmedFilePath: resolve2(outputDir, fileName)
      },
      tsdocMetadata: {
        enabled: false
      },
      messages: {
        compilerMessageReporting: {
          default: {
            logLevel: "none"
          }
        },
        extractorMessageReporting: {
          default: {
            logLevel: "none"
          }
        }
      }
    },
    configObjectFullPath,
    packageJsonFullPath
  });
  const compilerState = CompilerState.create(extractorConfig, {
    localBuild: true,
    showVerboseMessages: false
  });
  const messageRouter = new MessageRouter({
    workingPackageFolder: root,
    messageCallback: void 0,
    messagesConfig: extractorConfig.messages,
    showVerboseMessages: false,
    showDiagnostics: false,
    tsdocConfiguration: extractorConfig.tsdocConfiguration
  });
  const collector = new Collector({
    program: compilerState.program,
    messageRouter,
    extractorConfig
  });
  collector.analyze();
  DtsRollupGenerator.writeTypingsFile(collector, extractorConfig.publicTrimmedFilePath, DtsRollupKind.PublicRelease, extractorConfig.newlineKind);
}

// src/plugin.ts
var noneExport = "export {};\n";
var virtualPrefix = "\0";
var vueRE = /\.vue$/;
var tsRE = /\.tsx?$/;
var jsRE = /\.jsx?$/;
var dtsRE2 = /\.d\.tsx?$/;
var tjsRE = /\.(t|j)sx?$/;
var watchExtensionRE = /\.(vue|(t|j)sx?)$/;
var fullRelativeRE = /^\.\.?\//;
var defaultIndex = "index.d.ts";
var noop = () => {
};
var logPrefix = chalk.cyan("[vite:dts]");
var bundleDebug = debug("vite-plugin-dts:bundle");
function dtsPlugin(options = {}) {
  var _a, _b;
  const {
    tsConfigFilePath = "tsconfig.json",
    aliasesExclude = [],
    cleanVueFileName = false,
    staticImport = false,
    clearPureImport = true,
    insertTypesEntry = false,
    rollupTypes = false,
    noEmitOnError = false,
    skipDiagnostics = true,
    logDiagnostics = false,
    copyDtsFiles = true,
    afterDiagnostic = noop,
    beforeWriteFile = noop,
    afterBuild = noop
  } = options;
  const compilerOptions = (_a = options.compilerOptions) != null ? _a : {};
  let root;
  let entryRoot = (_b = options.entryRoot) != null ? _b : "";
  let libName;
  let indexName;
  let aliases;
  let entries;
  let logger;
  let project;
  let tsConfigPath;
  let outputDir;
  let isBundle = false;
  const sourceDtsFiles = /* @__PURE__ */ new Set();
  let hasJsVue = false;
  let allowJs = false;
  return {
    name: "vite:dts",
    apply: "build",
    enforce: "pre",
    config(config) {
      var _a2, _b2;
      if (isBundle)
        return;
      const aliasOptions = (_b2 = (_a2 = config == null ? void 0 : config.resolve) == null ? void 0 : _a2.alias) != null ? _b2 : [];
      if (isNativeObj(aliasOptions)) {
        aliases = Object.entries(aliasOptions).map(([key, value]) => {
          return { find: key, replacement: value };
        });
      } else {
        aliases = ensureArray(aliasOptions);
      }
      if (aliasesExclude.length > 0) {
        aliases = aliases.filter(({ find }) => !aliasesExclude.some((alias) => {
          var _a3;
          return !alias && (isRegExp(find) ? find.toString() === alias.toString() : isRegExp(alias) ? (_a3 = find.match(alias)) == null ? void 0 : _a3[0] : find === alias);
        }));
      }
    },
    configResolved(config) {
      var _a2, _b2, _c;
      if (isBundle)
        return;
      logger = config.logger;
      if (!config.build.lib) {
        logger.warn(chalk.yellow(`
${chalk.cyan("[vite:dts]")} You building not a library that may not need to generate declaration files.
`));
        libName = "_default";
        indexName = defaultIndex;
      } else {
        const filename = (_a2 = config.build.lib.fileName) != null ? _a2 : defaultIndex;
        libName = config.build.lib.name || "_default";
        indexName = typeof filename === "string" ? filename : filename("es");
        if (!dtsRE2.test(indexName)) {
          indexName = `${tjsRE.test(indexName) ? indexName.replace(tjsRE, "") : indexName}.d.ts`;
        }
      }
      root = ensureAbsolute((_b2 = options.root) != null ? _b2 : "", config.root);
      tsConfigPath = ensureAbsolute(tsConfigFilePath, root);
      outputDir = options.outputDir ? ensureAbsolute(options.outputDir, root) : ensureAbsolute(config.build.outDir, root);
      if (!outputDir) {
        logger.error(chalk.red(`
${chalk.cyan("[vite:dts]")} Can not resolve declaration directory, please check your vite config and plugin options.
`));
        return;
      }
      setCompileRoot(root);
      compilerOptions.rootDir || (compilerOptions.rootDir = root);
      project = new Project({
        compilerOptions: mergeObjects(compilerOptions, {
          noEmitOnError,
          outDir: ".",
          declarationDir: null,
          noUnusedParameters: false,
          declaration: true,
          noEmit: false,
          emitDeclarationOnly: true
        }),
        tsConfigFilePath: tsConfigPath,
        skipAddingFilesFromTsConfig: true
      });
      allowJs = (_c = project.getCompilerOptions().allowJs) != null ? _c : false;
    },
    buildStart(inputOptions) {
      if (!isBundle && (insertTypesEntry || rollupTypes)) {
        entries = Array.isArray(inputOptions.input) ? inputOptions.input : Object.values(inputOptions.input);
      }
    },
    transform(code, id) {
      if (id.startsWith(virtualPrefix)) {
        return null;
      }
      if (vueRE.test(id)) {
        const { content, ext } = compileVueCode(code);
        if (content) {
          if (ext === "js" || ext === "jsx")
            hasJsVue = true;
          project.createSourceFile(`${id}.${ext || "js"}`, content, { overwrite: true });
        }
      } else if (!id.includes(".vue?vue") && (tsRE.test(id) || allowJs && jsRE.test(id))) {
        project.addSourceFileAtPath(id);
      }
      return null;
    },
    watchChange(id) {
      if (watchExtensionRE.test(id)) {
        isBundle = false;
        if (project) {
          const sourceFile = project.getSourceFile(normalizePath2(id));
          sourceFile && project.removeSourceFile(sourceFile);
        }
      }
    },
    async closeBundle() {
      var _a2, _b2, _c, _d, _e, _f;
      if (!outputDir || !project || isBundle)
        return;
      logger.info(chalk.green(`
${logPrefix} Start generate declaration files...`));
      bundleDebug("start");
      isBundle = true;
      sourceDtsFiles.clear();
      const startTime = Date.now();
      const tsConfig = (_a2 = readConfigFile(tsConfigPath, project.getFileSystem().readFileSync).config) != null ? _a2 : {};
      const include = (_c = (_b2 = options.include) != null ? _b2 : tsConfig.include) != null ? _c : "**/*";
      const exclude = (_d = options.exclude) != null ? _d : tsConfig.exclude;
      bundleDebug("read config");
      const includedFileSet = /* @__PURE__ */ new Set();
      if (include && include.length) {
        const files = await glob(ensureArray(include).map(normalizeGlob), {
          cwd: root,
          absolute: true,
          ignore: ensureArray(exclude != null ? exclude : ["node_modules/**"]).map(normalizeGlob)
        });
        files.forEach((file) => {
          if (dtsRE2.test(file)) {
            if (!copyDtsFiles) {
              return;
            }
            includedFileSet.add(file);
            sourceDtsFiles.add(project.addSourceFileAtPath(file));
            return;
          }
          includedFileSet.add(`${tjsRE.test(file) ? file.replace(tjsRE, "") : file}.d.ts`);
        });
        if (hasJsVue) {
          if (!allowJs) {
            logger.warn(chalk.yellow(`${chalk.cyan("[vite:dts]")} Some js files are referenced, but you may not enable the 'allowJs' option.`));
          }
          project.compilerOptions.set({ allowJs: true });
        }
        bundleDebug("collect files");
      }
      project.resolveSourceFileDependencies();
      bundleDebug("resolve");
      if (!skipDiagnostics) {
        const diagnostics = project.getPreEmitDiagnostics();
        if ((diagnostics == null ? void 0 : diagnostics.length) && logDiagnostics) {
          logger.warn(project.formatDiagnosticsWithColorAndContext(diagnostics));
        }
        if (typeof afterDiagnostic === "function") {
          const result = afterDiagnostic(diagnostics);
          isPromise(result) && await result;
        }
        bundleDebug("diagnostics");
      }
      const dtsOutputFiles = Array.from(sourceDtsFiles).map((sourceFile) => ({
        path: sourceFile.getFilePath(),
        content: sourceFile.getFullText()
      }));
      const service = project.getLanguageService();
      const outputFiles = project.getSourceFiles().map((sourceFile) => service.getEmitOutput(sourceFile, true).getOutputFiles().map((outputFile) => ({
        path: outputFile.getFilePath(),
        content: outputFile.getText()
      }))).flat().concat(dtsOutputFiles);
      bundleDebug("emit");
      if (!entryRoot) {
        entryRoot = queryPublicPath(outputFiles.map((file) => file.path));
      }
      entryRoot = ensureAbsolute(entryRoot, root);
      const wroteFiles = /* @__PURE__ */ new Set();
      await runParallel(os.cpus().length, outputFiles, async (outputFile) => {
        var _a3, _b3;
        let filePath = outputFile.path;
        let content = outputFile.content;
        const isMapFile = filePath.endsWith(".map");
        if (!includedFileSet.has(isMapFile ? filePath.slice(0, -4) : filePath) || clearPureImport && content === noneExport) {
          return;
        }
        if (!isMapFile && content && content !== noneExport) {
          content = clearPureImport ? removePureImport(content) : content;
          content = transformAliasImport(filePath, content, aliases);
          content = staticImport || rollupTypes ? transformDynamicImport(content) : content;
        }
        filePath = resolve3(outputDir, relative2(entryRoot, cleanVueFileName ? filePath.replace(".vue.d.ts", ".d.ts") : filePath));
        if (typeof beforeWriteFile === "function") {
          const result = beforeWriteFile(filePath, content);
          if (result && isNativeObj(result)) {
            filePath = (_a3 = result.filePath) != null ? _a3 : filePath;
            content = (_b3 = result.content) != null ? _b3 : content;
          }
        }
        await fs.mkdir(dirname3(filePath), { recursive: true });
        await fs.writeFile(filePath, cleanVueFileName ? content.replace(/['"](.+)\.vue['"]/g, '"$1"') : content, "utf8");
        wroteFiles.add(normalizePath2(filePath));
      });
      bundleDebug("output");
      if (insertTypesEntry || rollupTypes) {
        const pkgPath = resolve3(root, "package.json");
        const pkg = fs.existsSync(pkgPath) ? JSON.parse(await fs.readFile(pkgPath, "utf-8")) : {};
        const types = pkg.types || pkg.typings;
        let typesPath = types ? resolve3(root, types) : resolve3(outputDir, indexName);
        if (!fs.existsSync(typesPath)) {
          const entry = entries[0];
          let filePath = normalizePath2(relative2(dirname3(typesPath), resolve3(outputDir, relative2(entryRoot, entry))));
          filePath = filePath.replace(tsRE, "");
          filePath = fullRelativeRE.test(filePath) ? filePath : `./${filePath}`;
          let content = `import ${libName} from '${filePath}'
export default ${libName}
export * from '${filePath}'
`;
          if (typeof beforeWriteFile === "function") {
            const result = beforeWriteFile(typesPath, content);
            if (result && isNativeObj(result)) {
              typesPath = (_e = result.filePath) != null ? _e : typesPath;
              content = (_f = result.content) != null ? _f : content;
            }
          }
          await fs.writeFile(typesPath, content, "utf-8");
        }
        bundleDebug("insert index");
        if (rollupTypes) {
          logger.info(chalk.green(`${logPrefix} Start rollup declaration files...`));
          rollupDeclarationFiles({
            root,
            tsConfigPath,
            compilerOptions,
            outputDir,
            entryPath: typesPath,
            fileName: basename(typesPath)
          });
          wroteFiles.delete(normalizePath2(typesPath));
          await runParallel(os.cpus().length, Array.from(wroteFiles), (f) => fs.unlink(f));
          removeDirIfEmpty(outputDir);
          if (copyDtsFiles) {
            await runParallel(os.cpus().length, dtsOutputFiles, async ({ path, content }) => {
              await fs.writeFile(resolve3(outputDir, basename(path)), content, "utf8");
            });
          }
          bundleDebug("rollup");
        }
      }
      if (typeof afterBuild === "function") {
        const result = afterBuild();
        isPromise(result) && await result;
      }
      bundleDebug("finish");
      logger.info(chalk.green(`${logPrefix} Declaration files built in ${Date.now() - startTime}ms.
`));
    }
  };
}

// src/index.ts
var src_default = dtsPlugin;
export {
  src_default as default
};

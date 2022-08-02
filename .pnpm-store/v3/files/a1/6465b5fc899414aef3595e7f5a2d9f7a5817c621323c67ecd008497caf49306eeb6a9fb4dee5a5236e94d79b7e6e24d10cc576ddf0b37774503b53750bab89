"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }// src/path.ts


var _os = require('os');



var _path = require('path');
var _vite = require('vite');

var isWindows = _os.platform.call(void 0, ) == "win32";
var resolve = isWindows ? (...paths) => _vite.normalizePath.call(void 0, _path.win32.resolve(...paths)) : _path.posix.resolve;
var isAbsolute = isWindows ? _path.win32.isAbsolute : _path.posix.isAbsolute;
var join = _path.posix.join;
var relative = _path.posix.relative;
var basename = _path.posix.basename;

// src/index.ts

var _tsconfigpaths = require('tsconfig-paths');
var _recrawlsync = require('recrawl-sync');
var _globrex = require('globrex'); var _globrex2 = _interopRequireDefault(_globrex);

// src/config.ts



var _tsconfigloaderjs = require('tsconfig-paths/lib/tsconfig-loader.js');


var _fs = require('fs');
function loadConfig(cwd) {
  const configPath = resolveConfigPath(cwd);
  if (configPath) {
    const config = _tsconfigloaderjs.loadTsconfig.call(void 0, configPath);
    const {
      compilerOptions: { allowJs, checkJs, baseUrl, paths, outDir } = {}
    } = config;
    return {
      configPath: _vite.normalizePath.call(void 0, configPath),
      include: config.include,
      exclude: config.exclude,
      allowJs: allowJs || checkJs,
      baseUrl: baseUrl && _vite.normalizePath.call(void 0, _path.resolve.call(void 0, configPath, "..", baseUrl)),
      paths,
      outDir
    };
  }
}
function resolveConfigPath(cwd) {
  if (_fs.statSync.call(void 0, cwd).isFile()) {
    return cwd;
  }
  const configPath = _tsconfigloaderjs.walkForTsConfig.call(void 0, cwd);
  if (configPath) {
    return configPath;
  }
}

// src/index.ts
var _debug2 = require('debug'); var _debug3 = _interopRequireDefault(_debug2);
var debug = _debug3.default.call(void 0, "vite-tsconfig-paths");
var src_default = (opts = {}) => {
  let resolvers;
  return {
    name: "vite:tsconfig-paths",
    enforce: "pre",
    configResolved(config) {
      const projects = findProjects(config.root, opts);
      const extensions = getFileExtensions(opts.extensions);
      debug("options:", { projects, extensions });
      resolvers = projects.map((project) => createResolver(project, extensions)).filter(Boolean);
    },
    async resolveId(id, importer) {
      if (importer && !relativeImportRE.test(id) && !isAbsolute(id)) {
        const viteResolve = async (id2, importer2) => {
          var _a;
          return (_a = await this.resolve(id2, importer2, { skipSelf: true })) == null ? void 0 : _a.id;
        };
        for (const resolve3 of resolvers) {
          const resolved = await resolve3(viteResolve, id, importer);
          if (resolved) {
            return resolved;
          }
        }
      }
    }
  };
  function createResolver(root, extensions) {
    const configPath = root.endsWith(".json") ? root : null;
    if (configPath)
      root = _path.dirname.call(void 0, root);
    root += "/";
    const config = loadConfig(configPath || root);
    if (!config) {
      debug(`[!] config not found: "${configPath || root}"`);
      return null;
    }
    const { baseUrl, paths } = config;
    if (!baseUrl && !paths) {
      debug(`[!] missing baseUrl and paths: "${config.configPath}"`);
      return null;
    }
    debug("config loaded:", config);
    const resolveWithBaseUrl = baseUrl ? (viteResolve, id, importer) => viteResolve(join(baseUrl, id), importer) : void 0;
    let resolveId;
    if (paths) {
      const matchPath = _tsconfigpaths.createMatchPathAsync.call(void 0, baseUrl != null ? baseUrl : root, paths, mainFields);
      const resolveWithPaths = (viteResolve, id, importer) => new Promise((done) => {
        matchPath(id, void 0, void 0, extensions, (error, path2) => {
          if (path2) {
            path2 = _vite.normalizePath.call(void 0, path2);
            done(viteResolve(path2, importer));
          } else {
            error && debug(error.message);
            done(void 0);
          }
        });
      });
      if (resolveWithBaseUrl) {
        resolveId = (viteResolve, id, importer) => resolveWithPaths(viteResolve, id, importer).then((resolved2) => {
          return resolved2 != null ? resolved2 : resolveWithBaseUrl(viteResolve, id, importer);
        });
      } else {
        resolveId = resolveWithPaths;
      }
    } else {
      resolveId = resolveWithBaseUrl;
    }
    const isIncluded = getIncluder(config);
    let importerExtRE = /./;
    if (!opts.loose) {
      importerExtRE = config.allowJs || basename(config.configPath) === "jsconfig.json" ? /\.(vue|svelte|mdx|mjs|[jt]sx?)$/ : /\.tsx?$/;
    }
    const resolved = new Map();
    return async (viteResolve, id, importer) => {
      var _a;
      if (id.includes("\0"))
        return;
      importer = _vite.normalizePath.call(void 0, importer);
      const importerFile = importer.replace(/[#?].+$/, "");
      if (!importerExtRE.test(importerFile))
        return;
      if (!isIncluded(relative(root, importerFile)))
        return;
      const suffix = (_a = /\?.+$/.exec(id)) == null ? void 0 : _a[0];
      if (suffix) {
        id = id.slice(0, -suffix.length);
      }
      let path2 = resolved.get(id);
      if (!path2) {
        path2 = await resolveId(viteResolve, id, importer);
        if (path2) {
          resolved.set(id, path2);
          debug(`resolved:`, {
            id,
            importer,
            resolvedId: path2,
            configPath: config.configPath
          });
        }
      }
      return path2 && suffix ? path2 + suffix : path2;
    };
  }
};
var relativeImportRE = /^\.\.?(\/|$)/;
var mainFields = ["module", "jsnext", "jsnext:main", "browser", "main"];
var defaultInclude = ["**/*"];
var defaultExclude = ["node_modules", "bower_components", "jspm_packages"];
function compileGlob(glob) {
  if (!relativeImportRE.test(glob)) {
    glob = "./" + glob;
  }
  if (!glob.split("/").pop().includes("*")) {
    glob += "/**";
  }
  return _globrex2.default.call(void 0, glob, {
    extended: true,
    globstar: true
  }).regex;
}
function getIncluder({
  include = defaultInclude,
  exclude = defaultExclude,
  outDir
}) {
  if (outDir) {
    exclude = exclude.concat(outDir);
  }
  if (include.length || exclude.length) {
    const included = include.map(compileGlob);
    const excluded = exclude.map(compileGlob);
    debug(`compiled globs:`, { included, excluded });
    return (path2) => {
      path2 = path2.replace(/\?.+$/, "");
      if (!relativeImportRE.test(path2)) {
        path2 = "./" + path2;
      }
      const test = (glob) => glob.test(path2);
      return included.some(test) && !excluded.some(test);
    };
  }
  return () => true;
}
function findProjects(viteRoot, opts) {
  const root = opts.root ? resolve(viteRoot, _vite.normalizePath.call(void 0, opts.root)) : viteRoot;
  let { projects } = opts;
  if (!projects) {
    debug(`crawling "${root}"`);
    projects = _recrawlsync.crawl.call(void 0, root, {
      only: ["jsconfig.json", "tsconfig.json"],
      skip: ["node_modules", ".git"]
    });
  }
  const depthMap = {};
  projects = projects.map((projectPath) => {
    projectPath = resolve(root, _vite.normalizePath.call(void 0, projectPath));
    depthMap[projectPath] = projectPath.split("/").length - (projectPath.endsWith(".json") ? 1 : 0);
    return projectPath;
  });
  return projects.sort((a, b) => depthMap[b] - depthMap[a]);
}
function getFileExtensions(exts) {
  const requiredExts = [".ts", ".tsx", ".js", ".jsx", ".mjs"];
  return exts ? exts.concat(requiredExts) : requiredExts;
}


exports.default = src_default;
//# sourceMappingURL=index.js.map

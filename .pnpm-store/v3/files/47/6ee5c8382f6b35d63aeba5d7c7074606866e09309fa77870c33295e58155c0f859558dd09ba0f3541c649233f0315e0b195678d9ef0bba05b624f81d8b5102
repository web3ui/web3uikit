"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.detect = detect;
exports.detectBuilder = detectBuilder;
exports.detectFrameworkPreset = detectFrameworkPreset;
exports.detectLanguage = detectLanguage;
exports.isStorybookInstalled = isStorybookInstalled;

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _findUp = _interopRequireDefault(require("find-up"));

var _project_types = require("./project_types");

var _helpers = require("./helpers");

var _jsPackageManager = require("./js-package-manager");

var _detectWebpack = require("./detect-webpack");

var _detectNextjs = require("./detect-nextjs");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const viteConfigFiles = ['vite.config.ts', 'vite.config.js', 'vite.config.mjs'];

const hasDependency = (packageJson, name, matcher) => {
  var _packageJson$dependen, _packageJson$devDepen;

  const version = ((_packageJson$dependen = packageJson.dependencies) === null || _packageJson$dependen === void 0 ? void 0 : _packageJson$dependen[name]) || ((_packageJson$devDepen = packageJson.devDependencies) === null || _packageJson$devDepen === void 0 ? void 0 : _packageJson$devDepen[name]);

  if (version && typeof matcher === 'function') {
    return matcher(version);
  }

  return !!version;
};

const hasPeerDependency = (packageJson, name, matcher) => {
  var _packageJson$peerDepe;

  const version = (_packageJson$peerDepe = packageJson.peerDependencies) === null || _packageJson$peerDepe === void 0 ? void 0 : _packageJson$peerDepe[name];

  if (version && typeof matcher === 'function') {
    return matcher(version);
  }

  return !!version;
};

const getFrameworkPreset = (packageJson, framework) => {
  const matcher = {
    dependencies: [false],
    peerDependencies: [false],
    files: [false]
  };
  const {
    preset,
    files,
    dependencies,
    peerDependencies,
    matcherFunction
  } = framework;
  let dependencySearches = [];

  if (Array.isArray(dependencies)) {
    dependencySearches = dependencies.map(name => [name, undefined]);
  } else if (typeof dependencies === 'object') {
    dependencySearches = Object.entries(dependencies);
  } // Must check the length so the `[false]` isn't overwritten if `{ dependencies: [] }`


  if (dependencySearches.length > 0) {
    matcher.dependencies = dependencySearches.map(([name, matchFn]) => hasDependency(packageJson, name, matchFn));
  }

  let peerDependencySearches = [];

  if (Array.isArray(peerDependencies)) {
    peerDependencySearches = peerDependencies.map(name => [name, undefined]);
  } else if (typeof peerDependencies === 'object') {
    peerDependencySearches = Object.entries(peerDependencies);
  } // Must check the length so the `[false]` isn't overwritten if `{ peerDependencies: [] }`


  if (peerDependencySearches.length > 0) {
    matcher.peerDependencies = peerDependencySearches.map(([name, matchFn]) => hasPeerDependency(packageJson, name, matchFn));
  }

  if (Array.isArray(files) && files.length > 0) {
    matcher.files = files.map(name => _fs.default.existsSync(_path.default.join(process.cwd(), name)));
  }

  return matcherFunction(matcher) ? preset : null;
};

function detectFrameworkPreset(packageJson = {}) {
  const result = [..._project_types.supportedTemplates, _project_types.unsupportedTemplate].find(framework => {
    return getFrameworkPreset(packageJson, framework) !== null;
  });
  return result ? result.preset : _project_types.ProjectType.UNDETECTED;
}
/**
 * Attempts to detect which builder to use, by searching for a vite config file.  If one is found, the vite builder
 * will be used, otherwise, webpack4 is the default.
 *
 * @returns CoreBuilder
 */


function detectBuilder(packageManager) {
  const viteConfig = _findUp.default.sync(viteConfigFiles);

  if (viteConfig) {
    (0, _helpers.paddedLog)('Detected vite project, setting builder to @storybook/builder-vite');
    return _project_types.CoreBuilder.Vite;
  }

  const nextJSVersion = (0, _detectNextjs.detectNextJS)(packageManager);

  if (nextJSVersion) {
    if (nextJSVersion >= 11) {
      return _project_types.CoreBuilder.Webpack5;
    }
  }

  const webpackVersion = (0, _detectWebpack.detectWebpack)(packageManager);

  if (webpackVersion) {
    if (webpackVersion <= 4) {
      return _project_types.CoreBuilder.Webpack4;
    }

    if (webpackVersion >= 5) {
      return _project_types.CoreBuilder.Webpack5;
    }
  } // Fallback to webpack4


  return _project_types.CoreBuilder.Webpack4;
}

function isStorybookInstalled(dependencies, force) {
  if (!dependencies) {
    return false;
  }

  if (!force && dependencies.devDependencies) {
    if (_project_types.SUPPORTED_FRAMEWORKS.reduce((storybookPresent, framework) => storybookPresent || !!dependencies.devDependencies[`@storybook/${framework}`], false)) {
      return _project_types.ProjectType.ALREADY_HAS_STORYBOOK;
    }

    if (dependencies.devDependencies['@kadira/storybook'] || dependencies.devDependencies['@kadira/react-native-storybook']) {
      return _project_types.ProjectType.UPDATE_PACKAGE_ORGANIZATIONS;
    }
  }

  return false;
}

function detectLanguage() {
  let language = _project_types.SupportedLanguage.JAVASCRIPT;
  let packageJson;

  try {
    packageJson = (0, _jsPackageManager.readPackageJson)();
  } catch (err) {//
  }

  const bowerJson = (0, _helpers.getBowerJson)();

  if (!packageJson && !bowerJson) {
    return language;
  }

  if (hasDependency(packageJson || bowerJson, 'typescript')) {
    language = _project_types.SupportedLanguage.TYPESCRIPT;
  }

  return language;
}

function detect(options = {}) {
  let packageJson;

  try {
    packageJson = (0, _jsPackageManager.readPackageJson)();
  } catch (err) {//
  }

  const bowerJson = (0, _helpers.getBowerJson)();

  if (!packageJson && !bowerJson) {
    return _project_types.ProjectType.UNDETECTED;
  }

  const storyBookInstalled = isStorybookInstalled(packageJson, options.force);

  if (storyBookInstalled) {
    return storyBookInstalled;
  }

  if (options.html) {
    return _project_types.ProjectType.HTML;
  }

  return detectFrameworkPreset(packageJson || bowerJson);
}
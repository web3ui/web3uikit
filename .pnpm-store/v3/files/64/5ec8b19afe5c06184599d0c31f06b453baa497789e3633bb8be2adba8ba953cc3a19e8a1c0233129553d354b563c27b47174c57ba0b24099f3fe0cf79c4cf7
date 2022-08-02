"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.baseGenerator = baseGenerator;

require("core-js/modules/es.promise.js");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _coreCommon = require("@storybook/core-common");

var _project_types = require("../project_types");

var _helpers = require("../helpers");

var _configure = require("./configure");

var _jsPackageManager = require("../js-package-manager");

var _babelConfig = require("../babel-config");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const defaultOptions = {
  extraPackages: [],
  extraAddons: [],
  staticDir: undefined,
  addScripts: true,
  addComponents: true,
  addBabel: true,
  addESLint: false,
  extraMain: undefined,
  extensions: undefined,
  commonJs: false
};

const builderDependencies = builder => {
  switch (builder) {
    case _project_types.CoreBuilder.Webpack4:
      return ['@storybook/builder-webpack4', '@storybook/manager-webpack4'];

    case _project_types.CoreBuilder.Webpack5:
      return ['@storybook/builder-webpack5', '@storybook/manager-webpack5'];

    case _project_types.CoreBuilder.Vite:
      return ['@storybook/builder-vite'];

    default:
      return [builder];
  }
};

const stripVersions = addons => addons.map(addon => (0, _jsPackageManager.getPackageDetails)(addon)[0]);

const hasInteractiveStories = framework => ['react', 'angular', 'preact', 'svelte', 'vue', 'vue3', 'html'].includes(framework);

async function baseGenerator(packageManager, npmOptions, {
  language,
  builder
}, framework, options = defaultOptions) {
  const {
    extraAddons,
    extraPackages,
    staticDir,
    addScripts,
    addComponents,
    addBabel,
    addESLint,
    extraMain,
    extensions
  } = Object.assign({}, defaultOptions, options); // added to main.js
  // make sure to update `canUsePrebuiltManager` in dev-server.js and build-manager-config/main.js when this list changes

  const addons = ['@storybook/addon-links', '@storybook/addon-essentials']; // added to package.json

  const addonPackages = [...addons, '@storybook/addon-actions'];

  if (hasInteractiveStories(framework)) {
    addons.push('@storybook/addon-interactions');
    addonPackages.push('@storybook/addon-interactions', '@storybook/testing-library');
  }

  const yarn2Dependencies = packageManager.type === 'yarn2' ? ['@storybook/addon-docs', '@mdx-js/react@1.x.x'] : [];
  const files = await _fsExtra.default.readdir(process.cwd());
  const isNewFolder = !files.some(fname => fname.startsWith('.babel') || fname.startsWith('babel') || fname === 'package.json');
  const packageJson = packageManager.retrievePackageJson();
  const installedDependencies = new Set(Object.keys(packageJson.dependencies));
  const frameworkPackage = `@storybook/${framework}`;
  const packages = [frameworkPackage, ...addonPackages, ...extraPackages, ...extraAddons, ...yarn2Dependencies, ...builderDependencies(builder)].filter(Boolean).filter(packageToInstall => !installedDependencies.has((0, _jsPackageManager.getPackageDetails)(packageToInstall)[0]));
  const versionedPackages = await packageManager.getVersionedPackages(...packages);
  const coreBuilders = [_project_types.CoreBuilder.Webpack4, _project_types.CoreBuilder.Webpack5, _project_types.CoreBuilder.Vite];
  const expandedBuilder = coreBuilders.includes(builder) ? `@storybook/builder-${builder}` : builder;
  const mainOptions = builder !== _project_types.CoreBuilder.Webpack4 ? Object.assign({
    core: {
      builder: expandedBuilder
    }
  }, extraMain) : extraMain; // Default vite builder to storyStoreV7

  if (expandedBuilder === '@storybook/builder-vite') {
    mainOptions.features = Object.assign({}, mainOptions.features, {
      storyStoreV7: true
    });
  }

  (0, _configure.configure)(framework, Object.assign({
    framework: frameworkPackage,
    addons: [...addons, ...stripVersions(extraAddons)],
    extensions,
    commonJs: options.commonJs
  }, mainOptions));

  if (addComponents) {
    (0, _helpers.copyComponents)(framework, language);
  } // FIXME: temporary workaround for https://github.com/storybookjs/storybook/issues/17516


  if (expandedBuilder === '@storybook/builder-vite') {
    const previewHead = (0, _tsDedent.default)`
      <script>
        window.global = window;
      </script>
    `;
    await _fsExtra.default.writeFile(`.storybook/preview-head.html`, previewHead, {
      encoding: 'utf8'
    });
  }

  const babelDependencies = addBabel ? await (0, _helpers.getBabelDependencies)(packageManager, packageJson) : [];

  if (isNewFolder) {
    babelDependencies.push(...(0, _coreCommon.getStorybookBabelDependencies)());
    await (0, _babelConfig.generateStorybookBabelConfigInCWD)();
  }

  packageManager.addDependencies(Object.assign({}, npmOptions, {
    packageJson
  }), [...versionedPackages, ...babelDependencies]);

  if (addScripts) {
    packageManager.addStorybookCommandInScripts({
      port: 6006,
      staticFolder: staticDir
    });
  }

  if (addESLint) {
    packageManager.addESLintConfig();
  }
}
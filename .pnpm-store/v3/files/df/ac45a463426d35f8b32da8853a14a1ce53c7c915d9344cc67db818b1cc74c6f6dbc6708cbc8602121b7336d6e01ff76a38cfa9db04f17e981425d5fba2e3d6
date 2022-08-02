"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _shelljs = _interopRequireDefault(require("shelljs"));

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generator = async (packageManager, npmOptions, installServer) => {
  // set correct project name on entry files if possible
  const dirname = _shelljs.default.ls('-d', 'ios/*.xcodeproj').stdout; // Only notify about app name if running in React Native vanilla (Expo projects do not have ios directory)


  if (dirname) {
    const projectName = dirname.slice('ios/'.length, dirname.length - '.xcodeproj'.length - 1);

    if (projectName) {
      _shelljs.default.sed('-i', '%APP_NAME%', projectName, 'storybook/index.js');
    } else {
      (0, _helpers.paddedLog)(_chalk.default.red('ERR: Could not determine project name, to fix: https://github.com/storybookjs/storybook/issues/1277'));
    }
  }

  const packageJson = packageManager.retrievePackageJson();
  const missingReactDom = !packageJson.dependencies['react-dom'] && !packageJson.devDependencies['react-dom'];
  const reactVersion = packageJson.dependencies.react; // should resolve to latest 5.3 version, this is required until react-native storybook supports v6

  const webAddonsV5 = ['@storybook/addon-links@^5.3', '@storybook/addon-knobs@^5.3', '@storybook/addon-actions@^5.3'];
  const nativeAddons = ['@storybook/addon-ondevice-knobs', '@storybook/addon-ondevice-actions'];
  const packagesToResolve = [...nativeAddons, '@storybook/react-native', installServer && '@storybook/react-native-server'].filter(Boolean);
  const resolvedPackages = await packageManager.getVersionedPackages(...packagesToResolve);
  const babelDependencies = await (0, _helpers.getBabelDependencies)(packageManager, packageJson);
  const packages = [...babelDependencies, ...resolvedPackages, ...webAddonsV5, missingReactDom && reactVersion && `react-dom@${reactVersion}`].filter(Boolean);
  packageManager.addDependencies(Object.assign({}, npmOptions, {
    packageJson
  }), packages);

  if (installServer) {
    packageManager.addStorybookCommandInScripts({
      port: 7007
    });
  }

  (0, _helpers.copyTemplate)(__dirname);
};

var _default = generator;
exports.default = _default;
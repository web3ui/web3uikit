"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.webpack5 = void 0;

require("core-js/modules/es.promise.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _semver = _interopRequireDefault(require("@storybook/semver"));

var _csfTools = require("@storybook/csf-tools");

var _coreCommon = require("@storybook/core-common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;

/**
 * Is the user using webpack5 in their project?
 *
 * If the user is using a version of SB >= 6.3,
 * prompt them to upgrade to webpack5.
 *
 * - Add manager-webpack5 builder-webpack5 as dev dependencies
 * - Add core.builder = 'webpack5' to main.js
 * - Add 'webpack5' as a project dependency
 */
const webpack5 = {
  id: 'webpack5',

  async checkWebpack5Builder(packageJson) {
    var _semver$coerce;

    const {
      mainConfig,
      version: storybookVersion
    } = (0, _coreCommon.getStorybookInfo)(packageJson);
    const storybookCoerced = storybookVersion && ((_semver$coerce = _semver.default.coerce(storybookVersion)) === null || _semver$coerce === void 0 ? void 0 : _semver$coerce.version);

    if (!storybookCoerced) {
      logger.warn((0, _tsDedent.default)`
        ❌ Unable to determine storybook version, skipping ${_chalk.default.cyan('webpack5')} fix.
        🤔 Are you running automigrate from your project directory?
      `);
      return null;
    }

    if (_semver.default.lt(storybookCoerced, '6.3.0')) {
      logger.warn((0, _tsDedent.default)`
          Detected SB 6.3 or below, please upgrade storybook to use webpack5.

          To upgrade to the latest stable release, run this from your project directory:

          ${_chalk.default.cyan('npx storybook upgrade')}

          Add the ${_chalk.default.cyan('--prerelease')} flag to get the latest prerelease.
        `.trim());
      return null;
    }

    if (_semver.default.gte(storybookCoerced, '7.0.0')) {
      return null;
    }

    if (!mainConfig) {
      logger.warn('Unable to find storybook main.js config');
      return null;
    }

    const main = await (0, _csfTools.readConfig)(mainConfig);
    const builder = main.getFieldValue(['core', 'builder']);

    if (builder && builder !== 'webpack4') {
      logger.info(`Found builder ${builder}, skipping`);
      return null;
    }

    return {
      storybookVersion,
      main
    };
  },

  async check({
    packageManager
  }) {
    var _semver$coerce2;

    const packageJson = packageManager.retrievePackageJson();
    const {
      dependencies,
      devDependencies
    } = packageJson;
    const webpackVersion = dependencies.webpack || devDependencies.webpack;
    const webpackCoerced = (_semver$coerce2 = _semver.default.coerce(webpackVersion)) === null || _semver$coerce2 === void 0 ? void 0 : _semver$coerce2.version;
    if (!webpackCoerced || _semver.default.lt(webpackCoerced, '5.0.0') || _semver.default.gte(webpackCoerced, '6.0.0')) return null;
    const builderInfo = await this.checkWebpack5Builder(packageJson);
    return builderInfo ? Object.assign({
      webpackVersion
    }, builderInfo) : null;
  },

  prompt({
    webpackVersion,
    storybookVersion
  }) {
    const webpackFormatted = _chalk.default.cyan(`webpack ${webpackVersion}`);

    const sbFormatted = _chalk.default.cyan(`Storybook ${storybookVersion}`);

    return (0, _tsDedent.default)`
      We've detected you're running ${webpackFormatted}.
      ${sbFormatted} runs webpack4 by default, which may not be compatible.
      
      To run Storybook in webpack5-mode, we can install Storybook's ${_chalk.default.cyan('webpack5 builder')} for you.

      More info: ${_chalk.default.yellow('https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#webpack-5-manager-build')}
    `;
  },

  async run({
    result: {
      main,
      storybookVersion,
      webpackVersion
    },
    packageManager,
    dryRun
  }) {
    const deps = [`@storybook/manager-webpack5@${storybookVersion}`, `@storybook/builder-webpack5@${storybookVersion}`]; // this also gets called by 'cra5' fix so we need to add
    // webpack5 at the project root so that it gets hoisted

    if (!webpackVersion) {
      deps.push('webpack@5');
    }

    logger.info(`✅ Adding dependencies: ${deps}`);
    if (!dryRun) packageManager.addDependencies({
      installAsDevDependencies: true
    }, deps);
    logger.info('✅ Setting `core.builder` to `webpack5` in main.js');

    if (!dryRun) {
      main.setFieldValue(['core', 'builder'], 'webpack5');
      await (0, _csfTools.writeConfig)(main);
    }
  }

};
exports.webpack5 = webpack5;
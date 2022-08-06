"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.mainjsFramework = void 0;

require("core-js/modules/es.promise.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _semver = _interopRequireDefault(require("@storybook/semver"));

var _csfTools = require("@storybook/csf-tools");

var _coreCommon = require("@storybook/core-common");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;
const mainjsFramework = {
  id: 'mainjsFramework',

  async check({
    packageManager
  }) {
    var _semver$coerce;

    const packageJson = packageManager.retrievePackageJson();
    const {
      mainConfig,
      framework,
      version: storybookVersion
    } = (0, _coreCommon.getStorybookInfo)(packageJson);

    if (!mainConfig) {
      logger.warn('Unable to find storybook main.js config, skipping');
      return null;
    }

    const storybookCoerced = storybookVersion && ((_semver$coerce = _semver.default.coerce(storybookVersion)) === null || _semver$coerce === void 0 ? void 0 : _semver$coerce.version);

    if (!storybookCoerced) {
      logger.warn((0, _tsDedent.default)`
        ❌ Unable to determine storybook version, skipping ${_chalk.default.cyan('mainjsFramework')} fix.
        🤔 Are you running automigrate from your project directory?
      `);
      return null;
    }

    const main = await (0, _csfTools.readConfig)(mainConfig);
    const currentFramework = main.getFieldValue(['framework']);
    const features = main.getFieldValue(['features']);
    if (currentFramework) return null;
    return features !== null && features !== void 0 && features.breakingChangesV7 || features !== null && features !== void 0 && features.storyStoreV7 || _semver.default.gte(storybookCoerced, '7.0.0') ? {
      main,
      framework: `@storybook/${framework}`
    } : null;
  },

  prompt({
    framework
  }) {
    const frameworkFormatted = _chalk.default.cyan(`framework: '${framework}'`);

    return (0, _tsDedent.default)`
      We've detected that your main.js configuration file does not specify the
      'framework' field, which is a requirement in SB7.0 and above. We can add one
      for you automatically:

      ${frameworkFormatted}

      More info: ${_chalk.default.yellow('https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#mainjs-framework-field')}
    `;
  },

  async run({
    result: {
      main,
      framework
    },
    dryRun
  }) {
    logger.info(`✅ Setting 'framework' to '${framework}' in main.js`);

    if (!dryRun) {
      main.setFieldValue(['framework'], framework);
      await (0, _csfTools.writeConfig)(main);
    }
  }

};
exports.mainjsFramework = mainjsFramework;
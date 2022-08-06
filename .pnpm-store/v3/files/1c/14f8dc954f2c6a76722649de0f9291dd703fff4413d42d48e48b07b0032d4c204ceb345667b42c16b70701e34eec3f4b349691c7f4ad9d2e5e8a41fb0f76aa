"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.builderVite = void 0;

require("core-js/modules/es.promise.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _csfTools = require("@storybook/csf-tools");

var _coreCommon = require("@storybook/core-common");

var _jsPackageManager = require("../../js-package-manager");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const logger = console;

/**
 * Is the user using 'storybook-builder-vite' in their project?
 *
 * If so, prompt them to upgrade to '@storybook/builder-vite'.
 *
 * - Add '@storybook/builder-vite' as dev dependency
 * - Remove 'storybook-builder-vite' dependency
 * - Add core.builder = '@storybook/builder-vite' to main.js
 */
const builderVite = {
  id: 'builder-vite',

  async check({
    packageManager
  }) {
    const packageJson = packageManager.retrievePackageJson();
    const {
      mainConfig
    } = (0, _coreCommon.getStorybookInfo)(packageJson);

    if (!mainConfig) {
      logger.warn('Unable to find storybook main.js config');
      return null;
    }

    const main = await (0, _csfTools.readConfig)(mainConfig);
    const builder = main.getFieldValue(['core', 'builder']);
    const builderName = typeof builder === 'string' ? builder : builder === null || builder === void 0 ? void 0 : builder.name;

    if (builderName !== 'storybook-builder-vite') {
      return null;
    }

    return {
      builder,
      main,
      packageJson
    };
  },

  prompt({
    builder
  }) {
    const builderFormatted = _chalk.default.cyan(JSON.stringify(builder, null, 2));

    return (0, _tsDedent.default)`
      We've detected you're using the community vite builder: ${builderFormatted}
      
      'storybook-builder-vite' is deprecated and now located at ${_chalk.default.cyan('@storybook/builder-vite')}.

      We can upgrade your project to use the new builder automatically.
      
      More info: ${_chalk.default.yellow('https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#vite-builder-renamed')}
    `;
  },

  async run({
    result: {
      builder,
      main,
      packageJson
    },
    packageManager,
    dryRun
  }) {
    const {
      dependencies = {},
      devDependencies = {}
    } = packageJson;
    logger.info(`Removing existing 'storybook-builder-vite' dependency`);

    if (!dryRun) {
      delete dependencies['storybook-builder-vite'];
      delete devDependencies['storybook-builder-vite'];
      (0, _jsPackageManager.writePackageJson)(packageJson);
    }

    logger.info(`Adding '@storybook/builder-vite' as dev dependency`);

    if (!dryRun) {
      packageManager.addDependencies({
        installAsDevDependencies: true
      }, ['@storybook/builder-vite']);
    }

    logger.info(`Updating main.js to use vite builder`);

    if (!dryRun) {
      const updatedBuilder = typeof builder === 'string' ? '@storybook/builder-vite' : {
        name: '@storybook/builder-vite',
        options: builder.options
      };
      main.setFieldValue(['core', 'builder'], updatedBuilder);
      await (0, _csfTools.writeConfig)(main);
    }
  }

};
exports.builderVite = builderVite;
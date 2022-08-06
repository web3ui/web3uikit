"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.angular12 = void 0;

require("core-js/modules/es.promise.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _semver = _interopRequireDefault(require("@storybook/semver"));

var _webpack = require("./webpack5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Is the user upgrading to Angular12?
 *
 * If so:
 * - Run webpack5 fix
 */
const angular12 = {
  id: 'angular12',

  async check({
    packageManager
  }) {
    var _semver$coerce;

    const packageJson = packageManager.retrievePackageJson();
    const {
      dependencies,
      devDependencies
    } = packageJson;
    const angularVersion = dependencies['@angular/core'] || devDependencies['@angular/core'];
    const angularCoerced = (_semver$coerce = _semver.default.coerce(angularVersion)) === null || _semver$coerce === void 0 ? void 0 : _semver$coerce.version;

    if (!angularCoerced || _semver.default.lt(angularCoerced, '12.0.0')) {
      return null;
    }

    const builderInfo = await _webpack.webpack5.checkWebpack5Builder(packageJson);
    return builderInfo ? Object.assign({
      angularVersion
    }, builderInfo) : null;
  },

  prompt({
    angularVersion,
    storybookVersion
  }) {
    const angularFormatted = _chalk.default.cyan(`Angular ${angularVersion}`);

    const sbFormatted = _chalk.default.cyan(`Storybook ${storybookVersion}`);

    return (0, _tsDedent.default)`
      We've detected you are running ${angularFormatted} which is powered by webpack5.
      ${sbFormatted} runs webpack4 by default, which is incompatible.

      In order to work with your version of Angular, we need to install Storybook's ${_chalk.default.cyan('webpack5 builder')}.

      More info: ${_chalk.default.yellow('https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#angular12-upgrade')}
    `;
  },

  async run(options) {
    return _webpack.webpack5.run(Object.assign({}, options, {
      result: Object.assign({
        webpackVersion: null
      }, options.result)
    }));
  }

};
exports.angular12 = angular12;
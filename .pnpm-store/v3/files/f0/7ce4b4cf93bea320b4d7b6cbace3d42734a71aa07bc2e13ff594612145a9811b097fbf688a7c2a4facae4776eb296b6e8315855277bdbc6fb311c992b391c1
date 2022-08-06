"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.cra5 = void 0;

require("core-js/modules/es.promise.js");

var _chalk = _interopRequireDefault(require("chalk"));

var _tsDedent = _interopRequireDefault(require("ts-dedent"));

var _semver = _interopRequireDefault(require("@storybook/semver"));

var _webpack = require("./webpack5");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/**
 * Is the user upgrading from CRA4 to CRA5?
 *
 * If so:
 * - Run webpack5 fix
 */
const cra5 = {
  id: 'cra5',

  async check({
    packageManager
  }) {
    var _semver$coerce;

    const packageJson = packageManager.retrievePackageJson();
    const {
      dependencies,
      devDependencies
    } = packageJson;
    const craVersion = dependencies['react-scripts'] || devDependencies['react-scripts'];
    const craCoerced = (_semver$coerce = _semver.default.coerce(craVersion)) === null || _semver$coerce === void 0 ? void 0 : _semver$coerce.version;

    if (!craCoerced || _semver.default.lt(craCoerced, '5.0.0')) {
      return null;
    }

    const builderInfo = await _webpack.webpack5.checkWebpack5Builder(packageJson);
    return builderInfo ? Object.assign({
      craVersion
    }, builderInfo) : null;
  },

  prompt({
    craVersion,
    storybookVersion
  }) {
    const craFormatted = _chalk.default.cyan(`Create React App (CRA) ${craVersion}`);

    const sbFormatted = _chalk.default.cyan(`Storybook ${storybookVersion}`);

    return (0, _tsDedent.default)`
      We've detected you are running ${craFormatted} which is powered by webpack5.
      ${sbFormatted} runs webpack4 by default, which is incompatible.

      In order to work with your version of CRA, we need to install Storybook's ${_chalk.default.cyan('webpack5 builder')}.

      More info: ${_chalk.default.yellow('https://github.com/storybookjs/storybook/blob/next/MIGRATION.md#cra5-upgrade')}
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
exports.cra5 = cra5;
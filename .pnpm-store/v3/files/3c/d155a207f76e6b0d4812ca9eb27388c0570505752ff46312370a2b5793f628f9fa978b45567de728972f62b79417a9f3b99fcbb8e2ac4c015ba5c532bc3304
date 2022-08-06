"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _path = _interopRequireDefault(require("path"));

var _fs = _interopRequireDefault(require("fs"));

var _semver = _interopRequireDefault(require("@storybook/semver"));

var _baseGenerator = require("../baseGenerator");

var _project_types = require("../../project_types");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generator = async (packageManager, npmOptions, options) => {
  var _semver$coerce;

  const extraMain = options.linkable ? {
    webpackFinal: `%%(config) => {
      const path = require('path');
      // add monorepo root as a valid directory to import modules from
      config.resolve.plugins.forEach((p) => {
        if (Array.isArray(p.appSrcs)) {
          p.appSrcs.push(path.join(__dirname, '..', '..', '..', 'storybook'));
        }
      });
      return config;
    }
    %%`
  } : {};
  const craVersion = (_semver$coerce = _semver.default.coerce(packageManager.retrievePackageJson().dependencies['react-scripts'])) === null || _semver$coerce === void 0 ? void 0 : _semver$coerce.version;

  const isCra5 = craVersion && _semver.default.gte(craVersion, '5.0.0');

  const updatedOptions = isCra5 ? Object.assign({}, options, {
    builder: _project_types.CoreBuilder.Webpack5
  }) : options; // `@storybook/preset-create-react-app` has `@storybook/node-logger` as peerDep

  const extraPackages = ['@storybook/node-logger'];

  if (isCra5) {
    extraPackages.push('webpack'); // Miscellaneous dependency used in `babel-preset-react-app` but not listed as dep there

    extraPackages.push('babel-plugin-named-exports-order'); // Miscellaneous dependency to add to be sure Storybook + CRA is working fine with Yarn PnP mode

    extraPackages.push('prop-types');
  } // preset v3 is compat with older versions of CRA, otherwise let version float


  const extraAddons = [`@storybook/preset-create-react-app${isCra5 ? '' : '@3'}`];
  await (0, _baseGenerator.baseGenerator)(packageManager, npmOptions, updatedOptions, 'react', {
    extraAddons,
    extraPackages,
    staticDir: _fs.default.existsSync(_path.default.resolve('./public')) ? 'public' : undefined,
    addBabel: false,
    addESLint: true,
    extraMain
  });
};

var _default = generator;
exports.default = _default;
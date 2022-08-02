"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _fsExtra = _interopRequireDefault(require("fs-extra"));

var _nodeLogger = require("@storybook/node-logger");

var _baseGenerator = require("../baseGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generator = async (packageManager, npmOptions, options) => {
  let extraMain;
  let commonJs = false; // svelte.config.js ?

  if (_fsExtra.default.existsSync('./svelte.config.js')) {
    _nodeLogger.logger.info("Configuring preprocessor from 'svelte.config.js'");

    extraMain = {
      svelteOptions: {
        preprocess: '%%require("../svelte.config.js").preprocess%%'
      }
    };
  } else if (_fsExtra.default.existsSync('./svelte.config.cjs')) {
    _nodeLogger.logger.info("Configuring preprocessor from 'svelte.config.cjs'");

    commonJs = true;
    extraMain = {
      svelteOptions: {
        preprocess: '%%require("../svelte.config.cjs").preprocess%%'
      }
    };
  } else {
    // svelte-preprocess dependencies ?
    const packageJson = packageManager.retrievePackageJson();

    if (packageJson.devDependencies && packageJson.devDependencies['svelte-preprocess']) {
      _nodeLogger.logger.info("Configuring preprocessor with 'svelte-preprocess'");

      extraMain = {
        svelteOptions: {
          preprocess: '%%require("svelte-preprocess")()%%'
        }
      };
    }
  }

  await (0, _baseGenerator.baseGenerator)(packageManager, npmOptions, options, 'svelte', {
    extraPackages: ['svelte', 'svelte-loader'],
    extensions: ['js', 'jsx', 'ts', 'tsx', 'svelte'],
    extraMain,
    commonJs
  });
};

var _default = generator;
exports.default = _default;
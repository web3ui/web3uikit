"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _fs = _interopRequireDefault(require("fs"));

var _json = _interopRequireDefault(require("json5"));

var _baseGenerator = require("../baseGenerator");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const generator = async (packageManager, npmOptions, options) => {
  await (0, _baseGenerator.baseGenerator)(packageManager, npmOptions, options, 'react', {
    extraPackages: ['react', 'react-dom', '@babel/preset-env', '@babel/preset-react'],
    staticDir: 'dist'
  }); // create or update .babelrc

  let babelrc = null;

  if (_fs.default.existsSync('.babelrc')) {
    const babelrcContent = _fs.default.readFileSync('.babelrc', 'utf8');

    babelrc = _json.default.parse(babelrcContent);
    babelrc.plugins = babelrc.plugins || [];
  } else {
    babelrc = {
      presets: [['@babel/preset-env', {
        shippedProposals: true,
        useBuiltIns: 'usage',
        corejs: '3'
      }], '@babel/preset-react']
    };
  }

  _fs.default.writeFileSync('.babelrc', JSON.stringify(babelrc, null, 2), 'utf8');
};

var _default = generator;
exports.default = _default;
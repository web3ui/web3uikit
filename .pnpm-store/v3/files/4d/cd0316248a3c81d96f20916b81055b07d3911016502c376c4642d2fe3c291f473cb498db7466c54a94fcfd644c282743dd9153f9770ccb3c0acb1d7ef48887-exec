"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("core-js/modules/es.promise.js");

var _baseGenerator = require("../baseGenerator");

var _helpers = require("../../helpers");

const generator = async (packageManager, npmOptions, options) => {
  await (0, _baseGenerator.baseGenerator)(packageManager, npmOptions, options, 'server', {
    extensions: ['json']
  });
  (0, _helpers.copyTemplate)(__dirname);
};

var _default = generator;
exports.default = _default;
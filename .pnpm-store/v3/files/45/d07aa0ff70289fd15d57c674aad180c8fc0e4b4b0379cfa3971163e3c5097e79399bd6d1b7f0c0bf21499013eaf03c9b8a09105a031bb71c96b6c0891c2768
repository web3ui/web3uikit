"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.jscodeshiftToPrettierParser = jscodeshiftToPrettierParser;
exports.sanitizeName = void 0;

var _camelCase = _interopRequireDefault(require("lodash/camelCase"));

var _upperFirst = _interopRequireDefault(require("lodash/upperFirst"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var sanitizeName = function (name) {
  var key = (0, _upperFirst.default)((0, _camelCase.default)(name)); // prepend _ if name starts with a digit

  if (/^\d/.test(key)) {
    key = `_${key}`;
  } // prepend _ if name starts with a digit


  if (/^\d/.test(key)) {
    key = `_${key}`;
  }

  return key;
};

exports.sanitizeName = sanitizeName;

function jscodeshiftToPrettierParser(parser) {
  var parserMap = {
    babylon: 'babel',
    flow: 'flow',
    ts: 'typescript',
    tsx: 'typescript'
  };
  return parserMap[parser] || 'babel';
}
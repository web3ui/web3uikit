"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _parseInt2 = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/parse-int"));

function fromDecimalToHex(number) {
  if (typeof number !== 'number') throw 'The input provided should be a number';
  return "0x".concat(number.toString(16));
}

function fromHexToDecimal(hex) {
  if (typeof hex !== 'string') throw 'The input provided should be a string';
  return (0, _parseInt2.default)(hex, 16);
}

module.exports = {
  fromDecimalToHex: fromDecimalToHex,
  fromHexToDecimal: fromHexToDecimal
};
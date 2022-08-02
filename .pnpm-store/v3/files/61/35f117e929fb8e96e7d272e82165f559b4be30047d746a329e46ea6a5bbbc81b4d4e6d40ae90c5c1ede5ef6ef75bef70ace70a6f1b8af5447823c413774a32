"use strict";

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _ethers = require("ethers");

var UnitConverter = /*#__PURE__*/function () {
  function UnitConverter() {
    (0, _classCallCheck2.default)(this, UnitConverter);
  }

  (0, _createClass2.default)(UnitConverter, null, [{
    key: "ETH",
    value: function (value) {
      return _ethers.ethers.utils.parseEther("".concat(value)).toString();
    }
  }, {
    key: "Token",
    value: function (value) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;
      return _ethers.ethers.utils.parseUnits("".concat(value), +decimals).toString();
    }
  }, {
    key: "FromWei",
    value: function (value) {
      var decimals = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 18;

      var result = _ethers.ethers.utils.formatUnits(value, decimals); // formatUnits will always add a trailing 0, remove this as we want to return "1" instead of "1.0"


      var splitResult = result.split('.');

      if (splitResult[1] === '0') {
        return splitResult[0];
      }

      return result;
    }
  }]);
  return UnitConverter;
}();

module.exports = UnitConverter;
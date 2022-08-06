"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _QRCode = require("qr.js/lib/QRCode");

var _QRCode2 = _interopRequireDefault(_QRCode);

var _ErrorCorrectLevel = require("qr.js/lib/ErrorCorrectLevel");

var _ErrorCorrectLevel2 = _interopRequireDefault(_ErrorCorrectLevel);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _QRCodeCell = require("./components/QRCodeCell");

var _QRCodeCell2 = _interopRequireDefault(_QRCodeCell);

var _QRCodeSurface = require("./components/QRCodeSurface");

var _QRCodeSurface2 = _interopRequireDefault(_QRCodeSurface);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; } // A `qr.js` doesn't handle error level of zero (M) so we need to do it right, thus the deep require.


var propTypes = {
  bgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  fgColor: _propTypes2.default.oneOfType([_propTypes2.default.object, _propTypes2.default.string]),
  level: _propTypes2.default.oneOf(["L", "M", "Q", "H"]),
  size: _propTypes2.default.number,
  value: _propTypes2.default.string.isRequired
};

var defaultProps = {
  bgColor: "#FFFFFF",
  fgColor: "#000000",
  level: "L",
  size: 256
};

var QRCode = function QRCode(_ref) {
  var bgColor = _ref.bgColor,
      fgColor = _ref.fgColor,
      level = _ref.level,
      size = _ref.size,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["bgColor", "fgColor", "level", "size", "value"]);

  // We'll use type === -1 to force QRCode to automatically pick the best type.
  var qrcode = new _QRCode2.default(-1, _ErrorCorrectLevel2.default[level]);
  qrcode.addData(value);
  qrcode.make();
  var cells = qrcode.modules;
  var tileSize = size / cells.length;
  return _react2.default.createElement(
    _QRCodeSurface2.default,
    _extends({}, props, { size: size }),
    cells.map(function (row, rowIndex) {
      return row.map(function (cell, cellIndex) {
        var transformX = Math.round(cellIndex * tileSize);
        var transformY = Math.round(rowIndex * tileSize);
        var qrItemWidth = Math.round((cellIndex + 1) * tileSize) - transformX;
        var qrItemHeight = Math.round((rowIndex + 1) * tileSize) - transformY;
        return _react2.default.createElement(_QRCodeCell2.default
        /* eslint-disable react/no-array-index-key */
        , { key: "rectangle-" + rowIndex + "-" + cellIndex
          /* eslint-enable react/no-array-index-key */
          , d: "M 0 0 L " + qrItemWidth + " 0 L " + qrItemWidth + " " + qrItemHeight + " L 0 " + qrItemHeight + " Z",
          fill: cell ? fgColor : bgColor,
          transformX: transformX,
          transformY: transformY
        });
      });
    })
  );
};

QRCode.propTypes = propTypes;
QRCode.defaultProps = defaultProps;

exports.default = (0, _react.memo)(QRCode);
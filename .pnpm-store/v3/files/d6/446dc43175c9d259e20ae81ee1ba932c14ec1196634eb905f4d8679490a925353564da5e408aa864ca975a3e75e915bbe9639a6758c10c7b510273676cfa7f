"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _reactNativeSvg = require("react-native-svg");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.array.isRequired,
  size: _propTypes2.default.number.isRequired
};

var defaultProps = {};

var QRCodeSurface = function QRCodeSurface(_ref) {
  var children = _ref.children,
      size = _ref.size,
      props = _objectWithoutProperties(_ref, ["children", "size"]);

  return _react2.default.createElement(
    _reactNativeSvg.Svg,
    _extends({}, props, { height: size, style: { height: size, width: size }, width: size }),
    children
  );
};

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

exports.default = QRCodeSurface;
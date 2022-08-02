"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var propTypes = {
  children: _propTypes2.default.array.isRequired,
  size: _propTypes2.default.number.isRequired,
  title: _propTypes2.default.string,
  xmlns: _propTypes2.default.string
};

var defaultProps = {
  title: undefined,
  xmlns: "http://www.w3.org/2000/svg"
};

var QRCodeSurface = function QRCodeSurface(_ref) {
  var children = _ref.children,
      size = _ref.size,
      title = _ref.title,
      xmlns = _ref.xmlns,
      props = _objectWithoutProperties(_ref, ["children", "size", "title", "xmlns"]);

  return _react2.default.createElement(
    "svg",
    _extends({}, props, { height: size, width: size, xmlns: xmlns }),
    title ? _react2.default.createElement(
      "title",
      null,
      title
    ) : null,
    children
  );
};

QRCodeSurface.propTypes = propTypes;
QRCodeSurface.defaultProps = defaultProps;

exports.default = QRCodeSurface;
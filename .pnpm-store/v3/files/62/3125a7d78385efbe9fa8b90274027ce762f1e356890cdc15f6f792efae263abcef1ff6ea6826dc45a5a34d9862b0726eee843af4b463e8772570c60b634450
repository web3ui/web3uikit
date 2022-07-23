"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _ParseObject2 = _interopRequireDefault(require("./ParseObject"));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = _Reflect$construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !_Reflect$construct) return false;
  if (_Reflect$construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(_Reflect$construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var Installation = /*#__PURE__*/function (_ParseObject) {
  (0, _inherits2.default)(Installation, _ParseObject);

  var _super = _createSuper(Installation);

  function Installation(attributes
  /*: ?AttributeMap*/
  ) {
    var _this;

    (0, _classCallCheck2.default)(this, Installation);
    _this = _super.call(this, '_Installation');

    if (attributes && (0, _typeof2.default)(attributes) === 'object') {
      if (!_this.set(attributes || {})) {
        throw new Error("Can't create an invalid Installation");
      }
    }

    return _this;
  }

  return (0, _createClass2.default)(Installation);
}(_ParseObject2.default);

exports.default = Installation;

_ParseObject2.default.registerSubclass('_Installation', Installation);
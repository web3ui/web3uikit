var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseObject2 = _interopRequireDefault(require("./ParseObject"));

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function () {
    var Super = (0, _getPrototypeOf2.default)(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = (0, _getPrototypeOf2.default)(this).constructor;
      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return (0, _possibleConstructorReturn2.default)(this, result);
  };
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

var ParseRole = function (_ParseObject) {
  (0, _inherits2.default)(ParseRole, _ParseObject);

  var _super = _createSuper(ParseRole);

  function ParseRole(name, acl) {
    var _this;

    (0, _classCallCheck2.default)(this, ParseRole);
    _this = _super.call(this, '_Role');

    if (typeof name === 'string' && acl instanceof _ParseACL.default) {
      _this.setName(name);

      _this.setACL(acl);
    }

    return _this;
  }

  (0, _createClass2.default)(ParseRole, [{
    key: "getName",
    value: function () {
      var name = this.get('name');

      if (name == null || typeof name === 'string') {
        return name;
      }

      return '';
    }
  }, {
    key: "setName",
    value: function (name, options) {
      return this.set('name', name, options);
    }
  }, {
    key: "getUsers",
    value: function () {
      return this.relation('users');
    }
  }, {
    key: "getRoles",
    value: function () {
      return this.relation('roles');
    }
  }, {
    key: "validate",
    value: function (attrs, options) {
      var isInvalid = (0, _get2.default)((0, _getPrototypeOf2.default)(ParseRole.prototype), "validate", this).call(this, attrs, options);

      if (isInvalid) {
        return isInvalid;
      }

      if ('name' in attrs && attrs.name !== this.getName()) {
        var newName = attrs.name;

        if (this.id && this.id !== attrs.objectId) {
          return new _ParseError.default(_ParseError.default.OTHER_CAUSE, "A role's name can only be set before it has been saved.");
        }

        if (typeof newName !== 'string') {
          return new _ParseError.default(_ParseError.default.OTHER_CAUSE, "A role's name must be a String.");
        }

        if (!/^[0-9a-zA-Z\-_ ]+$/.test(newName)) {
          return new _ParseError.default(_ParseError.default.OTHER_CAUSE, "A role's name can be only contain alphanumeric characters, _, -, and spaces.");
        }
      }

      return false;
    }
  }]);
  return ParseRole;
}(_ParseObject2.default);

_ParseObject2.default.registerSubclass('_Role', ParseRole);

var _default = ParseRole;
exports.default = _default;
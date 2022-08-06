var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _wrapNativeSuper2 = _interopRequireDefault(require("@babel/runtime/helpers/wrapNativeSuper"));

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

var ParseError = function (_Error) {
  (0, _inherits2.default)(ParseError, _Error);

  var _super = _createSuper(ParseError);

  function ParseError(code, message) {
    var _this;

    (0, _classCallCheck2.default)(this, ParseError);
    _this = _super.call(this, message);
    _this.code = code;
    Object.defineProperty((0, _assertThisInitialized2.default)(_this), 'message', {
      enumerable: true,
      value: message
    });
    return _this;
  }

  (0, _createClass2.default)(ParseError, [{
    key: "toString",
    value: function () {
      return "ParseError: " + this.code + " " + this.message;
    }
  }]);
  return ParseError;
}((0, _wrapNativeSuper2.default)(Error));

ParseError.OTHER_CAUSE = -1;
ParseError.INTERNAL_SERVER_ERROR = 1;
ParseError.CONNECTION_FAILED = 100;
ParseError.OBJECT_NOT_FOUND = 101;
ParseError.INVALID_QUERY = 102;
ParseError.INVALID_CLASS_NAME = 103;
ParseError.MISSING_OBJECT_ID = 104;
ParseError.INVALID_KEY_NAME = 105;
ParseError.INVALID_POINTER = 106;
ParseError.INVALID_JSON = 107;
ParseError.COMMAND_UNAVAILABLE = 108;
ParseError.NOT_INITIALIZED = 109;
ParseError.INCORRECT_TYPE = 111;
ParseError.INVALID_CHANNEL_NAME = 112;
ParseError.PUSH_MISCONFIGURED = 115;
ParseError.OBJECT_TOO_LARGE = 116;
ParseError.OPERATION_FORBIDDEN = 119;
ParseError.CACHE_MISS = 120;
ParseError.INVALID_NESTED_KEY = 121;
ParseError.INVALID_FILE_NAME = 122;
ParseError.INVALID_ACL = 123;
ParseError.TIMEOUT = 124;
ParseError.INVALID_EMAIL_ADDRESS = 125;
ParseError.MISSING_CONTENT_TYPE = 126;
ParseError.MISSING_CONTENT_LENGTH = 127;
ParseError.INVALID_CONTENT_LENGTH = 128;
ParseError.FILE_TOO_LARGE = 129;
ParseError.FILE_SAVE_ERROR = 130;
ParseError.DUPLICATE_VALUE = 137;
ParseError.INVALID_ROLE_NAME = 139;
ParseError.EXCEEDED_QUOTA = 140;
ParseError.SCRIPT_FAILED = 141;
ParseError.VALIDATION_ERROR = 142;
ParseError.INVALID_IMAGE_DATA = 143;
ParseError.UNSAVED_FILE_ERROR = 151;
ParseError.INVALID_PUSH_TIME_ERROR = 152;
ParseError.FILE_DELETE_ERROR = 153;
ParseError.FILE_DELETE_UNNAMED_ERROR = 161;
ParseError.REQUEST_LIMIT_EXCEEDED = 155;
ParseError.DUPLICATE_REQUEST = 159;
ParseError.INVALID_EVENT_NAME = 160;
ParseError.USERNAME_MISSING = 200;
ParseError.PASSWORD_MISSING = 201;
ParseError.USERNAME_TAKEN = 202;
ParseError.EMAIL_TAKEN = 203;
ParseError.EMAIL_MISSING = 204;
ParseError.EMAIL_NOT_FOUND = 205;
ParseError.SESSION_MISSING = 206;
ParseError.MUST_CREATE_USER_THROUGH_SIGNUP = 207;
ParseError.ACCOUNT_ALREADY_LINKED = 208;
ParseError.INVALID_SESSION_TOKEN = 209;
ParseError.MFA_ERROR = 210;
ParseError.MFA_TOKEN_REQUIRED = 211;
ParseError.LINKED_ID_MISSING = 250;
ParseError.INVALID_LINKED_SESSION = 251;
ParseError.UNSUPPORTED_SERVICE = 252;
ParseError.INVALID_SCHEMA_OPERATION = 255;
ParseError.AGGREGATE_ERROR = 600;
ParseError.FILE_READ_ERROR = 601;
ParseError.X_DOMAIN_REQUEST = 602;
var _default = ParseError;
exports.default = _default;
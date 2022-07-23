var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _EventEmitter2 = _interopRequireDefault(require("./EventEmitter"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _promiseUtils = require("./promiseUtils");

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

var Subscription = function (_EventEmitter) {
  (0, _inherits2.default)(Subscription, _EventEmitter);

  var _super = _createSuper(Subscription);

  function Subscription(id, query, sessionToken) {
    var _this;

    (0, _classCallCheck2.default)(this, Subscription);
    _this = _super.call(this);
    _this.id = id;
    _this.query = query;
    _this.sessionToken = sessionToken;
    _this.subscribePromise = (0, _promiseUtils.resolvingPromise)();
    _this.subscribed = false;

    _this.on('error', function () {});

    return _this;
  }

  (0, _createClass2.default)(Subscription, [{
    key: "unsubscribe",
    value: function () {
      var _this2 = this;

      return _CoreManager.default.getLiveQueryController().getDefaultLiveQueryClient().then(function (liveQueryClient) {
        liveQueryClient.unsubscribe(_this2);

        _this2.emit('close');
      });
    }
  }]);
  return Subscription;
}(_EventEmitter2.default);

var _default = Subscription;
exports.default = _default;
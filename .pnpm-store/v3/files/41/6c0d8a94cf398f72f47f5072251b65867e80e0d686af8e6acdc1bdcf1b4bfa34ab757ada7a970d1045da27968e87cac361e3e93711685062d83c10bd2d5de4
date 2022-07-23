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

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _isRevocableSession = _interopRequireDefault(require("./isRevocableSession"));

var _ParseObject2 = _interopRequireDefault(require("./ParseObject"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

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

var ParseSession = function (_ParseObject) {
  (0, _inherits2.default)(ParseSession, _ParseObject);

  var _super = _createSuper(ParseSession);

  function ParseSession(attributes) {
    var _this;

    (0, _classCallCheck2.default)(this, ParseSession);
    _this = _super.call(this, '_Session');

    if (attributes && typeof attributes === 'object') {
      if (!_this.set(attributes || {})) {
        throw new Error("Can't create an invalid Session");
      }
    }

    return _this;
  }

  (0, _createClass2.default)(ParseSession, [{
    key: "getSessionToken",
    value: function () {
      var token = this.get('sessionToken');

      if (typeof token === 'string') {
        return token;
      }

      return '';
    }
  }], [{
    key: "readOnlyAttributes",
    value: function () {
      return ['createdWith', 'expiresAt', 'installationId', 'restricted', 'sessionToken', 'user'];
    }
  }, {
    key: "current",
    value: function (options) {
      options = options || {};

      var controller = _CoreManager.default.getSessionController();

      var sessionOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        sessionOptions.useMasterKey = options.useMasterKey;
      }

      return _ParseUser.default.currentAsync().then(function (user) {
        if (!user) {
          return Promise.reject('There is no current user.');
        }

        sessionOptions.sessionToken = user.getSessionToken();
        return controller.getSession(sessionOptions);
      });
    }
  }, {
    key: "isCurrentSessionRevocable",
    value: function () {
      var currentUser = _ParseUser.default.current();

      if (currentUser) {
        return (0, _isRevocableSession.default)(currentUser.getSessionToken() || '');
      }

      return false;
    }
  }]);
  return ParseSession;
}(_ParseObject2.default);

_ParseObject2.default.registerSubclass('_Session', ParseSession);

var DefaultController = {
  getSession: function (options) {
    var RESTController = _CoreManager.default.getRESTController();

    var session = new ParseSession();
    return RESTController.request('GET', 'sessions/me', {}, options).then(function (sessionData) {
      session._finishFetch(sessionData);

      session._setExisted(true);

      return session;
    });
  }
};

_CoreManager.default.setSessionController(DefaultController);

var _default = ParseSession;
exports.default = _default;
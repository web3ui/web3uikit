"use strict";

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

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
/**
 * <p>A Parse.Session object is a local representation of a revocable session.
 * This class is a subclass of a Parse.Object, and retains the same
 * functionality of a Parse.Object.</p>
 *
 * @alias Parse.Session
 * @augments Parse.Object
 */


var ParseSession = /*#__PURE__*/function (_ParseObject) {
  (0, _inherits2.default)(ParseSession, _ParseObject);

  var _super = _createSuper(ParseSession);
  /**
   * @param {object} attributes The initial set of data to store in the user.
   */


  function ParseSession(attributes
  /*: ?AttributeMap*/
  ) {
    var _this;

    (0, _classCallCheck2.default)(this, ParseSession);
    _this = _super.call(this, '_Session');

    if (attributes && (0, _typeof2.default)(attributes) === 'object') {
      if (!_this.set(attributes || {})) {
        throw new Error("Can't create an invalid Session");
      }
    }

    return _this;
  }
  /**
   * Returns the session token string.
   *
   * @returns {string}
   */


  (0, _createClass2.default)(ParseSession, [{
    key: "getSessionToken",
    value: function ()
    /*: string*/
    {
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
    /**
     * Retrieves the Session object for the currently logged in session.
     *
     * @param {object} options useMasterKey
     * @static
     * @returns {Promise} A promise that is resolved with the Parse.Session
     * object after it has been fetched. If there is no current user, the
     * promise will be rejected.
     */

  }, {
    key: "current",
    value: function (options
    /*: FullOptions*/
    ) {
      options = options || {};

      var controller = _CoreManager.default.getSessionController();

      var sessionOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        sessionOptions.useMasterKey = options.useMasterKey;
      }

      return _ParseUser.default.currentAsync().then(function (user) {
        if (!user) {
          return _promise.default.reject('There is no current user.');
        }

        sessionOptions.sessionToken = user.getSessionToken();
        return controller.getSession(sessionOptions);
      });
    }
    /**
     * Determines whether the current session token is revocable.
     * This method is useful for migrating Express.js or Node.js web apps to
     * use revocable sessions. If you are migrating an app that uses the Parse
     * SDK in the browser only, please use Parse.User.enableRevocableSession()
     * instead, so that sessions can be automatically upgraded.
     *
     * @static
     * @returns {boolean}
     */

  }, {
    key: "isCurrentSessionRevocable",
    value: function ()
    /*: boolean*/
    {
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
  getSession: function (options
  /*: RequestOptions*/
  )
  /*: Promise<ParseSession>*/
  {
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
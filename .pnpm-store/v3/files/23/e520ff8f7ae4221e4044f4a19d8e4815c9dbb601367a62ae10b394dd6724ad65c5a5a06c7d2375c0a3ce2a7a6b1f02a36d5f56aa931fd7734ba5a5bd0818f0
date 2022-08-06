var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _get2 = _interopRequireDefault(require("@babel/runtime/helpers/get"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _AnonymousUtils = _interopRequireDefault(require("./AnonymousUtils"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _isRevocableSession = _interopRequireDefault(require("./isRevocableSession"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _ParseObject2 = _interopRequireDefault(require("./ParseObject"));

var _ParseSession = _interopRequireDefault(require("./ParseSession"));

var _MoralisWeb = _interopRequireDefault(require("./MoralisWeb3"));

var _Storage = _interopRequireDefault(require("./Storage"));

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

var CURRENT_USER_KEY = 'currentUser';
var canUseCurrentUser = !_CoreManager.default.get('IS_NODE');
var currentUserCacheMatchesDisk = false;
var currentUserCache = null;
var authProviders = {};

var ParseUser = function (_ParseObject) {
  (0, _inherits2.default)(ParseUser, _ParseObject);

  var _super = _createSuper(ParseUser);

  function ParseUser(attributes) {
    var _this;

    (0, _classCallCheck2.default)(this, ParseUser);
    _this = _super.call(this, '_User');

    if (attributes && typeof attributes === 'object') {
      if (!_this.set(attributes || {})) {
        throw new Error("Can't create an invalid Parse User");
      }
    }

    return _this;
  }

  (0, _createClass2.default)(ParseUser, [{
    key: "_upgradeToRevocableSession",
    value: function (options) {
      options = options || {};
      var upgradeOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        upgradeOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.upgradeToRevocableSession(this, upgradeOptions);
    }
  }, {
    key: "linkWith",
    value: function (provider, options) {
      var _this2 = this;

      var saveOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      saveOpts.sessionToken = saveOpts.sessionToken || this.getSessionToken() || '';
      var authType;

      if (typeof provider === 'string') {
        authType = provider;

        if (authProviders[provider]) {
          provider = authProviders[provider];
        } else {
          var authProvider = {
            restoreAuthentication: function () {
              return true;
            },
            getAuthType: function () {
              return authType;
            }
          };
          authProviders[authProvider.getAuthType()] = authProvider;
          provider = authProvider;
        }
      } else {
        authType = provider.getAuthType();
      }

      if (options && options.hasOwnProperty('authData')) {
        var authData = this.get('authData') || {};

        if (typeof authData !== 'object') {
          throw new Error('Invalid type: authData field should be an object');
        }

        authData[authType] = options.authData;

        var controller = _CoreManager.default.getUserController();

        return controller.linkWith(this, authData, saveOpts);
      }

      return new Promise(function (resolve, reject) {
        provider.authenticate({
          success: function (provider, result) {
            var opts = {};
            opts.authData = result;

            _this2.linkWith(provider, opts, saveOpts).then(function () {
              resolve(_this2);
            }, function (error) {
              reject(error);
            });
          },
          error: function (provider, _error) {
            reject(_error);
          }
        });
      });
    }
  }, {
    key: "_linkWith",
    value: function (provider, options) {
      var saveOpts = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
      return this.linkWith(provider, options, saveOpts);
    }
  }, {
    key: "_synchronizeAuthData",
    value: function (provider) {
      if (!this.isCurrent() || !provider) {
        return;
      }

      var authType;

      if (typeof provider === 'string') {
        authType = provider;
        provider = authProviders[authType];
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData');

      if (!provider || !authData || typeof authData !== 'object') {
        return;
      }

      var success = provider.restoreAuthentication(authData[authType]);

      if (!success) {
        this._unlinkFrom(provider);
      }
    }
  }, {
    key: "_synchronizeAllAuthData",
    value: function () {
      var authData = this.get('authData');

      if (typeof authData !== 'object') {
        return;
      }

      for (var _key in authData) {
        this._synchronizeAuthData(_key);
      }
    }
  }, {
    key: "_cleanupAuthData",
    value: function () {
      if (!this.isCurrent()) {
        return;
      }

      var authData = this.get('authData');

      if (typeof authData !== 'object') {
        return;
      }

      for (var _key2 in authData) {
        if (!authData[_key2]) {
          delete authData[_key2];
        }
      }
    }
  }, {
    key: "_unlinkFrom",
    value: function (provider, options) {
      var _this3 = this;

      return this.linkWith(provider, {
        authData: null
      }, options).then(function () {
        _this3._synchronizeAuthData(provider);

        return Promise.resolve(_this3);
      });
    }
  }, {
    key: "_isLinked",
    value: function (provider) {
      var authType;

      if (typeof provider === 'string') {
        authType = provider;
      } else {
        authType = provider.getAuthType();
      }

      var authData = this.get('authData') || {};

      if (typeof authData !== 'object') {
        return false;
      }

      return !!authData[authType];
    }
  }, {
    key: "_logOutWithAll",
    value: function () {
      var authData = this.get('authData');

      if (typeof authData !== 'object') {
        return;
      }

      for (var _key3 in authData) {
        this._logOutWith(_key3);
      }
    }
  }, {
    key: "_logOutWith",
    value: function (provider) {
      if (!this.isCurrent()) {
        return;
      }

      if (typeof provider === 'string') {
        provider = authProviders[provider];
      }

      if (provider && provider.deauthenticate) {
        provider.deauthenticate();
      }
    }
  }, {
    key: "_preserveFieldsOnFetch",
    value: function () {
      return {
        sessionToken: this.get('sessionToken')
      };
    }
  }, {
    key: "isCurrent",
    value: function () {
      var current = ParseUser.current();
      return !!current && current.id === this.id;
    }
  }, {
    key: "getUsername",
    value: function () {
      var username = this.get('username');

      if (username == null || typeof username === 'string') {
        return username;
      }

      return '';
    }
  }, {
    key: "setUsername",
    value: function (username) {
      var authData = this.get('authData');

      if (authData && typeof authData === 'object' && authData.hasOwnProperty('anonymous')) {
        authData.anonymous = null;
      }

      this.set('username', username);
    }
  }, {
    key: "setPassword",
    value: function (password) {
      this.set('password', password);
    }
  }, {
    key: "getEmail",
    value: function () {
      var email = this.get('email');

      if (email == null || typeof email === 'string') {
        return email;
      }

      return '';
    }
  }, {
    key: "setEmail",
    value: function (email) {
      return this.set('email', email);
    }
  }, {
    key: "getSessionToken",
    value: function () {
      var token = this.get('sessionToken');

      if (token == null || typeof token === 'string') {
        return token;
      }

      return '';
    }
  }, {
    key: "authenticated",
    value: function () {
      var current = ParseUser.current();
      return !!this.get('sessionToken') && !!current && current.id === this.id;
    }
  }, {
    key: "signUp",
    value: function (attrs, options) {
      options = options || {};
      var signupOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        signupOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('installationId')) {
        signupOptions.installationId = options.installationId;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.signUp(this, attrs, signupOptions);
    }
  }, {
    key: "logIn",
    value: function (options) {
      options = options || {};
      var loginOptions = {
        usePost: true
      };

      if (options.hasOwnProperty('useMasterKey')) {
        loginOptions.useMasterKey = options.useMasterKey;
      }

      if (options.hasOwnProperty('installationId')) {
        loginOptions.installationId = options.installationId;
      }

      if (options.hasOwnProperty('usePost')) {
        loginOptions.usePost = options.usePost;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.logIn(this, loginOptions);
    }
  }, {
    key: "save",
    value: function () {
      var _this4 = this;

      for (var _len = arguments.length, args = new Array(_len), _key4 = 0; _key4 < _len; _key4++) {
        args[_key4] = arguments[_key4];
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "save", this).apply(this, args).then(function () {
        if (_this4.isCurrent()) {
          return _CoreManager.default.getUserController().updateUserOnDisk(_this4);
        }

        return _this4;
      });
    }
  }, {
    key: "destroy",
    value: function () {
      var _this5 = this;

      for (var _len2 = arguments.length, args = new Array(_len2), _key5 = 0; _key5 < _len2; _key5++) {
        args[_key5] = arguments[_key5];
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "destroy", this).apply(this, args).then(function () {
        if (_this5.isCurrent()) {
          return _CoreManager.default.getUserController().removeUserFromDisk();
        }

        return _this5;
      });
    }
  }, {
    key: "fetch",
    value: function () {
      var _this6 = this;

      for (var _len3 = arguments.length, args = new Array(_len3), _key6 = 0; _key6 < _len3; _key6++) {
        args[_key6] = arguments[_key6];
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "fetch", this).apply(this, args).then(function () {
        if (_this6.isCurrent()) {
          return _CoreManager.default.getUserController().updateUserOnDisk(_this6);
        }

        return _this6;
      });
    }
  }, {
    key: "fetchWithInclude",
    value: function () {
      var _this7 = this;

      for (var _len4 = arguments.length, args = new Array(_len4), _key7 = 0; _key7 < _len4; _key7++) {
        args[_key7] = arguments[_key7];
      }

      return (0, _get2.default)((0, _getPrototypeOf2.default)(ParseUser.prototype), "fetchWithInclude", this).apply(this, args).then(function () {
        if (_this7.isCurrent()) {
          return _CoreManager.default.getUserController().updateUserOnDisk(_this7);
        }

        return _this7;
      });
    }
  }, {
    key: "verifyPassword",
    value: function (password, options) {
      var username = this.getUsername() || '';
      return ParseUser.verifyPassword(username, password, options);
    }
  }], [{
    key: "readOnlyAttributes",
    value: function () {
      return ['sessionToken'];
    }
  }, {
    key: "extend",
    value: function (protoProps, classProps) {
      if (protoProps) {
        for (var _prop in protoProps) {
          if (_prop !== 'className') {
            Object.defineProperty(ParseUser.prototype, _prop, {
              value: protoProps[_prop],
              enumerable: false,
              writable: true,
              configurable: true
            });
          }
        }
      }

      if (classProps) {
        for (var _prop2 in classProps) {
          if (_prop2 !== 'className') {
            Object.defineProperty(ParseUser, _prop2, {
              value: classProps[_prop2],
              enumerable: false,
              writable: true,
              configurable: true
            });
          }
        }
      }

      return ParseUser;
    }
  }, {
    key: "current",
    value: function () {
      if (!canUseCurrentUser) {
        return null;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.currentUser();
    }
  }, {
    key: "currentAsync",
    value: function () {
      if (!canUseCurrentUser) {
        return Promise.resolve(null);
      }

      var controller = _CoreManager.default.getUserController();

      return controller.currentUserAsync();
    }
  }, {
    key: "signUp",
    value: function (username, password, attrs, options) {
      attrs = attrs || {};
      attrs.username = username;
      attrs.password = password;
      var user = new this(attrs);
      return user.signUp({}, options);
    }
  }, {
    key: "logIn",
    value: function (username, password, options) {
      if (typeof username !== 'string') {
        return Promise.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Username must be a string.'));
      }

      if (typeof password !== 'string') {
        return Promise.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Password must be a string.'));
      }

      var user = new this();

      user._finishFetch({
        username: username,
        password: password
      });

      return user.logIn(options);
    }
  }, {
    key: "loginOrSignup",
    value: function (username, password) {
      var _this8 = this;

      return this.logIn(username, password).catch(function (err) {
        if (err.code === 101) {
          var newUser = new _this8();
          newUser.set('username', username);
          newUser.set('password', password);
          return newUser.signUp();
        }

        throw err;
      });
    }
  }, {
    key: "become",
    value: function (sessionToken, options) {
      if (!canUseCurrentUser) {
        throw new Error('It is not memory-safe to become a user in a server environment');
      }

      options = options || {};
      var becomeOptions = {
        sessionToken: sessionToken
      };

      if (options.hasOwnProperty('useMasterKey')) {
        becomeOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      var user = new this();
      return controller.become(user, becomeOptions);
    }
  }, {
    key: "me",
    value: function (sessionToken) {
      var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      var controller = _CoreManager.default.getUserController();

      var meOptions = {
        sessionToken: sessionToken
      };

      if (options.useMasterKey) {
        meOptions.useMasterKey = options.useMasterKey;
      }

      var user = new this();
      return controller.me(user, meOptions);
    }
  }, {
    key: "hydrate",
    value: function (userJSON) {
      var controller = _CoreManager.default.getUserController();

      var user = new this();
      return controller.hydrate(user, userJSON);
    }
  }, {
    key: "logInWith",
    value: function (provider, options, saveOpts) {
      var user = new this();
      return user.linkWith(provider, options, saveOpts);
    }
  }, {
    key: "logOut",
    value: function () {
      var options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

      var controller = _CoreManager.default.getUserController();

      return controller.logOut(options);
    }
  }, {
    key: "requestPasswordReset",
    value: function (email, options) {
      options = options || {};
      var requestOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        requestOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.requestPasswordReset(email, requestOptions);
    }
  }, {
    key: "requestEmailVerification",
    value: function (email, options) {
      options = options || {};
      var requestOptions = {};

      if (options.hasOwnProperty('useMasterKey')) {
        requestOptions.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.requestEmailVerification(email, requestOptions);
    }
  }, {
    key: "verifyPassword",
    value: function (username, password, options) {
      if (typeof username !== 'string') {
        return Promise.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Username must be a string.'));
      }

      if (typeof password !== 'string') {
        return Promise.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Password must be a string.'));
      }

      options = options || {};
      var verificationOption = {};

      if (options.hasOwnProperty('useMasterKey')) {
        verificationOption.useMasterKey = options.useMasterKey;
      }

      var controller = _CoreManager.default.getUserController();

      return controller.verifyPassword(username, password, verificationOption);
    }
  }, {
    key: "allowCustomUserClass",
    value: function (isAllowed) {
      _CoreManager.default.set('PERFORM_USER_REWRITE', !isAllowed);
    }
  }, {
    key: "enableRevocableSession",
    value: function (options) {
      options = options || {};

      _CoreManager.default.set('FORCE_REVOCABLE_SESSION', true);

      if (canUseCurrentUser) {
        var current = ParseUser.current();

        if (current) {
          return current._upgradeToRevocableSession(options);
        }
      }

      return Promise.resolve();
    }
  }, {
    key: "enableUnsafeCurrentUser",
    value: function () {
      canUseCurrentUser = true;
    }
  }, {
    key: "disableUnsafeCurrentUser",
    value: function () {
      canUseCurrentUser = false;
    }
  }, {
    key: "_registerAuthenticationProvider",
    value: function (provider) {
      authProviders[provider.getAuthType()] = provider;
      ParseUser.currentAsync().then(function (current) {
        if (current) {
          current._synchronizeAuthData(provider.getAuthType());
        }
      });
    }
  }, {
    key: "_logInWith",
    value: function (provider, options, saveOpts) {
      var user = new this();
      return user.linkWith(provider, options, saveOpts);
    }
  }, {
    key: "_clearCache",
    value: function () {
      currentUserCache = null;
      currentUserCacheMatchesDisk = false;
    }
  }, {
    key: "_setCurrentUserCache",
    value: function (user) {
      currentUserCache = user;
    }
  }]);
  return ParseUser;
}(_ParseObject2.default);

_ParseObject2.default.registerSubclass('_User', ParseUser);

var DefaultController = {
  updateUserOnDisk: function (user) {
    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    var json = user.toJSON();
    delete json.password;
    json.className = '_User';
    var userData = JSON.stringify(json);

    if (_CoreManager.default.get('ENCRYPTED_USER')) {
      var crypto = _CoreManager.default.getCryptoController();

      userData = crypto.encrypt(json, _CoreManager.default.get('ENCRYPTED_KEY'));
    }

    return _Storage.default.setItemAsync(path, userData).then(function () {
      return user;
    });
  },
  removeUserFromDisk: function () {
    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    currentUserCacheMatchesDisk = true;
    currentUserCache = null;
    return _Storage.default.removeItemAsync(path);
  },
  setCurrentUser: function (user) {
    var _this9 = this;

    return function () {
      var currentUser;
      return _regenerator.default.async(function (_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _regenerator.default.awrap(_this9.currentUserAsync());

            case 2:
              currentUser = _context.sent;

              if (!(currentUser && !user.equals(currentUser) && _AnonymousUtils.default.isLinked(currentUser))) {
                _context.next = 6;
                break;
              }

              _context.next = 6;
              return _regenerator.default.awrap(currentUser.destroy({
                sessionToken: currentUser.getSessionToken()
              }));

            case 6:
              currentUserCache = user;

              user._cleanupAuthData();

              user._synchronizeAllAuthData();

              return _context.abrupt("return", DefaultController.updateUserOnDisk(user));

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, null, null, null, Promise);
    }();
  },
  currentUser: function () {
    if (currentUserCache) {
      return currentUserCache;
    }

    if (currentUserCacheMatchesDisk) {
      return null;
    }

    if (_Storage.default.async()) {
      throw new Error('Cannot call currentUser() when using a platform with an async ' + 'storage system. Call currentUserAsync() instead.');
    }

    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    var userData = _Storage.default.getItem(path);

    currentUserCacheMatchesDisk = true;

    if (!userData) {
      currentUserCache = null;
      return null;
    }

    if (_CoreManager.default.get('ENCRYPTED_USER')) {
      var crypto = _CoreManager.default.getCryptoController();

      userData = crypto.decrypt(userData, _CoreManager.default.get('ENCRYPTED_KEY'));
    }

    userData = JSON.parse(userData);

    if (!userData.className) {
      userData.className = '_User';
    }

    if (userData._id) {
      if (userData.objectId !== userData._id) {
        userData.objectId = userData._id;
      }

      delete userData._id;
    }

    if (userData._sessionToken) {
      userData.sessionToken = userData._sessionToken;
      delete userData._sessionToken;
    }

    var current = _ParseObject2.default.fromJSON(userData);

    currentUserCache = current;

    current._synchronizeAllAuthData();

    return current;
  },
  currentUserAsync: function () {
    if (currentUserCache) {
      return Promise.resolve(currentUserCache);
    }

    if (currentUserCacheMatchesDisk) {
      return Promise.resolve(null);
    }

    var path = _Storage.default.generatePath(CURRENT_USER_KEY);

    return _Storage.default.getItemAsync(path).then(function (userData) {
      currentUserCacheMatchesDisk = true;

      if (!userData) {
        currentUserCache = null;
        return Promise.resolve(null);
      }

      if (_CoreManager.default.get('ENCRYPTED_USER')) {
        var crypto = _CoreManager.default.getCryptoController();

        userData = crypto.decrypt(userData.toString(), _CoreManager.default.get('ENCRYPTED_KEY'));
      }

      userData = JSON.parse(userData);

      if (!userData.className) {
        userData.className = '_User';
      }

      if (userData._id) {
        if (userData.objectId !== userData._id) {
          userData.objectId = userData._id;
        }

        delete userData._id;
      }

      if (userData._sessionToken) {
        userData.sessionToken = userData._sessionToken;
        delete userData._sessionToken;
      }

      var current = _ParseObject2.default.fromJSON(userData);

      currentUserCache = current;

      current._synchronizeAllAuthData();

      return Promise.resolve(current);
    });
  },
  signUp: function (user, attrs, options) {
    var username = attrs && attrs.username || user.get('username');
    var password = attrs && attrs.password || user.get('password');

    if (!username || !username.length) {
      return Promise.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Cannot sign up user with an empty username.'));
    }

    if (!password || !password.length) {
      return Promise.reject(new _ParseError.default(_ParseError.default.OTHER_CAUSE, 'Cannot sign up user with an empty password.'));
    }

    return user.save(attrs, options).then(function () {
      user._finishFetch({
        password: undefined
      });

      if (canUseCurrentUser) {
        return DefaultController.setCurrentUser(user);
      }

      return user;
    });
  },
  logIn: function (user, options) {
    var RESTController = _CoreManager.default.getRESTController();

    var stateController = _CoreManager.default.getObjectStateController();

    var auth = {
      username: user.get('username'),
      password: user.get('password')
    };
    return RESTController.request(options.usePost ? 'POST' : 'GET', 'login', auth, options).then(function (response) {
      user._migrateId(response.objectId);

      user._setExisted(true);

      stateController.setPendingOp(user._getStateIdentifier(), 'username', undefined);
      stateController.setPendingOp(user._getStateIdentifier(), 'password', undefined);
      response.password = undefined;

      user._finishFetch(response);

      if (!canUseCurrentUser) {
        return Promise.resolve(user);
      }

      return DefaultController.setCurrentUser(user);
    });
  },
  become: function (user, options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'users/me', {}, options).then(function (response) {
      user._finishFetch(response);

      user._setExisted(true);

      return DefaultController.setCurrentUser(user);
    });
  },
  hydrate: function (user, userJSON) {
    user._finishFetch(userJSON);

    user._setExisted(true);

    if (userJSON.sessionToken && canUseCurrentUser) {
      return DefaultController.setCurrentUser(user);
    }

    return Promise.resolve(user);
  },
  me: function (user, options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'users/me', {}, options).then(function (response) {
      user._finishFetch(response);

      user._setExisted(true);

      return user;
    });
  },
  logOut: function (options) {
    var Moralis = require('./Parse');

    Moralis.cleanup();

    var RESTController = _CoreManager.default.getRESTController();

    if (options.sessionToken) {
      return RESTController.request('POST', 'logout', {}, options);
    }

    return DefaultController.currentUserAsync().then(function (currentUser) {
      var path = _Storage.default.generatePath(CURRENT_USER_KEY);

      var promise = _Storage.default.removeItemAsync(path);

      if (currentUser !== null) {
        var isAnonymous = _AnonymousUtils.default.isLinked(currentUser);

        var currentSession = currentUser.getSessionToken();

        if (currentSession && (0, _isRevocableSession.default)(currentSession)) {
          promise = promise.then(function () {
            if (isAnonymous) {
              return currentUser.destroy({
                sessionToken: currentSession
              });
            }
          }).then(function () {
            return RESTController.request('POST', 'logout', {}, {
              sessionToken: currentSession
            });
          });
        }

        currentUser._logOutWithAll();

        currentUser._finishFetch({
          sessionToken: undefined
        });

        currentUser._clearServerData();
      }

      currentUserCacheMatchesDisk = true;
      currentUserCache = null;
      return promise;
    });
  },
  requestPasswordReset: function (email, options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('POST', 'requestPasswordReset', {
      email: email
    }, options);
  },
  upgradeToRevocableSession: function (user, options) {
    var token = user.getSessionToken();

    if (!token) {
      return Promise.reject(new _ParseError.default(_ParseError.default.SESSION_MISSING, 'Cannot upgrade a user with no session token'));
    }

    options.sessionToken = token;

    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('POST', 'upgradeToRevocableSession', {}, options).then(function (result) {
      var session = new _ParseSession.default();

      session._finishFetch(result);

      user._finishFetch({
        sessionToken: session.getSessionToken()
      });

      if (user.isCurrent()) {
        return DefaultController.setCurrentUser(user);
      }

      return Promise.resolve(user);
    });
  },
  linkWith: function (user, authData, options) {
    return user.save({
      authData: authData
    }, options).then(function () {
      if (canUseCurrentUser) {
        return DefaultController.setCurrentUser(user);
      }

      return user;
    });
  },
  verifyPassword: function (username, password, options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('GET', 'verifyPassword', {
      username: username,
      password: password
    }, options);
  },
  requestEmailVerification: function (email, options) {
    var RESTController = _CoreManager.default.getRESTController();

    return RESTController.request('POST', 'verificationEmailRequest', {
      email: email
    }, options);
  }
};

_CoreManager.default.setUserController(DefaultController);

var _default = ParseUser;
exports.default = _default;
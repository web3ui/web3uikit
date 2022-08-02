var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var initialized = false;
var requestedPermissions;
var initOptions;
var provider = {
  authenticate: function (options) {
    var _this = this;

    if (typeof FB === 'undefined') {
      options.error(this, 'Facebook SDK not found.');
    }

    FB.login(function (response) {
      if (response.authResponse) {
        if (options.success) {
          options.success(_this, {
            id: response.authResponse.userID,
            access_token: response.authResponse.accessToken,
            expiration_date: new Date(response.authResponse.expiresIn * 1000 + new Date().getTime()).toJSON()
          });
        }
      } else {
        if (options.error) {
          options.error(_this, response);
        }
      }
    }, {
      scope: requestedPermissions
    });
  },
  restoreAuthentication: function (authData) {
    if (authData) {
      var newOptions = {};

      if (initOptions) {
        for (var key in initOptions) {
          newOptions[key] = initOptions[key];
        }
      }

      newOptions.status = false;
      var existingResponse = FB.getAuthResponse();

      if (existingResponse && existingResponse.userID !== authData.id) {
        FB.logout();
      }

      FB.init(newOptions);
    }

    return true;
  },
  getAuthType: function () {
    return 'facebook';
  },
  deauthenticate: function () {
    this.restoreAuthentication(null);
  }
};
var FacebookUtils = {
  init: function (options) {
    if (typeof FB === 'undefined') {
      throw new Error('The Facebook JavaScript SDK must be loaded before calling init.');
    }

    initOptions = {};

    if (options) {
      for (var key in options) {
        initOptions[key] = options[key];
      }
    }

    if (initOptions.status && typeof console !== 'undefined') {
      var warn = console.warn || console.log || function () {};

      warn.call(console, 'The "status" flag passed into' + ' FB.init, when set to true, can interfere with Parse Facebook' + ' integration, so it has been suppressed. Please call' + ' FB.getLoginStatus() explicitly if you require this behavior.');
    }

    initOptions.status = false;
    FB.init(initOptions);

    _ParseUser.default._registerAuthenticationProvider(provider);

    initialized = true;
  },
  isLinked: function (user) {
    return user._isLinked('facebook');
  },
  logIn: function (permissions, options) {
    if (!permissions || typeof permissions === 'string') {
      if (!initialized) {
        throw new Error('You must initialize FacebookUtils before calling logIn.');
      }

      requestedPermissions = permissions;
      return _ParseUser.default.logInWith('facebook', options);
    }

    return _ParseUser.default.logInWith('facebook', {
      authData: permissions
    }, options);
  },
  link: function (user, permissions, options) {
    if (!permissions || typeof permissions === 'string') {
      if (!initialized) {
        throw new Error('You must initialize FacebookUtils before calling link.');
      }

      requestedPermissions = permissions;
      return user.linkWith('facebook', options);
    }

    return user.linkWith('facebook', {
      authData: permissions
    }, options);
  },
  unlink: function (user, options) {
    if (!initialized) {
      throw new Error('You must initialize FacebookUtils before calling unlink.');
    }

    return user._unlinkFrom('facebook', options);
  },
  _getAuthProvider: function () {
    return provider;
  }
};
var _default = FacebookUtils;
exports.default = _default;
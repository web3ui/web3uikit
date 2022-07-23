"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 * @flow-weak
 */

/* global FB */


let initialized = false;
let requestedPermissions;
let initOptions;
const provider = {
  authenticate(options) {
    if (typeof FB === 'undefined') {
      options.error(this, 'Facebook SDK not found.');
    }

    FB.login(response => {
      if (response.authResponse) {
        if (options.success) {
          options.success(this, {
            id: response.authResponse.userID,
            access_token: response.authResponse.accessToken,
            expiration_date: new Date(response.authResponse.expiresIn * 1000 + new Date().getTime()).toJSON()
          });
        }
      } else {
        if (options.error) {
          options.error(this, response);
        }
      }
    }, {
      scope: requestedPermissions
    });
  },

  restoreAuthentication(authData) {
    if (authData) {
      const newOptions = {};

      if (initOptions) {
        for (const key in initOptions) {
          newOptions[key] = initOptions[key];
        }
      } // Suppress checks for login status from the browser.


      newOptions.status = false; // If the user doesn't match the one known by the FB SDK, log out.
      // Most of the time, the users will match -- it's only in cases where
      // the FB SDK knows of a different user than the one being restored
      // from a Parse User that logged in with username/password.

      const existingResponse = FB.getAuthResponse();

      if (existingResponse && existingResponse.userID !== authData.id) {
        FB.logout();
      }

      FB.init(newOptions);
    }

    return true;
  },

  getAuthType() {
    return 'facebook';
  },

  deauthenticate() {
    this.restoreAuthentication(null);
  }

};
/**
 * Provides a set of utilities for using Parse with Facebook.
 *
 * @class Parse.FacebookUtils
 * @static
 * @hideconstructor
 */

const FacebookUtils = {
  /**
   * Initializes Parse Facebook integration.  Call this function after you
   * have loaded the Facebook Javascript SDK with the same parameters
   * as you would pass to<code>
   * <a href=
   * "https://developers.facebook.com/docs/reference/javascript/FB.init/">
   * FB.init()</a></code>.  Parse.FacebookUtils will invoke FB.init() for you
   * with these arguments.
   *
   * @function init
   * @name Parse.FacebookUtils.init
   * @param {object} options Facebook options argument as described here:
   *   <a href=
   *   "https://developers.facebook.com/docs/reference/javascript/FB.init/">
   *   FB.init()</a>. The status flag will be coerced to 'false' because it
   *   interferes with Parse Facebook integration. Call FB.getLoginStatus()
   *   explicitly if this behavior is required by your application.
   */
  init(options) {
    if (typeof FB === 'undefined') {
      throw new Error('The Facebook JavaScript SDK must be loaded before calling init.');
    }

    initOptions = {};

    if (options) {
      for (const key in options) {
        initOptions[key] = options[key];
      }
    }

    if (initOptions.status && typeof console !== 'undefined') {
      const warn = console.warn || console.log || function () {}; // eslint-disable-line no-console


      warn.call(console, 'The "status" flag passed into' + ' FB.init, when set to true, can interfere with Parse Facebook' + ' integration, so it has been suppressed. Please call' + ' FB.getLoginStatus() explicitly if you require this behavior.');
    }

    initOptions.status = false;
    FB.init(initOptions);

    _ParseUser.default._registerAuthenticationProvider(provider);

    initialized = true;
  },

  /**
   * Gets whether the user has their account linked to Facebook.
   *
   * @function isLinked
   * @name Parse.FacebookUtils.isLinked
   * @param {Parse.User} user User to check for a facebook link.
   *     The user must be logged in on this device.
   * @returns {boolean} <code>true</code> if the user has their account
   *     linked to Facebook.
   */
  isLinked(user) {
    return user._isLinked('facebook');
  },

  /**
   * Logs in a user using Facebook. This method delegates to the Facebook
   * SDK to authenticate the user, and then automatically logs in (or
   * creates, in the case where it is a new user) a Parse.User.
   *
   * Standard API:
   *
   * <code>logIn(permission: string, authData: Object);</code>
   *
   * Advanced API: Used for handling your own oAuth tokens
   * {@link https://docs.parseplatform.org/rest/guide/#linking-users}
   *
   * <code>logIn(authData: Object, options?: Object);</code>
   *
   * @function logIn
   * @name Parse.FacebookUtils.logIn
   * @param {(string | object)} permissions The permissions required for Facebook
   *    log in.  This is a comma-separated string of permissions.
   *    Alternatively, supply a Facebook authData object as described in our
   *    REST API docs if you want to handle getting facebook auth tokens
   *    yourself.
   * @param {object} options MasterKey / SessionToken. Alternatively can be used for authData if permissions is a string
   * @returns {Promise}
   */
  logIn(permissions, options) {
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

  /**
   * Links Facebook to an existing PFUser. This method delegates to the
   * Facebook SDK to authenticate the user, and then automatically links
   * the account to the Parse.User.
   *
   * Standard API:
   *
   * <code>link(user: Parse.User, permission: string, authData?: Object);</code>
   *
   * Advanced API: Used for handling your own oAuth tokens
   * {@link https://docs.parseplatform.org/rest/guide/#linking-users}
   *
   * <code>link(user: Parse.User, authData: Object, options?: FullOptions);</code>
   *
   * @function link
   * @name Parse.FacebookUtils.link
   * @param {Parse.User} user User to link to Facebook. This must be the
   *     current user.
   * @param {(string | object)} permissions The permissions required for Facebook
   *    log in.  This is a comma-separated string of permissions.
   *    Alternatively, supply a Facebook authData object as described in our
   *    REST API docs if you want to handle getting facebook auth tokens
   *    yourself.
   * @param {object} options MasterKey / SessionToken. Alternatively can be used for authData if permissions is a string
   * @returns {Promise}
   */
  link(user, permissions, options) {
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

  /**
   * Unlinks the Parse.User from a Facebook account.
   *
   * @function unlink
   * @name Parse.FacebookUtils.unlink
   * @param {Parse.User} user User to unlink from Facebook. This must be the
   *     current user.
   * @param {object} options Standard options object with success and error
   *    callbacks.
   * @returns {Promise}
   */
  unlink: function (user, options) {
    if (!initialized) {
      throw new Error('You must initialize FacebookUtils before calling unlink.');
    }

    return user._unlinkFrom('facebook', options);
  },

  // Used for testing purposes
  _getAuthProvider() {
    return provider;
  }

};
var _default = FacebookUtils;
exports.default = _default;
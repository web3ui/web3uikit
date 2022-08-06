"use strict";

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _ParseUser = _interopRequireDefault(require("./ParseUser"));
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


var _require = require('uuid'),
    uuidv4 = _require.v4;

var registered = false;
/**
 * Provides utility functions for working with Anonymously logged-in users. <br />
 * Anonymous users have some unique characteristics:
 * <ul>
 *  <li>Anonymous users don't need a user name or password.</li>
 *  <ul>
 *    <li>Once logged out, an anonymous user cannot be recovered.</li>
 *  </ul>
 *  <li>signUp converts an anonymous user to a standard user with the given username and password.</li>
 *  <ul>
 *    <li>Data associated with the anonymous user is retained.</li>
 *  </ul>
 *  <li>logIn switches users without converting the anonymous user.</li>
 *  <ul>
 *    <li>Data associated with the anonymous user will be lost.</li>
 *  </ul>
 *  <li>Service logIn (e.g. Facebook, Twitter) will attempt to convert
 *  the anonymous user into a standard user by linking it to the service.</li>
 *  <ul>
 *    <li>If a user already exists that is linked to the service, it will instead switch to the existing user.</li>
 *  </ul>
 *  <li>Service linking (e.g. Facebook, Twitter) will convert the anonymous user
 *  into a standard user by linking it to the service.</li>
 * </ul>
 *
 * @class Parse.AnonymousUtils
 * @static
 */

var AnonymousUtils = {
  /**
   * Gets whether the user has their account linked to anonymous user.
   *
   * @function isLinked
   * @name Parse.AnonymousUtils.isLinked
   * @param {Parse.User} user User to check for.
   *     The user must be logged in on this device.
   * @returns {boolean} <code>true</code> if the user has their account
   *     linked to an anonymous user.
   * @static
   */
  isLinked: function (user
  /*: ParseUser*/
  ) {
    var provider = this._getAuthProvider();

    return user._isLinked(provider.getAuthType());
  },

  /**
   * Logs in a user Anonymously.
   *
   * @function logIn
   * @name Parse.AnonymousUtils.logIn
   * @param {object} options MasterKey / SessionToken.
   * @returns {Promise} Logged in user
   * @static
   */
  logIn: function (options
  /*:: ?: RequestOptions*/
  )
  /*: Promise<ParseUser>*/
  {
    var provider = this._getAuthProvider();

    return _ParseUser.default.logInWith(provider.getAuthType(), provider.getAuthData(), options);
  },

  /**
   * Links Anonymous User to an existing PFUser.
   *
   * @function link
   * @name Parse.AnonymousUtils.link
   * @param {Parse.User} user User to link. This must be the current user.
   * @param {object} options MasterKey / SessionToken.
   * @returns {Promise} Linked with User
   * @static
   */
  link: function (user
  /*: ParseUser*/
  , options
  /*:: ?: RequestOptions*/
  )
  /*: Promise<ParseUser>*/
  {
    var provider = this._getAuthProvider();

    return user.linkWith(provider.getAuthType(), provider.getAuthData(), options);
  },
  _getAuthProvider: function () {
    var provider = {
      restoreAuthentication: function () {
        return true;
      },
      getAuthType: function () {
        return 'anonymous';
      },
      getAuthData: function () {
        return {
          authData: {
            id: uuidv4()
          }
        };
      }
    };

    if (!registered) {
      _ParseUser.default._registerAuthenticationProvider(provider);

      registered = true;
    }

    return provider;
  }
};
var _default = AnonymousUtils;
exports.default = _default;
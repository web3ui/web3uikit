"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _isRevocableSession = _interopRequireDefault(require("./isRevocableSession"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

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
 * @flow
 */

/**
 * <p>A Parse.Session object is a local representation of a revocable session.
 * This class is a subclass of a Parse.Object, and retains the same
 * functionality of a Parse.Object.</p>
 *
 * @alias Parse.Session
 * @augments Parse.Object
 */


class ParseSession extends _ParseObject.default {
  /**
   * @param {object} attributes The initial set of data to store in the user.
   */
  constructor(attributes
  /*: ?AttributeMap*/
  ) {
    super('_Session');

    if (attributes && typeof attributes === 'object') {
      if (!this.set(attributes || {})) {
        throw new Error("Can't create an invalid Session");
      }
    }
  }
  /**
   * Returns the session token string.
   *
   * @returns {string}
   */


  getSessionToken()
  /*: string*/
  {
    const token = this.get('sessionToken');

    if (typeof token === 'string') {
      return token;
    }

    return '';
  }

  static readOnlyAttributes() {
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


  static current(options
  /*: FullOptions*/
  ) {
    options = options || {};

    const controller = _CoreManager.default.getSessionController();

    const sessionOptions = {};

    if (options.hasOwnProperty('useMasterKey')) {
      sessionOptions.useMasterKey = options.useMasterKey;
    }

    return _ParseUser.default.currentAsync().then(user => {
      if (!user) {
        return Promise.reject('There is no current user.');
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


  static isCurrentSessionRevocable()
  /*: boolean*/
  {
    const currentUser = _ParseUser.default.current();

    if (currentUser) {
      return (0, _isRevocableSession.default)(currentUser.getSessionToken() || '');
    }

    return false;
  }

}

_ParseObject.default.registerSubclass('_Session', ParseSession);

const DefaultController = {
  getSession(options
  /*: RequestOptions*/
  )
  /*: Promise<ParseSession>*/
  {
    const RESTController = _CoreManager.default.getRESTController();

    const session = new ParseSession();
    return RESTController.request('GET', 'sessions/me', {}, options).then(sessionData => {
      session._finishFetch(sessionData);

      session._setExisted(true);

      return session;
    });
  }

};

_CoreManager.default.setSessionController(DefaultController);

var _default = ParseSession;
exports.default = _default;
"use strict";

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _CryptoController = _interopRequireDefault(require("./CryptoController"));

var _InstallationController = _interopRequireDefault(require("./InstallationController"));

var ParseOp = _interopRequireWildcard(require("./ParseOp"));

var _RESTController = _interopRequireDefault(require("./RESTController"));

var _MoralisWeb = _interopRequireDefault(require("./MoralisWeb3"));

var _ethers = require("ethers");

var _filterConsole = require("./filterConsole");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof WeakMap !== "function") return null;
  var cacheBabelInterop = new WeakMap();
  var cacheNodeInterop = new WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* eslint-disable no-console */

/**
 * Copyright (c) 2015-present, Parse, LLC.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 */


const {
  checkForSdkUpdates,
  trackEvent,
  TrackingEventName,
  getSubdomain
} = require('./utils');
/**
 * Contains all Moralis API classes and functions.
 *
 * @static
 * @global
 * @class
 * @hideconstructor
 */


class Moralis extends _MoralisWeb.default {
  /**
   * Call this method to initialize all moralis instances (Moralis, Web3Api, plugins).
   *
   * @param {object} options Your Moralis Application ID and Server URL. Moralis.start({serverUrl,appId})
   * @static
   */
  static async start(options) {
    const {
      appId,
      serverUrl,
      plugins,
      javascriptKey,
      masterKey,
      moralisSecret
    } = options;
    let apiKey;
    let trackOptions;

    // Node environment
    if (moralisSecret) {
      this.moralisSecret = moralisSecret;
      const {
        web3ApiKey,
        speedyNodeApiKey
      } = await this.getApiKeys(moralisSecret);
      apiKey = web3ApiKey;
      this.speedyNodeApiKey = speedyNodeApiKey;
    }

    this.initialize(appId, javascriptKey, masterKey);
    this.serverURL = serverUrl;
    this.Web3API.initialize({
      serverUrl,
      apiKey,
      Moralis
    });
    this.SolanaAPI.initialize({
      serverUrl,
      apiKey,
      Moralis
    });

    if (appId && serverUrl) {
      trackOptions = {
        subdomain: getSubdomain(serverUrl),
        sdk_type: 'javascript',
        sdk_version: "1.9.0",
        sdk_enviroment: "node",
        appId: appId
      };
      await this.initPlugins(plugins);
    } else {
      trackOptions = {
        sdk_type: 'javascript',
        sdk_version: "1.9.0",
        sdk_enviroment: "node"
      };
    } // Check if SDK is updated


    checkForSdkUpdates(); // Track start function call

    trackEvent(TrackingEventName.START_FUNCTION, serverUrl ? getSubdomain(serverUrl) : null, trackOptions);
  }
  /**
   * Call this method to get apiKeys using moralis secret.
   *
   * @param {string} moralisSecret Your MoralisSecret
   * @static
   */


  static async getApiKeys(moralisSecret) {
    try {
      const RESTController = _CoreManager.default.getRESTController();

      const response = await RESTController.ajax('GET', 'https://admin.moralis.io/api/publics/apiKeys', null, {
        'moralis-secret': moralisSecret,
        Accept: 'application/json',
        'Content-Type': 'application/json'
      });
      return response.response.result;
    } catch (error) {
      throw new Error(`Could not fetch keys with moralisSecret`);
    }
  }
  /**
   * Call this method first to set up your authentication tokens for Moralis.
   *
   * @param {string} applicationId Your Moralis Application ID.
   * @param {string} [javaScriptKey] Your Moralis JavaScript Key (Not needed for moralis-server)
   * @param {string} [masterKey] Your Moralis Master Key. (Node.js only!)
   * @static
   */


  static initialize(applicationId
  /*: string*/
  , javaScriptKey
  /*: string*/
  ) {
    Moralis._initialize(applicationId, javaScriptKey);
  }

  static _initialize(applicationId
  /*: string*/
  , javaScriptKey
  /*: string*/
  , masterKey
  /*: string*/
  ) {
    _CoreManager.default.set('APPLICATION_ID', applicationId);

    _CoreManager.default.set('JAVASCRIPT_KEY', javaScriptKey);

    _CoreManager.default.set('MASTER_KEY', masterKey);

    _CoreManager.default.set('USE_MASTER_KEY', false);
  }
  /**
   * Call this method to set your AsyncStorage engine
   * Starting Parse@1.11, the ParseSDK do not provide a React AsyncStorage as the ReactNative module
   * is not provided at a stable path and changes over versions.
   *
   * @param {AsyncStorage} storage a react native async storage.
   * @static
   */


  static setAsyncStorage(storage
  /*: any*/
  ) {
    _CoreManager.default.setAsyncStorage(storage);
  }
  /**
   * Call this method to set your LocalDatastoreStorage engine
   * If using React-Native use {@link Moralis.setAsyncStorage Moralis.setAsyncStorage()}
   *
   * @param {LocalDatastoreController} controller a data storage.
   * @static
   */


  static setLocalDatastoreController(controller
  /*: any*/
  ) {
    _CoreManager.default.setLocalDatastoreController(controller);
  }
  /**
   * @member {string} Moralis.applicationId
   * @static
   */


  static set applicationId(value) {
    _CoreManager.default.set('APPLICATION_ID', value);
  }

  static get applicationId() {
    return _CoreManager.default.get('APPLICATION_ID');
  }
  /**
   * @member {string} Moralis.javaScriptKey
   * @static
   */


  static set javaScriptKey(value) {
    _CoreManager.default.set('JAVASCRIPT_KEY', value);
  }

  static get javaScriptKey() {
    return _CoreManager.default.get('JAVASCRIPT_KEY');
  }
  /**
   * @member {string} Moralis.masterKey
   * @static
   */


  static set masterKey(value) {
    _CoreManager.default.set('MASTER_KEY', value);
  }

  static get masterKey() {
    return _CoreManager.default.get('MASTER_KEY');
  }
  /**
   * @member {string} Moralis.serverURL
   * @static
   */


  static set serverURL(value) {
    _CoreManager.default.set('SERVER_URL', value);
  }

  static get serverURL() {
    return _CoreManager.default.get('SERVER_URL');
  }
  /**
   * @member {string} Moralis.serverAuthToken
   * @static
   */


  static set serverAuthToken(value) {
    _CoreManager.default.set('SERVER_AUTH_TOKEN', value);
  }

  static get serverAuthToken() {
    return _CoreManager.default.get('SERVER_AUTH_TOKEN');
  }
  /**
   * @member {string} Moralis.serverAuthType
   * @static
   */


  static set serverAuthType(value) {
    _CoreManager.default.set('SERVER_AUTH_TYPE', value);
  }

  static get serverAuthType() {
    return _CoreManager.default.get('SERVER_AUTH_TYPE');
  }
  /**
   * @member {string} Moralis.liveQueryServerURL
   * @static
   */


  static set liveQueryServerURL(value) {
    _CoreManager.default.set('LIVEQUERY_SERVER_URL', value);
  }

  static get liveQueryServerURL() {
    return _CoreManager.default.get('LIVEQUERY_SERVER_URL');
  }
  /**
   * @member {string} Moralis.encryptedUser
   * @static
   */


  static set encryptedUser(value) {
    _CoreManager.default.set('ENCRYPTED_USER', value);
  }

  static get encryptedUser() {
    return _CoreManager.default.get('ENCRYPTED_USER');
  }
  /**
   * @member {string} Moralis.secret
   * @static
   */


  static set secret(value) {
    _CoreManager.default.set('ENCRYPTED_KEY', value);
  }

  static get secret() {
    return _CoreManager.default.get('ENCRYPTED_KEY');
  }
  /**
   * @member {boolean} Moralis.idempotency
   * @static
   */


  static set idempotency(value) {
    _CoreManager.default.set('IDEMPOTENCY', value);
  }

  static get idempotency() {
    return _CoreManager.default.get('IDEMPOTENCY');
  }

}

Moralis.ACL = require('./ParseACL').default;
Moralis.Analytics = require('./Analytics');
Moralis.AnonymousUtils = require('./AnonymousUtils').default;
Moralis.Cloud = require('./Cloud');
Moralis.CLP = require('./ParseCLP').default;
Moralis.CoreManager = require('./CoreManager');
Moralis.Config = require('./ParseConfig').default;
Moralis.Error = require('./ParseError').default;
Moralis.FacebookUtils = require('./FacebookUtils').default;
Moralis.File = require('./ParseFile').default;
Moralis.GeoPoint = require('./ParseGeoPoint').default;
Moralis.Polygon = require('./ParsePolygon').default;
Moralis.Installation = require('./ParseInstallation').default;
Moralis.LocalDatastore = require('./LocalDatastore');
Moralis.Object = require('./ParseObject').default;
Moralis.Op = {
  Set: ParseOp.SetOp,
  Unset: ParseOp.UnsetOp,
  Increment: ParseOp.IncrementOp,
  Add: ParseOp.AddOp,
  Remove: ParseOp.RemoveOp,
  AddUnique: ParseOp.AddUniqueOp,
  Relation: ParseOp.RelationOp
};
Moralis.Web3API = require('./MoralisWeb3Api').default;
Moralis.SolanaAPI = require('./MoralisSolanaApi').default;
Moralis.Push = require('./Push');
Moralis.Query = require('./ParseQuery').default;
Moralis.Relation = require('./ParseRelation').default;
Moralis.Role = require('./ParseRole').default;
Moralis.Schema = require('./ParseSchema').default;
Moralis.Session = require('./ParseSession').default;
Moralis.Storage = require('./Storage');
Moralis.User = require('./ParseUser').default;
Moralis.LiveQuery = require('./ParseLiveQuery').default;
Moralis.LiveQueryClient = require('./LiveQueryClient').default;
Moralis.Web3 = Moralis;
Moralis.Units = require('./UnitConvert'); // Moralis.Web3 = require('./MoralisWeb3').default;

Moralis.Elrond = require('./MoralisErd').default;
Moralis.Erd = Moralis.Elrond;
Moralis.Dot = require('./MoralisDot').default;
Moralis.UI = require('./MoralisUI').default;
Moralis.Chains = require('./Chains').default;
Moralis.AbstractWeb3Connector = require('./Web3Connector/AbstractWeb3Connector').default;
(0, _filterConsole.filterConsole)();

Moralis._request = function (...args) {
  return _CoreManager.default.getRESTController().request.apply(null, args);
};

Moralis._ajax = function (...args) {
  return _CoreManager.default.getRESTController().ajax.apply(null, args);
}; // We attempt to match the signatures of the legacy versions of these methods


Moralis._decode = function (_, value) {
  return (0, _decode.default)(value);
};

Moralis._encode = function (value, _, disallowObjects) {
  return (0, _encode.default)(value, disallowObjects);
};

Moralis._getInstallationId = function () {
  return _CoreManager.default.getInstallationController().currentInstallationId();
};
/**
 * Enable pinning in your application.
 * This must be called before your application can use pinning.
 *
 * @static
 */


Moralis.enableLocalDatastore = function () {
  Moralis.LocalDatastore.isEnabled = true;
};
/**
 * Flag that indicates whether Local Datastore is enabled.
 *
 * @static
 * @returns {boolean}
 */


Moralis.isLocalDatastoreEnabled = function () {
  return Moralis.LocalDatastore.isEnabled;
};
/**
 * Gets all contents from Local Datastore
 *
 * <pre>
 * await Moralis.dumpLocalDatastore();
 * </pre>
 *
 * @static
 * @returns {object}
 */


Moralis.dumpLocalDatastore = function () {
  if (!Moralis.LocalDatastore.isEnabled) {
    console.log('Moralis: Moralis.enableLocalDatastore() must be called first'); // eslint-disable-line no-console

    return Promise.resolve({});
  }

  return Moralis.LocalDatastore._getAllContents();
};
/**
 * Enable the current user encryption.
 * This must be called before login any user.
 *
 * @static
 */


Moralis.enableEncryptedUser = function () {
  Moralis.encryptedUser = true;
};
/**
 * Flag that indicates whether Encrypted User is enabled.
 *
 * @static
 * @returns {boolean}
 */


Moralis.isEncryptedUserEnabled = function () {
  return Moralis.encryptedUser;
};

_CoreManager.default.setCryptoController(_CryptoController.default);

_CoreManager.default.setInstallationController(_InstallationController.default);

_CoreManager.default.setRESTController(_RESTController.default);

Moralis.initialize = Moralis._initialize;
Moralis.Cloud = Moralis.Cloud || {};

Moralis.Cloud.useMasterKey = function () {
  _CoreManager.default.set('USE_MASTER_KEY', true);
};

Moralis.Hooks = require('./ParseHooks'); // For legacy requires, of the form `var Moralis = require('moralis').Moralis`

Moralis.Moralis = Moralis;
module.exports = Moralis;
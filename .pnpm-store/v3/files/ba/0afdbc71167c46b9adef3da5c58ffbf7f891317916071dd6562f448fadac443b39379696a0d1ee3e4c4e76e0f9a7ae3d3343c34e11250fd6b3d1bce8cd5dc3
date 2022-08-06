"use strict";

var _typeof = require("@babel/runtime-corejs3/helpers/typeof");

var _Reflect$construct = require("@babel/runtime-corejs3/core-js-stable/reflect/construct");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

var _promise = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/promise"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/inherits"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/getPrototypeOf"));

var _decode = _interopRequireDefault(require("./decode"));

var _encode = _interopRequireDefault(require("./encode"));

var _CoreManager = _interopRequireDefault(require("./CoreManager"));

var _CryptoController = _interopRequireDefault(require("./CryptoController"));

var _InstallationController = _interopRequireDefault(require("./InstallationController"));

var ParseOp = _interopRequireWildcard(require("./ParseOp"));

var _RESTController2 = _interopRequireDefault(require("./RESTController"));

var _MoralisWeb2 = _interopRequireDefault(require("./MoralisWeb3"));

var _ethers = require("ethers");

var _filterConsole = require("./filterConsole");

function _getRequireWildcardCache(nodeInterop) {
  if (typeof _WeakMap !== "function") return null;
  var cacheBabelInterop = new _WeakMap();
  var cacheNodeInterop = new _WeakMap();
  return (_getRequireWildcardCache = function (nodeInterop) {
    return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
  })(nodeInterop);
}

function _interopRequireWildcard(obj, nodeInterop) {
  if (!nodeInterop && obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache(nodeInterop);

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};

  for (var key in obj) {
    if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = _Object$defineProperty && _Object$getOwnPropertyDescriptor ? _Object$getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        _Object$defineProperty(newObj, key, desc);
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

var _require = require('./utils'),
    checkForSdkUpdates = _require.checkForSdkUpdates,
    trackEvent = _require.trackEvent,
    TrackingEventName = _require.TrackingEventName,
    getSubdomain = _require.getSubdomain;
/**
 * Contains all Moralis API classes and functions.
 *
 * @static
 * @global
 * @class
 * @hideconstructor
 */


var Moralis = /*#__PURE__*/function (_MoralisWeb) {
  (0, _inherits2.default)(Moralis, _MoralisWeb);

  var _super = _createSuper(Moralis);

  function Moralis() {
    (0, _classCallCheck2.default)(this, Moralis);
    return _super.apply(this, arguments);
  }

  (0, _createClass2.default)(Moralis, null, [{
    key: "start",
    value:
    /**
     * Call this method to initialize all moralis instances (Moralis, Web3Api, plugins).
     *
     * @param {object} options Your Moralis Application ID and Server URL. Moralis.start({serverUrl,appId})
     * @static
     */
    function () {
      var _start = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee(options) {
        var appId, serverUrl, plugins, javascriptKey, masterKey, moralisSecret, apiKey, trackOptions, _yield$this$getApiKey, web3ApiKey, speedyNodeApiKey;

        return _regenerator.default.wrap(function (_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                appId = options.appId, serverUrl = options.serverUrl, plugins = options.plugins, javascriptKey = options.javascriptKey, masterKey = options.masterKey, moralisSecret = options.moralisSecret;

                if (serverUrl) {
                  _context.next = 4;
                  break;
                }

                throw new Error("Moralis.start failed: serverUrl is required");

              case 4:
                if (appId) {
                  _context.next = 6;
                  break;
                }

                throw new Error("Moralis.start failed: appId is required");

              case 6:
                if (moralisSecret) {
                  console.warn('Moralis.start warning: Using moralisSecret on the browser enviroment reveals critical information.');
                }

                _context.next = 18;
                break;

              case 9:
                if (!moralisSecret) {
                  _context.next = 18;
                  break;
                }

                this.moralisSecret = moralisSecret;
                _context.next = 13;
                return this.getApiKeys(moralisSecret);

              case 13:
                _yield$this$getApiKey = _context.sent;
                web3ApiKey = _yield$this$getApiKey.web3ApiKey;
                speedyNodeApiKey = _yield$this$getApiKey.speedyNodeApiKey;
                apiKey = web3ApiKey;
                this.speedyNodeApiKey = speedyNodeApiKey;

              case 18:
                this.initialize(appId, javascriptKey, masterKey);
                this.serverURL = serverUrl;
                this.Web3API.initialize({
                  serverUrl: serverUrl,
                  apiKey: apiKey,
                  Moralis: Moralis
                });
                this.SolanaAPI.initialize({
                  serverUrl: serverUrl,
                  apiKey: apiKey,
                  Moralis: Moralis
                });

                if (!(appId && serverUrl)) {
                  _context.next = 28;
                  break;
                }

                trackOptions = {
                  subdomain: getSubdomain(serverUrl),
                  sdk_type: 'javascript',
                  sdk_version: "1.9.0",
                  sdk_enviroment: "weapp",
                  appId: appId
                };
                _context.next = 26;
                return this.initPlugins(plugins);

              case 26:
                _context.next = 29;
                break;

              case 28:
                trackOptions = {
                  sdk_type: 'javascript',
                  sdk_version: "1.9.0",
                  sdk_enviroment: "weapp"
                };

              case 29:
                // Check if SDK is updated
                checkForSdkUpdates(); // Track start function call

                trackEvent(TrackingEventName.START_FUNCTION, serverUrl ? getSubdomain(serverUrl) : null, trackOptions);

              case 31:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function () {
        return _start.apply(this, arguments);
      };
    }()
    /**
     * Call this method to get apiKeys using moralis secret.
     *
     * @param {string} moralisSecret Your MoralisSecret
     * @static
     */

  }, {
    key: "getApiKeys",
    value: function () {
      var _getApiKeys = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2(moralisSecret) {
        var _RESTController, response;

        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                _context2.prev = 0;
                _RESTController = _CoreManager.default.getRESTController();
                _context2.next = 4;
                return _RESTController.ajax('GET', 'https://admin.moralis.io/api/publics/apiKeys', null, {
                  'moralis-secret': moralisSecret,
                  Accept: 'application/json',
                  'Content-Type': 'application/json'
                });

              case 4:
                response = _context2.sent;
                return _context2.abrupt("return", response.response.result);

              case 8:
                _context2.prev = 8;
                _context2.t0 = _context2["catch"](0);
                throw new Error("Could not fetch keys with moralisSecret");

              case 11:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, null, [[0, 8]]);
      }));

      return function () {
        return _getApiKeys.apply(this, arguments);
      };
    }()
    /**
     * Call this method first to set up your authentication tokens for Moralis.
     *
     * @param {string} applicationId Your Moralis Application ID.
     * @param {string} [javaScriptKey] Your Moralis JavaScript Key (Not needed for moralis-server)
     * @param {string} [masterKey] Your Moralis Master Key. (Node.js only!)
     * @static
     */

  }, {
    key: "initialize",
    value: function (applicationId
    /*: string*/
    , javaScriptKey
    /*: string*/
    ) {
      Moralis._initialize(applicationId, javaScriptKey);
    }
  }, {
    key: "_initialize",
    value: function (applicationId
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

  }, {
    key: "setAsyncStorage",
    value: function (storage
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

  }, {
    key: "setLocalDatastoreController",
    value: function (controller
    /*: any*/
    ) {
      _CoreManager.default.setLocalDatastoreController(controller);
    }
    /**
     * @member {string} Moralis.applicationId
     * @static
     */

  }, {
    key: "applicationId",
    get: function () {
      return _CoreManager.default.get('APPLICATION_ID');
    }
    /**
     * @member {string} Moralis.javaScriptKey
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('APPLICATION_ID', value);
    }
  }, {
    key: "javaScriptKey",
    get: function () {
      return _CoreManager.default.get('JAVASCRIPT_KEY');
    }
    /**
     * @member {string} Moralis.masterKey
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('JAVASCRIPT_KEY', value);
    }
  }, {
    key: "masterKey",
    get: function () {
      return _CoreManager.default.get('MASTER_KEY');
    }
    /**
     * @member {string} Moralis.serverURL
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('MASTER_KEY', value);
    }
  }, {
    key: "serverURL",
    get: function () {
      return _CoreManager.default.get('SERVER_URL');
    }
    /**
     * @member {string} Moralis.serverAuthToken
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('SERVER_URL', value);
    }
  }, {
    key: "serverAuthToken",
    get: function () {
      return _CoreManager.default.get('SERVER_AUTH_TOKEN');
    }
    /**
     * @member {string} Moralis.serverAuthType
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('SERVER_AUTH_TOKEN', value);
    }
  }, {
    key: "serverAuthType",
    get: function () {
      return _CoreManager.default.get('SERVER_AUTH_TYPE');
    }
    /**
     * @member {string} Moralis.liveQueryServerURL
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('SERVER_AUTH_TYPE', value);
    }
  }, {
    key: "liveQueryServerURL",
    get: function () {
      return _CoreManager.default.get('LIVEQUERY_SERVER_URL');
    }
    /**
     * @member {string} Moralis.encryptedUser
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('LIVEQUERY_SERVER_URL', value);
    }
  }, {
    key: "encryptedUser",
    get: function () {
      return _CoreManager.default.get('ENCRYPTED_USER');
    }
    /**
     * @member {string} Moralis.secret
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('ENCRYPTED_USER', value);
    }
  }, {
    key: "secret",
    get: function () {
      return _CoreManager.default.get('ENCRYPTED_KEY');
    }
    /**
     * @member {boolean} Moralis.idempotency
     * @static
     */
    ,
    set: function (value) {
      _CoreManager.default.set('ENCRYPTED_KEY', value);
    }
  }, {
    key: "idempotency",
    get: function () {
      return _CoreManager.default.get('IDEMPOTENCY');
    },
    set: function (value) {
      _CoreManager.default.set('IDEMPOTENCY', value);
    }
  }]);
  return Moralis;
}(_MoralisWeb2.default);

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

Moralis._request = function () {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  return _CoreManager.default.getRESTController().request.apply(null, args);
};

Moralis._ajax = function () {
  for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
    args[_key2] = arguments[_key2];
  }

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

    return _promise.default.resolve({});
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

_CoreManager.default.setRESTController(_RESTController2.default);

// For legacy requires, of the form `var Moralis = require('moralis').Moralis`
Moralis.Moralis = Moralis;
module.exports = Moralis;
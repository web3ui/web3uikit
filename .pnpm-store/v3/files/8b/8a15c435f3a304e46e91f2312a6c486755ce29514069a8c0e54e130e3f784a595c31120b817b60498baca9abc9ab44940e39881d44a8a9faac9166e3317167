"use strict";

var _typeof3 = require("@babel/runtime-corejs3/helpers/typeof");

var _sliceInstanceProperty = require("@babel/runtime-corejs3/core-js-stable/instance/slice");

var _Array$from = require("@babel/runtime-corejs3/core-js-stable/array/from");

var _Symbol = require("@babel/runtime-corejs3/core-js-stable/symbol");

var _getIteratorMethod = require("@babel/runtime-corejs3/core-js/get-iterator-method");

var _Array$isArray = require("@babel/runtime-corejs3/core-js-stable/array/is-array");

var _WeakMap = require("@babel/runtime-corejs3/core-js-stable/weak-map");

var _Object$defineProperty = require("@babel/runtime-corejs3/core-js-stable/object/define-property");

var _Object$getOwnPropertyDescriptor = require("@babel/runtime-corejs3/core-js-stable/object/get-own-property-descriptor");

var _interopRequireDefault = require("@babel/runtime-corejs3/helpers/interopRequireDefault");

_Object$defineProperty(exports, "__esModule", {
  value: true
});

exports.default = void 0;

var _filter = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/filter"));

var _forEach = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/for-each"));

var _concat = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/concat"));

var _stringify = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/json/stringify"));

var _map = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/map"));

var _trim = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/trim"));

var _find = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/find"));

var _every = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/every"));

var _values = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/object/values"));

var _bind = _interopRequireDefault(require("@babel/runtime-corejs3/core-js-stable/instance/bind"));

var _regenerator = _interopRequireDefault(require("@babel/runtime-corejs3/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/typeof"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/asyncToGenerator"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/createClass"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime-corejs3/helpers/defineProperty"));

var _ethers = require("ethers");

var _events = _interopRequireDefault(require("events"));

var _ParseObject = _interopRequireDefault(require("./ParseObject"));

var _ParseQuery = _interopRequireDefault(require("./ParseQuery"));

var _ParseUser = _interopRequireDefault(require("./ParseUser"));

var _ParseACL = _interopRequireDefault(require("./ParseACL"));

var _MoralisErd = _interopRequireDefault(require("./MoralisErd"));

var _MoralisDot = _interopRequireDefault(require("./MoralisDot"));

var _MoralisSol = _interopRequireDefault(require("./MoralisSol"));

var _TransferUtils = _interopRequireDefault(require("./TransferUtils"));

var _Cloud = require("./Cloud");

var _createSigningData = _interopRequireDefault(require("./createSigningData"));

var _WalletConnectWeb3Connector = _interopRequireDefault(require("./Web3Connector/WalletConnectWeb3Connector"));

var _InjectedWeb3Connector = _interopRequireDefault(require("./Web3Connector/InjectedWeb3Connector"));

var _NetworkWeb3Connector = _interopRequireDefault(require("./Web3Connector/NetworkWeb3Connector"));

var _ParseError = _interopRequireDefault(require("./ParseError"));

var _InternalWeb3Provider = _interopRequireWildcard(require("./InternalWeb3Provider"));

var _detectProvider = _interopRequireDefault(require("@metamask/detect-provider"));

var _MagicWeb3Connector = _interopRequireDefault(require("./Web3Connector/MagicWeb3Connector"));

var _Web3AuthConnector = require("./Web3Connector/Web3AuthConnector");

var _context30, _context31, _context32, _context33, _context34, _context35;

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

  if (obj === null || _typeof3(obj) !== "object" && typeof obj !== "function") {
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

function _createForOfIteratorHelper(o, allowArrayLike) {
  var it = typeof _Symbol !== "undefined" && _getIteratorMethod(o) || o["@@iterator"];

  if (!it) {
    if (_Array$isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
      if (it) o = it;
      var i = 0;

      var F = function () {};

      return {
        s: F,
        n: function () {
          if (i >= o.length) return {
            done: true
          };
          return {
            done: false,
            value: o[i++]
          };
        },
        e: function (_e) {
          throw _e;
        },
        f: F
      };
    }

    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  var normalCompletion = true,
      didErr = false,
      err;
  return {
    s: function () {
      it = it.call(o);
    },
    n: function () {
      var step = it.next();
      normalCompletion = step.done;
      return step;
    },
    e: function (_e2) {
      didErr = true;
      err = _e2;
    },
    f: function () {
      try {
        if (!normalCompletion && it.return != null) it.return();
      } finally {
        if (didErr) throw err;
      }
    }
  };
}

function _unsupportedIterableToArray(o, minLen) {
  var _context36;

  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);

  var n = _sliceInstanceProperty(_context36 = Object.prototype.toString.call(o)).call(_context36, 8, -1);

  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return _Array$from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) {
    arr2[i] = arr[i];
  }

  return arr2;
}

var MoralisEmitter = new _events.default();
var WARNING = 'Non ethereum enabled browser';
var ERROR_WEB3_MISSING = 'Missing web3 instance, make sure to call Moralis.enableWeb3() or Moralis.authenticate()';

var MoralisWeb3 = /*#__PURE__*/function () {
  function MoralisWeb3() {
    (0, _classCallCheck2.default)(this, MoralisWeb3);
  }

  (0, _createClass2.default)(MoralisWeb3, null, [{
    key: "addListener",
    value: // Ethers.js instance that will be set after calling enableWeb3
    // Internal web3 provider, containing the Ethers.js Web3 library for internal usage for handling transactions, contracts etc.
    function (eventName, listener) {
      MoralisEmitter.on(eventName, listener);
      return function () {
        return MoralisEmitter.removeListener(eventName, listener);
      };
    }
  }, {
    key: "on",
    value: function (eventName, listener) {
      MoralisEmitter.on(eventName, listener);
      return function () {
        return MoralisEmitter.removeListener(eventName, listener);
      };
    }
  }, {
    key: "once",
    value: function (eventName, listener) {
      MoralisEmitter.once(eventName, listener);
      return function () {
        return MoralisEmitter.removeListener(eventName, listener);
      };
    }
  }, {
    key: "removeListener",
    value: function (eventName, listener) {
      return MoralisEmitter.removeListener(eventName, listener);
    }
  }, {
    key: "off",
    value: function (eventName, listener) {
      return MoralisEmitter.off(eventName, listener);
    }
  }, {
    key: "removeAllListeners",
    value: function (eventName, listener) {
      return MoralisEmitter.removeAllListeners(eventName, listener);
    }
  }, {
    key: "isWeb3Enabled",
    value: function () {
      return this.ensureWeb3IsInstalled();
    }
  }, {
    key: "handleWeb3AccountChanged",
    value: function (account) {
      MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED, account);
    }
  }, {
    key: "handleWeb3ChainChanged",
    value: function (chainId) {
      var _this$internalWeb3Pro;

      this.web3 = (_this$internalWeb3Pro = this.internalWeb3Provider) === null || _this$internalWeb3Pro === void 0 ? void 0 : _this$internalWeb3Pro.web3;
      MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED, chainId);
    }
  }, {
    key: "handleWeb3Connect",
    value: function (connectInfo) {
      MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT, connectInfo);
    }
  }, {
    key: "handleWeb3Disconnect",
    value: function (error) {
      // Do not disconnect when MetaMask is attempting to reconnect
      if ((error === null || error === void 0 ? void 0 : error.message) === 'MetaMask: Disconnected from chain. Attempting to connect.') {
        return;
      }

      this.cleanup();
      MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, error);
    }
  }, {
    key: "enableWeb3",
    value: function () {
      var _enableWeb = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee() {
        var _this = this;

        var options,
            _options$connector,
            Connector,
            connector,
            anyNetwork,
            provider,
            chainId,
            account,
            internalWeb3,
            _yield$this$internalW,
            web3,
            _args = arguments;

        return _regenerator.default.wrap(function (_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                options = _args.length > 0 && _args[0] !== undefined ? _args[0] : {};

                if (!this.isEnablingWeb3) {
                  _context.next = 3;
                  break;
                }

                throw new Error('Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet ');

              case 3:
                _context.prev = 3;
                this.isEnablingWeb3 = true;

                if (this.speedyNodeApiKey) {
                  options.speedyNodeApiKey = this.speedyNodeApiKey;
                  options.provider = 'network';
                }

                Connector = (_options$connector = options === null || options === void 0 ? void 0 : options.connector) !== null && _options$connector !== void 0 ? _options$connector : MoralisWeb3.getWeb3Connector(options === null || options === void 0 ? void 0 : options.provider);
                connector = new Connector(options);
                anyNetwork = (options === null || options === void 0 ? void 0 : options.anyNetwork) === true ? true : false;
                this.internalWeb3Provider = new _InternalWeb3Provider.default(connector, anyNetwork, options.privateKey);
                this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED, function (args) {
                  return _this.handleWeb3AccountChanged(args);
                });
                this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED, function (args) {
                  return _this.handleWeb3ChainChanged(args);
                });
                this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT, function (args) {
                  return _this.handleWeb3Connect(args);
                });
                this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, function (args) {
                  return _this.handleWeb3Disconnect(args);
                });
                _context.prev = 14;
                _context.next = 17;
                return this.internalWeb3Provider.activate(options);

              case 17:
                _yield$this$internalW = _context.sent;
                provider = _yield$this$internalW.provider;
                chainId = _yield$this$internalW.chainId;
                account = _yield$this$internalW.account;
                internalWeb3 = _yield$this$internalW.web3;

                if (provider) {
                  _context.next = 24;
                  break;
                }

                throw new Error('Failed to activate, no provider returned');

              case 24:
                _context.next = 31;
                break;

              case 26:
                _context.prev = 26;
                _context.t0 = _context["catch"](14);
                _context.next = 30;
                return this.cleanup();

              case 30:
                throw _context.t0;

              case 31:
                web3 = internalWeb3;
                this.web3 = internalWeb3;
                MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.WEB3_ENABLED, {
                  chainId: chainId,
                  account: account,
                  connector: connector,
                  provider: provider,
                  web3: web3
                });
                return _context.abrupt("return", web3);

              case 37:
                _context.prev = 37;
                _context.t1 = _context["catch"](3);
                throw _context.t1;

              case 40:
                _context.prev = 40;
                this.isEnablingWeb3 = false;
                return _context.finish(40);

              case 43:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this, [[3, 37, 40, 43], [14, 26]]);
      }));

      return function () {
        return _enableWeb.apply(this, arguments);
      };
    }()
  }, {
    key: "isDotAuth",
    value: function (options) {
      switch (options === null || options === void 0 ? void 0 : options.type) {
        case 'dot':
        case 'polkadot':
        case 'kusama':
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "isElrondAuth",
    value: function (options) {
      switch (options === null || options === void 0 ? void 0 : options.type) {
        case 'erd':
        case 'elrond':
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "isSolAuth",
    value: function (options) {
      switch (options === null || options === void 0 ? void 0 : options.type) {
        case 'sol':
          return true;

        default:
          return false;
      }
    }
  }, {
    key: "getWeb3Connector",
    value: function (provider) {
      switch (provider) {
        case 'walletconnect':
        case 'walletConnect':
        case 'wc':
          return _WalletConnectWeb3Connector.default;

        case 'network':
          return _NetworkWeb3Connector.default;

        case 'magicLink':
          return _MagicWeb3Connector.default;

        case 'web3Auth':
          return _Web3AuthConnector.Web3Auth;

        default:
          return _InjectedWeb3Connector.default;
      }
    }
  }, {
    key: "deactivateWeb3",
    value: function () {
      var _deactivateWeb = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee2() {
        return _regenerator.default.wrap(function (_context2) {
          while (1) {
            switch (_context2.prev = _context2.next) {
              case 0:
                return _context2.abrupt("return", this.cleanup());

              case 1:
              case "end":
                return _context2.stop();
            }
          }
        }, _callee2, this);
      }));

      return function () {
        return _deactivateWeb.apply(this, arguments);
      };
    }()
    /**
     * Cleanup previously established provider
     */

  }, {
    key: "cleanup",
    value: function () {
      var _cleanup = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee3() {
        return _regenerator.default.wrap(function (_context3) {
          while (1) {
            switch (_context3.prev = _context3.next) {
              case 0:
                if (!this.isEnablingWeb3) {
                  _context3.next = 5;
                  break;
                } // Enabling is aborted before finishing


                this.isEnablingWeb3 = false;
                this.internalWeb3Provider = null;
                this.web3 = null;
                return _context3.abrupt("return");

              case 5:
                if (this.web3 && this.internalWeb3Provider) {
                  MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.WEB3_DEACTIVATED, {
                    connector: this.internalWeb3Provider.connector,
                    provider: this.internalWeb3Provider.provider
                  });
                }

                if (!this.internalWeb3Provider) {
                  _context3.next = 18;
                  break;
                }

                this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED, this.handleWeb3AccountChanged);
                this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED, this.handleWeb3ChainChanged);
                this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT, this.handleWeb3Connect);
                this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, this.handleWeb3Disconnect); // For example, if walletconnect has been enabled, then later on metamask, then wc is not the internalProvider, but still has an active connection

                _context3.prev = 11;
                _context3.next = 14;
                return this.internalWeb3Provider.deactivate();

              case 14:
                _context3.next = 18;
                break;

              case 16:
                _context3.prev = 16;
                _context3.t0 = _context3["catch"](11);

              case 18:
                this.internalWeb3Provider = null;
                this.web3 = null;

              case 20:
              case "end":
                return _context3.stop();
            }
          }
        }, _callee3, this, [[11, 16]]);
      }));

      return function () {
        return _cleanup.apply(this, arguments);
      };
    }()
  }, {
    key: "authenticate",
    value: function () {
      var _authenticate = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee4(options) {
        var isLoggedIn, _this$getInternalWeb, account, internalWeb3, signer, message, data, ethAddress, signature, authData, user;

        return _regenerator.default.wrap(function (_context4) {
          while (1) {
            switch (_context4.prev = _context4.next) {
              case 0:
                _context4.next = 2;
                return _ParseUser.default.currentAsync();

              case 2:
                isLoggedIn = _context4.sent;

                if (!isLoggedIn) {
                  _context4.next = 6;
                  break;
                }

                _context4.next = 6;
                return _ParseUser.default.logOut();

              case 6:
                if (!MoralisWeb3.isDotAuth(options)) {
                  _context4.next = 8;
                  break;
                }

                return _context4.abrupt("return", _MoralisDot.default.authenticate(options));

              case 8:
                if (!MoralisWeb3.isElrondAuth(options)) {
                  _context4.next = 10;
                  break;
                }

                return _context4.abrupt("return", _MoralisErd.default.authenticate(options));

              case 10:
                if (!MoralisWeb3.isSolAuth(options)) {
                  _context4.next = 12;
                  break;
                }

                return _context4.abrupt("return", _MoralisSol.default.authenticate(options));

              case 12:
                _context4.next = 14;
                return this.enableWeb3(options);

              case 14:
                _this$getInternalWeb = this.getInternalWeb3Provider(), account = _this$getInternalWeb.account, internalWeb3 = _this$getInternalWeb.web3, signer = _this$getInternalWeb.signer;

                if (account) {
                  _context4.next = 17;
                  break;
                }

                throw new Error('Cannot authenticate, no account returned from provider');

              case 17:
                message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
                _context4.next = 20;
                return (0, _createSigningData.default)(message);

              case 20:
                data = _context4.sent;
                ethAddress = account.toLowerCase();

                if (ethAddress) {
                  _context4.next = 24;
                  break;
                }

                throw new Error('Address not found');

              case 24:
                _context4.next = 26;
                return signer.signMessage(data);

              case 26:
                signature = _context4.sent;

                if (signature) {
                  _context4.next = 29;
                  break;
                }

                throw new Error('Data not signed');

              case 29:
                authData = {
                  id: ethAddress,
                  signature: signature,
                  data: data
                };
                _context4.next = 32;
                return _ParseUser.default.logInWith('moralisEth', {
                  authData: authData
                });

              case 32:
                user = _context4.sent;

                if (user) {
                  _context4.next = 35;
                  break;
                }

                throw new Error('Could not get user');

              case 35:
                _context4.next = 37;
                return user.setACL(new _ParseACL.default(user));

              case 37:
                user.addAllUnique('accounts', [ethAddress]);
                user.set('ethAddress', ethAddress);
                _context4.next = 41;
                return user.save(null, options);

              case 41:
                return _context4.abrupt("return", user);

              case 42:
              case "end":
                return _context4.stop();
            }
          }
        }, _callee4, this);
      }));

      return function () {
        return _authenticate.apply(this, arguments);
      };
    }()
  }, {
    key: "link",
    value: function () {
      var _link = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee5(account, options) {
        var _this$getInternalWeb2, signer, message, user, ethAddress, EthAddress, query, ethAddressRecord, data, signature, authData;

        return _regenerator.default.wrap(function (_context5) {
          while (1) {
            switch (_context5.prev = _context5.next) {
              case 0:
                _this$getInternalWeb2 = this.getInternalWeb3Provider(), signer = _this$getInternalWeb2.signer;
                message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
                _context5.next = 4;
                return _ParseUser.default.currentAsync();

              case 4:
                user = _context5.sent;
                ethAddress = account.toLowerCase();
                EthAddress = _ParseObject.default.extend('_EthAddress');
                query = new _ParseQuery.default(EthAddress);
                _context5.next = 10;
                return query.get(ethAddress).catch(function () {
                  return null;
                });

              case 10:
                ethAddressRecord = _context5.sent;

                if (ethAddressRecord) {
                  _context5.next = 23;
                  break;
                }

                _context5.next = 14;
                return (0, _createSigningData.default)(message);

              case 14:
                data = _context5.sent;
                _context5.next = 17;
                return signer.signMessage(data);

              case 17:
                signature = _context5.sent;

                if (signature) {
                  _context5.next = 20;
                  break;
                }

                throw new Error('Data not signed');

              case 20:
                authData = {
                  id: ethAddress,
                  signature: signature,
                  data: data
                };
                _context5.next = 23;
                return user.linkWith('moralisEth', {
                  authData: authData
                });

              case 23:
                user.addAllUnique('accounts', [ethAddress]);
                user.set('ethAddress', ethAddress);
                _context5.next = 27;
                return user.save(null, options);

              case 27:
                return _context5.abrupt("return", user);

              case 28:
              case "end":
                return _context5.stop();
            }
          }
        }, _callee5, this);
      }));

      return function () {
        return _link.apply(this, arguments);
      };
    }()
  }, {
    key: "unlink",
    value: function () {
      var _unlink = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee6(account) {
        var _user$get;

        var accountsLower, EthAddress, query, ethAddressRecord, user, accounts, nextAccounts;
        return _regenerator.default.wrap(function (_context6) {
          while (1) {
            switch (_context6.prev = _context6.next) {
              case 0:
                accountsLower = account.toLowerCase();
                EthAddress = _ParseObject.default.extend('_EthAddress');
                query = new _ParseQuery.default(EthAddress);
                _context6.next = 5;
                return query.get(accountsLower);

              case 5:
                ethAddressRecord = _context6.sent;
                _context6.next = 8;
                return ethAddressRecord.destroy();

              case 8:
                _context6.next = 10;
                return _ParseUser.default.currentAsync();

              case 10:
                user = _context6.sent;
                accounts = (_user$get = user.get('accounts')) !== null && _user$get !== void 0 ? _user$get : [];
                nextAccounts = (0, _filter.default)(accounts).call(accounts, function (v) {
                  return v !== accountsLower;
                });
                user.set('accounts', nextAccounts);
                user.set('ethAddress', nextAccounts[0]);
                _context6.next = 17;
                return user._unlinkFrom('moralisEth');

              case 17:
                _context6.next = 19;
                return user.save();

              case 19:
                return _context6.abrupt("return", user);

              case 20:
              case "end":
                return _context6.stop();
            }
          }
        }, _callee6);
      }));

      return function () {
        return _unlink.apply(this, arguments);
      };
    }()
  }, {
    key: "initPlugins",
    value: function () {
      var _initPlugins = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee8(installedPlugins) {
        var _this2 = this;

        var specs, allPlugins;
        return _regenerator.default.wrap(function (_context10) {
          while (1) {
            switch (_context10.prev = _context10.next) {
              case 0:
                _context10.t0 = installedPlugins;

                if (_context10.t0) {
                  _context10.next = 5;
                  break;
                }

                _context10.next = 4;
                return (0, _Cloud.run)('getPluginSpecs');

              case 4:
                _context10.t0 = _context10.sent;

              case 5:
                specs = _context10.t0;
                if (!this.Plugins) this.Plugins = {};

                if (specs) {
                  _context10.next = 9;
                  break;
                }

                return _context10.abrupt("return");

              case 9:
                allPlugins = this.Plugins;
                (0, _forEach.default)(specs).call(specs, function (plugin) {
                  var _context7;

                  allPlugins[plugin.name] = {};
                  (0, _forEach.default)(_context7 = plugin.functions).call(_context7, function (f) {
                    allPlugins[plugin.name][f] = /*#__PURE__*/function () {
                      var _ref = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee7(params, options) {
                        var _context8;

                        var response, error, triggerReturn;
                        return _regenerator.default.wrap(function (_context9) {
                          while (1) {
                            switch (_context9.prev = _context9.next) {
                              case 0:
                                if (!options) options = {};
                                _context9.next = 3;
                                return (0, _Cloud.run)((0, _concat.default)(_context8 = "".concat(plugin.name, "_")).call(_context8, f), params);

                              case 3:
                                response = _context9.sent;

                                if (response.data.success) {
                                  _context9.next = 7;
                                  break;
                                }

                                error = (0, _stringify.default)(response.data.data, null, 2);
                                throw new Error("Something went wrong\n".concat(error));

                              case 7:
                                if (!(options.disableTriggers !== true)) {
                                  _context9.next = 13;
                                  break;
                                }

                                _context9.next = 10;
                                return _this2.handleTriggers(response.data.result.triggers, response.data.result.data);

                              case 10:
                                triggerReturn = _context9.sent;

                                if (!triggerReturn) {
                                  _context9.next = 13;
                                  break;
                                }

                                return _context9.abrupt("return", triggerReturn);

                              case 13:
                                return _context9.abrupt("return", response.data.result);

                              case 14:
                              case "end":
                                return _context9.stop();
                            }
                          }
                        }, _callee7);
                      }));

                      return function () {
                        return _ref.apply(this, arguments);
                      };
                    }();
                  });
                });
                this.Plugins = allPlugins;

              case 12:
              case "end":
                return _context10.stop();
            }
          }
        }, _callee8, this);
      }));

      return function () {
        return _initPlugins.apply(this, arguments);
      };
    }()
  }, {
    key: "handleTriggers",
    value: function () {
      var _handleTriggers = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee9(triggersArray, payload) {
        var _this3 = this;

        var _loop, i, _ret;

        return _regenerator.default.wrap(function (_context14) {
          while (1) {
            switch (_context14.prev = _context14.next) {
              case 0:
                if (triggersArray) {
                  _context14.next = 2;
                  break;
                }

                return _context14.abrupt("return");

              case 2:
                _loop = /*#__PURE__*/_regenerator.default.mark(function _loop(i) {
                  var _triggersArray$i, _triggersArray$i$data, _triggersArray$i2, _triggersArray$i2$dat, _triggersArray$i$data2, _triggersArray$i3, _triggersArray$i3$dat, _triggersArray$i4, _triggersArray$i4$dat, _triggersArray$i5, _triggersArray$i6, _triggersArray$i7, _triggersArray$i8, _triggersArray$i9, _triggersArray$i10, _triggersArray$i11, _triggersArray$i12, _triggersArray$i13, _triggersArray$i14, _triggersArray$i15, _triggersArray$i16, _triggersArray$i17, _triggersArray$i18, _triggersArray$i20, _triggersArray$i22, _triggersArray$i23, _triggersArray$i24;

                  var message, _response, _context11, _context12, _triggersArray$i19, _JSON$parse, domain, types, _message, signature, result, _JSON$parse2, _domain, _types, _message2;

                  return _regenerator.default.wrap(function (_context13) {
                    while (1) {
                      switch (_context13.prev = _context13.next) {
                        case 0:
                          _context13.t0 = triggersArray[i].name;
                          _context13.next = _context13.t0 === 'openUrl' ? 3 : _context13.t0 === 'web3Transaction' ? 5 : _context13.t0 === 'web3Sign' ? 18 : _context13.t0 === 'callPluginEndpoint' ? 33 : _context13.t0 === 'web3SignV4' ? 55 : 80;
                          break;

                        case 3:
                          if (triggersArray[i].newTab) window.open(triggersArray[i].url);else window.open(triggersArray[i].url, '_self');
                          return _context13.abrupt("break", 81);

                        case 5:
                          _context13.next = 7;
                          return _this3.getInternalWeb3Provider().signer.sendTransaction({
                            from: (_triggersArray$i = triggersArray[i]) === null || _triggersArray$i === void 0 ? void 0 : (_triggersArray$i$data = _triggersArray$i.data) === null || _triggersArray$i$data === void 0 ? void 0 : _triggersArray$i$data.from,
                            to: (_triggersArray$i2 = triggersArray[i]) === null || _triggersArray$i2 === void 0 ? void 0 : (_triggersArray$i2$dat = _triggersArray$i2.data) === null || _triggersArray$i2$dat === void 0 ? void 0 : _triggersArray$i2$dat.to,
                            value: _ethers.ethers.BigNumber.from((_triggersArray$i$data2 = (_triggersArray$i3 = triggersArray[i]) === null || _triggersArray$i3 === void 0 ? void 0 : (_triggersArray$i3$dat = _triggersArray$i3.data) === null || _triggersArray$i3$dat === void 0 ? void 0 : _triggersArray$i3$dat.value) !== null && _triggersArray$i$data2 !== void 0 ? _triggersArray$i$data2 : 0),
                            data: (_triggersArray$i4 = triggersArray[i]) === null || _triggersArray$i4 === void 0 ? void 0 : (_triggersArray$i4$dat = _triggersArray$i4.data) === null || _triggersArray$i4$dat === void 0 ? void 0 : _triggersArray$i4$dat.data
                          });

                        case 7:
                          _response = _context13.sent;

                          if (!(((_triggersArray$i5 = triggersArray[i]) === null || _triggersArray$i5 === void 0 ? void 0 : _triggersArray$i5.shouldAwait) === true)) {
                            _context13.next = 12;
                            break;
                          }

                          _context13.next = 11;
                          return _response.wait();

                        case 11:
                          _response = _context13.sent;

                        case 12:
                          // Save the response returned by the web3 trasanction
                          if (((_triggersArray$i6 = triggersArray[i]) === null || _triggersArray$i6 === void 0 ? void 0 : _triggersArray$i6.saveResponse) === true) _this3.memoryCard.save(_response); // Return payload and response

                          if (!(((_triggersArray$i7 = triggersArray[i]) === null || _triggersArray$i7 === void 0 ? void 0 : _triggersArray$i7.shouldReturnPayload) === true)) {
                            _context13.next = 15;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: {
                              payload: payload,
                              response: _response
                            }
                          });

                        case 15:
                          if (!(((_triggersArray$i8 = triggersArray[i]) === null || _triggersArray$i8 === void 0 ? void 0 : _triggersArray$i8.shouldReturnResponse) === true)) {
                            _context13.next = 17;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: _response
                          });

                        case 17:
                          return _context13.abrupt("break", 81);

                        case 18:
                          if (triggersArray[i].message) {
                            _context13.next = 20;
                            break;
                          }

                          throw new Error('web3Sign trigger does not have a message to sign');

                        case 20:
                          if (triggersArray[i].signer) {
                            _context13.next = 22;
                            break;
                          }

                          throw new Error('web3Sign trigger signer address missing or invalid');

                        case 22:
                          // eslint-disable-next-line no-case-declarations
                          message = JSON.parse(triggersArray[i].message);
                          delete message.types.EIP712Domain; // eslint-disable-next-line no-case-declarations

                          _context13.next = 26;
                          return _this3.getInternalWeb3Provider().signer._signTypedData(message.domain, message.types, message.message);

                        case 26:
                          _response = _context13.sent; // Save response

                          if (((_triggersArray$i9 = triggersArray[i]) === null || _triggersArray$i9 === void 0 ? void 0 : _triggersArray$i9.saveResponse) === true) _this3.memoryCard.save(_response); // Return payload and response

                          if (!(((_triggersArray$i10 = triggersArray[i]) === null || _triggersArray$i10 === void 0 ? void 0 : _triggersArray$i10.shouldReturnPayload) === true)) {
                            _context13.next = 30;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: {
                              payload: payload,
                              response: _response
                            }
                          });

                        case 30:
                          if (!(((_triggersArray$i11 = triggersArray[i]) === null || _triggersArray$i11 === void 0 ? void 0 : _triggersArray$i11.shouldReturnResponse) === true)) {
                            _context13.next = 32;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: _response
                          });

                        case 32:
                          return _context13.abrupt("break", 81);

                        case 33:
                          if (triggersArray[i].pluginName) {
                            _context13.next = 35;
                            break;
                          }

                          throw new Error('callPluginEndpoint trigger does not have an plugin name to call');

                        case 35:
                          if (triggersArray[i].endpoint) {
                            _context13.next = 37;
                            break;
                          }

                          throw new Error('callPluginEndpoint trigger does not have an endpoint to call');

                        case 37:
                          if (!(((_triggersArray$i12 = triggersArray[i]) === null || _triggersArray$i12 === void 0 ? void 0 : _triggersArray$i12.shouldAwait) === true)) {
                            _context13.next = 42;
                            break;
                          } // Check if a saved response has to be used to fill a parameter needed by the plugin


                          if (triggersArray[i].useSavedResponse === true) {
                            triggersArray[i].params[triggersArray[i].savedResponseAs] = _this3.memoryCard.get(triggersArray[i].savedResponseAt);
                          } // Call the endpoint


                          _context13.next = 41;
                          return (0, _Cloud.run)((0, _concat.default)(_context11 = "".concat(triggersArray[i].pluginName, "_")).call(_context11, triggersArray[i].endpoint), triggersArray[i].params);

                        case 41:
                          _response = _context13.sent;

                        case 42:
                          // Call a plugin endpoint (does NOT await)
                          if (((_triggersArray$i13 = triggersArray[i]) === null || _triggersArray$i13 === void 0 ? void 0 : _triggersArray$i13.shouldAwait) === false) {
                            // Check if a saved response has to be used to fill a parameter needed by the plugin
                            if (triggersArray[i].useSavedResponse === true) {
                              triggersArray[i].params[triggersArray[i].savedResponseAs] = _this3.memoryCard.get(triggersArray[i].savedResponseAt);
                            } // Call the endpoint


                            _response = (0, _Cloud.run)((0, _concat.default)(_context12 = "".concat(triggersArray[i].pluginName, "_")).call(_context12, triggersArray[i].endpoint), triggersArray[i].params);
                          } // If the response contains a trigger, run it


                          if (!(triggersArray[i].runResponseTrigger === true)) {
                            _context13.next = 47;
                            break;
                          }

                          _context13.next = 46;
                          return _this3.handleTriggers(_response.data.result.triggers, _response.data.result.data);

                        case 46:
                          _response = _context13.sent;

                        case 47:
                          // Save response
                          if (((_triggersArray$i14 = triggersArray[i]) === null || _triggersArray$i14 === void 0 ? void 0 : _triggersArray$i14.saveResponse) === true) _this3.memoryCard.save(_response); // If should not run the response trigger, continues the loop and does not return (to avoid breaking the loop execution and run other pending triggers)

                          if (!(((_triggersArray$i15 = triggersArray[i]) === null || _triggersArray$i15 === void 0 ? void 0 : _triggersArray$i15.runResponseTrigger) === false)) {
                            _context13.next = 50;
                            break;
                          }

                          return _context13.abrupt("return", "continue");

                        case 50:
                          if (!(((_triggersArray$i16 = triggersArray[i]) === null || _triggersArray$i16 === void 0 ? void 0 : _triggersArray$i16.shouldReturnPayload) === true)) {
                            _context13.next = 52;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: {
                              payload: 'payload',
                              response: _response
                            }
                          });

                        case 52:
                          if (!(((_triggersArray$i17 = triggersArray[i]) === null || _triggersArray$i17 === void 0 ? void 0 : _triggersArray$i17.shouldReturnResponse) === true)) {
                            _context13.next = 54;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: _response
                          });

                        case 54:
                          return _context13.abrupt("break", 81);

                        case 55:
                          if (triggersArray[i].parameters) {
                            _context13.next = 57;
                            break;
                          }

                          throw new Error('web3SignV4 trigger does not have `parameters` to sign');

                        case 57:
                          if (triggersArray[i].from) {
                            _context13.next = 59;
                            break;
                          }

                          throw new Error('web3SignV4 trigger does not have a `from` address');

                        case 59:
                          if (!(((_triggersArray$i18 = triggersArray[i]) === null || _triggersArray$i18 === void 0 ? void 0 : _triggersArray$i18.shouldAwait) === true)) {
                            _context13.next = 74;
                            break;
                          }

                          _context13.prev = 60;
                          _JSON$parse = JSON.parse(triggersArray[i].parameters[1]), domain = _JSON$parse.domain, types = _JSON$parse.types, _message = _JSON$parse.message;

                          if (types.EIP712Domain) {
                            // Ethers.js will compute this automatically
                            delete types.EIP712Domain;
                          }

                          _context13.next = 65;
                          return _this3.getInternalWeb3Provider().signer._signTypedData(domain, types, _message);

                        case 65:
                          signature = _context13.sent;
                          result = {
                            result: signature
                          };
                          if (((_triggersArray$i19 = triggersArray[i]) === null || _triggersArray$i19 === void 0 ? void 0 : _triggersArray$i19.saveResponse) === true) _this3.memoryCard.save(result);
                          _response = result;
                          _context13.next = 74;
                          break;

                        case 71:
                          _context13.prev = 71;
                          _context13.t1 = _context13["catch"](60);
                          throw new Error(_context13.t1.message || _context13.t1);

                        case 74:
                          if (((_triggersArray$i20 = triggersArray[i]) === null || _triggersArray$i20 === void 0 ? void 0 : _triggersArray$i20.shouldAwait) === false) {
                            _JSON$parse2 = JSON.parse(triggersArray[i].parameters[1]), _domain = _JSON$parse2.domain, _types = _JSON$parse2.types, _message2 = _JSON$parse2.message;

                            if (_types.EIP712Domain) {
                              // Ethers.js will compute this automatically
                              delete _types.EIP712Domain;
                            }

                            _this3.getInternalWeb3Provider().signer._signTypedData(_domain, _types, _message2) // eslint-disable-next-line no-loop-func
                            .then(function (signature) {
                              var _triggersArray$i21;

                              var result = {
                                result: signature
                              };
                              if (((_triggersArray$i21 = triggersArray[i]) === null || _triggersArray$i21 === void 0 ? void 0 : _triggersArray$i21.saveResponse) === true) _this3.memoryCard.save(result);
                              _response = result;
                            }).catch(function (error) {
                              throw new Error(error.message || error);
                            });
                          } // Return payload and response


                          if (!(((_triggersArray$i22 = triggersArray[i]) === null || _triggersArray$i22 === void 0 ? void 0 : _triggersArray$i22.shouldReturnPayload) === true)) {
                            _context13.next = 77;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: {
                              payload: payload,
                              response: _response
                            }
                          });

                        case 77:
                          if (!(((_triggersArray$i23 = triggersArray[i]) === null || _triggersArray$i23 === void 0 ? void 0 : _triggersArray$i23.shouldReturnResponse) === true)) {
                            _context13.next = 79;
                            break;
                          }

                          return _context13.abrupt("return", {
                            v: _response
                          });

                        case 79:
                          return _context13.abrupt("break", 81);

                        case 80:
                          throw new Error("Unknown trigger: \"".concat((_triggersArray$i24 = triggersArray[i]) === null || _triggersArray$i24 === void 0 ? void 0 : _triggersArray$i24.name, "\""));

                        case 81:
                        case "end":
                          return _context13.stop();
                      }
                    }
                  }, _loop, null, [[60, 71]]);
                });
                i = 0;

              case 4:
                if (!(i < triggersArray.length)) {
                  _context14.next = 14;
                  break;
                }

                return _context14.delegateYield(_loop(i), "t0", 6);

              case 6:
                _ret = _context14.t0;

                if (!(_ret === "continue")) {
                  _context14.next = 9;
                  break;
                }

                return _context14.abrupt("continue", 11);

              case 9:
                if (!((0, _typeof2.default)(_ret) === "object")) {
                  _context14.next = 11;
                  break;
                }

                return _context14.abrupt("return", _ret.v);

              case 11:
                i++;
                _context14.next = 4;
                break;

              case 14:
                // Delete all saved data
                this.memoryCard.deleteSaved();

              case 15:
              case "end":
                return _context14.stop();
            }
          }
        }, _callee9, this);
      }));

      return function () {
        return _handleTriggers.apply(this, arguments);
      };
    }()
  }, {
    key: "getAllERC20",
    value: function () {
      var _getAllERC = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee10() {
        var _ref2,
            chain,
            address,
            result,
            _args11 = arguments;

        return _regenerator.default.wrap(function (_context15) {
          while (1) {
            switch (_context15.prev = _context15.next) {
              case 0:
                _ref2 = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {}, chain = _ref2.chain, address = _ref2.address;
                _context15.next = 3;
                return (0, _Cloud.run)('getAllERC20', {
                  chain: chain,
                  address: address
                });

              case 3:
                result = _context15.sent;
                return _context15.abrupt("return", result);

              case 5:
              case "end":
                return _context15.stop();
            }
          }
        }, _callee10);
      }));

      return function () {
        return _getAllERC.apply(this, arguments);
      };
    }()
  }, {
    key: "getERC20",
    value: function () {
      var _getERC = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee11() {
        var _ref3,
            chain,
            address,
            symbol,
            tokenAddress,
            result,
            _args12 = arguments;

        return _regenerator.default.wrap(function (_context16) {
          while (1) {
            switch (_context16.prev = _context16.next) {
              case 0:
                _ref3 = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {}, chain = _ref3.chain, address = _ref3.address, symbol = _ref3.symbol, tokenAddress = _ref3.tokenAddress;
                result = (0, _Cloud.run)('getERC20', {
                  chain: chain,
                  address: address,
                  symbol: symbol,
                  tokenAddress: tokenAddress
                });
                return _context16.abrupt("return", result);

              case 3:
              case "end":
                return _context16.stop();
            }
          }
        }, _callee11);
      }));

      return function () {
        return _getERC.apply(this, arguments);
      };
    }()
  }, {
    key: "getNFTs",
    value: function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$chain = _ref4.chain,
          chain = _ref4$chain === void 0 ? 'Eth' : _ref4$chain,
          _ref4$address = _ref4.address,
          address = _ref4$address === void 0 ? '' : _ref4$address;

      return (0, _Cloud.run)('getNFTs_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getNFTsCount",
    value: function () {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$chain = _ref5.chain,
          chain = _ref5$chain === void 0 ? 'Eth' : _ref5$chain,
          _ref5$address = _ref5.address,
          address = _ref5$address === void 0 ? '' : _ref5$address;

      return (0, _Cloud.run)('getNFTsCount_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getTransactions",
    value: function () {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$chain = _ref6.chain,
          chain = _ref6$chain === void 0 ? 'Eth' : _ref6$chain,
          _ref6$address = _ref6.address,
          address = _ref6$address === void 0 ? '' : _ref6$address,
          _ref6$order = _ref6.order,
          order = _ref6$order === void 0 ? 'desc' : _ref6$order;

      return (0, _Cloud.run)('getTransactions', {
        chain: chain,
        address: address,
        order: order
      });
    }
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _ref7 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref7$chain = _ref7.chain,
          chain = _ref7$chain === void 0 ? 'Eth' : _ref7$chain,
          _ref7$address = _ref7.address,
          address = _ref7$address === void 0 ? '' : _ref7$address;

      return (0, _Cloud.run)('getTransactionsCount', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "transfer",
    value: function () {
      var _transfer = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee12() {
        var _ref8,
            _ref8$type,
            type,
            _ref8$receiver,
            receiver,
            _ref8$contractAddress,
            contractAddress,
            contract_address,
            _ref8$amount,
            amount,
            _ref8$tokenId,
            tokenId,
            token_id,
            _ref8$system,
            system,
            options,
            _this$getInternalWeb3,
            internalWeb3,
            sender,
            signer,
            transferOperation,
            customToken,
            result,
            _args13 = arguments;

        return _regenerator.default.wrap(function (_context17) {
          while (1) {
            switch (_context17.prev = _context17.next) {
              case 0:
                _ref8 = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {}, _ref8$type = _ref8.type, type = _ref8$type === void 0 ? 'native' : _ref8$type, _ref8$receiver = _ref8.receiver, receiver = _ref8$receiver === void 0 ? '' : _ref8$receiver, _ref8$contractAddress = _ref8.contractAddress, contractAddress = _ref8$contractAddress === void 0 ? '' : _ref8$contractAddress, contract_address = _ref8.contract_address, _ref8$amount = _ref8.amount, amount = _ref8$amount === void 0 ? '' : _ref8$amount, _ref8$tokenId = _ref8.tokenId, tokenId = _ref8$tokenId === void 0 ? '' : _ref8$tokenId, token_id = _ref8.token_id, _ref8$system = _ref8.system, system = _ref8$system === void 0 ? 'evm' : _ref8$system; // Allow snake-case for backwards compatibility
                // eslint-disable-next-line camelcase

                contractAddress = contractAddress || contract_address; // eslint-disable-next-line camelcase

                tokenId = tokenId || token_id;
                options = {
                  receiver: receiver,
                  contractAddress: contractAddress,
                  amount: amount,
                  tokenId: tokenId,
                  system: system
                };

                _TransferUtils.default.isSupportedType(type);

                _TransferUtils.default.validateInput(type, options);

                _this$getInternalWeb3 = this.getInternalWeb3Provider(), internalWeb3 = _this$getInternalWeb3.web3, sender = _this$getInternalWeb3.account, signer = _this$getInternalWeb3.signer;

                if (sender) {
                  _context17.next = 9;
                  break;
                }

                throw new Error('Sender address not found');

              case 9:
                if (tokenId) _TransferUtils.default.isUint256(tokenId);

                if (type !== 'native') {
                  customToken = new _ethers.ethers.Contract(contractAddress, _TransferUtils.default.abi[type], signer);
                }

                _context17.t0 = type;
                _context17.next = _context17.t0 === 'native' ? 14 : _context17.t0 === 'erc20' ? 16 : _context17.t0 === 'erc721' ? 18 : _context17.t0 === 'erc1155' ? 20 : 22;
                break;

              case 14:
                transferOperation = signer.sendTransaction({
                  to: receiver,
                  value: _ethers.ethers.BigNumber.from(amount)
                });
                return _context17.abrupt("break", 23);

              case 16:
                transferOperation = customToken.transfer(receiver, amount, {
                  from: sender
                });
                return _context17.abrupt("break", 23);

              case 18:
                transferOperation = customToken.safeTransferFrom(sender, receiver, "".concat(tokenId), {
                  from: sender
                });
                return _context17.abrupt("break", 23);

              case 20:
                transferOperation = customToken.safeTransferFrom(sender, receiver, "".concat(tokenId), amount, '0x', {
                  from: sender
                });
                return _context17.abrupt("break", 23);

              case 22:
                throw new Error("Unknown transfer type: \"".concat(type, "\""));

              case 23:
                _context17.next = 25;
                return transferOperation;

              case 25:
                result = _context17.sent;
                return _context17.abrupt("return", result);

              case 27:
              case "end":
                return _context17.stop();
            }
          }
        }, _callee12, this);
      }));

      return function () {
        return _transfer.apply(this, arguments);
      };
    }()
  }, {
    key: "executeFunction",
    value: function () {
      var _executeFunction = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee13() {
        var _functionData, _context25, _context26;

        var _ref9,
            contractAddress,
            abi,
            functionName,
            msgValue,
            _ref9$params,
            params,
            _ref9$overrides,
            overrides,
            contractOptions,
            _this$getInternalWeb4,
            account,
            internalWeb3,
            provider,
            signerOrProvider,
            overloadedFunction,
            functionData,
            _context18,
            _context19,
            nameWithoutTopics,
            topics,
            functionDataArray,
            possibleTopics,
            _functionDataArray,
            _possibleTopics,
            stateMutability,
            isReadFunction,
            currentAddress,
            errors,
            _iterator,
            _step,
            input,
            value,
            parsedInputs,
            contract,
            contractMethod,
            response,
            _args14 = arguments;

        return _regenerator.default.wrap(function (_context27) {
          while (1) {
            switch (_context27.prev = _context27.next) {
              case 0:
                _ref9 = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {}, contractAddress = _ref9.contractAddress, abi = _ref9.abi, functionName = _ref9.functionName, msgValue = _ref9.msgValue, _ref9$params = _ref9.params, params = _ref9$params === void 0 ? {} : _ref9$params, _ref9$overrides = _ref9.overrides, overrides = _ref9$overrides === void 0 ? {} : _ref9$overrides;
                contractOptions = {};
                _this$getInternalWeb4 = this.getInternalWeb3Provider(), account = _this$getInternalWeb4.account, internalWeb3 = _this$getInternalWeb4.web3, provider = _this$getInternalWeb4.provider, signerOrProvider = _this$getInternalWeb4.signerOrProvider; // Check if function is an overloaded function definition. ex "getMessage(string)", or "getMessage()"

                overloadedFunction = functionName.match(/^(.+)\((.*)\)$/);

                if (!overloadedFunction) {
                  _context27.next = 16;
                  break;
                } // Get functiondata from overloaded function


                nameWithoutTopics = overloadedFunction[1];
                topics = (0, _filter.default)(_context18 = (0, _map.default)(_context19 = overloadedFunction[2].split(',')).call(_context19, function (topic) {
                  return (0, _trim.default)(topic).call(topic);
                })).call(_context18, function (topic) {
                  return !!topic;
                });
                functionDataArray = (0, _filter.default)(abi).call(abi, function (x) {
                  return x.name === nameWithoutTopics;
                });

                if (!(functionDataArray.length === 0)) {
                  _context27.next = 10;
                  break;
                }

                throw new Error('Function does not exist in abi');

              case 10:
                functionData = (0, _find.default)(functionDataArray).call(functionDataArray, function (data) {
                  var _data$inputs$length, _context20;

                  return ((_data$inputs$length = data === null || data === void 0 ? void 0 : data.inputs.length) !== null && _data$inputs$length !== void 0 ? _data$inputs$length : 0) === topics.length && (0, _every.default)(_context20 = data.inputs).call(_context20, function (input, index) {
                    return input.type === topics[index];
                  });
                });

                if (functionData) {
                  _context27.next = 14;
                  break;
                }

                possibleTopics = (0, _map.default)(functionDataArray).call(functionDataArray, function (data) {
                  var _context21, _context22;

                  return (0, _concat.default)(_context21 = "".concat(data.name, "(")).call(_context21, (0, _map.default)(_context22 = data.inputs).call(_context22, function (input) {
                    return input.type;
                  }).join(','), ")");
                });
                throw new Error("Function with the provided topic does not exist in abi. Possible funcationNames: ".concat(possibleTopics.join(' ,')));

              case 14:
                _context27.next = 23;
                break;

              case 16:
                // Get functiondata from 'normal' function
                _functionDataArray = (0, _filter.default)(abi).call(abi, function (x) {
                  return x.name === functionName;
                });

                if (!(_functionDataArray.length === 0)) {
                  _context27.next = 19;
                  break;
                }

                throw new Error('Function does not exist in abi');

              case 19:
                if (!(_functionDataArray.length > 1)) {
                  _context27.next = 22;
                  break;
                }

                _possibleTopics = (0, _map.default)(_functionDataArray).call(_functionDataArray, function (data) {
                  var _context23, _context24;

                  return (0, _concat.default)(_context23 = "".concat(data.name, "(")).call(_context23, (0, _map.default)(_context24 = data.inputs).call(_context24, function (input) {
                    return input.type;
                  }).join(','), ")");
                });
                throw new Error("Multiple function definitions found in the abi. Please include the topic in the functionName. Possible funcationNames: ".concat(_possibleTopics.join(' ,')));

              case 22:
                functionData = _functionDataArray[0];

              case 23:
                stateMutability = (_functionData = functionData) === null || _functionData === void 0 ? void 0 : _functionData.stateMutability;
                isReadFunction = stateMutability === 'view' || stateMutability === 'pure';

                if (isReadFunction) {
                  _context27.next = 31;
                  break;
                }

                if (params.from) {
                  _context27.next = 31;
                  break;
                }

                currentAddress = account;

                if (currentAddress) {
                  _context27.next = 30;
                  break;
                }

                throw new Error('From address is required');

              case 30:
                contractOptions.from = currentAddress;

              case 31:
                errors = [];
                _iterator = _createForOfIteratorHelper(functionData.inputs);

                try {
                  for (_iterator.s(); !(_step = _iterator.n()).done;) {
                    input = _step.value;
                    value = params[input.name];

                    if (!value && typeof value !== 'number' && typeof value !== 'boolean' && input.name !== '') {
                      errors.push("".concat(input.name, " is required"));
                    }
                  }
                } catch (err) {
                  _iterator.e(err);
                } finally {
                  _iterator.f();
                }

                if (!(errors.length > 0)) {
                  _context27.next = 36;
                  break;
                }

                throw errors;

              case 36:
                parsedInputs = (0, _map.default)(_context25 = functionData.inputs).call(_context25, function (x) {
                  return params[x.name];
                });
                contract = new _ethers.ethers.Contract(contractAddress, abi, signerOrProvider);
                contractMethod = contract[functionName];

                if (contractMethod) {
                  _context27.next = 41;
                  break;
                }

                throw new Error("Cannot find function \"".concat(functionName, "\" on the contract"));

              case 41:
                _context27.next = 43;
                return contractMethod.apply(void 0, (0, _concat.default)(_context26 = (0, _toConsumableArray2.default)((0, _values.default)(parsedInputs))).call(_context26, [msgValue ? {
                  value: _ethers.ethers.BigNumber.from("".concat(msgValue))
                } : {}]));

              case 43:
                response = _context27.sent;
                return _context27.abrupt("return", response);

              case 45:
              case "end":
                return _context27.stop();
            }
          }
        }, _callee13, this);
      }));

      return function () {
        return _executeFunction.apply(this, arguments);
      };
    }()
  }, {
    key: "getSigningData",
    value: function () {
      return "Moralis Authentication";
    }
  }, {
    key: "ensureWeb3IsInstalled",
    value: function () {
      return this.internalWeb3Provider && this.internalWeb3Provider.web3 ? true : false;
    }
    /**
     * Gets the internalWeb3Provider with validation to make sure it has been instansiated with 'enableWeb3()'
     */

  }, {
    key: "getInternalWeb3Provider",
    value: function () {
      if (!this.ensureWeb3IsInstalled()) throw new Error(ERROR_WEB3_MISSING);
      return this.internalWeb3Provider;
    }
    /**
     * Gets web3 from the internalWeb3Provider with validation to make sure it has been instansiated with 'enableWeb3()'
     */

  }, {
    key: "getInternalWeb3",
    value: function () {
      return this.getInternalWeb3Provider().web3;
    }
  }, {
    key: "provider",
    get: function () {
      var _this$internalWeb3Pro2, _this$internalWeb3Pro3;

      return (_this$internalWeb3Pro2 = (_this$internalWeb3Pro3 = this.internalWeb3Provider) === null || _this$internalWeb3Pro3 === void 0 ? void 0 : _this$internalWeb3Pro3.provider) !== null && _this$internalWeb3Pro2 !== void 0 ? _this$internalWeb3Pro2 : null;
    }
  }, {
    key: "connector",
    get: function () {
      var _this$internalWeb3Pro4, _this$internalWeb3Pro5;

      return (_this$internalWeb3Pro4 = (_this$internalWeb3Pro5 = this.internalWeb3Provider) === null || _this$internalWeb3Pro5 === void 0 ? void 0 : _this$internalWeb3Pro5.connector) !== null && _this$internalWeb3Pro4 !== void 0 ? _this$internalWeb3Pro4 : null;
    }
  }, {
    key: "connectorType",
    get: function () {
      var _this$connector$type, _this$connector;

      return (_this$connector$type = (_this$connector = this.connector) === null || _this$connector === void 0 ? void 0 : _this$connector.type) !== null && _this$connector$type !== void 0 ? _this$connector$type : null;
    }
  }, {
    key: "network",
    get: function () {
      var _this$connector$netwo, _this$connector2;

      return (_this$connector$netwo = (_this$connector2 = this.connector) === null || _this$connector2 === void 0 ? void 0 : _this$connector2.network) !== null && _this$connector$netwo !== void 0 ? _this$connector$netwo : null;
    }
  }, {
    key: "account",
    get: function () {
      var _this$internalWeb3Pro6, _this$internalWeb3Pro7;

      return (_this$internalWeb3Pro6 = (_this$internalWeb3Pro7 = this.internalWeb3Provider) === null || _this$internalWeb3Pro7 === void 0 ? void 0 : _this$internalWeb3Pro7.account) !== null && _this$internalWeb3Pro6 !== void 0 ? _this$internalWeb3Pro6 : null;
    }
  }, {
    key: "chainId",
    get: function () {
      var _this$internalWeb3Pro8, _this$internalWeb3Pro9;

      return (_this$internalWeb3Pro8 = (_this$internalWeb3Pro9 = this.internalWeb3Provider) === null || _this$internalWeb3Pro9 === void 0 ? void 0 : _this$internalWeb3Pro9.chainId) !== null && _this$internalWeb3Pro8 !== void 0 ? _this$internalWeb3Pro8 : null;
    }
  }, {
    key: "getChainId",
    value: function () {
      return this.chainId;
    }
  }, {
    key: "web3Library",
    get: function () {
      return _ethers.ethers;
    }
  }, {
    key: "_forwardToConnector",
    value: function (methodName, args) {
      var _this$getInternalWeb5 = this.getInternalWeb3Provider(),
          connector = _this$getInternalWeb5.connector;

      var hasMethod = Boolean(connector[methodName]);

      if (!hasMethod) {
        var _context28;

        throw new Error((0, _concat.default)(_context28 = "Cannot call ".concat(methodName, ", as it does not exist on connector type \"")).call(_context28, connector.type, "\""));
      }

      return connector[methodName].apply(connector, (0, _toConsumableArray2.default)(args));
    }
  }, {
    key: "switchNetwork",
    value: function () {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return this._forwardToConnector('switchNetwork', args);
    }
  }, {
    key: "addNetwork",
    value: function () {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }

      return this._forwardToConnector('addNetwork', args);
    }
  }, {
    key: "isMetaMaskInstalled",
    value: function () {
      var _isMetaMaskInstalled = (0, _asyncToGenerator2.default)( /*#__PURE__*/_regenerator.default.mark(function _callee14() {
        return _regenerator.default.wrap(function (_context29) {
          while (1) {
            switch (_context29.prev = _context29.next) {
              case 0:
                _context29.next = 2;
                return (0, _detectProvider.default)();

              case 2:
                if (!_context29.sent) {
                  _context29.next = 6;
                  break;
                }

                _context29.t0 = true;
                _context29.next = 7;
                break;

              case 6:
                _context29.t0 = false;

              case 7:
                return _context29.abrupt("return", _context29.t0);

              case 8:
              case "end":
                return _context29.stop();
            }
          }
        }, _callee14);
      }));

      return function () {
        return _isMetaMaskInstalled.apply(this, arguments);
      };
    }()
  }]);
  return MoralisWeb3;
}();

(0, _defineProperty2.default)(MoralisWeb3, "speedyNodeApiKey", void 0);
(0, _defineProperty2.default)(MoralisWeb3, "web3", null);
(0, _defineProperty2.default)(MoralisWeb3, "internalWeb3Provider", null);
(0, _defineProperty2.default)(MoralisWeb3, "Plugins", {});
(0, _defineProperty2.default)(MoralisWeb3, "isEnablingWeb3", false);
(0, _defineProperty2.default)(MoralisWeb3, "memoryCard", {
  save: function (what) {
    this.saved = what;
  },
  get: function (where) {
    if (!this.saved) throw new Error('Nothing saved to memory card'); // In case the saved data is not an object but a simple string or number

    if (where.length === 0) return this.getSaved();
    var tmp;
    var savedTmp = this.saved;

    for (var i = 0; i < where.length; i++) {
      tmp = savedTmp[where[i]];
      savedTmp = tmp;
    }

    return savedTmp;
  },
  getSaved: function () {
    return this.saved;
  },
  deleteSaved: function () {
    this.saved = undefined;
  }
});
MoralisWeb3.onConnect = (0, _bind.default)(_context30 = MoralisWeb3.on).call(_context30, MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT);
MoralisWeb3.onDisconnect = (0, _bind.default)(_context31 = MoralisWeb3.on).call(_context31, MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT);
MoralisWeb3.onWeb3Enabled = (0, _bind.default)(_context32 = MoralisWeb3.on).call(_context32, MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.WEB3_ENABLED);
MoralisWeb3.onWeb3Deactivated = (0, _bind.default)(_context33 = MoralisWeb3.on).call(_context33, MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.WEB3_DEACTIVATED);
MoralisWeb3.onChainChanged = (0, _bind.default)(_context34 = MoralisWeb3.on).call(_context34, MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED);
MoralisWeb3.onAccountChanged = (0, _bind.default)(_context35 = MoralisWeb3.on).call(_context35, MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED);
var _default = MoralisWeb3;
exports.default = _default;
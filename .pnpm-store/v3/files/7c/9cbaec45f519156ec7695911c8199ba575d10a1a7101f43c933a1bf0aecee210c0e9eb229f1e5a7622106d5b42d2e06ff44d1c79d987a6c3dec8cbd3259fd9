var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

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

function _createForOfIteratorHelperLoose(o, allowArrayLike) {
  var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
  if (it) return (it = it.call(o)).next.bind(it);

  if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
    if (it) o = it;
    var i = 0;
    return function () {
      if (i >= o.length) return {
        done: true
      };
      return {
        done: false,
        value: o[i++]
      };
    };
  }

  throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
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

var MoralisWeb3 = function () {
  function MoralisWeb3() {
    (0, _classCallCheck2.default)(this, MoralisWeb3);
  }

  (0, _createClass2.default)(MoralisWeb3, null, [{
    key: "addListener",
    value: function (eventName, listener) {
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

      this.web3 = (_this$internalWeb3Pro = this.internalWeb3Provider) == null ? void 0 : _this$internalWeb3Pro.web3;
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
      if ((error == null ? void 0 : error.message) === 'MetaMask: Disconnected from chain. Attempting to connect.') {
        return;
      }

      this.cleanup();
      MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, error);
    }
  }, {
    key: "enableWeb3",
    value: function () {
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
          _await$this$internalW,
          web3,
          _args = arguments;

      return _regenerator.default.async(function (_context) {
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

              Connector = (_options$connector = options == null ? void 0 : options.connector) != null ? _options$connector : MoralisWeb3.getWeb3Connector(options == null ? void 0 : options.provider);
              connector = new Connector(options);
              anyNetwork = (options == null ? void 0 : options.anyNetwork) === true ? true : false;
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
              return _regenerator.default.awrap(this.internalWeb3Provider.activate(options));

            case 17:
              _await$this$internalW = _context.sent;
              provider = _await$this$internalW.provider;
              chainId = _await$this$internalW.chainId;
              account = _await$this$internalW.account;
              internalWeb3 = _await$this$internalW.web3;

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
              return _regenerator.default.awrap(this.cleanup());

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
      }, null, this, [[3, 37, 40, 43], [14, 26]], Promise);
    }
  }, {
    key: "isDotAuth",
    value: function (options) {
      switch (options == null ? void 0 : options.type) {
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
      switch (options == null ? void 0 : options.type) {
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
      switch (options == null ? void 0 : options.type) {
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
      return _regenerator.default.async(function (_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              return _context2.abrupt("return", this.cleanup());

            case 1:
            case "end":
              return _context2.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "cleanup",
    value: function () {
      return _regenerator.default.async(function (_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              if (!this.isEnablingWeb3) {
                _context3.next = 5;
                break;
              }

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
              this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, this.handleWeb3Disconnect);
              _context3.prev = 11;
              _context3.next = 14;
              return _regenerator.default.awrap(this.internalWeb3Provider.deactivate());

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
      }, null, this, [[11, 16]], Promise);
    }
  }, {
    key: "authenticate",
    value: function (options) {
      var isLoggedIn, _this$getInternalWeb, account, internalWeb3, signer, message, data, ethAddress, signature, authData, user;

      return _regenerator.default.async(function (_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.next = 2;
              return _regenerator.default.awrap(_ParseUser.default.currentAsync());

            case 2:
              isLoggedIn = _context4.sent;

              if (!isLoggedIn) {
                _context4.next = 6;
                break;
              }

              _context4.next = 6;
              return _regenerator.default.awrap(_ParseUser.default.logOut());

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
              return _regenerator.default.awrap(this.enableWeb3(options));

            case 14:
              _this$getInternalWeb = this.getInternalWeb3Provider(), account = _this$getInternalWeb.account, internalWeb3 = _this$getInternalWeb.web3, signer = _this$getInternalWeb.signer;

              if (account) {
                _context4.next = 17;
                break;
              }

              throw new Error('Cannot authenticate, no account returned from provider');

            case 17:
              message = (options == null ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
              _context4.next = 20;
              return _regenerator.default.awrap((0, _createSigningData.default)(message));

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
              return _regenerator.default.awrap(signer.signMessage(data));

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
              return _regenerator.default.awrap(_ParseUser.default.logInWith('moralisEth', {
                authData: authData
              }));

            case 32:
              user = _context4.sent;

              if (user) {
                _context4.next = 35;
                break;
              }

              throw new Error('Could not get user');

            case 35:
              _context4.next = 37;
              return _regenerator.default.awrap(user.setACL(new _ParseACL.default(user)));

            case 37:
              user.addAllUnique('accounts', [ethAddress]);
              user.set('ethAddress', ethAddress);
              _context4.next = 41;
              return _regenerator.default.awrap(user.save(null, options));

            case 41:
              return _context4.abrupt("return", user);

            case 42:
            case "end":
              return _context4.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "link",
    value: function (account, options) {
      var _this$getInternalWeb2, signer, message, user, ethAddress, EthAddress, query, ethAddressRecord, data, signature, authData;

      return _regenerator.default.async(function (_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _this$getInternalWeb2 = this.getInternalWeb3Provider(), signer = _this$getInternalWeb2.signer;
              message = (options == null ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
              _context5.next = 4;
              return _regenerator.default.awrap(_ParseUser.default.currentAsync());

            case 4:
              user = _context5.sent;
              ethAddress = account.toLowerCase();
              EthAddress = _ParseObject.default.extend('_EthAddress');
              query = new _ParseQuery.default(EthAddress);
              _context5.next = 10;
              return _regenerator.default.awrap(query.get(ethAddress).catch(function () {
                return null;
              }));

            case 10:
              ethAddressRecord = _context5.sent;

              if (ethAddressRecord) {
                _context5.next = 23;
                break;
              }

              _context5.next = 14;
              return _regenerator.default.awrap((0, _createSigningData.default)(message));

            case 14:
              data = _context5.sent;
              _context5.next = 17;
              return _regenerator.default.awrap(signer.signMessage(data));

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
              return _regenerator.default.awrap(user.linkWith('moralisEth', {
                authData: authData
              }));

            case 23:
              user.addAllUnique('accounts', [ethAddress]);
              user.set('ethAddress', ethAddress);
              _context5.next = 27;
              return _regenerator.default.awrap(user.save(null, options));

            case 27:
              return _context5.abrupt("return", user);

            case 28:
            case "end":
              return _context5.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "unlink",
    value: function (account) {
      var _user$get;

      var accountsLower, EthAddress, query, ethAddressRecord, user, accounts, nextAccounts;
      return _regenerator.default.async(function (_context6) {
        while (1) {
          switch (_context6.prev = _context6.next) {
            case 0:
              accountsLower = account.toLowerCase();
              EthAddress = _ParseObject.default.extend('_EthAddress');
              query = new _ParseQuery.default(EthAddress);
              _context6.next = 5;
              return _regenerator.default.awrap(query.get(accountsLower));

            case 5:
              ethAddressRecord = _context6.sent;
              _context6.next = 8;
              return _regenerator.default.awrap(ethAddressRecord.destroy());

            case 8:
              _context6.next = 10;
              return _regenerator.default.awrap(_ParseUser.default.currentAsync());

            case 10:
              user = _context6.sent;
              accounts = (_user$get = user.get('accounts')) != null ? _user$get : [];
              nextAccounts = accounts.filter(function (v) {
                return v !== accountsLower;
              });
              user.set('accounts', nextAccounts);
              user.set('ethAddress', nextAccounts[0]);
              _context6.next = 17;
              return _regenerator.default.awrap(user._unlinkFrom('moralisEth'));

            case 17:
              _context6.next = 19;
              return _regenerator.default.awrap(user.save());

            case 19:
              return _context6.abrupt("return", user);

            case 20:
            case "end":
              return _context6.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "initPlugins",
    value: function (installedPlugins) {
      var _this2 = this;

      var specs, allPlugins;
      return _regenerator.default.async(function (_context8) {
        while (1) {
          switch (_context8.prev = _context8.next) {
            case 0:
              _context8.t0 = installedPlugins;

              if (_context8.t0) {
                _context8.next = 5;
                break;
              }

              _context8.next = 4;
              return _regenerator.default.awrap((0, _Cloud.run)('getPluginSpecs'));

            case 4:
              _context8.t0 = _context8.sent;

            case 5:
              specs = _context8.t0;
              if (!this.Plugins) this.Plugins = {};

              if (specs) {
                _context8.next = 9;
                break;
              }

              return _context8.abrupt("return");

            case 9:
              allPlugins = this.Plugins;
              specs.forEach(function (plugin) {
                allPlugins[plugin.name] = {};
                plugin.functions.forEach(function (f) {
                  allPlugins[plugin.name][f] = function (params, options) {
                    var response, error, triggerReturn;
                    return _regenerator.default.async(function (_context7) {
                      while (1) {
                        switch (_context7.prev = _context7.next) {
                          case 0:
                            if (!options) options = {};
                            _context7.next = 3;
                            return _regenerator.default.awrap((0, _Cloud.run)(plugin.name + "_" + f, params));

                          case 3:
                            response = _context7.sent;

                            if (response.data.success) {
                              _context7.next = 7;
                              break;
                            }

                            error = JSON.stringify(response.data.data, null, 2);
                            throw new Error("Something went wrong\n" + error);

                          case 7:
                            if (!(options.disableTriggers !== true)) {
                              _context7.next = 13;
                              break;
                            }

                            _context7.next = 10;
                            return _regenerator.default.awrap(_this2.handleTriggers(response.data.result.triggers, response.data.result.data));

                          case 10:
                            triggerReturn = _context7.sent;

                            if (!triggerReturn) {
                              _context7.next = 13;
                              break;
                            }

                            return _context7.abrupt("return", triggerReturn);

                          case 13:
                            return _context7.abrupt("return", response.data.result);

                          case 14:
                          case "end":
                            return _context7.stop();
                        }
                      }
                    }, null, null, null, Promise);
                  };
                });
              });
              this.Plugins = allPlugins;

            case 12:
            case "end":
              return _context8.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "handleTriggers",
    value: function (triggersArray, payload) {
      var _this3 = this;

      var _loop, i, _ret;

      return _regenerator.default.async(function (_context10) {
        while (1) {
          switch (_context10.prev = _context10.next) {
            case 0:
              if (triggersArray) {
                _context10.next = 2;
                break;
              }

              return _context10.abrupt("return");

            case 2:
              _loop = function (i) {
                var _triggersArray$i, _triggersArray$i$data, _triggersArray$i2, _triggersArray$i2$dat, _triggersArray$i$data2, _triggersArray$i3, _triggersArray$i3$dat, _triggersArray$i4, _triggersArray$i4$dat, _triggersArray$i5, _triggersArray$i6, _triggersArray$i7, _triggersArray$i8, _triggersArray$i9, _triggersArray$i10, _triggersArray$i11, _triggersArray$i12, _triggersArray$i13, _triggersArray$i14, _triggersArray$i15, _triggersArray$i16, _triggersArray$i17, _triggersArray$i18, _triggersArray$i20, _triggersArray$i22, _triggersArray$i23, _triggersArray$i24;

                var message, _response, _triggersArray$i19, _JSON$parse, domain, types, _message, signature, result, _JSON$parse2, _domain, _types, _message2;

                return _regenerator.default.async(function (_context9) {
                  while (1) {
                    switch (_context9.prev = _context9.next) {
                      case 0:
                        _context9.t0 = triggersArray[i].name;
                        _context9.next = _context9.t0 === 'openUrl' ? 3 : _context9.t0 === 'web3Transaction' ? 5 : _context9.t0 === 'web3Sign' ? 18 : _context9.t0 === 'callPluginEndpoint' ? 33 : _context9.t0 === 'web3SignV4' ? 55 : 80;
                        break;

                      case 3:
                        if (triggersArray[i].newTab) window.open(triggersArray[i].url);else window.open(triggersArray[i].url, '_self');
                        return _context9.abrupt("break", 81);

                      case 5:
                        _context9.next = 7;
                        return _regenerator.default.awrap(_this3.getInternalWeb3Provider().signer.sendTransaction({
                          from: (_triggersArray$i = triggersArray[i]) == null ? void 0 : (_triggersArray$i$data = _triggersArray$i.data) == null ? void 0 : _triggersArray$i$data.from,
                          to: (_triggersArray$i2 = triggersArray[i]) == null ? void 0 : (_triggersArray$i2$dat = _triggersArray$i2.data) == null ? void 0 : _triggersArray$i2$dat.to,
                          value: _ethers.ethers.BigNumber.from((_triggersArray$i$data2 = (_triggersArray$i3 = triggersArray[i]) == null ? void 0 : (_triggersArray$i3$dat = _triggersArray$i3.data) == null ? void 0 : _triggersArray$i3$dat.value) != null ? _triggersArray$i$data2 : 0),
                          data: (_triggersArray$i4 = triggersArray[i]) == null ? void 0 : (_triggersArray$i4$dat = _triggersArray$i4.data) == null ? void 0 : _triggersArray$i4$dat.data
                        }));

                      case 7:
                        _response = _context9.sent;

                        if (!(((_triggersArray$i5 = triggersArray[i]) == null ? void 0 : _triggersArray$i5.shouldAwait) === true)) {
                          _context9.next = 12;
                          break;
                        }

                        _context9.next = 11;
                        return _regenerator.default.awrap(_response.wait());

                      case 11:
                        _response = _context9.sent;

                      case 12:
                        if (((_triggersArray$i6 = triggersArray[i]) == null ? void 0 : _triggersArray$i6.saveResponse) === true) _this3.memoryCard.save(_response);

                        if (!(((_triggersArray$i7 = triggersArray[i]) == null ? void 0 : _triggersArray$i7.shouldReturnPayload) === true)) {
                          _context9.next = 15;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: {
                            payload: payload,
                            response: _response
                          }
                        });

                      case 15:
                        if (!(((_triggersArray$i8 = triggersArray[i]) == null ? void 0 : _triggersArray$i8.shouldReturnResponse) === true)) {
                          _context9.next = 17;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: _response
                        });

                      case 17:
                        return _context9.abrupt("break", 81);

                      case 18:
                        if (triggersArray[i].message) {
                          _context9.next = 20;
                          break;
                        }

                        throw new Error('web3Sign trigger does not have a message to sign');

                      case 20:
                        if (triggersArray[i].signer) {
                          _context9.next = 22;
                          break;
                        }

                        throw new Error('web3Sign trigger signer address missing or invalid');

                      case 22:
                        message = JSON.parse(triggersArray[i].message);
                        delete message.types.EIP712Domain;
                        _context9.next = 26;
                        return _regenerator.default.awrap(_this3.getInternalWeb3Provider().signer._signTypedData(message.domain, message.types, message.message));

                      case 26:
                        _response = _context9.sent;
                        if (((_triggersArray$i9 = triggersArray[i]) == null ? void 0 : _triggersArray$i9.saveResponse) === true) _this3.memoryCard.save(_response);

                        if (!(((_triggersArray$i10 = triggersArray[i]) == null ? void 0 : _triggersArray$i10.shouldReturnPayload) === true)) {
                          _context9.next = 30;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: {
                            payload: payload,
                            response: _response
                          }
                        });

                      case 30:
                        if (!(((_triggersArray$i11 = triggersArray[i]) == null ? void 0 : _triggersArray$i11.shouldReturnResponse) === true)) {
                          _context9.next = 32;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: _response
                        });

                      case 32:
                        return _context9.abrupt("break", 81);

                      case 33:
                        if (triggersArray[i].pluginName) {
                          _context9.next = 35;
                          break;
                        }

                        throw new Error('callPluginEndpoint trigger does not have an plugin name to call');

                      case 35:
                        if (triggersArray[i].endpoint) {
                          _context9.next = 37;
                          break;
                        }

                        throw new Error('callPluginEndpoint trigger does not have an endpoint to call');

                      case 37:
                        if (!(((_triggersArray$i12 = triggersArray[i]) == null ? void 0 : _triggersArray$i12.shouldAwait) === true)) {
                          _context9.next = 42;
                          break;
                        }

                        if (triggersArray[i].useSavedResponse === true) {
                          triggersArray[i].params[triggersArray[i].savedResponseAs] = _this3.memoryCard.get(triggersArray[i].savedResponseAt);
                        }

                        _context9.next = 41;
                        return _regenerator.default.awrap((0, _Cloud.run)(triggersArray[i].pluginName + "_" + triggersArray[i].endpoint, triggersArray[i].params));

                      case 41:
                        _response = _context9.sent;

                      case 42:
                        if (((_triggersArray$i13 = triggersArray[i]) == null ? void 0 : _triggersArray$i13.shouldAwait) === false) {
                          if (triggersArray[i].useSavedResponse === true) {
                            triggersArray[i].params[triggersArray[i].savedResponseAs] = _this3.memoryCard.get(triggersArray[i].savedResponseAt);
                          }

                          _response = (0, _Cloud.run)(triggersArray[i].pluginName + "_" + triggersArray[i].endpoint, triggersArray[i].params);
                        }

                        if (!(triggersArray[i].runResponseTrigger === true)) {
                          _context9.next = 47;
                          break;
                        }

                        _context9.next = 46;
                        return _regenerator.default.awrap(_this3.handleTriggers(_response.data.result.triggers, _response.data.result.data));

                      case 46:
                        _response = _context9.sent;

                      case 47:
                        if (((_triggersArray$i14 = triggersArray[i]) == null ? void 0 : _triggersArray$i14.saveResponse) === true) _this3.memoryCard.save(_response);

                        if (!(((_triggersArray$i15 = triggersArray[i]) == null ? void 0 : _triggersArray$i15.runResponseTrigger) === false)) {
                          _context9.next = 50;
                          break;
                        }

                        return _context9.abrupt("return", "continue");

                      case 50:
                        if (!(((_triggersArray$i16 = triggersArray[i]) == null ? void 0 : _triggersArray$i16.shouldReturnPayload) === true)) {
                          _context9.next = 52;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: {
                            payload: 'payload',
                            response: _response
                          }
                        });

                      case 52:
                        if (!(((_triggersArray$i17 = triggersArray[i]) == null ? void 0 : _triggersArray$i17.shouldReturnResponse) === true)) {
                          _context9.next = 54;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: _response
                        });

                      case 54:
                        return _context9.abrupt("break", 81);

                      case 55:
                        if (triggersArray[i].parameters) {
                          _context9.next = 57;
                          break;
                        }

                        throw new Error('web3SignV4 trigger does not have `parameters` to sign');

                      case 57:
                        if (triggersArray[i].from) {
                          _context9.next = 59;
                          break;
                        }

                        throw new Error('web3SignV4 trigger does not have a `from` address');

                      case 59:
                        if (!(((_triggersArray$i18 = triggersArray[i]) == null ? void 0 : _triggersArray$i18.shouldAwait) === true)) {
                          _context9.next = 74;
                          break;
                        }

                        _context9.prev = 60;
                        _JSON$parse = JSON.parse(triggersArray[i].parameters[1]), domain = _JSON$parse.domain, types = _JSON$parse.types, _message = _JSON$parse.message;

                        if (types.EIP712Domain) {
                          delete types.EIP712Domain;
                        }

                        _context9.next = 65;
                        return _regenerator.default.awrap(_this3.getInternalWeb3Provider().signer._signTypedData(domain, types, _message));

                      case 65:
                        signature = _context9.sent;
                        result = {
                          result: signature
                        };
                        if (((_triggersArray$i19 = triggersArray[i]) == null ? void 0 : _triggersArray$i19.saveResponse) === true) _this3.memoryCard.save(result);
                        _response = result;
                        _context9.next = 74;
                        break;

                      case 71:
                        _context9.prev = 71;
                        _context9.t1 = _context9["catch"](60);
                        throw new Error(_context9.t1.message || _context9.t1);

                      case 74:
                        if (((_triggersArray$i20 = triggersArray[i]) == null ? void 0 : _triggersArray$i20.shouldAwait) === false) {
                          _JSON$parse2 = JSON.parse(triggersArray[i].parameters[1]), _domain = _JSON$parse2.domain, _types = _JSON$parse2.types, _message2 = _JSON$parse2.message;

                          if (_types.EIP712Domain) {
                            delete _types.EIP712Domain;
                          }

                          _this3.getInternalWeb3Provider().signer._signTypedData(_domain, _types, _message2).then(function (signature) {
                            var _triggersArray$i21;

                            var result = {
                              result: signature
                            };
                            if (((_triggersArray$i21 = triggersArray[i]) == null ? void 0 : _triggersArray$i21.saveResponse) === true) _this3.memoryCard.save(result);
                            _response = result;
                          }).catch(function (error) {
                            throw new Error(error.message || error);
                          });
                        }

                        if (!(((_triggersArray$i22 = triggersArray[i]) == null ? void 0 : _triggersArray$i22.shouldReturnPayload) === true)) {
                          _context9.next = 77;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: {
                            payload: payload,
                            response: _response
                          }
                        });

                      case 77:
                        if (!(((_triggersArray$i23 = triggersArray[i]) == null ? void 0 : _triggersArray$i23.shouldReturnResponse) === true)) {
                          _context9.next = 79;
                          break;
                        }

                        return _context9.abrupt("return", {
                          v: _response
                        });

                      case 79:
                        return _context9.abrupt("break", 81);

                      case 80:
                        throw new Error("Unknown trigger: \"" + ((_triggersArray$i24 = triggersArray[i]) == null ? void 0 : _triggersArray$i24.name) + "\"");

                      case 81:
                      case "end":
                        return _context9.stop();
                    }
                  }
                }, null, null, [[60, 71]], Promise);
              };

              i = 0;

            case 4:
              if (!(i < triggersArray.length)) {
                _context10.next = 15;
                break;
              }

              _context10.next = 7;
              return _regenerator.default.awrap(_loop(i));

            case 7:
              _ret = _context10.sent;

              if (!(_ret === "continue")) {
                _context10.next = 10;
                break;
              }

              return _context10.abrupt("continue", 12);

            case 10:
              if (!(typeof _ret === "object")) {
                _context10.next = 12;
                break;
              }

              return _context10.abrupt("return", _ret.v);

            case 12:
              i++;
              _context10.next = 4;
              break;

            case 15:
              this.memoryCard.deleteSaved();

            case 16:
            case "end":
              return _context10.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "getAllERC20",
    value: function () {
      var _ref,
          chain,
          address,
          result,
          _args11 = arguments;

      return _regenerator.default.async(function (_context11) {
        while (1) {
          switch (_context11.prev = _context11.next) {
            case 0:
              _ref = _args11.length > 0 && _args11[0] !== undefined ? _args11[0] : {}, chain = _ref.chain, address = _ref.address;
              _context11.next = 3;
              return _regenerator.default.awrap((0, _Cloud.run)('getAllERC20', {
                chain: chain,
                address: address
              }));

            case 3:
              result = _context11.sent;
              return _context11.abrupt("return", result);

            case 5:
            case "end":
              return _context11.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getERC20",
    value: function () {
      var _ref2,
          chain,
          address,
          symbol,
          tokenAddress,
          result,
          _args12 = arguments;

      return _regenerator.default.async(function (_context12) {
        while (1) {
          switch (_context12.prev = _context12.next) {
            case 0:
              _ref2 = _args12.length > 0 && _args12[0] !== undefined ? _args12[0] : {}, chain = _ref2.chain, address = _ref2.address, symbol = _ref2.symbol, tokenAddress = _ref2.tokenAddress;
              result = (0, _Cloud.run)('getERC20', {
                chain: chain,
                address: address,
                symbol: symbol,
                tokenAddress: tokenAddress
              });
              return _context12.abrupt("return", result);

            case 3:
            case "end":
              return _context12.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }, {
    key: "getNFTs",
    value: function () {
      var _ref3 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref3$chain = _ref3.chain,
          chain = _ref3$chain === void 0 ? 'Eth' : _ref3$chain,
          _ref3$address = _ref3.address,
          address = _ref3$address === void 0 ? '' : _ref3$address;

      return (0, _Cloud.run)('getNFTs_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getNFTsCount",
    value: function () {
      var _ref4 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref4$chain = _ref4.chain,
          chain = _ref4$chain === void 0 ? 'Eth' : _ref4$chain,
          _ref4$address = _ref4.address,
          address = _ref4$address === void 0 ? '' : _ref4$address;

      return (0, _Cloud.run)('getNFTsCount_old', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "getTransactions",
    value: function () {
      var _ref5 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref5$chain = _ref5.chain,
          chain = _ref5$chain === void 0 ? 'Eth' : _ref5$chain,
          _ref5$address = _ref5.address,
          address = _ref5$address === void 0 ? '' : _ref5$address,
          _ref5$order = _ref5.order,
          order = _ref5$order === void 0 ? 'desc' : _ref5$order;

      return (0, _Cloud.run)('getTransactions', {
        chain: chain,
        address: address,
        order: order
      });
    }
  }, {
    key: "getTransactionsCount",
    value: function () {
      var _ref6 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
          _ref6$chain = _ref6.chain,
          chain = _ref6$chain === void 0 ? 'Eth' : _ref6$chain,
          _ref6$address = _ref6.address,
          address = _ref6$address === void 0 ? '' : _ref6$address;

      return (0, _Cloud.run)('getTransactionsCount', {
        chain: chain,
        address: address
      });
    }
  }, {
    key: "transfer",
    value: function () {
      var _ref7,
          _ref7$type,
          type,
          _ref7$receiver,
          receiver,
          _ref7$contractAddress,
          contractAddress,
          contract_address,
          _ref7$amount,
          amount,
          _ref7$tokenId,
          tokenId,
          token_id,
          _ref7$system,
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

      return _regenerator.default.async(function (_context13) {
        while (1) {
          switch (_context13.prev = _context13.next) {
            case 0:
              _ref7 = _args13.length > 0 && _args13[0] !== undefined ? _args13[0] : {}, _ref7$type = _ref7.type, type = _ref7$type === void 0 ? 'native' : _ref7$type, _ref7$receiver = _ref7.receiver, receiver = _ref7$receiver === void 0 ? '' : _ref7$receiver, _ref7$contractAddress = _ref7.contractAddress, contractAddress = _ref7$contractAddress === void 0 ? '' : _ref7$contractAddress, contract_address = _ref7.contract_address, _ref7$amount = _ref7.amount, amount = _ref7$amount === void 0 ? '' : _ref7$amount, _ref7$tokenId = _ref7.tokenId, tokenId = _ref7$tokenId === void 0 ? '' : _ref7$tokenId, token_id = _ref7.token_id, _ref7$system = _ref7.system, system = _ref7$system === void 0 ? 'evm' : _ref7$system;
              contractAddress = contractAddress || contract_address;
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
                _context13.next = 9;
                break;
              }

              throw new Error('Sender address not found');

            case 9:
              if (tokenId) _TransferUtils.default.isUint256(tokenId);

              if (type !== 'native') {
                customToken = new _ethers.ethers.Contract(contractAddress, _TransferUtils.default.abi[type], signer);
              }

              _context13.t0 = type;
              _context13.next = _context13.t0 === 'native' ? 14 : _context13.t0 === 'erc20' ? 16 : _context13.t0 === 'erc721' ? 18 : _context13.t0 === 'erc1155' ? 20 : 22;
              break;

            case 14:
              transferOperation = signer.sendTransaction({
                to: receiver,
                value: _ethers.ethers.BigNumber.from(amount)
              });
              return _context13.abrupt("break", 23);

            case 16:
              transferOperation = customToken.transfer(receiver, amount, {
                from: sender
              });
              return _context13.abrupt("break", 23);

            case 18:
              transferOperation = customToken.safeTransferFrom(sender, receiver, "" + tokenId, {
                from: sender
              });
              return _context13.abrupt("break", 23);

            case 20:
              transferOperation = customToken.safeTransferFrom(sender, receiver, "" + tokenId, amount, '0x', {
                from: sender
              });
              return _context13.abrupt("break", 23);

            case 22:
              throw new Error("Unknown transfer type: \"" + type + "\"");

            case 23:
              _context13.next = 25;
              return _regenerator.default.awrap(transferOperation);

            case 25:
              result = _context13.sent;
              return _context13.abrupt("return", result);

            case 27:
            case "end":
              return _context13.stop();
          }
        }
      }, null, this, null, Promise);
    }
  }, {
    key: "executeFunction",
    value: function () {
      var _functionData;

      var _ref8,
          contractAddress,
          abi,
          functionName,
          msgValue,
          _ref8$params,
          params,
          _ref8$overrides,
          overrides,
          contractOptions,
          _this$getInternalWeb4,
          account,
          internalWeb3,
          provider,
          signerOrProvider,
          overloadedFunction,
          functionData,
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

      return _regenerator.default.async(function (_context14) {
        while (1) {
          switch (_context14.prev = _context14.next) {
            case 0:
              _ref8 = _args14.length > 0 && _args14[0] !== undefined ? _args14[0] : {}, contractAddress = _ref8.contractAddress, abi = _ref8.abi, functionName = _ref8.functionName, msgValue = _ref8.msgValue, _ref8$params = _ref8.params, params = _ref8$params === void 0 ? {} : _ref8$params, _ref8$overrides = _ref8.overrides, overrides = _ref8$overrides === void 0 ? {} : _ref8$overrides;
              contractOptions = {};
              _this$getInternalWeb4 = this.getInternalWeb3Provider(), account = _this$getInternalWeb4.account, internalWeb3 = _this$getInternalWeb4.web3, provider = _this$getInternalWeb4.provider, signerOrProvider = _this$getInternalWeb4.signerOrProvider;
              overloadedFunction = functionName.match(/^(.+)\((.*)\)$/);

              if (!overloadedFunction) {
                _context14.next = 16;
                break;
              }

              nameWithoutTopics = overloadedFunction[1];
              topics = overloadedFunction[2].split(',').map(function (topic) {
                return topic.trim();
              }).filter(function (topic) {
                return !!topic;
              });
              functionDataArray = abi.filter(function (x) {
                return x.name === nameWithoutTopics;
              });

              if (!(functionDataArray.length === 0)) {
                _context14.next = 10;
                break;
              }

              throw new Error('Function does not exist in abi');

            case 10:
              functionData = functionDataArray.find(function (data) {
                var _data$inputs$length;

                return ((_data$inputs$length = data == null ? void 0 : data.inputs.length) != null ? _data$inputs$length : 0) === topics.length && data.inputs.every(function (input, index) {
                  return input.type === topics[index];
                });
              });

              if (functionData) {
                _context14.next = 14;
                break;
              }

              possibleTopics = functionDataArray.map(function (data) {
                return data.name + "(" + data.inputs.map(function (input) {
                  return input.type;
                }).join(',') + ")";
              });
              throw new Error("Function with the provided topic does not exist in abi. Possible funcationNames: " + possibleTopics.join(' ,'));

            case 14:
              _context14.next = 23;
              break;

            case 16:
              _functionDataArray = abi.filter(function (x) {
                return x.name === functionName;
              });

              if (!(_functionDataArray.length === 0)) {
                _context14.next = 19;
                break;
              }

              throw new Error('Function does not exist in abi');

            case 19:
              if (!(_functionDataArray.length > 1)) {
                _context14.next = 22;
                break;
              }

              _possibleTopics = _functionDataArray.map(function (data) {
                return data.name + "(" + data.inputs.map(function (input) {
                  return input.type;
                }).join(',') + ")";
              });
              throw new Error("Multiple function definitions found in the abi. Please include the topic in the functionName. Possible funcationNames: " + _possibleTopics.join(' ,'));

            case 22:
              functionData = _functionDataArray[0];

            case 23:
              stateMutability = (_functionData = functionData) == null ? void 0 : _functionData.stateMutability;
              isReadFunction = stateMutability === 'view' || stateMutability === 'pure';

              if (isReadFunction) {
                _context14.next = 31;
                break;
              }

              if (params.from) {
                _context14.next = 31;
                break;
              }

              currentAddress = account;

              if (currentAddress) {
                _context14.next = 30;
                break;
              }

              throw new Error('From address is required');

            case 30:
              contractOptions.from = currentAddress;

            case 31:
              errors = [];

              for (_iterator = _createForOfIteratorHelperLoose(functionData.inputs); !(_step = _iterator()).done;) {
                input = _step.value;
                value = params[input.name];

                if (!value && typeof value !== 'number' && typeof value !== 'boolean' && input.name !== '') {
                  errors.push(input.name + " is required");
                }
              }

              if (!(errors.length > 0)) {
                _context14.next = 35;
                break;
              }

              throw errors;

            case 35:
              parsedInputs = functionData.inputs.map(function (x) {
                return params[x.name];
              });
              contract = new _ethers.ethers.Contract(contractAddress, abi, signerOrProvider);
              contractMethod = contract[functionName];

              if (contractMethod) {
                _context14.next = 40;
                break;
              }

              throw new Error("Cannot find function \"" + functionName + "\" on the contract");

            case 40:
              _context14.next = 42;
              return _regenerator.default.awrap(contractMethod.apply(void 0, (0, _toConsumableArray2.default)(Object.values(parsedInputs)).concat([msgValue ? {
                value: _ethers.ethers.BigNumber.from("" + msgValue)
              } : {}])));

            case 42:
              response = _context14.sent;
              return _context14.abrupt("return", response);

            case 44:
            case "end":
              return _context14.stop();
          }
        }
      }, null, this, null, Promise);
    }
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
  }, {
    key: "getInternalWeb3Provider",
    value: function () {
      if (!this.ensureWeb3IsInstalled()) throw new Error(ERROR_WEB3_MISSING);
      return this.internalWeb3Provider;
    }
  }, {
    key: "getInternalWeb3",
    value: function () {
      return this.getInternalWeb3Provider().web3;
    }
  }, {
    key: "provider",
    get: function () {
      var _this$internalWeb3Pro2, _this$internalWeb3Pro3;

      return (_this$internalWeb3Pro2 = (_this$internalWeb3Pro3 = this.internalWeb3Provider) == null ? void 0 : _this$internalWeb3Pro3.provider) != null ? _this$internalWeb3Pro2 : null;
    }
  }, {
    key: "connector",
    get: function () {
      var _this$internalWeb3Pro4, _this$internalWeb3Pro5;

      return (_this$internalWeb3Pro4 = (_this$internalWeb3Pro5 = this.internalWeb3Provider) == null ? void 0 : _this$internalWeb3Pro5.connector) != null ? _this$internalWeb3Pro4 : null;
    }
  }, {
    key: "connectorType",
    get: function () {
      var _this$connector$type, _this$connector;

      return (_this$connector$type = (_this$connector = this.connector) == null ? void 0 : _this$connector.type) != null ? _this$connector$type : null;
    }
  }, {
    key: "network",
    get: function () {
      var _this$connector$netwo, _this$connector2;

      return (_this$connector$netwo = (_this$connector2 = this.connector) == null ? void 0 : _this$connector2.network) != null ? _this$connector$netwo : null;
    }
  }, {
    key: "account",
    get: function () {
      var _this$internalWeb3Pro6, _this$internalWeb3Pro7;

      return (_this$internalWeb3Pro6 = (_this$internalWeb3Pro7 = this.internalWeb3Provider) == null ? void 0 : _this$internalWeb3Pro7.account) != null ? _this$internalWeb3Pro6 : null;
    }
  }, {
    key: "chainId",
    get: function () {
      var _this$internalWeb3Pro8, _this$internalWeb3Pro9;

      return (_this$internalWeb3Pro8 = (_this$internalWeb3Pro9 = this.internalWeb3Provider) == null ? void 0 : _this$internalWeb3Pro9.chainId) != null ? _this$internalWeb3Pro8 : null;
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
        throw new Error("Cannot call " + methodName + ", as it does not exist on connector type \"" + connector.type + "\"");
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
      return _regenerator.default.async(function (_context15) {
        while (1) {
          switch (_context15.prev = _context15.next) {
            case 0:
              _context15.next = 2;
              return _regenerator.default.awrap((0, _detectProvider.default)());

            case 2:
              if (!_context15.sent) {
                _context15.next = 6;
                break;
              }

              _context15.t0 = true;
              _context15.next = 7;
              break;

            case 6:
              _context15.t0 = false;

            case 7:
              return _context15.abrupt("return", _context15.t0);

            case 8:
            case "end":
              return _context15.stop();
          }
        }
      }, null, null, null, Promise);
    }
  }]);
  return MoralisWeb3;
}();

MoralisWeb3.web3 = null;
MoralisWeb3.internalWeb3Provider = null;
MoralisWeb3.Plugins = {};
MoralisWeb3.isEnablingWeb3 = false;
MoralisWeb3.memoryCard = {
  save: function (what) {
    this.saved = what;
  },
  get: function (where) {
    if (!this.saved) throw new Error('Nothing saved to memory card');
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
};
MoralisWeb3.onConnect = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT);
MoralisWeb3.onDisconnect = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT);
MoralisWeb3.onWeb3Enabled = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.WEB3_ENABLED);
MoralisWeb3.onWeb3Deactivated = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.WEB3_DEACTIVATED);
MoralisWeb3.onChainChanged = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED);
MoralisWeb3.onAccountChanged = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED);
var _default = MoralisWeb3;
exports.default = _default;
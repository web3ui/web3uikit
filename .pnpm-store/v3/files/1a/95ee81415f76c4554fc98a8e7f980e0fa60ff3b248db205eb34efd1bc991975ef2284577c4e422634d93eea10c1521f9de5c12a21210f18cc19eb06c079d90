"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

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

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

const MoralisEmitter = new _events.default();
const WARNING = 'Non ethereum enabled browser';
const ERROR_WEB3_MISSING = 'Missing web3 instance, make sure to call Moralis.enableWeb3() or Moralis.authenticate()';

class MoralisWeb3 {
  // Ethers.js instance that will be set after calling enableWeb3
  // Internal web3 provider, containing the Ethers.js Web3 library for internal usage for handling transactions, contracts etc.
  static addListener(eventName, listener) {
    MoralisEmitter.on(eventName, listener);
    return () => MoralisEmitter.removeListener(eventName, listener);
  }

  static on(eventName, listener) {
    MoralisEmitter.on(eventName, listener);
    return () => MoralisEmitter.removeListener(eventName, listener);
  }

  static once(eventName, listener) {
    MoralisEmitter.once(eventName, listener);
    return () => MoralisEmitter.removeListener(eventName, listener);
  }

  static removeListener(eventName, listener) {
    return MoralisEmitter.removeListener(eventName, listener);
  }

  static off(eventName, listener) {
    return MoralisEmitter.off(eventName, listener);
  }

  static removeAllListeners(eventName, listener) {
    return MoralisEmitter.removeAllListeners(eventName, listener);
  }

  static isWeb3Enabled() {
    return this.ensureWeb3IsInstalled();
  }

  static handleWeb3AccountChanged(account) {
    MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED, account);
  }

  static handleWeb3ChainChanged(chainId) {
    var _this$internalWeb3Pro;

    this.web3 = (_this$internalWeb3Pro = this.internalWeb3Provider) === null || _this$internalWeb3Pro === void 0 ? void 0 : _this$internalWeb3Pro.web3;
    MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED, chainId);
  }

  static handleWeb3Connect(connectInfo) {
    MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT, connectInfo);
  }

  static handleWeb3Disconnect(error) {
    // Do not disconnect when MetaMask is attempting to reconnect
    if ((error === null || error === void 0 ? void 0 : error.message) === 'MetaMask: Disconnected from chain. Attempting to connect.') {
      return;
    }

    this.cleanup();
    MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, error);
  }

  static async enableWeb3(options = {}) {
    if (this.isEnablingWeb3) {
      throw new Error('Cannot execute Moralis.enableWeb3(), as Moralis Moralis.enableWeb3() already has been called, but is not finished yet ');
    }

    try {
      var _options$connector;

      this.isEnablingWeb3 = true;

      if (this.speedyNodeApiKey) {
        options.speedyNodeApiKey = this.speedyNodeApiKey;
        options.provider = 'network';
      }

      const Connector = (_options$connector = options === null || options === void 0 ? void 0 : options.connector) !== null && _options$connector !== void 0 ? _options$connector : MoralisWeb3.getWeb3Connector(options === null || options === void 0 ? void 0 : options.provider);
      const connector = new Connector(options);
      const anyNetwork = (options === null || options === void 0 ? void 0 : options.anyNetwork) === true ? true : false;
      this.internalWeb3Provider = new _InternalWeb3Provider.default(connector, anyNetwork, options.privateKey);
      this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED, args => this.handleWeb3AccountChanged(args));
      this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED, args => this.handleWeb3ChainChanged(args));
      this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT, args => this.handleWeb3Connect(args));
      this.internalWeb3Provider.on(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, args => this.handleWeb3Disconnect(args));
      let provider;
      let chainId;
      let account;
      let internalWeb3;

      try {
        ({
          provider,
          chainId,
          account,
          web3: internalWeb3
        } = await this.internalWeb3Provider.activate(options));

        if (!provider) {
          throw new Error('Failed to activate, no provider returned');
        }
      } catch (error) {
        await this.cleanup();
        throw error;
      }

      const web3 = internalWeb3;
      this.web3 = internalWeb3;
      MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.WEB3_ENABLED, {
        chainId,
        account,
        connector,
        provider,
        web3
      });
      return web3; // eslint-disable-next-line no-useless-catch
    } catch (error) {
      throw error;
    } finally {
      this.isEnablingWeb3 = false;
    }
  }

  static isDotAuth(options) {
    switch (options === null || options === void 0 ? void 0 : options.type) {
      case 'dot':
      case 'polkadot':
      case 'kusama':
        return true;

      default:
        return false;
    }
  }

  static isElrondAuth(options) {
    switch (options === null || options === void 0 ? void 0 : options.type) {
      case 'erd':
      case 'elrond':
        return true;

      default:
        return false;
    }
  }

  static isSolAuth(options) {
    switch (options === null || options === void 0 ? void 0 : options.type) {
      case 'sol':
        return true;

      default:
        return false;
    }
  }

  static getWeb3Connector(provider) {
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

  static async deactivateWeb3() {
    return this.cleanup();
  }
  /**
   * Cleanup previously established provider
   */


  static async cleanup() {
    if (this.isEnablingWeb3) {
      // Enabling is aborted before finishing
      this.isEnablingWeb3 = false;
      this.internalWeb3Provider = null;
      this.web3 = null;
      return;
    }

    if (this.web3 && this.internalWeb3Provider) {
      MoralisEmitter.emit(_InternalWeb3Provider.InternalWeb3Events.WEB3_DEACTIVATED, {
        connector: this.internalWeb3Provider.connector,
        provider: this.internalWeb3Provider.provider
      });
    }

    if (this.internalWeb3Provider) {
      this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED, this.handleWeb3AccountChanged);
      this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED, this.handleWeb3ChainChanged);
      this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT, this.handleWeb3Connect);
      this.internalWeb3Provider.removeListener(_InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT, this.handleWeb3Disconnect); // For example, if walletconnect has been enabled, then later on metamask, then wc is not the internalProvider, but still has an active connection

      try {
        await this.internalWeb3Provider.deactivate();
      } catch (error) {// Do nothing
      }
    }

    this.internalWeb3Provider = null;
    this.web3 = null;
  }

  static async authenticate(options) {
    const isLoggedIn = await _ParseUser.default.currentAsync();

    if (isLoggedIn) {
      await _ParseUser.default.logOut();
    }

    if (MoralisWeb3.isDotAuth(options)) {
      return _MoralisDot.default.authenticate(options);
    }

    if (MoralisWeb3.isElrondAuth(options)) {
      return _MoralisErd.default.authenticate(options);
    }

    if (MoralisWeb3.isSolAuth(options)) {
      return _MoralisSol.default.authenticate(options);
    }

    await this.enableWeb3(options);
    const {
      account,
      web3: internalWeb3,
      signer
    } = this.getInternalWeb3Provider();

    if (!account) {
      throw new Error('Cannot authenticate, no account returned from provider');
    }

    const message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
    const data = await (0, _createSigningData.default)(message);
    const ethAddress = account.toLowerCase();
    if (!ethAddress) throw new Error('Address not found');
    const signature = await signer.signMessage(data);
    if (!signature) throw new Error('Data not signed');
    const user = await _ParseUser.default.logInWith('moralisEth', {
      authData: {
        id: ethAddress,
        signature,
        data
      }
    });
    if (!user) throw new Error('Could not get user');
    await user.setACL(new _ParseACL.default(user));
    user.addAllUnique('accounts', [ethAddress]);
    user.set('ethAddress', ethAddress);
    await user.save(null, options);
    return user;
  }

  static async link(account, options) {
    const {
      signer
    } = this.getInternalWeb3Provider();
    const message = (options === null || options === void 0 ? void 0 : options.signingMessage) || MoralisWeb3.getSigningData();
    const user = await _ParseUser.default.currentAsync();
    const ethAddress = account.toLowerCase();

    const EthAddress = _ParseObject.default.extend('_EthAddress');

    const query = new _ParseQuery.default(EthAddress);
    const ethAddressRecord = await query.get(ethAddress).catch(() => null);

    if (!ethAddressRecord) {
      const data = await (0, _createSigningData.default)(message);
      const signature = await signer.signMessage(data);
      if (!signature) throw new Error('Data not signed');
      await user.linkWith('moralisEth', {
        authData: {
          id: ethAddress,
          signature,
          data
        }
      });
    }

    user.addAllUnique('accounts', [ethAddress]);
    user.set('ethAddress', ethAddress);
    await user.save(null, options);
    return user;
  }

  static async unlink(account) {
    var _user$get;

    const accountsLower = account.toLowerCase();

    const EthAddress = _ParseObject.default.extend('_EthAddress');

    const query = new _ParseQuery.default(EthAddress);
    const ethAddressRecord = await query.get(accountsLower);
    await ethAddressRecord.destroy();
    const user = await _ParseUser.default.currentAsync();
    const accounts = (_user$get = user.get('accounts')) !== null && _user$get !== void 0 ? _user$get : [];
    const nextAccounts = accounts.filter(v => v !== accountsLower);
    user.set('accounts', nextAccounts);
    user.set('ethAddress', nextAccounts[0]);
    await user._unlinkFrom('moralisEth');
    await user.save();
    return user;
  }

  static async initPlugins(installedPlugins) {
    const specs = installedPlugins || (await (0, _Cloud.run)('getPluginSpecs'));
    if (!this.Plugins) this.Plugins = {};
    if (!specs) return;
    const allPlugins = this.Plugins;
    specs.forEach(plugin => {
      allPlugins[plugin.name] = {};
      plugin.functions.forEach(f => {
        allPlugins[plugin.name][f] = async (params, options) => {
          if (!options) options = {};
          const response = await (0, _Cloud.run)(`${plugin.name}_${f}`, params);

          if (!response.data.success) {
            const error = JSON.stringify(response.data.data, null, 2);
            throw new Error(`Something went wrong\n${error}`);
          }

          if (options.disableTriggers !== true) {
            const triggerReturn = await this.handleTriggers(response.data.result.triggers, response.data.result.data);
            if (triggerReturn) return triggerReturn;
          }

          return response.data.result;
        };
      });
    });
    this.Plugins = allPlugins;
  }

  static async handleTriggers(triggersArray, payload) {
    var _triggersArray$i, _triggersArray$i$data, _triggersArray$i2, _triggersArray$i2$dat, _triggersArray$i$data2, _triggersArray$i3, _triggersArray$i3$dat, _triggersArray$i4, _triggersArray$i4$dat, _triggersArray$i5, _triggersArray$i6, _triggersArray$i7, _triggersArray$i8, _triggersArray$i9, _triggersArray$i10, _triggersArray$i11, _triggersArray$i12, _triggersArray$i13, _triggersArray$i14, _triggersArray$i15, _triggersArray$i16, _triggersArray$i17, _triggersArray$i18, _triggersArray$i20, _triggersArray$i22, _triggersArray$i23, _triggersArray$i24;

    if (!triggersArray) return;

    for (let i = 0; i < triggersArray.length; i++) {
      switch (triggersArray[i].name) {
        // Handles `openUrl` trigger
        case 'openUrl':
          if (triggersArray[i].newTab) window.open(triggersArray[i].url);else window.open(triggersArray[i].url, '_self');
          break;
        // Handles `web3Transaction` trigger

        case 'web3Transaction':
          // Trigger a web3 transaction (await)
          response = await this.getInternalWeb3Provider().signer.sendTransaction({
            from: (_triggersArray$i = triggersArray[i]) === null || _triggersArray$i === void 0 ? void 0 : (_triggersArray$i$data = _triggersArray$i.data) === null || _triggersArray$i$data === void 0 ? void 0 : _triggersArray$i$data.from,
            to: (_triggersArray$i2 = triggersArray[i]) === null || _triggersArray$i2 === void 0 ? void 0 : (_triggersArray$i2$dat = _triggersArray$i2.data) === null || _triggersArray$i2$dat === void 0 ? void 0 : _triggersArray$i2$dat.to,
            value: _ethers.ethers.BigNumber.from((_triggersArray$i$data2 = (_triggersArray$i3 = triggersArray[i]) === null || _triggersArray$i3 === void 0 ? void 0 : (_triggersArray$i3$dat = _triggersArray$i3.data) === null || _triggersArray$i3$dat === void 0 ? void 0 : _triggersArray$i3$dat.value) !== null && _triggersArray$i$data2 !== void 0 ? _triggersArray$i$data2 : 0),
            data: (_triggersArray$i4 = triggersArray[i]) === null || _triggersArray$i4 === void 0 ? void 0 : (_triggersArray$i4$dat = _triggersArray$i4.data) === null || _triggersArray$i4$dat === void 0 ? void 0 : _triggersArray$i4$dat.data
          });

          if (((_triggersArray$i5 = triggersArray[i]) === null || _triggersArray$i5 === void 0 ? void 0 : _triggersArray$i5.shouldAwait) === true) {
            response = await response.wait();
          } // Save the response returned by the web3 trasanction


          if (((_triggersArray$i6 = triggersArray[i]) === null || _triggersArray$i6 === void 0 ? void 0 : _triggersArray$i6.saveResponse) === true) this.memoryCard.save(response); // Return payload and response

          if (((_triggersArray$i7 = triggersArray[i]) === null || _triggersArray$i7 === void 0 ? void 0 : _triggersArray$i7.shouldReturnPayload) === true) return {
            payload: payload,
            response: response
          }; // Only return response

          if (((_triggersArray$i8 = triggersArray[i]) === null || _triggersArray$i8 === void 0 ? void 0 : _triggersArray$i8.shouldReturnResponse) === true) return response;
          break;
        // Handles `web3Sign` trigger

        case 'web3Sign':
          if (!triggersArray[i].message) throw new Error('web3Sign trigger does not have a message to sign');
          if (!triggersArray[i].signer) throw new Error('web3Sign trigger signer address missing or invalid'); // eslint-disable-next-line no-case-declarations

          const message = JSON.parse(triggersArray[i].message);
          delete message.types.EIP712Domain; // eslint-disable-next-line no-case-declarations

          let response = await this.getInternalWeb3Provider().signer._signTypedData(message.domain, message.types, message.message); // Save response

          if (((_triggersArray$i9 = triggersArray[i]) === null || _triggersArray$i9 === void 0 ? void 0 : _triggersArray$i9.saveResponse) === true) this.memoryCard.save(response); // Return payload and response

          if (((_triggersArray$i10 = triggersArray[i]) === null || _triggersArray$i10 === void 0 ? void 0 : _triggersArray$i10.shouldReturnPayload) === true) return {
            payload: payload,
            response: response
          }; // Only return response

          if (((_triggersArray$i11 = triggersArray[i]) === null || _triggersArray$i11 === void 0 ? void 0 : _triggersArray$i11.shouldReturnResponse) === true) return response;
          break;
        // Calls a given plugin endpoint

        case 'callPluginEndpoint':
          if (!triggersArray[i].pluginName) throw new Error('callPluginEndpoint trigger does not have an plugin name to call');
          if (!triggersArray[i].endpoint) throw new Error('callPluginEndpoint trigger does not have an endpoint to call'); // Call a plugin endpoint (await)

          if (((_triggersArray$i12 = triggersArray[i]) === null || _triggersArray$i12 === void 0 ? void 0 : _triggersArray$i12.shouldAwait) === true) {
            // Check if a saved response has to be used to fill a parameter needed by the plugin
            if (triggersArray[i].useSavedResponse === true) {
              triggersArray[i].params[triggersArray[i].savedResponseAs] = this.memoryCard.get(triggersArray[i].savedResponseAt);
            } // Call the endpoint


            response = await (0, _Cloud.run)(`${triggersArray[i].pluginName}_${triggersArray[i].endpoint}`, triggersArray[i].params);
          } // Call a plugin endpoint (does NOT await)


          if (((_triggersArray$i13 = triggersArray[i]) === null || _triggersArray$i13 === void 0 ? void 0 : _triggersArray$i13.shouldAwait) === false) {
            // Check if a saved response has to be used to fill a parameter needed by the plugin
            if (triggersArray[i].useSavedResponse === true) {
              triggersArray[i].params[triggersArray[i].savedResponseAs] = this.memoryCard.get(triggersArray[i].savedResponseAt);
            } // Call the endpoint


            response = (0, _Cloud.run)(`${triggersArray[i].pluginName}_${triggersArray[i].endpoint}`, triggersArray[i].params);
          } // If the response contains a trigger, run it


          if (triggersArray[i].runResponseTrigger === true) {
            response = await this.handleTriggers(response.data.result.triggers, response.data.result.data);
          } // Save response


          if (((_triggersArray$i14 = triggersArray[i]) === null || _triggersArray$i14 === void 0 ? void 0 : _triggersArray$i14.saveResponse) === true) this.memoryCard.save(response); // If should not run the response trigger, continues the loop and does not return (to avoid breaking the loop execution and run other pending triggers)

          if (((_triggersArray$i15 = triggersArray[i]) === null || _triggersArray$i15 === void 0 ? void 0 : _triggersArray$i15.runResponseTrigger) === false) continue; // Return payload and response

          if (((_triggersArray$i16 = triggersArray[i]) === null || _triggersArray$i16 === void 0 ? void 0 : _triggersArray$i16.shouldReturnPayload) === true) return {
            payload: 'payload',
            response: response
          }; // Only return response

          if (((_triggersArray$i17 = triggersArray[i]) === null || _triggersArray$i17 === void 0 ? void 0 : _triggersArray$i17.shouldReturnResponse) === true) return response;
          break;

        case 'web3SignV4':
          if (!triggersArray[i].parameters) throw new Error('web3SignV4 trigger does not have `parameters` to sign');
          if (!triggersArray[i].from) throw new Error('web3SignV4 trigger does not have a `from` address');

          if (((_triggersArray$i18 = triggersArray[i]) === null || _triggersArray$i18 === void 0 ? void 0 : _triggersArray$i18.shouldAwait) === true) {
            try {
              var _triggersArray$i19;

              const {
                domain,
                types,
                message
              } = JSON.parse(triggersArray[i].parameters[1]);

              if (types.EIP712Domain) {
                // Ethers.js will compute this automatically
                delete types.EIP712Domain;
              }

              const signature = await this.getInternalWeb3Provider().signer._signTypedData(domain, types, message);
              const result = {
                result: signature
              };
              if (((_triggersArray$i19 = triggersArray[i]) === null || _triggersArray$i19 === void 0 ? void 0 : _triggersArray$i19.saveResponse) === true) this.memoryCard.save(result);
              response = result;
            } catch (error) {
              throw new Error(error.message || error);
            }
          }

          if (((_triggersArray$i20 = triggersArray[i]) === null || _triggersArray$i20 === void 0 ? void 0 : _triggersArray$i20.shouldAwait) === false) {
            const {
              domain,
              types,
              message
            } = JSON.parse(triggersArray[i].parameters[1]);

            if (types.EIP712Domain) {
              // Ethers.js will compute this automatically
              delete types.EIP712Domain;
            }

            this.getInternalWeb3Provider().signer._signTypedData(domain, types, message) // eslint-disable-next-line no-loop-func
            .then(signature => {
              var _triggersArray$i21;

              const result = {
                result: signature
              };
              if (((_triggersArray$i21 = triggersArray[i]) === null || _triggersArray$i21 === void 0 ? void 0 : _triggersArray$i21.saveResponse) === true) this.memoryCard.save(result);
              response = result;
            }).catch(error => {
              throw new Error(error.message || error);
            });
          } // Return payload and response


          if (((_triggersArray$i22 = triggersArray[i]) === null || _triggersArray$i22 === void 0 ? void 0 : _triggersArray$i22.shouldReturnPayload) === true) return {
            payload: payload,
            response: response
          }; // Only return response

          if (((_triggersArray$i23 = triggersArray[i]) === null || _triggersArray$i23 === void 0 ? void 0 : _triggersArray$i23.shouldReturnResponse) === true) return response;
          break;

        default:
          throw new Error(`Unknown trigger: "${(_triggersArray$i24 = triggersArray[i]) === null || _triggersArray$i24 === void 0 ? void 0 : _triggersArray$i24.name}"`);
      }
    } // Delete all saved data


    this.memoryCard.deleteSaved();
  }

  static async getAllERC20({
    chain,
    address
  } = {}) {
    const result = await (0, _Cloud.run)('getAllERC20', {
      chain,
      address
    });
    return result;
  }

  static async getERC20({
    chain,
    address,
    symbol,
    tokenAddress
  } = {}) {
    const result = (0, _Cloud.run)('getERC20', {
      chain,
      address,
      symbol,
      tokenAddress
    });
    return result;
  }

  static getNFTs({
    chain = 'Eth',
    address = ''
  } = {}) {
    return (0, _Cloud.run)('getNFTs_old', {
      chain,
      address
    });
  }

  static getNFTsCount({
    chain = 'Eth',
    address = ''
  } = {}) {
    return (0, _Cloud.run)('getNFTsCount_old', {
      chain,
      address
    });
  }

  static getTransactions({
    chain = 'Eth',
    address = '',
    order = 'desc'
  } = {}) {
    return (0, _Cloud.run)('getTransactions', {
      chain,
      address,
      order
    });
  }

  static getTransactionsCount({
    chain = 'Eth',
    address = ''
  } = {}) {
    return (0, _Cloud.run)('getTransactionsCount', {
      chain,
      address
    });
  }

  static async transfer({
    type = 'native',
    receiver = '',
    contractAddress = '',
    // eslint-disable-next-line camelcase
    contract_address,
    amount = '',
    tokenId = '',
    // eslint-disable-next-line camelcase
    token_id,
    system = 'evm'
  } = {}) {
    // Allow snake-case for backwards compatibility
    // eslint-disable-next-line camelcase
    contractAddress = contractAddress || contract_address; // eslint-disable-next-line camelcase

    tokenId = tokenId || token_id;
    const options = {
      receiver,
      contractAddress,
      amount,
      tokenId,
      system
    };

    _TransferUtils.default.isSupportedType(type);

    _TransferUtils.default.validateInput(type, options);

    const {
      web3: internalWeb3,
      account: sender,
      signer
    } = this.getInternalWeb3Provider();
    if (!sender) throw new Error('Sender address not found');
    let transferOperation;
    let customToken;
    if (tokenId) _TransferUtils.default.isUint256(tokenId);

    if (type !== 'native') {
      customToken = new _ethers.ethers.Contract(contractAddress, _TransferUtils.default.abi[type], signer);
    }

    switch (type) {
      case 'native':
        transferOperation = signer.sendTransaction({
          to: receiver,
          value: _ethers.ethers.BigNumber.from(amount)
        });
        break;

      case 'erc20':
        transferOperation = customToken.transfer(receiver, amount, {
          from: sender
        });
        break;

      case 'erc721':
        transferOperation = customToken.safeTransferFrom(sender, receiver, `${tokenId}`, {
          from: sender
        });
        break;

      case 'erc1155':
        transferOperation = customToken.safeTransferFrom(sender, receiver, `${tokenId}`, amount, '0x', {
          from: sender
        });
        break;

      default:
        throw new Error(`Unknown transfer type: "${type}"`);
    }

    const result = await transferOperation;
    return result;
  }

  static async executeFunction({
    contractAddress,
    abi,
    functionName,
    msgValue,
    params = {},
    overrides = {}
  } = {}) {
    var _functionData;

    const {
      account,
      web3: internalWeb3,
      provider,
      signerOrProvider
    } = this.getInternalWeb3Provider(); // Check if function is an overloaded function definition. ex "getMessage(string)", or "getMessage()"

    const overloadedFunction = functionName.match(/^(.+)\((.*)\)$/);
    let functionData;

    if (overloadedFunction) {
      // Get functiondata from overloaded function
      const nameWithoutTopics = overloadedFunction[1];
      const topics = overloadedFunction[2].split(',').map(topic => topic.trim()).filter(topic => !!topic);
      const functionDataArray = abi.filter(x => x.name === nameWithoutTopics);

      if (functionDataArray.length === 0) {
        throw new Error('Function does not exist in abi');
      }

      functionData = functionDataArray.find(data => {
        var _data$inputs$length;

        return ((_data$inputs$length = data === null || data === void 0 ? void 0 : data.inputs.length) !== null && _data$inputs$length !== void 0 ? _data$inputs$length : 0) === topics.length && data.inputs.every((input, index) => input.type === topics[index]);
      });

      if (!functionData) {
        const possibleTopics = functionDataArray.map(data => `${data.name}(${data.inputs.map(input => input.type).join(',')})`);
        throw new Error(`Function with the provided topic does not exist in abi. Possible funcationNames: ${possibleTopics.join(' ,')}`);
      }
    } else {
      // Get functiondata from 'normal' function
      const functionDataArray = abi.filter(x => x.name === functionName);

      if (functionDataArray.length === 0) {
        throw new Error('Function does not exist in abi');
      }

      if (functionDataArray.length > 1) {
        const possibleTopics = functionDataArray.map(data => `${data.name}(${data.inputs.map(input => input.type).join(',')})`);
        throw new Error(`Multiple function definitions found in the abi. Please include the topic in the functionName. Possible funcationNames: ${possibleTopics.join(' ,')}`);
      }

      functionData = functionDataArray[0];
    }

    const stateMutability = (_functionData = functionData) === null || _functionData === void 0 ? void 0 : _functionData.stateMutability;

    if (!(stateMutability === 'view' || stateMutability === 'pure')) {
      if (!params.from) {
        const currentAddress = account;
        if (!currentAddress) throw new Error('From address is required');
        ({}).from = currentAddress;
      }
    }

    const errors = [];

    for (const input of functionData.inputs) {
      const value = params[input.name];

      if (!value && typeof value !== 'number' && typeof value !== 'boolean' && input.name !== '') {
        errors.push(`${input.name} is required`);
      }
    }

    if (errors.length > 0) {
      throw errors;
    }

    const parsedInputs = functionData.inputs.map(x => {
      return params[x.name];
    });
    const contract = new _ethers.ethers.Contract(contractAddress, abi, signerOrProvider);
    const contractMethod = contract[functionName];

    if (!contractMethod) {
      throw new Error(`Cannot find function "${functionName}" on the contract`);
    }

    const response = await contractMethod(...Object.values(parsedInputs), msgValue ? {
      value: _ethers.ethers.BigNumber.from(`${msgValue}`)
    } : {});
    return response;
  }

  static getSigningData() {
    return `Moralis Authentication`;
  }

  static ensureWeb3IsInstalled() {
    return this.internalWeb3Provider && this.internalWeb3Provider.web3 ? true : false;
  }
  /**
   * Gets the internalWeb3Provider with validation to make sure it has been instansiated with 'enableWeb3()'
   */


  static getInternalWeb3Provider() {
    if (!this.ensureWeb3IsInstalled()) throw new Error(ERROR_WEB3_MISSING);
    return this.internalWeb3Provider;
  }
  /**
   * Gets web3 from the internalWeb3Provider with validation to make sure it has been instansiated with 'enableWeb3()'
   */


  static getInternalWeb3() {
    return this.getInternalWeb3Provider().web3;
  }

  static get provider() {
    var _this$internalWeb3Pro2, _this$internalWeb3Pro3;

    return (_this$internalWeb3Pro2 = (_this$internalWeb3Pro3 = this.internalWeb3Provider) === null || _this$internalWeb3Pro3 === void 0 ? void 0 : _this$internalWeb3Pro3.provider) !== null && _this$internalWeb3Pro2 !== void 0 ? _this$internalWeb3Pro2 : null;
  }

  static get connector() {
    var _this$internalWeb3Pro4, _this$internalWeb3Pro5;

    return (_this$internalWeb3Pro4 = (_this$internalWeb3Pro5 = this.internalWeb3Provider) === null || _this$internalWeb3Pro5 === void 0 ? void 0 : _this$internalWeb3Pro5.connector) !== null && _this$internalWeb3Pro4 !== void 0 ? _this$internalWeb3Pro4 : null;
  }

  static get connectorType() {
    var _this$connector$type, _this$connector;

    return (_this$connector$type = (_this$connector = this.connector) === null || _this$connector === void 0 ? void 0 : _this$connector.type) !== null && _this$connector$type !== void 0 ? _this$connector$type : null;
  }

  static get network() {
    var _this$connector$netwo, _this$connector2;

    return (_this$connector$netwo = (_this$connector2 = this.connector) === null || _this$connector2 === void 0 ? void 0 : _this$connector2.network) !== null && _this$connector$netwo !== void 0 ? _this$connector$netwo : null;
  }

  static get account() {
    var _this$internalWeb3Pro6, _this$internalWeb3Pro7;

    return (_this$internalWeb3Pro6 = (_this$internalWeb3Pro7 = this.internalWeb3Provider) === null || _this$internalWeb3Pro7 === void 0 ? void 0 : _this$internalWeb3Pro7.account) !== null && _this$internalWeb3Pro6 !== void 0 ? _this$internalWeb3Pro6 : null;
  }

  static get chainId() {
    var _this$internalWeb3Pro8, _this$internalWeb3Pro9;

    return (_this$internalWeb3Pro8 = (_this$internalWeb3Pro9 = this.internalWeb3Provider) === null || _this$internalWeb3Pro9 === void 0 ? void 0 : _this$internalWeb3Pro9.chainId) !== null && _this$internalWeb3Pro8 !== void 0 ? _this$internalWeb3Pro8 : null;
  }

  static getChainId() {
    return this.chainId;
  }

  static get web3Library() {
    return _ethers.ethers;
  }

  static _forwardToConnector(methodName, args) {
    const {
      connector
    } = this.getInternalWeb3Provider();
    const hasMethod = Boolean(connector[methodName]);

    if (!hasMethod) {
      throw new Error(`Cannot call ${methodName}, as it does not exist on connector type "${connector.type}"`);
    }

    return connector[methodName](...args);
  }

  static switchNetwork(...args) {
    return this._forwardToConnector('switchNetwork', args);
  }

  static addNetwork(...args) {
    return this._forwardToConnector('addNetwork', args);
  }

  static async isMetaMaskInstalled() {
    return (await (0, _detectProvider.default)()) ? true : false;
  }

}

_defineProperty(MoralisWeb3, "speedyNodeApiKey", void 0);

_defineProperty(MoralisWeb3, "web3", null);

_defineProperty(MoralisWeb3, "internalWeb3Provider", null);

_defineProperty(MoralisWeb3, "Plugins", {});

_defineProperty(MoralisWeb3, "isEnablingWeb3", false);

_defineProperty(MoralisWeb3, "memoryCard", {
  save(what) {
    this.saved = what;
  },

  get(where) {
    if (!this.saved) throw new Error('Nothing saved to memory card'); // In case the saved data is not an object but a simple string or number

    if (where.length === 0) return this.getSaved();
    let tmp;
    let savedTmp = this.saved;

    for (let i = 0; i < where.length; i++) {
      tmp = savedTmp[where[i]];
      savedTmp = tmp;
    }

    return savedTmp;
  },

  getSaved() {
    return this.saved;
  },

  deleteSaved() {
    this.saved = undefined;
  }

});

MoralisWeb3.onConnect = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.PROVIDER_CONNECT);
MoralisWeb3.onDisconnect = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.PROVIDER_DISCONNECT);
MoralisWeb3.onWeb3Enabled = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.WEB3_ENABLED);
MoralisWeb3.onWeb3Deactivated = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.WEB3_DEACTIVATED);
MoralisWeb3.onChainChanged = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.CHAIN_CHANGED);
MoralisWeb3.onAccountChanged = MoralisWeb3.on.bind(MoralisWeb3, _InternalWeb3Provider.InternalWeb3Events.ACCOUNT_CHANGED);
var _default = MoralisWeb3;
exports.default = _default;
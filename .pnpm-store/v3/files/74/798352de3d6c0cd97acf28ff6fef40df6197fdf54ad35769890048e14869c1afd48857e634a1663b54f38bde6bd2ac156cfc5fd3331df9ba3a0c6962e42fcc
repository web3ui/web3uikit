"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.WalletConnectEvent = void 0;

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

var _events = require("./events");

var _MoralisRpcs = require("./MoralisRpcs");

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

const WalletConnectEvent = Object.freeze({
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  DISCONNECT: 'disconnect'
});
/**
 * Connector to connect an WalletConenct provider to Moralis
 * Note: this assumes using WalletConnect v1
 * // TODO: support WalletConnect v2
 */

exports.WalletConnectEvent = WalletConnectEvent;

class WalletConnectWeb3Connector extends _AbstractWeb3Connector.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "type", 'WalletConnect');
  }

  async activate({
    chainId: providedChainId,
    mobileLinks,
    newSession
  } = {}) {
    // Log out of any previous sessions
    if (newSession) {
      this.cleanup();
    }

    if (!this.provider) {
      let WalletConnectProvider;
      const config = {
        rpc: (0, _MoralisRpcs.getMoralisRpcs)('WalletConnect'),
        chainId: providedChainId,
        qrcodeModalOptions: {
          mobileLinks
        }
      };

      try {
        var _require;

        WalletConnectProvider = (_require = require('@walletconnect/web3-provider')) === null || _require === void 0 ? void 0 : _require.default;
      } catch (error) {// Do nothing. User might not need walletconnect
      }

      if (!WalletConnectProvider) {
        var _window, _window$WalletConnect;

        WalletConnectProvider = (_window = window) === null || _window === void 0 ? void 0 : (_window$WalletConnect = _window.WalletConnectProvider) === null || _window$WalletConnect === void 0 ? void 0 : _window$WalletConnect.default;
      }

      if (!WalletConnectProvider) {
        throw new Error('Cannot enable via WalletConnect: dependency "@walletconnect/web3-provider" is missing');
      }

      if (typeof WalletConnectProvider === 'function') {
        this.provider = new WalletConnectProvider(config);
      } else {
        this.provider = new window.WalletConnectProvider(config);
      }
    }

    if (!this.provider) {
      throw new Error('Could not connect via WalletConnect, error in connecting to provider');
    }

    const accounts = await this.provider.enable();
    const account = accounts[0].toLowerCase();
    const {
      chainId
    } = this.provider;
    const verifiedChainId = (0, _verifyChainId.default)(chainId);
    this.account = account;
    this.chainId = verifiedChainId;
    this.subscribeToEvents(this.provider);
    return {
      provider: this.provider,
      account,
      chainId: verifiedChainId
    };
  } // Cleanup old sessions


  cleanup() {
    try {
      if (window) {
        window.localStorage.removeItem('walletconnect');
      }
    } catch (error) {// Do nothing
    }
  }

  async deactivate() {
    this.unsubscribeToEvents(this.provider);

    if (this.provider) {
      try {
        await this.provider.close();
      } catch (_unused) {// Do nothing
      }
    }

    this.account = null;
    this.chainId = null;
    this.provider = null;
  }

}

var _default = WalletConnectWeb3Connector;
exports.default = _default;
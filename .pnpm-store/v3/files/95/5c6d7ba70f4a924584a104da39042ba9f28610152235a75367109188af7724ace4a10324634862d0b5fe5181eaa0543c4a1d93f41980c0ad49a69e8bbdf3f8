"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InjectedEvents = void 0;

var _AbstractWeb3Connector = _interopRequireDefault(require("./AbstractWeb3Connector"));

var _events = _interopRequireDefault(require("events"));

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

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

const InjectedEvents = Object.freeze({
  ACCOUNTS_CHANGED: 'accountsChanged',
  CHAIN_CHANGED: 'chainChanged',
  CONNECT: 'connect',
  DISCONNECT: 'disconnect'
});
exports.InjectedEvents = InjectedEvents;

class NoEthereumProviderError extends Error {
  constructor() {
    super();
    this.message = 'Non ethereum enabled browser';
  }

}
/**
 * Connector to connect an injected provider (like Metamask) to Moralis
 * The provider should be injected in window.ethereum
 */


class InjectedWeb3Connector extends _AbstractWeb3Connector.default {
  constructor(...args) {
    super(...args);

    _defineProperty(this, "type", 'injected');
  }

  verifyEthereumBrowser() {
    var _window;

    if (!((_window = window) !== null && _window !== void 0 && _window.ethereum)) {
      throw new NoEthereumProviderError();
    }
  }

  async activate() {
    this.verifyEthereumBrowser();
    const [accounts, chainId] = await Promise.all([window.ethereum.request({
      method: 'eth_requestAccounts'
    }), window.ethereum.request({
      method: 'eth_chainId'
    })]);
    const account = accounts[0] ? accounts[0].toLowerCase() : null;
    const provider = window.ethereum;
    this.chainId = chainId;
    this.account = account;
    this.provider = provider;
    this.subscribeToEvents(provider);
    return {
      provider,
      chainId,
      account
    };
  }

  async switchNetwork(chainId) {
    this.verifyEthereumBrowser();
    chainId = (0, _verifyChainId.default)(chainId);
    const currentNetwork = this.chainId;
    if (currentNetwork === chainId) return;
    await window.ethereum.request({
      method: 'wallet_switchEthereumChain',
      params: [{
        chainId
      }]
    });
  }

  async addNetwork(chainId, chainName, currencyName, currencySymbol, rpcUrl, blockExplorerUrl) {
    this.verifyEthereumBrowser();
    const newchainId = (0, _verifyChainId.default)(chainId);
    await window.ethereum.request({
      method: 'wallet_addEthereumChain',
      params: [{
        chainId: newchainId,
        chainName: chainName,
        nativeCurrency: {
          name: currencyName,
          symbol: currencySymbol,
          decimals: 18
        },
        rpcUrls: [rpcUrl],
        blockExplorerUrls: blockExplorerUrl ? [blockExplorerUrl] : null
      }]
    });
  }

}

var _default = InjectedWeb3Connector;
exports.default = _default;
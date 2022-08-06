"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _events = _interopRequireDefault(require("events"));

var _verifyChainId = _interopRequireDefault(require("../utils/verifyChainId"));

var _events2 = require("./events");

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
/**
 * Abstract connector to connect EIP-1193 providers to Moralis
 *
 * It should implement at least:
 * - activate()
 * - Emit ConnectorEvent.CHAIN_CHANGED when the chain has changed (if possible)
 * - Emit ConnectorEvent.ACCOUNT_CHANGED when the account has changed (if possible)
 * - type: a name to identify
 * - network: the network type that is used (eg. 'evm')
 */


class AbstractWeb3Connector extends _events.default {
  constructor() {
    super();

    _defineProperty(this, "type", 'abstract');

    _defineProperty(this, "network", 'evm');

    _defineProperty(this, "account", null);

    _defineProperty(this, "chainId", null);

    this.handleAccountsChanged = this.handleAccountsChanged.bind(this);
    this.handleChainChanged = this.handleChainChanged.bind(this);
    this.handleConnect = this.handleConnect.bind(this);
    this.handleDisconnect = this.handleDisconnect.bind(this);
  }

  subscribeToEvents(provider) {
    if (provider && provider.on) {
      provider.on(_events2.EthereumEvents.CHAIN_CHANGED, this.handleChainChanged);
      provider.on(_events2.EthereumEvents.ACCOUNTS_CHANGED, this.handleAccountsChanged);
      provider.on(_events2.EthereumEvents.CONNECT, this.handleConnect);
      provider.on(_events2.EthereumEvents.DISCONNECT, this.handleDisconnect);
    }
  }

  unsubscribeToEvents(provider) {
    if (provider && provider.removeListener) {
      provider.removeListener(_events2.EthereumEvents.CHAIN_CHANGED, this.handleChainChanged);
      provider.removeListener(_events2.EthereumEvents.ACCOUNTS_CHANGED, this.handleAccountsChanged);
      provider.removeListener(_events2.EthereumEvents.CONNECT, this.handleConnect);
      provider.removeListener(_events2.EthereumEvents.DISCONNECT, this.handleDisconnect);
    }
  }
  /**
   * Activates the provider.
   * Should returns an object with:
   * - provider: A valid EIP-1193 provider
   * - chainId(optional): the chainId that has been connected to (in hex format)
   * - account(optional): the address that is connected to the provider
   */


  async activate() {
    throw new Error('Not implemented: activate()');
  }
  /**
   * Updates account and emit event, on EIP-1193 accountsChanged events
   */


  handleAccountsChanged(accounts) {
    const account = accounts && accounts[0] ? accounts[0].toLowerCase() : null;
    this.account = account;
    this.emit(_events2.ConnectorEvents.ACCOUNT_CHANGED, account);
  }
  /**
   * Updates chainId and emit event, on EIP-1193 accountsChanged events
   */


  handleChainChanged(chainId) {
    const newChainId = (0, _verifyChainId.default)(chainId);
    this.chainId = newChainId;
    this.emit(_events2.ConnectorEvents.CHAIN_CHANGED, newChainId);
  }

  handleConnect(connectInfo) {
    this.emit(_events2.ConnectorEvents.CONNECT, connectInfo);
  }

  handleDisconnect(error) {
    this.emit(_events2.ConnectorEvents.DISCONNECT, error);
  }
  /**
   * Cleans all active listners, connections and stale references
   */


  async deactivate() {
    this.unsubscribeToEvents(this.provider);
    this.account = null;
    this.chainId = null;
  }

}

var _default = AbstractWeb3Connector;
exports.default = _default;
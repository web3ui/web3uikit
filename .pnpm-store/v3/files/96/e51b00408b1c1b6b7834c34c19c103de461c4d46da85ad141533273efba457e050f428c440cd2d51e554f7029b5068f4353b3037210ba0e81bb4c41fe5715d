"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = exports.InternalWeb3Events = void 0;

var _events = _interopRequireDefault(require("events"));

var _events2 = require("./Web3Connector/events");

var _ethers = require("ethers");

var _convert = require("./utils/convert");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
} // Events emitted by Moralis


const InternalWeb3Events = Object.freeze({
  ACCOUNT_CHANGED: 'accountChanged',
  CHAIN_CHANGED: 'chainChanged',
  PROVIDER_CONNECT: 'provider-connect',
  PROVIDER_DISCONNECT: 'provider-disconnect',
  WEB3_ENABLED: 'web3Enabled',
  WEB3_DEACTIVATED: 'web3Deactivated'
});
/**
 * Wrapper for the internal web3 provider,
 * responsible for syncing data when connector connects/deactivates
 * Gives access to ethers functionalities, initialized by the connector
 */

exports.InternalWeb3Events = InternalWeb3Events;

class InternalWeb3Provider extends _events.default {
  constructor(connector, anyNetwork = false, privateKey = null) {
    super();

    if (!connector) {
      throw new Error('Cannot initialize InternalWeb3Provider without a connector');
    }

    this.connector = connector;
    this.anyNetwork = anyNetwork;
    this.privateKey = privateKey;
    this.handleAccountChanged = this.handleAccountChanged.bind(this);
    this.handleChainChanged = this.handleChainChanged.bind(this);
    this.handleConnect = this.handleConnect.bind(this);
    this.handleDisconnect = this.handleDisconnect.bind(this);
  }

  async activate(options) {
    if (!this.connector) {
      throw new Error('Cannot activate InternalWeb3Provider without a connector');
    }

    if (this.connector.on) {
      this.connector.on(_events2.ConnectorEvents.ACCOUNT_CHANGED, this.handleAccountChanged);
      this.connector.on(_events2.ConnectorEvents.CHAIN_CHANGED, this.handleChainChanged);
      this.connector.on(_events2.ConnectorEvents.CONNECT, this.handleConnect);
      this.connector.on(_events2.ConnectorEvents.DISCONNECT, this.handleDisconnect);
    }

    const {
      provider,
      chainId,
      account
    } = await this.connector.activate(options);
    this.provider = provider;
    this.chainId = chainId;
    this.account = account;
    const network = this.anyNetwork ? 'any' : (0, _convert.fromHexToDecimal)(chainId);
    this.web3 = new _ethers.ethers.providers.Web3Provider(provider, network);
    return {
      provider,
      chainId,
      account,
      web3: this.web3
    };
  } // Returns a provider (or wallet if a privateKey is provided) that can sign messages (throws if not possible, ie. the account cannot sign)


  get signer() {
    return this.privateKey != null ? new _ethers.ethers.Wallet(this.privateKey, this.web3) : this.web3.getSigner(this.account);
  } // Returns a provider (or wallet if a privateKey is provided) that can sign messages or the normal web3 provider as fallback


  get signerOrProvider() {
    try {
      if (this.account) {
        return this.privateKey != null ? new _ethers.ethers.Wallet(this.privateKey, this.web3) : this.web3.getSigner(this.account);
      }

      return this.web3;
    } catch (error) {
      return this.web3;
    }
  }

  handleChainChanged(chainId) {
    this.chainId = chainId;
    this.web3 = new _ethers.ethers.providers.Web3Provider(this.provider, (0, _convert.fromHexToDecimal)(chainId));
    this.emit(InternalWeb3Events.CHAIN_CHANGED, chainId);
  }

  handleAccountChanged(account) {
    this.account = account;
    this.emit(InternalWeb3Events.ACCOUNT_CHANGED, account);
  } // Handle Connect events fired from connectors


  handleConnect(connectInfo) {
    this.emit(InternalWeb3Events.PROVIDER_CONNECT, connectInfo);
  } // Handle Disconnect events fired from connectors


  handleDisconnect(error) {
    this.emit(InternalWeb3Events.PROVIDER_DISCONNECT, error);
  }

  async deactivate() {
    this.account = null;
    this.chianId = null;
    this.web3 = null;
    this.provider = null;
    this.privateKey = null;

    if (this.connector) {
      if (this.connector.removeListener) {
        this.connector.removeListener(InternalWeb3Events.CHAIN_CHANGED, this.handleChainChanged);
        this.connector.removeListener(InternalWeb3Events.ACCOUNT_CHANGED, this.handleAccountChanged);
        this.connector.removeListener(InternalWeb3Events.PROVIDER_CONNECT, this.handleConnect);
        this.connector.removeListener(InternalWeb3Events.PROVIDER_DISCONNECT, this.handleDisconnect);
      }

      if (this.connector.deactivate) {
        await this.connector.deactivate();
      }
    }

    this.connector = null;
  }

}

var _default = InternalWeb3Provider;
exports.default = _default;
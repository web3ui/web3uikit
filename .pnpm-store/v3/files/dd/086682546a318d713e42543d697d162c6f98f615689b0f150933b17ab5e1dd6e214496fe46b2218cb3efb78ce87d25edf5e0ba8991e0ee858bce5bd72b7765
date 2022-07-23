import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { SafeEventEmitter } from '@toruslabs/openlogin-jrpc';
import { CustomError } from 'ts-custom-error';
import loglevel$1 from 'loglevel';

const CHAIN_NAMESPACES = {
  EIP155: "eip155",
  SOLANA: "solana",
  OTHER: "other"
};
const ADAPTER_NAMESPACES = {
  EIP155: "eip155",
  SOLANA: "solana",
  MULTICHAIN: "multichain"
};

const DEFAULT_INFURA_ID = "776218ac4734478c90191dde8cae483c";

const getDefaultNetworkId = chainNamespace => {
  if (chainNamespace === CHAIN_NAMESPACES.EIP155) {
    return 1;
  } else if (chainNamespace === CHAIN_NAMESPACES.SOLANA) {
    return 1;
  }

  throw new Error("Chain namespace ".concat(chainNamespace, " is not supported"));
};

const getEvmChainConfig = chainId => {
  const chainNamespace = CHAIN_NAMESPACES.EIP155;

  if (chainId === 1) {
    return {
      chainNamespace,
      chainId: "0x1",
      rpcTarget: "https://mainnet.infura.io/v3/".concat(DEFAULT_INFURA_ID),
      displayName: "Ethereum Mainnet",
      blockExplorer: "https://etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum"
    };
  } else if (chainId === 3) {
    return {
      chainNamespace,
      chainId: "0x3",
      rpcTarget: "https://ropsten.infura.io/v3/".concat(DEFAULT_INFURA_ID),
      displayName: "ropsten",
      blockExplorer: "https://ropsten.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum"
    };
  } else if (chainId === 4) {
    return {
      chainNamespace,
      chainId: "0x4",
      rpcTarget: "https://rinkeby.infura.io/v3/".concat(DEFAULT_INFURA_ID),
      displayName: "rinkeby",
      blockExplorer: "https://rinkeby.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum"
    };
  } else if (chainId === 5) {
    return {
      chainNamespace,
      chainId: "0x5",
      rpcTarget: "https://goerli.infura.io/v3/".concat(DEFAULT_INFURA_ID),
      displayName: "goerli",
      blockExplorer: "https://goerli.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum"
    };
  } else if (chainId === 42) {
    return {
      chainNamespace,
      chainId: "0x2a",
      rpcTarget: "https://kovan.infura.io/v3/".concat(DEFAULT_INFURA_ID),
      displayName: "kovan",
      blockExplorer: "https://kovan.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum"
    };
  } else if (chainId === 137) {
    return {
      chainNamespace,
      rpcTarget: "https://polygon-rpc.com",
      blockExplorer: "https://polygonscan.com",
      chainId: "0x89",
      displayName: "Polygon Mainnet",
      ticker: "matic",
      tickerName: "matic"
    };
  } else if (chainId === 80001) {
    return {
      chainNamespace,
      rpcTarget: "https://rpc-mumbai.maticvigil.com",
      blockExplorer: "https://mumbai-explorer.matic.today",
      chainId: "0x13881",
      displayName: "Polygon Mumbai Testnet",
      ticker: "matic",
      tickerName: "matic"
    };
  } else if (chainId === 56) {
    return {
      chainNamespace,
      rpcTarget: "https://bsc-dataseed.binance.org",
      blockExplorer: "https://bscscan.com",
      chainId: "0x38",
      displayName: "Binance SmartChain Mainnet",
      ticker: "BNB",
      tickerName: "BNB"
    };
  } else if (chainId === 97) {
    return {
      chainNamespace,
      rpcTarget: "https://data-seed-prebsc-2-s3.binance.org:8545",
      blockExplorer: "https://testnet.bscscan.com",
      chainId: "0x61",
      displayName: "Binance SmartChain Testnet",
      ticker: "BNB",
      tickerName: "BNB"
    };
  }

  return null;
};
const getSolanaChainConfig = chainId => {
  const chainNamespace = CHAIN_NAMESPACES.SOLANA;

  if (chainId === 1) {
    return {
      chainNamespace,
      blockExplorer: "https://explorer.solana.com",
      chainId: "0x1",
      displayName: "Solana Mainnet",
      rpcTarget: "https://api.mainnet-beta.solana.com",
      ticker: "SOL",
      tickerName: "Solana Token"
    };
  } else if (chainId === 2) {
    return {
      rpcTarget: "https://api.testnet.solana.com",
      blockExplorer: "https://explorer.solana.com?cluster=testnet",
      chainId: "0x2",
      chainNamespace,
      displayName: "testnet",
      ticker: "SOL",
      tickerName: "solana"
    };
  } else if (chainId === 3) {
    return {
      rpcTarget: "https://api.devnet.solana.com",
      blockExplorer: "https://explorer.solana.com?cluster=devnet",
      chainId: "0x3",
      chainNamespace,
      displayName: "devnet",
      ticker: "SOL",
      tickerName: "solana"
    };
  }

  return null;
};
const getChainConfig = (chainNamespace, chainId) => {
  if (chainNamespace === CHAIN_NAMESPACES.OTHER) return null;
  const finalChainId = chainId ? typeof chainId === "number" ? chainId : parseInt(chainId, 16) : getDefaultNetworkId(chainNamespace);

  if (chainNamespace === CHAIN_NAMESPACES.EIP155) {
    return getEvmChainConfig(finalChainId);
  } else if (chainNamespace === CHAIN_NAMESPACES.SOLANA) {
    return getSolanaChainConfig(finalChainId);
  }

  return null;
};

class Web3AuthError extends CustomError {
  constructor(code, message) {
    // takes care of stack and proto
    super(message);

    _defineProperty(this, "code", void 0);

    _defineProperty(this, "message", void 0);

    this.code = code;
    this.message = message || ""; // Set name explicitly as minification can mangle class names

    Object.defineProperty(this, "name", {
      value: "Web3AuthError"
    });
  }

  toJSON() {
    return {
      name: this.name,
      code: this.code,
      message: this.message
    };
  }

  toString() {
    return JSON.stringify(this.toJSON());
  }

}
class WalletInitializationError extends Web3AuthError {
  constructor(code, message) {
    // takes care of stack and proto
    super(code, message); // Set name explicitly as minification can mangle class names

    Object.defineProperty(this, "name", {
      value: "WalletInitializationError"
    });
  }

  static fromCode(code) {
    let extraMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return new WalletInitializationError(code, "".concat(WalletInitializationError.messages[code], ", ").concat(extraMessage));
  } // Custom methods


  static notFound() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5001, extraMessage);
  }

  static notInstalled() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5002, extraMessage);
  }

  static notReady() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5003, extraMessage);
  }

  static windowBlocked() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5004, extraMessage);
  }

  static windowClosed() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5005, extraMessage);
  }

  static incompatibleChainNameSpace() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5006, extraMessage);
  }

  static duplicateAdapterError() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5007, extraMessage);
  }

  static invalidProviderConfigError() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5008, extraMessage);
  }

  static providerNotReadyError() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5009, extraMessage);
  }

  static rpcConnectionError() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5010, extraMessage);
  }

  static invalidParams() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5011, extraMessage);
  }

  static invalidNetwork() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletInitializationError.fromCode(5013, extraMessage);
  }

}
/**
 * wallet login errors
 */

_defineProperty(WalletInitializationError, "messages", {
  5000: "Custom",
  5001: "Wallet is not found",
  5002: "Wallet is not installed",
  5003: "Wallet is not ready yet",
  5004: "Wallet window is blocked",
  5005: "Wallet window has been closed by the user",
  5006: "Incompatible chain namespace provided",
  5007: "Adapter has already been included",
  5008: "Invalid provider Config",
  5009: "Provider is not ready yet",
  5010: "Failed to connect with rpc url",
  5011: "Invalid params passed in",
  5013: "Invalid network provided"
});

class WalletLoginError extends Web3AuthError {
  constructor(code, message) {
    // takes care of stack and proto
    super(code, message); // Set name explicitly as minification can mangle class names

    Object.defineProperty(this, "name", {
      value: "WalletLoginError"
    });
  }

  static fromCode(code) {
    let extraMessage = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    return new WalletLoginError(code, "".concat(WalletLoginError.messages[code]).concat(extraMessage));
  }

  static connectionError() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletLoginError.fromCode(5111, extraMessage);
  }

  static disconnectionError() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletLoginError.fromCode(5112, extraMessage);
  }

  static notConnectedError() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletLoginError.fromCode(5113, extraMessage);
  }

  static popupClosed() {
    let extraMessage = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    return WalletLoginError.fromCode(5114, extraMessage);
  }

}

_defineProperty(WalletLoginError, "messages", {
  5000: "Custom",
  5111: "Failed to connect with wallet",
  5112: "Failed to disconnect from wallet",
  5113: "Wallet is not connected",
  5114: "Wallet popup has been closed by the user"
});

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const MULTI_CHAIN_ADAPTERS = {
  OPENLOGIN: "openlogin",
  WALLET_CONNECT_V1: "wallet-connect-v1",
  WALLET_CONNECT_V2: "wallet-connect-v2"
};
const SOLANA_ADAPTERS = _objectSpread$1({
  TORUS_SOLANA: "torus-solana",
  PHANTOM: "phantom",
  SOLLET: "sollet",
  SOLLET_EXTENSION: "sollet-extension",
  SOLFLARE: "solflare",
  SLOPE: "slope"
}, MULTI_CHAIN_ADAPTERS);
const EVM_ADAPTERS = _objectSpread$1({
  TORUS_EVM: "torus-evm",
  METAMASK: "metamask",
  COINBASE: "coinbase"
}, MULTI_CHAIN_ADAPTERS);
const WALLET_ADAPTERS = _objectSpread$1(_objectSpread$1({}, EVM_ADAPTERS), SOLANA_ADAPTERS);

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
const ADAPTER_CATEGORY = {
  EXTERNAL: "external",
  IN_APP: "in_app"
};
const ADAPTER_STATUS = {
  NOT_READY: "not_ready",
  READY: "ready",
  CONNECTING: "connecting",
  CONNECTED: "connected",
  DISCONNECTED: "disconnected",
  ERRORED: "errored"
};
const ADAPTER_EVENTS = _objectSpread(_objectSpread({}, ADAPTER_STATUS), {}, {
  ADAPTER_DATA_UPDATED: "adapter_data_updated"
});
class BaseAdapter extends SafeEventEmitter {
  constructor() {
    super(...arguments);

    _defineProperty(this, "adapterData", {});

    _defineProperty(this, "chainConfig", null);
  }

  get chainConfigProxy() {
    return this.chainConfig ? _objectSpread({}, this.chainConfig) : null;
  }

  setChainConfig(customChainConfig) {
    if (this.status === ADAPTER_STATUS.READY) return;
    if (!customChainConfig.chainNamespace) throw WalletInitializationError.notReady("ChainNamespace is required while setting chainConfig");
    const defaultChainConfig = getChainConfig(customChainConfig.chainNamespace, customChainConfig.chainId);
    this.chainConfig = _objectSpread(_objectSpread({}, defaultChainConfig), customChainConfig);
  }

  setAdapterSettings(_) {}

  checkConnectionRequirements() {
    // we reconnect without killing existing wallet connect session on calling connect again.
    if (this.name === WALLET_ADAPTERS.WALLET_CONNECT_V1 && this.status === ADAPTER_STATUS.CONNECTING) return;else if (this.status === ADAPTER_STATUS.CONNECTING) throw WalletInitializationError.notReady("Already connecting");
    if (this.status === ADAPTER_STATUS.CONNECTED) throw WalletLoginError.connectionError("Already connected");
    if (this.status !== ADAPTER_STATUS.READY) throw WalletLoginError.connectionError("Wallet adapter is not ready yet");
  }

  checkInitializationRequirements() {
    if (this.status === ADAPTER_STATUS.NOT_READY) return;
    if (this.status === ADAPTER_STATUS.CONNECTED) throw WalletInitializationError.notReady("Already connected");
    if (this.status === ADAPTER_STATUS.READY) throw WalletInitializationError.notReady("Adapter is already initialized");
  }

  updateAdapterData(data) {
    this.adapterData = data;
    this.emit(ADAPTER_EVENTS.ADAPTER_DATA_UPDATED, {
      adapterName: this.name,
      data
    });
  }

}
class BaseNetworkSwitch {}

var loglevel = loglevel$1.getLogger("web3auth-logger");

const PROVIDER_EVENTS = {
  INITIALIZED: "initialized",
  ERRORED: "errored"
};

function storageAvailable(type) {
  let storageExists = false;
  let storageLength = 0;
  let storage;

  try {
    storage = window[type];
    storageExists = true;
    storageLength = storage.length;
    const x = "__storage_test__";
    storage.setItem(x, x);
    storage.removeItem(x);
    return true;
  } catch (error) {
    const _error = error;
    return !!(_error && ( // everything except Firefox
    _error.code === 22 || // Firefox
    _error.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    _error.name === "QuotaExceededError" || // Firefox
    _error.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
    storageExists && storageLength !== 0);
  }
}
const isHexStrict = hex => {
  return (typeof hex === "string" || typeof hex === "number") && /^(-)?0x[0-9a-f]*$/i.test(hex);
};

export { ADAPTER_CATEGORY, ADAPTER_EVENTS, ADAPTER_NAMESPACES, ADAPTER_STATUS, BaseAdapter, BaseNetworkSwitch, CHAIN_NAMESPACES, DEFAULT_INFURA_ID, EVM_ADAPTERS, MULTI_CHAIN_ADAPTERS, PROVIDER_EVENTS, SOLANA_ADAPTERS, WALLET_ADAPTERS, WalletInitializationError, WalletLoginError, Web3AuthError, getChainConfig, getEvmChainConfig, getSolanaChainConfig, isHexStrict, loglevel as log, storageAvailable };
//# sourceMappingURL=base.esm.js.map

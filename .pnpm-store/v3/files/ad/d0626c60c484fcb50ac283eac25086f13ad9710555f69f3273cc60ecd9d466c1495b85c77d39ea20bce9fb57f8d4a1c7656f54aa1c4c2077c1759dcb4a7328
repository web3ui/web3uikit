/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "ADAPTER_CATEGORY": () => (/* reexport */ ADAPTER_CATEGORY),
  "ADAPTER_EVENTS": () => (/* reexport */ ADAPTER_EVENTS),
  "ADAPTER_NAMESPACES": () => (/* reexport */ ADAPTER_NAMESPACES),
  "ADAPTER_STATUS": () => (/* reexport */ ADAPTER_STATUS),
  "BaseAdapter": () => (/* reexport */ BaseAdapter),
  "BaseNetworkSwitch": () => (/* reexport */ BaseNetworkSwitch),
  "CHAIN_NAMESPACES": () => (/* reexport */ CHAIN_NAMESPACES),
  "DEFAULT_INFURA_ID": () => (/* reexport */ DEFAULT_INFURA_ID),
  "EVM_ADAPTERS": () => (/* reexport */ EVM_ADAPTERS),
  "MULTI_CHAIN_ADAPTERS": () => (/* reexport */ MULTI_CHAIN_ADAPTERS),
  "PROVIDER_EVENTS": () => (/* reexport */ PROVIDER_EVENTS),
  "SOLANA_ADAPTERS": () => (/* reexport */ SOLANA_ADAPTERS),
  "WALLET_ADAPTERS": () => (/* reexport */ WALLET_ADAPTERS),
  "WalletInitializationError": () => (/* reexport */ WalletInitializationError),
  "WalletLoginError": () => (/* reexport */ WalletLoginError),
  "Web3AuthError": () => (/* reexport */ Web3AuthError),
  "getChainConfig": () => (/* reexport */ getChainConfig),
  "getEvmChainConfig": () => (/* reexport */ getEvmChainConfig),
  "getSolanaChainConfig": () => (/* reexport */ getSolanaChainConfig),
  "isHexStrict": () => (/* reexport */ isHexStrict),
  "log": () => (/* reexport */ loglevel),
  "storageAvailable": () => (/* reexport */ storageAvailable)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/openlogin-jrpc"
const openlogin_jrpc_namespaceObject = require("@toruslabs/openlogin-jrpc");
;// CONCATENATED MODULE: ./src/chain/IChainInterface.ts
const CHAIN_NAMESPACES = {
  EIP155: "eip155",
  SOLANA: "solana",
  OTHER: "other"
}; // eip155 for all evm chains

const ADAPTER_NAMESPACES = {
  EIP155: "eip155",
  SOLANA: "solana",
  MULTICHAIN: "multichain"
}; // eip155 for all evm chains
;// CONCATENATED MODULE: ./src/chain/config.ts

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
;// CONCATENATED MODULE: external "ts-custom-error"
const external_ts_custom_error_namespaceObject = require("ts-custom-error");
;// CONCATENATED MODULE: ./src/errors/index.ts

 // @flow

class Web3AuthError extends external_ts_custom_error_namespaceObject.CustomError {
  constructor(code, message) {
    // takes care of stack and proto
    super(message);

    defineProperty_default()(this, "code", void 0);

    defineProperty_default()(this, "message", void 0);

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

defineProperty_default()(WalletInitializationError, "messages", {
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

defineProperty_default()(WalletLoginError, "messages", {
  5000: "Custom",
  5111: "Failed to connect with wallet",
  5112: "Failed to disconnect from wallet",
  5113: "Wallet is not connected",
  5114: "Wallet popup has been closed by the user"
});
;// CONCATENATED MODULE: ./src/wallet/index.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const MULTI_CHAIN_ADAPTERS = {
  OPENLOGIN: "openlogin",
  WALLET_CONNECT_V1: "wallet-connect-v1",
  WALLET_CONNECT_V2: "wallet-connect-v2"
};
const SOLANA_ADAPTERS = _objectSpread({
  TORUS_SOLANA: "torus-solana",
  PHANTOM: "phantom",
  SOLLET: "sollet",
  SOLLET_EXTENSION: "sollet-extension",
  SOLFLARE: "solflare",
  SLOPE: "slope"
}, MULTI_CHAIN_ADAPTERS);
const EVM_ADAPTERS = _objectSpread({
  TORUS_EVM: "torus-evm",
  METAMASK: "metamask",
  COINBASE: "coinbase"
}, MULTI_CHAIN_ADAPTERS);
const WALLET_ADAPTERS = _objectSpread(_objectSpread({}, EVM_ADAPTERS), SOLANA_ADAPTERS);
;// CONCATENATED MODULE: ./src/adapter/IAdapter.ts


function IAdapter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function IAdapter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? IAdapter_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : IAdapter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





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
const ADAPTER_EVENTS = IAdapter_objectSpread(IAdapter_objectSpread({}, ADAPTER_STATUS), {}, {
  ADAPTER_DATA_UPDATED: "adapter_data_updated"
});
class BaseAdapter extends openlogin_jrpc_namespaceObject.SafeEventEmitter {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "adapterData", {});

    defineProperty_default()(this, "chainConfig", null);

    defineProperty_default()(this, "adapterNamespace", void 0);

    defineProperty_default()(this, "currentChainNamespace", void 0);

    defineProperty_default()(this, "type", void 0);

    defineProperty_default()(this, "name", void 0);

    defineProperty_default()(this, "status", void 0);
  }

  get chainConfigProxy() {
    return this.chainConfig ? IAdapter_objectSpread({}, this.chainConfig) : null;
  }

  setChainConfig(customChainConfig) {
    if (this.status === ADAPTER_STATUS.READY) return;
    if (!customChainConfig.chainNamespace) throw WalletInitializationError.notReady("ChainNamespace is required while setting chainConfig");
    const defaultChainConfig = getChainConfig(customChainConfig.chainNamespace, customChainConfig.chainId);
    this.chainConfig = IAdapter_objectSpread(IAdapter_objectSpread({}, defaultChainConfig), customChainConfig);
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
;// CONCATENATED MODULE: external "loglevel"
const external_loglevel_namespaceObject = require("loglevel");
var external_loglevel_default = /*#__PURE__*/__webpack_require__.n(external_loglevel_namespaceObject);
;// CONCATENATED MODULE: ./src/loglevel.ts

/* harmony default export */ const loglevel = (external_loglevel_default().getLogger("web3auth-logger"));
;// CONCATENATED MODULE: ./src/provider/IProvider.ts
const PROVIDER_EVENTS = {
  INITIALIZED: "initialized",
  ERRORED: "errored"
};
;// CONCATENATED MODULE: ./src/utils.ts
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
;// CONCATENATED MODULE: ./src/index.ts









module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=base.cjs.js.map
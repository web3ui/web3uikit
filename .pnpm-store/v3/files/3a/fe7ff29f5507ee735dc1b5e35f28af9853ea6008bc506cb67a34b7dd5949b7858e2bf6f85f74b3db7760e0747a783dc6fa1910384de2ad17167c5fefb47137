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
  "PhantomInjectedProvider": () => (/* reexport */ PhantomInjectedProvider),
  "SlopeInjectedProxyProvider": () => (/* reexport */ SlopeInjectedProxyProvider),
  "SolanaPrivateKeyProvider": () => (/* reexport */ SolanaPrivateKeyProvider),
  "SolanaWallet": () => (/* reexport */ SolanaWallet),
  "SolflareInjectedProvider": () => (/* reexport */ SolflareInjectedProvider),
  "SolletInjectedProvider": () => (/* reexport */ SolletInjectedProvider),
  "TorusInjectedProvider": () => (/* reexport */ TorusInjectedProvider)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@toruslabs/base-controllers"
const base_controllers_namespaceObject = require("@toruslabs/base-controllers");
;// CONCATENATED MODULE: external "@toruslabs/openlogin-jrpc"
const openlogin_jrpc_namespaceObject = require("@toruslabs/openlogin-jrpc");
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: external "@web3auth/base-provider"
const base_provider_namespaceObject = require("@web3auth/base-provider");
;// CONCATENATED MODULE: ./src/rpc/JrpcClient.ts


function createChainIdMiddleware(chainId) {
  return (req, res, next, end) => {
    if (req.method === "solana_chainId") {
      res.result = chainId;
      return end();
    }

    return next();
  };
}
function createProviderConfigMiddleware(providerConfig) {
  return (req, res, next, end) => {
    if (req.method === "solana_provider_config") {
      res.result = providerConfig;
      return end();
    }

    return next();
  };
}
function createConfigMiddleware(providerConfig) {
  const {
    chainId
  } = providerConfig;
  return (0,openlogin_jrpc_namespaceObject.mergeMiddleware)([createChainIdMiddleware(chainId), createProviderConfigMiddleware(providerConfig)]);
}
function createJsonRpcClient(providerConfig) {
  const {
    rpcTarget
  } = providerConfig;
  const fetchMiddleware = (0,base_controllers_namespaceObject.createFetchMiddleware)({
    rpcTarget
  });
  const networkMiddleware = (0,openlogin_jrpc_namespaceObject.mergeMiddleware)([createConfigMiddleware(providerConfig), fetchMiddleware]);
  return {
    networkMiddleware,
    fetchMiddleware
  };
}
;// CONCATENATED MODULE: ./src/rpc/solanaRpcMiddlewares.ts

function createGetAccountsMiddleware(_ref) {
  let {
    getAccounts
  } = _ref;
  return (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== "getAccounts") return next();
    if (!getAccounts) throw new Error("WalletMiddleware - opts.getAccounts not provided"); // This calls from the prefs controller

    const accounts = await getAccounts(request);
    response.result = accounts;
    return undefined;
  });
}
function createRequestAccountsMiddleware(_ref2) {
  let {
    requestAccounts
  } = _ref2;
  return (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== "requestAccounts") return next();
    if (!requestAccounts) throw new Error("WalletMiddleware - opts.requestAccounts not provided"); // This calls the UI login function

    const accounts = await requestAccounts(request);
    response.result = accounts;
    return undefined;
  });
}
function createGenericJRPCMiddleware(targetMethod, handler) {
  return (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== targetMethod) return next();
    if (!handler) throw new Error("WalletMiddleware - ".concat(targetMethod, " not provided"));
    const result = await handler(request);
    response.result = result;
    return undefined;
  });
}
function createSolanaMiddleware(providerHandlers) {
  const {
    getAccounts,
    requestAccounts,
    signTransaction,
    signAndSendTransaction,
    signAllTransactions,
    signMessage,
    getPrivateKey,
    getSecretKey
  } = providerHandlers;
  return (0,openlogin_jrpc_namespaceObject.mergeMiddleware)([createRequestAccountsMiddleware({
    requestAccounts
  }), createGetAccountsMiddleware({
    getAccounts
  }), createGenericJRPCMiddleware("signTransaction", signTransaction), createGenericJRPCMiddleware("signAndSendTransaction", signAndSendTransaction), createGenericJRPCMiddleware("signAllTransactions", signAllTransactions), createGenericJRPCMiddleware("signMessage", signMessage), createGenericJRPCMiddleware("solanaPrivateKey", getPrivateKey), createGenericJRPCMiddleware("solanaSecretKey", getSecretKey)]);
}
function createChainSwitchMiddleware(_ref3) {
  let {
    addNewChainConfig,
    switchSolanaChain
  } = _ref3;
  return (0,openlogin_jrpc_namespaceObject.mergeMiddleware)([createGenericJRPCMiddleware("addSolanaChain", addNewChainConfig), createGenericJRPCMiddleware("switchSolanaChain", switchSolanaChain)]);
}
function createAccountMiddleware(_ref4) {
  let {
    updatePrivatekey
  } = _ref4;
  return (0,openlogin_jrpc_namespaceObject.mergeMiddleware)([createGenericJRPCMiddleware("updateAccount", updatePrivatekey)]);
}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/base/baseInjectedProvider.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }







class BaseInjectedProvider extends base_provider_namespaceObject.BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: _objectSpread(_objectSpread({}, config.chainConfig), {}, {
          chainNamespace: base_namespaceObject.CHAIN_NAMESPACES.SOLANA
        })
      },
      state
    });
  }

  async switchChain(_) {
    return Promise.resolve();
  }

  async setupProvider(injectedProvider) {
    const engine = new openlogin_jrpc_namespaceObject.JRPCEngine();
    const providerHandlers = this.getProviderHandlers(injectedProvider);
    const solanaMiddleware = createSolanaMiddleware(providerHandlers);
    engine.push(solanaMiddleware);
    const configMiddleware = createConfigMiddleware(this.config.chainConfig);
    engine.push(configMiddleware);
    const injectedProviderProxy = this.getInjectedProviderProxy(injectedProvider);

    if (injectedProviderProxy) {
      engine.push(injectedProviderProxy);
    }

    const provider = (0,base_controllers_namespaceObject.providerFromEngine)(engine);
    this.updateProviderEngineProxy(provider);
    await this.lookupNetwork();
  }

  async lookupNetwork() {
    const {
      chainConfig
    } = this.config;
    this.update({
      chainId: chainConfig.chainId
    });
    return chainConfig.chainId || "";
  }

  getInjectedProviderProxy(_) {
    return undefined;
  }

}
;// CONCATENATED MODULE: external "bs58"
const external_bs58_namespaceObject = require("bs58");
var external_bs58_default = /*#__PURE__*/__webpack_require__.n(external_bs58_namespaceObject);
;// CONCATENATED MODULE: external "eth-rpc-errors"
const external_eth_rpc_errors_namespaceObject = require("eth-rpc-errors");
;// CONCATENATED MODULE: ./src/providers/injectedProviders/base/providerHandlers.ts


const getBaseProviderHandlers = injectedProvider => {
  const providerHandlers = {
    requestAccounts: async () => {
      return injectedProvider.publicKey ? [external_bs58_default().encode(injectedProvider.publicKey.toBytes())] : [];
    },
    getAccounts: async () => injectedProvider.publicKey ? [external_bs58_default().encode(injectedProvider.publicKey.toBytes())] : [],
    getPrivateKey: async () => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    signTransaction: async req => {
      const transaction = await injectedProvider.signTransaction(req.params.message);
      return transaction;
    },
    signMessage: async req => {
      const message = await injectedProvider.signMessage(req.params.message);
      return message;
    },
    signAllTransactions: async req => {
      var _req$params, _req$params2;

      if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message) || !((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message.length)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const transaction = await injectedProvider.signAllTransactions(req.params.message);
      return transaction;
    },
    signAndSendTransaction: async req => {
      const txRes = await injectedProvider.signAndSendTransaction(req.params.message);
      return {
        signature: txRes.signature
      };
    }
  };
  return providerHandlers;
};
;// CONCATENATED MODULE: ./src/providers/injectedProviders/injectedProviderProxy.ts


function injectedProviderProxy_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function injectedProviderProxy_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? injectedProviderProxy_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : injectedProviderProxy_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }


function createInjectedProviderProxyMiddleware(provider) {
  return (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(async (req, res, _next) => {
    const result = await provider.request(injectedProviderProxy_objectSpread({}, req));
    res.result = result;
  });
}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/phantom/phantomInjectedProvider.ts



class PhantomInjectedProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getBaseProviderHandlers(injectedProvider);
  }

  getInjectedProviderProxy(injectedProvider) {
    return createInjectedProviderProxyMiddleware(injectedProvider);
  }

}
;// CONCATENATED MODULE: external "@solana/web3.js"
const web3_js_namespaceObject = require("@solana/web3.js");
;// CONCATENATED MODULE: ./src/providers/injectedProviders/slope/providerHandlers.ts



const getSlopeHandlers = (injectedProvider, getProviderEngineProxy) => {
  const providerHandlers = {
    requestAccounts: async () => {
      const {
        data
      } = await injectedProvider.connect();
      return [data.publicKey];
    },
    getAccounts: async () => {
      const {
        data
      } = await injectedProvider.connect();
      return [data.publicKey];
    },
    getPrivateKey: async () => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    signTransaction: async req => {
      const txMessage = req.params.message;
      if (!txMessage) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidRequest({
        message: "Invalid transaction message"
      });
      const {
        data
      } = await injectedProvider.signTransaction(external_bs58_default().encode(txMessage.serializeMessage()));
      if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
      const publicKey = new web3_js_namespaceObject.PublicKey(data.publicKey);
      const signature = external_bs58_default().decode(data.signature);
      txMessage.addSignature(publicKey, signature);
      return txMessage;
    },
    signMessage: async req => {
      const response = await injectedProvider.signMessage(req.params.message);
      return external_bs58_default().decode(response.data.signature);
    },
    signAndSendTransaction: async req => {
      const provider = getProviderEngineProxy();
      if (!provider) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const txMessage = req.params.message;
      if (!txMessage) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidRequest({
        message: "Invalid transaction message"
      });
      const {
        data
      } = await injectedProvider.signTransaction(external_bs58_default().encode(txMessage.serializeMessage()));
      if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
      const publicKey = new web3_js_namespaceObject.PublicKey(data.publicKey);
      const signature = external_bs58_default().decode(data.signature);
      txMessage.addSignature(publicKey, signature);
      const chainConfig = await provider.request({
        method: "solana_provider_config",
        params: []
      });
      const conn = new web3_js_namespaceObject.Connection(chainConfig.rpcTarget);
      const res = await conn.sendRawTransaction(txMessage.serialize());
      return {
        signature: res
      };
    },
    signAllTransactions: async req => {
      var _req$params, _req$params2, _data$signatures;

      if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message) || !((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message.length)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const allTxns = req.params.message;
      const {
        length
      } = allTxns;
      const unsignedTx = [];

      for (let i = 0; i < length; i++) {
        unsignedTx.push(external_bs58_default().encode(req.params.message[i].serializeMessage()));
      }

      const {
        msg,
        data
      } = await injectedProvider.signAllTransactions(unsignedTx);
      if (!data.publicKey || ((_data$signatures = data.signatures) === null || _data$signatures === void 0 ? void 0 : _data$signatures.length) !== length) throw new Error(msg);
      const publicKey = new web3_js_namespaceObject.PublicKey(data.publicKey);

      for (let i = 0; i < length; i++) {
        const signature = external_bs58_default().decode(data.signatures[i]);
        allTxns[i].addSignature(publicKey, signature);
      }

      return allTxns;
    }
  };
  return providerHandlers;
};
;// CONCATENATED MODULE: ./src/providers/injectedProviders/slope/slopeInjectedProvider.ts


class SlopeInjectedProxyProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getSlopeHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }

}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/solflare/providerHandlers.ts



const getSolflareHandlers = (injectedProvider, getProviderEngineProxy) => {
  const solflareProviderHandlers = getBaseProviderHandlers(injectedProvider);

  solflareProviderHandlers.signAndSendTransaction = async req => {
    const provider = getProviderEngineProxy();
    if (!provider) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const transaction = await injectedProvider.signTransaction(req.params.message);
    const chainConfig = await provider.request({
      method: "solana_provider_config",
      params: []
    });
    const conn = new web3_js_namespaceObject.Connection(chainConfig.rpcTarget);
    const res = await conn.sendRawTransaction(transaction.serialize());
    return {
      signature: res
    };
  };

  return solflareProviderHandlers;
};
;// CONCATENATED MODULE: ./src/providers/injectedProviders/solflare/solflareInjectedProvider.ts


class SolflareInjectedProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getSolflareHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }

}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/sollet/providerHandlers.ts



const getSolletHandlers = (injectedProvider, getProviderEngineProxy) => {
  const providerHandlers = getBaseProviderHandlers(injectedProvider);

  providerHandlers.signMessage = async req => {
    const {
      signature
    } = await injectedProvider.sign(req.params.message, "utf8");
    return signature;
  };

  providerHandlers.signAndSendTransaction = async req => {
    const provider = getProviderEngineProxy();
    if (!provider) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const transaction = await injectedProvider.signTransaction(req.params.message);
    const chainConfig = await provider.request({
      method: "solana_provider_config",
      params: []
    });
    const conn = new web3_js_namespaceObject.Connection(chainConfig.rpcTarget);
    const res = await conn.sendRawTransaction(transaction.serialize());
    return {
      signature: res
    };
  };

  return providerHandlers;
};
;// CONCATENATED MODULE: ./src/providers/injectedProviders/sollet/solletInjectedProvider.ts


class SolletInjectedProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getSolletHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }

}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/torus/providerHandlers.ts

const getTorusHandlers = injectedProvider => {
  const providerHandlers = {
    requestAccounts: async () => {
      const accounts = await injectedProvider.request({
        method: "solana_requestAccounts",
        params: {}
      });
      return accounts;
    },
    getAccounts: async () => {
      const accounts = await injectedProvider.request({
        method: "solana_accounts",
        params: {}
      });
      return accounts;
    },
    getPrivateKey: async () => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    signMessage: async req => {
      var _req$params;

      if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const message = await injectedProvider.signMessage(req.params.message);
      return message;
    },
    signTransaction: async req => {
      var _req$params2;

      if (!((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const txMessage = req.params.message;
      const response = await injectedProvider.signTransaction(txMessage);
      return response;
    },
    signAndSendTransaction: async req => {
      var _req$params3;

      if (!((_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.message)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const txMessage = req.params.message;
      const response = await injectedProvider.sendTransaction(txMessage);
      return {
        signature: response
      };
    },
    signAllTransactions: async req => {
      var _req$params4, _req$params5;

      if (!((_req$params4 = req.params) !== null && _req$params4 !== void 0 && _req$params4.message) || !((_req$params5 = req.params) !== null && _req$params5 !== void 0 && _req$params5.message.length)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const transactions = req.params.message;
      const response = await injectedProvider.signAllTransactions(transactions);
      return response;
    }
  };
  return providerHandlers;
};
;// CONCATENATED MODULE: ./src/providers/injectedProviders/torus/torusInjectedProvider.ts


function torusInjectedProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function torusInjectedProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? torusInjectedProvider_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : torusInjectedProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









class TorusInjectedProvider extends base_provider_namespaceObject.BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: torusInjectedProvider_objectSpread(torusInjectedProvider_objectSpread({}, config.chainConfig), {}, {
          chainNamespace: base_namespaceObject.CHAIN_NAMESPACES.SOLANA
        })
      },
      state
    });
  }

  async switchChain(_) {
    return Promise.resolve();
  }

  async setupProvider(injectedProvider) {
    this.handleInjectedProviderUpdate(injectedProvider);
    await this.setupEngine(injectedProvider);
  }

  async lookupNetwork() {
    if (!this.provider) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Torus solana provider is not initialized",
      code: 4902
    });
    const {
      chainId
    } = this.config.chainConfig;
    const connectedChainId = await this.provider.request({
      method: "solana_chainId"
    });
    const connectedHexChainId = (0,base_namespaceObject.isHexStrict)(connectedChainId.toString()) ? connectedChainId : "0x".concat(parseInt(connectedChainId, 10).toString(16));
    if (chainId !== connectedHexChainId) throw base_namespaceObject.WalletInitializationError.rpcConnectionError("Invalid network, net_version is: ".concat(connectedHexChainId, ", expected: ").concat(chainId));
    this.update({
      chainId: connectedHexChainId
    });
    this.provider.emit("connect", {
      chainId: this.state.chainId
    });
    this.provider.emit("chainChanged", this.state.chainId);
    return this.state.chainId;
  }

  async setupEngine(injectedProvider) {
    const providerHandlers = getTorusHandlers(injectedProvider);
    const solanaMiddleware = createSolanaMiddleware(providerHandlers);
    const injectedProviderProxy = createInjectedProviderProxyMiddleware(injectedProvider);
    const engine = new openlogin_jrpc_namespaceObject.JRPCEngine();
    engine.push(solanaMiddleware);
    engine.push(injectedProviderProxy);
    const provider = (0,base_controllers_namespaceObject.providerFromEngine)(engine);
    this.updateProviderEngineProxy(provider);
    await this.lookupNetwork();
  }

  async handleInjectedProviderUpdate(injectedProvider) {
    injectedProvider.on("accountsChanged", async accounts => {
      this.provider.emit("accountsChanged", accounts);
    });
    injectedProvider.on("chainChanged", async chainId => {
      const connectedHexChainId = (0,base_namespaceObject.isHexStrict)(chainId) ? chainId : "0x".concat(parseInt(chainId, 10).toString(16)); // Check if chainId changed and trigger event

      this.configure({
        chainConfig: torusInjectedProvider_objectSpread(torusInjectedProvider_objectSpread({}, this.config.chainConfig), {}, {
          chainId: connectedHexChainId
        })
      });
      await this.setupProvider(injectedProvider);
    });
  }

}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/index.ts






;// CONCATENATED MODULE: external "@toruslabs/tweetnacl-js"
const tweetnacl_js_namespaceObject = require("@toruslabs/tweetnacl-js");
var tweetnacl_js_default = /*#__PURE__*/__webpack_require__.n(tweetnacl_js_namespaceObject);
;// CONCATENATED MODULE: ./src/providers/privateKeyProvider/solanaPrivateKeyUtils.ts





async function getProviderHandlers(_ref) {
  let {
    privKey,
    getProviderEngineProxy
  } = _ref;

  const keyPairGenerator = () => {
    return web3_js_namespaceObject.Keypair.fromSecretKey(Buffer.from(privKey, "hex"));
  };

  if (typeof privKey !== "string") throw base_namespaceObject.WalletInitializationError.invalidParams("privKey must be a string");
  const keyPair = keyPairGenerator();
  const providerHandlers = {
    requestAccounts: async () => {
      return [keyPair.publicKey.toBase58()];
    },
    getAccounts: async () => [keyPair.publicKey.toBase58()],
    getPrivateKey: async () => privKey,
    getSecretKey: async () => external_bs58_default().encode(keyPair.secretKey),
    signTransaction: async req => {
      var _req$params;

      if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const transaction = req.params.message;
      transaction.partialSign(keyPair);
      return transaction;
    },
    signMessage: async req => {
      var _req$params2;

      if (!((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const signedMsg = tweetnacl_js_default().sign.detached(req.params.message, keyPair.secretKey);
      return signedMsg;
    },
    signAndSendTransaction: async req => {
      var _req$params3;

      if (!((_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.message)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const _providerEngineProxy = getProviderEngineProxy();

      if (!_providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const transaction = req.params.message;
      transaction.sign(keyPair);
      const sig = await _providerEngineProxy.request({
        method: "sendTransaction",
        params: [external_bs58_default().encode(transaction.serialize())]
      });
      return {
        signature: sig
      };
    },
    signAllTransactions: async req => {
      var _req$params4, _req$params5, _req$params6;

      if (!((_req$params4 = req.params) !== null && _req$params4 !== void 0 && _req$params4.message) || !((_req$params5 = req.params) !== null && _req$params5 !== void 0 && _req$params5.message.length)) {
        throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("message");
      }

      const txns = (_req$params6 = req.params) === null || _req$params6 === void 0 ? void 0 : _req$params6.message;

      for (const tx of txns || []) {
        const transaction = tx;
        transaction.partialSign(keyPair);
      }

      return txns;
    }
  };
  return providerHandlers;
}
;// CONCATENATED MODULE: ./src/providers/privateKeyProvider/solanaPrivateKeyProvider.ts


function solanaPrivateKeyProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function solanaPrivateKeyProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? solanaPrivateKeyProvider_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : solanaPrivateKeyProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









class SolanaPrivateKeyProvider extends base_provider_namespaceObject.BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: solanaPrivateKeyProvider_objectSpread(solanaPrivateKeyProvider_objectSpread({}, config.chainConfig), {}, {
          chainNamespace: base_namespaceObject.CHAIN_NAMESPACES.SOLANA
        })
      },
      state
    });
  }

  async enable() {
    if (!this.state.privateKey) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Private key is not found in state, plz pass it in constructor state param",
      code: 4902
    });
    await this.setupProvider(this.state.privateKey);
    return this._providerEngineProxy.request({
      method: "eth_accounts"
    });
  }

  async setupProvider(privKey) {
    const providerHandlers = await getProviderHandlers({
      privKey,
      getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
    });
    const solanaMiddleware = createSolanaMiddleware(providerHandlers);
    const engine = new openlogin_jrpc_namespaceObject.JRPCEngine();
    const {
      networkMiddleware
    } = createJsonRpcClient(this.config.chainConfig);
    engine.push(this.getChainSwitchMiddleware());
    engine.push(this.getAccountMiddleware());
    engine.push(solanaMiddleware);
    engine.push(networkMiddleware);
    const provider = (0,base_controllers_namespaceObject.providerFromEngine)(engine);
    this.updateProviderEngineProxy(provider);
    await this.lookupNetwork();
  }

  async updateAccount(params) {
    if (!this._providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const existingKey = await this._providerEngineProxy.request({
      method: "solanaPrivateKey"
    });

    if (existingKey !== params.privateKey) {
      await this.setupProvider(params.privateKey);

      this._providerEngineProxy.emit("accountsChanged", {
        accounts: await this._providerEngineProxy.request({
          method: "requestAccounts"
        })
      });
    }
  }

  async switchChain(params) {
    if (!this._providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const chainConfig = this.getChainConfig(params.chainId);
    this.update({
      chainId: "loading"
    });
    this.configure({
      chainConfig
    });
    const privKey = await this._providerEngineProxy.request({
      method: "solanaPrivateKey"
    });
    await this.setupProvider(privKey);
  }

  async lookupNetwork() {
    if (!this._providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const health = await this._providerEngineProxy.request({
      method: "getHealth",
      params: []
    });
    const {
      chainConfig
    } = this.config;
    if (health !== "ok") throw base_namespaceObject.WalletInitializationError.rpcConnectionError("Failed to lookup network for following rpc target: ".concat(chainConfig.rpcTarget));
    this.update({
      chainId: chainConfig.chainId
    });

    if (this.state.chainId !== chainConfig.chainId) {
      this.provider.emit("chainChanged", this.state.chainId);
      this.provider.emit("connect", {
        chainId: this.state.chainId
      });
    }

    return this.state.chainId;
  }

  getChainSwitchMiddleware() {
    const chainSwitchHandlers = {
      addNewChainConfig: async req => {
        if (!req.params) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing request params");
        const {
          chainId,
          chainName,
          rpcUrls,
          blockExplorerUrls,
          nativeCurrency
        } = req.params;
        if (!chainId) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing chainId in chainParams");
        if (!rpcUrls || rpcUrls.length === 0) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing rpcUrls in chainParams");
        if (!nativeCurrency) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing nativeCurrency in chainParams");
        this.addChain({
          chainNamespace: base_namespaceObject.CHAIN_NAMESPACES.SOLANA,
          chainId,
          ticker: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.symbol) || "SOL",
          tickerName: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.name) || "Solana",
          displayName: chainName,
          rpcTarget: rpcUrls[0],
          blockExplorer: (blockExplorerUrls === null || blockExplorerUrls === void 0 ? void 0 : blockExplorerUrls[0]) || ""
        });
      },
      switchSolanaChain: async req => {
        if (!req.params) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing request params");
        if (!req.params.chainId) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing chainId");
        await this.switchChain(req.params);
      }
    };
    const chainSwitchMiddleware = createChainSwitchMiddleware(chainSwitchHandlers);
    return chainSwitchMiddleware;
  }

  getAccountMiddleware() {
    const accountHandlers = {
      updatePrivatekey: async req => {
        if (!req.params) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing request params");
        if (!req.params.privateKey) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing privateKey");
        const {
          privateKey
        } = req.params;
        await this.updateAccount({
          privateKey
        });
      }
    };
    return createAccountMiddleware(accountHandlers);
  }

}

defineProperty_default()(SolanaPrivateKeyProvider, "getProviderInstance", async params => {
  const providerFactory = new SolanaPrivateKeyProvider({
    config: {
      chainConfig: params.chainConfig
    }
  });
  await providerFactory.setupProvider(params.privKey);
  return providerFactory;
});
;// CONCATENATED MODULE: ./src/providers/privateKeyProvider/index.ts

;// CONCATENATED MODULE: ./src/providers/index.ts


;// CONCATENATED MODULE: ./src/solanaWallet.ts

class SolanaWallet {
  constructor(provider) {
    defineProperty_default()(this, "provider", void 0);

    this.provider = provider;
  }

  async requestAccounts() {
    const accounts = await this.provider.request({
      method: "requestAccounts",
      params: {}
    });
    return accounts;
  }

  async signAndSendTransaction(transaction) {
    const {
      signature
    } = await this.provider.request({
      method: "signAndSendTransaction",
      params: {
        message: transaction
      }
    });
    return {
      signature
    };
  }

  async signTransaction(transaction) {
    const signedTransaction = await this.provider.request({
      method: "signTransaction",
      params: {
        message: transaction
      }
    });
    return signedTransaction;
  }

  async signAllTransactions(transactions) {
    const signedTransactions = await this.provider.request({
      method: "signAllTransactions",
      params: {
        message: transactions
      }
    });
    return signedTransactions;
  }

  async signMessage(data) {
    const response = await this.provider.request({
      method: "signMessage",
      params: {
        message: data
      }
    });
    return response;
  }

  async request(args) {
    const result = await this.provider.request(args);
    return result;
  }

}
;// CONCATENATED MODULE: ./src/index.ts



module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=solanaProvider.cjs.js.map
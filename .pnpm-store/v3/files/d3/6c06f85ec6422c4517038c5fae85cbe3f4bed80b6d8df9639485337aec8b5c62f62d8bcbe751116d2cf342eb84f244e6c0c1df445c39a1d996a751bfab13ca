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
  "EthereumPrivateKeyProvider": () => (/* reexport */ EthereumPrivateKeyProvider),
  "WalletConnectProvider": () => (/* reexport */ WalletConnectProvider)
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
;// CONCATENATED MODULE: external "eth-rpc-errors"
const external_eth_rpc_errors_namespaceObject = require("eth-rpc-errors");
;// CONCATENATED MODULE: ./src/rpc/walletMidddleware.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




function resemblesAddress(str) {
  // hex prefix 2 + 20 bytes
  return str.length === 2 + 20 * 2;
}

function createWalletMiddleware(_ref) {
  let {
    getAccounts,
    getPrivateKey,
    processDecryptMessage,
    processEncryptionPublicKey,
    processEthSignMessage,
    processPersonalMessage,
    processTransaction,
    processSignTransaction,
    processTypedMessage,
    processTypedMessageV3,
    processTypedMessageV4
  } = _ref;

  if (!getAccounts) {
    throw new Error("opts.getAccounts is required");
  } //
  // utility
  //

  /**
   * Validates the keyholder address, and returns a normalized (i.e. lowercase)
   * copy of it.
   *
   * an error
   */


  async function validateAndNormalizeKeyholder(address, req) {
    if (typeof address === "string" && address.length > 0) {
      // ensure address is included in provided accounts
      const accounts = await getAccounts(req);
      const normalizedAccounts = accounts.map(_address => _address.toLowerCase());
      const normalizedAddress = address.toLowerCase();

      if (normalizedAccounts.includes(normalizedAddress)) {
        return normalizedAddress;
      }
    }

    throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams({
      message: "Invalid parameters: must provide an Ethereum address."
    });
  } //
  // account lookups
  //


  async function lookupAccounts(req, res) {
    res.result = await getAccounts(req);
  }

  async function lookupDefaultAccount(req, res) {
    const accounts = await getAccounts(req);
    res.result = accounts[0] || null;
  } //
  // transaction signatures
  //


  async function sendTransaction(req, res) {
    if (!processTransaction) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const txParams = req.params[0] || {
      from: ""
    };
    txParams.from = await validateAndNormalizeKeyholder(txParams.from, req);
    res.result = await processTransaction(txParams, req);
  }

  async function signTransaction(req, res) {
    if (!processSignTransaction) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const txParams = req.params[0] || {
      from: ""
    };
    txParams.from = await validateAndNormalizeKeyholder(txParams.from, req);
    res.result = await processSignTransaction(txParams, req);
  } //
  // message signatures
  //


  async function ethSign(req, res) {
    if (!processEthSignMessage) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const address = await validateAndNormalizeKeyholder(req.params[0], req);
    const message = req.params[1];
    const extraParams = req.params[2] || {};

    const msgParams = _objectSpread(_objectSpread({}, extraParams), {}, {
      from: address,
      data: message
    });

    res.result = await processEthSignMessage(msgParams, req);
  }

  async function signTypedData(req, res) {
    if (!processTypedMessage) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const message = req.params[0];
    const address = await validateAndNormalizeKeyholder(req.params[1], req);
    const version = "V1";
    const extraParams = req.params[2] || {};

    const msgParams = _objectSpread(_objectSpread({}, extraParams), {}, {
      from: address,
      data: message
    });

    res.result = await processTypedMessage(msgParams, req, version);
  }

  async function signTypedDataV3(req, res) {
    if (!processTypedMessageV3) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const address = await validateAndNormalizeKeyholder(req.params[0], req);
    const message = req.params[1];
    const version = "V3";
    const msgParams = {
      data: message,
      from: address,
      version
    };
    res.result = await processTypedMessageV3(msgParams, req, version);
  }

  async function signTypedDataV4(req, res) {
    if (!processTypedMessageV4) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const address = await validateAndNormalizeKeyholder(req.params[0], req);
    const message = req.params[1];
    const version = "V4";
    const msgParams = {
      data: message,
      from: address,
      version
    };
    res.result = await processTypedMessageV4(msgParams, req, version);
  }

  async function personalSign(req, res) {
    if (!processPersonalMessage) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    } // process normally


    const firstParam = req.params[0];
    const secondParam = req.params[1]; // non-standard "extraParams" to be appended to our "msgParams" obj

    const extraParams = req.params[2] || {}; // We initially incorrectly ordered these parameters.
    // To gracefully respect users who adopted this API early,
    // we are currently gracefully recovering from the wrong param order
    // when it is clearly identifiable.
    //
    // That means when the first param is definitely an address,
    // and the second param is definitely not, but is hex.

    let address, message;

    if (resemblesAddress(firstParam) && !resemblesAddress(secondParam)) {
      let warning = "The eth_personalSign method requires params ordered ";
      warning += "[message, address]. This was previously handled incorrectly, ";
      warning += "and has been corrected automatically. ";
      warning += "Please switch this param order for smooth behavior in the future.";
      res.warning = warning;
      address = firstParam;
      message = secondParam;
    } else {
      message = firstParam;
      address = secondParam;
    }

    address = await validateAndNormalizeKeyholder(address, req);

    const msgParams = _objectSpread(_objectSpread({}, extraParams), {}, {
      from: address,
      data: message
    }); // eslint-disable-next-line require-atomic-updates


    res.result = await processPersonalMessage(msgParams, req);
  }

  async function encryptionPublicKey(req, res) {
    if (!processEncryptionPublicKey) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const address = await validateAndNormalizeKeyholder(req.params[0], req);
    res.result = await processEncryptionPublicKey(address, req);
  }

  async function decryptMessage(req, res) {
    if (!processDecryptMessage) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    const ciphertext = req.params[0];
    const address = await validateAndNormalizeKeyholder(req.params[1], req);
    const extraParams = req.params[2] || {};

    const msgParams = _objectSpread(_objectSpread({}, extraParams), {}, {
      from: address,
      data: ciphertext
    });

    res.result = processDecryptMessage(msgParams, req);
  }

  async function fetchPrivateKey(req, res) {
    if (!getPrivateKey) {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }

    res.result = getPrivateKey(req);
  }

  return (0,openlogin_jrpc_namespaceObject.createScaffoldMiddleware)({
    // account lookups
    eth_accounts: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(lookupAccounts),
    eth_private_key: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(fetchPrivateKey),
    eth_coinbase: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(lookupDefaultAccount),
    // tx signatures
    eth_sendTransaction: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(sendTransaction),
    eth_signTransaction: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(signTransaction),
    // message signatures
    eth_sign: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(ethSign),
    eth_signTypedData: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(signTypedData),
    eth_signTypedData_v3: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(signTypedDataV3),
    eth_signTypedData_v4: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(signTypedDataV4),
    personal_sign: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(personalSign),
    eth_getEncryptionPublicKey: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(encryptionPublicKey),
    eth_decrypt: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(decryptMessage)
  });
}
;// CONCATENATED MODULE: ./src/rpc/ethRpcMiddlewares.ts



function createEthMiddleware(providerHandlers) {
  const {
    getAccounts,
    getPrivateKey,
    processTransaction,
    processSignTransaction,
    processEthSignMessage,
    processTypedMessage,
    processTypedMessageV3,
    processTypedMessageV4,
    processPersonalMessage,
    processEncryptionPublicKey,
    processDecryptMessage
  } = providerHandlers;
  const ethMiddleware = (0,openlogin_jrpc_namespaceObject.mergeMiddleware)([(0,openlogin_jrpc_namespaceObject.createScaffoldMiddleware)({
    eth_syncing: false
  }), createWalletMiddleware({
    getAccounts,
    getPrivateKey,
    processTransaction,
    processEthSignMessage,
    processSignTransaction,
    processTypedMessage,
    processTypedMessageV3,
    processTypedMessageV4,
    processPersonalMessage,
    processEncryptionPublicKey,
    processDecryptMessage
  })]);
  return ethMiddleware;
}
function createChainSwitchMiddleware(_ref) {
  let {
    addChain,
    switchChain
  } = _ref;

  async function addNewChain(req, res) {
    var _req$params;

    const chainParams = (_req$params = req.params) !== null && _req$params !== void 0 && _req$params.length ? req.params[0] : undefined;
    if (!chainParams) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing chain params");
    if (!chainParams.chainId) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing chainId in chainParams");
    if (!chainParams.rpcUrls || chainParams.rpcUrls.length === 0) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing rpcUrls in chainParams");
    if (!chainParams.nativeCurrency) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing nativeCurrency in chainParams");
    res.result = await addChain(chainParams);
  }

  async function updateChain(req, res) {
    var _req$params2;

    const chainParams = (_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.length ? req.params[0] : undefined;
    if (!chainParams) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing chainId");
    res.result = await switchChain(chainParams);
  }

  return (0,openlogin_jrpc_namespaceObject.createScaffoldMiddleware)({
    wallet_addEthereumChain: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(addNewChain),
    wallet_switchEthereumChain: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(updateChain)
  });
} // #region account middlewares

function createAccountMiddleware(_ref2) {
  let {
    updatePrivatekey
  } = _ref2;

  async function updateAccount(req, res) {
    var _req$params3;

    const accountParams = (_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.length ? req.params[0] : undefined;
    if (!(accountParams !== null && accountParams !== void 0 && accountParams.privateKey)) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("Missing privateKey");
    res.result = await updatePrivatekey(accountParams);
  }

  return (0,openlogin_jrpc_namespaceObject.createScaffoldMiddleware)({
    wallet_updateAccount: (0,openlogin_jrpc_namespaceObject.createAsyncMiddleware)(updateAccount)
  });
} // #endregion account middlewares
;// CONCATENATED MODULE: ./src/rpc/jrpcClient.ts


function createChainIdMiddleware(chainId) {
  return (req, res, next, end) => {
    if (req.method === "eth_chainId") {
      res.result = chainId;
      return end();
    }

    return next();
  };
}
function createProviderConfigMiddleware(providerConfig) {
  return (req, res, next, end) => {
    if (req.method === "eth_provider_config") {
      res.result = providerConfig;
      return end();
    }

    return next();
  };
}
function createJsonRpcClient(providerConfig) {
  const {
    chainId,
    rpcTarget
  } = providerConfig;
  const fetchMiddleware = (0,base_controllers_namespaceObject.createFetchMiddleware)({
    rpcTarget
  });
  const networkMiddleware = (0,openlogin_jrpc_namespaceObject.mergeMiddleware)([createChainIdMiddleware(chainId), createProviderConfigMiddleware(providerConfig), fetchMiddleware]);
  return {
    networkMiddleware,
    fetchMiddleware
  };
}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/walletConnectUtils.ts

function getProviderHandlers(_ref) {
  let {
    connector
  } = _ref;
  return {
    getPrivateKey: async () => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    getAccounts: async _ => {
      const {
        accounts
      } = connector;

      if (accounts && accounts.length) {
        return accounts;
      }

      throw new Error("Failed to get accounts");
    },
    processTransaction: async (txParams, _) => {
      const result = await connector.sendTransaction(txParams);
      return result;
    },
    processSignTransaction: async (txParams, _) => {
      const result = await connector.signTransaction(txParams);
      return result;
    },
    processEthSignMessage: async (msgParams, _) => {
      const result = await connector.signMessage([msgParams.from, msgParams.data]);
      return result;
    },
    processPersonalMessage: async (msgParams, _) => {
      const result = await connector.signPersonalMessage([msgParams.data, msgParams.from]);
      return result;
    },
    processTypedMessage: async (msgParams, _) => {
      const result = await connector.signTypedData([msgParams.from, msgParams.data]);
      return result;
    },
    processTypedMessageV3: async msgParams => {
      const result = await connector.signTypedData([msgParams.from, msgParams.data]);
      return result;
    },
    processTypedMessageV4: async msgParams => {
      const result = await connector.signTypedData([msgParams.from, msgParams.data]);
      return result;
    },
    processEncryptionPublicKey: async _ => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    },
    processDecryptMessage: _ => {
      throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.methodNotSupported();
    }
  };
}
;// CONCATENATED MODULE: ./src/providers/injectedProviders/WalletConnectProvider.ts


function WalletConnectProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function WalletConnectProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? WalletConnectProvider_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : WalletConnectProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }









class WalletConnectProvider extends base_provider_namespaceObject.BaseProvider {
  constructor(_ref) {
    let {
      config,
      state,
      connector
    } = _ref;
    super({
      config: {
        chainConfig: WalletConnectProvider_objectSpread(WalletConnectProvider_objectSpread({}, config.chainConfig), {}, {
          chainNamespace: base_namespaceObject.CHAIN_NAMESPACES.EIP155
        }),
        skipLookupNetwork: !!config.skipLookupNetwork
      },
      state: WalletConnectProvider_objectSpread(WalletConnectProvider_objectSpread({}, state || {}), {}, {
        chainId: "loading",
        accounts: []
      })
    });

    defineProperty_default()(this, "connector", null);

    this.connector = connector || null;
  }

  async enable() {
    if (!this.connector) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Connector is not initialized, pass wallet connect connector in constructor",
      code: 4902
    });
    await this.setupProvider(this.connector);
    return this._providerEngineProxy.request({
      method: "eth_accounts"
    });
  }

  async setupProvider(connector) {
    this.onConnectorStateUpdate(connector);
    await this.setupEngine(connector);
  }

  async switchChain(_ref2) {
    let {
      chainId,
      addChain = true,
      lookup = true
    } = _ref2;
    if (!this.connector) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Connector is not initialized, pass wallet connect connector in constructor",
      code: 4902
    });
    const currentChainConfig = this.getChainConfig(chainId);
    this.update({
      chainId: "loading"
    });
    const {
      rpcTarget,
      displayName
    } = currentChainConfig;

    if (addChain) {
      try {
        await this.connector.sendCustomRequest({
          method: "wallet_addEthereumChain",
          params: [{
            chainId,
            chainName: displayName,
            rpcUrls: [rpcTarget]
          }]
        });
      } catch (error) {
        base_namespaceObject.log.error(error);
      }
    }

    try {
      await this.connector.sendCustomRequest({
        method: "wallet_switchEthereumChain",
        params: [{
          chainId
        }]
      });
    } catch (error) {
      base_namespaceObject.log.error(error); // ignore this error because metamask & others return provider.result as null
      // wallet connect thinks this is wrong

      if (error.message !== "JSON RPC response format is invalid") {
        throw error;
      }
    }

    this.configure({
      chainConfig: currentChainConfig
    });
    if (lookup) await this.lookupNetwork(this.connector);
  }

  async addChain(chainConfig) {
    if (!this.connector) throw base_namespaceObject.WalletInitializationError.notReady("Wallet adapter is not ready yet");
    const {
      rpcTarget,
      displayName
    } = chainConfig;

    try {
      await this.connector.sendCustomRequest({
        method: "wallet_addEthereumChain",
        params: [{
          chainId: chainConfig.chainId,
          chainName: displayName,
          rpcUrls: [rpcTarget]
        }]
      });
      super.addChain(chainConfig);
    } catch (error) {
      base_namespaceObject.log.error(error);
      throw error;
    }
  }

  async lookupNetwork(connector) {
    if (!connector.connected) throw base_namespaceObject.WalletLoginError.notConnectedError("Wallet connect connector is not connected");
    if (!this.provider) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const {
      chainId
    } = this.config.chainConfig;
    const connectedHexChainId = (0,base_namespaceObject.isHexStrict)(connector.chainId.toString()) ? connector.chainId : "0x".concat(connector.chainId.toString(16));
    if (chainId !== connectedHexChainId) throw base_namespaceObject.WalletInitializationError.rpcConnectionError("Invalid network, net_version is: ".concat(connectedHexChainId, ", expected: ").concat(chainId));
    this.provider.emit("connect", {
      chainId
    });
    this.provider.emit("chainChanged", this.state.chainId);
    return connectedHexChainId;
  }

  async setupEngine(connector) {
    const providerHandlers = getProviderHandlers({
      connector
    });
    this.update({
      accounts: connector.accounts || []
    });
    const ethMiddleware = createEthMiddleware(providerHandlers);
    const engine = new openlogin_jrpc_namespaceObject.JRPCEngine();
    const {
      networkMiddleware
    } = createJsonRpcClient(this.config.chainConfig);
    engine.push(ethMiddleware);
    engine.push(networkMiddleware);
    const provider = (0,base_controllers_namespaceObject.providerFromEngine)(engine);
    this.updateProviderEngineProxy(provider);
    if (!this.config.skipLookupNetwork) await this.lookupNetwork(connector);
  }

  async onConnectorStateUpdate(connector) {
    connector.on("session_update", async (error, payload) => {
      if (!this.provider) throw base_namespaceObject.WalletLoginError.notConnectedError("Wallet connect connector is not connected");

      if (error) {
        this.provider.emit("error", error);
        return;
      }

      const {
        accounts,
        chainId: connectedChainId,
        rpcUrl
      } = payload.params[0]; // Check if accounts changed and trigger event

      if (accounts !== null && accounts !== void 0 && accounts.length && this.state.accounts[0] !== accounts[0]) {
        this.update({
          accounts
        }); // await this.setupEngine(connector);

        this.provider.emit("accountsChanged", accounts);
      }

      const connectedHexChainId = "0x".concat(connectedChainId.toString(16)); // Check if chainId changed and trigger event

      if (connectedChainId && this.state.chainId !== connectedHexChainId) {
        const maybeConfig = (0,base_namespaceObject.getChainConfig)(base_namespaceObject.CHAIN_NAMESPACES.EIP155, connectedChainId) || {}; // Handle rpcUrl update

        this.configure({
          chainConfig: WalletConnectProvider_objectSpread(WalletConnectProvider_objectSpread({}, maybeConfig), {}, {
            chainId: connectedHexChainId,
            rpcTarget: rpcUrl,
            chainNamespace: base_namespaceObject.CHAIN_NAMESPACES.EIP155
          })
        });
        await this.setupEngine(connector);
      }
    });
  }

}

defineProperty_default()(WalletConnectProvider, "getProviderInstance", async params => {
  const providerFactory = new WalletConnectProvider({
    config: {
      chainConfig: params.chainConfig,
      skipLookupNetwork: params.skipLookupNetwork
    }
  });
  await providerFactory.setupProvider(params.connector);
  return providerFactory;
});
;// CONCATENATED MODULE: ./src/providers/injectedProviders/index.ts

;// CONCATENATED MODULE: external "@ethereumjs/tx"
const tx_namespaceObject = require("@ethereumjs/tx");
;// CONCATENATED MODULE: external "@metamask/eth-sig-util"
const eth_sig_util_namespaceObject = require("@metamask/eth-sig-util");
;// CONCATENATED MODULE: external "ethereumjs-util"
const external_ethereumjs_util_namespaceObject = require("ethereumjs-util");
;// CONCATENATED MODULE: ./src/providers/privateKeyProviders/ethPrivatekeyUtils.ts







async function signTx(txParams, privKey, txFormatter) {
  const finalTxParams = await txFormatter.formatTransaction(txParams);
  const common = await txFormatter.getCommonConfiguration();
  const unsignedEthTx = tx_namespaceObject.TransactionFactory.fromTxData(finalTxParams, {
    common
  });
  const signedTx = unsignedEthTx.sign(Buffer.from(privKey, "hex")).serialize();
  return signedTx;
}

function ethPrivatekeyUtils_getProviderHandlers(_ref) {
  let {
    txFormatter,
    privKey,
    getProviderEngineProxy
  } = _ref;
  return {
    getAccounts: async _ => ["0x".concat((0,external_ethereumjs_util_namespaceObject.privateToAddress)(Buffer.from(privKey, "hex")).toString("hex"))],
    getPrivateKey: async _ => privKey,
    processTransaction: async (txParams, _) => {
      const providerEngineProxy = getProviderEngineProxy();
      if (!providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const signedTx = await signTx(txParams, privKey, txFormatter);
      const txHash = await providerEngineProxy.request({
        method: "eth_sendRawTransaction",
        params: ["0x".concat(signedTx.toString("hex"))]
      });
      return txHash;
    },
    processSignTransaction: async (txParams, _) => {
      const providerEngineProxy = getProviderEngineProxy();
      if (!providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const signedTx = await signTx(txParams, privKey, txFormatter);
      return "0x".concat(signedTx.toString("hex"));
    },
    processEthSignMessage: async (msgParams, _) => {
      const rawMessageSig = (0,base_controllers_namespaceObject.signMessage)(privKey, msgParams.data);
      return rawMessageSig;
    },
    processPersonalMessage: async (msgParams, _) => {
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = (0,eth_sig_util_namespaceObject.personalSign)({
        privateKey: privKeyBuffer,
        data: msgParams.data
      });
      return sig;
    },
    processTypedMessage: async (msgParams, _) => {
      base_namespaceObject.log.debug("processTypedMessage", msgParams);
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = (0,eth_sig_util_namespaceObject.signTypedData)({
        privateKey: privKeyBuffer,
        data: msgParams.data,
        version: eth_sig_util_namespaceObject.SignTypedDataVersion.V1
      });
      return sig;
    },
    processTypedMessageV3: async (msgParams, _) => {
      base_namespaceObject.log.debug("processTypedMessageV3", msgParams);
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = (0,eth_sig_util_namespaceObject.signTypedData)({
        privateKey: privKeyBuffer,
        data: msgParams.data,
        version: eth_sig_util_namespaceObject.SignTypedDataVersion.V3
      });
      return sig;
    },
    processTypedMessageV4: async (msgParams, _) => {
      base_namespaceObject.log.debug("processTypedMessageV4", msgParams);
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = (0,eth_sig_util_namespaceObject.signTypedData)({
        privateKey: privKeyBuffer,
        data: msgParams.data,
        version: eth_sig_util_namespaceObject.SignTypedDataVersion.V4
      });
      return sig;
    },
    processEncryptionPublicKey: async (address, _) => {
      base_namespaceObject.log.info("processEncryptionPublicKey", address);
      return (0,eth_sig_util_namespaceObject.getEncryptionPublicKey)(privKey);
    },
    processDecryptMessage: (msgParams, _) => {
      base_namespaceObject.log.info("processDecryptMessage", msgParams);
      const stripped = (0,external_ethereumjs_util_namespaceObject.stripHexPrefix)(msgParams.data);
      const buff = Buffer.from(stripped, "hex");
      const decrypted = (0,eth_sig_util_namespaceObject.decrypt)({
        encryptedData: JSON.parse(buff.toString("utf8")),
        privateKey: privKey
      });
      return decrypted;
    }
  };
}
;// CONCATENATED MODULE: external "@ethereumjs/common"
const common_namespaceObject = require("@ethereumjs/common");
var common_default = /*#__PURE__*/__webpack_require__.n(common_namespaceObject);
;// CONCATENATED MODULE: external "bignumber.js"
const external_bignumber_js_namespaceObject = require("bignumber.js");
var external_bignumber_js_default = /*#__PURE__*/__webpack_require__.n(external_bignumber_js_namespaceObject);
;// CONCATENATED MODULE: ./src/providers/converter.ts


// Big Number Constants
const BIG_NUMBER_WEI_MULTIPLIER = new (external_bignumber_js_default())("1e18");
const BIG_NUMBER_GWEI_MULTIPLIER = new (external_bignumber_js_default())("1e9");
const BIG_NUMBER_ETH_MULTIPLIER = new (external_bignumber_js_default())("1"); // Setter Maps

const toBigNumber = {
  hex: n => typeof n === "string" ? new (external_bignumber_js_default())((0,external_ethereumjs_util_namespaceObject.stripHexPrefix)(n), 16) : new (external_bignumber_js_default())(n, 16),
  dec: n => new (external_bignumber_js_default())(n, 10)
};
const toNormalizedDenomination = {
  WEI: bigNumber => bigNumber.div(BIG_NUMBER_WEI_MULTIPLIER),
  GWEI: bigNumber => bigNumber.div(BIG_NUMBER_GWEI_MULTIPLIER),
  ETH: bigNumber => bigNumber.div(BIG_NUMBER_ETH_MULTIPLIER)
};
const toSpecifiedDenomination = {
  WEI: bigNumber => bigNumber.times(BIG_NUMBER_WEI_MULTIPLIER).dp(0, (external_bignumber_js_default()).ROUND_HALF_UP),
  GWEI: bigNumber => bigNumber.times(BIG_NUMBER_GWEI_MULTIPLIER).dp(9, (external_bignumber_js_default()).ROUND_HALF_UP),
  ETH: bigNumber => bigNumber.times(BIG_NUMBER_ETH_MULTIPLIER).dp(9, (external_bignumber_js_default()).ROUND_HALF_UP)
};
const baseChange = {
  hex: n => n.toString(16),
  dec: n => new (external_bignumber_js_default())(n).toString(10)
};

const converter = params => {
  const {
    value,
    fromNumericBase,
    fromDenomination,
    toNumericBase,
    toDenomination,
    numberOfDecimals
  } = params;
  let convertedValue = toBigNumber[fromNumericBase](value);

  if (fromDenomination) {
    convertedValue = toNormalizedDenomination[fromDenomination](convertedValue);
  }

  if (toDenomination) {
    convertedValue = toSpecifiedDenomination[toDenomination](convertedValue);
  }

  if (numberOfDecimals) {
    convertedValue = convertedValue.dp(numberOfDecimals, (external_bignumber_js_default()).ROUND_HALF_DOWN);
  }

  if (toNumericBase) {
    convertedValue = baseChange[toNumericBase](convertedValue);
  }

  return convertedValue;
};

const conversionUtil = (value, _ref) => {
  let {
    fromNumericBase = "hex",
    toNumericBase,
    fromDenomination,
    toDenomination,
    numberOfDecimals
  } = _ref;
  return converter({
    fromNumericBase,
    toNumericBase,
    fromDenomination,
    toDenomination,
    numberOfDecimals,
    value: value || "0"
  });
};

function decGWEIToHexWEI(decGWEI) {
  return conversionUtil(decGWEI, {
    fromNumericBase: "dec",
    toNumericBase: "hex",
    fromDenomination: "GWEI",
    toDenomination: "WEI"
  });
}

function hexWEIToDecGWEI(decGWEI) {
  return conversionUtil(decGWEI, {
    fromNumericBase: "hex",
    toNumericBase: "dec",
    fromDenomination: "WEI",
    toDenomination: "GWEI"
  });
}


;// CONCATENATED MODULE: ./src/providers/utils.ts


function bnLessThan(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null;
  }

  return new external_bignumber_js_namespaceObject.BigNumber(a, 10).lt(b, 10);
}
function bnToHex(inputBn) {
  return (0,external_ethereumjs_util_namespaceObject.addHexPrefix)(inputBn.toString(16));
}
function hexToBn(inputHex) {
  if (external_bignumber_js_namespaceObject.BigNumber.isBigNumber(inputHex)) return inputHex;
  return new external_bignumber_js_namespaceObject.BigNumber((0,external_ethereumjs_util_namespaceObject.stripHexPrefix)(inputHex), 16);
}
function BnMultiplyByFraction(targetBN, numerator, denominator) {
  const numberBN = new external_bignumber_js_namespaceObject.BigNumber(numerator);
  const denomBN = new external_bignumber_js_namespaceObject.BigNumber(denominator);
  return targetBN.multipliedBy(numberBN).dividedBy(denomBN);
}
;// CONCATENATED MODULE: ./src/providers/privateKeyProviders/TransactionFormatter/constants.ts
const LegacyGasAPIEndpoint = "https://gas-api.metaswap.codefi.network/networks/<chain_id>/gasPrices";
const EIP1559APIEndpoint = "https://gas-api.metaswap.codefi.network/networks/<chain_id>/suggestedGasFees";
const TRANSACTION_ENVELOPE_TYPES = {
  LEGACY: "0x0",
  ACCESS_LIST: "0x1",
  FEE_MARKET: "0x2"
};
const TRANSACTION_TYPES = {
  SENT_ETHER: "sentEther",
  CONTRACT_INTERACTION: "contractInteraction",
  DEPLOY_CONTRACT: "contractDeployment",
  STANDARD_TRANSACTION: "transaction"
};
const GAS_ESTIMATE_TYPES = {
  FEE_MARKET: "fee-market",
  LEGACY: "legacy",
  ETH_GASPRICE: "eth_gasPrice",
  NONE: "none"
};
;// CONCATENATED MODULE: external "@toruslabs/http-helpers"
const http_helpers_namespaceObject = require("@toruslabs/http-helpers");
;// CONCATENATED MODULE: ./src/providers/privateKeyProviders/TransactionFormatter/utils.ts


function utils_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function utils_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? utils_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : utils_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



function normalizeGWEIDecimalNumbers(n) {
  const numberAsWEIHex = decGWEIToHexWEI(n);
  const numberAsGWEI = hexWEIToDecGWEI(numberAsWEIHex);
  return numberAsGWEI;
}
async function fetchEip1159GasEstimates(url) {
  const estimates = await (0,http_helpers_namespaceObject.get)(url);

  const normalizedEstimates = utils_objectSpread(utils_objectSpread({}, estimates), {}, {
    estimatedBaseFee: normalizeGWEIDecimalNumbers(estimates.estimatedBaseFee),
    low: utils_objectSpread(utils_objectSpread({}, estimates.low), {}, {
      suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.low.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.low.suggestedMaxFeePerGas)
    }),
    medium: utils_objectSpread(utils_objectSpread({}, estimates.medium), {}, {
      suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.medium.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.medium.suggestedMaxFeePerGas)
    }),
    high: utils_objectSpread(utils_objectSpread({}, estimates.high), {}, {
      suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.high.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.high.suggestedMaxFeePerGas)
    })
  });

  return normalizedEstimates;
}
/**
 * Hit the legacy MetaSwaps gasPrices estimate api and return the low, medium
 * high values from that API.
 */

async function fetchLegacyGasPriceEstimates(url) {
  const result = await (0,http_helpers_namespaceObject.get)(url, {
    referrer: url,
    referrerPolicy: "no-referrer-when-downgrade",
    method: "GET",
    mode: "cors"
  });
  return {
    low: result.SafeGasPrice,
    medium: result.ProposeGasPrice,
    high: result.FastGasPrice
  };
}
;// CONCATENATED MODULE: ./src/providers/privateKeyProviders/TransactionFormatter/index.ts


function TransactionFormatter_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function TransactionFormatter_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? TransactionFormatter_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : TransactionFormatter_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








class TransactionFormatter {
  constructor(_ref) {
    let {
      getProviderEngineProxy
    } = _ref;

    defineProperty_default()(this, "chainConfig", null);

    defineProperty_default()(this, "getProviderEngineProxy", void 0);

    defineProperty_default()(this, "isEIP1559Compatible", false);

    this.getProviderEngineProxy = getProviderEngineProxy;
  }

  get providerProxy() {
    return this.getProviderEngineProxy();
  }

  async init() {
    this.chainConfig = await this.providerProxy.request({
      method: "eth_provider_config",
      params: []
    });
    this.isEIP1559Compatible = await this.getEIP1559Compatibility();
  }

  async getCommonConfiguration() {
    if (!this.chainConfig) throw new Error("Chain config not initialized");
    const {
      displayName: name,
      chainId
    } = this.chainConfig;
    const hardfork = this.isEIP1559Compatible ? common_namespaceObject.Hardfork.London : common_namespaceObject.Hardfork.Berlin;
    const customChainParams = {
      name,
      chainId: chainId === "loading" ? 0 : Number.parseInt(chainId, 16),
      networkId: chainId === "loading" ? 0 : Number.parseInt(chainId, 16),
      defaultHardfork: hardfork
    };
    return common_default().custom(customChainParams);
  }

  async formatTransaction(txParams) {
    if (!this.chainConfig) throw new Error("Chain config not initialized");

    const clonedTxParams = TransactionFormatter_objectSpread({}, txParams);

    if (clonedTxParams.nonce === undefined) clonedTxParams.nonce = await this.providerProxy.request({
      method: "eth_getTransactionCount",
      params: [txParams.from, "latest"]
    });

    if (!this.isEIP1559Compatible && clonedTxParams.gasPrice) {
      if (clonedTxParams.maxFeePerGas) delete clonedTxParams.maxFeePerGas;
      if (clonedTxParams.maxPriorityFeePerGas) delete clonedTxParams.maxPriorityFeePerGas; // if gas is not provided explicitly, estimate it.

      if (!clonedTxParams.gas) {
        const defaultGasLimit = await this.getDefaultGasLimit(clonedTxParams);

        if (defaultGasLimit) {
          clonedTxParams.gasLimit = defaultGasLimit;
        }
      } else {
        clonedTxParams.gasLimit = clonedTxParams.gas;
      }

      return clonedTxParams;
    }

    if (!clonedTxParams.gas) {
      const defaultGasLimit = await this.getDefaultGasLimit(clonedTxParams);

      if (defaultGasLimit) {
        clonedTxParams.gasLimit = defaultGasLimit;
      }
    } else {
      clonedTxParams.gasLimit = clonedTxParams.gas;
    }

    const {
      gasPrice: defaultGasPrice,
      maxFeePerGas: defaultMaxFeePerGas,
      maxPriorityFeePerGas: defaultMaxPriorityFeePerGas
    } = await this.getDefaultGasFees(clonedTxParams);

    if (this.isEIP1559Compatible) {
      // If the dapp has suggested a gas price, but no maxFeePerGas or maxPriorityFeePerGas
      //  then we set maxFeePerGas and maxPriorityFeePerGas to the suggested gasPrice.
      if (clonedTxParams.gasPrice && !clonedTxParams.maxFeePerGas && !clonedTxParams.maxPriorityFeePerGas) {
        clonedTxParams.maxFeePerGas = clonedTxParams.gasPrice;
        clonedTxParams.maxPriorityFeePerGas = bnLessThan(typeof defaultMaxPriorityFeePerGas === "string" ? (0,external_ethereumjs_util_namespaceObject.stripHexPrefix)(defaultMaxPriorityFeePerGas) : defaultMaxPriorityFeePerGas, typeof clonedTxParams.gasPrice === "string" ? (0,external_ethereumjs_util_namespaceObject.stripHexPrefix)(clonedTxParams.gasPrice) : clonedTxParams.gasPrice) ? defaultMaxPriorityFeePerGas : clonedTxParams.gasPrice;
      } else {
        if (defaultMaxFeePerGas && !clonedTxParams.maxFeePerGas) {
          // If the dapp has not set the gasPrice or the maxFeePerGas, then we set maxFeePerGas
          // with the one returned by the gasFeeController, if that is available.
          clonedTxParams.maxFeePerGas = defaultMaxFeePerGas;
        }

        if (defaultMaxPriorityFeePerGas && !clonedTxParams.maxPriorityFeePerGas) {
          // If the dapp has not set the gasPrice or the maxPriorityFeePerGas, then we set maxPriorityFeePerGas
          // with the one returned by the gasFeeController, if that is available.
          clonedTxParams.maxPriorityFeePerGas = defaultMaxPriorityFeePerGas;
        }

        if (defaultGasPrice && !clonedTxParams.maxFeePerGas) {
          // If the dapp has not set the gasPrice or the maxFeePerGas, and no maxFeePerGas is available
          // then we set maxFeePerGas to the defaultGasPrice, assuming it is
          // available.
          clonedTxParams.maxFeePerGas = defaultGasPrice;
        }

        if (clonedTxParams.maxFeePerGas && !clonedTxParams.maxPriorityFeePerGas) {
          // If the dapp has not set the gasPrice or the maxPriorityFeePerGas, and no maxPriorityFeePerGas is
          // available  then we set maxPriorityFeePerGas to
          // clonedTxParams.maxFeePerGas, which will either be the gasPrice from the controller, the maxFeePerGas
          // set by the dapp, or the maxFeePerGas from the controller.
          clonedTxParams.maxPriorityFeePerGas = clonedTxParams.maxFeePerGas;
        }
      } // We remove the gasPrice param entirely when on an eip1559 compatible network


      delete clonedTxParams.gasPrice;
    } else {
      // We ensure that maxFeePerGas and maxPriorityFeePerGas are not in the transaction params
      // when not on a EIP1559 compatible network
      delete clonedTxParams.maxPriorityFeePerGas;
      delete clonedTxParams.maxFeePerGas;
    } // If we have gotten to this point, and none of gasPrice, maxPriorityFeePerGas or maxFeePerGas are
    // set on txParams, it means that either we are on a non-EIP1559 network and the dapp didn't suggest
    // a gas price, or we are on an EIP1559 network, and none of gasPrice, maxPriorityFeePerGas or maxFeePerGas
    // were available from either the dapp or the network.


    if (defaultGasPrice && !clonedTxParams.gasPrice && !clonedTxParams.maxPriorityFeePerGas && !clonedTxParams.maxFeePerGas) {
      clonedTxParams.gasPrice = defaultGasPrice;
    }

    clonedTxParams.type = this.isEIP1559Compatible ? TRANSACTION_ENVELOPE_TYPES.FEE_MARKET : TRANSACTION_ENVELOPE_TYPES.LEGACY;
    clonedTxParams.chainId = this.chainConfig.chainId;
    return clonedTxParams;
  }

  async fetchEthGasPriceEstimate() {
    const gasPrice = await this.providerProxy.request({
      method: "eth_gasPrice",
      params: []
    });
    return {
      gasPrice: hexWEIToDecGWEI(gasPrice).toString()
    };
  }

  async getEIP1559Compatibility() {
    const latestBlock = await this.providerProxy.request({
      method: "eth_getBlockByNumber",
      params: ["latest", false]
    });
    const supportsEIP1559 = latestBlock && latestBlock.baseFeePerGas !== undefined;
    return !!supportsEIP1559;
  }

  async fetchGasFeeEstimateData() {
    if (!this.chainConfig) throw new Error("Chain config not initialized");
    const isLegacyGasAPICompatible = this.chainConfig.chainId === "0x1";
    const chainId = Number.parseInt(this.chainConfig.chainId, 16);
    let gasData;

    try {
      if (this.isEIP1559Compatible) {
        // TODO: kovan is not working due to a bug in metamask api
        const estimates = await fetchEip1159GasEstimates(EIP1559APIEndpoint.replace("<chain_id>", "".concat(chainId)));
        gasData = {
          gasFeeEstimates: estimates,
          gasEstimateType: GAS_ESTIMATE_TYPES.FEE_MARKET
        };
      } else if (isLegacyGasAPICompatible) {
        const estimates = await fetchLegacyGasPriceEstimates(LegacyGasAPIEndpoint.replace("<chain_id>", "".concat(chainId)));
        gasData = {
          gasFeeEstimates: estimates,
          gasEstimateType: GAS_ESTIMATE_TYPES.LEGACY
        };
      } else {
        throw new Error("Main gas fee/price estimation failed. Use fallback");
      }
    } catch (e) {
      try {
        const estimates = await this.fetchEthGasPriceEstimate();
        gasData = {
          gasFeeEstimates: estimates,
          gasEstimateType: GAS_ESTIMATE_TYPES.ETH_GASPRICE
        };
      } catch (error) {
        throw new Error("Gas fee/price estimation failed. Message: ".concat(error.message));
      }
    }

    return gasData;
  }

  async getDefaultGasFees(txParams) {
    if (!this.isEIP1559Compatible && txParams.gasPrice || this.isEIP1559Compatible && txParams.maxFeePerGas && txParams.maxPriorityFeePerGas) {
      return {};
    }

    try {
      const {
        gasFeeEstimates,
        gasEstimateType
      } = await this.fetchGasFeeEstimateData();

      if (this.isEIP1559Compatible && gasEstimateType === GAS_ESTIMATE_TYPES.FEE_MARKET) {
        const {
          medium: {
            suggestedMaxPriorityFeePerGas,
            suggestedMaxFeePerGas
          } = {}
        } = gasFeeEstimates;

        if (suggestedMaxPriorityFeePerGas && suggestedMaxFeePerGas) {
          return {
            maxFeePerGas: (0,external_ethereumjs_util_namespaceObject.addHexPrefix)(decGWEIToHexWEI(suggestedMaxFeePerGas)),
            maxPriorityFeePerGas: (0,external_ethereumjs_util_namespaceObject.addHexPrefix)(decGWEIToHexWEI(suggestedMaxPriorityFeePerGas))
          };
        }
      } else if (gasEstimateType === GAS_ESTIMATE_TYPES.LEGACY) {
        // The LEGACY type includes low, medium and high estimates of
        // gas price values.
        return {
          gasPrice: decGWEIToHexWEI(gasFeeEstimates.medium)
        };
      } else if (gasEstimateType === GAS_ESTIMATE_TYPES.ETH_GASPRICE) {
        // The ETH_GASPRICE type just includes a single gas price property,
        // which we can assume was retrieved from eth_gasPrice
        return {
          gasPrice: (0,external_ethereumjs_util_namespaceObject.addHexPrefix)(decGWEIToHexWEI(gasFeeEstimates.gasPrice))
        };
      }
    } catch (error) {
      base_namespaceObject.log.error(error);
    }

    const {
      gasPrice
    } = await this.fetchEthGasPriceEstimate();
    return {
      gasPrice: (0,external_ethereumjs_util_namespaceObject.addHexPrefix)(decGWEIToHexWEI(gasPrice))
    };
  }

  async estimateTxGas(txMeta) {
    const txParams = TransactionFormatter_objectSpread({}, txMeta); // `eth_estimateGas` can fail if the user has insufficient balance for the
    // value being sent, or for the gas cost. We don't want to check their
    // balance here, we just want the gas estimate. The gas price is removed
    // to skip those balance checks. We check balance elsewhere. We also delete
    // maxFeePerGas and maxPriorityFeePerGas to support EIP-1559 txs.


    delete txParams.gasPrice;
    delete txParams.maxFeePerGas;
    delete txParams.maxPriorityFeePerGas;
    const gas = await this.providerProxy.request({
      method: "eth_estimateGas",
      params: [txParams]
    });
    return gas;
  }

  async analyzeGasUsage(txMeta) {
    const block = await this.providerProxy.request({
      method: "eth_getBlockByNumber",
      params: ["latest", false]
    }); // fallback to block gasLimit

    const blockGasLimitBN = hexToBn(block.gasLimit);
    const saferGasLimitBN = BnMultiplyByFraction(blockGasLimitBN, 19, 20);
    let estimatedGasHex = bnToHex(saferGasLimitBN);

    try {
      estimatedGasHex = await this.estimateTxGas(txMeta);
    } catch (error) {
      base_namespaceObject.log.warn(error);
    }

    return {
      blockGasLimit: block.gasLimit,
      estimatedGasHex
    };
  }

  addGasBuffer(initialGasLimitHex, blockGasLimitHex) {
    let multiplier = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1.5;
    const initialGasLimitBn = hexToBn(initialGasLimitHex);
    const blockGasLimitBn = hexToBn(blockGasLimitHex);
    const upperGasLimitBn = blockGasLimitBn.multipliedBy(0.9).dp(0, 1);
    const bufferedGasLimitBn = initialGasLimitBn.multipliedBy(multiplier).dp(0, 1); // if initialGasLimit is above blockGasLimit, dont modify it

    if (initialGasLimitBn.gt(upperGasLimitBn)) return bnToHex(initialGasLimitBn); // if bufferedGasLimit is below blockGasLimit, use bufferedGasLimit

    if (bufferedGasLimitBn.lt(upperGasLimitBn)) return bnToHex(bufferedGasLimitBn); // otherwise use blockGasLimit

    return bnToHex(upperGasLimitBn);
  }

  async determineTransactionCategory(txParameters) {
    const {
      data,
      to
    } = txParameters;
    let code = "";
    let txCategory;

    if (data && !to) {
      txCategory = TRANSACTION_TYPES.DEPLOY_CONTRACT;
    } else {
      try {
        code = await this.providerProxy.request({
          method: "eth_getCode",
          params: [to, "latest"]
        });
      } catch (error) {
        base_namespaceObject.log.warn(error);
      }

      const codeIsEmpty = !code || code === "0x" || code === "0x0";
      txCategory = codeIsEmpty ? TRANSACTION_TYPES.SENT_ETHER : TRANSACTION_TYPES.CONTRACT_INTERACTION;
    }

    return {
      transactionCategory: txCategory,
      code
    };
  }

  async getDefaultGasLimit(txParams) {
    const {
      transactionCategory
    } = await this.determineTransactionCategory(TransactionFormatter_objectSpread({}, txParams));

    if (txParams.gas) {
      return txParams.gas;
    }

    if (txParams.to && transactionCategory === TRANSACTION_TYPES.SENT_ETHER) {
      // if there's data in the params, but there's no contract code, it's not a valid transaction
      if (txParams.data) {
        throw Error("TxGasUtil - Trying to call a function on a non-contract address");
      }

      const TWENTY_ONE_THOUSAND = 21000; // This is a standard ether simple send, gas requirement is exactly 21k

      return (0,external_ethereumjs_util_namespaceObject.addHexPrefix)(TWENTY_ONE_THOUSAND.toString(16));
    }

    const {
      blockGasLimit,
      estimatedGasHex
    } = await this.analyzeGasUsage(txParams); // add additional gas buffer to our estimation for safety

    const gasLimit = this.addGasBuffer((0,external_ethereumjs_util_namespaceObject.addHexPrefix)(estimatedGasHex), blockGasLimit);
    return gasLimit;
  }

}
;// CONCATENATED MODULE: ./src/providers/privateKeyProviders/EthereumPrivateKeyProvider.ts


function EthereumPrivateKeyProvider_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function EthereumPrivateKeyProvider_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? EthereumPrivateKeyProvider_ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : EthereumPrivateKeyProvider_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }










class EthereumPrivateKeyProvider extends base_provider_namespaceObject.BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: EthereumPrivateKeyProvider_objectSpread(EthereumPrivateKeyProvider_objectSpread({}, config.chainConfig), {}, {
          chainNamespace: base_namespaceObject.CHAIN_NAMESPACES.EIP155
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
    const txFormatter = new TransactionFormatter({
      getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
    });
    const providerHandlers = ethPrivatekeyUtils_getProviderHandlers({
      txFormatter,
      privKey,
      getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
    });
    const ethMiddleware = createEthMiddleware(providerHandlers);
    const chainSwitchMiddleware = this.getChainSwitchMiddleware();
    const engine = new openlogin_jrpc_namespaceObject.JRPCEngine(); // Not a partial anymore because of checks in ctor

    const {
      networkMiddleware
    } = createJsonRpcClient(this.config.chainConfig);
    engine.push(ethMiddleware);
    engine.push(chainSwitchMiddleware);
    engine.push(this.getAccountMiddleware());
    engine.push(networkMiddleware);
    const provider = (0,base_controllers_namespaceObject.providerFromEngine)(engine);
    this.updateProviderEngineProxy(provider);
    await txFormatter.init();
    await this.lookupNetwork();
  }

  async updateAccount(params) {
    if (!this._providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const existingKey = await this._providerEngineProxy.request({
      method: "eth_private_key"
    });

    if (existingKey !== params.privateKey) {
      await this.setupProvider(params.privateKey);

      this._providerEngineProxy.emit("accountsChanged", {
        accounts: await this._providerEngineProxy.request({
          method: "eth_accounts"
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
      method: "eth_private_key"
    });
    await this.setupProvider(privKey);
  }

  async lookupNetwork() {
    if (!this._providerEngineProxy) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const {
      chainId
    } = this.config.chainConfig;
    if (!chainId) throw external_eth_rpc_errors_namespaceObject.ethErrors.rpc.invalidParams("chainId is required while lookupNetwork");
    const network = await this._providerEngineProxy.request({
      method: "net_version",
      params: []
    });
    if (parseInt(chainId, 16) !== parseInt(network, 10)) throw external_eth_rpc_errors_namespaceObject.ethErrors.provider.chainDisconnected("Invalid network, net_version is: ".concat(network));

    if (this.state.chainId !== chainId) {
      this._providerEngineProxy.emit("chainChanged", chainId);

      this._providerEngineProxy.emit("connect", {
        chainId
      });
    }

    this.update({
      chainId
    });
    return network;
  }

  getChainSwitchMiddleware() {
    const chainSwitchHandlers = {
      addChain: async params => {
        const {
          chainId,
          chainName,
          rpcUrls,
          blockExplorerUrls,
          nativeCurrency
        } = params;
        this.addChain({
          chainNamespace: "eip155",
          chainId,
          ticker: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.symbol) || "ETH",
          tickerName: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.name) || "Ether",
          displayName: chainName,
          rpcTarget: rpcUrls[0],
          blockExplorer: (blockExplorerUrls === null || blockExplorerUrls === void 0 ? void 0 : blockExplorerUrls[0]) || ""
        });
      },
      switchChain: async params => {
        const {
          chainId
        } = params;
        await this.switchChain({
          chainId
        });
      }
    };
    const chainSwitchMiddleware = createChainSwitchMiddleware(chainSwitchHandlers);
    return chainSwitchMiddleware;
  }

  getAccountMiddleware() {
    const accountHandlers = {
      updatePrivatekey: async params => {
        const {
          privateKey
        } = params;
        await this.updateAccount({
          privateKey
        });
      }
    };
    return createAccountMiddleware(accountHandlers);
  }

}

defineProperty_default()(EthereumPrivateKeyProvider, "getProviderInstance", async params => {
  const providerFactory = new EthereumPrivateKeyProvider({
    config: {
      chainConfig: params.chainConfig
    }
  });
  await providerFactory.setupProvider(params.privKey);
  return providerFactory;
});
;// CONCATENATED MODULE: ./src/providers/privateKeyProviders/index.ts

;// CONCATENATED MODULE: ./src/providers/index.ts


;// CONCATENATED MODULE: ./src/index.ts

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=ethereumProvider.cjs.js.map
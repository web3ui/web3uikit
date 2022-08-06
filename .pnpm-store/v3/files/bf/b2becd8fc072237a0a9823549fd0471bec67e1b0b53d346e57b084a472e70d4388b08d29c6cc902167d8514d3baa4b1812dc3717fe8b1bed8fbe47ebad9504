import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createFetchMiddleware, providerFromEngine } from '@toruslabs/base-controllers';
import { mergeMiddleware, createAsyncMiddleware, JRPCEngine } from '@toruslabs/openlogin-jrpc';
import { CHAIN_NAMESPACES, isHexStrict, WalletInitializationError } from '@web3auth/base';
import { BaseProvider } from '@web3auth/base-provider';
import bs58 from 'bs58';
import { ethErrors } from 'eth-rpc-errors';
import { PublicKey, Connection, Keypair } from '@solana/web3.js';
import nacl from '@toruslabs/tweetnacl-js';

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
  return mergeMiddleware([createChainIdMiddleware(chainId), createProviderConfigMiddleware(providerConfig)]);
}
function createJsonRpcClient(providerConfig) {
  const {
    rpcTarget
  } = providerConfig;
  const fetchMiddleware = createFetchMiddleware({
    rpcTarget
  });
  const networkMiddleware = mergeMiddleware([createConfigMiddleware(providerConfig), fetchMiddleware]);
  return {
    networkMiddleware,
    fetchMiddleware
  };
}

function createGetAccountsMiddleware(_ref) {
  let {
    getAccounts
  } = _ref;
  return createAsyncMiddleware(async (request, response, next) => {
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
  return createAsyncMiddleware(async (request, response, next) => {
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
  return createAsyncMiddleware(async (request, response, next) => {
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
  return mergeMiddleware([createRequestAccountsMiddleware({
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
  return mergeMiddleware([createGenericJRPCMiddleware("addSolanaChain", addNewChainConfig), createGenericJRPCMiddleware("switchSolanaChain", switchSolanaChain)]);
}
function createAccountMiddleware(_ref4) {
  let {
    updatePrivatekey
  } = _ref4;
  return mergeMiddleware([createGenericJRPCMiddleware("updateAccount", updatePrivatekey)]);
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class BaseInjectedProvider extends BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: _objectSpread$3(_objectSpread$3({}, config.chainConfig), {}, {
          chainNamespace: CHAIN_NAMESPACES.SOLANA
        })
      },
      state
    });
  }

  async switchChain(_) {
    return Promise.resolve();
  }

  async setupProvider(injectedProvider) {
    const engine = new JRPCEngine();
    const providerHandlers = this.getProviderHandlers(injectedProvider);
    const solanaMiddleware = createSolanaMiddleware(providerHandlers);
    engine.push(solanaMiddleware);
    const configMiddleware = createConfigMiddleware(this.config.chainConfig);
    engine.push(configMiddleware);
    const injectedProviderProxy = this.getInjectedProviderProxy(injectedProvider);

    if (injectedProviderProxy) {
      engine.push(injectedProviderProxy);
    }

    const provider = providerFromEngine(engine);
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

const getBaseProviderHandlers = injectedProvider => {
  const providerHandlers = {
    requestAccounts: async () => {
      return injectedProvider.publicKey ? [bs58.encode(injectedProvider.publicKey.toBytes())] : [];
    },
    getAccounts: async () => injectedProvider.publicKey ? [bs58.encode(injectedProvider.publicKey.toBytes())] : [],
    getPrivateKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
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
        throw ethErrors.rpc.invalidParams("message");
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

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function createInjectedProviderProxyMiddleware(provider) {
  return createAsyncMiddleware(async (req, res, _next) => {
    const result = await provider.request(_objectSpread$2({}, req));
    res.result = result;
  });
}

class PhantomInjectedProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getBaseProviderHandlers(injectedProvider);
  }

  getInjectedProviderProxy(injectedProvider) {
    return createInjectedProviderProxyMiddleware(injectedProvider);
  }

}

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
      throw ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    signTransaction: async req => {
      const txMessage = req.params.message;
      if (!txMessage) throw ethErrors.rpc.invalidRequest({
        message: "Invalid transaction message"
      });
      const {
        data
      } = await injectedProvider.signTransaction(bs58.encode(txMessage.serializeMessage()));
      if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
      const publicKey = new PublicKey(data.publicKey);
      const signature = bs58.decode(data.signature);
      txMessage.addSignature(publicKey, signature);
      return txMessage;
    },
    signMessage: async req => {
      const response = await injectedProvider.signMessage(req.params.message);
      return bs58.decode(response.data.signature);
    },
    signAndSendTransaction: async req => {
      const provider = getProviderEngineProxy();
      if (!provider) throw ethErrors.provider.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const txMessage = req.params.message;
      if (!txMessage) throw ethErrors.rpc.invalidRequest({
        message: "Invalid transaction message"
      });
      const {
        data
      } = await injectedProvider.signTransaction(bs58.encode(txMessage.serializeMessage()));
      if (!data.publicKey || !data.signature) throw new Error("Invalid signature from slope wallet");
      const publicKey = new PublicKey(data.publicKey);
      const signature = bs58.decode(data.signature);
      txMessage.addSignature(publicKey, signature);
      const chainConfig = await provider.request({
        method: "solana_provider_config",
        params: []
      });
      const conn = new Connection(chainConfig.rpcTarget);
      const res = await conn.sendRawTransaction(txMessage.serialize());
      return {
        signature: res
      };
    },
    signAllTransactions: async req => {
      var _req$params, _req$params2, _data$signatures;

      if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message) || !((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message.length)) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const allTxns = req.params.message;
      const {
        length
      } = allTxns;
      const unsignedTx = [];

      for (let i = 0; i < length; i++) {
        unsignedTx.push(bs58.encode(req.params.message[i].serializeMessage()));
      }

      const {
        msg,
        data
      } = await injectedProvider.signAllTransactions(unsignedTx);
      if (!data.publicKey || ((_data$signatures = data.signatures) === null || _data$signatures === void 0 ? void 0 : _data$signatures.length) !== length) throw new Error(msg);
      const publicKey = new PublicKey(data.publicKey);

      for (let i = 0; i < length; i++) {
        const signature = bs58.decode(data.signatures[i]);
        allTxns[i].addSignature(publicKey, signature);
      }

      return allTxns;
    }
  };
  return providerHandlers;
};

class SlopeInjectedProxyProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getSlopeHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }

}

const getSolflareHandlers = (injectedProvider, getProviderEngineProxy) => {
  const solflareProviderHandlers = getBaseProviderHandlers(injectedProvider);

  solflareProviderHandlers.signAndSendTransaction = async req => {
    const provider = getProviderEngineProxy();
    if (!provider) throw ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const transaction = await injectedProvider.signTransaction(req.params.message);
    const chainConfig = await provider.request({
      method: "solana_provider_config",
      params: []
    });
    const conn = new Connection(chainConfig.rpcTarget);
    const res = await conn.sendRawTransaction(transaction.serialize());
    return {
      signature: res
    };
  };

  return solflareProviderHandlers;
};

class SolflareInjectedProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getSolflareHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }

}

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
    if (!provider) throw ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const transaction = await injectedProvider.signTransaction(req.params.message);
    const chainConfig = await provider.request({
      method: "solana_provider_config",
      params: []
    });
    const conn = new Connection(chainConfig.rpcTarget);
    const res = await conn.sendRawTransaction(transaction.serialize());
    return {
      signature: res
    };
  };

  return providerHandlers;
};

class SolletInjectedProvider extends BaseInjectedProvider {
  getProviderHandlers(injectedProvider) {
    return getSolletHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }

}

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
      throw ethErrors.rpc.methodNotSupported();
    },
    getSecretKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
    },
    signMessage: async req => {
      var _req$params;

      if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message)) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const message = await injectedProvider.signMessage(req.params.message);
      return message;
    },
    signTransaction: async req => {
      var _req$params2;

      if (!((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message)) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const txMessage = req.params.message;
      const response = await injectedProvider.signTransaction(txMessage);
      return response;
    },
    signAndSendTransaction: async req => {
      var _req$params3;

      if (!((_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.message)) {
        throw ethErrors.rpc.invalidParams("message");
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
        throw ethErrors.rpc.invalidParams("message");
      }

      const transactions = req.params.message;
      const response = await injectedProvider.signAllTransactions(transactions);
      return response;
    }
  };
  return providerHandlers;
};

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class TorusInjectedProvider extends BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: _objectSpread$1(_objectSpread$1({}, config.chainConfig), {}, {
          chainNamespace: CHAIN_NAMESPACES.SOLANA
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
    if (!this.provider) throw ethErrors.provider.custom({
      message: "Torus solana provider is not initialized",
      code: 4902
    });
    const {
      chainId
    } = this.config.chainConfig;
    const connectedChainId = await this.provider.request({
      method: "solana_chainId"
    });
    const connectedHexChainId = isHexStrict(connectedChainId.toString()) ? connectedChainId : "0x".concat(parseInt(connectedChainId, 10).toString(16));
    if (chainId !== connectedHexChainId) throw WalletInitializationError.rpcConnectionError("Invalid network, net_version is: ".concat(connectedHexChainId, ", expected: ").concat(chainId));
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
    const engine = new JRPCEngine();
    engine.push(solanaMiddleware);
    engine.push(injectedProviderProxy);
    const provider = providerFromEngine(engine);
    this.updateProviderEngineProxy(provider);
    await this.lookupNetwork();
  }

  async handleInjectedProviderUpdate(injectedProvider) {
    injectedProvider.on("accountsChanged", async accounts => {
      this.provider.emit("accountsChanged", accounts);
    });
    injectedProvider.on("chainChanged", async chainId => {
      const connectedHexChainId = isHexStrict(chainId) ? chainId : "0x".concat(parseInt(chainId, 10).toString(16)); // Check if chainId changed and trigger event

      this.configure({
        chainConfig: _objectSpread$1(_objectSpread$1({}, this.config.chainConfig), {}, {
          chainId: connectedHexChainId
        })
      });
      await this.setupProvider(injectedProvider);
    });
  }

}

async function getProviderHandlers(_ref) {
  let {
    privKey,
    getProviderEngineProxy
  } = _ref;

  const keyPairGenerator = () => {
    return Keypair.fromSecretKey(Buffer.from(privKey, "hex"));
  };

  if (typeof privKey !== "string") throw WalletInitializationError.invalidParams("privKey must be a string");
  const keyPair = keyPairGenerator();
  const providerHandlers = {
    requestAccounts: async () => {
      return [keyPair.publicKey.toBase58()];
    },
    getAccounts: async () => [keyPair.publicKey.toBase58()],
    getPrivateKey: async () => privKey,
    getSecretKey: async () => bs58.encode(keyPair.secretKey),
    signTransaction: async req => {
      var _req$params;

      if (!((_req$params = req.params) !== null && _req$params !== void 0 && _req$params.message)) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const transaction = req.params.message;
      transaction.partialSign(keyPair);
      return transaction;
    },
    signMessage: async req => {
      var _req$params2;

      if (!((_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.message)) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const signedMsg = nacl.sign.detached(req.params.message, keyPair.secretKey);
      return signedMsg;
    },
    signAndSendTransaction: async req => {
      var _req$params3;

      if (!((_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.message)) {
        throw ethErrors.rpc.invalidParams("message");
      }

      const _providerEngineProxy = getProviderEngineProxy();

      if (!_providerEngineProxy) throw ethErrors.provider.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const transaction = req.params.message;
      transaction.sign(keyPair);
      const sig = await _providerEngineProxy.request({
        method: "sendTransaction",
        params: [bs58.encode(transaction.serialize())]
      });
      return {
        signature: sig
      };
    },
    signAllTransactions: async req => {
      var _req$params4, _req$params5, _req$params6;

      if (!((_req$params4 = req.params) !== null && _req$params4 !== void 0 && _req$params4.message) || !((_req$params5 = req.params) !== null && _req$params5 !== void 0 && _req$params5.message.length)) {
        throw ethErrors.rpc.invalidParams("message");
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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class SolanaPrivateKeyProvider extends BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: _objectSpread(_objectSpread({}, config.chainConfig), {}, {
          chainNamespace: CHAIN_NAMESPACES.SOLANA
        })
      },
      state
    });
  }

  async enable() {
    if (!this.state.privateKey) throw ethErrors.provider.custom({
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
    const engine = new JRPCEngine();
    const {
      networkMiddleware
    } = createJsonRpcClient(this.config.chainConfig);
    engine.push(this.getChainSwitchMiddleware());
    engine.push(this.getAccountMiddleware());
    engine.push(solanaMiddleware);
    engine.push(networkMiddleware);
    const provider = providerFromEngine(engine);
    this.updateProviderEngineProxy(provider);
    await this.lookupNetwork();
  }

  async updateAccount(params) {
    if (!this._providerEngineProxy) throw ethErrors.provider.custom({
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
    if (!this._providerEngineProxy) throw ethErrors.provider.custom({
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
    if (!this._providerEngineProxy) throw ethErrors.provider.custom({
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
    if (health !== "ok") throw WalletInitializationError.rpcConnectionError("Failed to lookup network for following rpc target: ".concat(chainConfig.rpcTarget));
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
        if (!req.params) throw ethErrors.rpc.invalidParams("Missing request params");
        const {
          chainId,
          chainName,
          rpcUrls,
          blockExplorerUrls,
          nativeCurrency
        } = req.params;
        if (!chainId) throw ethErrors.rpc.invalidParams("Missing chainId in chainParams");
        if (!rpcUrls || rpcUrls.length === 0) throw ethErrors.rpc.invalidParams("Missing rpcUrls in chainParams");
        if (!nativeCurrency) throw ethErrors.rpc.invalidParams("Missing nativeCurrency in chainParams");
        this.addChain({
          chainNamespace: CHAIN_NAMESPACES.SOLANA,
          chainId,
          ticker: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.symbol) || "SOL",
          tickerName: (nativeCurrency === null || nativeCurrency === void 0 ? void 0 : nativeCurrency.name) || "Solana",
          displayName: chainName,
          rpcTarget: rpcUrls[0],
          blockExplorer: (blockExplorerUrls === null || blockExplorerUrls === void 0 ? void 0 : blockExplorerUrls[0]) || ""
        });
      },
      switchSolanaChain: async req => {
        if (!req.params) throw ethErrors.rpc.invalidParams("Missing request params");
        if (!req.params.chainId) throw ethErrors.rpc.invalidParams("Missing chainId");
        await this.switchChain(req.params);
      }
    };
    const chainSwitchMiddleware = createChainSwitchMiddleware(chainSwitchHandlers);
    return chainSwitchMiddleware;
  }

  getAccountMiddleware() {
    const accountHandlers = {
      updatePrivatekey: async req => {
        if (!req.params) throw ethErrors.rpc.invalidParams("Missing request params");
        if (!req.params.privateKey) throw ethErrors.rpc.invalidParams("Missing privateKey");
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

_defineProperty(SolanaPrivateKeyProvider, "getProviderInstance", async params => {
  const providerFactory = new SolanaPrivateKeyProvider({
    config: {
      chainConfig: params.chainConfig
    }
  });
  await providerFactory.setupProvider(params.privKey);
  return providerFactory;
});

class SolanaWallet {
  constructor(provider) {
    _defineProperty(this, "provider", void 0);

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

export { PhantomInjectedProvider, SlopeInjectedProxyProvider, SolanaPrivateKeyProvider, SolanaWallet, SolflareInjectedProvider, SolletInjectedProvider, TorusInjectedProvider };
//# sourceMappingURL=solanaProvider.esm.js.map

import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { createFetchMiddleware, providerFromEngine, signMessage } from '@toruslabs/base-controllers';
import { createScaffoldMiddleware, createAsyncMiddleware, mergeMiddleware, JRPCEngine } from '@toruslabs/openlogin-jrpc';
import { CHAIN_NAMESPACES, log, WalletInitializationError, WalletLoginError, isHexStrict, getChainConfig } from '@web3auth/base';
import { BaseProvider } from '@web3auth/base-provider';
import { ethErrors } from 'eth-rpc-errors';
import { TransactionFactory } from '@ethereumjs/tx';
import { personalSign, signTypedData, SignTypedDataVersion, getEncryptionPublicKey, decrypt } from '@metamask/eth-sig-util';
import { privateToAddress, stripHexPrefix, addHexPrefix } from 'ethereumjs-util';
import Common, { Hardfork } from '@ethereumjs/common';
import BigNumber, { BigNumber as BigNumber$1 } from 'bignumber.js';
import { get } from '@toruslabs/http-helpers';

function ownKeys$4(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$4(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$4(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$4(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

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

    throw ethErrors.rpc.invalidParams({
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
      throw ethErrors.rpc.methodNotSupported();
    }

    const txParams = req.params[0] || {
      from: ""
    };
    txParams.from = await validateAndNormalizeKeyholder(txParams.from, req);
    res.result = await processTransaction(txParams, req);
  }

  async function signTransaction(req, res) {
    if (!processSignTransaction) {
      throw ethErrors.rpc.methodNotSupported();
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
      throw ethErrors.rpc.methodNotSupported();
    }

    const address = await validateAndNormalizeKeyholder(req.params[0], req);
    const message = req.params[1];
    const extraParams = req.params[2] || {};

    const msgParams = _objectSpread$4(_objectSpread$4({}, extraParams), {}, {
      from: address,
      data: message
    });

    res.result = await processEthSignMessage(msgParams, req);
  }

  async function signTypedData(req, res) {
    if (!processTypedMessage) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const message = req.params[0];
    const address = await validateAndNormalizeKeyholder(req.params[1], req);
    const version = "V1";
    const extraParams = req.params[2] || {};

    const msgParams = _objectSpread$4(_objectSpread$4({}, extraParams), {}, {
      from: address,
      data: message
    });

    res.result = await processTypedMessage(msgParams, req, version);
  }

  async function signTypedDataV3(req, res) {
    if (!processTypedMessageV3) {
      throw ethErrors.rpc.methodNotSupported();
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
      throw ethErrors.rpc.methodNotSupported();
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
      throw ethErrors.rpc.methodNotSupported();
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

    const msgParams = _objectSpread$4(_objectSpread$4({}, extraParams), {}, {
      from: address,
      data: message
    }); // eslint-disable-next-line require-atomic-updates


    res.result = await processPersonalMessage(msgParams, req);
  }

  async function encryptionPublicKey(req, res) {
    if (!processEncryptionPublicKey) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const address = await validateAndNormalizeKeyholder(req.params[0], req);
    res.result = await processEncryptionPublicKey(address, req);
  }

  async function decryptMessage(req, res) {
    if (!processDecryptMessage) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const ciphertext = req.params[0];
    const address = await validateAndNormalizeKeyholder(req.params[1], req);
    const extraParams = req.params[2] || {};

    const msgParams = _objectSpread$4(_objectSpread$4({}, extraParams), {}, {
      from: address,
      data: ciphertext
    });

    res.result = processDecryptMessage(msgParams, req);
  }

  async function fetchPrivateKey(req, res) {
    if (!getPrivateKey) {
      throw ethErrors.rpc.methodNotSupported();
    }

    res.result = getPrivateKey(req);
  }

  return createScaffoldMiddleware({
    // account lookups
    eth_accounts: createAsyncMiddleware(lookupAccounts),
    eth_private_key: createAsyncMiddleware(fetchPrivateKey),
    eth_coinbase: createAsyncMiddleware(lookupDefaultAccount),
    // tx signatures
    eth_sendTransaction: createAsyncMiddleware(sendTransaction),
    eth_signTransaction: createAsyncMiddleware(signTransaction),
    // message signatures
    eth_sign: createAsyncMiddleware(ethSign),
    eth_signTypedData: createAsyncMiddleware(signTypedData),
    eth_signTypedData_v3: createAsyncMiddleware(signTypedDataV3),
    eth_signTypedData_v4: createAsyncMiddleware(signTypedDataV4),
    personal_sign: createAsyncMiddleware(personalSign),
    eth_getEncryptionPublicKey: createAsyncMiddleware(encryptionPublicKey),
    eth_decrypt: createAsyncMiddleware(decryptMessage)
  });
}

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
  const ethMiddleware = mergeMiddleware([createScaffoldMiddleware({
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
    if (!chainParams) throw ethErrors.rpc.invalidParams("Missing chain params");
    if (!chainParams.chainId) throw ethErrors.rpc.invalidParams("Missing chainId in chainParams");
    if (!chainParams.rpcUrls || chainParams.rpcUrls.length === 0) throw ethErrors.rpc.invalidParams("Missing rpcUrls in chainParams");
    if (!chainParams.nativeCurrency) throw ethErrors.rpc.invalidParams("Missing nativeCurrency in chainParams");
    res.result = await addChain(chainParams);
  }

  async function updateChain(req, res) {
    var _req$params2;

    const chainParams = (_req$params2 = req.params) !== null && _req$params2 !== void 0 && _req$params2.length ? req.params[0] : undefined;
    if (!chainParams) throw ethErrors.rpc.invalidParams("Missing chainId");
    res.result = await switchChain(chainParams);
  }

  return createScaffoldMiddleware({
    wallet_addEthereumChain: createAsyncMiddleware(addNewChain),
    wallet_switchEthereumChain: createAsyncMiddleware(updateChain)
  });
}
function createAccountMiddleware(_ref2) {
  let {
    updatePrivatekey
  } = _ref2;

  async function updateAccount(req, res) {
    var _req$params3;

    const accountParams = (_req$params3 = req.params) !== null && _req$params3 !== void 0 && _req$params3.length ? req.params[0] : undefined;
    if (!(accountParams !== null && accountParams !== void 0 && accountParams.privateKey)) throw ethErrors.rpc.invalidParams("Missing privateKey");
    res.result = await updatePrivatekey(accountParams);
  }

  return createScaffoldMiddleware({
    wallet_updateAccount: createAsyncMiddleware(updateAccount)
  });
} // #endregion account middlewares

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
  const fetchMiddleware = createFetchMiddleware({
    rpcTarget
  });
  const networkMiddleware = mergeMiddleware([createChainIdMiddleware(chainId), createProviderConfigMiddleware(providerConfig), fetchMiddleware]);
  return {
    networkMiddleware,
    fetchMiddleware
  };
}

function getProviderHandlers$1(_ref) {
  let {
    connector
  } = _ref;
  return {
    getPrivateKey: async () => {
      throw ethErrors.rpc.methodNotSupported();
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
      throw ethErrors.rpc.methodNotSupported();
    },
    processDecryptMessage: _ => {
      throw ethErrors.rpc.methodNotSupported();
    }
  };
}

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class WalletConnectProvider extends BaseProvider {
  constructor(_ref) {
    let {
      config,
      state,
      connector
    } = _ref;
    super({
      config: {
        chainConfig: _objectSpread$3(_objectSpread$3({}, config.chainConfig), {}, {
          chainNamespace: CHAIN_NAMESPACES.EIP155
        }),
        skipLookupNetwork: !!config.skipLookupNetwork
      },
      state: _objectSpread$3(_objectSpread$3({}, state || {}), {}, {
        chainId: "loading",
        accounts: []
      })
    });

    _defineProperty(this, "connector", null);

    this.connector = connector || null;
  }

  async enable() {
    if (!this.connector) throw ethErrors.provider.custom({
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
    if (!this.connector) throw ethErrors.provider.custom({
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
        log.error(error);
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
      log.error(error); // ignore this error because metamask & others return provider.result as null
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
    if (!this.connector) throw WalletInitializationError.notReady("Wallet adapter is not ready yet");
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
      log.error(error);
      throw error;
    }
  }

  async lookupNetwork(connector) {
    if (!connector.connected) throw WalletLoginError.notConnectedError("Wallet connect connector is not connected");
    if (!this.provider) throw ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const {
      chainId
    } = this.config.chainConfig;
    const connectedHexChainId = isHexStrict(connector.chainId.toString()) ? connector.chainId : "0x".concat(connector.chainId.toString(16));
    if (chainId !== connectedHexChainId) throw WalletInitializationError.rpcConnectionError("Invalid network, net_version is: ".concat(connectedHexChainId, ", expected: ").concat(chainId));
    this.provider.emit("connect", {
      chainId
    });
    this.provider.emit("chainChanged", this.state.chainId);
    return connectedHexChainId;
  }

  async setupEngine(connector) {
    const providerHandlers = getProviderHandlers$1({
      connector
    });
    this.update({
      accounts: connector.accounts || []
    });
    const ethMiddleware = createEthMiddleware(providerHandlers);
    const engine = new JRPCEngine();
    const {
      networkMiddleware
    } = createJsonRpcClient(this.config.chainConfig);
    engine.push(ethMiddleware);
    engine.push(networkMiddleware);
    const provider = providerFromEngine(engine);
    this.updateProviderEngineProxy(provider);
    if (!this.config.skipLookupNetwork) await this.lookupNetwork(connector);
  }

  async onConnectorStateUpdate(connector) {
    connector.on("session_update", async (error, payload) => {
      if (!this.provider) throw WalletLoginError.notConnectedError("Wallet connect connector is not connected");

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
        const maybeConfig = getChainConfig(CHAIN_NAMESPACES.EIP155, connectedChainId) || {}; // Handle rpcUrl update

        this.configure({
          chainConfig: _objectSpread$3(_objectSpread$3({}, maybeConfig), {}, {
            chainId: connectedHexChainId,
            rpcTarget: rpcUrl,
            chainNamespace: CHAIN_NAMESPACES.EIP155
          })
        });
        await this.setupEngine(connector);
      }
    });
  }

}

_defineProperty(WalletConnectProvider, "getProviderInstance", async params => {
  const providerFactory = new WalletConnectProvider({
    config: {
      chainConfig: params.chainConfig,
      skipLookupNetwork: params.skipLookupNetwork
    }
  });
  await providerFactory.setupProvider(params.connector);
  return providerFactory;
});

async function signTx(txParams, privKey, txFormatter) {
  const finalTxParams = await txFormatter.formatTransaction(txParams);
  const common = await txFormatter.getCommonConfiguration();
  const unsignedEthTx = TransactionFactory.fromTxData(finalTxParams, {
    common
  });
  const signedTx = unsignedEthTx.sign(Buffer.from(privKey, "hex")).serialize();
  return signedTx;
}

function getProviderHandlers(_ref) {
  let {
    txFormatter,
    privKey,
    getProviderEngineProxy
  } = _ref;
  return {
    getAccounts: async _ => ["0x".concat(privateToAddress(Buffer.from(privKey, "hex")).toString("hex"))],
    getPrivateKey: async _ => privKey,
    processTransaction: async (txParams, _) => {
      const providerEngineProxy = getProviderEngineProxy();
      if (!providerEngineProxy) throw ethErrors.provider.custom({
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
      if (!providerEngineProxy) throw ethErrors.provider.custom({
        message: "Provider is not initialized",
        code: 4902
      });
      const signedTx = await signTx(txParams, privKey, txFormatter);
      return "0x".concat(signedTx.toString("hex"));
    },
    processEthSignMessage: async (msgParams, _) => {
      const rawMessageSig = signMessage(privKey, msgParams.data);
      return rawMessageSig;
    },
    processPersonalMessage: async (msgParams, _) => {
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = personalSign({
        privateKey: privKeyBuffer,
        data: msgParams.data
      });
      return sig;
    },
    processTypedMessage: async (msgParams, _) => {
      log.debug("processTypedMessage", msgParams);
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = signTypedData({
        privateKey: privKeyBuffer,
        data: msgParams.data,
        version: SignTypedDataVersion.V1
      });
      return sig;
    },
    processTypedMessageV3: async (msgParams, _) => {
      log.debug("processTypedMessageV3", msgParams);
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = signTypedData({
        privateKey: privKeyBuffer,
        data: msgParams.data,
        version: SignTypedDataVersion.V3
      });
      return sig;
    },
    processTypedMessageV4: async (msgParams, _) => {
      log.debug("processTypedMessageV4", msgParams);
      const privKeyBuffer = Buffer.from(privKey, "hex");
      const sig = signTypedData({
        privateKey: privKeyBuffer,
        data: msgParams.data,
        version: SignTypedDataVersion.V4
      });
      return sig;
    },
    processEncryptionPublicKey: async (address, _) => {
      log.info("processEncryptionPublicKey", address);
      return getEncryptionPublicKey(privKey);
    },
    processDecryptMessage: (msgParams, _) => {
      log.info("processDecryptMessage", msgParams);
      const stripped = stripHexPrefix(msgParams.data);
      const buff = Buffer.from(stripped, "hex");
      const decrypted = decrypt({
        encryptedData: JSON.parse(buff.toString("utf8")),
        privateKey: privKey
      });
      return decrypted;
    }
  };
}

const BIG_NUMBER_WEI_MULTIPLIER = new BigNumber("1e18");
const BIG_NUMBER_GWEI_MULTIPLIER = new BigNumber("1e9");
const BIG_NUMBER_ETH_MULTIPLIER = new BigNumber("1"); // Setter Maps

const toBigNumber = {
  hex: n => typeof n === "string" ? new BigNumber(stripHexPrefix(n), 16) : new BigNumber(n, 16),
  dec: n => new BigNumber(n, 10)
};
const toNormalizedDenomination = {
  WEI: bigNumber => bigNumber.div(BIG_NUMBER_WEI_MULTIPLIER),
  GWEI: bigNumber => bigNumber.div(BIG_NUMBER_GWEI_MULTIPLIER),
  ETH: bigNumber => bigNumber.div(BIG_NUMBER_ETH_MULTIPLIER)
};
const toSpecifiedDenomination = {
  WEI: bigNumber => bigNumber.times(BIG_NUMBER_WEI_MULTIPLIER).dp(0, BigNumber.ROUND_HALF_UP),
  GWEI: bigNumber => bigNumber.times(BIG_NUMBER_GWEI_MULTIPLIER).dp(9, BigNumber.ROUND_HALF_UP),
  ETH: bigNumber => bigNumber.times(BIG_NUMBER_ETH_MULTIPLIER).dp(9, BigNumber.ROUND_HALF_UP)
};
const baseChange = {
  hex: n => n.toString(16),
  dec: n => new BigNumber(n).toString(10)
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
    convertedValue = convertedValue.dp(numberOfDecimals, BigNumber.ROUND_HALF_DOWN);
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

function bnLessThan(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null;
  }

  return new BigNumber$1(a, 10).lt(b, 10);
}
function bnToHex(inputBn) {
  return addHexPrefix(inputBn.toString(16));
}
function hexToBn(inputHex) {
  if (BigNumber$1.isBigNumber(inputHex)) return inputHex;
  return new BigNumber$1(stripHexPrefix(inputHex), 16);
}
function BnMultiplyByFraction(targetBN, numerator, denominator) {
  const numberBN = new BigNumber$1(numerator);
  const denomBN = new BigNumber$1(denominator);
  return targetBN.multipliedBy(numberBN).dividedBy(denomBN);
}

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

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
function normalizeGWEIDecimalNumbers(n) {
  const numberAsWEIHex = decGWEIToHexWEI(n);
  const numberAsGWEI = hexWEIToDecGWEI(numberAsWEIHex);
  return numberAsGWEI;
}
async function fetchEip1159GasEstimates(url) {
  const estimates = await get(url);

  const normalizedEstimates = _objectSpread$2(_objectSpread$2({}, estimates), {}, {
    estimatedBaseFee: normalizeGWEIDecimalNumbers(estimates.estimatedBaseFee),
    low: _objectSpread$2(_objectSpread$2({}, estimates.low), {}, {
      suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.low.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.low.suggestedMaxFeePerGas)
    }),
    medium: _objectSpread$2(_objectSpread$2({}, estimates.medium), {}, {
      suggestedMaxPriorityFeePerGas: normalizeGWEIDecimalNumbers(estimates.medium.suggestedMaxPriorityFeePerGas),
      suggestedMaxFeePerGas: normalizeGWEIDecimalNumbers(estimates.medium.suggestedMaxFeePerGas)
    }),
    high: _objectSpread$2(_objectSpread$2({}, estimates.high), {}, {
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
  const result = await get(url, {
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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class TransactionFormatter {
  constructor(_ref) {
    let {
      getProviderEngineProxy
    } = _ref;

    _defineProperty(this, "chainConfig", null);

    _defineProperty(this, "getProviderEngineProxy", void 0);

    _defineProperty(this, "isEIP1559Compatible", false);

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
    const hardfork = this.isEIP1559Compatible ? Hardfork.London : Hardfork.Berlin;
    const customChainParams = {
      name,
      chainId: chainId === "loading" ? 0 : Number.parseInt(chainId, 16),
      networkId: chainId === "loading" ? 0 : Number.parseInt(chainId, 16),
      defaultHardfork: hardfork
    };
    return Common.custom(customChainParams);
  }

  async formatTransaction(txParams) {
    if (!this.chainConfig) throw new Error("Chain config not initialized");

    const clonedTxParams = _objectSpread$1({}, txParams);

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
        clonedTxParams.maxPriorityFeePerGas = bnLessThan(typeof defaultMaxPriorityFeePerGas === "string" ? stripHexPrefix(defaultMaxPriorityFeePerGas) : defaultMaxPriorityFeePerGas, typeof clonedTxParams.gasPrice === "string" ? stripHexPrefix(clonedTxParams.gasPrice) : clonedTxParams.gasPrice) ? defaultMaxPriorityFeePerGas : clonedTxParams.gasPrice;
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
            maxFeePerGas: addHexPrefix(decGWEIToHexWEI(suggestedMaxFeePerGas)),
            maxPriorityFeePerGas: addHexPrefix(decGWEIToHexWEI(suggestedMaxPriorityFeePerGas))
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
          gasPrice: addHexPrefix(decGWEIToHexWEI(gasFeeEstimates.gasPrice))
        };
      }
    } catch (error) {
      log.error(error);
    }

    const {
      gasPrice
    } = await this.fetchEthGasPriceEstimate();
    return {
      gasPrice: addHexPrefix(decGWEIToHexWEI(gasPrice))
    };
  }

  async estimateTxGas(txMeta) {
    const txParams = _objectSpread$1({}, txMeta); // `eth_estimateGas` can fail if the user has insufficient balance for the
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
      log.warn(error);
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
        log.warn(error);
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
    } = await this.determineTransactionCategory(_objectSpread$1({}, txParams));

    if (txParams.gas) {
      return txParams.gas;
    }

    if (txParams.to && transactionCategory === TRANSACTION_TYPES.SENT_ETHER) {
      // if there's data in the params, but there's no contract code, it's not a valid transaction
      if (txParams.data) {
        throw Error("TxGasUtil - Trying to call a function on a non-contract address");
      }

      const TWENTY_ONE_THOUSAND = 21000; // This is a standard ether simple send, gas requirement is exactly 21k

      return addHexPrefix(TWENTY_ONE_THOUSAND.toString(16));
    }

    const {
      blockGasLimit,
      estimatedGasHex
    } = await this.analyzeGasUsage(txParams); // add additional gas buffer to our estimation for safety

    const gasLimit = this.addGasBuffer(addHexPrefix(estimatedGasHex), blockGasLimit);
    return gasLimit;
  }

}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class EthereumPrivateKeyProvider extends BaseProvider {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config: {
        chainConfig: _objectSpread(_objectSpread({}, config.chainConfig), {}, {
          chainNamespace: CHAIN_NAMESPACES.EIP155
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
    const txFormatter = new TransactionFormatter({
      getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
    });
    const providerHandlers = getProviderHandlers({
      txFormatter,
      privKey,
      getProviderEngineProxy: this.getProviderEngineProxy.bind(this)
    });
    const ethMiddleware = createEthMiddleware(providerHandlers);
    const chainSwitchMiddleware = this.getChainSwitchMiddleware();
    const engine = new JRPCEngine(); // Not a partial anymore because of checks in ctor

    const {
      networkMiddleware
    } = createJsonRpcClient(this.config.chainConfig);
    engine.push(ethMiddleware);
    engine.push(chainSwitchMiddleware);
    engine.push(this.getAccountMiddleware());
    engine.push(networkMiddleware);
    const provider = providerFromEngine(engine);
    this.updateProviderEngineProxy(provider);
    await txFormatter.init();
    await this.lookupNetwork();
  }

  async updateAccount(params) {
    if (!this._providerEngineProxy) throw ethErrors.provider.custom({
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
      method: "eth_private_key"
    });
    await this.setupProvider(privKey);
  }

  async lookupNetwork() {
    if (!this._providerEngineProxy) throw ethErrors.provider.custom({
      message: "Provider is not initialized",
      code: 4902
    });
    const {
      chainId
    } = this.config.chainConfig;
    if (!chainId) throw ethErrors.rpc.invalidParams("chainId is required while lookupNetwork");
    const network = await this._providerEngineProxy.request({
      method: "net_version",
      params: []
    });
    if (parseInt(chainId, 16) !== parseInt(network, 10)) throw ethErrors.provider.chainDisconnected("Invalid network, net_version is: ".concat(network));

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

_defineProperty(EthereumPrivateKeyProvider, "getProviderInstance", async params => {
  const providerFactory = new EthereumPrivateKeyProvider({
    config: {
      chainConfig: params.chainConfig
    }
  });
  await providerFactory.setupProvider(params.privKey);
  return providerFactory;
});

export { EthereumPrivateKeyProvider, WalletConnectProvider };
//# sourceMappingURL=ethereumProvider.esm.js.map

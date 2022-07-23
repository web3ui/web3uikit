import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { BaseController, createEventEmitterProxy, providerFromEngine } from '@toruslabs/base-controllers';
import { WalletInitializationError } from '@web3auth/base';
import { ethErrors } from 'eth-rpc-errors';
import { JRPCEngine, createScaffoldMiddleware, createAsyncMiddleware } from '@toruslabs/openlogin-jrpc';
import getCreateRandomId from 'json-rpc-random-id';

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class BaseProvider extends BaseController {
  // should be Assigned in setupProvider
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config,
      state
    });

    _defineProperty(this, "_providerEngineProxy", null);

    if (!config.chainConfig) throw WalletInitializationError.invalidProviderConfigError("Please provide chainConfig");
    if (!config.chainConfig.chainId) throw WalletInitializationError.invalidProviderConfigError("Please provide chainId inside chainConfig");
    if (!config.chainConfig.rpcTarget) throw WalletInitializationError.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");
    this.defaultState = {
      chainId: "loading"
    };
    this.defaultConfig = {
      chainConfig: config.chainConfig,
      networks: {
        [config.chainConfig.chainId]: config.chainConfig
      }
    };
    super.initialize();
  }

  get provider() {
    return this._providerEngineProxy;
  }

  set provider(_) {
    throw new Error("Method not implemented.");
  }

  addChain(chainConfig) {
    if (!chainConfig.chainId) throw ethErrors.rpc.invalidParams("chainId is required");
    if (!chainConfig.rpcTarget) throw ethErrors.rpc.invalidParams("chainId is required");
    this.configure({
      networks: _objectSpread(_objectSpread({}, this.config.networks), {}, {
        [chainConfig.chainId]: chainConfig
      })
    });
  }

  getChainConfig(chainId) {
    var _this$config$networks;

    const chainConfig = (_this$config$networks = this.config.networks) === null || _this$config$networks === void 0 ? void 0 : _this$config$networks[chainId];
    if (!chainConfig) throw ethErrors.rpc.invalidRequest("Chain ".concat(chainId, " is not supported, please add chainConfig for it"));
    return chainConfig;
  }

  getProviderEngineProxy() {
    return this._providerEngineProxy;
  }

  updateProviderEngineProxy(providerEngineProxy) {
    if (this._providerEngineProxy) {
      this._providerEngineProxy.setTarget(providerEngineProxy);
    } else {
      this._providerEngineProxy = createEventEmitterProxy(providerEngineProxy);
    }
  }

}

class CommonPrivateKeyProvider {
  constructor() {
    _defineProperty(this, "_providerEngineProxy", null);
  }

  get provider() {
    return this._providerEngineProxy;
  }

  set provider(_) {
    throw new Error("Method not implemented.");
  }

  addChain(_) {
    throw new Error("Method not implemented.");
  }

  async setupProvider(privKey) {
    const privKeyMiddleware = this.getPrivKeyMiddleware(privKey);
    const engine = new JRPCEngine();
    engine.push(privKeyMiddleware);
    const provider = providerFromEngine(engine);
    this.updateProviderEngineProxy(provider);
  }

  async switchChain(_) {
    return Promise.resolve();
  }

  getProviderEngineProxy() {
    return this._providerEngineProxy;
  }

  updateProviderEngineProxy(providerEngineProxy) {
    if (this._providerEngineProxy) {
      this._providerEngineProxy.setTarget(providerEngineProxy);
    } else {
      this._providerEngineProxy = createEventEmitterProxy(providerEngineProxy);
    }
  }

  getPrivKeyMiddleware(privKey) {
    const middleware = {
      getPrivatekey: async () => {
        return privKey;
      }
    };
    return this.createPrivKeyMiddleware(middleware);
  }

  createPrivKeyMiddleware(_ref) {
    let {
      getPrivatekey
    } = _ref;

    async function getPrivatekeyHandler(_, res) {
      res.result = await getPrivatekey();
    }

    return createScaffoldMiddleware({
      private_key: createAsyncMiddleware(getPrivatekeyHandler)
    });
  }

}

_defineProperty(CommonPrivateKeyProvider, "getProviderInstance", async params => {
  const providerFactory = new CommonPrivateKeyProvider();
  await providerFactory.setupProvider(params.privKey);
  return providerFactory;
});

const createRandomId = getCreateRandomId();

export { BaseProvider, CommonPrivateKeyProvider, createRandomId };
//# sourceMappingURL=baseProvider.esm.js.map

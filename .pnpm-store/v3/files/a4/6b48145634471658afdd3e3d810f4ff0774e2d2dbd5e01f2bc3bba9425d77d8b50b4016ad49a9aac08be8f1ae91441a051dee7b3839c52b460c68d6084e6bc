import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { BaseAdapter, WALLET_ADAPTERS, ADAPTER_NAMESPACES, CHAIN_NAMESPACES, ADAPTER_CATEGORY, ADAPTER_STATUS, ADAPTER_EVENTS, getChainConfig, WalletInitializationError, log, Web3AuthError, WalletLoginError } from '@web3auth/base';
import { PhantomInjectedProvider } from '@web3auth/solana-provider';

function poll(callback, interval, count) {
  return new Promise((resolve, reject) => {
    if (count > 0) {
      setTimeout(async () => {
        const done = await callback();
        if (done) resolve(done);
        if (!done) poll(callback, interval, count - 1).then(res => {
          resolve(res);
          return res;
        }).catch(err => reject(err));
      }, interval);
    } else {
      resolve(false);
    }
  });
}
const detectProvider = async function () {
  var _window$solana;

  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    interval: 1000,
    count: 3
  };
  const isPhantomAvailable = typeof window !== "undefined" && !!((_window$solana = window.solana) !== null && _window$solana !== void 0 && _window$solana.isPhantom);

  if (isPhantomAvailable) {
    return window.solana;
  }

  const isAvailable = await poll(() => {
    var _window$solana2;

    return (_window$solana2 = window.solana) === null || _window$solana2 === void 0 ? void 0 : _window$solana2.isPhantom;
  }, options.interval, options.count);
  if (isAvailable) return window.solana;
  return null;
};

class PhantomAdapter extends BaseAdapter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    _defineProperty(this, "name", WALLET_ADAPTERS.PHANTOM);

    _defineProperty(this, "adapterNamespace", ADAPTER_NAMESPACES.SOLANA);

    _defineProperty(this, "currentChainNamespace", CHAIN_NAMESPACES.SOLANA);

    _defineProperty(this, "type", ADAPTER_CATEGORY.EXTERNAL);

    _defineProperty(this, "status", ADAPTER_STATUS.NOT_READY);

    _defineProperty(this, "_wallet", null);

    _defineProperty(this, "phantomProvider", null);

    _defineProperty(this, "rehydrated", false);

    _defineProperty(this, "_onDisconnect", () => {
      if (this._wallet) {
        this._wallet.off("disconnect", this._onDisconnect);

        this.rehydrated = false; // ready to be connected again only if it was previously connected and not cleaned up

        this.status = this.status === ADAPTER_STATUS.CONNECTED ? ADAPTER_STATUS.READY : ADAPTER_STATUS.NOT_READY;
        this.emit(ADAPTER_EVENTS.DISCONNECTED);
      }
    });

    this.chainConfig = options.chainConfig || null;
  }

  get isWalletConnected() {
    var _this$_wallet;

    return !!((_this$_wallet = this._wallet) !== null && _this$_wallet !== void 0 && _this$_wallet.isConnected && this.status === ADAPTER_STATUS.CONNECTED);
  }

  get provider() {
    var _this$phantomProvider;

    return ((_this$phantomProvider = this.phantomProvider) === null || _this$phantomProvider === void 0 ? void 0 : _this$phantomProvider.provider) || null;
  }

  set provider(_) {
    throw new Error("Not implemented");
  }

  setAdapterSettings(_) {}

  async init(options) {
    super.checkInitializationRequirements(); // set chainConfig for mainnet by default if not set

    if (!this.chainConfig) {
      this.chainConfig = getChainConfig(CHAIN_NAMESPACES.SOLANA, "0x1");
    }

    this._wallet = await detectProvider({
      interval: 500,
      count: 3
    });
    if (!this._wallet) throw WalletInitializationError.notInstalled();
    this.phantomProvider = new PhantomInjectedProvider({
      config: {
        chainConfig: this.chainConfig
      }
    });
    this.status = ADAPTER_STATUS.READY;
    this.emit(ADAPTER_EVENTS.READY, WALLET_ADAPTERS.PHANTOM);

    try {
      log.debug("initializing phantom adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      log.error("Failed to connect with cached phantom provider", error);
      this.emit("ERRORED", error);
    }
  }

  async connect() {
    var _this = this;

    try {
      super.checkConnectionRequirements();
      this.status = ADAPTER_STATUS.CONNECTING;
      this.emit(ADAPTER_EVENTS.CONNECTING, {
        adapter: WALLET_ADAPTERS.PHANTOM
      });
      if (!this._wallet) throw WalletInitializationError.notInstalled();

      if (!this._wallet.isConnected) {
        const handleDisconnect = this._wallet._handleDisconnect;

        try {
          await new Promise((resolve, reject) => {
            const connect = async () => {
              await this.connectWithProvider(this._wallet);
              resolve(this.provider);
            };

            if (!this._wallet) return reject(WalletInitializationError.notInstalled());

            this._wallet.once("connect", connect); // Raise an issue on phantom that if window is closed, disconnect event is not fired


            this._wallet._handleDisconnect = function () {
              reject(WalletInitializationError.windowClosed());

              for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
                args[_key] = arguments[_key];
              }

              return handleDisconnect.apply(_this._wallet, args);
            };

            this._wallet.connect().catch(reason => {
              reject(reason);
            });
          });
        } catch (error) {
          if (error instanceof Web3AuthError) throw error;
          throw WalletLoginError.connectionError(error === null || error === void 0 ? void 0 : error.message);
        } finally {
          this._wallet._handleDisconnect = handleDisconnect;
        }
      } else {
        await this.connectWithProvider(this._wallet);
      }

      if (!this._wallet.publicKey) throw WalletLoginError.connectionError();

      this._wallet.on("disconnect", this._onDisconnect);

      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(ADAPTER_EVENTS.ERRORED, error);
      throw error;
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (!this.isWalletConnected) throw WalletLoginError.notConnectedError("Not connected with wallet");

    try {
      var _this$_wallet2;

      await ((_this$_wallet2 = this._wallet) === null || _this$_wallet2 === void 0 ? void 0 : _this$_wallet2.disconnect());

      if (options.cleanup) {
        this.status = ADAPTER_STATUS.NOT_READY;
        this.phantomProvider = null;
        this._wallet = null;
      }

      this.emit(ADAPTER_EVENTS.DISCONNECTED);
    } catch (error) {
      this.emit(ADAPTER_EVENTS.ERRORED, WalletLoginError.disconnectionError(error === null || error === void 0 ? void 0 : error.message));
    }
  }

  async getUserInfo() {
    if (!this.isWalletConnected) throw WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async connectWithProvider(injectedProvider) {
    if (!this.phantomProvider) throw WalletLoginError.connectionError("No phantom provider");
    await this.phantomProvider.setupProvider(injectedProvider);
    this.status = ADAPTER_STATUS.CONNECTED;
    this.emit(ADAPTER_EVENTS.CONNECTED, {
      adapter: WALLET_ADAPTERS.PHANTOM,
      reconnected: this.rehydrated
    });
    return this.provider;
  }

}

export { PhantomAdapter };
//# sourceMappingURL=phantomAdapter.esm.js.map

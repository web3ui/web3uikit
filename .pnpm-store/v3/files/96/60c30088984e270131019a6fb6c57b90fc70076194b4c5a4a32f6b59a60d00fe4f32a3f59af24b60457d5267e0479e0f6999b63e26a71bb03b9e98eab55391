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
  "PhantomAdapter": () => (/* reexport */ PhantomAdapter)
});

;// CONCATENATED MODULE: external "@babel/runtime/helpers/defineProperty"
const defineProperty_namespaceObject = require("@babel/runtime/helpers/defineProperty");
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_namespaceObject);
;// CONCATENATED MODULE: external "@web3auth/base"
const base_namespaceObject = require("@web3auth/base");
;// CONCATENATED MODULE: external "@web3auth/solana-provider"
const solana_provider_namespaceObject = require("@web3auth/solana-provider");
;// CONCATENATED MODULE: ./src/utils.ts
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
  var _solana;

  let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
    interval: 1000,
    count: 3
  };
  const isPhantomAvailable = typeof window !== "undefined" && !!((_solana = window.solana) !== null && _solana !== void 0 && _solana.isPhantom);

  if (isPhantomAvailable) {
    return window.solana;
  }

  const isAvailable = await poll(() => {
    var _solana2;

    return (_solana2 = window.solana) === null || _solana2 === void 0 ? void 0 : _solana2.isPhantom;
  }, options.interval, options.count);
  if (isAvailable) return window.solana;
  return null;
};
;// CONCATENATED MODULE: ./src/phantomAdapter.ts




class PhantomAdapter extends base_namespaceObject.BaseAdapter {
  constructor() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    super();

    defineProperty_default()(this, "name", base_namespaceObject.WALLET_ADAPTERS.PHANTOM);

    defineProperty_default()(this, "adapterNamespace", base_namespaceObject.ADAPTER_NAMESPACES.SOLANA);

    defineProperty_default()(this, "currentChainNamespace", base_namespaceObject.CHAIN_NAMESPACES.SOLANA);

    defineProperty_default()(this, "type", base_namespaceObject.ADAPTER_CATEGORY.EXTERNAL);

    defineProperty_default()(this, "status", base_namespaceObject.ADAPTER_STATUS.NOT_READY);

    defineProperty_default()(this, "_wallet", null);

    defineProperty_default()(this, "phantomProvider", null);

    defineProperty_default()(this, "rehydrated", false);

    defineProperty_default()(this, "_onDisconnect", () => {
      if (this._wallet) {
        this._wallet.off("disconnect", this._onDisconnect);

        this.rehydrated = false; // ready to be connected again only if it was previously connected and not cleaned up

        this.status = this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTED ? base_namespaceObject.ADAPTER_STATUS.READY : base_namespaceObject.ADAPTER_STATUS.NOT_READY;
        this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED);
      }
    });

    this.chainConfig = options.chainConfig || null;
  }

  get isWalletConnected() {
    var _this$_wallet;

    return !!((_this$_wallet = this._wallet) !== null && _this$_wallet !== void 0 && _this$_wallet.isConnected && this.status === base_namespaceObject.ADAPTER_STATUS.CONNECTED);
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
      this.chainConfig = (0,base_namespaceObject.getChainConfig)(base_namespaceObject.CHAIN_NAMESPACES.SOLANA, "0x1");
    }

    this._wallet = await detectProvider({
      interval: 500,
      count: 3
    });
    if (!this._wallet) throw base_namespaceObject.WalletInitializationError.notInstalled();
    this.phantomProvider = new solana_provider_namespaceObject.PhantomInjectedProvider({
      config: {
        chainConfig: this.chainConfig
      }
    });
    this.status = base_namespaceObject.ADAPTER_STATUS.READY;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.READY, base_namespaceObject.WALLET_ADAPTERS.PHANTOM);

    try {
      base_namespaceObject.log.debug("initializing phantom adapter");

      if (options.autoConnect) {
        this.rehydrated = true;
        await this.connect();
      }
    } catch (error) {
      base_namespaceObject.log.error("Failed to connect with cached phantom provider", error);
      this.emit("ERRORED", error);
    }
  }

  async connect() {
    var _this = this;

    try {
      super.checkConnectionRequirements();
      this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTING;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTING, {
        adapter: base_namespaceObject.WALLET_ADAPTERS.PHANTOM
      });
      if (!this._wallet) throw base_namespaceObject.WalletInitializationError.notInstalled();

      if (!this._wallet.isConnected) {
        const handleDisconnect = this._wallet._handleDisconnect;

        try {
          await new Promise((resolve, reject) => {
            const connect = async () => {
              await this.connectWithProvider(this._wallet);
              resolve(this.provider);
            };

            if (!this._wallet) return reject(base_namespaceObject.WalletInitializationError.notInstalled());

            this._wallet.once("connect", connect); // Raise an issue on phantom that if window is closed, disconnect event is not fired


            this._wallet._handleDisconnect = function () {
              reject(base_namespaceObject.WalletInitializationError.windowClosed());

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
          if (error instanceof base_namespaceObject.Web3AuthError) throw error;
          throw base_namespaceObject.WalletLoginError.connectionError(error === null || error === void 0 ? void 0 : error.message);
        } finally {
          this._wallet._handleDisconnect = handleDisconnect;
        }
      } else {
        await this.connectWithProvider(this._wallet);
      }

      if (!this._wallet.publicKey) throw base_namespaceObject.WalletLoginError.connectionError();

      this._wallet.on("disconnect", this._onDisconnect);

      return this.provider;
    } catch (error) {
      // ready again to be connected
      this.status = base_namespaceObject.ADAPTER_STATUS.READY;
      this.rehydrated = false;
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, error);
      throw error;
    }
  }

  async disconnect() {
    let options = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {
      cleanup: false
    };
    if (!this.isWalletConnected) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet");

    try {
      var _this$_wallet2;

      await ((_this$_wallet2 = this._wallet) === null || _this$_wallet2 === void 0 ? void 0 : _this$_wallet2.disconnect());

      if (options.cleanup) {
        this.status = base_namespaceObject.ADAPTER_STATUS.NOT_READY;
        this.phantomProvider = null;
        this._wallet = null;
      }

      this.emit(base_namespaceObject.ADAPTER_EVENTS.DISCONNECTED);
    } catch (error) {
      this.emit(base_namespaceObject.ADAPTER_EVENTS.ERRORED, base_namespaceObject.WalletLoginError.disconnectionError(error === null || error === void 0 ? void 0 : error.message));
    }
  }

  async getUserInfo() {
    if (!this.isWalletConnected) throw base_namespaceObject.WalletLoginError.notConnectedError("Not connected with wallet, Please login/connect first");
    return {};
  }

  async connectWithProvider(injectedProvider) {
    if (!this.phantomProvider) throw base_namespaceObject.WalletLoginError.connectionError("No phantom provider");
    await this.phantomProvider.setupProvider(injectedProvider);
    this.status = base_namespaceObject.ADAPTER_STATUS.CONNECTED;
    this.emit(base_namespaceObject.ADAPTER_EVENTS.CONNECTED, {
      adapter: base_namespaceObject.WALLET_ADAPTERS.PHANTOM,
      reconnected: this.rehydrated
    });
    return this.provider;
  }

}
;// CONCATENATED MODULE: ./src/index.ts

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=phantomAdapter.cjs.js.map
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 758:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }



/**
 * Controller class that provides configuration, state management, and subscriptions
 */
class BaseController extends _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__.SafeEventEmitter {
  /**
   * Default options used to configure this controller
   */

  /**
   * Default state set on this controller
   */

  /**
   * Determines if listeners are notified of state changes
   */

  /**
   * Name of this controller used during composition
   */

  /**
   * Creates a BaseController instance. Both initial state and initial
   * configuration options are merged with defaults upon initialization.
   *
   * @param config - Initial options used to configure this controller
   * @param state - Initial state to set on this controller
   */
  constructor(_ref) {
    let {
      config = {},
      state = {}
    } = _ref;
    super(); // Use assign since generics can't be spread: https://git.io/vpRhY

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "defaultConfig", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "defaultState", {});

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "disabled", false);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", "BaseController");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "initialConfig", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "initialState", void 0);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "internalConfig", this.defaultConfig);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "internalState", this.defaultState);

    this.initialState = state;
    this.initialConfig = config;
  }
  /**
   * Retrieves current controller configuration options
   *
   * @returns - Current configuration
   */


  get config() {
    return this.internalConfig;
  }
  /**
   * Retrieves current controller state
   *
   * @returns - Current state
   */


  get state() {
    return this.internalState;
  }
  /**
   * Updates controller configuration
   *
   * @param config - New configuration options
   * @param overwrite - Overwrite config instead of merging
   * @param fullUpdate - Boolean that defines if the update is partial or not
   */


  configure(config) {
    let overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    let fullUpdate = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;

    if (fullUpdate) {
      this.internalConfig = overwrite ? config : Object.assign(this.internalConfig, config);

      for (const key in this.internalConfig) {
        if (typeof this.internalConfig[key] !== "undefined") {
          this[key] = this.internalConfig[key];
        }
      }
    } else {
      for (const key in config) {
        /* istanbul ignore else */
        if (typeof this.internalConfig[key] !== "undefined") {
          this.internalConfig[key] = config[key];
          this[key] = config[key];
        }
      }
    }
  }
  /**
   * Updates controller state
   *
   * @param state - New state
   * @param overwrite - Overwrite state instead of merging
   */


  update(state) {
    let overwrite = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    this.internalState = overwrite ? _objectSpread({}, state) : _objectSpread(_objectSpread({}, this.internalState), state);
    this.emit("store", this.internalState);
  }
  /**
   * Enables the controller. This sets each config option as a member
   * variable on this instance and triggers any defined setters. This
   * also sets initial state and triggers any listeners.
   *
   * @returns - This controller instance
   */


  initialize() {
    this.internalState = this.defaultState;
    this.internalConfig = this.defaultConfig;
    this.configure(this.initialConfig);
    this.update(this.initialState);
    return this;
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (BaseController);

/***/ }),

/***/ 839:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "I": () => (/* binding */ BaseBlockTracker)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(758);


const sec = 1000;

const calculateSum = (accumulator, currentValue) => accumulator + currentValue;

const blockTrackerEvents = ["sync", "latest"];
class BaseBlockTracker extends _BaseController__WEBPACK_IMPORTED_MODULE_1__/* ["default"] */ .Z {
  constructor(_ref) {
    let {
      config = {},
      state = {}
    } = _ref;
    super({
      config,
      state
    }); // config

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "name", "BaseBlockTracker");

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_blockResetTimeout", void 0);

    this.defaultState = {
      _currentBlock: {
        idempotencyKey: ""
      },
      _isRunning: false
    };
    this.defaultConfig = {
      blockResetDuration: 20 * sec
    };
    this.initialize(); // bind functions for internal use

    this._onNewListener = this._onNewListener.bind(this);
    this._onRemoveListener = this._onRemoveListener.bind(this);
    this._resetCurrentBlock = this._resetCurrentBlock.bind(this); // listen for handler changes

    this._setupInternalEvents();
  }

  isRunning() {
    return this.state._isRunning;
  }

  getCurrentBlock() {
    return this.state._currentBlock;
  }

  async getLatestBlock() {
    // return if available
    if (this.state._currentBlock) {
      return this.state._currentBlock;
    } // wait for a new latest block


    const latestBlock = await new Promise(resolve => this.once("latest", newState => {
      if (newState._currentBlock) {
        resolve(newState._currentBlock);
      }
    })); // return newly set current block

    return latestBlock;
  } // dont allow module consumer to remove our internal event listeners


  removeAllListeners(eventName) {
    if (eventName) {
      super.removeAllListeners(eventName);
    } else {
      super.removeAllListeners();
    } // re-add internal events


    this._setupInternalEvents(); // trigger stop check just in case


    this._onRemoveListener();

    return this;
  }
  /**
   * To be implemented in subclass.
   */


  _start() {// default behavior is noop
  }
  /**
   * To be implemented in subclass.
   */


  _end() {// default behavior is noop
  }

  _newPotentialLatest(newBlock) {
    const currentBlock = this.state._currentBlock; // only update if blok number is higher

    if (currentBlock && newBlock.idempotencyKey === currentBlock.idempotencyKey) {
      return;
    }

    this._setCurrentBlock(newBlock);
  }

  _setupInternalEvents() {
    // first remove listeners for idempotency
    this.removeListener("newListener", this._onNewListener);
    this.removeListener("removeListener", this._onRemoveListener); // then add them

    this.on("removeListener", this._onRemoveListener);
    this.on("newListener", this._onNewListener);
  }

  _onNewListener() {
    this._maybeStart();
  }

  _onRemoveListener() {
    // `removeListener` is called *after* the listener is removed
    if (this._getBlockTrackerEventCount() > 0) {
      return;
    }

    this._maybeEnd();
  }

  _maybeStart() {
    if (this.state._isRunning) {
      return;
    }

    this.state._isRunning = true; // cancel setting latest block to stale

    this._cancelBlockResetTimeout();

    this._start();
  }

  _maybeEnd() {
    if (!this.state._isRunning) {
      return;
    }

    this.state._isRunning = false;

    this._setupBlockResetTimeout();

    this._end();
  }

  _getBlockTrackerEventCount() {
    return blockTrackerEvents.map(eventName => this.listenerCount(eventName)).reduce(calculateSum);
  }

  _setCurrentBlock(newBlock) {
    const oldBlock = this.state._currentBlock;
    this.update({
      _currentBlock: newBlock
    });
    this.emit("latest", newBlock);
    this.emit("sync", {
      oldBlock,
      newBlock
    });
  }

  _setupBlockResetTimeout() {
    // clear any existing timeout
    this._cancelBlockResetTimeout(); // clear latest block when stale


    this._blockResetTimeout = setTimeout(this._resetCurrentBlock, this.config.blockResetDuration); // nodejs - dont hold process open

    if (this._blockResetTimeout.unref) {
      this._blockResetTimeout.unref();
    }
  }

  _cancelBlockResetTimeout() {
    if (this._blockResetTimeout) {
      clearTimeout(this._blockResetTimeout);
    }
  }

  _resetCurrentBlock() {
    this.update({
      _currentBlock: {
        idempotencyKey: ""
      }
    });
  }

}

/***/ }),

/***/ 79:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BaseCurrencyController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);

// every ten minutes
const POLLING_INTERVAL = 600000;
class BaseCurrencyController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor(_ref) {
    let {
      config = {},
      state
    } = _ref;
    super({
      config,
      state
    });
    this.defaultState = {
      currentCurrency: "usd",
      conversionRate: 0,
      conversionDate: "N/A",
      nativeCurrency: "ETH"
    };
    this.defaultConfig = {
      pollInterval: POLLING_INTERVAL
    };
    this.initialize();
  } //
  // PUBLIC METHODS
  //


  getNativeCurrency() {
    return this.state.nativeCurrency;
  }

  setNativeCurrency(nativeCurrency) {
    this.update({
      nativeCurrency,
      ticker: nativeCurrency
    });
  }

  getCurrentCurrency() {
    return this.state.currentCurrency;
  }

  setCurrentCurrency(currentCurrency) {
    this.update({
      currentCurrency
    });
  }
  /**
   * A getter for the conversionRate property
   *
   * @returns The conversion rate from ETH to the selected currency.
   *
   */


  getConversionRate() {
    return this.state.conversionRate;
  }

  setConversionRate(conversionRate) {
    this.update({
      conversionRate
    });
  }
  /**
   * A getter for the conversionDate property
   *
   * @returns The date at which the conversion rate was set. Expressed in milliseconds since midnight of
   * January 1, 1970
   *
   */


  getConversionDate() {
    return this.state.conversionDate;
  }

  setConversionDate(conversionDate) {
    this.update({
      conversionDate
    });
  }

}

/***/ }),

/***/ 784:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "k": () => (/* binding */ BaseEmbedController)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(758);
/* harmony import */ var _createSwappableProxy__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(868);
/* harmony import */ var _Network_INetworkController__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(168);
/* harmony import */ var _CommunicationMethodMiddleware__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(469);






class BaseEmbedController extends _BaseController__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z {
  constructor(_ref) {
    let {
      config = {},
      state
    } = _ref;
    super({
      config,
      state
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "_communicationProviderProxy", void 0);

    this.defaultState = {
      buttonPosition: "bottom-right",
      isIFrameFullScreen: true,
      apiKey: "torus-default",
      oauthModalVisibility: false,
      loginInProgress: false,
      dappMetadata: {
        name: "",
        icon: ""
      }
    };
    this.initialize();
  }
  /**
   * Called by orchestrator once while initializing the class
   * @param handlers - JRPC handlers for provider
   * @returns - provider - Returns the providerProxy
   */


  initializeProvider(handlers) {
    const engine = new _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__.JRPCEngine();
    const communicationMiddleware = (0,_CommunicationMethodMiddleware__WEBPACK_IMPORTED_MODULE_4__/* .createCommunicationMiddleware */ .u_)(handlers);
    engine.push(communicationMiddleware);
    const communicationProvider = (0,_Network_INetworkController__WEBPACK_IMPORTED_MODULE_3__/* .providerFromEngine */ .Xj)(engine);
    this.setCommunicationProvider(communicationProvider);
  }

  setCommunicationProvider(communicationProvider) {
    if (this._communicationProviderProxy) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._communicationProviderProxy.setTarget(communicationProvider);
    } else {
      this._communicationProviderProxy = (0,_createSwappableProxy__WEBPACK_IMPORTED_MODULE_5__/* ["default"] */ .Z)(communicationProvider);
    }
  }

}

/***/ }),

/***/ 469:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "JL": () => (/* binding */ createChangeProviderMiddlewareMiddleware),
/* harmony export */   "QM": () => (/* binding */ createGenericJRPCMiddleware),
/* harmony export */   "u_": () => (/* binding */ createCommunicationMiddleware),
/* harmony export */   "yP": () => (/* binding */ createTopupMiddleware)
/* harmony export */ });
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);


function createChangeProviderMiddlewareMiddleware(_ref) {
  let {
    changeProvider
  } = _ref;
  return (0,_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__.createAsyncMiddleware)(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== _enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.SET_PROVIDER */ .vU.SET_PROVIDER) return next();
    if (!changeProvider) throw new Error("CommunicationMiddleware - opts.changeProvider not provided");
    response.result = await changeProvider(request);
  });
}
function createTopupMiddleware(_ref2) {
  let {
    topup
  } = _ref2;
  return (0,_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__.createAsyncMiddleware)(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== _enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.TOPUP */ .vU.TOPUP) return next();
    if (!topup) throw new Error("CommunicationMiddleware - opts.topup not provided");
    response.result = await topup(request);
  });
}
function createGenericJRPCMiddleware(targetMethod, handler) {
  return (0,_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__.createAsyncMiddleware)(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== targetMethod) return next();
    if (!handler) throw new Error("CommunicationMiddleware - ".concat(targetMethod, " not provided"));
    const result = await handler(request);

    if (!result) {
      return next();
    }

    response.result = result;
    return undefined;
  });
}
function createCommunicationMiddleware(providerHandlers) {
  const {
    getUserInfo,
    getWalletInstanceId,
    topup,
    logout,
    changeProvider,
    setIFrameStatus,
    handleWindowRpc,
    getProviderState,
    loginWithPrivateKey
  } = providerHandlers;
  return (0,_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__.mergeMiddleware)([createChangeProviderMiddlewareMiddleware({
    changeProvider
  }), createTopupMiddleware({
    topup
  }), (0,_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__.createScaffoldMiddleware)({
    [_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.LOGOUT */ .vU.LOGOUT]: logout,
    [_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.WALLET_INSTANCE_ID */ .vU.WALLET_INSTANCE_ID]: getWalletInstanceId,
    [_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.USER_INFO */ .vU.USER_INFO]: getUserInfo,
    [_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.IFRAME_STATUS */ .vU.IFRAME_STATUS]: setIFrameStatus,
    // Do this in the orchestrator because communicationWindowManager needs to be passed into PopupHandlers
    [_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.OPENED_WINDOW */ .vU.OPENED_WINDOW]: handleWindowRpc,
    [_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.CLOSED_WINDOW */ .vU.CLOSED_WINDOW]: handleWindowRpc,
    [_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.GET_PROVIDER_STATE */ .vU.GET_PROVIDER_STATE]: getProviderState
  }), createGenericJRPCMiddleware(_enums__WEBPACK_IMPORTED_MODULE_1__/* .COMMUNICATION_JRPC_METHODS.LOGIN_WITH_PRIVATE_KEY */ .vU.LOGIN_WITH_PRIVATE_KEY, loginWithPrivateKey)]);
}

/***/ }),

/***/ 745:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(33);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);




class CommunicationWindowManager extends _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_1__.SafeEventEmitter {
  constructor() {
    super(...arguments);

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "handleWindowRpc", (request, response, next, end) => {
      const {
        method,
        params
      } = request;

      if (method === _enums__WEBPACK_IMPORTED_MODULE_2__/* .COMMUNICATION_JRPC_METHODS.OPENED_WINDOW */ .vU.OPENED_WINDOW) {
        const {
          windowId
        } = params; // I've been informed that a window has been opened

        this.emit("".concat(windowId, ":opened"));
        response.result = true;
        end();
      } else if (method === _enums__WEBPACK_IMPORTED_MODULE_2__/* .COMMUNICATION_JRPC_METHODS.CLOSED_WINDOW */ .vU.CLOSED_WINDOW) {
        const {
          windowId
        } = params; // I've been informed that a window has been closed

        this.emit("".concat(windowId, ":closed"));
        response.result = true;
        end();
      } else {
        next();
      }
    });
  }

}

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (CommunicationWindowManager);

/***/ }),

/***/ 818:
/***/ (() => {



/***/ }),

/***/ 608:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "W": () => (/* binding */ BaseKeyringController)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(883);


class BaseKeyringController extends _BaseController__WEBPACK_IMPORTED_MODULE_0__/* ["default"] */ .Z {
  constructor(_ref) {
    var _state$wallets;

    let {
      config = {},
      state
    } = _ref;
    super({
      config,
      state
    });
    this.defaultState = {
      wallets: (_state$wallets = state.wallets) !== null && _state$wallets !== void 0 ? _state$wallets : []
    };
    this.initialize();
  } // for signing auth message


  signAuthMessage(address, message) {
    const keyring = this.state.wallets.find(x => x.address === address);

    if (!keyring) {
      throw new Error("key does not exist");
    }

    const hashedMessage = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .hashMessage */ .rj)(message).toString("hex");
    const rawMessageSig = (0,_utils__WEBPACK_IMPORTED_MODULE_1__/* .signMessage */ .l)(keyring.privateKey, hashedMessage);
    return rawMessageSig;
  }

}

/***/ }),

/***/ 168:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "HL": () => (/* binding */ createRandomId),
  "zR": () => (/* binding */ providerAsMiddleware),
  "Xj": () => (/* binding */ providerFromEngine),
  "ZY": () => (/* binding */ providerFromMiddleware)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
// EXTERNAL MODULE: external "@toruslabs/openlogin-jrpc"
var openlogin_jrpc_ = __webpack_require__(33);
// EXTERNAL MODULE: external "eth-rpc-errors"
var external_eth_rpc_errors_ = __webpack_require__(19);
;// CONCATENATED MODULE: external "json-rpc-random-id"
const external_json_rpc_random_id_namespaceObject = require("json-rpc-random-id");
var external_json_rpc_random_id_default = /*#__PURE__*/__webpack_require__.n(external_json_rpc_random_id_namespaceObject);
;// CONCATENATED MODULE: ./src/Network/INetworkController.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }




const createRandomId = external_json_rpc_random_id_default()();
function providerFromEngine(engine) {
  const provider = new openlogin_jrpc_.SafeEventEmitter(); // handle both rpc send methods

  provider.sendAsync = async req => {
    const res = await engine.handle(req);

    if (res.error) {
      var _res$error, _res$error2;

      const err = (0,external_eth_rpc_errors_.serializeError)(res.error, {
        fallbackError: {
          message: ((_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.message) || res.error.toString(),
          code: ((_res$error2 = res.error) === null || _res$error2 === void 0 ? void 0 : _res$error2.code) || -32603
        }
      });
      throw external_eth_rpc_errors_.ethErrors.rpc.internal(err);
    }

    return res.result;
  }; // eslint-disable-next-line @typescript-eslint/no-explicit-any


  provider.send = (req, callback) => {
    if (typeof callback !== "function") {
      throw new Error('Must provide callback to "send" method.');
    }

    engine.handle(req, callback);
  }; // forward notifications


  if (engine.on) {
    engine.on("notification", message => {
      provider.emit("data", null, message);
    });
  }

  provider.request = async args => {
    const req = _objectSpread(_objectSpread({}, args), {}, {
      id: createRandomId(),
      jsonrpc: "2.0"
    });

    const res = await provider.sendAsync(req);
    return res;
  };

  return provider;
}
function providerFromMiddleware(middleware) {
  const engine = new openlogin_jrpc_.JRPCEngine();
  engine.push(middleware);
  const provider = providerFromEngine(engine);
  return provider;
}
function providerAsMiddleware(provider) {
  return async (req, res, _next, end) => {
    // send request to provider
    try {
      const providerRes = await provider.sendAsync(req);
      res.result = providerRes;
      return end();
    } catch (error) {
      return end(error.message);
    }
  };
}

/***/ }),

/***/ 466:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "D": () => (/* binding */ createFetchConfigFromReq),
/* harmony export */   "v": () => (/* binding */ createFetchMiddleware)
/* harmony export */ });
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(33);
/* harmony import */ var _toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(19);
/* harmony import */ var eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__);


const RETRIABLE_ERRORS = [// ignore server overload errors
"Gateway timeout", "ETIMEDOUT", // ignore server sent html error pages
// or truncated json responses
"failed to parse response body", // ignore errors where http req failed to establish
"Failed to fetch"];

function checkForHttpErrors(fetchRes) {
  // check for errors
  switch (fetchRes.status) {
    case 405:
      throw eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__.ethErrors.rpc.methodNotFound();

    case 418:
      throw eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__.ethErrors.rpc.internal({
        message: "Request is being rate limited."
      });

    case 503:
    case 504:
      throw eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__.ethErrors.rpc.internal({
        message: "Gateway timeout. The request took too long to process." + "This can happen when querying over too wide a block range."
      });

    default:
      break;
  }
}

function timeout(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

function parseResponse(fetchRes, body) {
  // check for error code
  if (fetchRes.status !== 200) {
    throw eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__.ethErrors.rpc.internal({
      message: "Non-200 status code: '".concat(fetchRes.status, "'"),
      data: body
    });
  } // check for rpc error


  if (body.error) {
    throw eth_rpc_errors__WEBPACK_IMPORTED_MODULE_1__.ethErrors.rpc.internal({
      data: body.error
    });
  } // return successful result


  return body.result;
}

function createFetchConfigFromReq(_ref) {
  let {
    req,
    rpcTarget,
    originHttpHeaderKey
  } = _ref;
  const parsedUrl = new URL(rpcTarget); // prepare payload
  // copy only canonical json rpc properties

  const payload = {
    id: req.id,
    jsonrpc: req.jsonrpc,
    method: req.method,
    params: req.params
  }; // extract 'origin' parameter from request

  const originDomain = req.origin; // serialize request body

  const serializedPayload = JSON.stringify(payload); // configure fetch params

  const fetchParams = {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: serializedPayload
  }; // optional: add request origin as header

  if (originHttpHeaderKey && originDomain) {
    fetchParams.headers[originHttpHeaderKey] = originDomain;
  }

  return {
    fetchUrl: parsedUrl.href,
    fetchParams
  };
}
function createFetchMiddleware(_ref2) {
  let {
    rpcTarget,
    originHttpHeaderKey
  } = _ref2;
  return (0,_toruslabs_openlogin_jrpc__WEBPACK_IMPORTED_MODULE_0__.createAsyncMiddleware)(async (req, res, _next) => {
    const {
      fetchUrl,
      fetchParams
    } = createFetchConfigFromReq({
      req,
      rpcTarget,
      originHttpHeaderKey
    }); // attempt request multiple times

    const maxAttempts = 5;
    const retryInterval = 1000;

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      try {
        const fetchRes = await fetch(fetchUrl, fetchParams); // check for http errrors

        checkForHttpErrors(fetchRes); // parse response body

        const fetchBody = await fetchRes.json();
        const result = parseResponse(fetchRes, fetchBody); // set result and exit retry loop

        res.result = result;
        return;
      } catch (err) {
        const errMsg = err.toString();
        const isRetriable = RETRIABLE_ERRORS.some(phrase => errMsg.includes(phrase)); // re-throw error if not retriable

        if (!isRetriable) {
          throw err;
        }
      } // delay before retrying


      await timeout(retryInterval);
    }
  });
}

/***/ }),

/***/ 994:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "y": () => (/* binding */ createLoggerMiddleware)
/* harmony export */ });
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(485);
/* harmony import */ var loglevel__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(loglevel__WEBPACK_IMPORTED_MODULE_0__);

function createLoggerMiddleware(options) {
  return function loggerMiddleware(request, response, next) {
    next(callback => {
      if (response.error) {
        loglevel__WEBPACK_IMPORTED_MODULE_0___default().warn("Error in RPC response:\n", response);
      }

      if (request.isTorusInternal) return;
      loglevel__WEBPACK_IMPORTED_MODULE_0___default().info("RPC (".concat(options.origin, "):"), request, "->", response);
      callback();
    });
  };
}

/***/ }),

/***/ 152:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "x": () => (/* binding */ createOriginMiddleware)
/* harmony export */ });
function createOriginMiddleware(options) {
  return function originMiddleware(request, _, next) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.origin = options.origin;
    next();
  };
}

/***/ }),

/***/ 964:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "K4": () => (/* reexport */ BroadcastChannelHandler),
  "XQ": () => (/* reexport */ Popup_PopupHandler),
  "lQ": () => (/* reexport */ PopupStoreChannel),
  "LC": () => (/* reexport */ Popup_PopupWithBcHandler),
  "ZZ": () => (/* reexport */ RedirectHandler),
  "Ej": () => (/* reexport */ Popup_StreamWindow)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
;// CONCATENATED MODULE: external "@toruslabs/broadcast-channel"
const broadcast_channel_namespaceObject = require("@toruslabs/broadcast-channel");
// EXTERNAL MODULE: ./src/enums.ts
var enums = __webpack_require__(1);
// EXTERNAL MODULE: ./src/utils/index.ts + 1 modules
var utils = __webpack_require__(883);
;// CONCATENATED MODULE: ./src/Popup/BroadcastChannelHandler.ts




class BroadcastChannelHandler {
  constructor(channelPrefix) {
    defineProperty_default()(this, "bc", void 0);

    defineProperty_default()(this, "channel", void 0);

    const queryParameters = new URLSearchParams(window.location.search);
    const instanceId = queryParameters.get("instanceId");
    this.channel = "".concat(channelPrefix, "_").concat(instanceId);
    this.bc = new broadcast_channel_namespaceObject.BroadcastChannel(this.channel, utils/* broadcastChannelOptions */.aN);
  }

  getMessageFromChannel() {
    return new Promise((resolve, reject) => {
      this.bc.addEventListener("message", async ev => {
        this.bc.close();

        if (ev.error) {
          reject(ev.error);
        } else {
          resolve(ev.data);
        }
      });
      this.bc.postMessage({
        data: {
          type: enums/* POPUP_LOADED */.AA
        }
      });
    });
  }

}
// EXTERNAL MODULE: ./src/BaseController.ts
var BaseController = __webpack_require__(758);
// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(485);
var external_loglevel_default = /*#__PURE__*/__webpack_require__.n(external_loglevel_);
;// CONCATENATED MODULE: ./src/Popup/StreamWindow.ts







class StreamWindow extends BaseController/* default */.Z {
  // if window has been closed by users
  constructor(_ref) {
    let {
      config,
      state = {}
    } = _ref;
    super({
      config,
      state
    });

    defineProperty_default()(this, "closed", false);

    this.initialize();
  }

  async open() {
    return new Promise((resolve, reject) => {
      const {
        communicationEngine,
        communicationWindowManager
      } = this.config;
      let popupSuccess = false;
      communicationWindowManager.once("".concat(this.state.windowId, ":closed"), () => {
        this.closed = true;
      }); // Window is not open yet

      if (!this.state.windowId) {
        this.update({
          windowId: (0,utils/* randomId */.kb)()
        });
        communicationWindowManager.once("".concat(this.state.windowId, ":opened"), () => {
          resolve(this);
        }); // Tell the other party to create a window by prompting the user to click on something

        communicationEngine.emit("notification", {
          method: enums/* COMMUNICATION_NOTIFICATIONS.CREATE_WINDOW */.Nb.CREATE_WINDOW,
          params: {
            windowId: this.state.windowId,
            url: this.state.url.href
          }
        });
      } else {
        // Send this window with `windowId` the url to open via bc
        const bc = new broadcast_channel_namespaceObject.BroadcastChannel(this.state.windowId, utils/* broadcastChannelOptions */.aN);
        bc.addEventListener("message", async ev => {
          try {
            external_loglevel_default().info(ev, "receiving data on channel: ".concat(bc.name));
            const {
              error
            } = ev;

            if (error) {
              // Popup says some error. so, we say it's not really opened
              reject(new Error(error));
              return;
            }

            const {
              message
            } = ev.data;

            if (message === enums/* POPUP_LOADED */.AA) {
              popupSuccess = true;
              await bc.postMessage({
                data: {
                  url: this.state.url.href,
                  message: "" // No need of a msg

                }
              });
              resolve(this);
              bc.close();
            }
          } catch (error) {
            reject(error);
            bc.close(); // Something went wrong. so, we close that window

            this.close();
          }
        }); // We don't know if the other end is ready to receive this msg. So, we keep writing until it receives and sends back something
        // we need backoff strategy
        // we need to wait for first attempt to succeed/fail until the second attempt
        // If we get 429, we need to wait for a while and then try again

        const postMsg = async () => {
          // this never throws
          const localResponse = await bc.postMessage({
            data: {
              message: enums/* SETUP_COMPLETE */.bJ
            }
          });
          return localResponse;
        };

        let currentDelay = bc.type === "server" ? 1000 : 200;

        const recursiveFn = async () => {
          if (!popupSuccess && !this.closed) {
            const localResponse = await postMsg();

            if (bc.type === "server") {
              const serverResponse = localResponse;

              if (serverResponse.status >= 400) {
                // We need to wait for a while and then try again
                currentDelay = Math.round(currentDelay * 1.5);
              }
            }

            await (0,utils/* sleep */._v)(currentDelay);
            await recursiveFn();
          }
        };

        recursiveFn();
      }
    });
  }

  close() {
    const {
      communicationEngine
    } = this.config;
    communicationEngine.emit("notification", {
      method: enums/* COMMUNICATION_NOTIFICATIONS.CLOSE_WINDOW */.Nb.CLOSE_WINDOW,
      params: {
        windowId: this.state.windowId
      }
    });
  }

}

/* harmony default export */ const Popup_StreamWindow = (StreamWindow);
;// CONCATENATED MODULE: ./src/Popup/PopupHandler.ts




/*
Scenarios:
1. Open a normal popup window and no communication with it - Use PopupHandler
2. Open a popup window and communicate with it - Use PopupWithBcHandler (can initiate communication by waiting for window to open or not)

3. If window is already opened, pass in windowId to the popup handler. 
   This will establish communication with the popup window and sends it a new url to redirect to


If you're trying to open a window and it gets blocked (happens if you're in iframe or delay b/w click and opening window),
StreamWindow is invoked and it writes in a channel to display a message to the user

Once user clicks on that modal/dialog, we pre-open the window and pass in the windowId (goes to 3)
*/

/**
 * Handles popup window management.
 * For broadcast channel communication, use url with `instanceId` coded into state parameter.
 * This state parameter will be passed across redirects according to OAuth spec.
 */

class PopupHandler extends BaseController/* default */.Z {
  constructor(_ref) {
    let {
      config,
      state
    } = _ref;
    super({
      config,
      state
    }); // this.id = randomId()
    // Add in dapp storage key to all popups as a hash parameter

    this.defaultConfig = {
      dappStorageKey: "",
      features: (0,utils/* getPopupFeatures */.SL)(enums/* FEATURES_DEFAULT_POPUP_WINDOW */.Of),
      target: "_blank",
      communicationEngine: null,
      communicationWindowManager: null
    };
    this.defaultState = {
      windowTimer: null,
      window: null,
      iClosedWindow: false,
      windowId: "",
      url: state.url
    };
    this.initialize();

    this._setupTimer();
  }

  async open() {
    // if window is already open
    const {
      target,
      features,
      dappStorageKey,
      communicationEngine,
      communicationWindowManager
    } = this.config;
    const {
      windowId,
      url
    } = this.state;

    if (dappStorageKey) {
      const urlHashParams = new URLSearchParams(url.hash.slice(1));
      urlHashParams.append("dappStorageKey", dappStorageKey);
      url.hash = urlHashParams.toString();
      this.update({
        url
      });
    } // No window has been pre-opened


    if (!windowId) {
      // try to open a window first
      let localWindow = window.open(url.href, target, features);

      if (!localWindow) {
        // if it's blocked, open StreamWindow
        localWindow = new Popup_StreamWindow({
          config: {
            communicationEngine,
            communicationWindowManager
          },
          state: {
            url
          }
        });
        localWindow.open();
      }

      this.update({
        window: localWindow
      });
      return;
    } // A window has been pre-opened with a query parameter `windowId`


    const localWindow = new Popup_StreamWindow({
      config: {
        communicationEngine,
        communicationWindowManager
      },
      state: {
        url,
        windowId
      }
    });
    this.update({
      window: localWindow
    });
    await localWindow.open();
  }

  close() {
    this.update({
      iClosedWindow: true
    });
    const {
      window
    } = this.state;
    if (window) window.close();
  }

  _setupTimer() {
    const timer = window.setInterval(() => {
      const {
        window,
        windowTimer,
        iClosedWindow
      } = this.state;

      if (window && window.closed) {
        if (windowTimer) clearInterval(windowTimer);

        if (!iClosedWindow) {
          this.emit("close");
        }

        this.update({
          iClosedWindow: false,
          window: null
        });
      }

      if (window === null && windowTimer) clearInterval(windowTimer);
    }, 500);
    this.update({
      windowTimer: timer
    });
  }

}

/* harmony default export */ const Popup_PopupHandler = (PopupHandler);
;// CONCATENATED MODULE: ./src/Popup/PopupStoreChannel.ts





class PopupStoreChannel {
  constructor(_ref) {
    let {
      instanceId,
      handleLogout,
      handleAccountImport,
      handleNetworkChange,
      handleSelectedAddressChange
    } = _ref;

    defineProperty_default()(this, "handleLogout", void 0);

    defineProperty_default()(this, "handleAccountImport", void 0);

    defineProperty_default()(this, "handleNetworkChange", void 0);

    defineProperty_default()(this, "handleSelectedAddressChange", void 0);

    defineProperty_default()(this, "instanceId", void 0);

    this.instanceId = instanceId;
    this.handleLogout = handleLogout;
    this.handleAccountImport = handleAccountImport;
    this.handleNetworkChange = handleNetworkChange;
    this.handleSelectedAddressChange = handleSelectedAddressChange;
  }

  setupStoreChannels() {
    this.logoutChannel();
    this.importAccountChannel();
    this.networkChangeChannel();
    this.selectedAddressChangeChannel();
  }

  logoutChannel() {
    const logoutChannel = new broadcast_channel_namespaceObject.BroadcastChannel("".concat(enums/* BROADCAST_CHANNELS.WALLET_LOGOUT_CHANNEL */.kl.WALLET_LOGOUT_CHANNEL, "_").concat(this.instanceId), utils/* broadcastChannelOptions */.aN);
    logoutChannel.addEventListener("message", ev => {
      var _ev$data;

      external_loglevel_default().info("received logout message", ev);

      if (!ev.error && ((_ev$data = ev.data) === null || _ev$data === void 0 ? void 0 : _ev$data.type) === enums/* BROADCAST_CHANNELS_MSGS.LOGOUT */.$x.LOGOUT) {
        external_loglevel_default().info("Logging Out");
        this.handleLogout();
      }
    });
  }

  importAccountChannel() {
    const walletAccountImportChannel = new broadcast_channel_namespaceObject.BroadcastChannel("".concat(enums/* BROADCAST_CHANNELS.WALLET_ACCOUNT_IMPORT_CHANNEL */.kl.WALLET_ACCOUNT_IMPORT_CHANNEL, "_").concat(this.instanceId), utils/* broadcastChannelOptions */.aN);
    walletAccountImportChannel.addEventListener("message", ev => {
      var _ev$data2;

      if (!ev.error && ((_ev$data2 = ev.data) === null || _ev$data2 === void 0 ? void 0 : _ev$data2.type) === enums/* BROADCAST_CHANNELS_MSGS.ACCOUNT_IMPORTED */.$x.ACCOUNT_IMPORTED) {
        var _ev$data3;

        this.handleAccountImport((_ev$data3 = ev.data) === null || _ev$data3 === void 0 ? void 0 : _ev$data3.privKey);
      }
    });
  }

  networkChangeChannel() {
    const walletAccountImportChannel = new broadcast_channel_namespaceObject.BroadcastChannel("".concat(enums/* BROADCAST_CHANNELS.WALLET_NETWORK_CHANGE_CHANNEL */.kl.WALLET_NETWORK_CHANGE_CHANNEL, "_").concat(this.instanceId), utils/* broadcastChannelOptions */.aN);
    walletAccountImportChannel.addEventListener("message", ev => {
      var _ev$data4;

      if (!ev.error && ((_ev$data4 = ev.data) === null || _ev$data4 === void 0 ? void 0 : _ev$data4.type) === enums/* BROADCAST_CHANNELS_MSGS.NETWORK_CHANGE */.$x.NETWORK_CHANGE) {
        var _ev$data5;

        this.handleNetworkChange((_ev$data5 = ev.data) === null || _ev$data5 === void 0 ? void 0 : _ev$data5.network);
      }
    });
  }

  selectedAddressChangeChannel() {
    const walletAccountImportChannel = new broadcast_channel_namespaceObject.BroadcastChannel("".concat(enums/* BROADCAST_CHANNELS.WALLET_SELECTED_ADDRESS_CHANNEL */.kl.WALLET_SELECTED_ADDRESS_CHANNEL, "_").concat(this.instanceId), utils/* broadcastChannelOptions */.aN);
    walletAccountImportChannel.addEventListener("message", ev => {
      var _ev$data6;

      if (!ev.error && ((_ev$data6 = ev.data) === null || _ev$data6 === void 0 ? void 0 : _ev$data6.type) === enums/* BROADCAST_CHANNELS_MSGS.SELECTED_ADDRESS_CHANGE */.$x.SELECTED_ADDRESS_CHANGE) {
        var _ev$data7;

        this.handleSelectedAddressChange((_ev$data7 = ev.data) === null || _ev$data7 === void 0 ? void 0 : _ev$data7.selectedAddress);
      }
    });
  }

}
;// CONCATENATED MODULE: ./src/Popup/PopupWithBcHandler.ts






/**
 * PopupWithBcHandler is a PopupHandler which uses broadcast channel to communicate with the popup window.
 */

class PopupWithBcHandler extends Popup_PopupHandler {
  constructor(_ref) {
    let {
      config,
      state,
      instanceId
    } = _ref;
    super({
      config,
      state
    });

    defineProperty_default()(this, "bc", void 0);

    this.bc = new broadcast_channel_namespaceObject.BroadcastChannel(instanceId, utils/* broadcastChannelOptions */.aN);
  }
  /**
   * Receives the data from popup window and closes the window
   * @param successExtraFn - Extra function to be called after the data is received
   * @returns The data to be received
   */


  handle(successExtraFn) {
    return new Promise((resolve, reject) => {
      const closeListener = () => {
        this.bc.close();
        reject(new utils/* UserError */.gK("user closed popup"));
        this.removeListener("close", closeListener);
      };

      this.on("close", closeListener);
      this.bc.addEventListener("message", async ev => {
        external_loglevel_default().info(ev, "receiving data on channel: ".concat(this.bc.name));

        try {
          const {
            error,
            data
          } = ev;

          if (error) {
            reject(new Error(error));
            return;
          }

          if (successExtraFn) await successExtraFn.call(this, data);
          resolve(data);
        } catch (error) {
          reject(error);
        } finally {
          this.bc.close();
          this.close();
        }
      });
      this.open().then(() => {
        external_loglevel_default().info("opened window ".concat(this.bc.name)); // Opened window. yay.  let the bc events do their job

        return undefined;
      }).catch(err => {
        external_loglevel_default().error(err, "something went wrong while opening window");
        reject(err);
      });
    });
  }
  /**
   * Use this if we have to send large payloads which don't fit in query/hash params.
   * Waits for ack that popup window is ready to receive data.
   * Receives the data from popup window and closes the window
   * @param payload - The data to be sent to the popup window once we have ack that window is ready to receive data
   * @param successExtraFn - Extra function to be called after the data is received
   * @returns The data to be received
   */


  handleWithHandshake(payload, successExtraFn) {
    return new Promise((resolve, reject) => {
      const closeListener = () => {
        this.bc.close();
        reject(new utils/* UserError */.gK("user closed popup"));
        this.removeListener("close", closeListener);
      };

      this.on("close", closeListener);
      this.bc.addEventListener("message", async ev => {
        try {
          external_loglevel_default().info(ev, "receiving data on channel: ".concat(this.bc.name));
          const {
            error,
            data
          } = ev;

          if (error) {
            reject(new Error(error));
            return;
          } // Do handshake


          const {
            type = ""
          } = data;

          if (type === enums/* POPUP_LOADED */.AA) {
            // Hack with generic to use the same type for both send and receive
            await this.bc.postMessage({
              data: payload
            });
          } else if (type === enums/* POPUP_RESULT */.EV) {
            if (successExtraFn) await successExtraFn.call(this, data);
            resolve(data); // Must only close the bc after result is done

            this.bc.close();
            this.close();
          }
        } catch (error) {
          reject(error);
          this.bc.close();
          this.close();
        }
      });
      this.open().then(() => {
        external_loglevel_default().info("opened window ".concat(this.bc.name)); // Opened window. yay.  let the bc events do their job

        return undefined;
      }).catch(err => {
        external_loglevel_default().error(err, "something went wrong while opening window");
        reject(err);
      });
    });
  }

}

/* harmony default export */ const Popup_PopupWithBcHandler = (PopupWithBcHandler);
// EXTERNAL MODULE: ./src/utils/utils.ts + 2 modules
var utils_utils = __webpack_require__(763);
;// CONCATENATED MODULE: ./src/Popup/RedirectHandler.ts





class RedirectHandler {
  constructor() {
    defineProperty_default()(this, "error", void 0);

    defineProperty_default()(this, "finalQueryParams", {});

    defineProperty_default()(this, "instanceParameters", void 0);

    defineProperty_default()(this, "hashParameters", void 0);

    const {
      hash
    } = window.location;
    const queryParameters = new URLSearchParams(window.location.search);
    queryParameters.forEach((value, key) => {
      this.finalQueryParams[key] = value;
    });
    const {
      error,
      instanceParameters,
      hashParameters
    } = (0,utils_utils/* handleRedirectParameters */.Kv)(hash, this.finalQueryParams);
    this.error = error;
    this.instanceParameters = instanceParameters;
    this.hashParameters = hashParameters;
  }

  async handle() {
    return new Promise((resolve, reject) => {
      const {
        finalQueryParams,
        instanceParameters,
        hashParameters,
        error
      } = this;
      let bc;

      try {
        if (!finalQueryParams.windowId) {
          bc = new broadcast_channel_namespaceObject.BroadcastChannel("".concat(enums/* BROADCAST_CHANNELS.REDIRECT_CHANNEL */.kl.REDIRECT_CHANNEL, "_").concat(instanceParameters.instanceId), utils_utils/* broadcastChannelOptions */.aN);
          bc.addEventListener("message", async ev => {
            if (ev.error) {
              reject(ev.error);
              window.close();
            } else {
              resolve();
              bc.close();
              external_loglevel_default().info("posted", {
                finalQueryParams,
                hashParameters,
                instanceParameters
              });
            }
          });
          bc.postMessage({
            data: {
              instanceParams: instanceParameters,
              hashParams: hashParameters,
              queryParams: finalQueryParams
            },
            error
          });
          setTimeout(() => {
            resolve();
            window.location.href = window.location.origin + window.location.search + window.location.hash;
          }, 5000);
        } else {
          bc = new broadcast_channel_namespaceObject.BroadcastChannel("".concat(finalQueryParams.windowId), utils_utils/* broadcastChannelOptions */.aN);
          bc.addEventListener("message", async ev => {
            const {
              url,
              message
            } = ev.data;

            if (url) {
              resolve();
              window.location.href = url;
            } else if (message === enums/* SETUP_COMPLETE */.bJ) {
              await bc.postMessage({
                data: {
                  windowId: finalQueryParams.windowId,
                  message: enums/* POPUP_LOADED */.AA
                }
              });
            }

            if (ev.error && ev.error !== "") {
              external_loglevel_default().error(ev.error);
              resolve();
              bc.close();
            }
          });
        }
      } catch (err) {
        external_loglevel_default().info(err, "something went wrong");
        reject(err);
        if (bc) bc.close();
        window.close();
      }
    });
  }

}
;// CONCATENATED MODULE: ./src/Popup/index.ts








/***/ }),

/***/ 174:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "f": () => (/* binding */ BasePreferencesController),
  "a": () => (/* binding */ DEFAULT_PREFERENCES)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
;// CONCATENATED MODULE: external "@toruslabs/http-helpers"
const http_helpers_namespaceObject = require("@toruslabs/http-helpers");
;// CONCATENATED MODULE: external "bowser"
const external_bowser_namespaceObject = require("bowser");
var external_bowser_default = /*#__PURE__*/__webpack_require__.n(external_bowser_namespaceObject);
// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(793);
// EXTERNAL MODULE: external "loglevel"
var external_loglevel_ = __webpack_require__(485);
var external_loglevel_default = /*#__PURE__*/__webpack_require__.n(external_loglevel_);
// EXTERNAL MODULE: ./src/BaseController.ts
var BaseController = __webpack_require__(758);
// EXTERNAL MODULE: ./src/interfaces.ts
var interfaces = __webpack_require__(850);
// EXTERNAL MODULE: ./src/utils/index.ts + 1 modules
var utils = __webpack_require__(883);
// EXTERNAL MODULE: ./src/Preferences/IPreferencesController.ts
var IPreferencesController = __webpack_require__(646);
;// CONCATENATED MODULE: ./src/Preferences/BasePreferencesController.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }








 // By default, poll every 3 minutes

const DEFAULT_INTERVAL = 180 * 1000;
const DEFAULT_PREFERENCES = {
  selectedCurrency: "USD",
  theme: "dark",
  locale: "en-US",
  accountType: IPreferencesController/* ACCOUNT_CATEGORY.NORMAL */.O.NORMAL,
  contacts: [],
  jwtToken: "",
  fetchedPastTx: [],
  pastTransactions: [],
  paymentTx: [],
  defaultPublicAddress: "",
  customTokens: [],
  customNfts: [],
  crashReport: true,
  userInfo: {
    aggregateVerifier: "",
    email: "",
    name: "",
    profileImage: "",
    typeOfLogin: interfaces/* LOGIN_PROVIDER.GOOGLE */.h.GOOGLE,
    verifier: "",
    verifierId: ""
  }
};
/**
 * Controller that stores shared settings and exposes convenience methods
 */

class BasePreferencesController extends BaseController/* default */.Z {
  /**
   * Name of this controller used during composition
   */

  /**
   * Creates a PreferencesController instance
   *
   * @param config - Initial options used to configure this controller
   * @param state - Initial state to set on this controller
   */
  constructor(_ref) {
    let {
      config,
      state,
      defaultPreferences,
      signAuthMessage
    } = _ref;
    super({
      config,
      state
    });

    defineProperty_default()(this, "name", "PreferencesController");

    defineProperty_default()(this, "iframeOrigin", void 0);

    defineProperty_default()(this, "signAuthMessage", void 0);

    defineProperty_default()(this, "defaultPreferences", void 0);

    if (!config.api) {
      throw new Error("PreferencesController - no api specified in config.");
    }

    this.defaultState = {
      identities: {},
      selectedAddress: "",
      lastErrorMessage: "",
      lastSuccessMessage: ""
    };
    this.defaultConfig = {
      api: config.api,
      pollInterval: DEFAULT_INTERVAL
    };
    this.initialize();
    this.defaultPreferences = _objectSpread(_objectSpread({}, DEFAULT_PREFERENCES), defaultPreferences);
    this.signAuthMessage = signAuthMessage;
  }

  setIframeOrigin(origin) {
    this.iframeOrigin = origin;
  }

  getAddressState(address) {
    const selectedAddress = address || this.state.selectedAddress;
    return this.state.identities[selectedAddress];
  }
  /**
   * Sets selected address
   *
   * @param selectedAddress - casper account hash
   */


  setSelectedAddress(selectedAddress) {
    this.update({
      selectedAddress
    });
  }

  async getUser(address) {
    const user = await (0,http_helpers_namespaceObject.get)("".concat(this.config.api, "/user?fetchTx=false"), this.headers(address), {
      useAPIKey: true
    });
    return user.data;
  }

  async createUser(params) {
    const {
      selectedCurrency,
      theme,
      verifier,
      verifierId,
      locale,
      address
    } = params;
    const userPayload = {
      default_currency: selectedCurrency,
      theme,
      verifier,
      verifier_id: verifierId,
      locale
    };
    await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/user"), userPayload, this.headers(address), {
      useAPIKey: true
    });
    this.updateState({
      theme,
      defaultPublicAddress: address,
      selectedCurrency,
      locale
    }, address);
  }

  async storeUserLogin(params) {
    const {
      verifierId,
      verifier,
      options,
      address
    } = params;

    if (!options.rehydrate) {
      const browser = external_bowser_default().getParser(window.navigator.userAgent);
      const specialBrowser = (0,utils/* getCustomDeviceInfo */.Z2)();
      const recordLoginPayload = {
        os: browser.getOSName(),
        os_version: browser.getOSVersion() || "unidentified",
        browser: (specialBrowser === null || specialBrowser === void 0 ? void 0 : specialBrowser.browser) || browser.getBrowserName() || "unidentified",
        browser_version: browser.getBrowserVersion() || "unidentified",
        platform: browser.getPlatform().type || "desktop",
        hostname: this.iframeOrigin,
        verifier,
        verifier_id: verifierId
      };
      await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/user/recordLogin"), recordLoginPayload, this.headers(address), {
        useAPIKey: true
      });
    }
  }

  async setCrashReport(isEnabled) {
    var _this$getAddressState;

    if (isEnabled === ((_this$getAddressState = this.getAddressState()) === null || _this$getAddressState === void 0 ? void 0 : _this$getAddressState.crashReport)) return true;

    try {
      await (0,http_helpers_namespaceObject.patch)("".concat(this.config.api, "/user"), {
        enable_crash_reporter: isEnabled
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        crashReport: isEnabled
      });
      return true;
    } catch (error) {
      external_loglevel_default().error(error);
      return false;
    }
  }

  async setUserTheme(theme) {
    var _this$getAddressState2;

    if (theme === ((_this$getAddressState2 = this.getAddressState()) === null || _this$getAddressState2 === void 0 ? void 0 : _this$getAddressState2.theme)) return true;

    try {
      await (0,http_helpers_namespaceObject.patch)("".concat(this.config.api, "/user"), {
        theme
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        theme
      });
      return true;
    } catch (error) {
      external_loglevel_default().error(error);
      return false;
    }
  }

  async setUserLocale(locale) {
    var _this$getAddressState3;

    if (locale === ((_this$getAddressState3 = this.getAddressState()) === null || _this$getAddressState3 === void 0 ? void 0 : _this$getAddressState3.locale)) return;

    try {
      await (0,http_helpers_namespaceObject.patch)("".concat(this.config.api, "/user"), {
        locale
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        locale
      });
      return true;
    } catch (error) {
      external_loglevel_default().error("unable to set locale", error);
      return false;
    }
  }

  async setSelectedCurrency(payload) {
    var _this$getAddressState4;

    if (payload.selectedCurrency === ((_this$getAddressState4 = this.getAddressState()) === null || _this$getAddressState4 === void 0 ? void 0 : _this$getAddressState4.selectedCurrency)) return true;

    try {
      await (0,http_helpers_namespaceObject.patch)("".concat(this.config.api, "/user"), {
        default_currency: payload.selectedCurrency
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        selectedCurrency: payload.selectedCurrency
      });
      return true;
    } catch (error) {
      external_loglevel_default().error(error);
      return false;
    }
  }

  async addContact(contact) {
    try {
      var _this$getAddressState5;

      const response = await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/contact"), contact, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        contacts: [...(((_this$getAddressState5 = this.getAddressState()) === null || _this$getAddressState5 === void 0 ? void 0 : _this$getAddressState5.contacts) || []), response.data]
      });
      return true;
    } catch (error) {
      external_loglevel_default().error("unable to add contact", error);
      return false;
    }
  }

  async deleteContact(contactId) {
    try {
      var _this$getAddressState6;

      const response = await (0,http_helpers_namespaceObject.remove)("".concat(this.config.api, "/contact/").concat(contactId), {}, this.headers(), {
        useAPIKey: true
      });
      const finalContacts = (_this$getAddressState6 = this.getAddressState()) === null || _this$getAddressState6 === void 0 ? void 0 : _this$getAddressState6.contacts.filter(contact => contact.id !== response.data.id);
      if (finalContacts) this.updateState({
        contacts: [...finalContacts]
      });
      return true;
    } catch (error) {
      external_loglevel_default().error("unable to delete contact", error);
      return false;
    }
  }

  async revokeDiscord(idToken) {
    try {
      const resp = await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/revoke/discord"), {
        token: idToken
      }, this.headers(), {
        useAPIKey: true
      });
      external_loglevel_default().info(resp);
    } catch (error) {
      external_loglevel_default().error(error);
    }
  }

  async patchPastTx(body, address) {
    try {
      const response = await (0,http_helpers_namespaceObject.patch)("".concat(this.config.api, "/transaction"), body, this.headers(address), {
        useAPIKey: true
      });
      external_loglevel_default().info("successfully patched", response);
    } catch (error) {
      external_loglevel_default().error("unable to patch tx", error);
    }
  }

  async postPastTx(tx, address) {
    try {
      const response = await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/transaction"), tx, this.headers(address), {
        useAPIKey: true
      });
      external_loglevel_default().info("successfully posted tx", response);
      return response;
    } catch (error) {
      external_loglevel_default().error(error, "unable to insert transaction");
    }
  }

  async getWalletOrders(address) {
    try {
      const response = await (0,http_helpers_namespaceObject.get)("".concat(this.config.api, "/transaction"), this.headers(address), {
        useAPIKey: true
      });
      return response.success ? response.data ? response.data : [] : [];
    } catch (error) {
      external_loglevel_default().error("unable to get wallet orders tx", error);
      return [];
    }
  }

  async getTopUpOrders(address) {
    try {
      const response = await (0,http_helpers_namespaceObject.get)("".concat(this.config.commonApiHost, "/transaction"), this.headers(address), {
        useAPIKey: true
      });
      return response.data || [];
    } catch (error) {
      external_loglevel_default().error("unable to fetch past Top up orders", error);
    }
  }

  async getBillBoardData() {
    try {
      const response = await (0,http_helpers_namespaceObject.get)("".concat(this.config.api, "/billboard"), this.headers(), {
        useAPIKey: true
      });
      return response.success ? response.data : [];
    } catch (error) {
      external_loglevel_default().error("unable to get billboard data", error);
      return [];
    }
  }

  async getMessageForSigning(publicAddress) {
    const response = await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/auth/message"), {
      public_address: publicAddress
    }, {}, {
      useAPIKey: true
    });
    return response.message;
  }

  async getTwitterId(payload) {
    const res = await (0,http_helpers_namespaceObject.get)("".concat(this.config.api, "/twitter?screen_name=").concat(payload.nick), this.headers(), {
      useAPIKey: true
    });
    return "".concat(payload.typeOfLogin.toLowerCase(), "|").concat(res.data.toString());
  }

  async sendEmail(payload) {
    return (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/transaction/sendemail"), payload.emailObject, this.headers(), {
      useAPIKey: true
    });
  }

  async refreshJwt() {
    const address = this.state.selectedAddress;
    const messageToSign = await this.getMessageForSigning(address);
    if (!messageToSign.startsWith(this.config.signInPrefix)) throw new Error("Cannot sign on invalid message");
    const signedMessage = this.signAuthMessage(address, messageToSign);
    const response = await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/auth/verify"), {
      public_address: address,
      signed_message: signedMessage
    }, {}, {
      useAPIKey: true
    });
    this.updateState({
      jwtToken: response.token
    }, address);
  }

  async getDappList() {
    try {
      const response = await (0,http_helpers_namespaceObject.get)("".concat(this.config.api, "/dapps"), this.headers(), {
        useAPIKey: true
      });
      return response.success ? response.data : [];
    } catch (error) {
      external_loglevel_default().error("unable to get billboard data", error);
      return [];
    }
  }

  async init(address, userInfo, jwtToken) {
    let response = {
      token: jwtToken
    };
    if (this.getAddressState(address)) return;

    if (!jwtToken) {
      const messageToSign = await this.getMessageForSigning(address);
      if (!messageToSign.startsWith(this.config.signInPrefix)) throw new Error("Cannot sign on invalid message");
      const signedMessage = this.signAuthMessage(address, messageToSign);
      response = await (0,http_helpers_namespaceObject.post)("".concat(this.config.api, "/auth/verify"), {
        public_address: address,
        signed_message: signedMessage
      }, {}, {
        useAPIKey: true
      });
    }

    this.updateState({
      jwtToken: response.token,
      userInfo
    }, address);
  }

  updateState(preferences, address) {
    const selectedAddress = address || this.state.selectedAddress;
    const currentState = this.getAddressState(selectedAddress) || (0,external_lodash_.cloneDeep)(this.defaultPreferences);

    const mergedState = _objectSpread(_objectSpread({}, currentState), preferences);

    this.update({
      identities: _objectSpread(_objectSpread({}, this.state.identities), {}, {
        [selectedAddress]: mergedState
      })
    });
    return mergedState;
  }

  headers(address) {
    var _this$getAddressState7;

    const selectedAddress = address || this.state.selectedAddress;
    return (0,utils/* getHeaders */.wU)(((_this$getAddressState7 = this.getAddressState(selectedAddress)) === null || _this$getAddressState7 === void 0 ? void 0 : _this$getAddressState7.jwtToken) || "");
  }

}

/***/ }),

/***/ 646:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "F": () => (/* binding */ ACTIVITY_ACTION),
/* harmony export */   "O": () => (/* binding */ ACCOUNT_CATEGORY)
/* harmony export */ });
const ACTIVITY_ACTION = {
  ACTIVITY_ACTION_ALL: "walletActivity.allTransactions",
  ACTIVITY_ACTION_SEND: "walletActivity.send",
  ACTIVITY_ACTION_RECEIVE: "walletActivity.receive",
  ACTIVITY_ACTION_TOPUP: "walletActivity.topup"
};
const ACCOUNT_CATEGORY = {
  NORMAL: "normal",
  THRESHOLD: "threshold",
  IMPORTED: "imported"
};

/***/ }),

/***/ 908:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "i": () => (/* binding */ BaseTransactionStateManager)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(793);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(758);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(883);
/* harmony import */ var _ITransactionController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(664);


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }





class BaseTransactionStateManager extends _BaseController__WEBPACK_IMPORTED_MODULE_2__/* ["default"] */ .Z {
  constructor(_ref) {
    let {
      config,
      state,
      getCurrentChainId
    } = _ref;
    super({
      config,
      state
    });

    _babel_runtime_helpers_defineProperty__WEBPACK_IMPORTED_MODULE_0___default()(this, "getCurrentChainId", void 0);

    this.defaultConfig = {
      txHistoryLimit: 40
    };
    this.defaultState = {
      transactions: {},
      unapprovedTxs: {},
      currentNetworkTxsList: []
    };
    this.initialize();
    this.getCurrentChainId = getCurrentChainId;
  }

  getUnapprovedTxList() {
    const chainId = this.getCurrentChainId();
    return (0,lodash__WEBPACK_IMPORTED_MODULE_1__.pickBy)(this.state.transactions, transaction => transaction.status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.unapproved */ .LN.unapproved && (0,_utils__WEBPACK_IMPORTED_MODULE_3__/* .transactionMatchesNetwork */ .lw)(transaction, chainId));
  }

  getTransaction(txId) {
    const {
      transactions
    } = this.state;
    return transactions[txId];
  }

  updateTransaction(txMeta) {
    // commit txMeta to state
    const txId = txMeta.id;
    txMeta.updated_at = new Date().toISOString();
    this.update({
      transactions: _objectSpread(_objectSpread({}, this.state.transactions), {}, {
        [txId]: txMeta
      })
    });
  }

  setTxStatusRejected(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.rejected */ .LN.rejected);

    this._deleteTransaction(txId);
  }
  /**
   * The implementing controller can override this functionality and add custom logic + call super.()
   */


  setTxStatusUnapproved(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.unapproved */ .LN.unapproved);
  }

  setTxStatusApproved(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.approved */ .LN.approved);
  }

  setTxStatusSigned(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.signed */ .LN.signed);
  }

  setTxStatusSubmitted(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.submitted */ .LN.submitted);
  }

  setTxStatusDropped(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.dropped */ .LN.dropped);
  }

  setTxStatusExpired(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.expired */ .LN.expired);
  }

  setTxStatusConfirmed(txId) {
    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.confirmed */ .LN.confirmed);
  }

  setTxStatusFailed(txId, error_) {
    const error = !error_ ? new Error("Internal torus failure") : error_;
    const txMeta = this.getTransaction(txId);
    txMeta.error = error;
    this.updateTransaction(txMeta);

    this._setTransactionStatus(txId, _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.failed */ .LN.failed);
  }
  /**
   * Method to determine if the transaction is in a final state
   * @param status - Transaction status
   * @returns boolean if the transaction is in a final state
   */


  isFinalState(status) {
    return status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.rejected */ .LN.rejected || status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.submitted */ .LN.submitted || status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.confirmed */ .LN.confirmed || status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.failed */ .LN.failed || status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.cancelled */ .LN.cancelled || status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.expired */ .LN.expired;
  }
  /**
   * Filters out the unapproved transactions from state
   */


  clearUnapprovedTxs() {
    this.update({
      transactions: (0,lodash__WEBPACK_IMPORTED_MODULE_1__.omitBy)(this.state.transactions, transaction => transaction.status === _ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TransactionStatus.unapproved */ .LN.unapproved)
    });
  }
  /**
   * will append new transactions to old txns.
   */


  _addTransactionsToState(transactions) {
    this.update({
      transactions: transactions.reduce((result, newTx) => {
        result[newTx.id] = newTx;
        return result;
      }, this.state.transactions)
    });
  }
  /**
   * will set new txns, override existing if any in state.
   */


  _setTransactionsToState(transactions) {
    this.update({
      transactions: transactions.reduce((result, newTx) => {
        result[newTx.id] = newTx;
        return result;
      }, {})
    });
  }

  _deleteTransaction(targetTransactionId) {
    const {
      transactions
    } = this.state;
    delete transactions[targetTransactionId];
    this.update({
      transactions
    });
  }

  _deleteTransactions(targetTransactionIds) {
    const {
      transactions
    } = this.state;
    targetTransactionIds.forEach(transactionId => {
      delete transactions[transactionId];
    });
    this.update({
      transactions
    });
  }

  _setTransactionStatus(txId, status) {
    const txMeta = this.getTransaction(txId);

    if (!txMeta) {
      return;
    }

    txMeta.status = status; // only updating status so no validation required on txn.

    this.updateTransaction(txMeta);
    this.emit(_ITransactionController__WEBPACK_IMPORTED_MODULE_4__/* .TX_EVENTS.TX_STATUS_UPDATE */ .RM.TX_STATUS_UPDATE, {
      txId,
      status
    });

    if (this.isFinalState(status)) {
      this.emit("".concat(txMeta.id, ":finished"), txMeta);
    } else {
      this.emit("".concat(txMeta.id, ":").concat(status), txId);
    }
  }

}

/***/ }),

/***/ 664:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "L0": () => (/* binding */ TRANSACTION_TYPES),
/* harmony export */   "LN": () => (/* binding */ TransactionStatus),
/* harmony export */   "RM": () => (/* binding */ TX_EVENTS)
/* harmony export */ });
/**
 * The status of the transaction. Each status represents the state of the transaction internally
 * in the wallet. Some of these correspond with the state of the transaction on the network, but
 * some are wallet-specific.
 */
let TransactionStatus;

(function (TransactionStatus) {
  TransactionStatus["approved"] = "approved";
  TransactionStatus["cancelled"] = "cancelled";
  TransactionStatus["confirmed"] = "confirmed";
  TransactionStatus["failed"] = "failed";
  TransactionStatus["finalized"] = "finalized";
  TransactionStatus["processed"] = "processed";
  TransactionStatus["rejected"] = "rejected";
  TransactionStatus["signed"] = "signed";
  TransactionStatus["submitted"] = "submitted";
  TransactionStatus["unapproved"] = "unapproved";
  TransactionStatus["dropped"] = "dropped";
  TransactionStatus["expired"] = "expired";
})(TransactionStatus || (TransactionStatus = {}));

const TRANSACTION_TYPES = {
  CONTRACT_INTERACTION: "contractInteraction",
  DEPLOY_CONTRACT: "contractDeployment",
  WASM_BASED_DEPLOY: "wasmBasedDeploy",
  STANDARD_TRANSACTION: "transaction",
  STANDARD_PAYMENT_TRANSACTION: "payment_transaction" // specific to chains like solana and casper

};
const TX_EVENTS = {
  TX_WARNING: "tx:warning",
  TX_ERROR: "tx:error",
  TX_FAILED: "tx:failed",
  TX_CONFIRMED: "tx:confirmed",
  TX_DROPPED: "tx:dropped",
  TX_EXPIRED: "tx:expired",
  TX_STATUS_UPDATE: "tx:status_update",
  TX_UNAPPROVED: "tx:unapproved"
};

/***/ }),

/***/ 259:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createEventEmitterProxy)
/* harmony export */ });
const filterNoop = () => true;

const internalEvents = ["newListener", "removeListener"];

const externalEventFilter = name => !internalEvents.includes(name);

function getRawListeners(eventEmitter, name) {
  // prefer native
  return eventEmitter.rawListeners(name);
}

function createEventEmitterProxy(initialTarget, opts) {
  // parse options
  const finalOpts = opts || {};
  let eventFilter = finalOpts.eventFilter || filterNoop;
  if (typeof eventFilter === "string" && eventFilter === "skipInternal") eventFilter = externalEventFilter;
  if (typeof eventFilter !== "function") throw new Error("createEventEmitterProxy - Invalid eventFilter");
  let target = initialTarget;

  let setTarget = newTarget => {
    const oldTarget = target;
    target = newTarget;
    oldTarget.eventNames().filter(eventFilter).forEach(name => {
      getRawListeners(oldTarget, name).forEach(handler => newTarget.on(name, handler));
    }); // remove old listeners

    oldTarget.removeAllListeners();
  };

  const proxy = new Proxy({}, {
    get: (_, name) => {
      // override `setTarget` access
      if (name === "setTarget") return setTarget;
      return target[name];
    },
    set: (_, name, value) => {
      // allow `setTarget` overrides
      if (name === "setTarget") {
        setTarget = value;
        return true;
      }

      target[name] = value;
      return true;
    }
  });
  return proxy;
}

/***/ }),

/***/ 868:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (/* binding */ createSwappableProxy)
/* harmony export */ });
function createSwappableProxy(initialTarget) {
  let target = initialTarget;

  let setTarget = newTarget => {
    target = newTarget;
  };

  const proxy = new Proxy({}, {
    get: (_, name) => {
      // override `setTarget` access
      if (name === "setTarget") return setTarget;
      return target[name];
    },
    set: (_, name, value) => {
      // allow `setTarget` overrides
      if (name === "setTarget") {
        setTarget = value;
        return true;
      }

      target[name] = value;
      return true;
    }
  });
  return proxy;
}

/***/ }),

/***/ 1:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$x": () => (/* binding */ BROADCAST_CHANNELS_MSGS),
/* harmony export */   "AA": () => (/* binding */ POPUP_LOADED),
/* harmony export */   "CU": () => (/* binding */ FEATURES_CONFIRM_WINDOW),
/* harmony export */   "EV": () => (/* binding */ POPUP_RESULT),
/* harmony export */   "F1": () => (/* binding */ ACTIVITY_ACTION_ALL),
/* harmony export */   "GA": () => (/* binding */ PROVIDER_JRPC_METHODS),
/* harmony export */   "GI": () => (/* binding */ FEATURES_DEFAULT_WALLET_WINDOW),
/* harmony export */   "Jn": () => (/* binding */ FEATURES_PROVIDER_CHANGE_WINDOW),
/* harmony export */   "K4": () => (/* binding */ ACTIVITY_ACTION_SEND),
/* harmony export */   "Mh": () => (/* binding */ ACTIVITY_PERIOD_WEEK_ONE),
/* harmony export */   "NO": () => (/* binding */ ACTIVITY_PERIOD_MONTH_SIX),
/* harmony export */   "Nb": () => (/* binding */ COMMUNICATION_NOTIFICATIONS),
/* harmony export */   "Of": () => (/* binding */ FEATURES_DEFAULT_POPUP_WINDOW),
/* harmony export */   "P": () => (/* binding */ ACTIVITY_STATUS_CANCELLING),
/* harmony export */   "U": () => (/* binding */ ACTIVITY_PERIOD_MONTH_ONE),
/* harmony export */   "bJ": () => (/* binding */ SETUP_COMPLETE),
/* harmony export */   "eN": () => (/* binding */ ACTIVITY_STATUS_UNSUCCESSFUL),
/* harmony export */   "kl": () => (/* binding */ BROADCAST_CHANNELS),
/* harmony export */   "p": () => (/* binding */ ACTIVITY_STATUS_CANCELLED),
/* harmony export */   "p3": () => (/* binding */ ACTIVITY_ACTION_TOPUP),
/* harmony export */   "qU": () => (/* binding */ ACTIVITY_ACTION_RECEIVE),
/* harmony export */   "rq": () => (/* binding */ ACTIVITY_STATUS_PENDING),
/* harmony export */   "sE": () => (/* binding */ ACTIVITY_PERIOD_ALL),
/* harmony export */   "v": () => (/* binding */ ACTIVITY_STATUS_SUCCESSFUL),
/* harmony export */   "vU": () => (/* binding */ COMMUNICATION_JRPC_METHODS),
/* harmony export */   "zK": () => (/* binding */ PROVIDER_NOTIFICATIONS)
/* harmony export */ });
const FEATURES_PROVIDER_CHANGE_WINDOW = {
  height: 660,
  width: 375
};
const FEATURES_DEFAULT_WALLET_WINDOW = {
  height: 740,
  width: 1315
};
const FEATURES_DEFAULT_POPUP_WINDOW = {
  height: 700,
  width: 1200
};
const FEATURES_CONFIRM_WINDOW = {
  height: 700,
  width: 450
};
const POPUP_LOADED = "popup_loaded";
const POPUP_RESULT = "popup_result";
const SETUP_COMPLETE = "setup_complete";
const ACTIVITY_ACTION_ALL = "walletActivity.allTransactions";
const ACTIVITY_ACTION_SEND = "walletActivity.send";
const ACTIVITY_ACTION_RECEIVE = "walletActivity.receive";
const ACTIVITY_ACTION_TOPUP = "walletActivity.topup";
const ACTIVITY_PERIOD_ALL = "walletActivity.all";
const ACTIVITY_PERIOD_WEEK_ONE = "walletActivity.lastOneWeek";
const ACTIVITY_PERIOD_MONTH_ONE = "walletActivity.lastOneMonth";
const ACTIVITY_PERIOD_MONTH_SIX = "walletActivity.lastSixMonts";
const ACTIVITY_STATUS_SUCCESSFUL = "walletActivity.successful";
const ACTIVITY_STATUS_UNSUCCESSFUL = "walletActivity.unsuccessful";
const ACTIVITY_STATUS_PENDING = "walletActivity.pending";
const ACTIVITY_STATUS_CANCELLED = "walletActivity.cancelled";
const ACTIVITY_STATUS_CANCELLING = "walletActivity.cancelling";
const COMMUNICATION_NOTIFICATIONS = {
  IFRAME_STATUS: "iframe_status",
  // Tell embed to create the window
  CREATE_WINDOW: "create_window",
  // Tell embed to close the window
  CLOSE_WINDOW: "close_window",
  USER_LOGGED_IN: "user_logged_in",
  USER_LOGGED_OUT: "user_logged_out"
};
const COMMUNICATION_JRPC_METHODS = {
  LOGOUT: "logout",
  WALLET_INSTANCE_ID: "wallet_instance_id",
  USER_INFO: "user_info",
  SET_PROVIDER: "set_provider",
  TOPUP: "topup",
  IFRAME_STATUS: "iframe_status",
  // embed has opened the window as requested
  OPENED_WINDOW: "opened_window",
  // user has closed the window from embed's side
  CLOSED_WINDOW: "closed_window",
  GET_PROVIDER_STATE: "get_provider_state",
  LOGIN_WITH_PRIVATE_KEY: "login_with_private_key"
};
const PROVIDER_JRPC_METHODS = {
  GET_PROVIDER_STATE: "wallet_get_provider_state"
};
const PROVIDER_NOTIFICATIONS = {
  ACCOUNTS_CHANGED: "wallet_accounts_changed",
  CHAIN_CHANGED: "wallet_chain_changed",
  UNLOCK_STATE_CHANGED: "wallet_unlock_state_changed"
};
const BROADCAST_CHANNELS = {
  REDIRECT_CHANNEL: "redirect_channel",
  PROVIDER_CHANGE_CHANNEL: "torus_provider_change_channel",
  TRANSACTION_CHANNEL: "torus_channel",
  MESSAGE_CHANNEL: "torus_message_channel",
  WALLET_LOGOUT_CHANNEL: "wallet_logout_channel",
  WALLET_SELECTED_ADDRESS_CHANNEL: "wallet_selected_address_channel",
  WALLET_NETWORK_CHANGE_CHANNEL: "wallet_network_change_channel",
  WALLET_ACCOUNT_IMPORT_CHANNEL: "wallet_account_import_channel"
};
const BROADCAST_CHANNELS_MSGS = {
  LOGOUT: "logout",
  ACCOUNT_IMPORTED: "account_imported",
  SELECTED_ADDRESS_CHANGE: "selected_address_change",
  NETWORK_CHANGE: "network_change"
};

/***/ }),

/***/ 850:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "U": () => (/* binding */ PAYMENT_PROVIDER),
/* harmony export */   "h": () => (/* binding */ LOGIN_PROVIDER)
/* harmony export */ });
/**
 * State change callbacks
 */

/**
 * Base controller configuration
 */

/**
 * Base state representation
 */
const LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  REDDIT: "reddit",
  DISCORD: "discord",
  TWITCH: "twitch",
  APPLE: "apple",
  LINE: "line",
  GITHUB: "github",
  KAKAO: "kakao",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  WEIBO: "weibo",
  WECHAT: "wechat",
  EMAIL_PASSWORDLESS: "email_passwordless"
};
/**
 * {@label loginProviderType}
 */

const PAYMENT_PROVIDER = {
  MOONPAY: "moonpay",
  WYRE: "wyre",
  RAMPNETWORK: "rampnetwork",
  XANPOOL: "xanpool",
  MERCURYO: "mercuryo",
  TRANSAK: "transak"
};

/***/ }),

/***/ 883:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gK": () => (/* reexport */ utils/* UserError */.gK),
  "H9": () => (/* reexport */ utils/* addressSlicer */.H9),
  "aN": () => (/* reexport */ utils/* broadcastChannelOptions */.aN),
  "dk": () => (/* reexport */ utils/* concatSig */.dk),
  "p6": () => (/* reexport */ utils/* formatDate */.p6),
  "d5": () => (/* reexport */ utils/* formatSmallNumbers */.d5),
  "mr": () => (/* reexport */ utils/* formatTime */.mr),
  "Z2": () => (/* reexport */ utils/* getCustomDeviceInfo */.Z2),
  "wU": () => (/* reexport */ utils/* getHeaders */.wU),
  "SL": () => (/* reexport */ utils/* getPopupFeatures */.SL),
  "OG": () => (/* reexport */ getTxStatusText),
  "Kv": () => (/* reexport */ utils/* handleRedirectParameters */.Kv),
  "rj": () => (/* reexport */ utils/* hashMessage */.rj),
  "I4": () => (/* reexport */ utils/* intToHex */.I4),
  "rX": () => (/* reexport */ utils/* padWithZeroes */.rX),
  "kb": () => (/* reexport */ utils/* randomId */.kb),
  "l": () => (/* reexport */ utils/* signMessage */.l),
  "I6": () => (/* reexport */ utils/* significantDigits */.I6),
  "_v": () => (/* reexport */ utils/* sleep */._v),
  "Vs": () => (/* reexport */ utils/* timeout */.Vs),
  "lw": () => (/* reexport */ utils/* transactionMatchesNetwork */.lw)
});

// EXTERNAL MODULE: ./src/enums.ts
var enums = __webpack_require__(1);
;// CONCATENATED MODULE: ./src/utils/txUtils.ts

const getTxStatusText = txStatus => {
  switch (txStatus) {
    case "rejected":
    case "unapproved":
    case "failed":
      return enums/* ACTIVITY_STATUS_UNSUCCESSFUL */.eN;

    case "confirmed":
      return enums/* ACTIVITY_STATUS_SUCCESSFUL */.v;

    case "submitted":
      return enums/* ACTIVITY_STATUS_PENDING */.rq;

    case "cancelled":
      return enums/* ACTIVITY_STATUS_CANCELLED */.p;

    default:
      return "";
  }
};
// EXTERNAL MODULE: ./src/utils/utils.ts + 2 modules
var utils = __webpack_require__(763);
;// CONCATENATED MODULE: ./src/utils/index.ts



/***/ }),

/***/ 763:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "gK": () => (/* binding */ UserError),
  "H9": () => (/* binding */ addressSlicer),
  "aN": () => (/* binding */ broadcastChannelOptions),
  "dk": () => (/* binding */ concatSig),
  "p6": () => (/* binding */ formatDate),
  "d5": () => (/* binding */ formatSmallNumbers),
  "mr": () => (/* binding */ formatTime),
  "Z2": () => (/* binding */ getCustomDeviceInfo),
  "wU": () => (/* binding */ getHeaders),
  "SL": () => (/* binding */ getPopupFeatures),
  "Kv": () => (/* binding */ handleRedirectParameters),
  "rj": () => (/* binding */ hashMessage),
  "I4": () => (/* binding */ intToHex),
  "rX": () => (/* binding */ padWithZeroes),
  "kb": () => (/* binding */ randomId),
  "l": () => (/* binding */ signMessage),
  "I6": () => (/* binding */ significantDigits),
  "_v": () => (/* binding */ sleep),
  "Vs": () => (/* binding */ timeout),
  "lw": () => (/* binding */ transactionMatchesNetwork)
});

;// CONCATENATED MODULE: external "bignumber.js"
const external_bignumber_js_namespaceObject = require("bignumber.js");
;// CONCATENATED MODULE: external "ethereumjs-util"
const external_ethereumjs_util_namespaceObject = require("ethereumjs-util");
;// CONCATENATED MODULE: ./src/utils/utils.ts



/**
 * General utility functions
 */
function intToHex(i) {
  const hex = i.toString(16);
  return "0x".concat(hex);
}
/**
 * Returns a random number. Don't use for cryptographic purposes.
 * @returns a random number
 */

const randomId = () => Math.random().toString(36).slice(2);
/**
 * Pads the front of the given hex string with zeroes until it reaches the
 * target length. If the input string is already longer than or equal to the
 * target length, it is returned unmodified.
 *
 * If the input string is "0x"-prefixed or not a hex string, an error will be
 * thrown.
 *
 * @param hexString - The hexadecimal string to pad with zeroes.
 * @param targetLength - The target length of the hexadecimal string.
 * @returns The input string front-padded with zeroes, or the original string
 * if it was already greater than or equal to to the target length.
 */

function padWithZeroes(hexString, targetLength) {
  if (hexString !== "" && !/^[a-f0-9]+$/iu.test(hexString)) {
    throw new Error("Expected an unprefixed hex string. Received: ".concat(hexString));
  }

  if (targetLength < 0) {
    throw new Error("Expected a non-negative integer target length. Received: ".concat(targetLength));
  }

  return String.prototype.padStart.call(hexString, targetLength, "0");
}
/**
 * Concatenate an extended ECDSA signature into a hex string.
 *
 * @param v - The 'v' portion of the signature.
 * @param r - The 'r' portion of the signature.
 * @param s - The 's' portion of the signature.
 * @returns The concatenated ECDSA signature.
 */

function concatSig(v, r, s) {
  const rSig = (0,external_ethereumjs_util_namespaceObject.fromSigned)(r);
  const sSig = (0,external_ethereumjs_util_namespaceObject.fromSigned)(s);
  const vSig = (0,external_ethereumjs_util_namespaceObject.bufferToInt)(v);
  const rStr = padWithZeroes((0,external_ethereumjs_util_namespaceObject.toUnsigned)(rSig).toString("hex"), 64);
  const sStr = padWithZeroes((0,external_ethereumjs_util_namespaceObject.toUnsigned)(sSig).toString("hex"), 64);
  const vStr = (0,external_ethereumjs_util_namespaceObject.stripHexPrefix)(intToHex(vSig));
  return (0,external_ethereumjs_util_namespaceObject.addHexPrefix)(rStr.concat(sStr, vStr));
}
function timeout(duration) {
  return new Promise(resolve => {
    const timeoutRef = window.setTimeout(() => {
      resolve();
      window.clearTimeout(timeoutRef);
    }, duration);
  });
}
const getHeaders = jwt => {
  return {
    headers: {
      Authorization: "Bearer ".concat(jwt),
      "Content-Type": "application/json; charset=utf-8"
    }
  };
};
/**
 * Text/number formatting utilities
 */

const formatSmallNumbers = function (number) {
  let currency = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "usd";
  let noTilde = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  const finalNumber = external_bignumber_js_namespaceObject.BigNumber.isBigNumber(number) ? number.toNumber() : number;
  if (!Number.isFinite(finalNumber)) return "";
  const value = currency.toLowerCase() === "usd" ? parseFloat(Number(finalNumber).toFixed(2)) : parseFloat(Number(finalNumber).toFixed(5));
  const tilde = value > 0 ? "~ " : "";
  return "".concat(currency.toLowerCase() === "usd" || noTilde ? "" : tilde).concat(Number(value), " ").concat(currency.toUpperCase());
};
const addressSlicer = function (address) {
  let sliceLength = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 5;

  if (address.length < 11) {
    return address;
  }

  if (typeof address !== "string") return "";
  return "".concat(address.slice(0, sliceLength), "...").concat(address.slice(-sliceLength));
};
const significantDigits = function (number) {
  let perc = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
  let length_ = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 2;
  let input = !external_bignumber_js_namespaceObject.BigNumber.isBigNumber(number) ? new external_bignumber_js_namespaceObject.BigNumber(number) : number;
  if (input.isZero()) return input;

  if (perc) {
    input = input.times(new external_bignumber_js_namespaceObject.BigNumber(100));
  }

  let depth;

  if (input.gte(new external_bignumber_js_namespaceObject.BigNumber(1))) {
    depth = length_;
  } else {
    depth = length_ - 1 + Math.ceil(Math.log10(new external_bignumber_js_namespaceObject.BigNumber("1").div(input).toNumber()));
  }

  const shift = new external_bignumber_js_namespaceObject.BigNumber(10).pow(new external_bignumber_js_namespaceObject.BigNumber(depth));
  const roundedNumber = Math.round(shift.times(input).toNumber()) / shift.toNumber();
  return roundedNumber;
};
const formatDate = inputDate => {
  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = monthList[date.getMonth()];
  const year = date.getFullYear();
  return "".concat(day, " ").concat(month, " ").concat(year);
};
const formatTime = time => {
  return new Date(time).toTimeString().slice(0, 8);
};
/**
 * Network utilities
 */

const transactionMatchesNetwork = (transaction, chainId) => {
  if (typeof transaction.chainId !== "undefined") {
    return transaction.chainId === chainId;
  }

  return false;
};
/**
 * Signing utils
 */

const hashMessage = message => {
  const bufferedMessage = Buffer.from(message, "utf8");
  const el = (0,external_ethereumjs_util_namespaceObject.hashPersonalMessage)(bufferedMessage);
  return el;
};
const signMessage = (privateKey, data) => {
  const privKey = Buffer.from(privateKey, "hex");
  const message = (0,external_ethereumjs_util_namespaceObject.stripHexPrefix)(data);
  const msgSig = (0,external_ethereumjs_util_namespaceObject.ecsign)(Buffer.from(message, "hex"), privKey);
  const rawMsgSig = concatSig((0,external_ethereumjs_util_namespaceObject.intToBuffer)(msgSig.v), msgSig.r, msgSig.s);
  return rawMsgSig;
};
/**
 * popup handler utils
 */

function getPopupFeatures(_ref) {
  let {
    width: w,
    height: h
  } = _ref;
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
  const systemZoom = 1; // No reliable estimate

  const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
  const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
  const features = "titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(h / systemZoom, ",width=").concat(w / systemZoom, ",top=").concat(top, ",left=").concat(left);
  return features;
}
const broadcastChannelOptions = {
  // type: 'localstorage', // (optional) enforce a type, oneOf['native', 'idb', 'localstorage', 'node']
  webWorkerSupport: false // (optional) set this to false if you know that your channel will never be used in a WebWorker (increases performance)

};
function getCustomDeviceInfo() {
  var _navigator;

  if ((_navigator = navigator) !== null && _navigator !== void 0 && _navigator.brave) {
    return {
      browser: "Brave"
    };
  }
}
class UserError extends Error {}
const handleRedirectParameters = (hash, queryParameters) => {
  const hashParameters = {};
  const hashUrl = new URL("".concat(window.location.origin, "/?").concat(hash.slice(1)));
  hashUrl.searchParams.forEach((value, key) => {
    hashParameters[key] = value;
  });
  let instanceParameters = {};
  let error = "";

  if (!queryParameters.windowId) {
    if (Object.keys(hashParameters).length > 0 && hashParameters.state) {
      instanceParameters = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(hashParameters.state)))) || {};
      error = hashParameters.error_description || hashParameters.error || error;
    } else if (Object.keys(queryParameters).length > 0 && queryParameters.state) {
      instanceParameters = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(queryParameters.state)))) || {};
      if (queryParameters.error) error = queryParameters.error;
    }
  }

  return {
    error,
    instanceParameters,
    hashParameters
  };
};
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/***/ }),

/***/ 195:
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ 33:
/***/ ((module) => {

"use strict";
module.exports = require("@toruslabs/openlogin-jrpc");

/***/ }),

/***/ 19:
/***/ ((module) => {

"use strict";
module.exports = require("eth-rpc-errors");

/***/ }),

/***/ 793:
/***/ ((module) => {

"use strict";
module.exports = require("lodash");

/***/ }),

/***/ 485:
/***/ ((module) => {

"use strict";
module.exports = require("loglevel");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ACCOUNT_CATEGORY": () => (/* reexport safe */ _Preferences_IPreferencesController__WEBPACK_IMPORTED_MODULE_18__.O),
/* harmony export */   "ACTIVITY_ACTION": () => (/* reexport safe */ _Preferences_IPreferencesController__WEBPACK_IMPORTED_MODULE_18__.F),
/* harmony export */   "ACTIVITY_ACTION_ALL": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.F1),
/* harmony export */   "ACTIVITY_ACTION_RECEIVE": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.qU),
/* harmony export */   "ACTIVITY_ACTION_SEND": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.K4),
/* harmony export */   "ACTIVITY_ACTION_TOPUP": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.p3),
/* harmony export */   "ACTIVITY_PERIOD_ALL": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.sE),
/* harmony export */   "ACTIVITY_PERIOD_MONTH_ONE": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.U),
/* harmony export */   "ACTIVITY_PERIOD_MONTH_SIX": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.NO),
/* harmony export */   "ACTIVITY_PERIOD_WEEK_ONE": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.Mh),
/* harmony export */   "ACTIVITY_STATUS_CANCELLED": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.p),
/* harmony export */   "ACTIVITY_STATUS_CANCELLING": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.P),
/* harmony export */   "ACTIVITY_STATUS_PENDING": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.rq),
/* harmony export */   "ACTIVITY_STATUS_SUCCESSFUL": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.v),
/* harmony export */   "ACTIVITY_STATUS_UNSUCCESSFUL": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.eN),
/* harmony export */   "BROADCAST_CHANNELS": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.kl),
/* harmony export */   "BROADCAST_CHANNELS_MSGS": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.$x),
/* harmony export */   "BaseBlockTracker": () => (/* reexport safe */ _Block_BaseBlockTracker__WEBPACK_IMPORTED_MODULE_1__.I),
/* harmony export */   "BaseController": () => (/* reexport safe */ _BaseController__WEBPACK_IMPORTED_MODULE_0__.Z),
/* harmony export */   "BaseCurrencyController": () => (/* reexport safe */ _Currency_BaseCurrencyController__WEBPACK_IMPORTED_MODULE_4__.W),
/* harmony export */   "BaseEmbedController": () => (/* reexport safe */ _Embed_BaseEmbedController__WEBPACK_IMPORTED_MODULE_5__.k),
/* harmony export */   "BaseKeyringController": () => (/* reexport safe */ _Keyring_BaseKeyringController__WEBPACK_IMPORTED_MODULE_11__.W),
/* harmony export */   "BasePreferencesController": () => (/* reexport safe */ _Preferences_BasePreferencesController__WEBPACK_IMPORTED_MODULE_17__.f),
/* harmony export */   "BaseTransactionStateManager": () => (/* reexport safe */ _Transaction_BaseTransactionStateController__WEBPACK_IMPORTED_MODULE_19__.i),
/* harmony export */   "BroadcastChannelHandler": () => (/* reexport safe */ _Popup_index__WEBPACK_IMPORTED_MODULE_16__.K4),
/* harmony export */   "COMMUNICATION_JRPC_METHODS": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.vU),
/* harmony export */   "COMMUNICATION_NOTIFICATIONS": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.Nb),
/* harmony export */   "CommunicationWindowManager": () => (/* reexport safe */ _Embed_CommunicationWindowManager__WEBPACK_IMPORTED_MODULE_7__.Z),
/* harmony export */   "DEFAULT_PREFERENCES": () => (/* reexport safe */ _Preferences_BasePreferencesController__WEBPACK_IMPORTED_MODULE_17__.a),
/* harmony export */   "FEATURES_CONFIRM_WINDOW": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.CU),
/* harmony export */   "FEATURES_DEFAULT_POPUP_WINDOW": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.Of),
/* harmony export */   "FEATURES_DEFAULT_WALLET_WINDOW": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.GI),
/* harmony export */   "FEATURES_PROVIDER_CHANGE_WINDOW": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.Jn),
/* harmony export */   "LOGIN_PROVIDER": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_10__.h),
/* harmony export */   "PAYMENT_PROVIDER": () => (/* reexport safe */ _interfaces__WEBPACK_IMPORTED_MODULE_10__.U),
/* harmony export */   "POPUP_LOADED": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.AA),
/* harmony export */   "POPUP_RESULT": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.EV),
/* harmony export */   "PROVIDER_JRPC_METHODS": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.GA),
/* harmony export */   "PROVIDER_NOTIFICATIONS": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.zK),
/* harmony export */   "PopupHandler": () => (/* reexport safe */ _Popup_index__WEBPACK_IMPORTED_MODULE_16__.XQ),
/* harmony export */   "PopupStoreChannel": () => (/* reexport safe */ _Popup_index__WEBPACK_IMPORTED_MODULE_16__.lQ),
/* harmony export */   "PopupWithBcHandler": () => (/* reexport safe */ _Popup_index__WEBPACK_IMPORTED_MODULE_16__.LC),
/* harmony export */   "RedirectHandler": () => (/* reexport safe */ _Popup_index__WEBPACK_IMPORTED_MODULE_16__.ZZ),
/* harmony export */   "SETUP_COMPLETE": () => (/* reexport safe */ _enums__WEBPACK_IMPORTED_MODULE_9__.bJ),
/* harmony export */   "StreamWindow": () => (/* reexport safe */ _Popup_index__WEBPACK_IMPORTED_MODULE_16__.Ej),
/* harmony export */   "TRANSACTION_TYPES": () => (/* reexport safe */ _Transaction_ITransactionController__WEBPACK_IMPORTED_MODULE_20__.L0),
/* harmony export */   "TX_EVENTS": () => (/* reexport safe */ _Transaction_ITransactionController__WEBPACK_IMPORTED_MODULE_20__.RM),
/* harmony export */   "TransactionStatus": () => (/* reexport safe */ _Transaction_ITransactionController__WEBPACK_IMPORTED_MODULE_20__.LN),
/* harmony export */   "UserError": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.gK),
/* harmony export */   "addressSlicer": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.H9),
/* harmony export */   "broadcastChannelOptions": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.aN),
/* harmony export */   "concatSig": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.dk),
/* harmony export */   "createChangeProviderMiddlewareMiddleware": () => (/* reexport safe */ _Embed_CommunicationMethodMiddleware__WEBPACK_IMPORTED_MODULE_6__.JL),
/* harmony export */   "createCommunicationMiddleware": () => (/* reexport safe */ _Embed_CommunicationMethodMiddleware__WEBPACK_IMPORTED_MODULE_6__.u_),
/* harmony export */   "createEventEmitterProxy": () => (/* reexport safe */ _createEventEmitterProxy__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "createFetchConfigFromReq": () => (/* reexport safe */ _Network_createFetchMiddleware__WEBPACK_IMPORTED_MODULE_12__.D),
/* harmony export */   "createFetchMiddleware": () => (/* reexport safe */ _Network_createFetchMiddleware__WEBPACK_IMPORTED_MODULE_12__.v),
/* harmony export */   "createGenericJRPCMiddleware": () => (/* reexport safe */ _Embed_CommunicationMethodMiddleware__WEBPACK_IMPORTED_MODULE_6__.QM),
/* harmony export */   "createLoggerMiddleware": () => (/* reexport safe */ _Network_createLoggerMiddleware__WEBPACK_IMPORTED_MODULE_13__.y),
/* harmony export */   "createOriginMiddleware": () => (/* reexport safe */ _Network_createOriginMiddleware__WEBPACK_IMPORTED_MODULE_14__.x),
/* harmony export */   "createRandomId": () => (/* reexport safe */ _Network_INetworkController__WEBPACK_IMPORTED_MODULE_15__.HL),
/* harmony export */   "createSwappableProxy": () => (/* reexport safe */ _createSwappableProxy__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "createTopupMiddleware": () => (/* reexport safe */ _Embed_CommunicationMethodMiddleware__WEBPACK_IMPORTED_MODULE_6__.yP),
/* harmony export */   "formatDate": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.p6),
/* harmony export */   "formatSmallNumbers": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.d5),
/* harmony export */   "formatTime": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.mr),
/* harmony export */   "getCustomDeviceInfo": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.Z2),
/* harmony export */   "getHeaders": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.wU),
/* harmony export */   "getPopupFeatures": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.SL),
/* harmony export */   "getTxStatusText": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.OG),
/* harmony export */   "handleRedirectParameters": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.Kv),
/* harmony export */   "hashMessage": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.rj),
/* harmony export */   "intToHex": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.I4),
/* harmony export */   "padWithZeroes": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.rX),
/* harmony export */   "providerAsMiddleware": () => (/* reexport safe */ _Network_INetworkController__WEBPACK_IMPORTED_MODULE_15__.zR),
/* harmony export */   "providerFromEngine": () => (/* reexport safe */ _Network_INetworkController__WEBPACK_IMPORTED_MODULE_15__.Xj),
/* harmony export */   "providerFromMiddleware": () => (/* reexport safe */ _Network_INetworkController__WEBPACK_IMPORTED_MODULE_15__.ZY),
/* harmony export */   "randomId": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.kb),
/* harmony export */   "signMessage": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.l),
/* harmony export */   "significantDigits": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.I6),
/* harmony export */   "sleep": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__._v),
/* harmony export */   "timeout": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.Vs),
/* harmony export */   "transactionMatchesNetwork": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_21__.lw)
/* harmony export */ });
/* harmony import */ var _BaseController__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(758);
/* harmony import */ var _Block_BaseBlockTracker__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(839);
/* harmony import */ var _createEventEmitterProxy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(259);
/* harmony import */ var _createSwappableProxy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(868);
/* harmony import */ var _Currency_BaseCurrencyController__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(79);
/* harmony import */ var _Embed_BaseEmbedController__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(784);
/* harmony import */ var _Embed_CommunicationMethodMiddleware__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(469);
/* harmony import */ var _Embed_CommunicationWindowManager__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(745);
/* harmony import */ var _Embed_IEmbedController__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(818);
/* harmony import */ var _Embed_IEmbedController__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_Embed_IEmbedController__WEBPACK_IMPORTED_MODULE_8__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _Embed_IEmbedController__WEBPACK_IMPORTED_MODULE_8__) if(["default","BaseController","createEventEmitterProxy","createSwappableProxy","CommunicationWindowManager","BaseBlockTracker","BaseCurrencyController","BaseEmbedController","createChangeProviderMiddlewareMiddleware","createCommunicationMiddleware","createGenericJRPCMiddleware","createTopupMiddleware"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _Embed_IEmbedController__WEBPACK_IMPORTED_MODULE_8__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _enums__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(1);
/* harmony import */ var _interfaces__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(850);
/* harmony import */ var _Keyring_BaseKeyringController__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(608);
/* harmony import */ var _Network_createFetchMiddleware__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(466);
/* harmony import */ var _Network_createLoggerMiddleware__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(994);
/* harmony import */ var _Network_createOriginMiddleware__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(152);
/* harmony import */ var _Network_INetworkController__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(168);
/* harmony import */ var _Popup_index__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(964);
/* harmony import */ var _Preferences_BasePreferencesController__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(174);
/* harmony import */ var _Preferences_IPreferencesController__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(646);
/* harmony import */ var _Transaction_BaseTransactionStateController__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(908);
/* harmony import */ var _Transaction_ITransactionController__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(664);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(883);


























})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=baseControllers.cjs.js.map
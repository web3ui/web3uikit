import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { SafeEventEmitter, JRPCEngine, createAsyncMiddleware, mergeMiddleware, createScaffoldMiddleware } from '@toruslabs/openlogin-jrpc';
import { serializeError, ethErrors } from 'eth-rpc-errors';
import getCreateRandomId from 'json-rpc-random-id';
import { BigNumber } from 'bignumber.js';
import { fromSigned, bufferToInt, toUnsigned, stripHexPrefix, addHexPrefix, hashPersonalMessage, ecsign, intToBuffer } from 'ethereumjs-util';
import log from 'loglevel';
import { BroadcastChannel } from '@toruslabs/broadcast-channel';
import { get, post, patch, remove } from '@toruslabs/http-helpers';
import bowser from 'bowser';
import { cloneDeep, pickBy, omitBy } from 'lodash';

function ownKeys$3(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$3(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$3(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$3(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
/**
 * Controller class that provides configuration, state management, and subscriptions
 */

class BaseController extends SafeEventEmitter {
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

    _defineProperty(this, "defaultConfig", {});

    _defineProperty(this, "defaultState", {});

    _defineProperty(this, "disabled", false);

    _defineProperty(this, "name", "BaseController");

    _defineProperty(this, "initialConfig", void 0);

    _defineProperty(this, "initialState", void 0);

    _defineProperty(this, "internalConfig", this.defaultConfig);

    _defineProperty(this, "internalState", this.defaultState);

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
    this.internalState = overwrite ? _objectSpread$3({}, state) : _objectSpread$3(_objectSpread$3({}, this.internalState), state);
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

const sec = 1000;

const calculateSum = (accumulator, currentValue) => accumulator + currentValue;

const blockTrackerEvents = ["sync", "latest"];
class BaseBlockTracker extends BaseController {
  constructor(_ref) {
    let {
      config = {},
      state = {}
    } = _ref;
    super({
      config,
      state
    }); // config

    _defineProperty(this, "name", "BaseBlockTracker");

    _defineProperty(this, "_blockResetTimeout", void 0);

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

const POLLING_INTERVAL = 600000;
class BaseCurrencyController extends BaseController {
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

function ownKeys$2(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$2(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$2(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$2(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
const createRandomId = getCreateRandomId();
function providerFromEngine(engine) {
  const provider = new SafeEventEmitter(); // handle both rpc send methods

  provider.sendAsync = async req => {
    const res = await engine.handle(req);

    if (res.error) {
      var _res$error, _res$error2;

      const err = serializeError(res.error, {
        fallbackError: {
          message: ((_res$error = res.error) === null || _res$error === void 0 ? void 0 : _res$error.message) || res.error.toString(),
          code: ((_res$error2 = res.error) === null || _res$error2 === void 0 ? void 0 : _res$error2.code) || -32603
        }
      });
      throw ethErrors.rpc.internal(err);
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
    const req = _objectSpread$2(_objectSpread$2({}, args), {}, {
      id: createRandomId(),
      jsonrpc: "2.0"
    });

    const res = await provider.sendAsync(req);
    return res;
  };

  return provider;
}
function providerFromMiddleware(middleware) {
  const engine = new JRPCEngine();
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

function createChangeProviderMiddlewareMiddleware(_ref) {
  let {
    changeProvider
  } = _ref;
  return createAsyncMiddleware(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== COMMUNICATION_JRPC_METHODS.SET_PROVIDER) return next();
    if (!changeProvider) throw new Error("CommunicationMiddleware - opts.changeProvider not provided");
    response.result = await changeProvider(request);
  });
}
function createTopupMiddleware(_ref2) {
  let {
    topup
  } = _ref2;
  return createAsyncMiddleware(async (request, response, next) => {
    const {
      method
    } = request;
    if (method !== COMMUNICATION_JRPC_METHODS.TOPUP) return next();
    if (!topup) throw new Error("CommunicationMiddleware - opts.topup not provided");
    response.result = await topup(request);
  });
}
function createGenericJRPCMiddleware(targetMethod, handler) {
  return createAsyncMiddleware(async (request, response, next) => {
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
  return mergeMiddleware([createChangeProviderMiddlewareMiddleware({
    changeProvider
  }), createTopupMiddleware({
    topup
  }), createScaffoldMiddleware({
    [COMMUNICATION_JRPC_METHODS.LOGOUT]: logout,
    [COMMUNICATION_JRPC_METHODS.WALLET_INSTANCE_ID]: getWalletInstanceId,
    [COMMUNICATION_JRPC_METHODS.USER_INFO]: getUserInfo,
    [COMMUNICATION_JRPC_METHODS.IFRAME_STATUS]: setIFrameStatus,
    // Do this in the orchestrator because communicationWindowManager needs to be passed into PopupHandlers
    [COMMUNICATION_JRPC_METHODS.OPENED_WINDOW]: handleWindowRpc,
    [COMMUNICATION_JRPC_METHODS.CLOSED_WINDOW]: handleWindowRpc,
    [COMMUNICATION_JRPC_METHODS.GET_PROVIDER_STATE]: getProviderState
  }), createGenericJRPCMiddleware(COMMUNICATION_JRPC_METHODS.LOGIN_WITH_PRIVATE_KEY, loginWithPrivateKey)]);
}

class BaseEmbedController extends BaseController {
  constructor(_ref) {
    let {
      config = {},
      state
    } = _ref;
    super({
      config,
      state
    });

    _defineProperty(this, "_communicationProviderProxy", void 0);

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
    const engine = new JRPCEngine();
    const communicationMiddleware = createCommunicationMiddleware(handlers);
    engine.push(communicationMiddleware);
    const communicationProvider = providerFromEngine(engine);
    this.setCommunicationProvider(communicationProvider);
  }

  setCommunicationProvider(communicationProvider) {
    if (this._communicationProviderProxy) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._communicationProviderProxy.setTarget(communicationProvider);
    } else {
      this._communicationProviderProxy = createSwappableProxy(communicationProvider);
    }
  }

}

class CommunicationWindowManager extends SafeEventEmitter {
  constructor() {
    super(...arguments);

    _defineProperty(this, "handleWindowRpc", (request, response, next, end) => {
      const {
        method,
        params
      } = request;

      if (method === COMMUNICATION_JRPC_METHODS.OPENED_WINDOW) {
        const {
          windowId
        } = params; // I've been informed that a window has been opened

        this.emit("".concat(windowId, ":opened"));
        response.result = true;
        end();
      } else if (method === COMMUNICATION_JRPC_METHODS.CLOSED_WINDOW) {
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
const PAYMENT_PROVIDER = {
  MOONPAY: "moonpay",
  WYRE: "wyre",
  RAMPNETWORK: "rampnetwork",
  XANPOOL: "xanpool",
  MERCURYO: "mercuryo",
  TRANSAK: "transak"
};

const getTxStatusText = txStatus => {
  switch (txStatus) {
    case "rejected":
    case "unapproved":
    case "failed":
      return ACTIVITY_STATUS_UNSUCCESSFUL;

    case "confirmed":
      return ACTIVITY_STATUS_SUCCESSFUL;

    case "submitted":
      return ACTIVITY_STATUS_PENDING;

    case "cancelled":
      return ACTIVITY_STATUS_CANCELLED;

    default:
      return "";
  }
};

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
  const rSig = fromSigned(r);
  const sSig = fromSigned(s);
  const vSig = bufferToInt(v);
  const rStr = padWithZeroes(toUnsigned(rSig).toString("hex"), 64);
  const sStr = padWithZeroes(toUnsigned(sSig).toString("hex"), 64);
  const vStr = stripHexPrefix(intToHex(vSig));
  return addHexPrefix(rStr.concat(sStr, vStr));
}
function timeout$1(duration) {
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
  const finalNumber = BigNumber.isBigNumber(number) ? number.toNumber() : number;
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
  let input = !BigNumber.isBigNumber(number) ? new BigNumber(number) : number;
  if (input.isZero()) return input;

  if (perc) {
    input = input.times(new BigNumber(100));
  }

  let depth;

  if (input.gte(new BigNumber(1))) {
    depth = length_;
  } else {
    depth = length_ - 1 + Math.ceil(Math.log10(new BigNumber("1").div(input).toNumber()));
  }

  const shift = new BigNumber(10).pow(new BigNumber(depth));
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
  const el = hashPersonalMessage(bufferedMessage);
  return el;
};
const signMessage = (privateKey, data) => {
  const privKey = Buffer.from(privateKey, "hex");
  const message = stripHexPrefix(data);
  const msgSig = ecsign(Buffer.from(message, "hex"), privKey);
  const rawMsgSig = concatSig(intToBuffer(msgSig.v), msgSig.r, msgSig.s);
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

class BaseKeyringController extends BaseController {
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

    const hashedMessage = hashMessage(message).toString("hex");
    const rawMessageSig = signMessage(keyring.privateKey, hashedMessage);
    return rawMessageSig;
  }

}

const RETRIABLE_ERRORS = [// ignore server overload errors
"Gateway timeout", "ETIMEDOUT", // ignore server sent html error pages
// or truncated json responses
"failed to parse response body", // ignore errors where http req failed to establish
"Failed to fetch"];

function checkForHttpErrors(fetchRes) {
  // check for errors
  switch (fetchRes.status) {
    case 405:
      throw ethErrors.rpc.methodNotFound();

    case 418:
      throw ethErrors.rpc.internal({
        message: "Request is being rate limited."
      });

    case 503:
    case 504:
      throw ethErrors.rpc.internal({
        message: "Gateway timeout. The request took too long to process." + "This can happen when querying over too wide a block range."
      });
  }
}

function timeout(duration) {
  return new Promise(resolve => setTimeout(resolve, duration));
}

function parseResponse(fetchRes, body) {
  // check for error code
  if (fetchRes.status !== 200) {
    throw ethErrors.rpc.internal({
      message: "Non-200 status code: '".concat(fetchRes.status, "'"),
      data: body
    });
  } // check for rpc error


  if (body.error) {
    throw ethErrors.rpc.internal({
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
  return createAsyncMiddleware(async (req, res, _next) => {
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

function createLoggerMiddleware(options) {
  return function loggerMiddleware(request, response, next) {
    next(callback => {
      if (response.error) {
        log.warn("Error in RPC response:\n", response);
      }

      if (request.isTorusInternal) return;
      log.info("RPC (".concat(options.origin, "):"), request, "->", response);
      callback();
    });
  };
}

function createOriginMiddleware(options) {
  return function originMiddleware(request, _, next) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    request.origin = options.origin;
    next();
  };
}

class BroadcastChannelHandler {
  constructor(channelPrefix) {
    _defineProperty(this, "bc", void 0);

    _defineProperty(this, "channel", void 0);

    const queryParameters = new URLSearchParams(window.location.search);
    const instanceId = queryParameters.get("instanceId");
    this.channel = "".concat(channelPrefix, "_").concat(instanceId);
    this.bc = new BroadcastChannel(this.channel, broadcastChannelOptions);
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
          type: POPUP_LOADED
        }
      });
    });
  }

}

class StreamWindow extends BaseController {
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

    _defineProperty(this, "closed", false);

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
          windowId: randomId()
        });
        communicationWindowManager.once("".concat(this.state.windowId, ":opened"), () => {
          resolve(this);
        }); // Tell the other party to create a window by prompting the user to click on something

        communicationEngine.emit("notification", {
          method: COMMUNICATION_NOTIFICATIONS.CREATE_WINDOW,
          params: {
            windowId: this.state.windowId,
            url: this.state.url.href
          }
        });
      } else {
        // Send this window with `windowId` the url to open via bc
        const bc = new BroadcastChannel(this.state.windowId, broadcastChannelOptions);
        bc.addEventListener("message", async ev => {
          try {
            log.info(ev, "receiving data on channel: ".concat(bc.name));
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

            if (message === POPUP_LOADED) {
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
              message: SETUP_COMPLETE
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

            await sleep(currentDelay);
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
      method: COMMUNICATION_NOTIFICATIONS.CLOSE_WINDOW,
      params: {
        windowId: this.state.windowId
      }
    });
  }

}

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

class PopupHandler extends BaseController {
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
      features: getPopupFeatures(FEATURES_DEFAULT_POPUP_WINDOW),
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
        localWindow = new StreamWindow({
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


    const localWindow = new StreamWindow({
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

class PopupStoreChannel {
  constructor(_ref) {
    let {
      instanceId,
      handleLogout,
      handleAccountImport,
      handleNetworkChange,
      handleSelectedAddressChange
    } = _ref;

    _defineProperty(this, "handleLogout", void 0);

    _defineProperty(this, "handleAccountImport", void 0);

    _defineProperty(this, "handleNetworkChange", void 0);

    _defineProperty(this, "handleSelectedAddressChange", void 0);

    _defineProperty(this, "instanceId", void 0);

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
    const logoutChannel = new BroadcastChannel("".concat(BROADCAST_CHANNELS.WALLET_LOGOUT_CHANNEL, "_").concat(this.instanceId), broadcastChannelOptions);
    logoutChannel.addEventListener("message", ev => {
      var _ev$data;

      log.info("received logout message", ev);

      if (!ev.error && ((_ev$data = ev.data) === null || _ev$data === void 0 ? void 0 : _ev$data.type) === BROADCAST_CHANNELS_MSGS.LOGOUT) {
        log.info("Logging Out");
        this.handleLogout();
      }
    });
  }

  importAccountChannel() {
    const walletAccountImportChannel = new BroadcastChannel("".concat(BROADCAST_CHANNELS.WALLET_ACCOUNT_IMPORT_CHANNEL, "_").concat(this.instanceId), broadcastChannelOptions);
    walletAccountImportChannel.addEventListener("message", ev => {
      var _ev$data2;

      if (!ev.error && ((_ev$data2 = ev.data) === null || _ev$data2 === void 0 ? void 0 : _ev$data2.type) === BROADCAST_CHANNELS_MSGS.ACCOUNT_IMPORTED) {
        var _ev$data3;

        this.handleAccountImport((_ev$data3 = ev.data) === null || _ev$data3 === void 0 ? void 0 : _ev$data3.privKey);
      }
    });
  }

  networkChangeChannel() {
    const walletAccountImportChannel = new BroadcastChannel("".concat(BROADCAST_CHANNELS.WALLET_NETWORK_CHANGE_CHANNEL, "_").concat(this.instanceId), broadcastChannelOptions);
    walletAccountImportChannel.addEventListener("message", ev => {
      var _ev$data4;

      if (!ev.error && ((_ev$data4 = ev.data) === null || _ev$data4 === void 0 ? void 0 : _ev$data4.type) === BROADCAST_CHANNELS_MSGS.NETWORK_CHANGE) {
        var _ev$data5;

        this.handleNetworkChange((_ev$data5 = ev.data) === null || _ev$data5 === void 0 ? void 0 : _ev$data5.network);
      }
    });
  }

  selectedAddressChangeChannel() {
    const walletAccountImportChannel = new BroadcastChannel("".concat(BROADCAST_CHANNELS.WALLET_SELECTED_ADDRESS_CHANNEL, "_").concat(this.instanceId), broadcastChannelOptions);
    walletAccountImportChannel.addEventListener("message", ev => {
      var _ev$data6;

      if (!ev.error && ((_ev$data6 = ev.data) === null || _ev$data6 === void 0 ? void 0 : _ev$data6.type) === BROADCAST_CHANNELS_MSGS.SELECTED_ADDRESS_CHANGE) {
        var _ev$data7;

        this.handleSelectedAddressChange((_ev$data7 = ev.data) === null || _ev$data7 === void 0 ? void 0 : _ev$data7.selectedAddress);
      }
    });
  }

}

/**
 * PopupWithBcHandler is a PopupHandler which uses broadcast channel to communicate with the popup window.
 */

class PopupWithBcHandler extends PopupHandler {
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

    _defineProperty(this, "bc", void 0);

    this.bc = new BroadcastChannel(instanceId, broadcastChannelOptions);
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
        reject(new UserError("user closed popup"));
        this.removeListener("close", closeListener);
      };

      this.on("close", closeListener);
      this.bc.addEventListener("message", async ev => {
        log.info(ev, "receiving data on channel: ".concat(this.bc.name));

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
        log.info("opened window ".concat(this.bc.name)); // Opened window. yay.  let the bc events do their job

        return undefined;
      }).catch(err => {
        log.error(err, "something went wrong while opening window");
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
        reject(new UserError("user closed popup"));
        this.removeListener("close", closeListener);
      };

      this.on("close", closeListener);
      this.bc.addEventListener("message", async ev => {
        try {
          log.info(ev, "receiving data on channel: ".concat(this.bc.name));
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

          if (type === POPUP_LOADED) {
            // Hack with generic to use the same type for both send and receive
            await this.bc.postMessage({
              data: payload
            });
          } else if (type === POPUP_RESULT) {
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
        log.info("opened window ".concat(this.bc.name)); // Opened window. yay.  let the bc events do their job

        return undefined;
      }).catch(err => {
        log.error(err, "something went wrong while opening window");
        reject(err);
      });
    });
  }

}

class RedirectHandler {
  constructor() {
    _defineProperty(this, "error", void 0);

    _defineProperty(this, "finalQueryParams", {});

    _defineProperty(this, "instanceParameters", void 0);

    _defineProperty(this, "hashParameters", void 0);

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
    } = handleRedirectParameters(hash, this.finalQueryParams);
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
          bc = new BroadcastChannel("".concat(BROADCAST_CHANNELS.REDIRECT_CHANNEL, "_").concat(instanceParameters.instanceId), broadcastChannelOptions);
          bc.addEventListener("message", async ev => {
            if (ev.error) {
              reject(ev.error);
              window.close();
            } else {
              resolve();
              bc.close();
              log.info("posted", {
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
          bc = new BroadcastChannel("".concat(finalQueryParams.windowId), broadcastChannelOptions);
          bc.addEventListener("message", async ev => {
            const {
              url,
              message
            } = ev.data;

            if (url) {
              resolve();
              window.location.href = url;
            } else if (message === SETUP_COMPLETE) {
              await bc.postMessage({
                data: {
                  windowId: finalQueryParams.windowId,
                  message: POPUP_LOADED
                }
              });
            }

            if (ev.error && ev.error !== "") {
              log.error(ev.error);
              resolve();
              bc.close();
            }
          });
        }
      } catch (err) {
        log.info(err, "something went wrong");
        reject(err);
        if (bc) bc.close();
        window.close();
      }
    });
  }

}

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

function ownKeys$1(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread$1(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys$1(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys$1(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

const DEFAULT_INTERVAL = 180 * 1000;
const DEFAULT_PREFERENCES = {
  selectedCurrency: "USD",
  theme: "dark",
  locale: "en-US",
  accountType: ACCOUNT_CATEGORY.NORMAL,
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
    typeOfLogin: LOGIN_PROVIDER.GOOGLE,
    verifier: "",
    verifierId: ""
  }
};
/**
 * Controller that stores shared settings and exposes convenience methods
 */

class BasePreferencesController extends BaseController {
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

    _defineProperty(this, "name", "PreferencesController");

    _defineProperty(this, "iframeOrigin", void 0);

    _defineProperty(this, "signAuthMessage", void 0);

    _defineProperty(this, "defaultPreferences", void 0);

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
    this.defaultPreferences = _objectSpread$1(_objectSpread$1({}, DEFAULT_PREFERENCES), defaultPreferences);
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
    const user = await get("".concat(this.config.api, "/user?fetchTx=false"), this.headers(address), {
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
    await post("".concat(this.config.api, "/user"), userPayload, this.headers(address), {
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
      const browser = bowser.getParser(window.navigator.userAgent);
      const specialBrowser = getCustomDeviceInfo();
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
      await post("".concat(this.config.api, "/user/recordLogin"), recordLoginPayload, this.headers(address), {
        useAPIKey: true
      });
    }
  }

  async setCrashReport(isEnabled) {
    var _this$getAddressState;

    if (isEnabled === ((_this$getAddressState = this.getAddressState()) === null || _this$getAddressState === void 0 ? void 0 : _this$getAddressState.crashReport)) return true;

    try {
      await patch("".concat(this.config.api, "/user"), {
        enable_crash_reporter: isEnabled
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        crashReport: isEnabled
      });
      return true;
    } catch (error) {
      log.error(error);
      return false;
    }
  }

  async setUserTheme(theme) {
    var _this$getAddressState2;

    if (theme === ((_this$getAddressState2 = this.getAddressState()) === null || _this$getAddressState2 === void 0 ? void 0 : _this$getAddressState2.theme)) return true;

    try {
      await patch("".concat(this.config.api, "/user"), {
        theme
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        theme
      });
      return true;
    } catch (error) {
      log.error(error);
      return false;
    }
  }

  async setUserLocale(locale) {
    var _this$getAddressState3;

    if (locale === ((_this$getAddressState3 = this.getAddressState()) === null || _this$getAddressState3 === void 0 ? void 0 : _this$getAddressState3.locale)) return;

    try {
      await patch("".concat(this.config.api, "/user"), {
        locale
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        locale
      });
      return true;
    } catch (error) {
      log.error("unable to set locale", error);
      return false;
    }
  }

  async setSelectedCurrency(payload) {
    var _this$getAddressState4;

    if (payload.selectedCurrency === ((_this$getAddressState4 = this.getAddressState()) === null || _this$getAddressState4 === void 0 ? void 0 : _this$getAddressState4.selectedCurrency)) return true;

    try {
      await patch("".concat(this.config.api, "/user"), {
        default_currency: payload.selectedCurrency
      }, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        selectedCurrency: payload.selectedCurrency
      });
      return true;
    } catch (error) {
      log.error(error);
      return false;
    }
  }

  async addContact(contact) {
    try {
      var _this$getAddressState5;

      const response = await post("".concat(this.config.api, "/contact"), contact, this.headers(), {
        useAPIKey: true
      });
      this.updateState({
        contacts: [...(((_this$getAddressState5 = this.getAddressState()) === null || _this$getAddressState5 === void 0 ? void 0 : _this$getAddressState5.contacts) || []), response.data]
      });
      return true;
    } catch (error) {
      log.error("unable to add contact", error);
      return false;
    }
  }

  async deleteContact(contactId) {
    try {
      var _this$getAddressState6;

      const response = await remove("".concat(this.config.api, "/contact/").concat(contactId), {}, this.headers(), {
        useAPIKey: true
      });
      const finalContacts = (_this$getAddressState6 = this.getAddressState()) === null || _this$getAddressState6 === void 0 ? void 0 : _this$getAddressState6.contacts.filter(contact => contact.id !== response.data.id);
      if (finalContacts) this.updateState({
        contacts: [...finalContacts]
      });
      return true;
    } catch (error) {
      log.error("unable to delete contact", error);
      return false;
    }
  }

  async revokeDiscord(idToken) {
    try {
      const resp = await post("".concat(this.config.api, "/revoke/discord"), {
        token: idToken
      }, this.headers(), {
        useAPIKey: true
      });
      log.info(resp);
    } catch (error) {
      log.error(error);
    }
  }

  async patchPastTx(body, address) {
    try {
      const response = await patch("".concat(this.config.api, "/transaction"), body, this.headers(address), {
        useAPIKey: true
      });
      log.info("successfully patched", response);
    } catch (error) {
      log.error("unable to patch tx", error);
    }
  }

  async postPastTx(tx, address) {
    try {
      const response = await post("".concat(this.config.api, "/transaction"), tx, this.headers(address), {
        useAPIKey: true
      });
      log.info("successfully posted tx", response);
      return response;
    } catch (error) {
      log.error(error, "unable to insert transaction");
    }
  }

  async getWalletOrders(address) {
    try {
      const response = await get("".concat(this.config.api, "/transaction"), this.headers(address), {
        useAPIKey: true
      });
      return response.success ? response.data ? response.data : [] : [];
    } catch (error) {
      log.error("unable to get wallet orders tx", error);
      return [];
    }
  }

  async getTopUpOrders(address) {
    try {
      const response = await get("".concat(this.config.commonApiHost, "/transaction"), this.headers(address), {
        useAPIKey: true
      });
      return response.data || [];
    } catch (error) {
      log.error("unable to fetch past Top up orders", error);
    }
  }

  async getBillBoardData() {
    try {
      const response = await get("".concat(this.config.api, "/billboard"), this.headers(), {
        useAPIKey: true
      });
      return response.success ? response.data : [];
    } catch (error) {
      log.error("unable to get billboard data", error);
      return [];
    }
  }

  async getMessageForSigning(publicAddress) {
    const response = await post("".concat(this.config.api, "/auth/message"), {
      public_address: publicAddress
    }, {}, {
      useAPIKey: true
    });
    return response.message;
  }

  async getTwitterId(payload) {
    const res = await get("".concat(this.config.api, "/twitter?screen_name=").concat(payload.nick), this.headers(), {
      useAPIKey: true
    });
    return "".concat(payload.typeOfLogin.toLowerCase(), "|").concat(res.data.toString());
  }

  async sendEmail(payload) {
    return post("".concat(this.config.api, "/transaction/sendemail"), payload.emailObject, this.headers(), {
      useAPIKey: true
    });
  }

  async refreshJwt() {
    const address = this.state.selectedAddress;
    const messageToSign = await this.getMessageForSigning(address);
    if (!messageToSign.startsWith(this.config.signInPrefix)) throw new Error("Cannot sign on invalid message");
    const signedMessage = this.signAuthMessage(address, messageToSign);
    const response = await post("".concat(this.config.api, "/auth/verify"), {
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
      const response = await get("".concat(this.config.api, "/dapps"), this.headers(), {
        useAPIKey: true
      });
      return response.success ? response.data : [];
    } catch (error) {
      log.error("unable to get billboard data", error);
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
      response = await post("".concat(this.config.api, "/auth/verify"), {
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
    const currentState = this.getAddressState(selectedAddress) || cloneDeep(this.defaultPreferences);

    const mergedState = _objectSpread$1(_objectSpread$1({}, currentState), preferences);

    this.update({
      identities: _objectSpread$1(_objectSpread$1({}, this.state.identities), {}, {
        [selectedAddress]: mergedState
      })
    });
    return mergedState;
  }

  headers(address) {
    var _this$getAddressState7;

    const selectedAddress = address || this.state.selectedAddress;
    return getHeaders(((_this$getAddressState7 = this.getAddressState(selectedAddress)) === null || _this$getAddressState7 === void 0 ? void 0 : _this$getAddressState7.jwtToken) || "");
  }

}

/**
 * The status of the transaction. Each status represents the state of the transaction internally
 * in the wallet. Some of these correspond with the state of the transaction on the network, but
 * some are wallet-specific.
 */
var TransactionStatus;

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

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
class BaseTransactionStateManager extends BaseController {
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

    _defineProperty(this, "getCurrentChainId", void 0);

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
    return pickBy(this.state.transactions, transaction => transaction.status === TransactionStatus.unapproved && transactionMatchesNetwork(transaction, chainId));
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
    this._setTransactionStatus(txId, TransactionStatus.rejected);

    this._deleteTransaction(txId);
  }
  /**
   * The implementing controller can override this functionality and add custom logic + call super.()
   */


  setTxStatusUnapproved(txId) {
    this._setTransactionStatus(txId, TransactionStatus.unapproved);
  }

  setTxStatusApproved(txId) {
    this._setTransactionStatus(txId, TransactionStatus.approved);
  }

  setTxStatusSigned(txId) {
    this._setTransactionStatus(txId, TransactionStatus.signed);
  }

  setTxStatusSubmitted(txId) {
    this._setTransactionStatus(txId, TransactionStatus.submitted);
  }

  setTxStatusDropped(txId) {
    this._setTransactionStatus(txId, TransactionStatus.dropped);
  }

  setTxStatusExpired(txId) {
    this._setTransactionStatus(txId, TransactionStatus.expired);
  }

  setTxStatusConfirmed(txId) {
    this._setTransactionStatus(txId, TransactionStatus.confirmed);
  }

  setTxStatusFailed(txId, error_) {
    const error = !error_ ? new Error("Internal torus failure") : error_;
    const txMeta = this.getTransaction(txId);
    txMeta.error = error;
    this.updateTransaction(txMeta);

    this._setTransactionStatus(txId, TransactionStatus.failed);
  }
  /**
   * Method to determine if the transaction is in a final state
   * @param status - Transaction status
   * @returns boolean if the transaction is in a final state
   */


  isFinalState(status) {
    return status === TransactionStatus.rejected || status === TransactionStatus.submitted || status === TransactionStatus.confirmed || status === TransactionStatus.failed || status === TransactionStatus.cancelled || status === TransactionStatus.expired;
  }
  /**
   * Filters out the unapproved transactions from state
   */


  clearUnapprovedTxs() {
    this.update({
      transactions: omitBy(this.state.transactions, transaction => transaction.status === TransactionStatus.unapproved)
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
    this.emit(TX_EVENTS.TX_STATUS_UPDATE, {
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

export { ACCOUNT_CATEGORY, ACTIVITY_ACTION, ACTIVITY_ACTION_ALL, ACTIVITY_ACTION_RECEIVE, ACTIVITY_ACTION_SEND, ACTIVITY_ACTION_TOPUP, ACTIVITY_PERIOD_ALL, ACTIVITY_PERIOD_MONTH_ONE, ACTIVITY_PERIOD_MONTH_SIX, ACTIVITY_PERIOD_WEEK_ONE, ACTIVITY_STATUS_CANCELLED, ACTIVITY_STATUS_CANCELLING, ACTIVITY_STATUS_PENDING, ACTIVITY_STATUS_SUCCESSFUL, ACTIVITY_STATUS_UNSUCCESSFUL, BROADCAST_CHANNELS, BROADCAST_CHANNELS_MSGS, BaseBlockTracker, BaseController, BaseCurrencyController, BaseEmbedController, BaseKeyringController, BasePreferencesController, BaseTransactionStateManager, BroadcastChannelHandler, COMMUNICATION_JRPC_METHODS, COMMUNICATION_NOTIFICATIONS, CommunicationWindowManager, DEFAULT_PREFERENCES, FEATURES_CONFIRM_WINDOW, FEATURES_DEFAULT_POPUP_WINDOW, FEATURES_DEFAULT_WALLET_WINDOW, FEATURES_PROVIDER_CHANGE_WINDOW, LOGIN_PROVIDER, PAYMENT_PROVIDER, POPUP_LOADED, POPUP_RESULT, PROVIDER_JRPC_METHODS, PROVIDER_NOTIFICATIONS, PopupHandler, PopupStoreChannel, PopupWithBcHandler, RedirectHandler, SETUP_COMPLETE, StreamWindow, TRANSACTION_TYPES, TX_EVENTS, TransactionStatus, UserError, addressSlicer, broadcastChannelOptions, concatSig, createChangeProviderMiddlewareMiddleware, createCommunicationMiddleware, createEventEmitterProxy, createFetchConfigFromReq, createFetchMiddleware, createGenericJRPCMiddleware, createLoggerMiddleware, createOriginMiddleware, createRandomId, createSwappableProxy, createTopupMiddleware, formatDate, formatSmallNumbers, formatTime, getCustomDeviceInfo, getHeaders, getPopupFeatures, getTxStatusText, handleRedirectParameters, hashMessage, intToHex, padWithZeroes, providerAsMiddleware, providerFromEngine, providerFromMiddleware, randomId, signMessage, significantDigits, sleep, timeout$1 as timeout, transactionMatchesNetwork };
//# sourceMappingURL=baseControllers.esm.js.map

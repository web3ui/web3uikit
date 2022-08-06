/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 641:
/***/ (() => {



/***/ }),

/***/ 927:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ src_OpenLogin)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
// EXTERNAL MODULE: external "@toruslabs/eccrypto"
var eccrypto_ = __webpack_require__(75);
;// CONCATENATED MODULE: external "@toruslabs/http-helpers"
const http_helpers_namespaceObject = require("@toruslabs/http-helpers");
// EXTERNAL MODULE: external "@toruslabs/openlogin-jrpc"
var openlogin_jrpc_ = __webpack_require__(33);
// EXTERNAL MODULE: external "@toruslabs/openlogin-utils"
var openlogin_utils_ = __webpack_require__(470);
;// CONCATENATED MODULE: external "lodash.merge"
const external_lodash_merge_namespaceObject = require("lodash.merge");
var external_lodash_merge_default = /*#__PURE__*/__webpack_require__.n(external_lodash_merge_namespaceObject);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(18);
// EXTERNAL MODULE: ./src/loglevel.ts + 1 modules
var loglevel = __webpack_require__(124);
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(337);
;// CONCATENATED MODULE: ./src/Modal.ts





const handleStream = (handle, eventName, handler) => {
  const handlerWrapper = chunk => {
    handler(chunk);
    handle.removeListener(eventName, handlerWrapper);
  };

  handle.on(eventName, handlerWrapper);
};
class Modal {
  constructor(modalUrl) {
    defineProperty_default()(this, "modalUrl", void 0);

    defineProperty_default()(this, "iframeElem", void 0);

    defineProperty_default()(this, "initialized", false);

    defineProperty_default()(this, "modalZIndex", 99999);

    defineProperty_default()(this, "mux", void 0);

    defineProperty_default()(this, "verifierStream", void 0);

    this.modalUrl = modalUrl;
  }

  async init() {
    await this.initIFrame(this.modalUrl);
    this.setupStream();
  }

  setupStream() {
    if (this.iframeElem === null) throw new Error("iframe is null");
    this.mux = (0,openlogin_jrpc_.setupMultiplex)(new openlogin_jrpc_.PostMessageStream({
      name: "modal_iframe_rpc",
      target: "modal_rpc",
      targetWindow: this.iframeElem.contentWindow,
      targetOrigin: new URL(this.modalUrl).origin
    }));
    this.verifierStream = this.mux.createStream("verifier");
  }

  async initIFrame(src) {
    await (0,utils/* documentReady */.A7)();
    const documentIFrameElem = document.getElementById(constants/* modalDOMElementID */.S_);

    if (documentIFrameElem) {
      documentIFrameElem.remove();
      loglevel/* default.info */.Z.info("already initialized, removing previous modal iframe");
    }

    this.iframeElem = (0,utils/* htmlToElement */.Bv)("<iframe\n        id=".concat(constants/* modalDOMElementID */.S_, "\n        class=\"torusIframe\"\n        src=\"").concat(src, "\"\n        style=\"display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ").concat(this.modalZIndex.toString(), "\"\n      ></iframe>"));

    this._hideModal();

    document.body.appendChild(this.iframeElem);
    return new Promise(resolve => {
      this.iframeElem.onload = () => {
        this.initialized = true;
        resolve();
      };
    });
  }

  _showModal() {
    const style = {};
    style.display = "block";
    style.position = "fixed";
    style.width = "100%";
    style.height = "100%";
    style.top = "0px";
    style.right = "0px";
    style.left = "0px";
    style.bottom = "0px";
    style.border = "0";
    style["z-index"] = this.modalZIndex;
    this.iframeElem.setAttribute("style", Object.entries(style).map(_ref => {
      let [k, v] = _ref;
      return "".concat(k, ":").concat(v);
    }).join(";"));
  }

  _hideModal() {
    const style = {};
    style.display = "none";
    style.position = "fixed";
    style.width = "100%";
    style.height = "100%";
    style.top = "0px";
    style.right = "0px";
    style.left = "0px";
    style.bottom = "0px";
    style.border = "0";
    style["z-index"] = this.modalZIndex;
    this.iframeElem.setAttribute("style", Object.entries(style).map(_ref2 => {
      let [k, v] = _ref2;
      return "".concat(k, ":").concat(v);
    }).join(";"));
  }

  async _prompt(clientId, whiteLabel, loginConfig, cb) {
    this._showModal();

    const modalHandler = chunk => {
      this._hideModal();

      cb(chunk);
    };

    handleStream(this.verifierStream, "data", modalHandler);
    this.verifierStream.write({
      name: "prompt",
      clientId,
      whiteLabel,
      loginConfig
    });
  }

  async cleanup() {
    await (0,utils/* documentReady */.A7)();
    const documentIFrameElem = document.getElementById(constants/* modalDOMElementID */.S_);

    if (documentIFrameElem) {
      documentIFrameElem.remove();
      this.iframeElem = null;
    }

    this.initialized = false;
  }

}
// EXTERNAL MODULE: ./src/OpenLoginStore.ts + 1 modules
var OpenLoginStore = __webpack_require__(111);
// EXTERNAL MODULE: ./src/Provider.ts + 1 modules
var Provider = __webpack_require__(957);
;// CONCATENATED MODULE: ./src/OpenLogin.ts


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { defineProperty_default()(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }











(0,utils/* preloadIframe */.E0)("https://app.openlogin.com/sdk-modal");

class OpenLogin {
  constructor(options) {
    var _options$no3PC, _options$_startUrl, _options$_popupUrl, _options$redirectUrl, _options$uxMode, _options$replaceUrlOn, _options$originData, _options$whiteLabel, _options$loginConfig, _options$_storageServ;

    defineProperty_default()(this, "provider", void 0);

    defineProperty_default()(this, "state", void 0);

    defineProperty_default()(this, "modal", void 0);

    this.provider = new Proxy(new Provider/* default */.Z(), {
      deleteProperty: () => true // work around for web3

    });

    if (!options._iframeUrl) {
      if (options.network === constants/* OPENLOGIN_NETWORK.MAINNET */.dr.MAINNET) {
        options._iframeUrl = "https://app.openlogin.com";
      } else if (options.network === constants/* OPENLOGIN_NETWORK.CYAN */.dr.CYAN) {
        options._iframeUrl = "https://cyan.openlogin.com";
      } else if (options.network === constants/* OPENLOGIN_NETWORK.TESTNET */.dr.TESTNET) {
        options._iframeUrl = "https://beta.openlogin.com";
      } else if (options.network === constants/* OPENLOGIN_NETWORK.DEVELOPMENT */.dr.DEVELOPMENT) {
        options._iframeUrl = "http://localhost:3000";
      }
    }

    if (!options._iframeUrl) {
      throw new Error("unspecified network and iframeUrl");
    }

    this.modal = new Modal("".concat(options._iframeUrl, "/sdk-modal"));
    this.initState(_objectSpread(_objectSpread({}, options), {}, {
      no3PC: (_options$no3PC = options.no3PC) !== null && _options$no3PC !== void 0 ? _options$no3PC : false,
      _iframeUrl: options._iframeUrl,
      _startUrl: (_options$_startUrl = options._startUrl) !== null && _options$_startUrl !== void 0 ? _options$_startUrl : "".concat(options._iframeUrl, "/start"),
      _popupUrl: (_options$_popupUrl = options._popupUrl) !== null && _options$_popupUrl !== void 0 ? _options$_popupUrl : "".concat(options._iframeUrl, "/popup-window"),
      redirectUrl: (_options$redirectUrl = options.redirectUrl) !== null && _options$redirectUrl !== void 0 ? _options$redirectUrl : "".concat(window.location.protocol, "//").concat(window.location.host).concat(window.location.pathname),
      uxMode: (_options$uxMode = options.uxMode) !== null && _options$uxMode !== void 0 ? _options$uxMode : constants/* UX_MODE.REDIRECT */.$e.REDIRECT,
      replaceUrlOnRedirect: (_options$replaceUrlOn = options.replaceUrlOnRedirect) !== null && _options$replaceUrlOn !== void 0 ? _options$replaceUrlOn : true,
      originData: (_options$originData = options.originData) !== null && _options$originData !== void 0 ? _options$originData : {
        [window.location.origin]: ""
      },
      whiteLabel: (_options$whiteLabel = options.whiteLabel) !== null && _options$whiteLabel !== void 0 ? _options$whiteLabel : {},
      loginConfig: (_options$loginConfig = options.loginConfig) !== null && _options$loginConfig !== void 0 ? _options$loginConfig : {},
      _storageServerUrl: (_options$_storageServ = options._storageServerUrl) !== null && _options$_storageServ !== void 0 ? _options$_storageServ : "https://broadcast-server.tor.us"
    }));
  }

  get privKey() {
    return this.state.privKey ? this.state.privKey.padStart(64, "0") : "";
  }

  initState(options) {
    this.state = {
      uxMode: options.uxMode,
      network: options.network,
      store: OpenLoginStore/* default.getInstance */.Z.getInstance(),
      iframeUrl: options._iframeUrl,
      startUrl: options._startUrl,
      popupUrl: options._popupUrl,
      clientId: options.clientId,
      redirectUrl: options.redirectUrl,
      replaceUrlOnRedirect: options.replaceUrlOnRedirect,
      originData: options.originData,
      loginConfig: options.loginConfig,
      support3PC: !options.no3PC,
      whiteLabel: options.whiteLabel,
      storageServerUrl: options._storageServerUrl
    };
  }

  async init() {
    if (this.state.network === constants/* OPENLOGIN_NETWORK.TESTNET */.dr.TESTNET) {
      // using console log because it shouldn't be affected by loglevel config
      // eslint-disable-next-line no-console
      console.log("%c WARNING! You are on testnet. Please set network: 'mainnet' in production", "color: #FF0000");
    }

    await Promise.all([this.modal.init(), this.updateOriginData()]);
    this.provider.init({
      iframeElem: this.modal.iframeElem,
      iframeUrl: this.state.iframeUrl
    });
    const params = (0,utils/* getHashQueryParams */.Gv)(this.state.replaceUrlOnRedirect);

    if (params.sessionId) {
      this.state.store.set("sessionId", params.sessionId);
    }

    this._syncState(await this._getData());

    if (this.state.support3PC) {
      const res = await this._check3PCSupport();
      this.state.support3PC = !!res.support3PC;
    }
  }

  async updateOriginData() {
    const filteredOriginData = JSON.parse(JSON.stringify(this.state.originData));
    Object.keys(filteredOriginData).forEach(key => {
      if (filteredOriginData[key] === "") delete filteredOriginData[key];
    });
    const [whitelist, whiteLabel] = await Promise.all([this.getWhitelist(), this.getWhiteLabel()]);

    this._syncState({
      originData: _objectSpread(_objectSpread({}, whitelist), filteredOriginData),
      whiteLabel: _objectSpread(_objectSpread({}, whiteLabel), this.state.whiteLabel)
    });
  }

  async getWhitelist() {
    try {
      const {
        clientId
      } = this.state;

      if (!clientId) {
        throw new Error("unspecified clientId");
      }

      const url = new URL("https://api.developer.tor.us/whitelist");
      url.searchParams.append("project_id", this.state.clientId);
      const res = await (0,http_helpers_namespaceObject.get)(url.href);
      return res.signed_urls;
    } catch (_) {
      // fail silently
      return {};
    }
  }

  async getWhiteLabel() {
    try {
      const {
        clientId
      } = this.state;

      if (!clientId) {
        throw new Error("unspecified clientId");
      }

      const url = new URL("https://api.developer.tor.us/whitelabel");
      url.searchParams.append("project_id", this.state.clientId);
      const res = await (0,http_helpers_namespaceObject.get)(url.href);
      return res.whiteLabel;
    } catch (_) {
      // fail silently
      return {};
    }
  }

  async login(params) {
    if (params !== null && params !== void 0 && params.loginProvider) {
      return this._selectedLogin(params);
    }

    return this._modal(params);
  }

  async _selectedLogin(params) {
    const defaultParams = {
      redirectUrl: this.state.redirectUrl
    };

    const loginParams = _objectSpread(_objectSpread({
      loginProvider: params.loginProvider
    }, defaultParams), params);

    const res = await this.request({
      method: constants/* OPENLOGIN_METHOD.LOGIN */.NB.LOGIN,
      allowedInteractions: [constants/* UX_MODE.REDIRECT */.$e.REDIRECT, constants/* UX_MODE.POPUP */.$e.POPUP],
      startUrl: this.state.startUrl,
      popupUrl: this.state.popupUrl,
      params: [loginParams]
    });
    this.state.privKey = res.privKey;

    if (res.store) {
      this._syncState(res);
    } else if (this.state.privKey && this.state.support3PC) {
      this._syncState(await this._getData());
    }

    return {
      privKey: this.privKey
    };
  }

  async logout() {
    let logoutParams = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};
    const params = {}; // defaults

    params.redirectUrl = this.state.redirectUrl;
    params._clientId = this.state.clientId;
    params.sessionId = this.state.store.get("sessionId");

    if (logoutParams.clientId) {
      params._clientId = logoutParams.clientId;
    }

    if (logoutParams.redirectUrl !== undefined) {
      params.redirectUrl = logoutParams.redirectUrl;
    }

    const res = await this.request({
      method: constants/* OPENLOGIN_METHOD.LOGOUT */.NB.LOGOUT,
      params: [params],
      startUrl: this.state.startUrl,
      popupUrl: this.state.popupUrl,
      allowedInteractions: [constants/* ALLOWED_INTERACTIONS.JRPC */.xQ.JRPC, constants/* ALLOWED_INTERACTIONS.POPUP */.xQ.POPUP, constants/* ALLOWED_INTERACTIONS.REDIRECT */.xQ.REDIRECT]
    });
    this.state.privKey = "";
    return res;
  }

  async request(args) {
    var _ref;

    const pid = (0,openlogin_utils_.randomId)();
    let {
      params
    } = args; // Note: _origin is added later in postMessageStream for jrpc requests
    // do not add it here since its used for checking postMessage constraints

    const session = {};
    if (params.length !== 1) throw new Error("request params array should have only one element");
    const {
      startUrl,
      popupUrl,
      method,
      allowedInteractions
    } = args;
    if (allowedInteractions.length === 0) throw new Error("no allowed interactions");

    if (this.state.clientId) {
      session._clientId = this.state.clientId;
    }

    if (this.privKey) {
      const userData = {
        clientId: session._clientId,
        timestamp: Date.now().toString()
      };
      const sig = await (0,eccrypto_.sign)(Buffer.from(this.privKey, "hex"), Buffer.from((0,openlogin_utils_.keccak)("keccak256").update(JSON.stringify(userData)).digest("hex"), "hex"));
      session._user = (0,eccrypto_.getPublic)(Buffer.from(this.privKey, "hex")).toString("hex");
      session._userSig = openlogin_utils_.base64url.encode(sig);
      session._userData = userData;
    }

    session._originData = this.state.originData;
    session._whiteLabelData = this.state.whiteLabel;
    session._loginConfig = this.state.loginConfig;
    session._sessionId = this.state.store.get("sessionId");

    if (!session._sessionId) {
      const sessionId = (0,openlogin_utils_.randomId)();
      session._sessionId = sessionId;
      this.state.store.set("sessionId", sessionId);
    } // add in session data (allow overrides)


    params = [_objectSpread(_objectSpread({}, session), params[0])]; // use JRPC where possible

    if (this.state.support3PC && allowedInteractions.includes(constants/* ALLOWED_INTERACTIONS.JRPC */.xQ.JRPC)) {
      return this._jrpcRequest({
        method,
        params
      });
    } // set origin


    params[0]._origin = new URL((_ref = params[0].redirectUrl) !== null && _ref !== void 0 ? _ref : this.state.redirectUrl).origin; // preset params

    if (this.state.support3PC) {
      // set params first if 3PC supported
      await this._setPIDData(pid, params); // eslint-disable-next-line require-atomic-updates

      params = [{}];
    }

    if (!startUrl || !popupUrl) {
      throw new Error("no url for redirect / popup flow");
    } // method and pid are always in URL hash params
    // convert params from JSON to base64


    if (this.state.uxMode === constants/* UX_MODE.REDIRECT */.$e.REDIRECT) {
      // if redirects preferred, check for redirect flows first, then check for popup flow
      if (allowedInteractions.includes(constants/* ALLOWED_INTERACTIONS.REDIRECT */.xQ.REDIRECT)) {
        // give time for synchronous methods to complete before redirect
        setTimeout(() => {
          window.location.href = (0,utils/* constructURL */.vE)({
            baseURL: startUrl,
            hash: {
              b64Params: (0,openlogin_utils_.jsonToBase64)(params[0]),
              _pid: pid,
              _method: method
            }
          });
        }, 50);
        return {};
      }

      if (allowedInteractions.includes(constants/* ALLOWED_INTERACTIONS.POPUP */.xQ.POPUP)) {
        const u = new URL((0,utils/* constructURL */.vE)({
          baseURL: popupUrl,
          hash: {
            b64Params: (0,openlogin_utils_.jsonToBase64)(params[0]),
            _pid: pid,
            _method: method
          }
        }));
        const windowRef = window.open(u.toString(), "_blank", (0,utils/* getPopupFeatures */.SL)());
        return (0,utils/* awaitReq */.xP)(pid, windowRef);
      }
    } else {
      // if popups preferred, check for popup flows first, then check for redirect flow
      if (allowedInteractions.includes(constants/* ALLOWED_INTERACTIONS.POPUP */.xQ.POPUP)) {
        const u = new URL((0,utils/* constructURL */.vE)({
          baseURL: popupUrl,
          hash: {
            b64Params: (0,openlogin_utils_.jsonToBase64)(params[0]),
            _pid: pid,
            _method: method
          }
        }));
        const windowRef = window.open(u.toString(), "_blank", (0,utils/* getPopupFeatures */.SL)());
        return (0,utils/* awaitReq */.xP)(pid, windowRef);
      }

      if (allowedInteractions.includes(constants/* ALLOWED_INTERACTIONS.REDIRECT */.xQ.REDIRECT)) {
        // give time for synchronous methods to complete before redirect
        setTimeout(() => {
          window.location.href = (0,utils/* constructURL */.vE)({
            baseURL: startUrl,
            hash: {
              b64Params: (0,openlogin_utils_.jsonToBase64)(params[0]),
              _pid: pid,
              _method: method
            }
          });
        }, 50);
        return null;
      }
    }

    throw new Error("no matching allowed interactions");
  }

  async _jrpcRequest(args) {
    // await this.initialized;
    if (!args || typeof args !== "object" || Array.isArray(args)) {
      throw new Error("invalid request args");
    }

    const {
      method,
      params
    } = args;

    if (typeof method !== "string" || method.length === 0) {
      throw new Error("invalid request method");
    }

    if (params === undefined || !Array.isArray(params)) {
      throw new Error("invalid request params");
    }

    if (params.length === 0) {
      params.push({});
    }

    return new Promise((resolve, reject) => {
      this.provider._rpcRequest({
        method,
        params
      }, (0,openlogin_jrpc_.getRpcPromiseCallback)(resolve, reject));
    });
  }

  async _check3PCSupport() {
    return this._jrpcRequest({
      method: constants/* OPENLOGIN_METHOD.CHECK_3PC_SUPPORT */.NB.CHECK_3PC_SUPPORT,
      params: [{
        _originData: this.state.originData
      }]
    });
  }

  async _setPIDData(pid, data) {
    await this.request({
      allowedInteractions: [constants/* ALLOWED_INTERACTIONS.JRPC */.xQ.JRPC],
      method: constants/* OPENLOGIN_METHOD.SET_PID_DATA */.NB.SET_PID_DATA,
      params: [{
        pid,
        data: data[0]
      }]
    });
  }

  async _getData() {
    return this.request({
      allowedInteractions: [constants/* ALLOWED_INTERACTIONS.JRPC */.xQ.JRPC],
      method: constants/* OPENLOGIN_METHOD.GET_DATA */.NB.GET_DATA,
      params: [{}]
    });
  }

  _syncState(newState) {
    if (newState.store) {
      if (typeof newState.store !== "object") {
        throw new Error("expected store to be an object");
      }

      Object.keys(newState.store).forEach(key => {
        this.state.store.set(key, newState.store[key]);
      });
    }

    const {
      store
    } = this.state;
    this.state = _objectSpread(_objectSpread(_objectSpread({}, this.state), newState), {}, {
      store
    });
  }

  async _modal(params) {
    return new Promise((resolve, reject) => {
      this.modal._prompt(this.state.clientId, this.state.whiteLabel, this.state.loginConfig, async chunk => {
        if (chunk.cancel) {
          reject(new Error("user canceled login"));
        } else {
          try {
            const selectedLoginResponse = await this._selectedLogin(external_lodash_merge_default()(params, chunk));
            resolve(selectedLoginResponse);
          } catch (error) {
            reject(error);
          }
        }
      });
    });
  }

  async _cleanup() {
    await this.modal.cleanup();
    this.provider.cleanup();
  }

  async encrypt(message, privateKey) {
    let privKey = privateKey;

    if (!privKey) {
      privKey = this.privKey;
    } // validations


    if (!/^[0-9a-fA-f]{64}$/.exec(privKey)) {
      if (privKey === "" || privKey === undefined) {
        throw new Error("private key cannot be empty");
      } else {
        throw new Error("invalid private key in encrypt");
      }
    }

    return (0,eccrypto_.encrypt)((0,eccrypto_.getPublic)(Buffer.from(privKey, "hex")), message);
  }

  async decrypt(ciphertext, privateKey) {
    let privKey = privateKey;

    if (!privKey) {
      privKey = this.privKey;
    } // validations


    if (!/^[0-9a-fA-f]{64}$/.exec(privKey)) {
      if (privKey === "" || privKey === undefined) {
        throw new Error("private key cannot be empty");
      } else {
        throw new Error("invalid private key in decrypt");
      }
    }

    return (0,eccrypto_.decrypt)(Buffer.from(privKey, "hex"), ciphertext);
  }

  async getUserInfo() {
    if (this.privKey) {
      const storeData = this.state.store.getStore();
      const userInfo = {
        email: storeData.email || "",
        name: storeData.name || "",
        profileImage: storeData.profileImage || "",
        aggregateVerifier: storeData.aggregateVerifier || "",
        verifier: storeData.verifier || "",
        verifierId: storeData.verifierId || "",
        typeOfLogin: storeData.typeOfLogin || "",
        dappShare: storeData.dappShare || "",
        idToken: storeData.idToken || "",
        oAuthIdToken: storeData.oAuthIdToken || ""
      };
      return userInfo;
    }

    throw new Error("user should be logged in to fetch userInfo");
  }

  async getEncodedLoginUrl(loginParams) {
    const {
      redirectUrl
    } = loginParams;
    const {
      clientId
    } = this.state;

    if (!this.state.originData[origin]) {
      await this.updateOriginData();
    }

    const dataObject = _objectSpread({
      _clientId: clientId,
      _origin: new URL(redirectUrl).origin,
      _originData: this.state.originData,
      redirectUrl
    }, loginParams);

    const b64Params = (0,openlogin_utils_.jsonToBase64)(dataObject);
    const hashParams = {
      b64Params,
      _method: "openlogin_login"
    };
    return (0,utils/* constructURL */.vE)({
      baseURL: "".concat(this.state.iframeUrl, "/start"),
      hash: hashParams
    });
  }

}

/* harmony default export */ const src_OpenLogin = (OpenLogin);

/***/ }),

/***/ 111:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ OpenLoginStore)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
// EXTERNAL MODULE: ./src/constants.ts
var constants = __webpack_require__(18);
;// CONCATENATED MODULE: ./src/MemoryStore.ts

class MemoryStore {
  constructor() {
    defineProperty_default()(this, "store", {});
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value;
  }

}
// EXTERNAL MODULE: ./src/utils.ts
var utils = __webpack_require__(337);
;// CONCATENATED MODULE: ./src/OpenLoginStore.ts




class OpenLoginStore {
  // eslint-disable-next-line no-use-before-define
  constructor(storage) {
    defineProperty_default()(this, "storage", void 0);

    this.storage = storage;

    try {
      if (!storage.getItem(constants/* storeKey */.VD)) {
        this.resetStore();
      }
    } catch (error) {// Storage is not available
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this(utils/* localStorageAvailable */.Vu ? localStorage : new MemoryStore());
    }

    return this.instance;
  }

  toJSON() {
    return this.storage.getItem(constants/* storeKey */.VD);
  }

  resetStore() {
    const currStore = this.getStore();
    this.storage.setItem(constants/* storeKey */.VD, JSON.stringify({}));
    return currStore;
  }

  getStore() {
    return JSON.parse(this.storage.getItem(constants/* storeKey */.VD));
  }

  get(key) {
    const store = JSON.parse(this.storage.getItem(constants/* storeKey */.VD));
    return store[key];
  }

  set(key, value) {
    const store = JSON.parse(this.storage.getItem(constants/* storeKey */.VD));
    store[key] = value;
    this.storage.setItem(constants/* storeKey */.VD, JSON.stringify(store));
  }

}

defineProperty_default()(OpenLoginStore, "instance", void 0);

/***/ }),

/***/ 957:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ Provider)
});

// EXTERNAL MODULE: external "@babel/runtime/helpers/defineProperty"
var defineProperty_ = __webpack_require__(195);
var defineProperty_default = /*#__PURE__*/__webpack_require__.n(defineProperty_);
// EXTERNAL MODULE: external "@toruslabs/openlogin-jrpc"
var openlogin_jrpc_ = __webpack_require__(33);
// EXTERNAL MODULE: external "@toruslabs/openlogin-utils"
var openlogin_utils_ = __webpack_require__(470);
;// CONCATENATED MODULE: external "pump"
const external_pump_namespaceObject = require("pump");
var external_pump_default = /*#__PURE__*/__webpack_require__.n(external_pump_namespaceObject);
// EXTERNAL MODULE: ./src/loglevel.ts + 1 modules
var loglevel = __webpack_require__(124);
;// CONCATENATED MODULE: ./src/Provider.ts





class Provider extends openlogin_jrpc_.SafeEventEmitter {
  constructor() {
    super(...arguments);

    defineProperty_default()(this, "iframeElem", null);

    defineProperty_default()(this, "rpcStream", void 0);

    defineProperty_default()(this, "iframeUrl", void 0);

    defineProperty_default()(this, "rpcEngine", void 0);

    defineProperty_default()(this, "initialized", void 0);

    defineProperty_default()(this, "mux", void 0);
  }

  init(_ref) {
    let {
      iframeElem,
      iframeUrl
    } = _ref;
    this.iframeElem = iframeElem;
    this.iframeUrl = iframeUrl;
    this.setupStream();
    this.initialized = true;
  }

  setupStream() {
    if (this.iframeElem === null) throw new Error("iframe is null");
    this.rpcStream = new openlogin_jrpc_.PostMessageStream({
      name: "embed_rpc",
      target: "iframe_rpc",
      targetWindow: this.iframeElem.contentWindow,
      targetOrigin: new URL(this.iframeUrl).origin
    });
    this.mux = (0,openlogin_jrpc_.setupMultiplex)(this.rpcStream);
    const JRPCConnection = (0,openlogin_jrpc_.createStreamMiddleware)();
    external_pump_default()(JRPCConnection.stream, this.mux.createStream("jrpc"), JRPCConnection.stream, error => {
      loglevel/* default.error */.Z.error("JRPC connection broken", error);
    });
    const rpcEngine = new openlogin_jrpc_.JRPCEngine();
    rpcEngine.push((0,openlogin_jrpc_.createIdRemapMiddleware)());
    rpcEngine.push(JRPCConnection.middleware);
    this.rpcEngine = rpcEngine;
  }

  cleanup() {
    this.iframeElem = null;
    this.initialized = false;
  }

  _rpcRequest(payload, callback) {
    if (!payload.jsonrpc) {
      payload.jsonrpc = "2.0";
    }

    if (!payload.id) {
      payload.id = (0,openlogin_utils_.randomId)();
    }

    this.rpcEngine.handle(payload, callback);
  }

}

/***/ }),

/***/ 18:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$e": () => (/* binding */ UX_MODE),
/* harmony export */   "M_": () => (/* binding */ MFA_LEVELS),
/* harmony export */   "NB": () => (/* binding */ OPENLOGIN_METHOD),
/* harmony export */   "S_": () => (/* binding */ modalDOMElementID),
/* harmony export */   "VD": () => (/* binding */ storeKey),
/* harmony export */   "dr": () => (/* binding */ OPENLOGIN_NETWORK),
/* harmony export */   "hG": () => (/* binding */ LOGIN_PROVIDER),
/* harmony export */   "x7": () => (/* binding */ SUPPORTED_KEY_CURVES),
/* harmony export */   "xQ": () => (/* binding */ ALLOWED_INTERACTIONS)
/* harmony export */ });
const modalDOMElementID = "openlogin-modal";
const storeKey = "openlogin_store";
const UX_MODE = {
  POPUP: "popup",
  REDIRECT: "redirect"
};
const OPENLOGIN_METHOD = {
  LOGIN: "openlogin_login",
  LOGOUT: "openlogin_logout",
  CHECK_3PC_SUPPORT: "openlogin_check_3PC_support",
  SET_PID_DATA: "openlogin_set_pid_data",
  GET_DATA: "openlogin_get_data"
}; // autocomplete workaround https://github.com/microsoft/TypeScript/issues/29729

const ALLOWED_INTERACTIONS = {
  POPUP: "popup",
  REDIRECT: "redirect",
  JRPC: "jrpc"
};
const OPENLOGIN_NETWORK = {
  MAINNET: "mainnet",
  TESTNET: "testnet",
  CYAN: "cyan",
  DEVELOPMENT: "development"
};
const SUPPORTED_KEY_CURVES = {
  SECP256K1: "secp256k1",
  ED25519: "ed25519"
};
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
  EMAIL_PASSWORDLESS: "email_passwordless",
  WEBAUTHN: "webauthn",
  JWT: "jwt"
};
/**
 * {@label loginProviderType}
 */

const MFA_LEVELS = {
  DEFAULT: "default",
  OPTIONAL: "optional",
  MANDATORY: "mandatory",
  NONE: "none"
};

/***/ }),

/***/ 124:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ loglevel)
});

;// CONCATENATED MODULE: external "loglevel"
const external_loglevel_namespaceObject = require("loglevel");
var external_loglevel_default = /*#__PURE__*/__webpack_require__.n(external_loglevel_namespaceObject);
;// CONCATENATED MODULE: ./src/loglevel.ts

external_loglevel_default().setLevel("error");
/* harmony default export */ const loglevel = (external_loglevel_default().getLogger("openlogin"));

/***/ }),

/***/ 337:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "A7": () => (/* binding */ documentReady),
/* harmony export */   "Bv": () => (/* binding */ htmlToElement),
/* harmony export */   "E0": () => (/* binding */ preloadIframe),
/* harmony export */   "Gv": () => (/* binding */ getHashQueryParams),
/* harmony export */   "OF": () => (/* binding */ whitelistUrl),
/* harmony export */   "SL": () => (/* binding */ getPopupFeatures),
/* harmony export */   "Vu": () => (/* binding */ localStorageAvailable),
/* harmony export */   "jK": () => (/* binding */ sessionStorageAvailable),
/* harmony export */   "oZ": () => (/* binding */ storageAvailable),
/* harmony export */   "vE": () => (/* binding */ constructURL),
/* harmony export */   "xP": () => (/* binding */ awaitReq)
/* harmony export */ });
/* harmony import */ var _toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(75);
/* harmony import */ var _toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(470);
/* harmony import */ var _toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _loglevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);



async function documentReady() {
  return new Promise(resolve => {
    if (document.readyState !== "loading") {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        resolve();
      });
    }
  });
}
const htmlToElement = html => {
  const template = window.document.createElement("template");
  const trimmedHtml = html.trim(); // Never return a text node of whitespace as the result

  template.innerHTML = trimmedHtml;
  return template.content.firstChild;
};
async function whitelistUrl(clientId, appKey, origin) {
  const appKeyBuf = Buffer.from(appKey.padStart(64, "0"), "hex");
  if (_toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1__.base64url.encode((0,_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_0__.getPublic)(appKeyBuf)) !== clientId) throw new Error("appKey mismatch");
  const sig = await (0,_toruslabs_eccrypto__WEBPACK_IMPORTED_MODULE_0__.sign)(appKeyBuf, Buffer.from((0,_toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1__.keccak)("keccak256").update(origin).digest("hex"), "hex"));
  return _toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1__.base64url.encode(sig);
}
function getHashQueryParams() {
  let replaceUrl = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;
  const result = {};
  const url = new URL(window.location.href);
  url.searchParams.forEach((value, key) => {
    if (key !== "result") {
      result[key] = value;
    }
  });
  const queryResult = url.searchParams.get("result");

  if (queryResult) {
    try {
      const queryParams = JSON.parse((0,_toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1__.safeatob)(queryResult));
      Object.keys(queryParams).forEach(key => {
        result[key] = queryParams[key];
      });
    } catch (error) {
      _loglevel__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
    }
  }

  const hash = url.hash.substring(1);
  const hashUrl = new URL("".concat(window.location.origin, "/?").concat(hash));
  hashUrl.searchParams.forEach((value, key) => {
    if (key !== "result") {
      result[key] = value;
    }
  });
  const hashResult = hashUrl.searchParams.get("result");

  if (hashResult) {
    try {
      const hashParams = JSON.parse((0,_toruslabs_openlogin_utils__WEBPACK_IMPORTED_MODULE_1__.safeatob)(hashResult));
      Object.keys(hashParams).forEach(key => {
        result[key] = hashParams[key];
      });
    } catch (error) {
      _loglevel__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
    }
  }

  if (replaceUrl) {
    const cleanUrl = window.location.origin + window.location.pathname;
    window.history.replaceState(null, "", cleanUrl);
  }

  return result;
}
function awaitReq(id, windowRef) {
  return new Promise((resolve, reject) => {
    if (!windowRef) reject(new Error("Unable to open window"));
    let closedByHandler = false;
    const closedMonitor = setInterval(() => {
      if (!closedByHandler && windowRef.closed) {
        clearInterval(closedMonitor);
        reject(new Error("user closed popup"));
      }
    }, 500);

    const handler = ev => {
      const {
        pid
      } = ev.data;
      if (id !== pid) return;
      window.removeEventListener("message", handler);
      closedByHandler = true;
      clearInterval(closedMonitor);
      windowRef.close();

      if (ev.data.data && ev.data.data.error) {
        reject(new Error(ev.data.data.error));
      } else {
        resolve(ev.data.data);
      }
    };

    window.addEventListener("message", handler);
  });
}
function constructURL(params) {
  const {
    baseURL,
    query,
    hash
  } = params;
  const url = new URL(baseURL);

  if (query) {
    Object.keys(query).forEach(key => {
      url.searchParams.append(key, query[key]);
    });
  }

  if (hash) {
    const h = new URL(constructURL({
      baseURL,
      query: hash
    })).searchParams.toString();
    url.hash = h;
  }

  return url.toString();
}
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
    return error && ( // everything except Firefox
    error.code === 22 || // Firefox
    error.code === 1014 || // test name field too, because code might not be present
    // everything except Firefox
    error.name === "QuotaExceededErro r" || // Firefox
    error.name === "NS_ERROR_DOM_QUOTA_REACHED") && // acknowledge QuotaExceededError only if there's something already stored
    storageExists && storageLength !== 0;
  }
}
const sessionStorageAvailable = storageAvailable("sessionStorage");
const localStorageAvailable = storageAvailable("localStorage");
function preloadIframe(url) {
  try {
    if (typeof document === "undefined") return;
    const openloginIframeHtml = document.createElement("link");
    openloginIframeHtml.href = url;
    openloginIframeHtml.crossOrigin = "anonymous";
    openloginIframeHtml.type = "text/html";
    openloginIframeHtml.rel = "prefetch";

    if (openloginIframeHtml.relList && openloginIframeHtml.relList.supports) {
      if (openloginIframeHtml.relList.supports("prefetch")) {
        document.head.appendChild(openloginIframeHtml);
      }
    }
  } catch (error) {
    _loglevel__WEBPACK_IMPORTED_MODULE_2__/* ["default"].error */ .Z.error(error);
  }
}
function getPopupFeatures() {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;
  const w = 1200;
  const h = 700;
  const width = window.innerWidth ? window.innerWidth : document.documentElement.clientWidth ? document.documentElement.clientWidth : window.screen.width;
  const height = window.innerHeight ? window.innerHeight : document.documentElement.clientHeight ? document.documentElement.clientHeight : window.screen.height;
  const systemZoom = 1; // No reliable estimate

  const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
  const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
  const features = "titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=".concat(h / systemZoom, ",width=").concat(w / systemZoom, ",top=").concat(top, ",left=").concat(left);
  return features;
}

/***/ }),

/***/ 195:
/***/ ((module) => {

"use strict";
module.exports = require("@babel/runtime/helpers/defineProperty");

/***/ }),

/***/ 75:
/***/ ((module) => {

"use strict";
module.exports = require("@toruslabs/eccrypto");

/***/ }),

/***/ 33:
/***/ ((module) => {

"use strict";
module.exports = require("@toruslabs/openlogin-jrpc");

/***/ }),

/***/ 470:
/***/ ((module) => {

"use strict";
module.exports = require("@toruslabs/openlogin-utils");

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
/* harmony export */   "ALLOWED_INTERACTIONS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.xQ),
/* harmony export */   "LOGIN_PROVIDER": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.hG),
/* harmony export */   "MFA_LEVELS": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.M_),
/* harmony export */   "OPENLOGIN_METHOD": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.NB),
/* harmony export */   "OPENLOGIN_NETWORK": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.dr),
/* harmony export */   "OpenLoginStore": () => (/* reexport safe */ _OpenLoginStore__WEBPACK_IMPORTED_MODULE_4__.Z),
/* harmony export */   "Provider": () => (/* reexport safe */ _Provider__WEBPACK_IMPORTED_MODULE_5__.Z),
/* harmony export */   "SUPPORTED_KEY_CURVES": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.x7),
/* harmony export */   "UX_MODE": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.$e),
/* harmony export */   "awaitReq": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.xP),
/* harmony export */   "constructURL": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.vE),
/* harmony export */   "default": () => (/* reexport safe */ _OpenLogin__WEBPACK_IMPORTED_MODULE_3__.Z),
/* harmony export */   "documentReady": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.A7),
/* harmony export */   "getHashQueryParams": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.Gv),
/* harmony export */   "getPopupFeatures": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.SL),
/* harmony export */   "htmlToElement": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.Bv),
/* harmony export */   "localStorageAvailable": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.Vu),
/* harmony export */   "loglevel": () => (/* reexport safe */ _loglevel__WEBPACK_IMPORTED_MODULE_2__.Z),
/* harmony export */   "modalDOMElementID": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.S_),
/* harmony export */   "preloadIframe": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.E0),
/* harmony export */   "sessionStorageAvailable": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.jK),
/* harmony export */   "storageAvailable": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.oZ),
/* harmony export */   "storeKey": () => (/* reexport safe */ _constants__WEBPACK_IMPORTED_MODULE_0__.VD),
/* harmony export */   "whitelistUrl": () => (/* reexport safe */ _utils__WEBPACK_IMPORTED_MODULE_6__.OF)
/* harmony export */ });
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _IStore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(641);
/* harmony import */ var _IStore__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_IStore__WEBPACK_IMPORTED_MODULE_1__);
/* harmony reexport (unknown) */ var __WEBPACK_REEXPORT_OBJECT__ = {};
/* harmony reexport (unknown) */ for(const __WEBPACK_IMPORT_KEY__ in _IStore__WEBPACK_IMPORTED_MODULE_1__) if(["default","loglevel","OpenLoginStore","Provider","ALLOWED_INTERACTIONS","LOGIN_PROVIDER","MFA_LEVELS","OPENLOGIN_METHOD","OPENLOGIN_NETWORK","SUPPORTED_KEY_CURVES","UX_MODE","modalDOMElementID","storeKey"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) __WEBPACK_REEXPORT_OBJECT__[__WEBPACK_IMPORT_KEY__] = () => _IStore__WEBPACK_IMPORTED_MODULE_1__[__WEBPACK_IMPORT_KEY__]
/* harmony reexport (unknown) */ __webpack_require__.d(__webpack_exports__, __WEBPACK_REEXPORT_OBJECT__);
/* harmony import */ var _loglevel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(124);
/* harmony import */ var _OpenLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(927);
/* harmony import */ var _OpenLoginStore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(111);
/* harmony import */ var _Provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(957);
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(337);








})();

module.exports = __webpack_exports__;
/******/ })()
;
//# sourceMappingURL=openlogin.cjs.js.map
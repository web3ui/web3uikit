import loglevel from 'loglevel';
import _defineProperty from '@babel/runtime/helpers/defineProperty';
import { getPublic, sign, encrypt, decrypt } from '@toruslabs/eccrypto';
import { get } from '@toruslabs/http-helpers';
import { setupMultiplex, PostMessageStream, SafeEventEmitter, createStreamMiddleware, JRPCEngine, createIdRemapMiddleware, getRpcPromiseCallback } from '@toruslabs/openlogin-jrpc';
import { base64url, keccak, safeatob, randomId, jsonToBase64 } from '@toruslabs/openlogin-utils';
import merge from 'lodash.merge';
import pump from 'pump';

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
};
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
const MFA_LEVELS = {
  DEFAULT: "default",
  OPTIONAL: "optional",
  MANDATORY: "mandatory",
  NONE: "none"
};

loglevel.setLevel("error");
var log = loglevel.getLogger("openlogin");

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
  if (base64url.encode(getPublic(appKeyBuf)) !== clientId) throw new Error("appKey mismatch");
  const sig = await sign(appKeyBuf, Buffer.from(keccak("keccak256").update(origin).digest("hex"), "hex"));
  return base64url.encode(sig);
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
      const queryParams = JSON.parse(safeatob(queryResult));
      Object.keys(queryParams).forEach(key => {
        result[key] = queryParams[key];
      });
    } catch (error) {
      log.error(error);
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
      const hashParams = JSON.parse(safeatob(hashResult));
      Object.keys(hashParams).forEach(key => {
        result[key] = hashParams[key];
      });
    } catch (error) {
      log.error(error);
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
    log.error(error);
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

const handleStream = (handle, eventName, handler) => {
  const handlerWrapper = chunk => {
    handler(chunk);
    handle.removeListener(eventName, handlerWrapper);
  };

  handle.on(eventName, handlerWrapper);
};
class Modal {
  constructor(modalUrl) {
    _defineProperty(this, "modalUrl", void 0);

    _defineProperty(this, "iframeElem", void 0);

    _defineProperty(this, "initialized", false);

    _defineProperty(this, "modalZIndex", 99999);

    _defineProperty(this, "mux", void 0);

    _defineProperty(this, "verifierStream", void 0);

    this.modalUrl = modalUrl;
  }

  async init() {
    await this.initIFrame(this.modalUrl);
    this.setupStream();
  }

  setupStream() {
    if (this.iframeElem === null) throw new Error("iframe is null");
    this.mux = setupMultiplex(new PostMessageStream({
      name: "modal_iframe_rpc",
      target: "modal_rpc",
      targetWindow: this.iframeElem.contentWindow,
      targetOrigin: new URL(this.modalUrl).origin
    }));
    this.verifierStream = this.mux.createStream("verifier");
  }

  async initIFrame(src) {
    await documentReady();
    const documentIFrameElem = document.getElementById(modalDOMElementID);

    if (documentIFrameElem) {
      documentIFrameElem.remove();
      log.info("already initialized, removing previous modal iframe");
    }

    this.iframeElem = htmlToElement("<iframe\n        id=".concat(modalDOMElementID, "\n        class=\"torusIframe\"\n        src=\"").concat(src, "\"\n        style=\"display: none; position: fixed; top: 0; right: 0; width: 100%;\n        height: 100%; border: none; border-radius: 0; z-index: ").concat(this.modalZIndex.toString(), "\"\n      ></iframe>"));

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
    await documentReady();
    const documentIFrameElem = document.getElementById(modalDOMElementID);

    if (documentIFrameElem) {
      documentIFrameElem.remove();
      this.iframeElem = null;
    }

    this.initialized = false;
  }

}

class MemoryStore {
  constructor() {
    _defineProperty(this, "store", {});
  }

  getItem(key) {
    return this.store[key];
  }

  setItem(key, value) {
    this.store[key] = value;
  }

}

class OpenLoginStore {
  // eslint-disable-next-line no-use-before-define
  constructor(storage) {
    _defineProperty(this, "storage", void 0);

    this.storage = storage;

    try {
      if (!storage.getItem(storeKey)) {
        this.resetStore();
      }
    } catch (error) {// Storage is not available
    }
  }

  static getInstance() {
    if (!this.instance) {
      this.instance = new this(localStorageAvailable ? localStorage : new MemoryStore());
    }

    return this.instance;
  }

  toJSON() {
    return this.storage.getItem(storeKey);
  }

  resetStore() {
    const currStore = this.getStore();
    this.storage.setItem(storeKey, JSON.stringify({}));
    return currStore;
  }

  getStore() {
    return JSON.parse(this.storage.getItem(storeKey));
  }

  get(key) {
    const store = JSON.parse(this.storage.getItem(storeKey));
    return store[key];
  }

  set(key, value) {
    const store = JSON.parse(this.storage.getItem(storeKey));
    store[key] = value;
    this.storage.setItem(storeKey, JSON.stringify(store));
  }

}

_defineProperty(OpenLoginStore, "instance", void 0);

class Provider extends SafeEventEmitter {
  constructor() {
    super(...arguments);

    _defineProperty(this, "iframeElem", null);

    _defineProperty(this, "rpcStream", void 0);

    _defineProperty(this, "iframeUrl", void 0);

    _defineProperty(this, "rpcEngine", void 0);

    _defineProperty(this, "initialized", void 0);

    _defineProperty(this, "mux", void 0);
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
    this.rpcStream = new PostMessageStream({
      name: "embed_rpc",
      target: "iframe_rpc",
      targetWindow: this.iframeElem.contentWindow,
      targetOrigin: new URL(this.iframeUrl).origin
    });
    this.mux = setupMultiplex(this.rpcStream);
    const JRPCConnection = createStreamMiddleware();
    pump(JRPCConnection.stream, this.mux.createStream("jrpc"), JRPCConnection.stream, error => {
      log.error("JRPC connection broken", error);
    });
    const rpcEngine = new JRPCEngine();
    rpcEngine.push(createIdRemapMiddleware());
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
      payload.id = randomId();
    }

    this.rpcEngine.handle(payload, callback);
  }

}

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }
preloadIframe("https://app.openlogin.com/sdk-modal");

class OpenLogin {
  constructor(options) {
    var _options$no3PC, _options$_startUrl, _options$_popupUrl, _options$redirectUrl, _options$uxMode, _options$replaceUrlOn, _options$originData, _options$whiteLabel, _options$loginConfig, _options$_storageServ;

    _defineProperty(this, "provider", void 0);

    _defineProperty(this, "state", void 0);

    _defineProperty(this, "modal", void 0);

    this.provider = new Proxy(new Provider(), {
      deleteProperty: () => true // work around for web3

    });

    if (!options._iframeUrl) {
      if (options.network === OPENLOGIN_NETWORK.MAINNET) {
        options._iframeUrl = "https://app.openlogin.com";
      } else if (options.network === OPENLOGIN_NETWORK.CYAN) {
        options._iframeUrl = "https://cyan.openlogin.com";
      } else if (options.network === OPENLOGIN_NETWORK.TESTNET) {
        options._iframeUrl = "https://beta.openlogin.com";
      } else if (options.network === OPENLOGIN_NETWORK.DEVELOPMENT) {
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
      uxMode: (_options$uxMode = options.uxMode) !== null && _options$uxMode !== void 0 ? _options$uxMode : UX_MODE.REDIRECT,
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
      store: OpenLoginStore.getInstance(),
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
    if (this.state.network === OPENLOGIN_NETWORK.TESTNET) {
      // using console log because it shouldn't be affected by loglevel config
      // eslint-disable-next-line no-console
      console.log("%c WARNING! You are on testnet. Please set network: 'mainnet' in production", "color: #FF0000");
    }

    await Promise.all([this.modal.init(), this.updateOriginData()]);
    this.provider.init({
      iframeElem: this.modal.iframeElem,
      iframeUrl: this.state.iframeUrl
    });
    const params = getHashQueryParams(this.state.replaceUrlOnRedirect);

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
      const res = await get(url.href);
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
      const res = await get(url.href);
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
      method: OPENLOGIN_METHOD.LOGIN,
      allowedInteractions: [UX_MODE.REDIRECT, UX_MODE.POPUP],
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
      method: OPENLOGIN_METHOD.LOGOUT,
      params: [params],
      startUrl: this.state.startUrl,
      popupUrl: this.state.popupUrl,
      allowedInteractions: [ALLOWED_INTERACTIONS.JRPC, ALLOWED_INTERACTIONS.POPUP, ALLOWED_INTERACTIONS.REDIRECT]
    });
    this.state.privKey = "";
    return res;
  }

  async request(args) {
    var _params$0$redirectUrl;

    const pid = randomId();
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
      const sig = await sign(Buffer.from(this.privKey, "hex"), Buffer.from(keccak("keccak256").update(JSON.stringify(userData)).digest("hex"), "hex"));
      session._user = getPublic(Buffer.from(this.privKey, "hex")).toString("hex");
      session._userSig = base64url.encode(sig);
      session._userData = userData;
    }

    session._originData = this.state.originData;
    session._whiteLabelData = this.state.whiteLabel;
    session._loginConfig = this.state.loginConfig;
    session._sessionId = this.state.store.get("sessionId");

    if (!session._sessionId) {
      const sessionId = randomId();
      session._sessionId = sessionId;
      this.state.store.set("sessionId", sessionId);
    } // add in session data (allow overrides)


    params = [_objectSpread(_objectSpread({}, session), params[0])]; // use JRPC where possible

    if (this.state.support3PC && allowedInteractions.includes(ALLOWED_INTERACTIONS.JRPC)) {
      return this._jrpcRequest({
        method,
        params
      });
    } // set origin


    params[0]._origin = new URL((_params$0$redirectUrl = params[0].redirectUrl) !== null && _params$0$redirectUrl !== void 0 ? _params$0$redirectUrl : this.state.redirectUrl).origin; // preset params

    if (this.state.support3PC) {
      // set params first if 3PC supported
      await this._setPIDData(pid, params); // eslint-disable-next-line require-atomic-updates

      params = [{}];
    }

    if (!startUrl || !popupUrl) {
      throw new Error("no url for redirect / popup flow");
    } // method and pid are always in URL hash params
    // convert params from JSON to base64


    if (this.state.uxMode === UX_MODE.REDIRECT) {
      // if redirects preferred, check for redirect flows first, then check for popup flow
      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.REDIRECT)) {
        // give time for synchronous methods to complete before redirect
        setTimeout(() => {
          window.location.href = constructURL({
            baseURL: startUrl,
            hash: {
              b64Params: jsonToBase64(params[0]),
              _pid: pid,
              _method: method
            }
          });
        }, 50);
        return {};
      }

      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.POPUP)) {
        const u = new URL(constructURL({
          baseURL: popupUrl,
          hash: {
            b64Params: jsonToBase64(params[0]),
            _pid: pid,
            _method: method
          }
        }));
        const windowRef = window.open(u.toString(), "_blank", getPopupFeatures());
        return awaitReq(pid, windowRef);
      }
    } else {
      // if popups preferred, check for popup flows first, then check for redirect flow
      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.POPUP)) {
        const u = new URL(constructURL({
          baseURL: popupUrl,
          hash: {
            b64Params: jsonToBase64(params[0]),
            _pid: pid,
            _method: method
          }
        }));
        const windowRef = window.open(u.toString(), "_blank", getPopupFeatures());
        return awaitReq(pid, windowRef);
      }

      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.REDIRECT)) {
        // give time for synchronous methods to complete before redirect
        setTimeout(() => {
          window.location.href = constructURL({
            baseURL: startUrl,
            hash: {
              b64Params: jsonToBase64(params[0]),
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
      }, getRpcPromiseCallback(resolve, reject));
    });
  }

  async _check3PCSupport() {
    return this._jrpcRequest({
      method: OPENLOGIN_METHOD.CHECK_3PC_SUPPORT,
      params: [{
        _originData: this.state.originData
      }]
    });
  }

  async _setPIDData(pid, data) {
    await this.request({
      allowedInteractions: [ALLOWED_INTERACTIONS.JRPC],
      method: OPENLOGIN_METHOD.SET_PID_DATA,
      params: [{
        pid,
        data: data[0]
      }]
    });
  }

  async _getData() {
    return this.request({
      allowedInteractions: [ALLOWED_INTERACTIONS.JRPC],
      method: OPENLOGIN_METHOD.GET_DATA,
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
            const selectedLoginResponse = await this._selectedLogin(merge(params, chunk));
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

    return encrypt(getPublic(Buffer.from(privKey, "hex")), message);
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

    return decrypt(Buffer.from(privKey, "hex"), ciphertext);
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

    const b64Params = jsonToBase64(dataObject);
    const hashParams = {
      b64Params,
      _method: "openlogin_login"
    };
    return constructURL({
      baseURL: "".concat(this.state.iframeUrl, "/start"),
      hash: hashParams
    });
  }

}

export { ALLOWED_INTERACTIONS, LOGIN_PROVIDER, MFA_LEVELS, OPENLOGIN_METHOD, OPENLOGIN_NETWORK, OpenLoginStore, Provider, SUPPORTED_KEY_CURVES, UX_MODE, awaitReq, constructURL, OpenLogin as default, documentReady, getHashQueryParams, getPopupFeatures, htmlToElement, localStorageAvailable, log as loglevel, modalDOMElementID, preloadIframe, sessionStorageAvailable, storageAvailable, storeKey, whitelistUrl };
//# sourceMappingURL=openlogin.esm.js.map

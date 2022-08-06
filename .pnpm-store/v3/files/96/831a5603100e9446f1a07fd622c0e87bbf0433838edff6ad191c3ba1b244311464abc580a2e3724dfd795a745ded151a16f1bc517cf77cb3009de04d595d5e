import { decrypt, Ecies, encrypt, getPublic, sign } from "@toruslabs/eccrypto";
import { get } from "@toruslabs/http-helpers";
import { getRpcPromiseCallback, JRPCRequest, LoginConfig, OriginData, SessionInfo, WhiteLabelData } from "@toruslabs/openlogin-jrpc";
import { base64url, jsonToBase64, keccak, randomId } from "@toruslabs/openlogin-utils";
import merge from "lodash.merge";

import {
  ALLOWED_INTERACTIONS,
  BaseLogoutParams,
  BaseRedirectParams,
  CUSTOM_LOGIN_PROVIDER_TYPE,
  LOGIN_PROVIDER_TYPE,
  LoginParams,
  OPENLOGIN_METHOD,
  OPENLOGIN_NETWORK,
  OPENLOGIN_NETWORK_TYPE,
  OpenLoginOptions,
  OpenloginUserInfo,
  RequestParams,
  UX_MODE,
  UX_MODE_TYPE,
} from "./constants";
import { Modal } from "./Modal";
import OpenLoginStore from "./OpenLoginStore";
import Provider from "./Provider";
import { awaitReq, constructURL, getHashQueryParams, getPopupFeatures, preloadIframe } from "./utils";

preloadIframe("https://app.openlogin.com/sdk-modal");

export type OpenLoginState = {
  network: OPENLOGIN_NETWORK_TYPE;
  privKey?: string;
  walletKey?: string;
  tKey?: string;
  oAuthPrivateKey?: string;
  support3PC?: boolean;
  clientId: string;
  iframeUrl: string;
  redirectUrl: string;
  startUrl: string;
  popupUrl: string;
  store: OpenLoginStore;
  uxMode: UX_MODE_TYPE;
  replaceUrlOnRedirect: boolean;
  originData: OriginData;
  whiteLabel: WhiteLabelData;
  loginConfig: LoginConfig;
  storageServerUrl: string;
};

class OpenLogin {
  provider: Provider;

  state: OpenLoginState;

  modal: Modal;

  constructor(options: OpenLoginOptions) {
    this.provider = new Proxy(new Provider(), {
      deleteProperty: () => true, // work around for web3
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
    this.modal = new Modal(`${options._iframeUrl}/sdk-modal`);
    this.initState({
      ...options,
      no3PC: options.no3PC ?? false,
      _iframeUrl: options._iframeUrl,
      _startUrl: options._startUrl ?? `${options._iframeUrl}/start`,
      _popupUrl: options._popupUrl ?? `${options._iframeUrl}/popup-window`,
      redirectUrl: options.redirectUrl ?? `${window.location.protocol}//${window.location.host}${window.location.pathname}`,
      uxMode: options.uxMode ?? UX_MODE.REDIRECT,
      replaceUrlOnRedirect: options.replaceUrlOnRedirect ?? true,
      originData: options.originData ?? { [window.location.origin]: "" },
      whiteLabel: options.whiteLabel ?? {},
      loginConfig: options.loginConfig ?? {},
      _storageServerUrl: options._storageServerUrl ?? "https://broadcast-server.tor.us",
    });
  }

  get privKey(): string {
    return this.state.privKey ? this.state.privKey.padStart(64, "0") : "";
  }

  initState(options: Required<OpenLoginOptions>): void {
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
      storageServerUrl: options._storageServerUrl,
    };
  }

  async init(): Promise<void> {
    if (this.state.network === OPENLOGIN_NETWORK.TESTNET) {
      // using console log because it shouldn't be affected by loglevel config
      // eslint-disable-next-line no-console
      console.log("%c WARNING! You are on testnet. Please set network: 'mainnet' in production", "color: #FF0000");
    }
    await Promise.all([this.modal.init(), this.updateOriginData()]);
    this.provider.init({ iframeElem: this.modal.iframeElem, iframeUrl: this.state.iframeUrl });
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

  async updateOriginData(): Promise<void> {
    const filteredOriginData = JSON.parse(JSON.stringify(this.state.originData));
    Object.keys(filteredOriginData).forEach((key) => {
      if (filteredOriginData[key] === "") delete filteredOriginData[key];
    });
    const [whitelist, whiteLabel] = await Promise.all([this.getWhitelist(), this.getWhiteLabel()]);
    this._syncState({ originData: { ...whitelist, ...filteredOriginData }, whiteLabel: { ...whiteLabel, ...this.state.whiteLabel } });
  }

  async getWhitelist(): Promise<OriginData> {
    try {
      const { clientId } = this.state;
      if (!clientId) {
        throw new Error("unspecified clientId");
      }
      const url = new URL("https://api.developer.tor.us/whitelist");
      url.searchParams.append("project_id", this.state.clientId);
      const res = await get<{ signed_urls: OriginData }>(url.href);
      return res.signed_urls;
    } catch (_) {
      // fail silently
      return {};
    }
  }

  async getWhiteLabel(): Promise<WhiteLabelData> {
    try {
      const { clientId } = this.state;
      if (!clientId) {
        throw new Error("unspecified clientId");
      }
      const url = new URL("https://api.developer.tor.us/whitelabel");
      url.searchParams.append("project_id", this.state.clientId);
      const res = await get<{ whiteLabel: WhiteLabelData }>(url.href);
      return res.whiteLabel;
    } catch (_) {
      // fail silently
      return {};
    }
  }

  async login(params?: LoginParams & Partial<BaseRedirectParams>): Promise<{ privKey: string }> {
    if (params?.loginProvider) {
      return this._selectedLogin(params);
    }
    return this._modal(params);
  }

  async _selectedLogin(params: LoginParams & Partial<BaseRedirectParams>): Promise<{ privKey: string }> {
    const defaultParams: BaseRedirectParams = {
      redirectUrl: this.state.redirectUrl,
    };

    const loginParams: LoginParams = {
      loginProvider: params.loginProvider,
      ...defaultParams,
      ...params,
    };

    const res = await this.request<{ privKey: string; store?: Record<string, string> }>({
      method: OPENLOGIN_METHOD.LOGIN,
      allowedInteractions: [UX_MODE.REDIRECT, UX_MODE.POPUP],
      startUrl: this.state.startUrl,
      popupUrl: this.state.popupUrl,
      params: [loginParams],
    });
    this.state.privKey = res.privKey;
    if (res.store) {
      this._syncState(res);
    } else if (this.state.privKey && this.state.support3PC) {
      this._syncState(await this._getData());
    }
    return { privKey: this.privKey };
  }

  async logout(logoutParams: Partial<BaseLogoutParams> & Partial<BaseRedirectParams> = {}): Promise<void> {
    const params: Record<string, unknown> = {};
    // defaults
    params.redirectUrl = this.state.redirectUrl;
    params._clientId = this.state.clientId;
    params.sessionId = this.state.store.get("sessionId");

    if (logoutParams.clientId) {
      params._clientId = logoutParams.clientId;
    }
    if (logoutParams.redirectUrl !== undefined) {
      params.redirectUrl = logoutParams.redirectUrl;
    }

    const res = await this.request<void>({
      method: OPENLOGIN_METHOD.LOGOUT,
      params: [params],
      startUrl: this.state.startUrl,
      popupUrl: this.state.popupUrl,
      allowedInteractions: [ALLOWED_INTERACTIONS.JRPC, ALLOWED_INTERACTIONS.POPUP, ALLOWED_INTERACTIONS.REDIRECT],
    });

    this.state.privKey = "";
    return res;
  }

  async request<T>(args: RequestParams): Promise<T> {
    const pid = randomId();
    let { params } = args;

    // Note: _origin is added later in postMessageStream for jrpc requests
    // do not add it here since its used for checking postMessage constraints
    const session: Partial<SessionInfo> = {};
    if (params.length !== 1) throw new Error("request params array should have only one element");
    const { startUrl, popupUrl, method, allowedInteractions } = args;
    if (allowedInteractions.length === 0) throw new Error("no allowed interactions");

    if (this.state.clientId) {
      session._clientId = this.state.clientId;
    }

    if (this.privKey) {
      const userData = {
        clientId: session._clientId,
        timestamp: Date.now().toString(),
      };
      const sig = await sign(
        Buffer.from(this.privKey, "hex"),
        Buffer.from(keccak("keccak256").update(JSON.stringify(userData)).digest("hex"), "hex")
      );
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
      session._sessionId = sessionId as string;
      this.state.store.set("sessionId", sessionId);
    }

    // add in session data (allow overrides)
    params = [{ ...session, ...params[0] }];

    // use JRPC where possible

    if (this.state.support3PC && allowedInteractions.includes(ALLOWED_INTERACTIONS.JRPC)) {
      return this._jrpcRequest<Record<string, unknown>[], T>({ method, params });
    }

    // set origin
    params[0]._origin = new URL((params[0].redirectUrl as string) ?? this.state.redirectUrl).origin;

    // preset params
    if (this.state.support3PC) {
      // set params first if 3PC supported
      await this._setPIDData(pid, params);
      // eslint-disable-next-line require-atomic-updates
      params = [{}];
    }

    if (!startUrl || !popupUrl) {
      throw new Error("no url for redirect / popup flow");
    }

    // method and pid are always in URL hash params
    // convert params from JSON to base64

    if (this.state.uxMode === UX_MODE.REDIRECT) {
      // if redirects preferred, check for redirect flows first, then check for popup flow

      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.REDIRECT)) {
        // give time for synchronous methods to complete before redirect
        setTimeout(() => {
          window.location.href = constructURL({
            baseURL: startUrl,
            hash: { b64Params: jsonToBase64(params[0]), _pid: pid, _method: method },
          });
        }, 50);
        return {} as T;
      }

      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.POPUP)) {
        const u = new URL(
          constructURL({
            baseURL: popupUrl,
            hash: { b64Params: jsonToBase64(params[0]), _pid: pid, _method: method },
          })
        );
        const windowRef = window.open(u.toString(), "_blank", getPopupFeatures());
        return awaitReq<T>(pid, windowRef);
      }
    } else {
      // if popups preferred, check for popup flows first, then check for redirect flow

      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.POPUP)) {
        const u = new URL(
          constructURL({
            baseURL: popupUrl,
            hash: { b64Params: jsonToBase64(params[0]), _pid: pid, _method: method },
          })
        );
        const windowRef = window.open(u.toString(), "_blank", getPopupFeatures());
        return awaitReq<T>(pid, windowRef);
      }

      if (allowedInteractions.includes(ALLOWED_INTERACTIONS.REDIRECT)) {
        // give time for synchronous methods to complete before redirect
        setTimeout(() => {
          window.location.href = constructURL({
            baseURL: startUrl,
            hash: { b64Params: jsonToBase64(params[0]), _pid: pid, _method: method },
          });
        }, 50);
        return null;
      }
    }

    throw new Error("no matching allowed interactions");
  }

  async _jrpcRequest<T, U>(args: JRPCRequest<T>): Promise<U> {
    // await this.initialized;
    if (!args || typeof args !== "object" || Array.isArray(args)) {
      throw new Error("invalid request args");
    }

    const { method, params } = args;

    if (typeof method !== "string" || method.length === 0) {
      throw new Error("invalid request method");
    }

    if (params === undefined || !Array.isArray(params)) {
      throw new Error("invalid request params");
    }

    if (params.length === 0) {
      params.push({});
    }

    return new Promise<U>((resolve, reject) => {
      this.provider._rpcRequest({ method, params }, getRpcPromiseCallback(resolve, reject));
    });
  }

  async _check3PCSupport(): Promise<Record<string, boolean>> {
    return this._jrpcRequest<Record<string, unknown>[], Record<string, boolean>>({
      method: OPENLOGIN_METHOD.CHECK_3PC_SUPPORT,
      params: [{ _originData: this.state.originData }],
    });
  }

  async _setPIDData(pid: string, data: Record<string, unknown>[]): Promise<void> {
    await this.request({
      allowedInteractions: [ALLOWED_INTERACTIONS.JRPC],
      method: OPENLOGIN_METHOD.SET_PID_DATA,
      params: [
        {
          pid,
          data: data[0],
        },
      ],
    });
  }

  async _getData(): Promise<Record<string, unknown>> {
    return this.request<Record<string, unknown>>({
      allowedInteractions: [ALLOWED_INTERACTIONS.JRPC],
      method: OPENLOGIN_METHOD.GET_DATA,
      params: [{}],
    });
  }

  _syncState(newState: Record<string, unknown>): void {
    if (newState.store) {
      if (typeof newState.store !== "object") {
        throw new Error("expected store to be an object");
      }
      Object.keys(newState.store).forEach((key) => {
        this.state.store.set(key, newState.store[key]);
      });
    }
    const { store } = this.state;
    this.state = { ...this.state, ...newState, store };
  }

  async _modal(params?: LoginParams & Partial<BaseRedirectParams>): Promise<{
    privKey: string;
  }> {
    return new Promise<{ privKey: string }>((resolve, reject) => {
      this.modal._prompt(this.state.clientId, this.state.whiteLabel, this.state.loginConfig, async (chunk: { cancel?: boolean }): Promise<void> => {
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

  async _cleanup(): Promise<void> {
    await this.modal.cleanup();
    this.provider.cleanup();
  }

  async encrypt(message: Buffer, privateKey?: string): Promise<Ecies> {
    let privKey = privateKey;
    if (!privKey) {
      privKey = this.privKey;
    }
    // validations
    if (!/^[0-9a-fA-f]{64}$/.exec(privKey)) {
      if (privKey === "" || privKey === undefined) {
        throw new Error("private key cannot be empty");
      } else {
        throw new Error("invalid private key in encrypt");
      }
    }
    return encrypt(getPublic(Buffer.from(privKey, "hex")), message);
  }

  async decrypt(ciphertext: Ecies, privateKey?: string): Promise<Buffer> {
    let privKey = privateKey;
    if (!privKey) {
      privKey = this.privKey;
    }
    // validations
    if (!/^[0-9a-fA-f]{64}$/.exec(privKey)) {
      if (privKey === "" || privKey === undefined) {
        throw new Error("private key cannot be empty");
      } else {
        throw new Error("invalid private key in decrypt");
      }
    }
    return decrypt(Buffer.from(privKey, "hex"), ciphertext);
  }

  async getUserInfo(): Promise<OpenloginUserInfo> {
    if (this.privKey) {
      const storeData = this.state.store.getStore();
      const userInfo: OpenloginUserInfo = {
        email: (storeData.email as string) || "",
        name: (storeData.name as string) || "",
        profileImage: (storeData.profileImage as string) || "",
        aggregateVerifier: (storeData.aggregateVerifier as string) || "",
        verifier: (storeData.verifier as string) || "",
        verifierId: (storeData.verifierId as string) || "",
        typeOfLogin: (storeData.typeOfLogin as LOGIN_PROVIDER_TYPE | CUSTOM_LOGIN_PROVIDER_TYPE) || "",
        dappShare: (storeData.dappShare as string) || "",
        idToken: (storeData.idToken as string) || "",
        oAuthIdToken: (storeData.oAuthIdToken as string) || "",
      };

      return userInfo;
    }
    throw new Error("user should be logged in to fetch userInfo");
  }

  async getEncodedLoginUrl(loginParams: LoginParams & Partial<BaseRedirectParams>): Promise<string> {
    const { redirectUrl } = loginParams;
    const { clientId } = this.state;
    if (!this.state.originData[origin]) {
      await this.updateOriginData();
    }
    const dataObject = {
      _clientId: clientId,
      _origin: new URL(redirectUrl).origin,
      _originData: this.state.originData,
      redirectUrl,
      ...loginParams,
    };

    const b64Params = jsonToBase64(dataObject);
    const hashParams = {
      b64Params,
      _method: "openlogin_login",
    };

    return constructURL({ baseURL: `${this.state.iframeUrl}/start`, hash: hashParams });
  }
}

export default OpenLogin;

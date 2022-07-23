import { PublicKey, SignaturePubkeyPair, Transaction } from "@solana/web3.js";
import { COMMUNICATION_JRPC_METHODS } from "@toruslabs/base-controllers";
import { setAPIKey } from "@toruslabs/http-helpers";
import { BasePostMessageStream, getRpcPromiseCallback, JRPCRequest } from "@toruslabs/openlogin-jrpc";

import TorusCommunicationProvider from "./communicationProvider";
import configuration from "./config";
import { documentReady, htmlToElement } from "./embedUtils";
import TorusInPageProvider from "./inPageProvider";
import {
  BUTTON_POSITION,
  LOGIN_PROVIDER_TYPE,
  NetworkInterface,
  PAYMENT_PROVIDER_TYPE,
  PaymentParams,
  TORUS_BUILD_ENV,
  TorusCtorArgs,
  TorusLoginParams,
  TorusParams,
  UnValidatedJsonRpcRequest,
  UserInfo,
  WALLET_PATH,
} from "./interfaces";
import log from "./loglevel";
import PopupHandler from "./PopupHandler";
import getSiteMetadata from "./siteMetadata";
import {
  FEATURES_CONFIRM_WINDOW,
  FEATURES_DEFAULT_WALLET_WINDOW,
  FEATURES_PROVIDER_CHANGE_WINDOW,
  getPopupFeatures,
  getTorusUrl,
  getWindowId,
  storageAvailable,
} from "./utils";
// eslint-disable-next-line @typescript-eslint/no-var-requires
const { version } = require("../package.json");
const PROVIDER_UNSAFE_METHODS = ["send_transaction", "sign_transaction", "sign_all_transactions", "sign_message", "connect"];
const COMMUNICATION_UNSAFE_METHODS = [COMMUNICATION_JRPC_METHODS.SET_PROVIDER];

const isLocalStorageAvailable = storageAvailable("localStorage");

// preload for iframe doesn't work https://bugs.chromium.org/p/chromium/issues/detail?id=593267
(async function preLoadIframe() {
  try {
    if (typeof document === "undefined") return;
    const torusIframeHtml = document.createElement("link");
    const { torusUrl } = await getTorusUrl("production");
    torusIframeHtml.href = `${torusUrl}/frame`;
    torusIframeHtml.crossOrigin = "anonymous";
    torusIframeHtml.type = "text/html";
    torusIframeHtml.rel = "prefetch";
    if (torusIframeHtml.relList && torusIframeHtml.relList.supports) {
      if (torusIframeHtml.relList.supports("prefetch")) {
        document.head.appendChild(torusIframeHtml);
      }
    }
  } catch (error) {
    log.warn(error);
  }
})();

class Torus {
  isInitialized: boolean;

  torusAlert: HTMLDivElement;

  modalZIndex: number;

  alertZIndex: number;

  public requestedLoginProvider?: LOGIN_PROVIDER_TYPE;

  provider: TorusInPageProvider;

  communicationProvider: TorusCommunicationProvider;

  dappStorageKey: string;

  private torusAlertContainer: HTMLDivElement;

  private torusUrl: string;

  private torusIframe: HTMLIFrameElement;

  private styleLink: HTMLLinkElement;

  constructor({ modalZIndex = 99999 }: TorusCtorArgs = {}) {
    this.torusUrl = "";
    this.isInitialized = false; // init done
    this.requestedLoginProvider = null;
    this.modalZIndex = modalZIndex;
    this.alertZIndex = modalZIndex + 1000;
    this.dappStorageKey = "";
  }

  get isLoggedIn(): boolean {
    if (!this.communicationProvider) return false;
    return this.communicationProvider.isLoggedIn;
  }

  async init({
    buildEnv = TORUS_BUILD_ENV.PRODUCTION,
    enableLogging = false,
    network,
    showTorusButton = false,
    useLocalStorage = false,
    buttonPosition = BUTTON_POSITION.BOTTOM_LEFT,
    apiKey = "torus-default",
    extraParams = {},
  }: TorusParams = {}): Promise<void> {
    if (this.isInitialized) throw new Error("Already initialized");
    setAPIKey(apiKey);
    const { torusUrl, logLevel } = await getTorusUrl(buildEnv);
    log.enableAll();
    log.info(torusUrl, "url loaded");
    log.info(`Solana Embed Version :${version}`);
    this.torusUrl = torusUrl;
    log.setDefaultLevel(logLevel);
    if (enableLogging) log.enableAll();
    else log.disableAll();

    const dappStorageKey = this.handleDappStorageKey(useLocalStorage);

    const torusIframeUrl = new URL(torusUrl);
    if (torusIframeUrl.pathname.endsWith("/")) torusIframeUrl.pathname += "frame";
    else torusIframeUrl.pathname += "/frame";

    const hashParams = new URLSearchParams();
    if (dappStorageKey) hashParams.append("dappStorageKey", dappStorageKey);
    hashParams.append("origin", window.location.origin);

    torusIframeUrl.hash = hashParams.toString();

    // Iframe code
    this.torusIframe = htmlToElement<HTMLIFrameElement>(
      `<iframe
        id="torusIframe"
        class="torusIframe"
        src="${torusIframeUrl.href}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%;
        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex.toString()}"
      ></iframe>`
    );

    this.torusAlertContainer = htmlToElement<HTMLDivElement>(
      `<div id="torusAlertContainer" style="display:none; z-index: ${this.alertZIndex.toString()}"></div>`
    );

    this.styleLink = htmlToElement<HTMLLinkElement>(`<link href="${torusUrl}/css/widget.css" rel="stylesheet" type="text/css">`);
    const handleSetup = async () => {
      return new Promise<void>((resolve, reject) => {
        try {
          window.document.head.appendChild(this.styleLink);
          window.document.body.appendChild(this.torusIframe);
          window.document.body.appendChild(this.torusAlertContainer);
          this.torusIframe.addEventListener("load", async () => {
            const dappMetadata = await getSiteMetadata();
            // send init params here
            this.torusIframe.contentWindow.postMessage(
              {
                buttonPosition,
                apiKey,
                network,
                dappMetadata,
                extraParams,
              },
              torusIframeUrl.origin
            );
            await this._setupWeb3({
              torusUrl,
            });
            if (showTorusButton) this.showTorusButton();
            else this.hideTorusButton();
            this.isInitialized = true;
            (window as any).torus = this;
            resolve();
          });
        } catch (error) {
          reject(error);
        }
      });
    };

    await documentReady();
    await handleSetup();
  }

  async login(params: TorusLoginParams = {}): Promise<string[]> {
    if (!this.isInitialized) throw new Error("Call init() first");
    try {
      this.requestedLoginProvider = params.loginProvider || null;
      if (!this.requestedLoginProvider) {
        this.communicationProvider._displayIframe({ isFull: true });
      }
      // If user is already logged in, we assume they have given access to the website
      const res = await new Promise((resolve, reject) => {
        // We use this method because we want to update inPage provider state with account info
        this.provider._rpcRequest(
          { method: "solana_requestAccounts", params: [this.requestedLoginProvider, params.login_hint] },
          getRpcPromiseCallback(resolve, reject)
        );
      });

      if (Array.isArray(res) && res.length > 0) {
        return res;
      }
      // This would never happen, but just in case
      throw new Error("Login failed");
    } catch (error) {
      log.error("login failed", error);
      throw error;
    } finally {
      if (this.communicationProvider.isIFrameFullScreen) this.communicationProvider._displayIframe();
    }
  }

  async loginWithPrivateKey(loginParams: { privateKey: string; userInfo: UserInfo }): Promise<void> {
    if (!this.isInitialized) throw new Error("Call init() first");
    const { privateKey, userInfo } = loginParams;
    const { success } = await this.communicationProvider.request<{ privateKey: string; userInfo: UserInfo }, { success: boolean }>({
      method: "login_with_private_key",
      params: {
        privateKey,
        userInfo,
      },
    });
    if (!success) throw new Error("Login Failed");
  }

  async logout(): Promise<void> {
    if (!this.communicationProvider.isLoggedIn) throw new Error("Not logged in");

    await this.communicationProvider.request({
      method: COMMUNICATION_JRPC_METHODS.LOGOUT,
      params: [],
    });
    this.requestedLoginProvider = null;
  }

  async cleanUp(): Promise<void> {
    if (this.communicationProvider.isLoggedIn) {
      await this.logout();
    }
    this.clearInit();
  }

  clearInit(): void {
    function isElement(element: unknown) {
      return element instanceof Element || element instanceof Document;
    }
    if (isElement(this.styleLink) && window.document.body.contains(this.styleLink)) {
      this.styleLink.remove();
      this.styleLink = undefined;
    }
    if (isElement(this.torusIframe) && window.document.body.contains(this.torusIframe)) {
      this.torusIframe.remove();
      this.torusIframe = undefined;
    }
    if (isElement(this.torusAlertContainer) && window.document.body.contains(this.torusAlertContainer)) {
      this.torusAlert = undefined;
      this.torusAlertContainer.remove();
      this.torusAlertContainer = undefined;
    }
    this.isInitialized = false;
  }

  hideTorusButton(): void {
    this.communicationProvider.hideTorusButton();
  }

  showTorusButton(): void {
    this.communicationProvider.showTorusButton();
  }

  async setProvider(params: NetworkInterface): Promise<void> {
    await this.communicationProvider.request({
      method: COMMUNICATION_JRPC_METHODS.SET_PROVIDER,
      params: { ...params },
    });
  }

  async showWallet(path: WALLET_PATH, params: Record<string, string> = {}): Promise<void> {
    const instanceId = await this.communicationProvider.request<[], string>({
      method: COMMUNICATION_JRPC_METHODS.WALLET_INSTANCE_ID,
      params: [],
    });
    const finalPath = path ? `/${path}` : "";

    const finalUrl = new URL(`${this.torusUrl}/wallet${finalPath}`);
    // Using URL constructor to prevent js injection and allow parameter validation.!
    finalUrl.searchParams.append("instanceId", instanceId);
    Object.keys(params).forEach((x) => {
      finalUrl.searchParams.append(x, params[x]);
    });
    if (this.dappStorageKey) {
      finalUrl.hash = `#dappStorageKey=${this.dappStorageKey}`;
    }
    // No need to track this window state. Hence, no _handleWindow call.
    const walletWindow = new PopupHandler({ url: finalUrl, features: getPopupFeatures(FEATURES_DEFAULT_WALLET_WINDOW) });
    walletWindow.open();
  }

  async getUserInfo(): Promise<UserInfo> {
    const userInfoResponse = await this.communicationProvider.request<[], UserInfo>({
      method: COMMUNICATION_JRPC_METHODS.USER_INFO,
      params: [],
    });
    return userInfoResponse as UserInfo;
  }

  async initiateTopup(provider: PAYMENT_PROVIDER_TYPE, params: PaymentParams): Promise<boolean> {
    if (!this.isInitialized) throw new Error("Torus is not initialized");
    const windowId = getWindowId();
    this.communicationProvider._handleWindow(windowId);
    const topupResponse = await this.communicationProvider.request<
      { provider: PAYMENT_PROVIDER_TYPE; params: PaymentParams; windowId: string },
      boolean
    >({
      method: COMMUNICATION_JRPC_METHODS.TOPUP,
      params: { provider, params, windowId },
    });
    return topupResponse;
  }

  // Solana specific API
  async getAccounts() {
    const response = (await this.provider.request({
      method: "getAccounts",
      params: [],
    })) as string[];
    return response;
  }

  async sendTransaction(transaction: Transaction): Promise<string> {
    const response = (await this.provider.request({
      method: "send_transaction",
      params: { message: transaction.serialize({ requireAllSignatures: false }).toString("hex") },
    })) as string;
    return response;
  }

  async signTransaction(transaction: Transaction): Promise<Transaction> {
    const response: string = (await this.provider.request({
      method: "sign_transaction",
      params: { message: transaction.serializeMessage().toString("hex"), messageOnly: true },
    })) as string;

    // reconstruct signature pair
    const parsed = JSON.parse(response);
    const signature: SignaturePubkeyPair = { publicKey: new PublicKey(parsed.publicKey), signature: Buffer.from(parsed.signature, "hex") };
    transaction.addSignature(signature.publicKey, signature.signature);
    return transaction;
  }

  async signAllTransactions(transactions: Transaction[]): Promise<Transaction[]> {
    const encodedMessage: string[] = transactions.map((tx) => {
      return tx.serializeMessage().toString("hex");
    });
    const responses: string[] = await this.provider.request({
      method: "sign_all_transactions",
      params: { message: encodedMessage, messageOnly: true },
    });

    // reconstruct signature pairs
    const signatures: SignaturePubkeyPair[] = responses.map((item) => {
      const parsed = JSON.parse(item);
      return { publicKey: new PublicKey(parsed.publicKey), signature: Buffer.from(parsed.signature, "hex") };
    });

    transactions.forEach((tx, idx) => {
      tx.addSignature(signatures[idx].publicKey, signatures[idx].signature);
      return tx;
    });
    return transactions;
  }

  async signMessage(data: Uint8Array): Promise<Uint8Array> {
    const response = (await this.provider.request({
      method: "sign_message",
      params: {
        data,
      },
    })) as Uint8Array;
    return response;
  }

  async getGaslessPublicKey(): Promise<string> {
    const response = (await this.provider.request({
      method: "get_gasless_public_key",
      params: [],
    })) as string;
    return response;
  }

  // async connect(): Promise<boolean> {
  //   const response = (await this.provider.request({
  //     method: "connect",
  //     params: {},
  //   })) as boolean;
  //   return response;
  // }

  private handleDappStorageKey(useLocalStorage: boolean) {
    let dappStorageKey = "";
    if (isLocalStorageAvailable && useLocalStorage) {
      const storedKey = window.localStorage.getItem(configuration.localStorageKey);
      if (storedKey) dappStorageKey = storedKey;
      else {
        const generatedKey = `torus-app-${getWindowId()}`;
        window.localStorage.setItem(configuration.localStorageKey, generatedKey);
        dappStorageKey = generatedKey;
      }
    }
    this.dappStorageKey = dappStorageKey;
    return dappStorageKey;
  }

  private async _setupWeb3(providerParams: { torusUrl: string }): Promise<void> {
    log.info("setupWeb3 running");
    // setup background connection
    const providerStream = new BasePostMessageStream({
      name: "embed_torus",
      target: "iframe_torus",
      targetWindow: this.torusIframe.contentWindow,
    });

    // We create another LocalMessageDuplexStream for communication between dapp <> iframe
    const communicationStream = new BasePostMessageStream({
      name: "embed_communication",
      target: "iframe_communication",
      targetWindow: this.torusIframe.contentWindow,
    });

    // compose the inPage provider
    const inPageProvider = new TorusInPageProvider(providerStream, {});
    const communicationProvider = new TorusCommunicationProvider(communicationStream, {});

    inPageProvider.tryWindowHandle = (payload: UnValidatedJsonRpcRequest | UnValidatedJsonRpcRequest[], cb: (...args: unknown[]) => void) => {
      const _payload = payload;
      if (!Array.isArray(_payload) && PROVIDER_UNSAFE_METHODS.includes(_payload.method)) {
        if (!this.communicationProvider.isLoggedIn) throw new Error("User Not Logged In");
        const windowId = getWindowId();
        communicationProvider._handleWindow(windowId, {
          target: "_blank",
          features: getPopupFeatures(FEATURES_CONFIRM_WINDOW),
        });
        // for inPageProvider methods sending windowId in request instead of params
        // as params might be positional.
        _payload.windowId = windowId;
      }
      inPageProvider._rpcEngine.handle(_payload as JRPCRequest<unknown>[], cb);
    };

    communicationProvider.tryWindowHandle = (payload: JRPCRequest<unknown>, cb: (...args: unknown[]) => void) => {
      const _payload = payload;
      if (!Array.isArray(_payload) && COMMUNICATION_UNSAFE_METHODS.includes(_payload.method)) {
        const windowId = getWindowId();
        communicationProvider._handleWindow(windowId, {
          target: "_blank",
          features: getPopupFeatures(FEATURES_PROVIDER_CHANGE_WINDOW), // todo: are these features generic for all
        });
        // for communication methods sending window id in jrpc req params
        (_payload.params as Record<string, unknown>).windowId = windowId;
      }
      communicationProvider._rpcEngine.handle(_payload as JRPCRequest<unknown>, cb);
    };

    // detect solana_requestAccounts and pipe to enable for now
    const detectAccountRequestPrototypeModifier = (m) => {
      const originalMethod = inPageProvider[m];
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const self = this;
      inPageProvider[m] = function providerFunc(request, cb) {
        const { method, params = [] } = request;
        if (method === "solana_requestAccounts") {
          if (!cb) return self.login({ loginProvider: params[0] });
          self
            .login({ loginProvider: params[0] })
            // eslint-disable-next-line promise/no-callback-in-promise
            .then((res) => cb(null, res))
            // eslint-disable-next-line promise/no-callback-in-promise
            .catch((err) => cb(err));
        }
        return originalMethod.apply(this, [request, cb]);
      };
    };

    // Detects call to solana_requestAccounts in request & sendAsync and passes to login
    detectAccountRequestPrototypeModifier("request");
    detectAccountRequestPrototypeModifier("sendAsync");
    detectAccountRequestPrototypeModifier("send");

    const proxiedInPageProvider = new Proxy(inPageProvider, {
      // straight up lie that we deleted the property so that it doesn't
      // throw an error in strict mode
      deleteProperty: () => true,
    });

    const proxiedCommunicationProvider = new Proxy(communicationProvider, {
      // straight up lie that we deleted the property so that it doesn't
      // throw an error in strict mode
      deleteProperty: () => true,
    });

    this.provider = proxiedInPageProvider;
    this.communicationProvider = proxiedCommunicationProvider;

    await Promise.all([
      inPageProvider._initializeState(),
      communicationProvider._initializeState({
        ...providerParams,
        dappStorageKey: this.dappStorageKey,
        torusAlertContainer: this.torusAlertContainer,
        torusIframe: this.torusIframe,
      }),
    ]);
    log.debug("Torus - injected provider");
  }
}

export default Torus;

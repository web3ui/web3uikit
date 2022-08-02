import { COMMUNICATION_JRPC_METHODS, COMMUNICATION_NOTIFICATIONS, CommunicationWalletProviderState } from "@toruslabs/base-controllers";
import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
import { EthereumRpcError } from "eth-rpc-errors";
import type { Duplex } from "readable-stream";

import BaseProvider from "./baseProvider";
import configuration from "./config";
import { documentReady, htmlToElement } from "./embedUtils";
import {
  BUTTON_POSITION,
  CommunicationProviderState,
  EMBED_TRANSLATION_ITEM,
  LOGIN_PROVIDER_TYPE,
  ProviderOptions,
  RequestArguments,
  UnValidatedJsonRpcRequest,
} from "./interfaces";
import log from "./loglevel";
import messages from "./messages";
import PopupHandler from "./PopupHandler";
import { FEATURES_CONFIRM_WINDOW, getPopupFeatures, getUserLanguage } from "./utils";

class TorusCommunicationProvider extends BaseProvider<CommunicationProviderState> {
  protected static _defaultState: CommunicationProviderState = {
    buttonPosition: "bottom-left",
    currentLoginProvider: null,
    isIFrameFullScreen: false,
    hasEmittedConnection: false,

    torusWidgetVisibility: false,
    initialized: false,
    isLoggedIn: false,
    isPermanentlyDisconnected: false,
    isConnected: false,
  };

  public embedTranslations: EMBED_TRANSLATION_ITEM;

  public torusUrl: string;

  public dappStorageKey: string;

  public windowRefs: Record<string, PopupHandler>;

  tryWindowHandle: (payload: UnValidatedJsonRpcRequest | UnValidatedJsonRpcRequest[], cb: (...args: unknown[]) => void) => void;

  private torusAlertContainer: HTMLDivElement;

  private torusIframe: HTMLIFrameElement;

  constructor(connectionStream: Duplex, { maxEventListeners = 100, jsonRpcStreamName = "provider" }: ProviderOptions) {
    super(connectionStream, { maxEventListeners, jsonRpcStreamName });

    // private state
    this._state = {
      ...TorusCommunicationProvider._defaultState,
    };

    // public state
    this.torusUrl = "";
    this.dappStorageKey = "";
    const languageTranslations = configuration.translations[getUserLanguage()];
    this.embedTranslations = languageTranslations.embed;
    this.windowRefs = {};

    // setup own event listeners

    // EIP-1193 connect
    this.on("connect", () => {
      this._state.isConnected = true;
    });

    const notificationHandler = (payload: RequestArguments<Record<string, unknown>>) => {
      const { method, params } = payload;
      if (method === COMMUNICATION_NOTIFICATIONS.IFRAME_STATUS) {
        const { isFullScreen, rid } = params;
        this._displayIframe({ isFull: isFullScreen as boolean, rid: rid as string });
      } else if (method === COMMUNICATION_NOTIFICATIONS.CREATE_WINDOW) {
        const { windowId, url } = params as Record<string, string>;
        this._createPopupBlockAlert(windowId, url);
      } else if (method === COMMUNICATION_NOTIFICATIONS.CLOSE_WINDOW) {
        this._handleCloseWindow(params);
      } else if (method === COMMUNICATION_NOTIFICATIONS.USER_LOGGED_IN) {
        const { currentLoginProvider } = params;
        this._state.isLoggedIn = true;
        this._state.currentLoginProvider = currentLoginProvider as LOGIN_PROVIDER_TYPE;
      } else if (method === COMMUNICATION_NOTIFICATIONS.USER_LOGGED_OUT) {
        this._state.isLoggedIn = false;
        this._state.currentLoginProvider = null;
        this._displayIframe();
      }
    };

    this.jsonRpcConnectionEvents.on("notification", notificationHandler);
  }

  get isLoggedIn(): boolean {
    return this._state.isLoggedIn;
  }

  get isIFrameFullScreen(): boolean {
    return this._state.isIFrameFullScreen;
  }

  /**
   * Returns whether the inPage provider is connected to Torus.
   */
  isConnected(): boolean {
    return this._state.isConnected;
  }

  async _initializeState(params: Record<string, unknown>): Promise<void> {
    try {
      const { torusUrl, dappStorageKey, torusAlertContainer, torusIframe } = params;
      this.torusUrl = torusUrl as string;
      this.dappStorageKey = dappStorageKey as string;
      this.torusAlertContainer = torusAlertContainer as HTMLDivElement;
      this.torusIframe = torusIframe as HTMLIFrameElement;
      this.torusIframe.addEventListener("load", () => {
        // only do this if iframe is not full screen
        if (!this._state.isIFrameFullScreen) this._displayIframe();
      });
      const { currentLoginProvider, isLoggedIn } = (await this.request({
        method: COMMUNICATION_JRPC_METHODS.GET_PROVIDER_STATE,
        params: [],
      })) as CommunicationWalletProviderState;

      // indicate that we've connected, for EIP-1193 compliance
      this._handleConnect(currentLoginProvider, isLoggedIn);
    } catch (error) {
      log.error("Torus: Failed to get initial state. Please report this bug.", error);
    } finally {
      log.info("initialized communication state");
      this._state.initialized = true;
      this.emit("_initialized");
    }
  }

  _handleWindow(windowId: string, { url, target, features }: { url?: string; target?: string; features?: string } = {}): void {
    const finalUrl = new URL(url || `${this.torusUrl}/redirect?windowId=${windowId}`);
    if (this.dappStorageKey) {
      // If multiple instances, it returns the first one
      if (finalUrl.hash) finalUrl.hash += `&dappStorageKey=${this.dappStorageKey}`;
      else finalUrl.hash = `#dappStorageKey=${this.dappStorageKey}`;
    }
    const handledWindow = new PopupHandler({ url: finalUrl, target, features });
    handledWindow.open();
    if (!handledWindow.window) {
      this._createPopupBlockAlert(windowId, finalUrl.href);
      return;
    }
    // Add to collection only if window is opened
    this.windowRefs[windowId] = handledWindow;
    // We tell the iframe that the window has been successfully opened
    this.request<{ windowId: string }, unknown>({
      method: COMMUNICATION_JRPC_METHODS.OPENED_WINDOW,
      params: { windowId },
    });
    handledWindow.once("close", () => {
      // user closed the window
      delete this.windowRefs[windowId];
      this.request<{ windowId: string }, unknown>({
        method: COMMUNICATION_JRPC_METHODS.CLOSED_WINDOW,
        params: { windowId },
      });
    });
  }

  _displayIframe({ isFull = false, rid = "" }: { isFull?: boolean; rid?: string } = {}): void {
    const style: Partial<CSSStyleDeclaration> = {};
    // set phase
    if (!isFull) {
      style.display = this._state.torusWidgetVisibility ? "block" : "none";
      style.height = "70px";
      style.width = "70px";
      switch (this._state.buttonPosition) {
        case BUTTON_POSITION.TOP_LEFT:
          style.top = "0px";
          style.left = "0px";
          style.right = "auto";
          style.bottom = "auto";
          break;
        case BUTTON_POSITION.TOP_RIGHT:
          style.top = "0px";
          style.right = "0px";
          style.left = "auto";
          style.bottom = "auto";
          break;
        case BUTTON_POSITION.BOTTOM_RIGHT:
          style.bottom = "0px";
          style.right = "0px";
          style.top = "auto";
          style.left = "auto";
          break;
        case BUTTON_POSITION.BOTTOM_LEFT:
        default:
          style.bottom = "0px";
          style.left = "0px";
          style.top = "auto";
          style.right = "auto";
          break;
      }
    } else {
      style.display = "block";
      style.width = "100%";
      style.height = "100%";
      style.top = "0px";
      style.right = "0px";
      style.left = "0px";
      style.bottom = "0px";
    }
    Object.assign(this.torusIframe.style, style);
    this._state.isIFrameFullScreen = isFull;
    this.request<{ isIFrameFullScreen: boolean; rid: string }, unknown>({
      method: COMMUNICATION_JRPC_METHODS.IFRAME_STATUS,
      params: { isIFrameFullScreen: isFull, rid },
    });
  }

  hideTorusButton(): void {
    this._state.torusWidgetVisibility = false;
    this._displayIframe();
  }

  showTorusButton(): void {
    this._state.torusWidgetVisibility = true;
    this._displayIframe();
  }

  /**
   * Internal RPC method. Forwards requests to background via the RPC engine.
   * Also remap ids inbound and outbound
   */
  protected _rpcRequest(payload: UnValidatedJsonRpcRequest | UnValidatedJsonRpcRequest[], callback: (...args: unknown[]) => void): void {
    const cb = callback;
    const _payload = payload;
    if (!Array.isArray(_payload)) {
      if (!_payload.jsonrpc) {
        _payload.jsonrpc = "2.0";
      }
    }
    this.tryWindowHandle(_payload as JRPCRequest<unknown>[], cb);
  }

  /**
   * When the provider becomes connected, updates internal state and emits
   * required events. Idempotent.
   *
   * @param currentLoginProvider - The login Provider
   * emits TorusInpageProvider#connect
   */
  protected _handleConnect(currentLoginProvider: string, isLoggedIn: boolean): void {
    if (!this._state.isConnected) {
      this._state.isConnected = true;
      this.emit("connect", { currentLoginProvider, isLoggedIn });
      log.debug(messages.info.connected(currentLoginProvider));
    }
  }

  /**
   * When the provider becomes disconnected, updates internal state and emits
   * required events. Idempotent with respect to the isRecoverable parameter.
   *
   * Error codes per the CloseEvent status codes as required by EIP-1193:
   * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
   *
   * @param isRecoverable - Whether the disconnection is recoverable.
   * @param errorMessage - A custom error message.
   * emits TorusInpageProvider#disconnect
   */
  protected _handleDisconnect(isRecoverable: boolean, errorMessage?: string): void {
    if (this._state.isConnected || (!this._state.isPermanentlyDisconnected && !isRecoverable)) {
      this._state.isConnected = false;

      let error: Error;
      if (isRecoverable) {
        error = new EthereumRpcError(
          1013, // Try again later
          errorMessage || messages.errors.disconnected()
        );
        log.debug(error);
      } else {
        error = new EthereumRpcError(
          1011, // Internal error
          errorMessage || messages.errors.permanentlyDisconnected()
        );
        log.error(error);
        this._state.currentLoginProvider = null;
        this._state.isLoggedIn = false;
        this._state.torusWidgetVisibility = false;
        this._state.isIFrameFullScreen = false;
        this._state.isPermanentlyDisconnected = true;
      }

      this.emit("disconnect", error);
    }
  }

  // Called if the iframe wants to close the window cause it is done processing the request
  private _handleCloseWindow(params: { windowId?: string }): void {
    const { windowId } = params;
    if (this.windowRefs[windowId]) {
      this.windowRefs[windowId].close();
      delete this.windowRefs[windowId];
    }
  }

  private async _createPopupBlockAlert(windowId: string, url: string): Promise<void> {
    const logoUrl = this.getLogoUrl();
    const torusAlert = htmlToElement<HTMLDivElement>(
      '<div id="torusAlert" class="torus-alert--v2">' +
        `<div id="torusAlert__logo"><img src="${logoUrl}" /></div>` +
        "<div>" +
        `<h1 id="torusAlert__title">${this.embedTranslations.actionRequired}</h1>` +
        `<p id="torusAlert__desc">${this.embedTranslations.pendingAction}</p>` +
        "</div>" +
        "</div>"
    );

    const successAlert = htmlToElement(`<div><a id="torusAlert__btn">${this.embedTranslations.continue}</a></div>`);
    const btnContainer = htmlToElement('<div id="torusAlert__btn-container"></div>');
    btnContainer.appendChild(successAlert);
    torusAlert.appendChild(btnContainer);
    const bindOnLoad = () => {
      successAlert.addEventListener("click", () => {
        this._handleWindow(windowId, {
          url,
          target: "_blank",
          features: getPopupFeatures(FEATURES_CONFIRM_WINDOW),
        });
        torusAlert.remove();
        if (this.torusAlertContainer.children.length === 0) this.torusAlertContainer.style.display = "none";
      });
    };

    const attachOnLoad = () => {
      this.torusAlertContainer.appendChild(torusAlert);
    };

    await documentReady();
    attachOnLoad();
    bindOnLoad();
    this.torusAlertContainer.style.display = "block";
  }

  private getLogoUrl(): string {
    const logoUrl = `${this.torusUrl}/images/torus_icon-blue.svg`;
    return logoUrl;
  }
}

export default TorusCommunicationProvider;

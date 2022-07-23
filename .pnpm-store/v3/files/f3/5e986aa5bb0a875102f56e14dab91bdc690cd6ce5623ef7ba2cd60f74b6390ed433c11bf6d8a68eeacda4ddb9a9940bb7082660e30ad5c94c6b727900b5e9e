import BaseController from "../BaseController";
import { FEATURES_DEFAULT_POPUP_WINDOW } from "../enums";
import { IWindow } from "../interfaces";
import { getPopupFeatures } from "../utils";
import { PopupHandlerConfig, PopupHandlerState } from "./interfaces";
import StreamWindow from "./StreamWindow";
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
class PopupHandler extends BaseController<PopupHandlerConfig, PopupHandlerState> {
  constructor({ config, state }: { config: Partial<PopupHandlerConfig>; state: Partial<PopupHandlerState> & Pick<PopupHandlerState, "url"> }) {
    super({ config, state });
    // this.id = randomId()
    // Add in dapp storage key to all popups as a hash parameter
    this.defaultConfig = {
      dappStorageKey: "",
      features: getPopupFeatures(FEATURES_DEFAULT_POPUP_WINDOW),
      target: "_blank",
      communicationEngine: null,
      communicationWindowManager: null,
    };
    this.defaultState = {
      windowTimer: null,
      window: null,
      iClosedWindow: false,
      windowId: "",
      url: state.url,
    };
    this.initialize();
    this._setupTimer();
  }

  async open(): Promise<void> {
    // if window is already open
    const { target, features, dappStorageKey, communicationEngine, communicationWindowManager } = this.config;
    const { windowId, url } = this.state;
    if (dappStorageKey) {
      const urlHashParams = new URLSearchParams(url.hash.slice(1));
      urlHashParams.append("dappStorageKey", dappStorageKey);
      url.hash = urlHashParams.toString();
      this.update({ url });
    }
    // No window has been pre-opened
    if (!windowId) {
      // try to open a window first
      let localWindow: IWindow = window.open(url.href, target, features);
      if (!localWindow) {
        // if it's blocked, open StreamWindow
        localWindow = new StreamWindow({ config: { communicationEngine, communicationWindowManager }, state: { url } });
        localWindow.open();
      }
      this.update({ window: localWindow });
      return;
    }
    // A window has been pre-opened with a query parameter `windowId`
    const localWindow = new StreamWindow({ config: { communicationEngine, communicationWindowManager }, state: { url, windowId } });
    this.update({ window: localWindow });
    await localWindow.open();
  }

  close(): void {
    this.update({ iClosedWindow: true });
    const { window } = this.state;
    if (window) window.close();
  }

  private _setupTimer(): void {
    const timer = window.setInterval(() => {
      const { window, windowTimer, iClosedWindow } = this.state;
      if (window && window.closed) {
        if (windowTimer) clearInterval(windowTimer);
        if (!iClosedWindow) {
          this.emit("close");
        }
        this.update({ iClosedWindow: false, window: null });
      }
      if (window === null && windowTimer) clearInterval(windowTimer);
    }, 500);
    this.update({ windowTimer: timer });
  }
}

export default PopupHandler;

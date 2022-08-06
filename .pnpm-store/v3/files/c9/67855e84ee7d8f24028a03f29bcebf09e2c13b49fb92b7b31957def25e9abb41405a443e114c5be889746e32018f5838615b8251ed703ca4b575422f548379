import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";

import { FEATURES_DEFAULT_POPUP_WINDOW, getPopupFeatures } from "./utils";

class PopupHandler extends SafeEventEmitter {
  url: URL;

  target: string;

  features: string;

  window: Window;

  windowTimer: number;

  iClosedWindow: boolean;

  constructor({ url, target, features }: { url: URL; target?: string; features?: string }) {
    super();
    this.url = url;
    this.target = target || "_blank";
    this.features = features || getPopupFeatures(FEATURES_DEFAULT_POPUP_WINDOW);
    this.window = undefined;
    this.windowTimer = undefined;
    this.iClosedWindow = false;
    this._setupTimer();
  }

  _setupTimer(): void {
    this.windowTimer = Number(
      setInterval(() => {
        if (this.window && this.window.closed) {
          clearInterval(this.windowTimer);
          if (!this.iClosedWindow) {
            this.emit("close");
          }
          this.iClosedWindow = false;
          this.window = undefined;
        }
        if (this.window === undefined) clearInterval(this.windowTimer);
      }, 500)
    );
  }

  open(): Promise<void> {
    this.window = window.open(this.url.href, this.target, this.features);
    if (this.window?.focus) this.window.focus();
    return Promise.resolve();
  }

  close(): void {
    this.iClosedWindow = true;
    if (this.window) this.window.close();
  }

  redirect(locationReplaceOnRedirect: boolean): void {
    if (locationReplaceOnRedirect) {
      window.location.replace(this.url.href);
    } else {
      window.location.href = this.url.href;
    }
  }
}

export default PopupHandler;

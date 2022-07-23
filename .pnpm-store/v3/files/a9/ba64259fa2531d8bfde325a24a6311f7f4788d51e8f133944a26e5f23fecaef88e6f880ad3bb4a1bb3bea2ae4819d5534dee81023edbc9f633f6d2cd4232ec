import { LoginConfig, ObjectMultiplex, PostMessageStream, setupMultiplex, Substream, WhiteLabelData } from "@toruslabs/openlogin-jrpc";

import { modalDOMElementID } from "./constants";
import log from "./loglevel";
import { documentReady, htmlToElement } from "./utils";

export const handleStream = (handle: Substream, eventName: string, handler: (chunk: unknown) => void): void => {
  const handlerWrapper = (chunk: unknown) => {
    handler(chunk);
    handle.removeListener(eventName, handlerWrapper);
  };
  handle.on(eventName, handlerWrapper);
};

export class Modal {
  modalUrl: string;

  iframeElem: HTMLIFrameElement;

  initialized = false;

  modalZIndex = 99999;

  mux: ObjectMultiplex;

  verifierStream: Substream;

  constructor(modalUrl: string) {
    this.modalUrl = modalUrl;
  }

  async init(): Promise<void> {
    await this.initIFrame(this.modalUrl);
    this.setupStream();
  }

  setupStream(): void {
    if (this.iframeElem === null) throw new Error("iframe is null");
    this.mux = setupMultiplex(
      new PostMessageStream({
        name: "modal_iframe_rpc",
        target: "modal_rpc",
        targetWindow: this.iframeElem.contentWindow,
        targetOrigin: new URL(this.modalUrl).origin,
      })
    );
    this.verifierStream = this.mux.createStream("verifier");
  }

  async initIFrame(src: string): Promise<void> {
    await documentReady();
    const documentIFrameElem = document.getElementById(modalDOMElementID) as HTMLIFrameElement;
    if (documentIFrameElem) {
      documentIFrameElem.remove();
      log.info("already initialized, removing previous modal iframe");
    }
    this.iframeElem = htmlToElement<HTMLIFrameElement>(
      `<iframe
        id=${modalDOMElementID}
        class="torusIframe"
        src="${src}"
        style="display: none; position: fixed; top: 0; right: 0; width: 100%;
        height: 100%; border: none; border-radius: 0; z-index: ${this.modalZIndex.toString()}"
      ></iframe>`
    );
    this._hideModal();
    document.body.appendChild(this.iframeElem);
    return new Promise<void>((resolve) => {
      this.iframeElem.onload = () => {
        this.initialized = true;
        resolve();
      };
    });
  }

  _showModal(): void {
    const style: Record<string, unknown> = {};
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
    this.iframeElem.setAttribute(
      "style",
      Object.entries(style)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")
    );
  }

  _hideModal(): void {
    const style: Record<string, unknown> = {};
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
    this.iframeElem.setAttribute(
      "style",
      Object.entries(style)
        .map(([k, v]) => `${k}:${v}`)
        .join(";")
    );
  }

  async _prompt(clientId: string, whiteLabel: WhiteLabelData, loginConfig: LoginConfig, cb: (chunk: unknown) => Promise<void>): Promise<void> {
    this._showModal();
    const modalHandler = (chunk) => {
      this._hideModal();
      cb(chunk);
    };
    handleStream(this.verifierStream, "data", modalHandler);
    this.verifierStream.write({
      name: "prompt",
      clientId,
      whiteLabel,
      loginConfig,
    });
  }

  async cleanup(): Promise<void> {
    await documentReady();
    const documentIFrameElem = document.getElementById(modalDOMElementID) as HTMLIFrameElement;
    if (documentIFrameElem) {
      documentIFrameElem.remove();
      this.iframeElem = null;
    }
    this.initialized = false;
  }
}

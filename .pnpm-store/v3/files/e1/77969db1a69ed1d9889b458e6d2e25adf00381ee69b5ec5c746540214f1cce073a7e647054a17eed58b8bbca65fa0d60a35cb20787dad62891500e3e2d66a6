import { Duplex } from "readable-stream";

function noop(): void {
  return undefined;
}

const SYN = "SYN";
const ACK = "ACK";
const BRK = "BRK";

export default class BasePostMessageStream extends Duplex {
  _init: boolean;

  _haveSyn: boolean;

  _name: string;

  _target: string;

  _targetWindow: Window;

  _targetOrigin: string;

  _onMessage: any;

  _synIntervalId: number;

  constructor({
    name,
    target,
    targetWindow = window,
    targetOrigin = "*",
  }: {
    name: string;
    target: string;
    targetWindow?: Window;
    targetOrigin?: string;
  }) {
    super({
      objectMode: true,
    });
    if (!name || !target) {
      throw new Error("Invalid input.");
    }
    this._init = false;
    this._haveSyn = false;
    this._name = name;
    this._target = target; // target origin
    this._targetWindow = targetWindow;
    this._targetOrigin = targetOrigin;
    this._onMessage = this.onMessage.bind(this);
    this._synIntervalId = null;

    window.addEventListener("message", this._onMessage, false);
    this._handShake();
  }

  _break(): void {
    this.cork();
    this._write(BRK, null, noop);
    this._haveSyn = false;
    this._init = false;
  }

  _handShake(): void {
    this._write(SYN, null, noop);
    this.cork();
  }

  _onData(data: unknown): void {
    if (!this._init) {
      // listen for handshake
      if (data === SYN) {
        this._haveSyn = true;
        this._write(ACK, null, noop);
      } else if (data === ACK) {
        this._init = true;
        if (!this._haveSyn) {
          this._write(ACK, null, noop);
        }
        this.uncork();
      }
    } else if (data === BRK) {
      this._break();
    } else {
      // forward message
      try {
        this.push(data);
      } catch (err) {
        this.emit("error", err);
      }
    }
  }

  _postMessage(data: unknown): void {
    const originConstraint = this._targetOrigin;
    this._targetWindow.postMessage(
      {
        target: this._target,
        data,
      },
      originConstraint
    );
  }

  onMessage(event: MessageEvent): void {
    const message = event.data;

    // validate message
    if (
      (this._targetOrigin !== "*" && event.origin !== this._targetOrigin) ||
      event.source !== this._targetWindow ||
      typeof message !== "object" ||
      message.target !== this._name ||
      !message.data
    ) {
      return;
    }

    this._onData(message.data);
  }

  _read(): void {
    return undefined;
  }

  _write(data: unknown, _, cb: () => void): void {
    this._postMessage(data);
    cb();
  }

  _destroy(): void {
    window.removeEventListener("message", this._onMessage, false);
  }
}

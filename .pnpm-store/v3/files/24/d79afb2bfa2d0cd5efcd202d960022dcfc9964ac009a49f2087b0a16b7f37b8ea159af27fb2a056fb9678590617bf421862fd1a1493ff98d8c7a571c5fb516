import { BroadcastChannel } from "@toruslabs/broadcast-channel";

import { POPUP_LOADED } from "../enums";
import { broadcastChannelOptions } from "../utils";
import { PopupData } from "./interfaces";

export default class BroadcastChannelHandler {
  public bc: BroadcastChannel<PopupData<unknown>>;

  private channel: string;

  constructor(channelPrefix: string) {
    const queryParameters = new URLSearchParams(window.location.search);
    const instanceId = queryParameters.get("instanceId");
    this.channel = `${channelPrefix}_${instanceId}`;
    this.bc = new BroadcastChannel(this.channel, broadcastChannelOptions);
  }

  public getMessageFromChannel<T>(): Promise<T> {
    return new Promise((resolve, reject) => {
      this.bc.addEventListener("message", async (ev) => {
        this.bc.close();
        if (ev.error) {
          reject(ev.error);
        } else {
          resolve(ev.data as T);
        }
      });
      this.bc.postMessage({ data: { type: POPUP_LOADED } });
    });
  }
}

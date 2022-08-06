import { BroadcastChannel } from "@toruslabs/broadcast-channel";
import log from "loglevel";

import { BROADCAST_CHANNELS, POPUP_LOADED, SETUP_COMPLETE } from "../enums";
import { PopupData } from "../Popup";
import { broadcastChannelOptions, handleRedirectParameters } from "../utils/utils";

export default class RedirectHandler {
  private error: string;

  private finalQueryParams: Record<string, string> = {};

  private instanceParameters: Record<string, string>;

  private hashParameters: Record<string, string>;

  constructor() {
    const { hash } = window.location;
    const queryParameters = new URLSearchParams(window.location.search);
    queryParameters.forEach((value, key) => {
      this.finalQueryParams[key] = value;
    });
    const { error, instanceParameters, hashParameters } = handleRedirectParameters(hash, this.finalQueryParams);
    this.error = error;
    this.instanceParameters = instanceParameters;
    this.hashParameters = hashParameters;
  }

  public async handle(): Promise<void> {
    return new Promise((resolve, reject) => {
      const { finalQueryParams, instanceParameters, hashParameters, error } = this;
      let bc: BroadcastChannel<PopupData<unknown>>;
      try {
        if (!finalQueryParams.windowId) {
          bc = new BroadcastChannel(`${BROADCAST_CHANNELS.REDIRECT_CHANNEL}_${instanceParameters.instanceId}`, broadcastChannelOptions);
          bc.addEventListener("message", async (ev) => {
            if (ev.error) {
              reject(ev.error);
              window.close();
            } else {
              resolve();
              bc.close();
              log.info("posted", { finalQueryParams, hashParameters, instanceParameters });
            }
          });
          bc.postMessage({
            data: {
              instanceParams: instanceParameters,
              hashParams: hashParameters,
              queryParams: finalQueryParams,
            },
            error,
          });

          setTimeout(() => {
            resolve();
            window.location.href = window.location.origin + window.location.search + window.location.hash;
          }, 5000);
        } else {
          bc = new BroadcastChannel(`${finalQueryParams.windowId}`, broadcastChannelOptions);
          bc.addEventListener("message", async (ev) => {
            const { url, message } = ev.data as { url: string; message: string };
            if (url) {
              resolve();
              window.location.href = url;
            } else if (message === SETUP_COMPLETE) {
              await bc.postMessage({
                data: {
                  windowId: finalQueryParams.windowId,
                  message: POPUP_LOADED,
                },
              });
            }
            if (ev.error && ev.error !== "") {
              log.error(ev.error);
              resolve();
              bc.close();
            }
          });
        }
      } catch (err: unknown) {
        log.info(err as Error, "something went wrong");
        reject(err);
        if (bc) bc.close();
        window.close();
      }
    });
  }
}

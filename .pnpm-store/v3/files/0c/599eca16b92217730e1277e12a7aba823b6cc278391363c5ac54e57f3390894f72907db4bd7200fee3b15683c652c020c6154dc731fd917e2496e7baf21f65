import { BroadcastChannel } from "@toruslabs/broadcast-channel";
import log from "loglevel";

import BaseController from "../BaseController";
import { COMMUNICATION_NOTIFICATIONS, POPUP_LOADED, SETUP_COMPLETE } from "../enums";
import { IWindow } from "../interfaces";
import { broadcastChannelOptions, randomId, sleep } from "../utils";
import { PopupData, StreamWindowConfig, StreamWindowState } from "./interfaces";

class StreamWindow extends BaseController<StreamWindowConfig, StreamWindowState> implements IWindow {
  // if window has been closed by users
  closed = false;

  constructor({
    config,
    state = {},
  }: {
    config: Partial<StreamWindowConfig> & Pick<StreamWindowConfig, "communicationEngine" | "communicationWindowManager">;
    state?: Partial<StreamWindowState>;
  }) {
    super({ config, state });
    this.initialize();
  }

  async open(): Promise<this> {
    return new Promise((resolve, reject) => {
      const { communicationEngine, communicationWindowManager } = this.config;
      let popupSuccess = false;

      communicationWindowManager.once(`${this.state.windowId}:closed`, () => {
        this.closed = true;
      });

      // Window is not open yet
      if (!this.state.windowId) {
        this.update({ windowId: randomId() });

        communicationWindowManager.once(`${this.state.windowId}:opened`, () => {
          resolve(this);
        });

        // Tell the other party to create a window by prompting the user to click on something
        communicationEngine.emit("notification", {
          method: COMMUNICATION_NOTIFICATIONS.CREATE_WINDOW,
          params: {
            windowId: this.state.windowId,
            url: this.state.url.href,
          },
        });
      } else {
        // Send this window with `windowId` the url to open via bc
        const bc = new BroadcastChannel<PopupData<{ message: string }>>(this.state.windowId, broadcastChannelOptions);

        bc.addEventListener("message", async (ev) => {
          try {
            log.info(ev, `receiving data on channel: ${bc.name}`);
            const { error } = ev;
            if (error) {
              // Popup says some error. so, we say it's not really opened
              reject(new Error(error));
              return;
            }
            const { message } = ev.data;
            if (message === POPUP_LOADED) {
              popupSuccess = true;
              await bc.postMessage({
                data: {
                  url: this.state.url.href,
                  message: "", // No need of a msg
                },
              } as PopupData<{ message: string }>);
              resolve(this);
              bc.close();
            }
          } catch (error) {
            reject(error);
            bc.close();
            // Something went wrong. so, we close that window
            this.close();
          }
        });

        // We don't know if the other end is ready to receive this msg. So, we keep writing until it receives and sends back something
        // we need backoff strategy
        // we need to wait for first attempt to succeed/fail until the second attempt
        // If we get 429, we need to wait for a while and then try again

        const postMsg = async () => {
          // this never throws
          const localResponse = await bc.postMessage({
            data: {
              message: SETUP_COMPLETE,
            },
          } as PopupData<{ message: string }>);
          return localResponse;
        };

        let currentDelay = bc.type === "server" ? 1000 : 200;

        const recursiveFn = async (): Promise<void> => {
          if (!popupSuccess && !this.closed) {
            const localResponse = await postMsg();
            if (bc.type === "server") {
              const serverResponse = localResponse as unknown as Response;
              if (serverResponse.status >= 400) {
                // We need to wait for a while and then try again
                currentDelay = Math.round(currentDelay * 1.5);
              }
            }
            await sleep<void>(currentDelay);
            await recursiveFn();
          }
        };
        recursiveFn();
      }
    });
  }

  close(): void {
    const { communicationEngine } = this.config;
    communicationEngine.emit("notification", {
      method: COMMUNICATION_NOTIFICATIONS.CLOSE_WINDOW,
      params: {
        windowId: this.state.windowId,
      },
    });
  }
}

export default StreamWindow;

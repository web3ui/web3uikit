import { BroadcastChannel } from "@toruslabs/broadcast-channel";
import log from "loglevel";

import { POPUP_LOADED, POPUP_RESULT } from "../enums";
import { broadcastChannelOptions, UserError } from "../utils";
import { PopupData, PopupHandlerConfig, PopupHandlerState, SuccessExtraFn } from "./interfaces";
import PopupHandler from "./PopupHandler";
/**
 * PopupWithBcHandler is a PopupHandler which uses broadcast channel to communicate with the popup window.
 */
class PopupWithBcHandler<ReceiveData, SendData = unknown> extends PopupHandler {
  bc: BroadcastChannel<PopupData<ReceiveData>>;

  constructor({
    config,
    state,
    instanceId,
  }: {
    config: Partial<PopupHandlerConfig>;
    state: Partial<PopupHandlerState> & Pick<PopupHandlerState, "url">;
    instanceId: string;
  }) {
    super({ config, state });
    this.bc = new BroadcastChannel(instanceId, broadcastChannelOptions);
  }

  /**
   * Receives the data from popup window and closes the window
   * @param successExtraFn - Extra function to be called after the data is received
   * @returns The data to be received
   */
  handle(successExtraFn?: SuccessExtraFn<ReceiveData>): Promise<ReceiveData> {
    return new Promise((resolve, reject) => {
      const closeListener = () => {
        this.bc.close();
        reject(new UserError("user closed popup"));
        this.removeListener("close", closeListener);
      };
      this.on("close", closeListener);

      this.bc.addEventListener("message", async (ev) => {
        log.info(ev, `receiving data on channel: ${this.bc.name}`);
        try {
          const { error, data } = ev;
          if (error) {
            reject(new Error(error));
            return;
          }
          if (successExtraFn) await successExtraFn.call(this, data);
          resolve(data);
        } catch (error) {
          reject(error);
        } finally {
          this.bc.close();
          this.close();
        }
      });
      this.open()
        .then(() => {
          log.info(`opened window ${this.bc.name}`);
          // Opened window. yay.  let the bc events do their job
          return undefined;
        })
        .catch((err) => {
          log.error(err, "something went wrong while opening window");
          reject(err);
        });
    });
  }

  /**
   * Use this if we have to send large payloads which don't fit in query/hash params.
   * Waits for ack that popup window is ready to receive data.
   * Receives the data from popup window and closes the window
   * @param payload - The data to be sent to the popup window once we have ack that window is ready to receive data
   * @param successExtraFn - Extra function to be called after the data is received
   * @returns The data to be received
   */
  handleWithHandshake(payload: SendData, successExtraFn?: SuccessExtraFn<ReceiveData>): Promise<ReceiveData> {
    return new Promise((resolve, reject) => {
      const closeListener = () => {
        this.bc.close();
        reject(new UserError("user closed popup"));
        this.removeListener("close", closeListener);
      };
      this.on("close", closeListener);
      this.bc.addEventListener("message", async (ev) => {
        try {
          log.info(ev, `receiving data on channel: ${this.bc.name}`);
          const { error, data } = ev;
          if (error) {
            reject(new Error(error));
            return;
          }
          // Do handshake
          const { type = "" } = data as { type?: string };
          if (type === POPUP_LOADED) {
            // Hack with generic to use the same type for both send and receive
            await this.bc.postMessage({
              data: payload,
            } as unknown as PopupData<ReceiveData>);
          } else if (type === POPUP_RESULT) {
            if (successExtraFn) await successExtraFn.call(this, data);
            resolve(data);
            // Must only close the bc after result is done
            this.bc.close();
            this.close();
          }
        } catch (error) {
          reject(error);
          this.bc.close();
          this.close();
        }
      });
      this.open()
        .then(() => {
          log.info(`opened window ${this.bc.name}`);
          // Opened window. yay.  let the bc events do their job
          return undefined;
        })
        .catch((err) => {
          log.error(err, "something went wrong while opening window");
          reject(err);
        });
    });
  }
}
export default PopupWithBcHandler;

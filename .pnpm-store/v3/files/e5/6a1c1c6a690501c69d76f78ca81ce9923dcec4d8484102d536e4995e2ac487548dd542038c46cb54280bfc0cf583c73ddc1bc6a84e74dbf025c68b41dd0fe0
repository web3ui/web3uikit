import { BroadcastChannel } from "@toruslabs/broadcast-channel";
import { PopupData, PopupHandlerConfig, PopupHandlerState, SuccessExtraFn } from "./interfaces";
import PopupHandler from "./PopupHandler";
/**
 * PopupWithBcHandler is a PopupHandler which uses broadcast channel to communicate with the popup window.
 */
declare class PopupWithBcHandler<ReceiveData, SendData = unknown> extends PopupHandler {
    bc: BroadcastChannel<PopupData<ReceiveData>>;
    constructor({ config, state, instanceId, }: {
        config: Partial<PopupHandlerConfig>;
        state: Partial<PopupHandlerState> & Pick<PopupHandlerState, "url">;
        instanceId: string;
    });
    /**
     * Receives the data from popup window and closes the window
     * @param successExtraFn - Extra function to be called after the data is received
     * @returns The data to be received
     */
    handle(successExtraFn?: SuccessExtraFn<ReceiveData>): Promise<ReceiveData>;
    /**
     * Use this if we have to send large payloads which don't fit in query/hash params.
     * Waits for ack that popup window is ready to receive data.
     * Receives the data from popup window and closes the window
     * @param payload - The data to be sent to the popup window once we have ack that window is ready to receive data
     * @param successExtraFn - Extra function to be called after the data is received
     * @returns The data to be received
     */
    handleWithHandshake(payload: SendData, successExtraFn?: SuccessExtraFn<ReceiveData>): Promise<ReceiveData>;
}
export default PopupWithBcHandler;

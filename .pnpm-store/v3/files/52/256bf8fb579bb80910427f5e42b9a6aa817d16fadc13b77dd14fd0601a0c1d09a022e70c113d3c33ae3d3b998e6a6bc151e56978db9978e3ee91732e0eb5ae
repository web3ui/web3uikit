import { BroadcastChannel } from "@toruslabs/broadcast-channel";
import { PopupData } from "./interfaces";
export default class BroadcastChannelHandler {
    bc: BroadcastChannel<PopupData<unknown>>;
    private channel;
    constructor(channelPrefix: string);
    getMessageFromChannel<T>(): Promise<T>;
}

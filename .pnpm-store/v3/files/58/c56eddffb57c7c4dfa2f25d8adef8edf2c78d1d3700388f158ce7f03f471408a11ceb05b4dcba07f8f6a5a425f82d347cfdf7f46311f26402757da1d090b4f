import { JRPCEngine, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { BROADCAST_CHANNELS_MSGS_TYPE } from "../enums";
import { BaseConfig, BaseState, IWindow } from "../interfaces";
import { ProviderConfig } from "../Network/INetworkController";
export interface StreamWindowConfig extends BaseConfig {
    /**
     * The communication engine to communicate on for the popup window
     * Can send notifications to the other end to create a window (create_window)
     * Can receive rpc calls from other end that a window has been opened (opened_window)
     */
    communicationEngine: JRPCEngine;
    /**
     * A window manager which uses rpc calls inform about open and close status of windows
     */
    communicationWindowManager: SafeEventEmitter;
}
export interface StreamWindowState extends BaseState {
    /**
     * The url which will be redirected to in the popup window.
     */
    url: URL;
    /**
     * If window has already been opened, then it will be reused.
     * This parameter represents a query parameter in the opened window.
     * We communicate with the popup window using this query parameter in broadcastchannel or via post message.
     * This channel will be strictly used for communication about the window state.
     * For data exchange, another channel must be used `instanceId` - (set before calling PopupHandler)
     */
    windowId: string;
}
export interface PopupHandlerState extends StreamWindowState {
    windowTimer: number | null;
    window: IWindow | null;
    iClosedWindow: boolean;
}
export interface PopupHandlerConfig extends StreamWindowConfig {
    /**
     * The target window name
     */
    target: string;
    /**
     * Features of the popup window
     * Use `getPopupFeatures(w,h)` to get the correct features
     */
    features: string;
    /**
     * Storage key for the opened window (key for localStorage)
     * Must be stored in hash parameters
     */
    dappStorageKey: string;
}
export interface PopupData<T> {
    data?: T;
    error?: string;
}
export declare type SuccessExtraFn<T> = (data: T) => Promise<void>;
export interface BasePopupChannelData {
    type: BROADCAST_CHANNELS_MSGS_TYPE;
}
export interface AccountImportedChannelData extends BasePopupChannelData {
    privKey: string;
}
export interface NetworkChangeChannelData extends BasePopupChannelData {
    network: ProviderConfig;
}
export interface SelectedAddresssChangeChannelData extends BasePopupChannelData {
    selectedAddress: string;
}
export interface PopupStoreChannelHandlers {
    handleLogout(): void;
    handleAccountImport(privKey: string): void;
    handleNetworkChange(network: ProviderConfig): void;
    handleSelectedAddressChange(address: string): void;
}

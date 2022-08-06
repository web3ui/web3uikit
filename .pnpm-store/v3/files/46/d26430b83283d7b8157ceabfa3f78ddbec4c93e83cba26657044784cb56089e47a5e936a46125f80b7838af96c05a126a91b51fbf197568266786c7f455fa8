import type { Duplex } from "readable-stream";
import BaseProvider from "./baseProvider";
import { CommunicationProviderState, EMBED_TRANSLATION_ITEM, ProviderOptions, UnValidatedJsonRpcRequest } from "./interfaces";
import PopupHandler from "./PopupHandler";
declare class TorusCommunicationProvider extends BaseProvider<CommunicationProviderState> {
    protected static _defaultState: CommunicationProviderState;
    embedTranslations: EMBED_TRANSLATION_ITEM;
    torusUrl: string;
    dappStorageKey: string;
    windowRefs: Record<string, PopupHandler>;
    tryWindowHandle: (payload: UnValidatedJsonRpcRequest | UnValidatedJsonRpcRequest[], cb: (...args: unknown[]) => void) => void;
    private torusAlertContainer;
    private torusIframe;
    constructor(connectionStream: Duplex, { maxEventListeners, jsonRpcStreamName }: ProviderOptions);
    get isLoggedIn(): boolean;
    get isIFrameFullScreen(): boolean;
    /**
     * Returns whether the inPage provider is connected to Torus.
     */
    isConnected(): boolean;
    _initializeState(params: Record<string, unknown>): Promise<void>;
    _handleWindow(windowId: string, { url, target, features }?: {
        url?: string;
        target?: string;
        features?: string;
    }): void;
    _displayIframe({ isFull, rid }?: {
        isFull?: boolean;
        rid?: string;
    }): void;
    hideTorusButton(): void;
    showTorusButton(): void;
    /**
     * Internal RPC method. Forwards requests to background via the RPC engine.
     * Also remap ids inbound and outbound
     */
    protected _rpcRequest(payload: UnValidatedJsonRpcRequest | UnValidatedJsonRpcRequest[], callback: (...args: unknown[]) => void): void;
    /**
     * When the provider becomes connected, updates internal state and emits
     * required events. Idempotent.
     *
     * @param currentLoginProvider - The login Provider
     * emits TorusInpageProvider#connect
     */
    protected _handleConnect(currentLoginProvider: string, isLoggedIn: boolean): void;
    /**
     * When the provider becomes disconnected, updates internal state and emits
     * required events. Idempotent with respect to the isRecoverable parameter.
     *
     * Error codes per the CloseEvent status codes as required by EIP-1193:
     * https://developer.mozilla.org/en-US/docs/Web/API/CloseEvent#Status_codes
     *
     * @param isRecoverable - Whether the disconnection is recoverable.
     * @param errorMessage - A custom error message.
     * emits TorusInpageProvider#disconnect
     */
    protected _handleDisconnect(isRecoverable: boolean, errorMessage?: string): void;
    private _handleCloseWindow;
    private _createPopupBlockAlert;
    private getLogoUrl;
}
export default TorusCommunicationProvider;

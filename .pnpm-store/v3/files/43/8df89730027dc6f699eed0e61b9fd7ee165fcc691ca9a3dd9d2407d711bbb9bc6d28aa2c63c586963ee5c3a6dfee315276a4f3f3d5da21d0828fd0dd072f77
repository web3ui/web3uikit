import type { Duplex } from "readable-stream";
import BaseProvider from "./baseProvider";
import { InPageProviderState, ProviderOptions, UnValidatedJsonRpcRequest } from "./interfaces";
declare class TorusInPageProvider extends BaseProvider<InPageProviderState> {
    protected static _defaultState: InPageProviderState;
    /**
     * The chain ID of the currently connected Solana chain.
     * See [chainId.network]{@link https://chainid.network} for more information.
     */
    chainId: string | null;
    /**
     * The user's currently selected Solana address.
     * If null, Torus is either locked or the user has not permitted any
     * addresses to be viewed.
     */
    selectedAddress: string | null;
    tryWindowHandle: (payload: UnValidatedJsonRpcRequest | UnValidatedJsonRpcRequest[], cb: (...args: unknown[]) => void) => void;
    constructor(connectionStream: Duplex, { maxEventListeners, jsonRpcStreamName }: ProviderOptions);
    /**
     * Returns whether the inpage provider is connected to Torus.
     */
    isConnected(): boolean;
    /**
     * Constructor helper.
     * Populates initial state by calling 'wallet_getProviderState' and emits
     * necessary events.
     */
    _initializeState(): Promise<void>;
    /**
     * Internal RPC method. Forwards requests to background via the RPC engine.
     * Also remap ids inbound and outbound
     */
    _rpcRequest(payload: UnValidatedJsonRpcRequest | UnValidatedJsonRpcRequest[], callback: (...args: unknown[]) => void, isInternal?: boolean): void;
    /**
     * When the provider becomes connected, updates internal state and emits
     * required events. Idempotent.
     *
     * @param chainId - The ID of the newly connected chain.
     * emits TorusInpageProvider#connect
     */
    protected _handleConnect(chainId: string): void;
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
    /**
     * Called when accounts may have changed.
     */
    protected _handleAccountsChanged(accounts: unknown[], isEthAccounts?: boolean, isInternal?: boolean): void;
    /**
     * Upon receipt of a new chainId and networkVersion, emits corresponding
     * events and sets relevant public state.
     * Does nothing if neither the chainId nor the networkVersion are different
     * from existing values.
     *
     * emits TorusInpageProvider#chainChanged
     * @param networkInfo - An object with network info.
     */
    protected _handleChainChanged({ chainId }?: {
        chainId?: string;
    }): void;
    /**
     * Upon receipt of a new isUnlocked state, sets relevant public state.
     * Calls the accounts changed handler with the received accounts, or an empty
     * array.
     *
     * Does nothing if the received value is equal to the existing value.
     * There are no lock/unlock events.
     *
     * @param opts - Options bag.
     */
    protected _handleUnlockStateChanged({ accounts, isUnlocked }?: {
        accounts?: string[];
        isUnlocked?: boolean;
    }): void;
}
export default TorusInPageProvider;

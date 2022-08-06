import { ObservableStore } from "@metamask/obs-store";
import { JRPCEngine, JRPCRequest, JRPCResponse, JRPCSuccess, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import type { Duplex } from "readable-stream";
import { BaseProviderState, JsonRpcConnection, Maybe, ProviderOptions, PublicConfigState, RequestArguments, SendSyncJsonRpcRequest, SentWarningsState, UnvalidatedJsonRpcRequest } from "./interfaces";
declare class TorusInpageProvider extends SafeEventEmitter {
    protected static _defaultState: BaseProviderState;
    /**
     * The chain ID of the currently connected Ethereum chain.
     * See [chainId.network]{@link https://chainid.network} for more information.
     */
    chainId: string | null;
    /**
     * The user's currently selected Ethereum address.
     * If null, MetaMask is either locked or the user has not permitted any
     * addresses to be viewed.
     */
    selectedAddress: string | null;
    _rpcEngine: JRPCEngine;
    networkVersion: string | null;
    shouldSendMetadata: boolean;
    /**
     * Indicating that this provider is a MetaMask provider.
     */
    readonly isTorus: true;
    _publicConfigStore: ObservableStore<PublicConfigState>;
    tryPreopenHandle: (payload: UnvalidatedJsonRpcRequest | UnvalidatedJsonRpcRequest[], cb: (...args: unknown[]) => void) => void;
    enable: () => Promise<string[]>;
    protected _state: BaseProviderState;
    protected _jsonRpcConnection: JsonRpcConnection;
    protected _sentWarnings: SentWarningsState;
    constructor(connectionStream: Duplex, { maxEventListeners, shouldSendMetadata, jsonRpcStreamName }?: ProviderOptions);
    get publicConfigStore(): ObservableStore<PublicConfigState>;
    /**
     * Returns whether the inpage provider is connected to Torus.
     */
    isConnected(): boolean;
    /**
     * Submits an RPC request for the given method, with the given params.
     * Resolves with the result of the method call, or rejects on error.
     *
     * @param args - The RPC request arguments.
     * @returns A Promise that resolves with the result of the RPC method,
     * or rejects if an error is encountered.
     */
    request<T>(args: RequestArguments): Promise<Maybe<T>>;
    /**
     * Submits an RPC request per the given JSON-RPC request object.
     *
     * @param payload - The RPC request object.
     * @param cb - The callback function.
     */
    sendAsync(payload: JRPCRequest<unknown>, callback: (error: Error | null, result?: JRPCResponse<unknown>) => void): void;
    /**
     * We override the following event methods so that we can warn consumers
     * about deprecated events:
     *   addListener, on, once, prependListener, prependOnceListener
     */
    addListener(eventName: string, listener: (...args: unknown[]) => void): this;
    on(eventName: string, listener: (...args: unknown[]) => void): this;
    once(eventName: string, listener: (...args: unknown[]) => void): this;
    prependListener(eventName: string, listener: (...args: unknown[]) => void): this;
    prependOnceListener(eventName: string, listener: (...args: unknown[]) => void): this;
    /**
     * Constructor helper.
     * Populates initial state by calling 'wallet_getProviderState' and emits
     * necessary events.
     */
    _initializeState(): Promise<void>;
    /**
     * Internal RPC method. Forwards requests to background via the RPC engine.
     * Also remap ids inbound and outbound.
     *
     * @param payload - The RPC request object.
     * @param callback - The consumer's callback.
     * @param isInternal - false - Whether the request is internal.
     */
    _rpcRequest(payload: UnvalidatedJsonRpcRequest | UnvalidatedJsonRpcRequest[], callback: (...args: any[]) => void, isInternal?: boolean): void;
    /**
     * Submits an RPC request for the given method, with the given params.
     *
     * @deprecated Use "request" instead.
     * @param method - The method to request.
     * @param params - Any params for the method.
     * @returns A Promise that resolves with the JSON-RPC response object for the
     * request.
     */
    send<T>(method: string, params?: T[]): Promise<JRPCResponse<T>>;
    /**
     * Submits an RPC request per the given JSON-RPC request object.
     *
     * @deprecated Use "request" instead.
     * @param payload - A JSON-RPC request object.
     * @param callback - An error-first callback that will receive the JSON-RPC
     * response object.
     */
    send<T>(payload: JRPCRequest<unknown>, callback: (error: Error | null, result?: JRPCResponse<T>) => void): void;
    /**
     * Accepts a JSON-RPC request object, and synchronously returns the cached result
     * for the given method. Only supports 4 specific RPC methods.
     *
     * @deprecated Use "request" instead.
     * @param payload - A JSON-RPC request object.
     * @returns A JSON-RPC response object.
     */
    send<T>(payload: SendSyncJsonRpcRequest): JRPCResponse<T>;
    /**
     * DEPRECATED.
     * Internal backwards compatibility method, used in send.
     */
    _sendSync(payload: SendSyncJsonRpcRequest): JRPCSuccess<unknown>;
    /**
     * When the provider becomes connected, updates internal state and emits
     * required events. Idempotent.
     *
     * @param chainId - The ID of the newly connected chain.
     * emits MetaMaskInpageProvider#connect
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
     * emits MetaMaskInpageProvider#disconnect
     */
    protected _handleDisconnect(isRecoverable: boolean, errorMessage?: string): void;
    /**
     * Called when connection is lost to critical streams.
     *
     * emits MetamaskInpageProvider#disconnect
     */
    protected _handleStreamDisconnect(streamName: string, error: Error): void;
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
     * emits MetamaskInpageProvider#chainChanged
     * @param networkInfo - An object with network info.
     */
    protected _handleChainChanged({ chainId, networkVersion }?: {
        chainId?: string;
        networkVersion?: string;
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
    /**
     * Warns of deprecation for the given event, if applicable.
     */
    protected _warnOfDeprecation(eventName: string): void;
}
export default TorusInpageProvider;

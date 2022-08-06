import { JRPCEngine, JRPCMiddleware, JRPCRequest, JRPCResponse, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { BaseConfig, BaseState, IController } from "../interfaces";
export declare const createRandomId: () => number;
export interface ProviderConfig {
    /**
     * Block explorer url for the chain
     * @example https://ropsten.etherscan.io
     */
    blockExplorerUrl: string;
    /**
     * Logo url for the base token
     */
    logo: string;
    /**
     * Name for ticker
     * @example 'Binance Token', 'Ethereum', 'Matic Network Token'
     */
    tickerName: string;
    /**
     * Symbol for ticker
     * @example BNB, ETH
     */
    ticker: string;
    /**
     * RPC target Url for the chain
     * @example https://ropsten.infura.io/v3/YOUR_API_KEY
     */
    rpcTarget: string;
    /**
     * Chain Id parameter(hex with 0x prefix) for the network. Mandatory for all networks. (assign one with a map to network identifier for platforms)
     * @example 0x1 for mainnet, 'loading' if not connected to anything yet or connection fails
     * @defaultValue 'loading'
     */
    chainId: string;
    /**
     * Display name for the network
     */
    displayName: string;
}
/**
 * Custom network properties
 * @example isEIP1559Compatible: true etc.
 */
export interface NetworkProperties {
    [key: string]: number | string | boolean;
}
/**
 *
 */
export interface NetworkState extends BaseState {
    /**
     * Chain Id for the current network
     */
    chainId: string;
    providerConfig: ProviderConfig;
    properties: NetworkProperties;
}
export interface NetworkConfig extends BaseConfig {
    providerConfig: ProviderConfig;
}
export interface INetworkController<C, S> extends IController<C, S> {
    /**
     * Gets the chainId of the network
     */
    getNetworkIdentifier(): string;
    /**
     * Sets provider for the current network controller
     * @param providerConfig - Provider config object
     */
    setProviderConfig(providerConfig: ProviderConfig): void;
    /**
     * Connects to the rpcUrl for the current selected provider
     */
    lookupNetwork(): Promise<void>;
}
export declare type BlockData = string | string[];
export declare type Block = Record<string, BlockData>;
export declare type SendAsyncCallBack = (err: Error, providerRes: JRPCResponse<Block>) => void;
export declare type SendCallBack<U> = (err: any, providerRes: U) => void;
export declare type Payload = Partial<JRPCRequest<string[]>>;
export interface RequestArguments<T> {
    method: string;
    params?: T;
}
export declare type Maybe<T> = T | Partial<T> | null | undefined;
export interface SafeEventEmitterProvider extends SafeEventEmitter {
    sendAsync: <T, U>(req: JRPCRequest<T>) => Promise<U>;
    send: <T, U>(req: JRPCRequest<T>, callback: SendCallBack<U>) => void;
    request: <T, U>(args: RequestArguments<T>) => Promise<Maybe<U>>;
}
export interface ExtendedJsonRpcRequest<T> extends JRPCRequest<T> {
    skipCache?: boolean;
}
export declare function providerFromEngine(engine: JRPCEngine): SafeEventEmitterProvider;
export declare function providerFromMiddleware(middleware: JRPCMiddleware<string[], unknown>): SafeEventEmitterProvider;
export declare function providerAsMiddleware(provider: SafeEventEmitterProvider): JRPCMiddleware<unknown, unknown>;

import { JRPCEngine, JRPCMiddleware, JRPCRequest, JRPCResponse, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { ethErrors, serializeError } from "eth-rpc-errors";
import getCreateRandomId from "json-rpc-random-id";

import { BaseConfig, BaseState, IController } from "../interfaces";
export const createRandomId = getCreateRandomId();

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

export type BlockData = string | string[];

export type Block = Record<string, BlockData>;

export type SendAsyncCallBack = (err: Error, providerRes: JRPCResponse<Block>) => void;

export type SendCallBack<U> = (err: any, providerRes: U) => void;

export type Payload = Partial<JRPCRequest<string[]>>;

export interface RequestArguments<T> {
  method: string;
  params?: T;
}
export type Maybe<T> = T | Partial<T> | null | undefined;

export interface SafeEventEmitterProvider extends SafeEventEmitter {
  sendAsync: <T, U>(req: JRPCRequest<T>) => Promise<U>;
  send: <T, U>(req: JRPCRequest<T>, callback: SendCallBack<U>) => void;
  request: <T, U>(args: RequestArguments<T>) => Promise<Maybe<U>>;
}

export interface ExtendedJsonRpcRequest<T> extends JRPCRequest<T> {
  skipCache?: boolean;
}

export function providerFromEngine(engine: JRPCEngine): SafeEventEmitterProvider {
  const provider: SafeEventEmitterProvider = new SafeEventEmitter() as SafeEventEmitterProvider;
  // handle both rpc send methods
  provider.sendAsync = async <T, U>(req: JRPCRequest<T>) => {
    const res = await engine.handle(req);
    if (res.error) {
      const err = serializeError(res.error, {
        fallbackError: {
          message: res.error?.message || res.error.toString(),
          code: res.error?.code || -32603,
        },
      });

      throw ethErrors.rpc.internal(err);
    }
    return res.result as U;
  };
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  provider.send = <T, U>(req: JRPCRequest<T>, callback: (error: any, providerRes: U) => void) => {
    if (typeof callback !== "function") {
      throw new Error('Must provide callback to "send" method.');
    }
    engine.handle(req, callback);
  };
  // forward notifications
  if (engine.on) {
    engine.on("notification", (message: string) => {
      provider.emit("data", null, message);
    });
  }

  provider.request = async <T, U>(args: RequestArguments<T>) => {
    const req: JRPCRequest<T> = {
      ...args,
      id: createRandomId(),
      jsonrpc: "2.0",
    };
    const res = await provider.sendAsync(req);
    return res as U;
  };
  return provider;
}

export function providerFromMiddleware(middleware: JRPCMiddleware<string[], unknown>): SafeEventEmitterProvider {
  const engine = new JRPCEngine();
  engine.push(middleware);
  const provider: SafeEventEmitterProvider = providerFromEngine(engine);
  return provider;
}

export function providerAsMiddleware(provider: SafeEventEmitterProvider): JRPCMiddleware<unknown, unknown> {
  return async (req, res, _next, end) => {
    // send request to provider
    try {
      const providerRes: unknown = await provider.sendAsync<unknown, unknown>(req);
      res.result = providerRes;
      return end();
    } catch (error) {
      return end(error.message);
    }
  };
}

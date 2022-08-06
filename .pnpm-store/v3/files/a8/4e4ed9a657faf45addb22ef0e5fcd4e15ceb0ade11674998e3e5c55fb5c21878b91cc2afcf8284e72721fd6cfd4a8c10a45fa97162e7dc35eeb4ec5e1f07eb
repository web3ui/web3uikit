import { BaseConfig, BaseController, BaseState, createEventEmitterProxy, SafeEventEmitterProvider } from "@toruslabs/base-controllers";
import { CustomChainConfig, WalletInitializationError } from "@web3auth/base";
import { ethErrors } from "eth-rpc-errors";

import { IBaseProvider } from "./IBaseProvider";

export interface BaseProviderState extends BaseState {
  chainId: string;
}

export interface BaseProviderConfig extends BaseConfig {
  chainConfig: Partial<CustomChainConfig>;
  networks?: Record<string, CustomChainConfig>;
  skipLookupNetwork?: boolean;
}

export abstract class BaseProvider<C extends BaseProviderConfig, S extends BaseProviderState, P>
  extends BaseController<C, S>
  implements IBaseProvider<P>
{
  // should be Assigned in setupProvider
  public _providerEngineProxy: SafeEventEmitterProvider | null = null;

  constructor({ config, state }: { config: C; state?: S }) {
    super({ config, state });
    if (!config.chainConfig) throw WalletInitializationError.invalidProviderConfigError("Please provide chainConfig");
    if (!config.chainConfig.chainId) throw WalletInitializationError.invalidProviderConfigError("Please provide chainId inside chainConfig");
    if (!config.chainConfig.rpcTarget) throw WalletInitializationError.invalidProviderConfigError("Please provide rpcTarget inside chainConfig");
    this.defaultState = {
      chainId: "loading",
    } as S;
    this.defaultConfig = {
      chainConfig: config.chainConfig,
      networks: { [config.chainConfig.chainId]: config.chainConfig },
    } as C;
    super.initialize();
  }

  get provider(): SafeEventEmitterProvider | null {
    return this._providerEngineProxy;
  }

  set provider(_) {
    throw new Error("Method not implemented.");
  }

  public addChain(chainConfig: CustomChainConfig): void {
    if (!chainConfig.chainId) throw ethErrors.rpc.invalidParams("chainId is required");
    if (!chainConfig.rpcTarget) throw ethErrors.rpc.invalidParams("chainId is required");
    this.configure({
      networks: { ...this.config.networks, [chainConfig.chainId]: chainConfig },
    } as C);
  }

  public getChainConfig(chainId: string): CustomChainConfig | null {
    const chainConfig = this.config.networks?.[chainId];
    if (!chainConfig) throw ethErrors.rpc.invalidRequest(`Chain ${chainId} is not supported, please add chainConfig for it`);
    return chainConfig;
  }

  protected getProviderEngineProxy(): SafeEventEmitterProvider | null {
    return this._providerEngineProxy;
  }

  protected updateProviderEngineProxy(providerEngineProxy: SafeEventEmitterProvider) {
    if (this._providerEngineProxy) {
      (this._providerEngineProxy as any).setTarget(providerEngineProxy);
    } else {
      this._providerEngineProxy = createEventEmitterProxy<SafeEventEmitterProvider>(providerEngineProxy);
    }
  }

  abstract setupProvider(provider: P): Promise<void>;

  abstract switchChain(params: { chainId: string }): Promise<void>;

  protected abstract lookupNetwork(provider?: P): Promise<string | void>;
}

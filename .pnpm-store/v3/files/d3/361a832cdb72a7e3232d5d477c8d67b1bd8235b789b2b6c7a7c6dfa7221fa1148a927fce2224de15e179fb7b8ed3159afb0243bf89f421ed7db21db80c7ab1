import { providerFromEngine } from "@toruslabs/base-controllers";
import { JRPCEngine, JRPCMiddleware } from "@toruslabs/openlogin-jrpc";
import { CHAIN_NAMESPACES, CustomChainConfig } from "@web3auth/base";
import { BaseProvider, BaseProviderConfig, BaseProviderState } from "@web3auth/base-provider";

import { createConfigMiddleware } from "../../../rpc/JrpcClient";
import { createSolanaMiddleware, IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";

export abstract class BaseInjectedProvider<P> extends BaseProvider<BaseProviderConfig, BaseProviderState, P> {
  constructor({ config, state }: { config: BaseProviderConfig; state?: BaseProviderState }) {
    super({ config: { chainConfig: { ...config.chainConfig, chainNamespace: CHAIN_NAMESPACES.SOLANA } }, state });
  }

  public async switchChain(_: { chainId: string }): Promise<void> {
    return Promise.resolve();
  }

  public async setupProvider(injectedProvider: P): Promise<void> {
    const engine = new JRPCEngine();

    const providerHandlers = this.getProviderHandlers(injectedProvider);
    const solanaMiddleware = createSolanaMiddleware(providerHandlers);
    engine.push(solanaMiddleware);

    const configMiddleware = createConfigMiddleware(this.config.chainConfig as CustomChainConfig);
    engine.push(configMiddleware);

    const injectedProviderProxy = this.getInjectedProviderProxy(injectedProvider);
    if (injectedProviderProxy) {
      engine.push(injectedProviderProxy);
    }

    const provider = providerFromEngine(engine);
    this.updateProviderEngineProxy(provider);
    await this.lookupNetwork();
  }

  protected async lookupNetwork(): Promise<string> {
    const { chainConfig } = this.config;
    this.update({
      chainId: chainConfig.chainId,
    });
    return chainConfig.chainId || "";
  }

  protected getInjectedProviderProxy(_: P): JRPCMiddleware<unknown, unknown> {
    return undefined;
  }

  protected abstract getProviderHandlers(injectedProvider: P): IProviderHandlers;
}

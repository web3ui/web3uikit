import { providerFromEngine } from "@toruslabs/base-controllers";
import { JRPCEngine } from "@toruslabs/openlogin-jrpc";
import { CHAIN_NAMESPACES, isHexStrict, WalletInitializationError } from "@web3auth/base";
import { BaseProvider, BaseProviderConfig, BaseProviderState } from "@web3auth/base-provider";
import { ethErrors } from "eth-rpc-errors";

import { ITorusWalletProvider } from "../../../interface";
import { createSolanaMiddleware } from "../../../rpc/solanaRpcMiddlewares";
import { createInjectedProviderProxyMiddleware } from "../injectedProviderProxy";
import { getTorusHandlers } from "./providerHandlers";

export class TorusInjectedProvider extends BaseProvider<BaseProviderConfig, BaseProviderState, ITorusWalletProvider> {
  constructor({ config, state }: { config: BaseProviderConfig; state?: BaseProviderState }) {
    super({ config: { chainConfig: { ...config.chainConfig, chainNamespace: CHAIN_NAMESPACES.SOLANA } }, state });
  }

  public async switchChain(_: { chainId: string }): Promise<void> {
    return Promise.resolve();
  }

  public async setupProvider(injectedProvider: ITorusWalletProvider): Promise<void> {
    this.handleInjectedProviderUpdate(injectedProvider);
    await this.setupEngine(injectedProvider);
  }

  protected async lookupNetwork(): Promise<string> {
    if (!this.provider) throw ethErrors.provider.custom({ message: "Torus solana provider is not initialized", code: 4902 });
    const { chainId } = this.config.chainConfig;

    const connectedChainId = await this.provider.request<unknown, string>({
      method: "solana_chainId",
    });

    const connectedHexChainId = isHexStrict(connectedChainId.toString()) ? connectedChainId : `0x${parseInt(connectedChainId, 10).toString(16)}`;
    if (chainId !== connectedHexChainId)
      throw WalletInitializationError.rpcConnectionError(`Invalid network, net_version is: ${connectedHexChainId}, expected: ${chainId}`);

    this.update({ chainId: connectedHexChainId });
    this.provider.emit("connect", { chainId: this.state.chainId });
    this.provider.emit("chainChanged", this.state.chainId);
    return this.state.chainId;
  }

  private async setupEngine(injectedProvider: ITorusWalletProvider): Promise<void> {
    const providerHandlers = getTorusHandlers(injectedProvider);
    const solanaMiddleware = createSolanaMiddleware(providerHandlers);
    const injectedProviderProxy = createInjectedProviderProxyMiddleware(injectedProvider);
    const engine = new JRPCEngine();
    engine.push(solanaMiddleware);
    engine.push(injectedProviderProxy);
    const provider = providerFromEngine(engine);
    this.updateProviderEngineProxy(provider);
    await this.lookupNetwork();
  }

  private async handleInjectedProviderUpdate(injectedProvider: ITorusWalletProvider): Promise<void> {
    injectedProvider.on("accountsChanged", async (accounts: string[]) => {
      this.provider.emit("accountsChanged", accounts);
    });
    injectedProvider.on("chainChanged", async (chainId: string) => {
      const connectedHexChainId = isHexStrict(chainId) ? chainId : `0x${parseInt(chainId, 10).toString(16)}`;
      // Check if chainId changed and trigger event
      this.configure({
        chainConfig: { ...this.config.chainConfig, chainId: connectedHexChainId },
      });
      await this.setupProvider(injectedProvider);
    });
  }
}

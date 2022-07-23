import { JRPCMiddleware } from "@toruslabs/openlogin-jrpc";

import { IPhantomWalletProvider } from "../../../interface";
import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";
import { BaseInjectedProvider } from "../base/baseInjectedProvider";
import { getBaseProviderHandlers } from "../base/providerHandlers";
import { createInjectedProviderProxyMiddleware } from "../injectedProviderProxy";

export class PhantomInjectedProvider extends BaseInjectedProvider<IPhantomWalletProvider> {
  protected getProviderHandlers(injectedProvider: IPhantomWalletProvider): IProviderHandlers {
    return getBaseProviderHandlers(injectedProvider);
  }

  protected getInjectedProviderProxy(injectedProvider: IPhantomWalletProvider): JRPCMiddleware<unknown, unknown> {
    return createInjectedProviderProxyMiddleware(injectedProvider);
  }
}

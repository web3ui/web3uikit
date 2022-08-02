import type Solflare from "@solflare-wallet/sdk";

import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";
import { BaseInjectedProvider } from "../base/baseInjectedProvider";
import { getSolflareHandlers } from "./providerHandlers";

export class SolflareInjectedProvider extends BaseInjectedProvider<Solflare> {
  protected getProviderHandlers(injectedProvider: Solflare): IProviderHandlers {
    return getSolflareHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }
}

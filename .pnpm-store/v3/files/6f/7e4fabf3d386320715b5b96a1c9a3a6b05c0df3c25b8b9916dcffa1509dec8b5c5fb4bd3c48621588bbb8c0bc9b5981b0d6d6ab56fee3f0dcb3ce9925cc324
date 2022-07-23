import type SolletWallet from "@project-serum/sol-wallet-adapter";

import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";
import { BaseInjectedProvider } from "../base/baseInjectedProvider";
import { getSolletHandlers } from "./providerHandlers";

export class SolletInjectedProvider extends BaseInjectedProvider<SolletWallet> {
  protected getProviderHandlers(injectedProvider: SolletWallet): IProviderHandlers {
    return getSolletHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }
}

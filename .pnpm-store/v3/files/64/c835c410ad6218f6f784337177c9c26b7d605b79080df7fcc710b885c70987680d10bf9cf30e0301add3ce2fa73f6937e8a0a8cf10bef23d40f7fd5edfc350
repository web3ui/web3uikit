import { ISlopeProvider } from "../../../interface";
import { IProviderHandlers } from "../../../rpc/solanaRpcMiddlewares";
import { BaseInjectedProvider } from "../base/baseInjectedProvider";
import { getSlopeHandlers } from "./providerHandlers";

export class SlopeInjectedProxyProvider extends BaseInjectedProvider<ISlopeProvider> {
  protected getProviderHandlers(injectedProvider: ISlopeProvider): IProviderHandlers {
    return getSlopeHandlers(injectedProvider, this.getProviderEngineProxy.bind(this));
  }
}

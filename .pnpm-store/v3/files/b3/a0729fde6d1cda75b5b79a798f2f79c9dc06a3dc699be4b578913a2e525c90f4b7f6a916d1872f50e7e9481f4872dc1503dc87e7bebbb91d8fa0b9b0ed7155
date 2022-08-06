import { JRPCEngine } from "@toruslabs/openlogin-jrpc";

import BaseController from "../BaseController";
import createSwappableProxy from "../createSwappableProxy";
import type { BaseConfig } from "../interfaces";
import { providerFromEngine, SafeEventEmitterProvider } from "../Network/INetworkController";
import { createCommunicationMiddleware } from "./CommunicationMethodMiddleware";
import { BaseEmbedControllerState, ICommunicationProviderHandlers } from "./IEmbedController";

export class BaseEmbedController<C extends BaseConfig, S extends BaseEmbedControllerState> extends BaseController<C, S> {
  public _communicationProviderProxy: SafeEventEmitterProvider;

  constructor({ config = {}, state }: { config: Partial<C>; state?: Partial<S> }) {
    super({ config, state });
    this.defaultState = {
      buttonPosition: "bottom-right",
      isIFrameFullScreen: true,
      apiKey: "torus-default",
      oauthModalVisibility: false,
      loginInProgress: false,
      dappMetadata: {
        name: "",
        icon: "",
      },
    } as S;
    this.initialize();
  }

  /**
   * Called by orchestrator once while initializing the class
   * @param handlers - JRPC handlers for provider
   * @returns - provider - Returns the providerProxy
   */
  public initializeProvider(handlers: ICommunicationProviderHandlers): void {
    const engine = new JRPCEngine();
    const communicationMiddleware = createCommunicationMiddleware(handlers);
    engine.push(communicationMiddleware);
    const communicationProvider = providerFromEngine(engine);
    this.setCommunicationProvider(communicationProvider);
  }

  private setCommunicationProvider(communicationProvider: SafeEventEmitterProvider): void {
    if (this._communicationProviderProxy) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      this._communicationProviderProxy.setTarget(communicationProvider);
    } else {
      this._communicationProviderProxy = createSwappableProxy<SafeEventEmitterProvider>(communicationProvider);
    }
  }
}

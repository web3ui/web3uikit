import { createAsyncMiddleware, createScaffoldMiddleware, JRPCMiddleware, mergeMiddleware } from "@toruslabs/openlogin-jrpc";

import { COMMUNICATION_JRPC_METHODS } from "../enums";
import type { ProviderConfig } from "../Network/INetworkController";
import { ICommunicationProviderHandlers, Ihandler, TopupInput } from "./IEmbedController";

export function createChangeProviderMiddlewareMiddleware({
  changeProvider,
}: {
  changeProvider: ICommunicationProviderHandlers["changeProvider"];
}): JRPCMiddleware<unknown, unknown> {
  return createAsyncMiddleware<ProviderConfig & { windowId: string }, boolean>(async (request, response, next) => {
    const { method } = request;
    if (method !== COMMUNICATION_JRPC_METHODS.SET_PROVIDER) return next();

    if (!changeProvider) throw new Error("CommunicationMiddleware - opts.changeProvider not provided");
    response.result = await changeProvider(request);
  });
}

export function createTopupMiddleware({ topup }: { topup: ICommunicationProviderHandlers["topup"] }): JRPCMiddleware<unknown, unknown> {
  return createAsyncMiddleware<TopupInput, boolean>(async (request, response, next) => {
    const { method } = request;
    if (method !== COMMUNICATION_JRPC_METHODS.TOPUP) return next();

    if (!topup) throw new Error("CommunicationMiddleware - opts.topup not provided");
    response.result = await topup(request);
  });
}

export function createGenericJRPCMiddleware<T>(
  targetMethod: string,
  handler: (req: Ihandler<T>) => Promise<unknown>
): JRPCMiddleware<unknown, unknown> {
  return createAsyncMiddleware<T, unknown>(async (request, response, next) => {
    const { method } = request;
    if (method !== targetMethod) return next();

    if (!handler) throw new Error(`CommunicationMiddleware - ${targetMethod} not provided`);

    const result = await handler(request);
    if (!result) {
      return next();
    }
    response.result = result;
    return undefined;
  });
}

export function createCommunicationMiddleware(providerHandlers: ICommunicationProviderHandlers): JRPCMiddleware<unknown, unknown> {
  const { getUserInfo, getWalletInstanceId, topup, logout, changeProvider, setIFrameStatus, handleWindowRpc, getProviderState, loginWithPrivateKey } =
    providerHandlers;
  return mergeMiddleware([
    createChangeProviderMiddlewareMiddleware({ changeProvider }),
    createTopupMiddleware({ topup }),
    createScaffoldMiddleware({
      [COMMUNICATION_JRPC_METHODS.LOGOUT]: logout,
      [COMMUNICATION_JRPC_METHODS.WALLET_INSTANCE_ID]: getWalletInstanceId,
      [COMMUNICATION_JRPC_METHODS.USER_INFO]: getUserInfo,
      [COMMUNICATION_JRPC_METHODS.IFRAME_STATUS]: setIFrameStatus,
      // Do this in the orchestrator because communicationWindowManager needs to be passed into PopupHandlers
      [COMMUNICATION_JRPC_METHODS.OPENED_WINDOW]: handleWindowRpc,
      [COMMUNICATION_JRPC_METHODS.CLOSED_WINDOW]: handleWindowRpc,
      [COMMUNICATION_JRPC_METHODS.GET_PROVIDER_STATE]: getProviderState,
    }),
    createGenericJRPCMiddleware(COMMUNICATION_JRPC_METHODS.LOGIN_WITH_PRIVATE_KEY, loginWithPrivateKey),
  ]);
}

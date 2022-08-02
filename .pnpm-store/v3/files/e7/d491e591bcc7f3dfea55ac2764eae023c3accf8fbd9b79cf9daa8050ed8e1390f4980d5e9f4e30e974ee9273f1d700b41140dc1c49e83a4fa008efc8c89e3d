import type { JRPCEngineEndCallback, JRPCEngineNextCallback, JRPCRequest, JRPCResponse } from "@toruslabs/openlogin-jrpc";
import type { BaseState, CommunicationWalletProviderState, PAYMENT_PROVIDER_TYPE, PaymentParams, UserInfo } from "../interfaces";
import type { ProviderConfig } from "../Network/INetworkController";
export declare type BUTTON_POSITION = "top-left" | "top-right" | "bottom-left" | "bottom-right";
export interface BaseEmbedControllerState extends BaseState {
    buttonPosition: BUTTON_POSITION;
    isIFrameFullScreen: boolean;
    apiKey: string;
    oauthModalVisibility: boolean;
    loginInProgress: boolean;
    dappMetadata: {
        name: string;
        icon: string;
    };
}
export interface STATUS_NOTIFICATION_DATA {
    loggedIn: boolean;
    rehydrate: boolean;
    currentLoginProvider: string;
}
export interface TopupInput {
    provider: PAYMENT_PROVIDER_TYPE;
    windowId: string;
    params: PaymentParams;
}
export interface Ihandler<T> extends JRPCRequest<T> {
    origin?: string;
    windowId?: string;
}
export interface LoginWithPrivateKeyParams {
    privateKey: string;
    userInfo: UserInfo;
}
export interface ICommunicationProviderHandlers {
    changeProvider: <T extends ProviderConfig & {
        windowId: string;
    }>(req: JRPCRequest<T>) => Promise<boolean>;
    topup: (req: JRPCRequest<TopupInput>) => Promise<boolean>;
    logout: (req: JRPCRequest<[]>, res: JRPCResponse<boolean>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => void;
    getUserInfo: (req: JRPCRequest<[]>, res: JRPCResponse<UserInfo>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => void;
    setIFrameStatus: (req: JRPCRequest<{
        isIFrameFullScreen: boolean;
        rid?: string;
    }>, res: JRPCResponse<boolean>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => void;
    getWalletInstanceId: (req: JRPCRequest<[]>, res: JRPCResponse<string>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => void;
    handleWindowRpc: (req: JRPCRequest<{
        windowId: string;
    }>, res: JRPCResponse<boolean>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => void;
    getProviderState: (req: JRPCRequest<[]>, res: JRPCResponse<CommunicationWalletProviderState>, next: JRPCEngineNextCallback, end: JRPCEngineEndCallback) => void;
    loginWithPrivateKey: (req: Ihandler<LoginWithPrivateKeyParams>) => Promise<{
        success: boolean;
    }>;
}

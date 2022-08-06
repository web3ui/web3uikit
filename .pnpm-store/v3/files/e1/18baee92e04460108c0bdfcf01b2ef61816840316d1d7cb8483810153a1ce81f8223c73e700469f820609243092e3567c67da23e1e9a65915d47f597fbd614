/// <reference types="node" />
import { Ecies } from "@toruslabs/eccrypto";
import { JRPCRequest, LoginConfig, OriginData, WhiteLabelData } from "@toruslabs/openlogin-jrpc";
import { BaseLogoutParams, BaseRedirectParams, LoginParams, OPENLOGIN_NETWORK_TYPE, OpenLoginOptions, OpenloginUserInfo, RequestParams, UX_MODE_TYPE } from "./constants";
import { Modal } from "./Modal";
import OpenLoginStore from "./OpenLoginStore";
import Provider from "./Provider";
export declare type OpenLoginState = {
    network: OPENLOGIN_NETWORK_TYPE;
    privKey?: string;
    walletKey?: string;
    tKey?: string;
    oAuthPrivateKey?: string;
    support3PC?: boolean;
    clientId: string;
    iframeUrl: string;
    redirectUrl: string;
    startUrl: string;
    popupUrl: string;
    store: OpenLoginStore;
    uxMode: UX_MODE_TYPE;
    replaceUrlOnRedirect: boolean;
    originData: OriginData;
    whiteLabel: WhiteLabelData;
    loginConfig: LoginConfig;
    storageServerUrl: string;
};
declare class OpenLogin {
    provider: Provider;
    state: OpenLoginState;
    modal: Modal;
    constructor(options: OpenLoginOptions);
    get privKey(): string;
    initState(options: Required<OpenLoginOptions>): void;
    init(): Promise<void>;
    updateOriginData(): Promise<void>;
    getWhitelist(): Promise<OriginData>;
    getWhiteLabel(): Promise<WhiteLabelData>;
    login(params?: LoginParams & Partial<BaseRedirectParams>): Promise<{
        privKey: string;
    }>;
    _selectedLogin(params: LoginParams & Partial<BaseRedirectParams>): Promise<{
        privKey: string;
    }>;
    logout(logoutParams?: Partial<BaseLogoutParams> & Partial<BaseRedirectParams>): Promise<void>;
    request<T>(args: RequestParams): Promise<T>;
    _jrpcRequest<T, U>(args: JRPCRequest<T>): Promise<U>;
    _check3PCSupport(): Promise<Record<string, boolean>>;
    _setPIDData(pid: string, data: Record<string, unknown>[]): Promise<void>;
    _getData(): Promise<Record<string, unknown>>;
    _syncState(newState: Record<string, unknown>): void;
    _modal(params?: LoginParams & Partial<BaseRedirectParams>): Promise<{
        privKey: string;
    }>;
    _cleanup(): Promise<void>;
    encrypt(message: Buffer, privateKey?: string): Promise<Ecies>;
    decrypt(ciphertext: Ecies, privateKey?: string): Promise<Buffer>;
    getUserInfo(): Promise<OpenloginUserInfo>;
    getEncodedLoginUrl(loginParams: LoginParams & Partial<BaseRedirectParams>): Promise<string>;
}
export default OpenLogin;

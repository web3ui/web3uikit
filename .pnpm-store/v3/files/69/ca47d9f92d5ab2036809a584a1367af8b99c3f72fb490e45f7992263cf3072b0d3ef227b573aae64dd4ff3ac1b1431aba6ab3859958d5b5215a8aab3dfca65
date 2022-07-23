import { SafeEventEmitterProvider, WALLET_ADAPTER_TYPE } from "@web3auth/base";
import { Web3AuthCore, Web3AuthCoreOptions } from "@web3auth/core";
import LoginModal from "@web3auth/ui";
import { ModalConfig } from "./interface";
export interface UIConfig {
    /**
     * Logo for your app.
     */
    appLogo?: string;
    /**
     * theme for the modal
     *
     * @defaultValue `light`
     */
    theme?: "light" | "dark";
    /**
     * order of how login methods are shown
     *
     * @defaultValue `["google", "facebook", "twitter", "reddit", "discord", "twitch", "apple", "line", "github", "kakao", "linkedin", "weibo", "wechat", "email_passwordless"]`
     */
    loginMethodsOrder?: string[];
}
export interface Web3AuthOptions extends Web3AuthCoreOptions {
    /**
     * Client id for web3auth.
     * You can obtain your client id from the web3auth developer dashboard.
     * You can set any random string for this on localhost.
     */
    clientId: string;
    /**
     * web3auth instance provides different adapters for different type of usages. If you are dapp and want to
     * use external wallets like metamask, then you can use the `DAPP` authMode.
     * If you are a wallet and only want to use you own wallet implementations along with openlogin,
     * then you should use `WALLET` authMode.
     *
     * @defaultValue `DAPP`
     */
    authMode?: "DAPP" | "WALLET";
    /**
     * Config for configuring modal ui display properties
     */
    uiConfig?: UIConfig;
    /**
     * Whether to show errors on Web3Auth modal.
     *
     * @defaultValue `true`
     */
    displayErrorsOnModal?: boolean;
}
export declare class Web3Auth extends Web3AuthCore {
    loginModal: LoginModal;
    readonly options: Web3AuthOptions;
    private modalConfig;
    constructor(options: Web3AuthOptions);
    initModal(params?: {
        modalConfig?: Record<WALLET_ADAPTER_TYPE, ModalConfig>;
    }): Promise<void>;
    connect(): Promise<SafeEventEmitterProvider | null>;
    private initExternalWalletAdapters;
    private initializeInAppWallet;
    private subscribeToLoginModalEvents;
}

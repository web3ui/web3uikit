import "../css/web3auth.css";
import { SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import { BaseAdapterConfig, LoginMethodConfig, WALLET_ADAPTER_TYPE } from "@web3auth/base";
import { UIConfig } from "./interfaces";
export default class LoginModal extends SafeEventEmitter {
    private appLogo;
    private version;
    private isDark;
    private stateEmitter;
    private displayErrorsOnModal;
    constructor({ appLogo, version, adapterListener, theme, displayErrorsOnModal }: UIConfig);
    initModal: () => Promise<void>;
    addSocialLogins: (adapter: WALLET_ADAPTER_TYPE, loginMethods: LoginMethodConfig, loginMethodsOrder: string[]) => void;
    addWalletLogins: (externalWalletsConfig: Record<string, BaseAdapterConfig>, options: {
        showExternalWalletsOnly: boolean;
    }) => void;
    open: () => void;
    closeModal: () => void;
    initExternalWalletContainer: () => void;
    private handleShowExternalWallets;
    private handleExternalWalletClick;
    private handleSocialLoginClick;
    private setState;
    private updateWalletConnect;
    private handleAdapterData;
    private subscribeCoreEvents;
}

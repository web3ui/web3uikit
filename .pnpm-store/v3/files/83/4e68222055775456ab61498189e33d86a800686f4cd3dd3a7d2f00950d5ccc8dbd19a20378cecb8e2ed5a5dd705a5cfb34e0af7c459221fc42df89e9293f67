import { JRPCRequest } from "@toruslabs/openlogin-jrpc";
export declare const PAYMENT_PROVIDER: {
    readonly MOONPAY: "moonpay";
    readonly WYRE: "wyre";
    readonly RAMPNETWORK: "rampnetwork";
    readonly XANPOOL: "xanpool";
    readonly MERCURYO: "mercuryo";
    readonly TRANSAK: "transak";
};
export declare const TORUS_BUILD_ENV: {
    readonly PRODUCTION: "production";
    readonly DEVELOPMENT: "development";
    readonly TESTING: "testing";
};
export declare type PAYMENT_PROVIDER_TYPE = typeof PAYMENT_PROVIDER[keyof typeof PAYMENT_PROVIDER];
export declare type TORUS_BUILD_ENV_TYPE = typeof TORUS_BUILD_ENV[keyof typeof TORUS_BUILD_ENV];
export declare const BUTTON_POSITION: {
    readonly BOTTOM_LEFT: "bottom-left";
    readonly TOP_LEFT: "top-left";
    readonly BOTTOM_RIGHT: "bottom-right";
    readonly TOP_RIGHT: "top-right";
};
export declare type EMBED_TRANSLATION_ITEM = {
    continue: string;
    actionRequired: string;
    pendingAction: string;
    cookiesRequired: string;
    enableCookies: string;
    clickHere: string;
};
export declare type BUTTON_POSITION_TYPE = typeof BUTTON_POSITION[keyof typeof BUTTON_POSITION];
export declare type WALLET_PATH = "transfer" | "topup" | "home" | "settings" | "history" | "discover";
export declare const LOGIN_PROVIDER: {
    readonly GOOGLE: "google";
    readonly FACEBOOK: "facebook";
    readonly REDDIT: "reddit";
    readonly DISCORD: "discord";
    readonly TWITCH: "twitch";
    readonly APPLE: "apple";
    readonly LINE: "line";
    readonly GITHUB: "github";
    readonly KAKAO: "kakao";
    readonly LINKEDIN: "linkedin";
    readonly TWITTER: "twitter";
    readonly WEIBO: "weibo";
    readonly WECHAT: "wechat";
    readonly EMAIL_PASSWORDLESS: "email_passwordless";
};
export declare type LOGIN_PROVIDER_TYPE = typeof LOGIN_PROVIDER[keyof typeof LOGIN_PROVIDER];
export interface TorusCtorArgs {
    /**
     * Z-index of the modal and iframe
     * @defaultValue 99999
     */
    modalZIndex?: number;
}
export interface NetworkInterface {
    /**
     * Block explorer url for the chain
     * @example https://explorer.solana.com/
     */
    blockExplorerUrl: string;
    /**
     * Logo url for the base token
     */
    logo: string;
    /**
     * Name for ticker
     * @example 'Solana'
     */
    tickerName: string;
    /**
     * Symbol for ticker
     * @example SOL
     */
    ticker: string;
    /**
     * RPC target Url for the chain
     * @example https://api.devnet.solana.com/
     */
    rpcTarget: string;
    /**
     * Chain Id parameter(hex with 0x prefix) for the network. Mandatory for all networks. (assign one with a map to network identifier for platforms)
     * @example 0x1 for mainnet, 0x2 for testnet, 0x3 for devnet,  'loading' if not connected to anything yet or connection fails
     * @defaultValue 'loading'
     */
    chainId: string;
    /**
     * Display name for the network
     */
    displayName: string;
}
export interface PaymentParams {
    /**
     * Address to send the funds to
     */
    selectedAddress?: string;
    /**
     * Default fiat currency for the user to make the payment in
     */
    selectedCurrency?: string;
    /**
     * Amount to buy in the selectedCurrency
     */
    fiatValue?: number;
    /**
     * Cryptocurrency to buy
     */
    selectedCryptoCurrency?: string;
    /**
     * Amount Cryptocurrency to buy
     */
    cryptoAmount?: number;
}
export interface LoginParams {
    loginProvider?: string;
}
export interface UserInfo {
    /**
     * Email of the logged in user
     */
    email: string;
    /**
     * Full name of the logged in user
     */
    name: string;
    /**
     * Profile image of the logged in user
     */
    profileImage: string;
    /**
     * verifier of the logged in user (google, facebook etc)
     */
    verifier: string;
    /**
     * Verifier Id of the logged in user
     *
     * email for google,
     * id for facebook,
     * username for reddit,
     * id for twitch,
     * id for discord
     */
    verifierId: string;
}
export interface LocaleLinks<T> {
    /**
     * Item corresponding to english
     */
    en?: T;
    /**
     * Item corresponding to japanese
     */
    ja?: T;
    /**
     * Item corresponding to korean
     */
    ko?: T;
    /**
     * Item corresponding to german
     */
    de?: T;
    /**
     * Item corresponding to chinese (simplified)
     */
    zh?: T;
    /**
     * Item corresponding to spanish
     */
    es?: T;
}
export declare type NetworkLabel = "mainnet-beta" | "testnet" | "devnet";
export interface TorusParams {
    /**
     * Determines where the torus widget is visible on the page.
     * @defaultValue bottom-left
     */
    buttonPosition?: BUTTON_POSITION_TYPE;
    /**
     * Api key
     * Get yours today at {@link https://developer.tor.us | Dashboard}
     */
    apiKey?: string;
    /**
     * Torus Network Object
     */
    network?: NetworkInterface | NetworkLabel;
    /**
     * Build Environment of Torus.
     *
     * production uses https://solana.tor.us,
     *
     * development uses http://localhost:8080 (expects torus-website to be run locally),
     *
     * testing uses https://solana-testing.tor.us (latest internal build)
     * @defaultValue production
     */
    buildEnv?: TORUS_BUILD_ENV_TYPE;
    /**
     * Enables or disables logging.
     *
     * Defaults to false in prod and true in other environments
     */
    enableLogging?: boolean;
    /**
     * whether to show/hide torus widget.
     *
     * Defaults to true
     * @defaultValue true
     */
    showTorusButton?: boolean;
    /**
     * Prefers to use localStorage instead of sessionStorage for torus iframe. Allows longer lived sessions
     *
     * Defaults to false
     * @defaultValue false
     */
    useLocalStorage?: boolean;
    /**
     * Allows passing external data for initialize
     *
     * Defaults to empty object
     */
    extraParams?: {
        [keyof: string]: string;
    };
}
export interface TorusLoginParams {
    loginProvider?: LOGIN_PROVIDER_TYPE;
    login_hint?: string;
}
export interface ProviderOptions {
    /**
     * The name of the stream used to connect to the wallet.
     */
    jsonRpcStreamName?: string;
    /**
     * The maximum number of event listeners.
     */
    maxEventListeners?: number;
}
export interface BaseProviderState {
    isConnected: boolean;
    initialized: boolean;
    isPermanentlyDisconnected: boolean;
    hasEmittedConnection: boolean;
}
export interface InPageProviderState extends BaseProviderState {
    accounts: null | string[];
    isUnlocked: boolean;
}
export interface CommunicationProviderState extends BaseProviderState {
    buttonPosition: string;
    isLoggedIn: boolean;
    torusWidgetVisibility: boolean;
    currentLoginProvider: LOGIN_PROVIDER_TYPE;
    isIFrameFullScreen: boolean;
}
export declare type Maybe<T> = Partial<T> | T | null | undefined;
export interface UnValidatedJsonRpcRequest extends JRPCRequest<unknown> {
    windowId?: string;
}
export interface RequestArguments<T> {
    /** The RPC method to request. */
    method: string;
    /** The params of the RPC method, if any. */
    params?: T;
}

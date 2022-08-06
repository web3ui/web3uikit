import { LoginConfig, OriginData, WhiteLabelData } from "@toruslabs/openlogin-jrpc";
import { ExtraLoginOptions } from "@toruslabs/openlogin-utils";
export declare const modalDOMElementID = "openlogin-modal";
export declare const storeKey = "openlogin_store";
export declare type PopupResponse<T> = {
    pid: string;
    data: T;
};
export declare type Maybe<T> = Partial<T> | null | undefined;
export declare const UX_MODE: {
    readonly POPUP: "popup";
    readonly REDIRECT: "redirect";
};
export declare type UX_MODE_TYPE = typeof UX_MODE[keyof typeof UX_MODE];
export declare const OPENLOGIN_METHOD: {
    readonly LOGIN: "openlogin_login";
    readonly LOGOUT: "openlogin_logout";
    readonly CHECK_3PC_SUPPORT: "openlogin_check_3PC_support";
    readonly SET_PID_DATA: "openlogin_set_pid_data";
    readonly GET_DATA: "openlogin_get_data";
};
export declare type CUSTOM_OPENLOGIN_METHOD_TYPE = string & {
    toString?: (radix?: number) => string;
};
export declare type OPENLOGIN_METHOD_TYPE = typeof OPENLOGIN_METHOD[keyof typeof OPENLOGIN_METHOD];
export declare const ALLOWED_INTERACTIONS: {
    readonly POPUP: "popup";
    readonly REDIRECT: "redirect";
    readonly JRPC: "jrpc";
};
export declare type ALLOWED_INTERACTIONS_TYPE = typeof ALLOWED_INTERACTIONS[keyof typeof ALLOWED_INTERACTIONS];
export declare type RequestParams = {
    startUrl?: string;
    popupUrl?: string;
    method: OPENLOGIN_METHOD_TYPE | CUSTOM_OPENLOGIN_METHOD_TYPE;
    params: Record<string, unknown>[];
    allowedInteractions: ALLOWED_INTERACTIONS_TYPE[];
};
export declare type BaseLogoutParams = {
    /**
     * You can get your clientId/projectId by registering your
     * dapp on {@link "https://dashboard.web3auth.io"| developer dashboard}
     */
    clientId: string;
};
export declare type BaseRedirectParams = {
    /**
     * redirectUrl is the dapp's url where user will be redirected after login.
     *
     * @remarks
     * Register this url at {@link "https://dashboard.web3auth.io"| developer dashboard}
     * else initialization will give error.
     */
    redirectUrl?: string;
    /**
     * Any custom state you wish to pass along. This will be returned to you post redirect.
     * Use this to store data that you want to be available to the dapp after login.
     */
    appState?: string;
};
export declare const OPENLOGIN_NETWORK: {
    readonly MAINNET: "mainnet";
    readonly TESTNET: "testnet";
    readonly CYAN: "cyan";
    readonly DEVELOPMENT: "development";
};
export declare const SUPPORTED_KEY_CURVES: {
    readonly SECP256K1: "secp256k1";
    readonly ED25519: "ed25519";
};
export declare type SUPPORTED_KEY_CURVES_TYPE = typeof SUPPORTED_KEY_CURVES[keyof typeof SUPPORTED_KEY_CURVES];
export declare type OPENLOGIN_NETWORK_TYPE = typeof OPENLOGIN_NETWORK[keyof typeof OPENLOGIN_NETWORK];
export declare type OpenLoginOptions = {
    /**
     * You can get your clientId/projectId by registering your
     * dapp on {@link "https://dashboard.web3auth.io"| developer dashboard}
     */
    clientId: string;
    /**
     * network specifies the openlogin iframe url url to be used.
     *
     * - `'mainnet'`: https://app.openlogin.com will be used which is the production version.
     * - `'cyan'`: https://cyan.openlogin.com will be used which is the production cyan version.
     * - `'testnet'`: https://beta.openlogin.com will be used which is the beta version.
     * - `'development'`: http://localhost:3000 will be used for development purpose.
     */
    network: OPENLOGIN_NETWORK_TYPE;
    /**
     * Setting no3PC forces openlogin to assume that third party cookies are blocked
     * in the browser.
     *
     * @defaultValue false
     * @remarks
     * Only pass no3PC to `true` when you are sure that third party cookies are not
     * supported. By default openlogin will self check third party cookies and proceed
     * accordingly.
     */
    no3PC?: boolean;
    /**
     * redirectUrl is the dapp's url where user will be redirected after login.
     *
     * @remarks
     * Register this url at {@link "https://dashboard.web3auth.io"| developer dashboard}
     * else initialization will give error.
     */
    redirectUrl?: string;
    /**
     * two uxModes are supported:-
     * - `'POPUP'`: In this uxMode, a popup will be shown to user for login.
     * - `'REDIRECT'`: In this uxMode, user will be redirected to a new window tab for login.
     *
     * @defaultValue `'POPUP'`
     * @remarks
     *
     * Use of `'REDIRECT'` mode is recommended in browsers where popups might get blocked.
     */
    uxMode?: UX_MODE_TYPE;
    /**
     * replaceUrlOnRedirect removes the params from the redirected url after login
     *
     * @defaultValue true
     */
    replaceUrlOnRedirect?: boolean;
    /**
     * originData is used to verify the origin of dapp by iframe.
     *
     * @internal
     * @remarks
     * You don't have to pass originData explicitly if you have registered your dapp at
     * {@link "https://dashboard.web3auth.io"| developer dashboard}.
     *
     * originData contains a signature of dapp's origin url which is generated using
     * project's secret.
     */
    originData?: OriginData;
    /**
     * loginConfig enables you to pass your own login verifiers configuration for various
     * loginProviders.
     *
     * loginConfig is key value map where each key should be a valid loginProvider and value
     * should be custom configuration for that loginProvider
     *
     * @remarks
     * You can deploy your own verifiers from {@link "https://dashboard.web3auth.io"| developer dashboard}
     * to use here.
     *
     */
    loginConfig?: LoginConfig;
    /**
     * _iframeUrl is for internal development use only and is used to override the
     * `network` parameter.
     * @internal
     */
    _iframeUrl?: string;
    /**
     * _startUrl is for internal development use only and is used specify authentication
     * start url of iframe.
     * @internal
     */
    _startUrl?: string;
    /**
     * _popupUrl is for internal development use only and is used specify url of popup window
     * for popup uxMode.
     * @internal
     */
    _popupUrl?: string;
    /**
     * options for whitelabling default openlogin modal.
     */
    whiteLabel?: WhiteLabelData;
    /**
     * Specify a custom storage server url
     * @defaultValue https://broadcast-server.tor.us
     */
    _storageServerUrl?: string;
};
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
    readonly WEBAUTHN: "webauthn";
    readonly JWT: "jwt";
};
/**
 * {@label loginProviderType}
 */
export declare type LOGIN_PROVIDER_TYPE = typeof LOGIN_PROVIDER[keyof typeof LOGIN_PROVIDER];
export declare type CUSTOM_LOGIN_PROVIDER_TYPE = string & {
    toString?: (radix?: number) => string;
};
export declare const MFA_LEVELS: {
    readonly DEFAULT: "default";
    readonly OPTIONAL: "optional";
    readonly MANDATORY: "mandatory";
    readonly NONE: "none";
};
export declare type MfaLevelType = typeof MFA_LEVELS[keyof typeof MFA_LEVELS];
export declare type LoginParams = BaseRedirectParams & {
    /**
     * loginProvider sets the oauth login method to be used.
     * You can use any of the valid loginProvider from the supported list.
     *
     * If this param is not passed then it will show all the available
     * login methods to user in a modal.
     *
     */
    loginProvider?: LOGIN_PROVIDER_TYPE | CUSTOM_LOGIN_PROVIDER_TYPE;
    /**
     * You can set the `mfaLevel` to customize when mfa screen should be shown to user.
     * It currently accepts 4 values:-
     * - `'default'`: Setting mfa level to `default` will present mfa screen to user on every third login.
     * - `'optional'`: Setting mfa level to `default` will present mfa screen to user on every login but user can skip it.
     * - `'mandatory'`: Setting mfa level to `mandatory` will make it mandatory for user to setup mfa after login.
     * - `'none'`: Setting mfa level to `none` will make the user skip the mfa setup screen
     *
     * Defaults to `default`
     * @defaultValue `default`
     */
    mfaLevel?: MfaLevelType;
    /**
     *
     * NOTE: This option is for internal use only in torus wallet.
     * Setting skipTKey to `true` will skip TKey onboarding for new users,
     * whereas old users  will be presented with an option to skip tKey in UI
     * if this option is enabled.
     *
     * Defaults to false
     * @defaultValue false
     */
    skipTKey?: boolean;
    /**
     * This option is for internal use only in torus wallet and has not effect
     * on user's login on other dapps.
     *
     * Defaults to false
     * @defaultValue false
     * @internal
     */
    getWalletKey?: boolean;
    /**
     * extraLoginOptions can be used to pass standard oauth login options to
     * loginProvider.
     *
     * For ex: you will have to pass `login_hint` as user's email and `domain`
     * as your app domain in `extraLoginOptions` while using `email_passwordless`
     * loginProvider
     */
    extraLoginOptions?: ExtraLoginOptions;
    /**
     * Custom Logins can get a dapp share returned to them post successful login.
     * This is useful if the dapps want to use this share to allow users to login seamlessly
     * dappShare is a 24 word seed phrase
     */
    dappShare?: string;
    /**
     * How long should a login session last at a minimum in seconds
     *
     * @defaultValue 86400 seconds
     * @remarks Max value of sessionTime can be 7 * 86400 (7 days)
     */
    sessionTime?: number;
    /**
     * This curve will be used to determine the public key encoded in the jwt token which returned in
     * `getUserInfo` function after user login.
     * You can use that public key from jwt token as a unique user identifier in your backend.
     *
     * - `'secp256k1'`: secp256k1 based pub key is added as a wallet public key in jwt token to use.
     * - `'ed25519'`: ed25519 based pub key is added as a wallet public key in jwt token to use.
     *
     * Note: This parameter won't change format of private key returned by openlogin. Private key returned
     * by openlogin is always `secp256k1`. As of now you have to convert it to `'ed25519'` if you want.
     * You can use `@toruslabs/openlogin-ed25519` npm package for this purpose.
     *
     *
     * @defaultValue secp256k1
     */
    curve?: SUPPORTED_KEY_CURVES_TYPE;
};
export declare type OpenloginUserInfo = {
    email: string;
    name: string;
    profileImage: string;
    aggregateVerifier: string;
    verifier: string;
    verifierId: string;
    typeOfLogin: LOGIN_PROVIDER_TYPE | CUSTOM_LOGIN_PROVIDER_TYPE;
    dappShare?: string;
    /**
     * Token issued by Web3Auth.
     */
    idToken?: string;
    /**
     * Token issued by OAuth provider. Will be available only if you are using
     * custom verifiers.
     */
    oAuthIdToken?: string;
};

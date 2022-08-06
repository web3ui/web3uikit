import { JRPCId, JRPCMiddleware, JRPCRequest, JRPCVersion, SafeEventEmitter } from "@toruslabs/openlogin-jrpc";
import createHash from "create-hash";
import type { Duplex } from "readable-stream";

export const LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  TWITCH: "twitch",
  REDDIT: "reddit",
  DISCORD: "discord",
} as const;

export const WALLET_VERIFIERS = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  TWITCH: "twitch",
  REDDIT: "reddit",
  DISCORD: "discord",
  EMAIL_PASSWORDLESS: "torus-auth0-email-passwordless",
} as const;

export const WALLET_OPENLOGIN_VERIFIER_MAP = {
  [WALLET_VERIFIERS.GOOGLE]: "tkey-google",
  [WALLET_VERIFIERS.FACEBOOK]: "tkey-facebook",
  [WALLET_VERIFIERS.TWITCH]: "tkey-twitch",
  [WALLET_VERIFIERS.REDDIT]: "tkey-reddit",
  [WALLET_VERIFIERS.DISCORD]: "tkey-discord",
  [WALLET_VERIFIERS.EMAIL_PASSWORDLESS]: "tkey-auth0-email-passwordless",
} as const;
export const PAYMENT_PROVIDER = {
  MOONPAY: "moonpay",
  WYRE: "wyre",
  RAMPNETWORK: "rampnetwork",
  XANPOOL: "xanpool",
  MERCURYO: "mercuryo",
  TRANSAK: "transak",
} as const;

export const TORUS_BUILD_ENV = {
  PRODUCTION: "production",
  DEVELOPMENT: "development",
  BINANCE: "binance",
  TESTING: "testing",
  LRC: "lrc",
  BETA: "beta",
} as const;

export type PAYMENT_PROVIDER_TYPE = typeof PAYMENT_PROVIDER[keyof typeof PAYMENT_PROVIDER];

export type TORUS_BUILD_ENV_TYPE = typeof TORUS_BUILD_ENV[keyof typeof TORUS_BUILD_ENV];

export interface IPaymentProvider {
  line1: string;
  line2: string;
  line3: string;
  supportPage: string;
  minOrderValue: number;
  maxOrderValue: number;
  validCurrencies: string[];
  validCryptoCurrencies: string[];
  includeFees: boolean;
  enforceMax: boolean;
  sell?: boolean;
}

export interface IHashAlgorithmOptions {
  algorithms?: createHash.algorithm[];
  delimiter?: string;
  full?: boolean;
}

export interface SRI {
  hashes: Record<createHash.algorithm, string>;
  integrity?: string;
}

export const BUTTON_POSITION = {
  BOTTOM_LEFT: "bottom-left",
  TOP_LEFT: "top-left",
  BOTTOM_RIGHT: "bottom-right",
  TOP_RIGHT: "top-right",
} as const;

export type EMBED_TRANSLATION_ITEM = {
  continue: string;
  actionRequired: string;
  pendingAction: string;
  cookiesRequired: string;
  enableCookies: string;
  clickHere: string;
};

export type BUTTON_POSITION_TYPE = typeof BUTTON_POSITION[keyof typeof BUTTON_POSITION];

export type WALLET_PATH = "transfer" | "topup" | "home" | "settings" | "history" | "discover";
export type ETHEREUM_NETWORK_TYPE =
  | "ropsten"
  | "rinkeby"
  | "kovan"
  | "mainnet"
  | "goerli"
  | "localhost"
  | "matic"
  | "mumbai"
  | "xdai"
  | "bsc_mainnet"
  | "bsc_testnet";

export type LOGIN_TYPE =
  | "google"
  | "facebook"
  | "reddit"
  | "discord"
  | "twitch"
  | "apple"
  | "github"
  | "linkedin"
  | "twitter"
  | "weibo"
  | "line"
  | "jwt"
  | "email_password"
  | "passwordless";

export interface TorusCtorArgs {
  /**
   * Determines where the torus widget is visible on the page.
   * @defaultValue bottom-left
   */
  buttonPosition?: BUTTON_POSITION_TYPE;

  /**
   * Z-index of the modal and iframe
   * @defaultValue 99999
   */
  modalZIndex?: number;

  /**
   * Api key
   * Get yours today at {@link https://developer.tor.us | Dashboard}
   */
  apiKey?: string;
}

export interface TorusLoginParams {
  verifier?: string;
  login_hint?: string;
}

export interface NetworkInterface {
  /**
   * If any network other than the ones in enum, it should a JSON RPC URL
   */
  host: ETHEREUM_NETWORK_TYPE | string;
  /**
   * chainId for the network. If not provided, we query the host
   */
  chainId?: number;
  /**
   * Name of the network
   */
  networkName?: string;
  /**
   * Url of the block explorer
   */
  blockExplorer?: string;
  /**
   * Default currency ticker of the network (e.g: BNB)
   */
  ticker?: string;
  /**
   * Name for currency ticker (e.g: `Binance Coin`)
   */
  tickerName?: string;
}

export interface BaseLoginOptions {
  /**
   * If you need to send custom parameters to the Authorization Server,
   * make sure to use the original parameter name.
   */
  [key: string]: unknown;
  /**
   * - `'page'`: displays the UI with a full page view
   * - `'popup'`: displays the UI with a popup window
   * - `'touch'`: displays the UI in a way that leverages a touch interface
   * - `'wap'`: displays the UI with a "feature phone" type interface
   */
  display?: "page" | "popup" | "touch" | "wap";
  /**
   * - `'none'`: do not prompt user for login or consent on reauthentication
   * - `'login'`: prompt user for reauthentication
   * - `'consent'`: prompt user for consent before processing request
   * - `'select_account'`: prompt user to select an account
   */
  prompt?: "none" | "login" | "consent" | "select_account";
  /**
   * Maximum allowable elasped time (in seconds) since authentication.
   * If the last time the user authenticated is greater than this value,
   * the user must be reauthenticated.
   */
  max_age?: string | number;
  /**
   * The space-separated list of language tags, ordered by preference.
   * For example: `'fr-CA fr en'`.
   */
  ui_locales?: string;
  /**
   * Previously issued ID Token.
   */
  id_token_hint?: string;
  /**
   * The user's email address or other identifier. When your app knows
   * which user is trying to authenticate, you can provide this parameter
   * to pre-fill the email box or select the right session for sign-in.
   *
   * This currently only affects the classic Lock experience.
   */
  login_hint?: string;
  acr_values?: string;
  /**
   * The default scope to be used on authentication requests.
   * The defaultScope defined in the Auth0Client is included
   * along with this scope
   */
  scope?: string;
  /**
   * The default audience to be used for requesting API access.
   */
  audience?: string;
  /**
   * The name of the connection configured for your application.
   * If null, it will redirect to the Auth0 Login Page and show
   * the Login Widget.
   */
  connection?: string;
}

export interface JwtParameters extends BaseLoginOptions {
  /**
   * Your Auth0 account domain such as `'example.auth0.com'`,
   * `'example.eu.auth0.com'` or , `'example.mycompany.com'`
   * (when using [custom domains](https://auth0.com/docs/custom-domains))
   */
  domain: string;
  /**
   * The Client ID found on your Application settings page
   */
  client_id?: string;
  /**
   * The default URL where Auth0 will redirect your browser to with
   * the authentication result. It must be whitelisted in
   * the "Allowed Callback URLs" field in your Auth0 Application's
   * settings. If not provided here, it should be provided in the other
   * methods that provide authentication.
   */
  redirect_uri?: string;
  /**
   * The value in seconds used to account for clock skew in JWT expirations.
   * Typically, this value is no more than a minute or two at maximum.
   * Defaults to 60s.
   */
  leeway?: number;

  /**
   * The field in jwt token which maps to verifier id
   */
  verifierIdField?: string;

  /**
   * Whether the verifier id field is case sensitive
   * @defaultValue true
   */
  isVerifierIdCaseSensitive?: boolean;
}

export interface LoginConfigItem {
  /**
   * Display Name. If not provided, we use the default for torus app
   */
  name: string;
  /**
   * The type of login. Refer to enum `LOGIN_TYPE`
   */
  typeOfLogin: LOGIN_TYPE;
  /**
   * Description for button. If provided, it renders as a full length button. else, icon button
   */
  description?: string;
  /**
   * Custom client_id. If not provided, we use the default for torus app
   */
  clientId?: string;
  /**
   * Logo to be shown on mouse hover. If not provided, we use the default for torus app
   */
  logoHover?: string;
  /**
   * Logo to be shown on dark background (dark theme). If not provided, we use the default for torus app
   */
  logoLight?: string;
  /**
   * Logo to be shown on light background (light theme). If not provided, we use the default for torus app
   */
  logoDark?: string;
  /**
   * Whether to show the login button on modal or not
   */
  showOnModal?: boolean;
  /**
   * Whether to show the login button on mobile
   */
  showOnMobile?: boolean;
  /**
   * Custom jwt parameters to configure the login. Useful for Auth0 configuration
   */
  jwtParameters?: JwtParameters;
  /**
   * Show login button on the main list
   */
  mainOption?: boolean;
  /**
   * Whether to show the login button on desktop
   */
  showOnDesktop?: boolean;
  /**
   * Modify the order of buttons. Should be greater than zero, where 1 is top priority.
   */
  priority?: number;
}

export interface LoginConfig {
  /**
   * Use the verifier provided by torus as a key or a default verifier used by torus
   * {@link https://docs.tor.us/torus-wallet/developing-with-torus-wallet/oauth | Documentation}
   */
  [verifier: string]: LoginConfigItem;
}

export interface TorusNodePub {
  /**
   * X component of a Public Key
   */
  X: string;
  /**
   * Y component of a Public Key
   */
  Y: string;
}

export interface TorusPublicKey extends TorusNodePub {
  /**
   * Ethereum Public Address
   */
  address: string;
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
}

export interface VerifierArgs {
  /**
   * Verifier Enum
   */
  verifier: "google" | "reddit" | "discord";
  /**
   * email for google
   *
   * username for reddit
   *
   * id for discord
   */
  verifierId: string;
  /**
   * If true, returns {@link TorusPublicKey}, else returns string
   */
  isExtended?: boolean;
}

export interface LoginParams {
  verifier?: string;
  login_hint?: string;
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
  /**
   * Returns if the logged in user is new
   */
  isNewUser: boolean;

  /**
   * login type of the logged in user (google, facebook etc)
   */
  typeOfLogin: LOGIN_TYPE;
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

export interface ThemeParams {
  /**
   * If true, enables dark mode
   * Defaults to false
   * @defaultValue false
   */
  isDark: boolean;
  /**
   * Colors object to customize colors in torus theme.
   *
   * Contact us for whitelabel. Example provided in `examples/vue-app`
   */
  colors: Record<string, string>;
}

export interface IntegrityParams {
  /**
   * Whether to check for integrity.
   * Defaults to false
   * @defaultValue false
   */
  check: boolean;
  /**
   * if check is true, hash must be provided. The SRI sha-384 integrity hash
   * {@link https://www.srihash.org/ | SRI Hash}
   */
  hash?: string;
  /**
   * Version of torus-website to load
   */
  version?: string;
}

export interface VerifierStatus {
  /**
   * Defaults to true
   * @defaultValue true
   */
  google?: boolean;
  /**
   * Defaults to true
   * @defaultValue true
   */
  facebook?: boolean;
  /**
   * Defaults to true
   * @defaultValue true
   */
  reddit?: boolean;
  /**
   * Defaults to true
   * @defaultValue true
   */
  twitch?: boolean;
  /**
   * Defaults to true
   * @defaultValue true
   */
  discord?: boolean;
}

export interface WhiteLabelParams {
  /**
   * Whitelabel theme
   */
  theme: ThemeParams;
  /**
   * Language of whitelabel.
   *
   * order of preference: Whitelabel language \> user language (in torus-website) \> browser language
   */
  defaultLanguage?: string;
  /**
   * Logo Url to be used in light mode (dark logo)
   */
  logoDark: string;
  /**
   * Logo Url to be used in dark mode (light logo)
   */
  logoLight: string;
  /**
   * Shows/hides topup option in torus-website/widget.
   * Defaults to false
   * @defaultValue false
   */
  topupHide?: boolean;
  /**
   * Shows/hides billboard in torus-website.
   * Defaults to false
   * @defaultValue false
   */
  featuredBillboardHide?: boolean;
  /**
   * Shows/hides disclaimers on login page. Only works if special logins are hidden
   * Defaults to false
   * @defaultValue false
   */
  disclaimerHide?: boolean;
  /**
   * Language specific link for terms and conditions on torus-website. See (examples/vue-app) to configure
   */
  tncLink?: LocaleLinks<string>;
  /**
   * Language specific link for privacy policy on torus-website. See (examples/vue-app) to configure
   */
  privacyPolicy?: LocaleLinks<string>;
  /**
   * Language specific link for privacy policy on torus-website. See (examples/vue-app) to configure
   */
  contactLink?: LocaleLinks<string>;
  /**
   * Custom translations. See (examples/vue-app) to configure
   */
  customTranslations?: LocaleLinks<unknown>;
}

export interface TorusParams {
  /**
   * Torus Network Object
   */
  network?: NetworkInterface;
  /**
   * Build Environment of Torus.
   *
   * production uses https://app.tor.us,
   *
   * development uses http://localhost:4050 (expects torus-website to be run locally),
   *
   * binance uses https://binance.tor.us,
   *
   * lrc uses https://lrc.tor.us,
   *
   * beta uses https://beta.tor.us, (currently supports tkey)
   *
   * testing uses https://testing.tor.us (latest internal build)
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
   * setting false, hides those verifiers from login modal
   * @deprecated
   * Please use loginConfig instead
   */
  enabledVerifiers?: VerifierStatus;
  /**
   * Array of login config items. Used to modify the default logins/ add new logins
   */
  loginConfig?: LoginConfig;
  /**
   * Params to enable integrity checks and load specific versions of torus-website
   */
  integrity?: IntegrityParams;
  /**
   * Params to enable whitelabelling of torus website and widget
   */
  whiteLabel?: WhiteLabelParams;
  /**
   * Skips TKey onboarding for new users
   *
   * Defaults to false
   * @defaultValue false
   */
  skipTKey?: boolean;
  /**
   * Prefers to use localStorage instead of sessionStorage for torus iframe. Allows longer lived sessions
   *
   * Defaults to false
   * @defaultValue false
   */
  useLocalStorage?: boolean;

  /**
   * Setting `useWalletConnect` to true allows to display wallet connect qr scanner from torus-embed.
   *
   * Defaults to false
   * @defaultValue false
   */
  useWalletConnect?: boolean;
}

export interface UnvalidatedJsonRpcRequest {
  id?: JRPCId;
  jsonrpc?: JRPCVersion;
  method: string;
  params?: unknown;
  preopenInstanceId?: string;
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
  /**
   * Whether the provider should send page metadata.
   */
  shouldSendMetadata?: boolean;
}

export interface RequestArguments {
  /** The RPC method to request. */
  method: string;

  /** The params of the RPC method, if any. */
  params?: unknown[] | Record<string, unknown>;
}

export interface BaseProviderState {
  accounts: null | string[];
  isConnected: boolean;
  isUnlocked: boolean;
  initialized: boolean;
  isPermanentlyDisconnected: boolean;
  hasEmittedConnection: boolean;
}

export interface JsonRpcConnection {
  events: SafeEventEmitter;
  middleware: JRPCMiddleware<unknown, unknown>;
  stream: Duplex;
}

export interface SentWarningsState {
  // methods
  enable: boolean;
  experimentalMethods: boolean;
  send: boolean;
  publicConfigStore: boolean;
  // events
  events: {
    close: boolean;
    data: boolean;
    networkChanged: boolean;
    notification: boolean;
  };
}

export interface SendSyncJsonRpcRequest extends JRPCRequest<unknown> {
  method: "eth_accounts" | "eth_coinbase" | "eth_uninstallFilter" | "net_version";
}

export interface PublicConfigState {
  isUnlocked?: boolean;
  selectedAddress?: string;
  chainId?: string;
  networkVersion?: string;
  storageKey: string;
}

export type Maybe<T> = Partial<T> | null | undefined;

export type BufferEncoding = "ascii" | "utf8" | "utf-8" | "utf16le" | "ucs2" | "ucs-2" | "base64" | "base64url" | "latin1" | "binary" | "hex";

export type IObjectMultiplex = Duplex;

export type WalletProviderState = {
  accounts: string[];
  chainId: string;
  isUnlocked: boolean;
  networkVersion: string;
};

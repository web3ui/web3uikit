import type { EventEmitter } from "events";

import { THEME } from "./Preferences/IPreferencesController";

/**
 * State change callbacks
 */
export type Listener<T> = (state: T) => void;

/**
 * Base controller configuration
 */
export interface BaseConfig {
  /**
   *  Determines if this controller is enabled
   */
  disabled?: boolean;
}

/**
 * Base state representation
 */
export interface BaseState {
  /**
   * Unique name for this controller
   */
  name?: string;
}

export interface IController<C, S> {
  defaultConfig: C;

  defaultState: S;

  name: string;

  get state(): S;

  get config(): C;

  update(state: Partial<S>, overwrite?: boolean): void;

  configure(config: Partial<C>, overwrite?: boolean, fullUpdate?: boolean): void;
}

export type generic<T> = () => T;

export type EmailObject = {
  link: string;
  from_name: string;
  to_email: string;
  total_amount: string;
  token: string;
  currency: string;
  currency_amount: number;
};

export interface IWindow {
  closed: boolean;
  open(): IWindow | Promise<IWindow>;
  close(): void;
}

export interface IStreamWindow extends IWindow, EventEmitter {}

export const LOGIN_PROVIDER = {
  GOOGLE: "google",
  FACEBOOK: "facebook",
  REDDIT: "reddit",
  DISCORD: "discord",
  TWITCH: "twitch",
  APPLE: "apple",
  LINE: "line",
  GITHUB: "github",
  KAKAO: "kakao",
  LINKEDIN: "linkedin",
  TWITTER: "twitter",
  WEIBO: "weibo",
  WECHAT: "wechat",
  EMAIL_PASSWORDLESS: "email_passwordless",
};
/**
 * {@label loginProviderType}
 */
export type LOGIN_PROVIDER_TYPE = typeof LOGIN_PROVIDER[keyof typeof LOGIN_PROVIDER];

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
   * aggregate verifier of the logged in user (google, facebook etc)
   */
  aggregateVerifier?: string;
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

  typeOfLogin: LOGIN_PROVIDER_TYPE;
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

export const PAYMENT_PROVIDER = {
  MOONPAY: "moonpay",
  WYRE: "wyre",
  RAMPNETWORK: "rampnetwork",
  XANPOOL: "xanpool",
  MERCURYO: "mercuryo",
  TRANSAK: "transak",
} as const;

export type PAYMENT_PROVIDER_TYPE = typeof PAYMENT_PROVIDER[keyof typeof PAYMENT_PROVIDER];

export type InPageWalletProviderState = {
  accounts: string[];
  chainId: string;
  isUnlocked: boolean;
};

export type CommunicationWalletProviderState = {
  isLoggedIn: boolean;
  currentLoginProvider: LOGIN_PROVIDER_TYPE;
};

export interface PopupWhitelabelData {
  theme: THEME;
}

import { get, patch, post, remove } from "@toruslabs/http-helpers";
import bowser from "bowser";
import { cloneDeep } from "lodash";
import log from "loglevel";

import BaseController from "../BaseController";
import { BaseConfig, EmailObject, LOGIN_PROVIDER, UserInfo } from "../interfaces";
import { BaseKeyringController } from "../Keyring/BaseKeyringController";
import { KeyringControllerState } from "../Keyring/IKeyringController";
import { TransactionStatus } from "../Transaction/ITransactionController";
import { getCustomDeviceInfo, getHeaders } from "../utils";
import {
  ACCOUNT_CATEGORY,
  AddressPreferences,
  BillboardEvent,
  Contact,
  ContactPayload,
  DiscoverDapp,
  PreferencesConfig,
  PreferencesState,
  RecordLoginPayload,
  THEME,
  UserPayload,
} from "./IPreferencesController";

// By default, poll every 3 minutes
const DEFAULT_INTERVAL = 180 * 1000;

export const DEFAULT_PREFERENCES = {
  selectedCurrency: "USD",
  theme: "dark",
  locale: "en-US",
  accountType: ACCOUNT_CATEGORY.NORMAL,
  contacts: [],
  jwtToken: "",
  fetchedPastTx: [],
  pastTransactions: [],
  paymentTx: [],
  defaultPublicAddress: "",
  customTokens: [],
  customNfts: [],
  crashReport: true,
  userInfo: {
    aggregateVerifier: "",
    email: "",
    name: "",
    profileImage: "",
    typeOfLogin: LOGIN_PROVIDER.GOOGLE,
    verifier: "",
    verifierId: "",
  },
} as AddressPreferences;

/**
 * Controller that stores shared settings and exposes convenience methods
 */
export abstract class BasePreferencesController<
  P extends AddressPreferences,
  C extends PreferencesConfig,
  S extends PreferencesState<P>
> extends BaseController<C, S> {
  /**
   * Name of this controller used during composition
   */
  name = "PreferencesController";

  public iframeOrigin: string;

  private signAuthMessage: BaseKeyringController<BaseConfig, KeyringControllerState>["signAuthMessage"];

  private defaultPreferences: Partial<P>;

  /**
   * Creates a PreferencesController instance
   *
   * @param config - Initial options used to configure this controller
   * @param state - Initial state to set on this controller
   */
  constructor({
    config,
    state,
    defaultPreferences,
    signAuthMessage,
  }: {
    config?: Partial<C> & Pick<C, "api" | "commonApiHost" | "signInPrefix">;
    state?: Partial<S>;
    defaultPreferences?: Partial<P>;
    signAuthMessage: BaseKeyringController<BaseConfig, KeyringControllerState>["signAuthMessage"];
  }) {
    super({ config, state });
    if (!config.api) {
      throw new Error("PreferencesController - no api specified in config.");
    }
    this.defaultState = {
      identities: {},
      selectedAddress: "",
      lastErrorMessage: "",
      lastSuccessMessage: "",
    } as S;
    this.defaultConfig = {
      api: config.api,
      pollInterval: DEFAULT_INTERVAL,
    } as C;
    this.initialize();
    this.defaultPreferences = {
      ...DEFAULT_PREFERENCES,
      ...defaultPreferences,
    };
    this.signAuthMessage = signAuthMessage;
  }

  public setIframeOrigin(origin: string): void {
    this.iframeOrigin = origin;
  }

  getAddressState(address?: string): P | undefined {
    const selectedAddress = address || this.state.selectedAddress;
    return this.state.identities[selectedAddress];
  }

  /**
   * Sets selected address
   *
   * @param selectedAddress - casper account hash
   */
  setSelectedAddress(selectedAddress: string): void {
    this.update({ selectedAddress } as Partial<S>);
  }

  async getUser<U>(address: string): Promise<U> {
    const user = await get<{ success: boolean; error?: string; data?: U }>(`${this.config.api}/user?fetchTx=false`, this.headers(address), {
      useAPIKey: true,
    });
    return user.data;
  }

  async createUser(params: {
    selectedCurrency: string;
    theme: THEME;
    verifier: string;
    verifierId: string;
    locale: string;
    address: string;
  }): Promise<void> {
    const { selectedCurrency, theme, verifier, verifierId, locale, address } = params;
    const userPayload: UserPayload = {
      default_currency: selectedCurrency,
      theme,
      verifier,
      verifier_id: verifierId,
      locale,
    };
    await post(`${this.config.api}/user`, userPayload, this.headers(address), { useAPIKey: true });
    this.updateState(
      {
        theme,
        defaultPublicAddress: address,
        selectedCurrency,
        locale,
      } as Partial<P>,
      address
    );
  }

  public async storeUserLogin(params: {
    verifier: string;
    verifierId: string;
    address: string;
    options: { calledFromEmbed: boolean; rehydrate: boolean };
  }): Promise<void> {
    const { verifierId, verifier, options, address } = params;
    if (!options.rehydrate) {
      const browser = bowser.getParser(window.navigator.userAgent);
      const specialBrowser = getCustomDeviceInfo();
      const recordLoginPayload: RecordLoginPayload = {
        os: browser.getOSName(),
        os_version: browser.getOSVersion() || "unidentified",
        browser: specialBrowser?.browser || browser.getBrowserName() || "unidentified",
        browser_version: browser.getBrowserVersion() || "unidentified",
        platform: browser.getPlatform().type || "desktop",
        hostname: this.iframeOrigin,
        verifier,
        verifier_id: verifierId,
      };
      await post<{ success: boolean }>(`${this.config.api}/user/recordLogin`, recordLoginPayload, this.headers(address), { useAPIKey: true });
    }
  }

  async setCrashReport(isEnabled: boolean): Promise<boolean> {
    if (isEnabled === this.getAddressState()?.crashReport) return true;
    try {
      await patch(`${this.config.api}/user`, { enable_crash_reporter: isEnabled }, this.headers(), { useAPIKey: true });
      this.updateState({ crashReport: isEnabled } as Partial<P>);
      return true;
    } catch (error) {
      log.error(error);
      return false;
    }
  }

  async setUserTheme(theme: THEME): Promise<boolean> {
    if (theme === this.getAddressState()?.theme) return true;
    try {
      await patch(`${this.config.api}/user`, { theme }, this.headers(), { useAPIKey: true });
      this.updateState({ theme } as Partial<P>);
      return true;
    } catch (error) {
      log.error(error);
      return false;
    }
  }

  async setUserLocale(locale: string): Promise<boolean> {
    if (locale === this.getAddressState()?.locale) return;
    try {
      await patch(`${this.config.api}/user`, { locale }, this.headers(), { useAPIKey: true });
      this.updateState({ locale } as Partial<P>);
      return true;
    } catch (error) {
      log.error("unable to set locale", error);
      return false;
    }
  }

  async setSelectedCurrency(payload: { selectedCurrency: string }): Promise<boolean> {
    if (payload.selectedCurrency === this.getAddressState()?.selectedCurrency) return true;
    try {
      await patch(`${this.config.api}/user`, { default_currency: payload.selectedCurrency }, this.headers(), { useAPIKey: true });
      this.updateState({ selectedCurrency: payload.selectedCurrency } as Partial<P>);
      return true;
    } catch (error) {
      log.error(error);
      return false;
    }
  }

  async addContact(contact: ContactPayload): Promise<boolean> {
    try {
      const response = await post<{ success: boolean; data: Contact }>(`${this.config.api}/contact`, contact, this.headers(), { useAPIKey: true });
      this.updateState({ contacts: [...(this.getAddressState()?.contacts || []), response.data] } as Partial<P>);
      return true;
    } catch (error) {
      log.error("unable to add contact", error);
      return false;
    }
  }

  async deleteContact(contactId: number): Promise<boolean> {
    try {
      const response = await remove<{ success: boolean; data: { id: number } }>(`${this.config.api}/contact/${contactId}`, {}, this.headers(), {
        useAPIKey: true,
      });
      const finalContacts = this.getAddressState()?.contacts.filter((contact) => contact.id !== response.data.id);
      if (finalContacts) this.updateState({ contacts: [...finalContacts] } as Partial<P>);
      return true;
    } catch (error) {
      log.error("unable to delete contact", error);
      return false;
    }
  }

  async revokeDiscord(idToken: string): Promise<void> {
    try {
      const resp = await post(`${this.config.api}/revoke/discord`, { token: idToken }, this.headers(), { useAPIKey: true });
      log.info(resp);
    } catch (error) {
      log.error(error);
    }
  }

  async patchPastTx(body: { id: string; status: TransactionStatus; updated_at: string }, address: string): Promise<void> {
    try {
      const response = await patch(`${this.config.api}/transaction`, body, this.headers(address), { useAPIKey: true });
      log.info("successfully patched", response);
    } catch (error) {
      log.error("unable to patch tx", error);
    }
  }

  async postPastTx<T>(tx: T, address: string): Promise<{ success: boolean; response: number[] }> {
    try {
      const response = await post(`${this.config.api}/transaction`, tx, this.headers(address), {
        useAPIKey: true,
      });
      log.info("successfully posted tx", response);
      return response as { success: boolean; response: number[] };
    } catch (error) {
      log.error(error, "unable to insert transaction");
    }
  }

  async getWalletOrders<T>(address: string): Promise<T[]> {
    try {
      const response = await get<{ success: boolean; data: T[] | null }>(`${this.config.api}/transaction`, this.headers(address), {
        useAPIKey: true,
      });
      return response.success ? (response.data ? response.data : []) : [];
    } catch (error) {
      log.error("unable to get wallet orders tx", error);
      return [];
    }
  }

  async getTopUpOrders<T>(address: string): Promise<T[]> {
    try {
      const response = await get<{ success: boolean; data: T[] }>(`${this.config.commonApiHost}/transaction`, this.headers(address), {
        useAPIKey: true,
      });
      return response.data || [];
    } catch (error) {
      log.error("unable to fetch past Top up orders", error);
    }
  }

  async getBillBoardData(): Promise<BillboardEvent[]> {
    try {
      const response = await get<{ success: boolean; data: BillboardEvent[] | null }>(`${this.config.api}/billboard`, this.headers(), {
        useAPIKey: true,
      });
      return response.success ? response.data : [];
    } catch (error) {
      log.error("unable to get billboard data", error);
      return [];
    }
  }

  async getMessageForSigning(publicAddress: string): Promise<string> {
    const response = await post<{ success: boolean; message: string }>(
      `${this.config.api}/auth/message`,
      {
        public_address: publicAddress,
      },
      {},
      { useAPIKey: true }
    );
    return response.message;
  }

  async getTwitterId(payload: { nick: string; typeOfLogin: string }): Promise<string> {
    const res = await get<{ success: boolean; data: string }>(`${this.config.api}/twitter?screen_name=${payload.nick}`, this.headers(), {
      useAPIKey: true,
    });
    return `${payload.typeOfLogin.toLowerCase()}|${res.data.toString()}`;
  }

  async sendEmail(payload: { emailObject: EmailObject }): Promise<void> {
    return post(`${this.config.api}/transaction/sendemail`, payload.emailObject, this.headers(), { useAPIKey: true });
  }

  async refreshJwt(): Promise<void> {
    const address = this.state.selectedAddress;
    const messageToSign = await this.getMessageForSigning(address);
    if (!messageToSign.startsWith(this.config.signInPrefix)) throw new Error("Cannot sign on invalid message");
    const signedMessage = this.signAuthMessage(address, messageToSign);
    const response: { token: string } = await post(
      `${this.config.api}/auth/verify`,
      {
        public_address: address,
        signed_message: signedMessage,
      },
      {},
      { useAPIKey: true }
    );
    this.updateState({ jwtToken: response.token } as Partial<P>, address);
  }

  async getDappList(): Promise<DiscoverDapp[]> {
    try {
      const response = await get<{ success: boolean; error?: string; data?: DiscoverDapp[] }>(`${this.config.api}/dapps`, this.headers(), {
        useAPIKey: true,
      });
      return response.success ? response.data : [];
    } catch (error) {
      log.error("unable to get billboard data", error);
      return [];
    }
  }

  protected async init(address: string, userInfo: UserInfo, jwtToken?: string): Promise<void> {
    let response = { token: jwtToken };
    if (this.getAddressState(address)) return;
    if (!jwtToken) {
      const messageToSign = await this.getMessageForSigning(address);
      if (!messageToSign.startsWith(this.config.signInPrefix)) throw new Error("Cannot sign on invalid message");
      const signedMessage = this.signAuthMessage(address, messageToSign);
      response = await post(
        `${this.config.api}/auth/verify`,
        {
          public_address: address,
          signed_message: signedMessage,
        },
        {},
        { useAPIKey: true }
      );
    }
    this.updateState({ jwtToken: response.token, userInfo } as Partial<P>, address);
  }

  protected updateState(preferences?: Partial<P>, address?: string): P {
    const selectedAddress = address || this.state.selectedAddress;
    const currentState = this.getAddressState(selectedAddress) || cloneDeep(this.defaultPreferences);
    const mergedState = { ...currentState, ...preferences } as P;
    this.update({
      identities: {
        ...this.state.identities,
        [selectedAddress]: mergedState,
      },
    } as S);
    return mergedState;
  }

  private headers(address?: string): { headers: { Authorization: string; "Content-Type": string } } {
    const selectedAddress = address || this.state.selectedAddress;
    return getHeaders(this.getAddressState(selectedAddress)?.jwtToken || "");
  }

  abstract sync(address: string): Promise<boolean>;
}

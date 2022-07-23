import BaseController from "../BaseController";
import { BaseConfig, EmailObject, UserInfo } from "../interfaces";
import { BaseKeyringController } from "../Keyring/BaseKeyringController";
import { KeyringControllerState } from "../Keyring/IKeyringController";
import { TransactionStatus } from "../Transaction/ITransactionController";
import { AddressPreferences, BillboardEvent, ContactPayload, DiscoverDapp, PreferencesConfig, PreferencesState, THEME } from "./IPreferencesController";
export declare const DEFAULT_PREFERENCES: AddressPreferences;
/**
 * Controller that stores shared settings and exposes convenience methods
 */
export declare abstract class BasePreferencesController<P extends AddressPreferences, C extends PreferencesConfig, S extends PreferencesState<P>> extends BaseController<C, S> {
    /**
     * Name of this controller used during composition
     */
    name: string;
    iframeOrigin: string;
    private signAuthMessage;
    private defaultPreferences;
    /**
     * Creates a PreferencesController instance
     *
     * @param config - Initial options used to configure this controller
     * @param state - Initial state to set on this controller
     */
    constructor({ config, state, defaultPreferences, signAuthMessage, }: {
        config?: Partial<C> & Pick<C, "api" | "commonApiHost" | "signInPrefix">;
        state?: Partial<S>;
        defaultPreferences?: Partial<P>;
        signAuthMessage: BaseKeyringController<BaseConfig, KeyringControllerState>["signAuthMessage"];
    });
    setIframeOrigin(origin: string): void;
    getAddressState(address?: string): P | undefined;
    /**
     * Sets selected address
     *
     * @param selectedAddress - casper account hash
     */
    setSelectedAddress(selectedAddress: string): void;
    getUser<U>(address: string): Promise<U>;
    createUser(params: {
        selectedCurrency: string;
        theme: THEME;
        verifier: string;
        verifierId: string;
        locale: string;
        address: string;
    }): Promise<void>;
    storeUserLogin(params: {
        verifier: string;
        verifierId: string;
        address: string;
        options: {
            calledFromEmbed: boolean;
            rehydrate: boolean;
        };
    }): Promise<void>;
    setCrashReport(isEnabled: boolean): Promise<boolean>;
    setUserTheme(theme: THEME): Promise<boolean>;
    setUserLocale(locale: string): Promise<boolean>;
    setSelectedCurrency(payload: {
        selectedCurrency: string;
    }): Promise<boolean>;
    addContact(contact: ContactPayload): Promise<boolean>;
    deleteContact(contactId: number): Promise<boolean>;
    revokeDiscord(idToken: string): Promise<void>;
    patchPastTx(body: {
        id: string;
        status: TransactionStatus;
        updated_at: string;
    }, address: string): Promise<void>;
    postPastTx<T>(tx: T, address: string): Promise<{
        success: boolean;
        response: number[];
    }>;
    getWalletOrders<T>(address: string): Promise<T[]>;
    getTopUpOrders<T>(address: string): Promise<T[]>;
    getBillBoardData(): Promise<BillboardEvent[]>;
    getMessageForSigning(publicAddress: string): Promise<string>;
    getTwitterId(payload: {
        nick: string;
        typeOfLogin: string;
    }): Promise<string>;
    sendEmail(payload: {
        emailObject: EmailObject;
    }): Promise<void>;
    refreshJwt(): Promise<void>;
    getDappList(): Promise<DiscoverDapp[]>;
    protected init(address: string, userInfo: UserInfo, jwtToken?: string): Promise<void>;
    protected updateState(preferences?: Partial<P>, address?: string): P;
    private headers;
    abstract sync(address: string): Promise<boolean>;
}

import { BaseConfig, BaseState, IController, UserInfo } from "../interfaces";
export declare const ACTIVITY_ACTION: {
    ACTIVITY_ACTION_ALL: string;
    ACTIVITY_ACTION_SEND: string;
    ACTIVITY_ACTION_RECEIVE: string;
    ACTIVITY_ACTION_TOPUP: string;
};
export declare type ACTIVITY_ACTION_TYPE = typeof ACTIVITY_ACTION[keyof typeof ACTIVITY_ACTION];
export declare const ACCOUNT_CATEGORY: {
    NORMAL: string;
    THRESHOLD: string;
    IMPORTED: string;
};
export declare type ACCOUNT_TYPE = typeof ACCOUNT_CATEGORY[keyof typeof ACCOUNT_CATEGORY];
export declare type THEME = "light" | "dark";
export declare type CustomNft = {
    id: number;
    created_at: string;
    nft_address: string;
    public_address: string;
    network: string;
    nft_contract_standard: string;
    nft_id: string;
};
export declare type CustomToken = {
    id: number;
    created_at: string;
    token_address: string;
    public_address: string;
    network: string;
    token_symbol: string;
    token_name: string;
    decimals: string;
};
export declare type UserVerifierInfo = {
    verifier: string;
    verifierId: string;
};
export declare type PaymentTransaction = {
    id: string;
    date: string;
    from: string;
    slicedFrom: string;
    action: string;
    to: string;
    slicedTo: string;
    totalAmount: number;
    totalAmountString: string;
    currencyAmount: number;
    currencyAmountString: string;
    amount: number;
    ethRate: number;
    status: string;
    blockExplorerLink: string;
    currencyUsed: string;
};
export interface RecordLoginPayload {
    browser: string;
    os: string;
    os_version: string;
    browser_version: string;
    platform: string;
    hostname: string;
    verifier: string;
    verifier_id: string;
    metadata?: string;
}
export interface UserPayload {
    verifier: string;
    verifier_id: string;
    theme: string;
    locale: string;
    default_currency: string;
}
export interface ContactPayload {
    contact_verifier: string;
    contact_verifier_id: string;
    display_name: string;
}
export declare type Contact = {
    id: number;
    created_at: string;
    updated_at: string;
    contact_verifier: string;
    contact_verifier_id: string;
    display_name: string;
    public_address: string;
};
export interface AddressPreferences {
    selectedCurrency: string;
    theme: THEME;
    locale: string;
    accountType: ACCOUNT_TYPE;
    contacts: Contact[];
    crashReport: boolean;
    userInfo: UserInfo;
    jwtToken?: string;
    paymentTx?: PaymentTransaction[];
    defaultPublicAddress?: string;
    customTokens?: CustomToken[];
    customNfts?: CustomNft[];
}
export interface User {
    id: number;
    public_address: string;
    default_currency: string;
    created_at: string;
    theme: THEME;
    locale: string;
    verifier: string;
    verifier_id: string;
    account_type: string;
    default_public_address: string;
    contacts?: Contact[];
    customTokens?: CustomToken[];
    customNfts?: CustomNft[];
}
export interface BillboardEvent {
    eventName: string;
    imageUrl: string;
    imageDarkUrl: string;
    description: string;
    callToActionLinkTwo: string;
    callToActionLink: string;
    callToActionText: string;
    locale: string;
}
/**
 * Preferences controller state
 */
export interface PreferencesState<P> extends BaseState {
    /**
     * Map of addresses to ContactEntry objects
     */
    identities: {
        [address: string]: P;
    };
    /**
     * Current coinbase account
     */
    selectedAddress: string;
    lastErrorMessage?: string;
    lastSuccessMessage?: string;
}
export interface PreferencesConfig extends BaseConfig {
    pollInterval?: number;
    api: string;
    commonApiHost: string;
    signInPrefix: string;
}
interface DappUrl {
    url: string;
}
export interface DiscoverDapp {
    logo: DappUrl[];
    title: string;
    category: string;
    desc: string;
    network: string;
    url: string;
}
export interface IPreferencesController<P, C, S> extends IController<C, S> {
    /**
     * Init will sync the preferences of specified address with backend and also add the identity in state
     * the store.
     * @param address - address of the user
     * @param jwtToken - if jwt token already exists, it will be used instead of fetching from backend
     * @param calledFromEmbed - if called from embed
     * @param userInfo - optional user info
     * @param rehydrate - Rehydrate the preferences from the local storage
     *
     */
    initPreferences(params: {
        address: string;
        jwtToken?: string;
        calledFromEmbed?: boolean;
        userInfo?: {
            verifier: string;
            verifierId: string;
        };
        rehydrate?: boolean;
        locale?: string;
    }): Promise<void>;
    /**
     * Gets the preferences state of specified address
     * @defaultValue - By default it will return selected address preferences
     */
    getAddressState(address?: string): P;
    /**
     * Sets the selected address in state
     * @param selectedAddress - Sets the provided address as currently selected address
     */
    setSelectedAddress(selectedAddress: string): void;
}
export {};

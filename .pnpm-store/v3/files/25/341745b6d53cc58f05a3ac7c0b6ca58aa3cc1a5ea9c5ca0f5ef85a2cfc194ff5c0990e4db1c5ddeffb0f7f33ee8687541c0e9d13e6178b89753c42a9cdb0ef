import MoralisType from "moralis";
export declare type Web3EnableOptions = MoralisType.EnableOptions & {
    onError?: (error: Error) => void;
    onSuccess?: (web3: unknown) => void;
    onComplete?: () => void;
    throwOnError?: boolean;
};
declare type EnableWeb3 = (options?: Web3EnableOptions | undefined) => Promise<MoralisType.Web3Provider | undefined>;
/**
 * Handles enabling of web3 and providing it, as soon as the user is authenticated
 */
export declare const _useMoralisWeb3: (Moralis: MoralisType) => {
    enableWeb3: EnableWeb3;
    web3: null | MoralisType.MoralisWeb3Provider;
    isWeb3Enabled: boolean;
    web3EnableError: Error | null;
    isWeb3EnableLoading: boolean;
    _setIsWeb3Enabled: (value: boolean) => void;
    _setIsWeb3EnableLoading: (value: boolean) => void;
    chainId: null | string;
    account: null | string;
    network: null | string;
    connector: null | MoralisType.Connector;
    connectorType: null | string;
    deactivateWeb3: () => Promise<void>;
    provider: null | MoralisType.Provider;
};
export {};

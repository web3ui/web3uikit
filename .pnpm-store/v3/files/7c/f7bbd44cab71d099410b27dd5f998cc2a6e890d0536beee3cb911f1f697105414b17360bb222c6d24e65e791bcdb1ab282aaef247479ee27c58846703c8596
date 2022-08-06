export declare const useChain: () => {
    switchNetwork: (providedChainId: string) => Promise<void>;
    chainId: string | null;
    chain: {
        chainId: string;
        blockExplorerUrl: string | null;
        name: string;
        shortName: string;
        networkId: number;
        nativeCurrency: {
            name: string;
            symbol: string;
            decimals: number;
        };
        rpc: string[];
        faucets: string[];
        infoURL: string;
    } | null | undefined;
    account: string | null;
    network: string | null;
    provider: unknown;
    connector: unknown;
    connectorType: string | null;
};
export default useChain;

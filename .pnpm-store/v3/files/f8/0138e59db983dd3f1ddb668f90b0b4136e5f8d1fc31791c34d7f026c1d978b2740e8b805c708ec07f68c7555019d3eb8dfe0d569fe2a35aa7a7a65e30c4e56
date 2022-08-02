export declare const CHAIN_NAMESPACES: {
    readonly EIP155: "eip155";
    readonly SOLANA: "solana";
    readonly OTHER: "other";
};
export declare type ChainNamespaceType = typeof CHAIN_NAMESPACES[keyof typeof CHAIN_NAMESPACES];
export declare const ADAPTER_NAMESPACES: {
    readonly EIP155: "eip155";
    readonly SOLANA: "solana";
    readonly MULTICHAIN: "multichain";
};
export declare type AdapterNamespaceType = typeof ADAPTER_NAMESPACES[keyof typeof ADAPTER_NAMESPACES];
export declare type CustomChainConfig = {
    chainNamespace: ChainNamespaceType;
    /**
     * The chain id of the chain
     */
    chainId: string;
    /**
     * RPC target Url for the chain
     */
    rpcTarget: string;
    /**
     * Display Name for the chain
     */
    displayName: string;
    /**
     * Url of the block explorer
     */
    blockExplorer: string;
    /**
     * Default currency ticker of the network (e.g: ETH)
     */
    ticker: string;
    /**
     * Name for currency ticker (e.g: `Ethereum`)
     */
    tickerName: string;
};

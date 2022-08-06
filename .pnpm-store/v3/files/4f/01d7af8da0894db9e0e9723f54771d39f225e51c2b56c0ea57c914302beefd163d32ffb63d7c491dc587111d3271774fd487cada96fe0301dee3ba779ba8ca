export const CHAIN_NAMESPACES = {
  EIP155: "eip155",
  SOLANA: "solana",
  OTHER: "other",
} as const;
// eip155 for all evm chains
export type ChainNamespaceType = typeof CHAIN_NAMESPACES[keyof typeof CHAIN_NAMESPACES];

export const ADAPTER_NAMESPACES = {
  EIP155: "eip155",
  SOLANA: "solana",
  MULTICHAIN: "multichain",
} as const;
// eip155 for all evm chains
export type AdapterNamespaceType = typeof ADAPTER_NAMESPACES[keyof typeof ADAPTER_NAMESPACES];

export type CustomChainConfig = {
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

export const MULTI_CHAIN_ADAPTERS = {
  OPENLOGIN: "openlogin",
  WALLET_CONNECT_V1: "wallet-connect-v1",
  WALLET_CONNECT_V2: "wallet-connect-v2",
};

export const SOLANA_ADAPTERS = {
  TORUS_SOLANA: "torus-solana",
  PHANTOM: "phantom",
  SOLLET: "sollet",
  SOLLET_EXTENSION: "sollet-extension",
  SOLFLARE: "solflare",
  SLOPE: "slope",
  ...MULTI_CHAIN_ADAPTERS,
};

export const EVM_ADAPTERS = {
  TORUS_EVM: "torus-evm",
  METAMASK: "metamask",
  COINBASE: "coinbase",
  ...MULTI_CHAIN_ADAPTERS,
};

export const WALLET_ADAPTERS = {
  ...EVM_ADAPTERS,
  ...SOLANA_ADAPTERS,
};
export type WALLET_ADAPTER_TYPE = typeof WALLET_ADAPTERS[keyof typeof WALLET_ADAPTERS];
export type SOLANA_ADAPTER_TYPE = typeof SOLANA_ADAPTERS[keyof typeof SOLANA_ADAPTERS];
export type EVM_ADAPTER_TYPE = typeof EVM_ADAPTERS[keyof typeof EVM_ADAPTERS];
export type MULTI_CHAIN_ADAPTER_TYPE = typeof MULTI_CHAIN_ADAPTERS[keyof typeof MULTI_CHAIN_ADAPTERS];

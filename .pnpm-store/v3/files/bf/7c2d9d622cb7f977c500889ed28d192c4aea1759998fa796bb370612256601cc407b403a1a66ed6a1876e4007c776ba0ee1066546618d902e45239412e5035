import { CHAIN_NAMESPACES, ChainNamespaceType, CustomChainConfig } from "./IChainInterface";
export const DEFAULT_INFURA_ID = "776218ac4734478c90191dde8cae483c";
const getDefaultNetworkId = (chainNamespace: ChainNamespaceType): number => {
  if (chainNamespace === CHAIN_NAMESPACES.EIP155) {
    return 1;
  } else if (chainNamespace === CHAIN_NAMESPACES.SOLANA) {
    return 1;
  }
  throw new Error(`Chain namespace ${chainNamespace} is not supported`);
};

export const getEvmChainConfig = (chainId: number): CustomChainConfig | null => {
  const chainNamespace = CHAIN_NAMESPACES.EIP155;
  if (chainId === 1) {
    return {
      chainNamespace,
      chainId: "0x1",
      rpcTarget: `https://mainnet.infura.io/v3/${DEFAULT_INFURA_ID}`,
      displayName: "Ethereum Mainnet",
      blockExplorer: "https://etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum",
    };
  } else if (chainId === 3) {
    return {
      chainNamespace,
      chainId: "0x3",
      rpcTarget: `https://ropsten.infura.io/v3/${DEFAULT_INFURA_ID}`,
      displayName: "ropsten",
      blockExplorer: "https://ropsten.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum",
    };
  } else if (chainId === 4) {
    return {
      chainNamespace,
      chainId: "0x4",
      rpcTarget: `https://rinkeby.infura.io/v3/${DEFAULT_INFURA_ID}`,
      displayName: "rinkeby",
      blockExplorer: "https://rinkeby.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum",
    };
  } else if (chainId === 5) {
    return {
      chainNamespace,
      chainId: "0x5",
      rpcTarget: `https://goerli.infura.io/v3/${DEFAULT_INFURA_ID}`,
      displayName: "goerli",
      blockExplorer: "https://goerli.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum",
    };
  } else if (chainId === 42) {
    return {
      chainNamespace,
      chainId: "0x2a",
      rpcTarget: `https://kovan.infura.io/v3/${DEFAULT_INFURA_ID}`,
      displayName: "kovan",
      blockExplorer: "https://kovan.etherscan.io/",
      ticker: "ETH",
      tickerName: "Ethereum",
    };
  } else if (chainId === 137) {
    return {
      chainNamespace,
      rpcTarget: "https://polygon-rpc.com",
      blockExplorer: "https://polygonscan.com",
      chainId: "0x89",
      displayName: "Polygon Mainnet",
      ticker: "matic",
      tickerName: "matic",
    };
  } else if (chainId === 80001) {
    return {
      chainNamespace,
      rpcTarget: "https://rpc-mumbai.maticvigil.com",
      blockExplorer: "https://mumbai-explorer.matic.today",
      chainId: "0x13881",
      displayName: "Polygon Mumbai Testnet",
      ticker: "matic",
      tickerName: "matic",
    };
  } else if (chainId === 56) {
    return {
      chainNamespace,
      rpcTarget: "https://bsc-dataseed.binance.org",
      blockExplorer: "https://bscscan.com",
      chainId: "0x38",
      displayName: "Binance SmartChain Mainnet",
      ticker: "BNB",
      tickerName: "BNB",
    };
  } else if (chainId === 97) {
    return {
      chainNamespace,
      rpcTarget: "https://data-seed-prebsc-2-s3.binance.org:8545",
      blockExplorer: "https://testnet.bscscan.com",
      chainId: "0x61",
      displayName: "Binance SmartChain Testnet",
      ticker: "BNB",
      tickerName: "BNB",
    };
  }

  return null;
};

export const getSolanaChainConfig = (chainId: number): CustomChainConfig | null => {
  const chainNamespace = CHAIN_NAMESPACES.SOLANA;
  if (chainId === 1) {
    return {
      chainNamespace,
      blockExplorer: "https://explorer.solana.com",
      chainId: "0x1",
      displayName: "Solana Mainnet",
      rpcTarget: "https://api.mainnet-beta.solana.com",
      ticker: "SOL",
      tickerName: "Solana Token",
    };
  } else if (chainId === 2) {
    return {
      rpcTarget: "https://api.testnet.solana.com",
      blockExplorer: "https://explorer.solana.com?cluster=testnet",
      chainId: "0x2",
      chainNamespace,
      displayName: "testnet",
      ticker: "SOL",
      tickerName: "solana",
    };
  } else if (chainId === 3) {
    return {
      rpcTarget: "https://api.devnet.solana.com",
      blockExplorer: "https://explorer.solana.com?cluster=devnet",
      chainId: "0x3",
      chainNamespace,
      displayName: "devnet",
      ticker: "SOL",
      tickerName: "solana",
    };
  }

  return null;
};

export const getChainConfig = (chainNamespace: ChainNamespaceType, chainId?: number | string): CustomChainConfig | null => {
  if (chainNamespace === CHAIN_NAMESPACES.OTHER) return null;
  const finalChainId = chainId ? (typeof chainId === "number" ? chainId : parseInt(chainId, 16)) : getDefaultNetworkId(chainNamespace);
  if (chainNamespace === CHAIN_NAMESPACES.EIP155) {
    return getEvmChainConfig(finalChainId);
  } else if (chainNamespace === CHAIN_NAMESPACES.SOLANA) {
    return getSolanaChainConfig(finalChainId);
  }
  return null;
};

## `@web3auth/ethereum-provider`

[![npm version](https://img.shields.io/npm/v/@web3auth/ethereum-provider?label=%22%22)](https://www.npmjs.com/package/@web3auth/ethereum-provider/v/latest)
[![minzip](https://img.shields.io/bundlephobia/minzip/@web3auth/ethereum-provider?label=%22%22)](https://bundlephobia.com/result?p=@web3auth/ethereum-provider@latest)

EIP-1193 compatible JRPC provider

## Introduction:-

This package exposes a class `EthereumPrivateKeyProvider`, which accepts a `secp251k1` private key and returns `EIP1193` compatible provider, which can be used with various wallet sdks. For ex: `CustomAuth` and `Openlogin` sdk by torus.

---

## Usage:-

> Using Provider

```ts
import { EthereumPrivateKeyProvider } from "@web3auth/ethereum-provider";
import type { SafeEventEmitterProvider } from "@web3auth/base";
const signEthMessage = async (provider: SafeEventEmitterProvider): Promise<string> => {
  const web3 = new Web3(provider as any);
  const accounts = await web3.eth.getAccounts();
  // hex message
  const message = "0x47173285a8d7341e5e972fc677286384f802f8ef42a5ec5f03bbfa254cb01fad";
  const signature = await web3.eth.sign(message, accounts[0]);
  return signature;
};

(async () => {
  const provider = await EthereumPrivateKeyProvider.getProviderInstance({
    chainConfig: {
      rpcTarget: "https://polygon-rpc.com",
      chainId: "0x89", // hex chain id
      networkName: "matic",
      ticker: "matic",
      tickerName: "matic",
    },
    privKey: "4c0883a69102937d6231471b5dbb6204fe5129617082792ae468d01a3f362318",
  });
  const signedMessage = await signEthMessage(provider);
})();
```

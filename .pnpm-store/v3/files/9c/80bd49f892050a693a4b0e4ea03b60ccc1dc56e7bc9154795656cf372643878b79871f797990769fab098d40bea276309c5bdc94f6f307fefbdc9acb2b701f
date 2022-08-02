import type { AccessListEIP2930TxData, FeeMarketEIP1559TxData, TxData } from "@ethereumjs/tx";
import { MessageTypes, TypedDataV1, TypedMessage } from "@metamask/eth-sig-util";
import { createAsyncMiddleware, createScaffoldMiddleware, JRPCMiddleware, JRPCRequest, JRPCResponse } from "@toruslabs/openlogin-jrpc";
import { ethErrors } from "eth-rpc-errors";
export interface ExtendedAccessListEIP2930TxData extends AccessListEIP2930TxData {
  from: string;
}

export interface ExtendedFeeMarketEIP1559Transaction extends FeeMarketEIP1559TxData {
  from: string;
}

export interface ExtendedTxData extends TxData {
  from: string;
}

export type TransactionParams = ExtendedFeeMarketEIP1559Transaction & ExtendedAccessListEIP2930TxData & ExtendedTxData;

export interface MessageParams<T> {
  from: string;
  data: T;
}

export interface TypedMessageParams<T> {
  from: string;
  version: string;
  data: T;
}

function resemblesAddress(str: string): boolean {
  // hex prefix 2 + 20 bytes
  return str.length === 2 + 20 * 2;
}

export interface WalletMiddlewareOptions {
  getAccounts: (req: JRPCRequest<unknown>) => Promise<string[]>;
  getPrivateKey: (req: JRPCRequest<unknown>) => Promise<string>;
  processDecryptMessage?: (msgParams: MessageParams<string>, req: JRPCRequest<unknown>) => string;
  processEncryptionPublicKey?: (address: string, req: JRPCRequest<unknown>) => Promise<string>;
  processEthSignMessage?: (msgParams: MessageParams<string>, req: JRPCRequest<unknown>) => Promise<string>;
  processPersonalMessage?: (msgParams: MessageParams<string>, req: JRPCRequest<unknown>) => Promise<string>;
  processTransaction?: (txParams: TransactionParams, req: JRPCRequest<unknown>) => Promise<string>;
  processSignTransaction?: (txParams: TransactionParams, req: JRPCRequest<unknown>) => Promise<string>;
  processTypedMessage?: (msgParams: MessageParams<TypedDataV1>, req: JRPCRequest<unknown>, version: string) => Promise<string>;
  processTypedMessageV3?: (msgParams: TypedMessageParams<TypedMessage<MessageTypes>>, req: JRPCRequest<unknown>, version: string) => Promise<string>;
  processTypedMessageV4?: (msgParams: TypedMessageParams<TypedMessage<MessageTypes>>, req: JRPCRequest<unknown>, version: string) => Promise<string>;
}

export function createWalletMiddleware({
  getAccounts,
  getPrivateKey,
  processDecryptMessage,
  processEncryptionPublicKey,
  processEthSignMessage,
  processPersonalMessage,
  processTransaction,
  processSignTransaction,
  processTypedMessage,
  processTypedMessageV3,
  processTypedMessageV4,
}: WalletMiddlewareOptions): JRPCMiddleware<string, unknown> {
  if (!getAccounts) {
    throw new Error("opts.getAccounts is required");
  }

  //
  // utility
  //

  /**
   * Validates the keyholder address, and returns a normalized (i.e. lowercase)
   * copy of it.
   *
   * an error
   */
  async function validateAndNormalizeKeyholder(address: string, req: JRPCRequest<unknown>): Promise<string> {
    if (typeof address === "string" && address.length > 0) {
      // ensure address is included in provided accounts
      const accounts: string[] = await getAccounts(req);
      const normalizedAccounts: string[] = accounts.map((_address) => _address.toLowerCase());
      const normalizedAddress: string = address.toLowerCase();

      if (normalizedAccounts.includes(normalizedAddress)) {
        return normalizedAddress;
      }
    }
    throw ethErrors.rpc.invalidParams({
      message: `Invalid parameters: must provide an Ethereum address.`,
    });
  }

  //
  // account lookups
  //

  async function lookupAccounts(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    res.result = await getAccounts(req);
  }

  async function lookupDefaultAccount(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    const accounts = await getAccounts(req);
    res.result = accounts[0] || null;
  }

  //
  // transaction signatures
  //

  async function sendTransaction(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processTransaction) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const txParams: TransactionParams = (req.params as TransactionParams[])[0] || {
      from: "",
    };
    txParams.from = await validateAndNormalizeKeyholder(txParams.from as string, req);
    res.result = await processTransaction(txParams, req);
  }

  async function signTransaction(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processSignTransaction) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const txParams: TransactionParams = (req.params as TransactionParams[])[0] || {
      from: "",
    };
    txParams.from = await validateAndNormalizeKeyholder(txParams.from as string, req);
    res.result = await processSignTransaction(txParams, req);
  }

  //
  // message signatures
  //

  async function ethSign(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processEthSignMessage) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const address: string = await validateAndNormalizeKeyholder((req.params as string[])[0], req);
    const message: string = (req.params as string[])[1];
    const extraParams: Record<string, unknown> = (req.params as Record<string, unknown>[])[2] || {};
    const msgParams: MessageParams<string> = {
      ...extraParams,
      from: address,
      data: message,
    };

    res.result = await processEthSignMessage(msgParams, req);
  }

  async function signTypedData(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processTypedMessage) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const message: TypedDataV1 = (req.params as TypedDataV1[])[0];
    const address: string = await validateAndNormalizeKeyholder((req.params as string[])[1], req);
    const version = "V1";
    const extraParams: Record<string, unknown> = (req.params as Record<string, unknown>[])[2] || {};
    const msgParams: MessageParams<TypedDataV1> = {
      ...extraParams,
      from: address,
      data: message,
    };

    res.result = await processTypedMessage(msgParams, req, version);
  }

  async function signTypedDataV3(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processTypedMessageV3) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const address: string = await validateAndNormalizeKeyholder((req.params as string[])[0], req);
    const message: TypedMessage<MessageTypes> = (req.params as TypedMessage<MessageTypes>[])[1];
    const version = "V3";
    const msgParams: TypedMessageParams<TypedMessage<MessageTypes>> = {
      data: message,
      from: address,
      version,
    };

    res.result = await processTypedMessageV3(msgParams, req, version);
  }

  async function signTypedDataV4(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processTypedMessageV4) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const address: string = await validateAndNormalizeKeyholder((req.params as string[])[0], req);
    const message: TypedMessage<MessageTypes> = (req.params as TypedMessage<MessageTypes>[])[1];
    const version = "V4";
    const msgParams: TypedMessageParams<TypedMessage<MessageTypes>> = {
      data: message,
      from: address,
      version,
    };

    res.result = await processTypedMessageV4(msgParams, req, version);
  }

  async function personalSign(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processPersonalMessage) {
      throw ethErrors.rpc.methodNotSupported();
    }

    // process normally
    const firstParam: string = (req.params as string[])[0];
    const secondParam: string = (req.params as string[])[1];
    // non-standard "extraParams" to be appended to our "msgParams" obj
    const extraParams: Record<string, unknown> = (req.params as Record<string, unknown>[])[2] || {};

    // We initially incorrectly ordered these parameters.
    // To gracefully respect users who adopted this API early,
    // we are currently gracefully recovering from the wrong param order
    // when it is clearly identifiable.
    //
    // That means when the first param is definitely an address,
    // and the second param is definitely not, but is hex.
    let address: string, message: string;
    if (resemblesAddress(firstParam) && !resemblesAddress(secondParam)) {
      let warning = `The eth_personalSign method requires params ordered `;
      warning += `[message, address]. This was previously handled incorrectly, `;
      warning += `and has been corrected automatically. `;
      warning += `Please switch this param order for smooth behavior in the future.`;
      (res as any).warning = warning;

      address = firstParam;
      message = secondParam;
    } else {
      message = firstParam;
      address = secondParam;
    }
    address = await validateAndNormalizeKeyholder(address, req);

    const msgParams: MessageParams<string> = {
      ...extraParams,
      from: address,
      data: message,
    };

    // eslint-disable-next-line require-atomic-updates
    res.result = await processPersonalMessage(msgParams, req);
  }

  async function encryptionPublicKey(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processEncryptionPublicKey) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const address: string = await validateAndNormalizeKeyholder((req.params as string)[0], req);

    res.result = await processEncryptionPublicKey(address, req);
  }

  async function decryptMessage(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!processDecryptMessage) {
      throw ethErrors.rpc.methodNotSupported();
    }

    const ciphertext: string = (req.params as string)[0];
    const address: string = await validateAndNormalizeKeyholder((req.params as string)[1], req);
    const extraParams: Record<string, unknown> = (req.params as Record<string, unknown>[])[2] || {};
    const msgParams: MessageParams<string> = {
      ...extraParams,
      from: address,
      data: ciphertext,
    };

    res.result = processDecryptMessage(msgParams, req);
  }

  async function fetchPrivateKey(req: JRPCRequest<unknown>, res: JRPCResponse<unknown>): Promise<void> {
    if (!getPrivateKey) {
      throw ethErrors.rpc.methodNotSupported();
    }
    res.result = getPrivateKey(req);
  }

  return createScaffoldMiddleware({
    // account lookups
    eth_accounts: createAsyncMiddleware(lookupAccounts),
    eth_private_key: createAsyncMiddleware(fetchPrivateKey),
    eth_coinbase: createAsyncMiddleware(lookupDefaultAccount),
    // tx signatures
    eth_sendTransaction: createAsyncMiddleware(sendTransaction),
    eth_signTransaction: createAsyncMiddleware(signTransaction),
    // message signatures
    eth_sign: createAsyncMiddleware(ethSign),
    eth_signTypedData: createAsyncMiddleware(signTypedData),
    eth_signTypedData_v3: createAsyncMiddleware(signTypedDataV3),
    eth_signTypedData_v4: createAsyncMiddleware(signTypedDataV4),
    personal_sign: createAsyncMiddleware(personalSign),
    eth_getEncryptionPublicKey: createAsyncMiddleware(encryptionPublicKey),
    eth_decrypt: createAsyncMiddleware(decryptMessage),
  });
}

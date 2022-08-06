import type { AccessListEIP2930TxData, FeeMarketEIP1559TxData, TxData } from "@ethereumjs/tx";
import { MessageTypes, TypedDataV1, TypedMessage } from "@metamask/eth-sig-util";
import { JRPCMiddleware, JRPCRequest } from "@toruslabs/openlogin-jrpc";
export interface ExtendedAccessListEIP2930TxData extends AccessListEIP2930TxData {
    from: string;
}
export interface ExtendedFeeMarketEIP1559Transaction extends FeeMarketEIP1559TxData {
    from: string;
}
export interface ExtendedTxData extends TxData {
    from: string;
}
export declare type TransactionParams = ExtendedFeeMarketEIP1559Transaction & ExtendedAccessListEIP2930TxData & ExtendedTxData;
export interface MessageParams<T> {
    from: string;
    data: T;
}
export interface TypedMessageParams<T> {
    from: string;
    version: string;
    data: T;
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
export declare function createWalletMiddleware({ getAccounts, getPrivateKey, processDecryptMessage, processEncryptionPublicKey, processEthSignMessage, processPersonalMessage, processTransaction, processSignTransaction, processTypedMessage, processTypedMessageV3, processTypedMessageV4, }: WalletMiddlewareOptions): JRPCMiddleware<string, unknown>;

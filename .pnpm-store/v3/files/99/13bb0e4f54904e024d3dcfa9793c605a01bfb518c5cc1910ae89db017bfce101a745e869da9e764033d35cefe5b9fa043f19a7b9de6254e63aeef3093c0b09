/// <reference types="node" />
import { BigNumber } from "bignumber.js";
import { TransactionMeta } from "../Transaction/ITransactionController";
/**
 * General utility functions
 */
export declare function intToHex(i: number): string;
/**
 * Returns a random number. Don't use for cryptographic purposes.
 * @returns a random number
 */
export declare const randomId: () => string;
/**
 * Pads the front of the given hex string with zeroes until it reaches the
 * target length. If the input string is already longer than or equal to the
 * target length, it is returned unmodified.
 *
 * If the input string is "0x"-prefixed or not a hex string, an error will be
 * thrown.
 *
 * @param hexString - The hexadecimal string to pad with zeroes.
 * @param targetLength - The target length of the hexadecimal string.
 * @returns The input string front-padded with zeroes, or the original string
 * if it was already greater than or equal to to the target length.
 */
export declare function padWithZeroes(hexString: string, targetLength: number): string;
/**
 * Concatenate an extended ECDSA signature into a hex string.
 *
 * @param v - The 'v' portion of the signature.
 * @param r - The 'r' portion of the signature.
 * @param s - The 's' portion of the signature.
 * @returns The concatenated ECDSA signature.
 */
export declare function concatSig(v: Buffer, r: Buffer, s: Buffer): string;
export declare function timeout(duration: number): Promise<void>;
export declare const getHeaders: (jwt: string) => {
    headers: {
        Authorization: string;
        "Content-Type": string;
    };
};
/**
 * Text/number formatting utilities
 */
export declare const formatSmallNumbers: (number: number, currency?: string, noTilde?: boolean) => string;
export declare const addressSlicer: (address: string, sliceLength?: number) => string;
export declare const significantDigits: (number: number | BigNumber, perc?: boolean, length_?: number) => number | BigNumber;
export declare const formatDate: (inputDate: string) => string;
export declare const formatTime: (time: string) => string;
/**
 * Network utilities
 */
export declare const transactionMatchesNetwork: <T>(transaction: TransactionMeta<T>, chainId: string) => boolean;
/**
 * Signing utils
 */
export declare const hashMessage: (message: string) => Buffer;
export declare const signMessage: (privateKey: string, data: string) => string;
/**
 * popup handler utils
 */
export declare function getPopupFeatures({ width: w, height: h }: {
    width: number;
    height: number;
}): string;
export declare const broadcastChannelOptions: {
    webWorkerSupport: boolean;
};
export declare function getCustomDeviceInfo(): Record<string, string> | undefined;
export declare class UserError extends Error {
}
export declare const handleRedirectParameters: (hash: string, queryParameters: Record<string, string>) => {
    error: string;
    instanceParameters: Record<string, string>;
    hashParameters: Record<string, string>;
};
export declare function sleep<T>(ms: number): Promise<T>;

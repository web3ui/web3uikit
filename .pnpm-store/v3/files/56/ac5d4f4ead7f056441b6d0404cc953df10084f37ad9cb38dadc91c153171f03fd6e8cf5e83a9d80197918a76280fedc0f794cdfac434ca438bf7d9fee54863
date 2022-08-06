import { BigNumber } from "bignumber.js";
import { addHexPrefix, bufferToInt, ecsign, fromSigned, hashPersonalMessage, intToBuffer, stripHexPrefix, toUnsigned } from "ethereumjs-util";

import { TransactionMeta } from "../Transaction/ITransactionController";

/**
 * General utility functions
 */

export function intToHex(i: number): string {
  const hex = i.toString(16);
  return `0x${hex}`;
}

/**
 * Returns a random number. Don't use for cryptographic purposes.
 * @returns a random number
 */
export const randomId = (): string => Math.random().toString(36).slice(2);

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
export function padWithZeroes(hexString: string, targetLength: number): string {
  if (hexString !== "" && !/^[a-f0-9]+$/iu.test(hexString)) {
    throw new Error(`Expected an unprefixed hex string. Received: ${hexString}`);
  }

  if (targetLength < 0) {
    throw new Error(`Expected a non-negative integer target length. Received: ${targetLength}`);
  }

  return String.prototype.padStart.call(hexString, targetLength, "0");
}
/**
 * Concatenate an extended ECDSA signature into a hex string.
 *
 * @param v - The 'v' portion of the signature.
 * @param r - The 'r' portion of the signature.
 * @param s - The 's' portion of the signature.
 * @returns The concatenated ECDSA signature.
 */
export function concatSig(v: Buffer, r: Buffer, s: Buffer): string {
  const rSig = fromSigned(r);
  const sSig = fromSigned(s);
  const vSig = bufferToInt(v);
  const rStr = padWithZeroes(toUnsigned(rSig).toString("hex"), 64);
  const sStr = padWithZeroes(toUnsigned(sSig).toString("hex"), 64);
  const vStr = stripHexPrefix(intToHex(vSig));
  return addHexPrefix(rStr.concat(sStr, vStr));
}

export function timeout(duration: number): Promise<void> {
  return new Promise((resolve) => {
    const timeoutRef = window.setTimeout(() => {
      resolve();
      window.clearTimeout(timeoutRef);
    }, duration);
  });
}

export const getHeaders = (jwt: string) => {
  return {
    headers: {
      Authorization: `Bearer ${jwt}`,
      "Content-Type": "application/json; charset=utf-8",
    },
  };
};

/**
 * Text/number formatting utilities
 */
export const formatSmallNumbers = (number: number, currency = "usd", noTilde = false): string => {
  const finalNumber = BigNumber.isBigNumber(number) ? number.toNumber() : number;
  if (!Number.isFinite(finalNumber)) return "";
  const value = currency.toLowerCase() === "usd" ? parseFloat(Number(finalNumber).toFixed(2)) : parseFloat(Number(finalNumber).toFixed(5));
  const tilde = value > 0 ? "~ " : "";
  return `${currency.toLowerCase() === "usd" || noTilde ? "" : tilde}${Number(value)} ${currency.toUpperCase()}`;
};

export const addressSlicer = (address: string, sliceLength = 5): string => {
  if (address.length < 11) {
    return address;
  }
  if (typeof address !== "string") return "";
  return `${address.slice(0, sliceLength)}...${address.slice(-sliceLength)}`;
};

export const significantDigits = (number: number | BigNumber, perc = false, length_ = 2): number | BigNumber => {
  let input = !BigNumber.isBigNumber(number) ? new BigNumber(number) : number;
  if (input.isZero()) return input;
  if (perc) {
    input = input.times(new BigNumber(100));
  }
  let depth;
  if (input.gte(new BigNumber(1))) {
    depth = length_;
  } else {
    depth = length_ - 1 + Math.ceil(Math.log10(new BigNumber("1").div(input).toNumber()));
  }
  const shift = new BigNumber(10).pow(new BigNumber(depth));
  const roundedNumber = Math.round(shift.times(input).toNumber()) / shift.toNumber();
  return roundedNumber;
};
export const formatDate = (inputDate: string): string => {
  const monthList = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
  const date = new Date(inputDate);
  const day = date.getDate();
  const month = monthList[date.getMonth()];
  const year = date.getFullYear();
  return `${day} ${month} ${year}`;
};

export const formatTime = (time: string): string => {
  return new Date(time).toTimeString().slice(0, 8);
};

/**
 * Network utilities
 */
export const transactionMatchesNetwork = <T>(transaction: TransactionMeta<T>, chainId: string): boolean => {
  if (typeof transaction.chainId !== "undefined") {
    return transaction.chainId === chainId;
  }
  return false;
};

/**
 * Signing utils
 */
export const hashMessage = (message: string): Buffer => {
  const bufferedMessage = Buffer.from(message, "utf8");
  const el = hashPersonalMessage(bufferedMessage);
  return el;
};

export const signMessage = (privateKey: string, data: string): string => {
  const privKey = Buffer.from(privateKey, "hex");
  const message = stripHexPrefix(data);
  const msgSig = ecsign(Buffer.from(message, "hex"), privKey);
  const rawMsgSig = concatSig(intToBuffer(msgSig.v), msgSig.r, msgSig.s);
  return rawMsgSig;
};

/**
 * popup handler utils
 */
export function getPopupFeatures({ width: w, height: h }: { width: number; height: number }): string {
  // Fixes dual-screen position                             Most browsers      Firefox
  const dualScreenLeft = window.screenLeft !== undefined ? window.screenLeft : window.screenX;
  const dualScreenTop = window.screenTop !== undefined ? window.screenTop : window.screenY;

  const width = window.innerWidth
    ? window.innerWidth
    : document.documentElement.clientWidth
    ? document.documentElement.clientWidth
    : window.screen.width;

  const height = window.innerHeight
    ? window.innerHeight
    : document.documentElement.clientHeight
    ? document.documentElement.clientHeight
    : window.screen.height;

  const systemZoom = 1; // No reliable estimate

  const left = Math.abs((width - w) / 2 / systemZoom + dualScreenLeft);
  const top = Math.abs((height - h) / 2 / systemZoom + dualScreenTop);
  const features = `titlebar=0,toolbar=0,status=0,location=0,menubar=0,height=${h / systemZoom},width=${w / systemZoom},top=${top},left=${left}`;
  return features;
}

export const broadcastChannelOptions = {
  // type: 'localstorage', // (optional) enforce a type, oneOf['native', 'idb', 'localstorage', 'node']
  webWorkerSupport: false, // (optional) set this to false if you know that your channel will never be used in a WebWorker (increases performance)
};

export function getCustomDeviceInfo(): Record<string, string> | undefined {
  if ((navigator as any)?.brave) {
    return {
      browser: "Brave",
    };
  }
}
export class UserError extends Error {}

export const handleRedirectParameters = (
  hash: string,
  queryParameters: Record<string, string>
): { error: string; instanceParameters: Record<string, string>; hashParameters: Record<string, string> } => {
  const hashParameters: Record<string, string> = {};
  const hashUrl = new URL(`${window.location.origin}/?${hash.slice(1)}`);
  hashUrl.searchParams.forEach((value, key) => {
    hashParameters[key] = value;
  });
  let instanceParameters = {};
  let error = "";
  if (!queryParameters.windowId) {
    if (Object.keys(hashParameters).length > 0 && hashParameters.state) {
      instanceParameters = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(hashParameters.state)))) || {};
      error = hashParameters.error_description || hashParameters.error || error;
    } else if (Object.keys(queryParameters).length > 0 && queryParameters.state) {
      instanceParameters = JSON.parse(window.atob(decodeURIComponent(decodeURIComponent(queryParameters.state)))) || {};
      if (queryParameters.error) error = queryParameters.error;
    }
  }
  return { error, instanceParameters, hashParameters };
};

export function sleep<T>(ms: number): Promise<T> {
  return new Promise<T>((resolve) => setTimeout(resolve, ms));
}

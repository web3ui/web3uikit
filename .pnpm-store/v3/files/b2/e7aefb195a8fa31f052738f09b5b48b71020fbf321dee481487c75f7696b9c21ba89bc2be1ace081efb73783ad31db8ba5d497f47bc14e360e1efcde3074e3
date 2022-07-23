import { BigNumber } from "bignumber.js";
import { addHexPrefix, stripHexPrefix } from "ethereumjs-util";

export function bnLessThan(a, b) {
  if (a === null || a === undefined || b === null || b === undefined) {
    return null;
  }
  return new BigNumber(a, 10).lt(b, 10);
}

export function bnToHex(inputBn: BigNumber) {
  return addHexPrefix(inputBn.toString(16));
}

export function hexToBn(inputHex: string): BigNumber {
  if (BigNumber.isBigNumber(inputHex)) return inputHex;
  return new BigNumber(stripHexPrefix(inputHex), 16);
}

export function BnMultiplyByFraction(targetBN: BigNumber, numerator: number | BigNumber, denominator: number | BigNumber): BigNumber {
  const numberBN = new BigNumber(numerator);
  const denomBN = new BigNumber(denominator);
  return targetBN.multipliedBy(numberBN).dividedBy(denomBN);
}

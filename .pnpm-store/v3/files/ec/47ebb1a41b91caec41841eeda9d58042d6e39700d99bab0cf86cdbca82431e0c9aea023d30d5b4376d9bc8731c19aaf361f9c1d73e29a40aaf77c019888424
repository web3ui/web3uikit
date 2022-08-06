import BigNumber from "bignumber.js";
import { stripHexPrefix } from "ethereumjs-util";

type DenominationType = "WEI" | "GWEI" | "ETH";
type NumericBaseType = "hex" | "dec";

type ConverterInput = {
  value: string | BigNumber;
  fromNumericBase: NumericBaseType;
  fromDenomination?: DenominationType;
  toNumericBase?: NumericBaseType;
  toDenomination?: DenominationType;
  numberOfDecimals?: number;
};
// Big Number Constants
const BIG_NUMBER_WEI_MULTIPLIER = new BigNumber("1e18");
const BIG_NUMBER_GWEI_MULTIPLIER = new BigNumber("1e9");
const BIG_NUMBER_ETH_MULTIPLIER = new BigNumber("1");

// Setter Maps
const toBigNumber: Record<NumericBaseType, (n: string | BigNumber) => BigNumber> = {
  hex: (n: string | BigNumber) => (typeof n === "string" ? new BigNumber(stripHexPrefix(n), 16) : new BigNumber(n, 16)),
  dec: (n: string | BigNumber) => new BigNumber(n, 10),
};
const toNormalizedDenomination: Record<string, (n: BigNumber) => BigNumber> = {
  WEI: (bigNumber) => bigNumber.div(BIG_NUMBER_WEI_MULTIPLIER),
  GWEI: (bigNumber) => bigNumber.div(BIG_NUMBER_GWEI_MULTIPLIER),
  ETH: (bigNumber) => bigNumber.div(BIG_NUMBER_ETH_MULTIPLIER),
};
const toSpecifiedDenomination: Record<string, (n: BigNumber) => BigNumber> = {
  WEI: (bigNumber) => bigNumber.times(BIG_NUMBER_WEI_MULTIPLIER).dp(0, BigNumber.ROUND_HALF_UP),
  GWEI: (bigNumber) => bigNumber.times(BIG_NUMBER_GWEI_MULTIPLIER).dp(9, BigNumber.ROUND_HALF_UP),
  ETH: (bigNumber) => bigNumber.times(BIG_NUMBER_ETH_MULTIPLIER).dp(9, BigNumber.ROUND_HALF_UP),
};
const baseChange: Record<string, (n: BigNumber) => string> = {
  hex: (n) => n.toString(16),
  dec: (n) => new BigNumber(n).toString(10),
};

const converter = (params: ConverterInput): string | BigNumber => {
  const { value, fromNumericBase, fromDenomination, toNumericBase, toDenomination, numberOfDecimals } = params;
  let convertedValue: string | BigNumber = toBigNumber[fromNumericBase](value);

  if (fromDenomination) {
    convertedValue = toNormalizedDenomination[fromDenomination](convertedValue as BigNumber);
  }

  if (toDenomination) {
    convertedValue = toSpecifiedDenomination[toDenomination](convertedValue as BigNumber);
  }

  if (numberOfDecimals) {
    convertedValue = (convertedValue as BigNumber).dp(numberOfDecimals, BigNumber.ROUND_HALF_DOWN);
  }

  if (toNumericBase) {
    convertedValue = baseChange[toNumericBase](convertedValue);
  }
  return convertedValue;
};

const conversionUtil = (
  value: string | BigNumber,
  { fromNumericBase = "hex", toNumericBase, fromDenomination, toDenomination, numberOfDecimals }: Partial<ConverterInput>
): BigNumber | string => {
  return converter({
    fromNumericBase,
    toNumericBase,
    fromDenomination,
    toDenomination,
    numberOfDecimals,
    value: value || "0",
  });
};

function decGWEIToHexWEI(decGWEI: string | BigNumber): string {
  return conversionUtil(decGWEI, {
    fromNumericBase: "dec",
    toNumericBase: "hex",
    fromDenomination: "GWEI",
    toDenomination: "WEI",
  }) as string;
}

function hexWEIToDecGWEI(decGWEI: string | BigNumber): string {
  return conversionUtil(decGWEI, {
    fromNumericBase: "hex",
    toNumericBase: "dec",
    fromDenomination: "WEI",
    toDenomination: "GWEI",
  }) as string;
}

export { conversionUtil, decGWEIToHexWEI, hexWEIToDecGWEI };

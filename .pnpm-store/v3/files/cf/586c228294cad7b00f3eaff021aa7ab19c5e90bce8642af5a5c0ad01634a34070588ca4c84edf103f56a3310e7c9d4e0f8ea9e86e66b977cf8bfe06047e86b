import BigNumber from "bignumber.js";
declare type DenominationType = "WEI" | "GWEI" | "ETH";
declare type NumericBaseType = "hex" | "dec";
declare type ConverterInput = {
    value: string | BigNumber;
    fromNumericBase: NumericBaseType;
    fromDenomination?: DenominationType;
    toNumericBase?: NumericBaseType;
    toDenomination?: DenominationType;
    numberOfDecimals?: number;
};
declare const conversionUtil: (value: string | BigNumber, { fromNumericBase, toNumericBase, fromDenomination, toDenomination, numberOfDecimals }: Partial<ConverterInput>) => BigNumber | string;
declare function decGWEIToHexWEI(decGWEI: string | BigNumber): string;
declare function hexWEIToDecGWEI(decGWEI: string | BigNumber): string;
export { conversionUtil, decGWEIToHexWEI, hexWEIToDecGWEI };

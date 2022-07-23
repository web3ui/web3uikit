import { BigNumber } from "bignumber.js";
import { EIP1159GasData, LegacyGasData } from "./interfaces";
export declare function normalizeGWEIDecimalNumbers(n: string | BigNumber): string;
export declare function fetchEip1159GasEstimates(url: string): Promise<EIP1159GasData>;
/**
 * Hit the legacy MetaSwaps gasPrices estimate api and return the low, medium
 * high values from that API.
 */
export declare function fetchLegacyGasPriceEstimates(url: string): Promise<LegacyGasData>;

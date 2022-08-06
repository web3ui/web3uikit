import { GAS_ESTIMATE_TYPES, TRANSACTION_TYPES } from "./constants";
export declare type LegacyGasData = {
    low: string;
    medium: string;
    high: string;
};
export declare type EIP1559GasDataItem = {
    suggestedMaxPriorityFeePerGas: string;
    suggestedMaxFeePerGas: string;
    minWaitTimeEstimate: number;
    maxWaitTimeEstimate: number;
};
export declare type EIP1159GasData = {
    low: EIP1559GasDataItem;
    medium: EIP1559GasDataItem;
    high: EIP1559GasDataItem;
    estimatedBaseFee: string;
    networkCongestion: number;
    latestPriorityFeeRange: string[];
    historicalPriorityFeeRange: string[];
    historicalBaseFeeRange: string[];
    priorityFeeTrend: string;
    baseFeeTrend: string;
};
export declare type FallbackGasData = {
    gasPrice: string;
};
export declare type TxType = typeof TRANSACTION_TYPES[keyof typeof TRANSACTION_TYPES];
export declare type GasType = typeof GAS_ESTIMATE_TYPES[keyof typeof GAS_ESTIMATE_TYPES];
export declare type GasData = {
    gasEstimateType: string;
    gasFeeEstimates: LegacyGasData | EIP1159GasData | FallbackGasData;
};

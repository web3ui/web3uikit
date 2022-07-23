import { GAS_ESTIMATE_TYPES, TRANSACTION_TYPES } from "./constants";

export type LegacyGasData = {
  low: string;
  medium: string;
  high: string;
};

export type EIP1559GasDataItem = {
  suggestedMaxPriorityFeePerGas: string;
  suggestedMaxFeePerGas: string;
  minWaitTimeEstimate: number;
  maxWaitTimeEstimate: number;
};

export type EIP1159GasData = {
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

export type FallbackGasData = {
  gasPrice: string;
};

export type TxType = typeof TRANSACTION_TYPES[keyof typeof TRANSACTION_TYPES];

export type GasType = typeof GAS_ESTIMATE_TYPES[keyof typeof GAS_ESTIMATE_TYPES];

export type GasData = {
  gasEstimateType: string;
  gasFeeEstimates: LegacyGasData | EIP1159GasData | FallbackGasData;
};

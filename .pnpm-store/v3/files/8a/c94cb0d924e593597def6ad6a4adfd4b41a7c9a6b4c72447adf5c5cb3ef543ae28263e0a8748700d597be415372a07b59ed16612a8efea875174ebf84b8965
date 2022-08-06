import { BaseConfig, BaseState } from "../interfaces";

export interface BaseCurrencyControllerState extends BaseState {
  currentCurrency: string;
  conversionRate: number;
  conversionDate: string;
  nativeCurrency: string;
  ticker: string;
}

export interface BaseCurrencyControllerConfig extends BaseConfig {
  pollInterval: number;
  api: string;
}

import BaseController from "../BaseController";
import { BaseCurrencyControllerConfig, BaseCurrencyControllerState } from "./ICurrencyController";
export declare class BaseCurrencyController<C extends BaseCurrencyControllerConfig, S extends BaseCurrencyControllerState> extends BaseController<C, S> {
    constructor({ config, state }: {
        config: Partial<C>;
        state?: Partial<S>;
    });
    getNativeCurrency(): string;
    setNativeCurrency(nativeCurrency: string): void;
    getCurrentCurrency(): string;
    setCurrentCurrency(currentCurrency: string): void;
    /**
     * A getter for the conversionRate property
     *
     * @returns The conversion rate from ETH to the selected currency.
     *
     */
    getConversionRate(): number;
    setConversionRate(conversionRate: number): void;
    /**
     * A getter for the conversionDate property
     *
     * @returns The date at which the conversion rate was set. Expressed in milliseconds since midnight of
     * January 1, 1970
     *
     */
    getConversionDate(): string;
    setConversionDate(conversionDate: string): void;
}

import BaseController from "../BaseController";
import { BaseCurrencyControllerConfig, BaseCurrencyControllerState } from "./ICurrencyController";

// every ten minutes
const POLLING_INTERVAL = 600_000;

export class BaseCurrencyController<C extends BaseCurrencyControllerConfig, S extends BaseCurrencyControllerState> extends BaseController<C, S> {
  constructor({ config = {}, state }: { config: Partial<C>; state?: Partial<S> }) {
    super({ config, state });
    this.defaultState = {
      currentCurrency: "usd",
      conversionRate: 0,
      conversionDate: "N/A",
      nativeCurrency: "ETH",
    } as S;

    this.defaultConfig = {
      pollInterval: POLLING_INTERVAL,
    } as C;
    this.initialize();
  }

  //
  // PUBLIC METHODS
  //

  public getNativeCurrency(): string {
    return this.state.nativeCurrency;
  }

  public setNativeCurrency(nativeCurrency: string): void {
    this.update({
      nativeCurrency,
      ticker: nativeCurrency,
    } as S);
  }

  public getCurrentCurrency(): string {
    return this.state.currentCurrency;
  }

  public setCurrentCurrency(currentCurrency: string): void {
    this.update({ currentCurrency } as S);
  }

  /**
   * A getter for the conversionRate property
   *
   * @returns The conversion rate from ETH to the selected currency.
   *
   */
  public getConversionRate(): number {
    return this.state.conversionRate;
  }

  public setConversionRate(conversionRate: number): void {
    this.update({ conversionRate } as S);
  }

  /**
   * A getter for the conversionDate property
   *
   * @returns The date at which the conversion rate was set. Expressed in milliseconds since midnight of
   * January 1, 1970
   *
   */
  public getConversionDate(): string {
    return this.state.conversionDate;
  }

  public setConversionDate(conversionDate: string): void {
    this.update({ conversionDate } as S);
  }
}

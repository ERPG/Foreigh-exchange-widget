export enum Currencies {
  EUR = 'EUR',
  USD = 'USD',
  GBP = 'GBP',
}

export type Rates<R> = { [key in keyof typeof Currencies]: R };

export type CurrencyRate<T> = { currency: Currencies; rate: T };

export interface IForeighRatesPayload {
  base: Currencies;
  rates: Rates<string>;
}

export class ForeighRates {
  private readonly _base: Currencies;
  private readonly _rates: Rates<string>;

  constructor(foreighRates: IForeighRatesPayload) {
    this._rates = foreighRates.rates;
    this._base = foreighRates.base;
  }

  get base(): Currencies {
    return this._base;
  }

  get rates(): Rates<string> {
    return this._rates;
  }

  public getExchangeRatesArr() {
    let newRatesArr: CurrencyRate<number>[] = [];
    for (const key in this._rates) {
      newRatesArr.push({
        currency: key as Currencies,
        // == CAMBIAR EL ANY ==
        rate: (this._rates as any)[key],
      });
    }
    return newRatesArr;
  }
}

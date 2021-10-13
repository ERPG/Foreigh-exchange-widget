import { Currencies } from '../models/ForeighRates';

const host = 'https://api.exchangerate.host';

export const ExchangeRate = (base: Currencies, currencies: string[]) =>
  `${host}/latest?base=${base}&symbols=${currencies.toString()}`;

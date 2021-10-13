import axios, { AxiosResponse } from 'axios';
import {
  Currencies,
  ForeighRates,
  IForeighRatesPayload,
} from '../models/ForeighRates';
import { ExchangeRate } from './endpoints';

export const fetchForeighRates = async (
  base: Currencies,
  currencies: string[]
): Promise<ForeighRates> => {
  try {
    const response: AxiosResponse<IForeighRatesPayload> = await axios.get(
      ExchangeRate(base, currencies)
    );
    if (response?.data) {
      return new ForeighRates(response.data);
    }
    throw new Error();
  } catch (e) {
    throw new Error();
  }
};

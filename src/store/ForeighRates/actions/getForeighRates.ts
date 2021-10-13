import { Dispatch } from 'react';
import { Currencies, ForeighRates } from '../../../models/ForeighRates';
import { fetchForeighRates } from '../../../services/ForeighExchangeAPI';
import {
  ForeighRatesActionTypes,
  GenerateForeighRatesErrorAction,
  GENERETATE_FOREIGH_RATES_ERROR,
  GetForeighRatesAction,
  GET_FOREIGH_RATES,
} from '../types';

export const defaultBase = Currencies.EUR;
// export const defaultCurrencies = (currencies: Currencies) => Object.keys(currencies);
export const defaultCurrencies = ['EUR', 'USD', 'GBP'];

export function getForeighRates(
  base: Currencies = Currencies.EUR,
  currencies: string[] = defaultCurrencies
): (dispatch: Dispatch<ForeighRatesActionTypes>) => void {
  return async (dispatch: Dispatch<ForeighRatesActionTypes>) => {
    try {
      const foreighRates: ForeighRates = await fetchForeighRates(
        base,
        currencies
      );
      dispatch(receiveForeighRates(foreighRates));
    } catch (error: any) {
      dispatch(receiveForeighRatesWithError(error));
    }
  };
}

const receiveForeighRates = (
  ForeighRates: ForeighRates
): GetForeighRatesAction => {
  return {
    type: GET_FOREIGH_RATES,
    payload: ForeighRates,
  };
};

const receiveForeighRatesWithError = (
  error: Error
): GenerateForeighRatesErrorAction => {
  return {
    type: GENERETATE_FOREIGH_RATES_ERROR,
    error: error,
  };
};

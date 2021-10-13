import { ForeighRates } from '../../models/ForeighRates';

export const GET_FOREIGH_RATES = 'GET_FOREIGH_RATES';
export const GENERETATE_FOREIGH_RATES_ERROR = 'GENERETATE_FOREIGH_RATES_ERROR';

export interface GetForeighRatesAction {
  type: typeof GET_FOREIGH_RATES;
  payload: ForeighRates;
}

export interface GenerateForeighRatesErrorAction {
  type: typeof GENERETATE_FOREIGH_RATES_ERROR;
  error: Error;
}

export type ForeighRatesActionTypes =
  | GetForeighRatesAction
  | GenerateForeighRatesErrorAction;

import { AppState } from '..';
import { ForeighRates } from '../../models/ForeighRates';
import {
  ForeighRatesActionTypes,
  GENERETATE_FOREIGH_RATES_ERROR,
  GET_FOREIGH_RATES,
} from './types';

export interface IForeighRatesState {
  item?: ForeighRates;
  error?: Error;
}

export const INITIAL_STATE: IForeighRatesState = { item: undefined };

export function ForeighRatesReducer(
  state = INITIAL_STATE,
  action: ForeighRatesActionTypes
): IForeighRatesState {
  switch (action.type) {
    case GET_FOREIGH_RATES:
      return { ...state, item: action.payload };
    case GENERETATE_FOREIGH_RATES_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
}

export const selectForeighRates = (state: AppState): ForeighRates | undefined =>
  state.item;

import { ForeighRatesReducer, IForeighRatesState } from '../reducer';
import { foreighExchangeInstance } from '../../../../__tests__/__fixtures__/generateAppStateMock';
import { GetForeighRatesAction, GET_FOREIGH_RATES } from '../types';

describe('Foreigh rates reduces test', () => {
  const initialState: IForeighRatesState = {
    item: undefined,
  };

  it('should update state after receiving a GET_FOREIGH_RATES action', () => {
    const expectedState: IForeighRatesState = { item: foreighExchangeInstance };

    const mockedForeighExchangeAction: GetForeighRatesAction = {
      type: GET_FOREIGH_RATES,
      payload: foreighExchangeInstance,
    };

    expect(
      ForeighRatesReducer(initialState, mockedForeighExchangeAction)
    ).toEqual(expectedState);
  });
});

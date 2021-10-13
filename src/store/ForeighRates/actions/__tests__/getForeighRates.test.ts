import axios from 'axios';
import { MockStore } from 'redux-mock-store';
import { foreighExchangeInstance } from '../../../../../__tests__/__fixtures__/generateAppStateMock';
import { GENERETATE_FOREIGH_RATES_ERROR, GET_FOREIGH_RATES } from '../../types';
import { getForeighRates } from '../getForeighRates';
import { generateMockStore } from '../../../../../__tests__/__fixtures__/mockStore';
import { IForeighRatesState } from '../../reducer';

jest.mock('axios');
let store: MockStore<{} | IForeighRatesState, any>;

describe('Get user action test', () => {
    const axiosMock = axios as jest.Mocked<typeof axios>;

    beforeEach(() => {
        store = generateMockStore({});
        axiosMock.get.mockClear()
    });

    it('Should dispatch a GET_FOREIGH_RATES action after initialised app', async () => {
      axiosMock.get.mockResolvedValue({ data: foreighExchangeInstance })

        const expectedActions = [
            {
                type: GET_FOREIGH_RATES,
                payload: foreighExchangeInstance,
            },
        ];

        await store.dispatch(getForeighRates());

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(store.getActions()).toEqual(expectedActions);
    });

    it('Should dispatch a GENERETATE_FOREIGH_RATES_ERROR action after an error exception while retrieving FX data', async () => {

        axiosMock.get.mockRejectedValue(new Error());

        const expectedActions = [
            {
                type: GENERETATE_FOREIGH_RATES_ERROR,
                error: new Error(),
            },
        ];

        await store.dispatch(getForeighRates());

        expect(axiosMock.get).toHaveBeenCalledTimes(1);
        expect(store.getActions()).toEqual(expectedActions);
    });
});
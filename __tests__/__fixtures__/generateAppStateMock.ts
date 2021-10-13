import { Currencies, ForeighRates, IForeighRatesPayload } from "../../src/models/ForeighRates";
import { AppState } from "../../src/store";


const mockApiResult: IForeighRatesPayload = {
  base: Currencies.EUR,
  rates: { EUR: '1', GBP: '0.851146', USD: '1.156055' },
};

export const foreighExchangeInstance = new ForeighRates(mockApiResult);

const INITIAL_STATE: AppState = {
  item: foreighExchangeInstance,
};

export const generateAppStateMock = (overrides?: AppState): AppState => ({
  ...INITIAL_STATE,
  ...overrides,
});

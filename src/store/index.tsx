import { createStore, applyMiddleware } from 'redux';
import { ForeighRatesReducer } from './ForeighRates/reducer';

import thunk from 'redux-thunk';

const rootReducer = ForeighRatesReducer;

export default function configureStore() {
  const middlewares = [thunk];
  const middlewareAplication = applyMiddleware(...middlewares);

  return createStore(ForeighRatesReducer, middlewareAplication);
}

export type AppState = ReturnType<typeof rootReducer>;

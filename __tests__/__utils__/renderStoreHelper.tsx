import { JSXElementConstructor, ReactElement } from 'react';
import { Provider } from 'react-redux';
import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import { RenderOptions } from '@testing-library/react';
import { AppState } from '../../src/store';
import { ForeighRatesReducer } from '../../src/store/ForeighRates/reducer';
import { customRender } from './testUtils';

export interface ITestUtilsPayload {
  component: ReactElement<any, string | JSXElementConstructor<any>>;
  rootState: AppState;
  renderOptions?: RenderOptions;
}

const configureStore = (rootState: AppState) => {
  const middlewares = [thunk];
  const middlewareAplication = applyMiddleware(...middlewares);

  return createStore(ForeighRatesReducer, rootState, middlewareAplication);
};

export const renderStoreHelper = ({
  component,
  rootState,
  renderOptions,
}: ITestUtilsPayload) => {
  const wrapper = ({ children }: any) => {
    const store = configureStore(rootState);

    return <Provider store={store}>{children}</Provider>;
  };
  return customRender(component, { wrapper, ...renderOptions });
};

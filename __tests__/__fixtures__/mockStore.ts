import { CombinedState } from 'redux';
import thunk from 'redux-thunk';
import configureStore, { MockStore } from 'redux-mock-store';
import { AppState } from '../../src/store';

export type partialMockStore = Partial<AppState>;

export const generateMockStore = (state: AppState | {}): MockStore<AppState | {}> => {
    const mockStore = configureStore<CombinedState<partialMockStore>>([thunk]);
    const store = mockStore(state);

    store.clearActions();
    return store;
};
import * as Redux from 'react-redux';
import { generateAppStateMock } from '../../../../__tests__/__fixtures__/generateAppStateMock';
import { renderStoreHelper } from '../../../../__tests__/__utils__/renderStoreHelper';

import ExchangeWrapper from '../ExchangeWrapper';

describe('ExchangeWrapper component', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('Should render component without errors', () => {
    const { container } = renderStoreHelper({
      component: <ExchangeWrapper />,
      rootState: generateAppStateMock(),
    });

    expect(container).toMatchSnapshot();
  });

  it('Should call redux hooks on init', () => {
    const useSelectorSpy = jest.spyOn(Redux, 'useSelector');
    const useDispatchSpy = jest.spyOn(Redux, 'useDispatch');

    const { container } = renderStoreHelper({
      component: <ExchangeWrapper />,
      rootState: generateAppStateMock(),
    });

    expect(container).toBeDefined();
    expect(useSelectorSpy).toBeCalled();
    expect(useDispatchSpy).toBeCalled();
  });
});

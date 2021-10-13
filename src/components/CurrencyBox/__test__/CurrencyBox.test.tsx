import { fireEvent } from '@testing-library/react';
import { generateAppStateMock } from '../../../../__tests__/__fixtures__/generateAppStateMock';
import CurrencyBox from '../CurrencyBox';
import { Currencies } from '../../../models/ForeighRates';

import { renderStoreHelper } from '../../../../__tests__/__utils__/renderStoreHelper';

describe('CurrencyBox component', () => {
  const mockCallback = jest.fn();
  const defaultProps = {
    id: 'mock-id',
    currencyRates: [
      { currency: Currencies.EUR, rate: 1 },
      { currency: Currencies.USD, rate: 1 },
    ],
    amount: 10,
    handleAmount: mockCallback,
    selectValue: 0,
    handleSelectChange: mockCallback,
    inputLabel: 'mock-label',
  };

  it('Should render component without errors', () => {
    const { container } = renderStoreHelper({
      component: <CurrencyBox {...defaultProps} />,
      rootState: generateAppStateMock(),
    });

    expect(container).toMatchSnapshot();
  });

  it('Should call amount on input change', () => {
    const { getByDataFx } = renderStoreHelper({
      component: <CurrencyBox {...defaultProps} />,
      rootState: generateAppStateMock(),
    });

    const inputEl = getByDataFx('fx-amount-input');
    expect(inputEl).toBeDefined();

    fireEvent.change(inputEl, { target: { value: '123' } });
    expect(mockCallback).toBeCalled();
  });

  it('Should call currency selection on input change', () => {
    const { getByDataFx } = renderStoreHelper({
      component: <CurrencyBox {...defaultProps} />,
      rootState: generateAppStateMock(),
    });

    const selectEl = getByDataFx('fx-currency-selection');
    expect(selectEl).toBeDefined();

    fireEvent.change(selectEl, { target: { value: '1' } });
    expect(mockCallback).toBeCalled();
  });
});

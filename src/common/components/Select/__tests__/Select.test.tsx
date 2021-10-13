import { render, fireEvent, cleanup } from '@testing-library/react';
import { Currencies } from '../../../../models/ForeighRates';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import Select from '../Select';

describe('Select component', () => {
  const mockOnchange = jest.fn();
  const defaultProps = {
    name: 'test-select',
    value: 0,
    onChange: mockOnchange,
    items: [
      { currency: Currencies.EUR, rate: 1 },
      { currency: Currencies.USD, rate: 2 },
    ],
  };

  afterEach(cleanup);

  it('Should render component without errors', () => {
    const { container } = render(<Select {...defaultProps} />);

    expect(container).toMatchSnapshot();
  });

  it('Should display and change options', () => {
    const { getByDataFx } = customRender(<Select {...defaultProps} />);

    const selectEl = getByDataFx('fx-currency-selection');
    expect(selectEl).toBeDefined();

    fireEvent.change(selectEl, { target: { value: '1' } });

    expect(mockOnchange).toHaveBeenCalled();
  });
});

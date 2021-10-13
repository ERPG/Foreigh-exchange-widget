import { cleanup, render, fireEvent } from '@testing-library/react';
import { ChangeEvent } from 'react';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import Input from '../Input';

describe('Input component', () => {
  afterEach(cleanup);

  it('Should render component without errors', () => {
    const { container } = render(
      <Input label="" name="test-input" value={0} onChange={() => ''} />
    );

    expect(container).toMatchSnapshot();
  });

  it('Should trigger a change of value when entering data', () => {
    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
      expect(event.target.value).toBe('test');
    };

    const { getByDataFx } = customRender(
      <Input label="" name="test-input" value={0} onChange={handleChange} />
    );

    const inputEl = getByDataFx('fx-amount-input');
    expect(inputEl).toBeDefined();

    fireEvent.change(inputEl, { target: { value: 'test' } });
  });
});

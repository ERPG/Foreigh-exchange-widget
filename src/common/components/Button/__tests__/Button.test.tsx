import { render, fireEvent } from '@testing-library/react';
import { customRender } from '../../../../../__tests__/__utils__/testUtils';
import Button from '../Button';

describe('Button component', () => {
  it('Should render component without errors', () => {
    const { container } = render(
      <Button name="test-button" onClick={() => ''}>
        Test button
      </Button>
    );

    expect(container).toMatchSnapshot();
  });

  it('Should handle click function', () => {
    const onClick = jest.fn();
    const { getByDataFx } = customRender(
      <Button name="test-button" onClick={onClick}>
        Test button
      </Button>
    );

    const buttonEl = getByDataFx('fx-button');
    expect(buttonEl).toBeDefined();

    fireEvent.click(buttonEl);

    expect(onClick).toHaveBeenCalledTimes(1);
  });
});



import { generateAppStateMock } from '../../../__tests__/__fixtures__/generateAppStateMock';
import { renderStoreHelper } from '../../../__tests__/__utils__/renderStoreHelper';
import App from '../App';

describe('App component', () => {
  it('Should render component without errors', () => {
    const { container } = renderStoreHelper({
      component: <App />,
      rootState: generateAppStateMock(),
    });

    expect(container).toMatchSnapshot();
  });
});

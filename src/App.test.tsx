import React from 'react';
import { mount } from 'enzyme';

import App from './App';
import { MemoryRouter } from 'react-router';
import { getMockProvider } from './utils/test';

describe('<App />', () => {
  it('matches snapshot', () => {
    const { MockProvider } = getMockProvider();
    const wrapper = mount(
      <MockProvider>
        <MemoryRouter initialEntries={[{ pathname: '/rates', key: 'ratesKey' }]}>
          <App />
        </MemoryRouter>
      </MockProvider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

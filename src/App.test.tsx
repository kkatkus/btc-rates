import React from 'react';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';
import configureStore from 'redux-mock-store';

import App from './App';
import { MemoryRouter } from 'react-router';
import { ThemeProvider } from 'emotion-theming';
import * as themes from './shared/styles';

const mockStore = configureStore([]);

describe('<App />', () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      rates: {
        loading: false,
        btc: 1,
        currencies: [],
        availableCurrencies: [],
        rates: {},
      },
      settings: {
        theme: 'light',
      },
    });
  });

  it('matches snapshot', () => {
    const wrapper = mount(
      <Provider store={store}>
        <ThemeProvider theme={themes['light']}>
          <MemoryRouter initialEntries={[{ pathname: '/rates', key: 'ratesKey' }]}>
            <App />
          </MemoryRouter>
        </ThemeProvider>
      </Provider>,
    );
    expect(wrapper).toMatchSnapshot();
  });
});

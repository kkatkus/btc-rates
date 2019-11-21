import React from 'react';
import { mount } from 'enzyme';
import { getMockProvider } from '../../../utils/test';

import Currencies from './Currencies';
import Currency from './Currency';

import Big from 'big.js';

describe('<Currencies />', () => {
  it('should display no currencies', () => {
    const { MockProvider } = getMockProvider({});
    const wrapper = mount(
      <MockProvider>
        <Currencies />
      </MockProvider>,
    );
    expect(wrapper.find(Currency)).toHaveLength(0);
  });

  it('should display 3 currencies', () => {
    const { MockProvider } = getMockProvider({
      rates: {
        currencies: ['EUR', 'GBP'],
        rates: {
          EUR: { code: 'EUR', symbol: 'e', rate: new Big(1.111), description: 'desc eur' },
          GBP: { code: 'GBP', symbol: 'g', rate: new Big(1.211), description: 'desc gbp' },
        },
      },
    });
    const wrapper = mount(
      <MockProvider>
        <Currencies />
      </MockProvider>,
    );
    expect(wrapper.find(Currency)).toHaveLength(2);
  });

  it('should call removeCurrency action', () => {
    const { MockProvider, store } = getMockProvider({
      rates: {
        currencies: ['EUR', 'GBP', 'USD'],
        rates: {
          EUR: { code: 'EUR', symbol: 'e', rate: new Big(1.111), description: 'desc eur' },
          GBP: { code: 'GBP', symbol: 'g', rate: new Big(1.211), description: 'desc gbp' },
          USD: { code: 'USD', symbol: 'u', rate: new Big(1.131), description: 'desc usd' },
        },
      },
    });
    const wrapper = mount(
      <MockProvider>
        <Currencies />
      </MockProvider>,
    );
    wrapper
      .find('.remove-currency')
      .first()
      .simulate('click');
    expect(store.getActions()).toEqual([{ payload: 'EUR', type: '/rates/currency/REMOVE' }]);
  });

  it('should call removeCurrency action', () => {
    const { MockProvider, store } = getMockProvider({
      rates: {
        currencies: ['EUR', 'GBP', 'USD'],
        rates: {
          EUR: { code: 'EUR', symbol: 'e', rate: new Big(1.111), description: 'desc eur' },
          GBP: { code: 'GBP', symbol: 'g', rate: new Big(1.211), description: 'desc gbp' },
          USD: { code: 'USD', symbol: 'u', rate: new Big(1.131), description: 'desc usd' },
        },
      },
    });
    const wrapper = mount(
      <MockProvider>
        <Currencies />
      </MockProvider>,
    );
    wrapper
      .find('.remove-currency')
      .last()
      .simulate('click');
    expect(store.getActions()).toEqual([{ payload: 'USD', type: '/rates/currency/REMOVE' }]);
  });
});

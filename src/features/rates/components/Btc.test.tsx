import React from 'react';
import { mount } from 'enzyme';
import { getMockProvider } from '../../../utils/test';

import Btc from './Btc';

describe('<Btc />', () => {
  it('should render input with correct value', () => {
    const { MockProvider } = getMockProvider({ rates: { btc: 2 } });
    const wrapper = mount(
      <MockProvider>
        <Btc />
      </MockProvider>,
    );
    expect(wrapper.find('input').prop('value')).toEqual(2);
  });

  it('should fire updateBtc when input valid', () => {
    const { MockProvider, store } = getMockProvider({ rates: { btc: 2 } });
    const wrapper = mount(
      <MockProvider>
        <Btc />
      </MockProvider>,
    );
    wrapper.find('input').simulate('change', { target: { value: '1' } });
    expect(store.getActions()).toEqual([{ payload: '1', type: '/rates/btc/UPDATE' }]);
  });

  it('should not fire updateBtc when input invalid', () => {
    const { MockProvider, store } = getMockProvider({ rates: { btc: '1' } });
    const wrapper = mount(
      <MockProvider>
        <Btc />
      </MockProvider>,
    );
    wrapper.find('input').simulate('change', { target: { value: 'xxx' } });
    expect(store.getActions()).toHaveLength(0);
  });
});

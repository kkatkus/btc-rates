import React from 'react';
import { mount } from 'enzyme';

import Add from './Add';
import { getMockProvider } from '../../../utils/test';

describe('<Add />', () => {
  it('should render no currencies', () => {
    const { MockProvider } = getMockProvider({});
    const wrapper = mount(
      <MockProvider>
        <Add />
      </MockProvider>,
    );
    expect(wrapper.text()).toEqual('Available Currencies:No currencies.');
    expect(
      wrapper
        .find('.no-currency')
        .first()
        .hasClass('show'),
    ).toBeTruthy();
  });

  it('should render 1 currency EUR', () => {
    const { MockProvider } = getMockProvider({ rates: { availableCurrencies: ['EUR'] } });
    const wrapper = mount(
      <MockProvider>
        <Add />
      </MockProvider>,
    );
    expect(wrapper.text()).toEqual('Available Currencies:+ EURNo currencies.');
    expect(
      wrapper
        .find('.no-currency')
        .first()
        .hasClass('hide'),
    ).toBeTruthy();
  });

  //expect(wrapper.find('span#balance-error')).toHaveLength(0);
});
